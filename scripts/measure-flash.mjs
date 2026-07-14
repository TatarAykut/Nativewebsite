/**
 * Measures the perceived "flash" on load.
 *
 * Uses CDP's screencast, which streams the frames the compositor ACTUALLY
 * paints — page.screenshot() blocks during navigation and would miss exactly the
 * window we care about. A flash is a brightness swing between the first painted
 * frame and the settled page; frames land in .flash-frames/ for the Python step
 * to measure.
 *
 * Usage: node scripts/measure-flash.mjs [--cached] [--slow]
 */
import puppeteer from "puppeteer-core";
import http from "node:http";
import zlib from "node:zlib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(ROOT, ".flash-frames");
const PORT = 4195;
const MIME = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml" };

const CACHED = process.argv.includes("--cached");
const SLOW = process.argv.includes("--slow");

const server = http.createServer((q, r) => {
  const u = new URL(q.url, `http://l:${PORT}`);
  let fp = path.join(DIST, u.pathname);
  if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
    const i = path.join(fp, "index.html");
    fp = fs.existsSync(i) ? i : path.join(DIST, "index.html");
  }
  try {
    const type = MIME[path.extname(fp)] || "application/octet-stream";
    let body = fs.readFileSync(fp);
    // Compress text assets like a real host does, or the measurement is an
    // artifact of this harness rather than of the site.
    const compressible = /html|javascript|css|svg|json/.test(type);
    if (compressible && /gzip/.test(q.headers["accept-encoding"] || "")) {
      body = zlib.gzipSync(body);
      r.writeHead(200, { "Content-Type": type, "Content-Encoding": "gzip" });
    } else {
      r.writeHead(200, { "Content-Type": type });
    }
    r.end(body);
  } catch { r.writeHead(404); r.end(); }
});
await new Promise((r) => server.listen(PORT, r));

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.setCacheEnabled(true);

// The site is dark-first and that is where the hero photo matters: the page
// paints dark navy, then a bright photograph lands on top of it. Headless Chrome
// defaults to light, which hides exactly the effect we are hunting.
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);

if (CACHED) {
  // Warm the HTTP cache so this behaves like a real refresh, not a first visit.
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 600));
}

const client = await page.createCDPSession();

if (SLOW) {
  await client.send("Network.enable");
  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 60,
    downloadThroughput: (4 * 1024 * 1024) / 8,
    uploadThroughput: (1024 * 1024) / 8,
  });
}

await client.send("Page.enable");

let n = 0;
let t0 = 0;
client.on("Page.screencastFrame", async ({ data, sessionId, metadata }) => {
  if (!t0) t0 = metadata.timestamp;
  const ms = Math.round((metadata.timestamp - t0) * 1000);
  fs.writeFileSync(
    path.join(OUT, `${String(n++).padStart(3, "0")}_${String(Math.max(ms, 0)).padStart(5, "0")}.jpg`),
    Buffer.from(data, "base64"),
  );
  try { await client.send("Page.screencastFrameAck", { sessionId }); } catch { /* stopped */ }
});

await client.send("Page.startScreencast", { format: "jpeg", quality: 80, everyNthFrame: 1 });

await page.goto(`http://localhost:${PORT}/`, { waitUntil: "load" });
await new Promise((r) => setTimeout(r, 2000));

try { await client.send("Page.stopScreencast"); } catch { /* ignore */ }
await browser.close();
server.close();

console.log(`${CACHED ? "CACHED (refresh)" : "COLD"}${SLOW ? " + 4Mbps" : ""}: ${n} painted frames`);
