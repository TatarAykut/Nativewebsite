/**
 * NativeWay — Post-build Prerender Script
 *
 * Spins up the built SPA in a headless browser, visits every route, and saves the
 * fully-rendered HTML. This gives AI crawlers (GPTBot, CCBot, Claude-Web, etc.)
 * and search engines the COMPLETE page content — not just an empty <div id="root">.
 *
 * Usage:  node scripts/prerender.mjs
 * Prereq: pnpm build  (must run first)
 */

import puppeteer from "puppeteer-core";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ── Config ──────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 4173; // default vite preview port

/**
 * Locate a Chrome/Chromium executable across platforms.
 * puppeteer-core does NOT ship a browser, so we must find one. On a CI/Linux
 * host without Chrome we return null and the caller SKIPS prerender gracefully
 * (an SEO enhancement must never fail the production build).
 */
function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",       // Linux
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // Windows
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) || null;
}

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/features", label: "Features" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/values", label: "Values" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Service" },
  { path: "/cookies", label: "Cookie Policy" },
];

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".csv": "text/csv",
};

// ── Static File Server ──────────────────────────────────────────────

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      let filePath = path.join(DIST, url.pathname);

      // SPA fallback: if path doesn't map to a real file, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST, "index.html");
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || "application/octet-stream";

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server → http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// ── Prerender ───────────────────────────────────────────────────────

async function prerender() {
  console.log("\n🕸  NativeWay Prerender — generating static HTML for all routes\n");

  // 0. Resolve a browser; skip (not fail) the build if none is available.
  const chromePath = findChrome();
  if (!chromePath) {
    console.warn(
      "  ⚠  No Chrome/Chromium found — skipping prerender.\n" +
      "     The SPA still deploys fine (crawlers get the SPA-fallback HTML).\n" +
      "     To enable prerendering set PUPPETEER_EXECUTABLE_PATH to a Chrome binary.\n"
    );
    return;
  }

  // 1. Start server
  const server = await startServer();

  // 2. Launch headless Chrome
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    let success = 0;

    for (const route of ROUTES) {
      const page = await browser.newPage();

      try {
        // Navigate and wait until network is idle (JS bundles loaded + React rendered)
        await page.goto(`http://localhost:${PORT}${route.path}`, {
          waitUntil: "networkidle0",
          timeout: 30_000,
        });

        // Extra settle time for lazy images, fonts, and fade-in animations
        await page.waitForSelector("#root", { timeout: 10_000 });
        await new Promise((r) => setTimeout(r, 1500));

        const html = await page.content();

        // Determine output path
        let outPath;
        if (route.path === "/") {
          outPath = path.join(DIST, "index.html");
        } else {
          const dir = path.join(DIST, route.path.replace(/^\//, ""));
          fs.mkdirSync(dir, { recursive: true });
          outPath = path.join(dir, "index.html");
        }

        fs.writeFileSync(outPath, html);
        console.log(`  ✅ ${route.label.padEnd(18)} → ${path.relative(DIST, outPath)}`);
        success++;
      } catch (err) {
        console.error(`  ❌ ${route.label}: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    console.log(`\n  ✓ ${success}/${ROUTES.length} pages prerendered successfully`);
    if (success === ROUTES.length) {
      console.log("  ✓ All AI crawlers can now see full page content!\n");
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  // Never fail the build over a prerender (SEO enhancement) error — the SPA is
  // fully functional without it. Warn loudly and exit 0 so deploy proceeds.
  console.warn("  ⚠  Prerender skipped due to error:", err.message);
  process.exit(0);
});
