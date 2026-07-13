/**
 * Functional smoke test against the built site: does the app actually work after
 * hydration — navigation, theme toggle, language switch, waitlist validation?
 */
import puppeteer from "puppeteer-core";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = 4197;
const MIME = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml" };

const server = http.createServer((req, res) => {
  const u = new URL(req.url, `http://localhost:${PORT}`);
  let fp = path.join(DIST, u.pathname);
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

const page = await browser.newPage();

// Pin the locale: this suite asserts on English copy, and detectLanguage()
// otherwise follows the host machine's browser language (Turkish here).
await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
await page.evaluateOnNewDocument(() => {
  Object.defineProperty(navigator, "language", { get: () => "en-US" });
  Object.defineProperty(navigator, "languages", { get: () => ["en-US", "en"] });
});

const errors = [];
page.on("console", (m) => { if (m.type() === "error" && !/CORS|ERR_FAILED|Failed to load resource/i.test(m.text())) errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

const checks = [];
const check = (name, pass, detail = "") => { checks.push({ name, pass, detail }); };

await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 800));

// 1. Theme toggle
const themeBefore = await page.evaluate(() => document.documentElement.classList.contains("light"));
await page.click('button[aria-label="Toggle theme"]');
await new Promise((r) => setTimeout(r, 300));
const themeAfter = await page.evaluate(() => document.documentElement.classList.contains("light"));
check("theme toggle flips the theme", themeBefore !== themeAfter, `${themeBefore} -> ${themeAfter}`);

const persisted = await page.evaluate(() => localStorage.getItem("nativeway-theme"));
check("theme persists to localStorage", persisted === (themeAfter ? "light" : "dark"), `stored=${persisted}`);

// 2. Language switch
await page.click('button[aria-label^="Select language"]');
await new Promise((r) => setTimeout(r, 250));
const switched = await page.evaluate(() => {
  const btn = [...document.querySelectorAll("button")].find((b) => b.textContent?.includes("Türkçe"));
  if (!btn) return false;
  btn.click();
  return true;
});
await new Promise((r) => setTimeout(r, 500));
const h1 = await page.evaluate(() => document.querySelector("h1")?.innerText || "");
check("language switch renders Turkish", switched && /seyahat/i.test(h1), h1.slice(0, 38).replace(/\n/g, " "));
check("<html lang> follows language", (await page.evaluate(() => document.documentElement.lang)) === "tr");

// 3. Client-side navigation
await page.evaluate(() => {
  const link = [...document.querySelectorAll("a")].find((a) => a.getAttribute("href") === "/features");
  link?.click();
});
await new Promise((r) => setTimeout(r, 700));
check("SPA nav to /features works", await page.evaluate(() => location.pathname === "/features" && !!document.querySelector("h1")));

// 4. Waitlist form validation (no network needed). Clear the language the
// previous step persisted so the error copy comes back in English.
await page.evaluate(() => localStorage.clear());
await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 600));
const formResult = await page.evaluate(async () => {
  const input = document.querySelector('#get-app input[type="email"], #get-app input');
  const form = input?.closest("form");
  if (!input || !form) return { found: false };
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  setter.call(input, "not-an-email");
  input.dispatchEvent(new Event("input", { bubbles: true }));
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  await new Promise((r) => setTimeout(r, 300));
  return { found: true, error: document.body.innerText.includes("valid email address") };
});
check("waitlist form rejects an invalid email", formResult.found && formResult.error, formResult.found ? "" : "form not found");

// 5. No unexpected console errors
check("no console errors", errors.length === 0, errors[0]?.slice(0, 90) ?? "");

await browser.close();
server.close();

let pass = true;
for (const c of checks) {
  if (!c.pass) pass = false;
  console.log(`${c.pass ? "✅" : "❌"} ${c.name}${c.detail ? `  — ${c.detail}` : ""}`);
}
console.log(pass ? "\n🎉 SMOKE TEST PASSED" : "\n💥 SMOKE TEST FAILED");
process.exit(pass ? 0 : 1);
