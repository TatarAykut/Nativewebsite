/**
 * Verifies the prerendered HTML hydrates cleanly — i.e. React reuses the
 * existing DOM instead of tearing it down and rebuilding it (the "flash").
 *
 * Two independent signals:
 *  1. React logs a hydration error to console.error on any mismatch.
 *  2. A MutationObserver installed BEFORE the bundle runs watches #root. A
 *     clean hydration mutates almost nothing; a createRoot-style wipe removes
 *     every child node at once. We record the largest single removal batch.
 */
import puppeteer from "puppeteer-core";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = 4199;
const MIME = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml" };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let fp = path.join(DIST, url.pathname);
  if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
    const idx = path.join(fp, "index.html");
    fp = fs.existsSync(idx) ? idx : path.join(DIST, "index.html");
  }
  try {
    res.writeHead(200, { "Content-Type": MIME[path.extname(fp)] || "application/octet-stream" });
    res.end(fs.readFileSync(fp));
  } catch { res.writeHead(404); res.end("nf"); }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox"],
});

// Each scenario is a distinct visitor; all must hydrate without a wipe.
const SCENARIOS = [
  { name: "fresh visitor, dark OS", lang: "en-US", scheme: "dark", storage: {} },
  { name: "fresh visitor, light OS", lang: "en-US", scheme: "light", storage: {} },
  { name: "Turkish browser", lang: "tr-TR", scheme: "dark", storage: {} },
  { name: "returning: light theme saved", lang: "en-US", scheme: "dark", storage: { "nativeway-theme": "light" } },
  { name: "returning: tr + light + consented", lang: "en-US", scheme: "light", storage: { "nativeway-theme": "light", "nativeway-lang": "tr", "nativeway-cookie-consent": "true" } },
  { name: "Chinese browser, dark", lang: "zh-CN", scheme: "dark", storage: {} },
];

// Every prerendered route must hydrate too, not just the home page.
const ROUTES = ["/", "/about", "/features", "/how-it-works", "/values", "/privacy", "/terms", "/cookies"];
for (const r of ROUTES.slice(1)) {
  SCENARIOS.push({ name: `route ${r}`, lang: "tr-TR", scheme: "light", storage: {}, path: r });
}

let allPass = true;

for (const s of SCENARIOS) {
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

  await page.setExtraHTTPHeaders({ "Accept-Language": s.lang });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: s.scheme }]);

  await page.evaluateOnNewDocument((lang, storage) => {
    Object.defineProperty(navigator, "language", { get: () => lang });
    Object.defineProperty(navigator, "languages", { get: () => [lang] });
    try {
      localStorage.clear();
      for (const [k, v] of Object.entries(storage)) localStorage.setItem(k, v);
    } catch {}

    // Install the observer before React boots.
    window.__wipe = 0;
    window.__removed = 0;
    new MutationObserver((records) => {
      for (const r of records) {
        if (r.target.id === "root" && r.removedNodes.length) {
          window.__wipe = Math.max(window.__wipe, r.removedNodes.length);
        }
        window.__removed += r.removedNodes.length;
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }, s.lang, s.storage);

  await page.goto(`http://localhost:${PORT}${s.path || "/"}`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  const res = await page.evaluate(() => ({
    wipe: window.__wipe,
    htmlLang: document.documentElement.lang,
    isLight: document.documentElement.classList.contains("light"),
    // What language is actually on screen?
    heading: document.querySelector("h1")?.innerText.replace(/\n/g, " ").slice(0, 42),
  }));

  const hydrationErrors = errors.filter((e) =>
    /hydrat|did not match|Minified React error #41[08]|#423|#425|#418/i.test(e),
  );

  const wiped = res.wipe > 0;
  const ok = !wiped && hydrationErrors.length === 0;
  if (!ok) allPass = false;

  console.log(`${ok ? "✅" : "❌"} ${s.name.padEnd(30)} lang=${res.htmlLang} theme=${res.isLight ? "light" : "dark"} rootWipe=${res.wipe} hydrationErrs=${hydrationErrors.length}`);
  console.log(`   h1: "${res.heading}"`);
  if (hydrationErrors.length) console.log("   ⚠ " + hydrationErrors[0].slice(0, 220));

  await page.close();
}

await browser.close();
server.close();
console.log(allPass ? "\n🎉 ALL SCENARIOS HYDRATE CLEANLY — no DOM wipe, no flash." : "\n💥 FAILURES ABOVE");
process.exit(allPass ? 0 : 1);
