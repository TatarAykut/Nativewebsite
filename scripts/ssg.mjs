/**
 * NativeWay — Static Site Generation (post-build)
 *
 * Renders every public route to static HTML with React's own server renderer,
 * so search engines and AI crawlers (GPTBot, CCBot, Claude-Web, …) receive the
 * complete page instead of an empty <div id="root">.
 *
 * Replaces the previous headless-Chrome prerenderer, which had two fatal flaws:
 *
 *   1. It needed a Chrome binary, which the Vercel build image does not have —
 *      so it silently skipped in CI and the SEO HTML never actually shipped.
 *   2. It captured the browser's serialization of the live DOM. The browser
 *      normalizes inline styles through the CSSOM (`font-weight: 600;`) while
 *      React emits `font-weight:600`. React saw a mismatch, threw the entire
 *      prerendered tree away, and rebuilt it — the "page flashing" on load.
 *
 * renderToString produces React's own markup, so it hydrates by construction.
 *
 * Usage:  node scripts/ssg.mjs     (runs automatically via `postbuild`)
 * Prereq: vite build               (client bundle must exist in dist/)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_OUT = path.join(ROOT, "node_modules/.cache/nw-ssg");

/** Routes rendered to static HTML. Keep in sync with src/app/routes.tsx. */
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

const HEAD_START = "<!-- SSG_HEAD:START";
const HEAD_END = "<!-- SSG_HEAD:END -->";

/**
 * Swap the template's default <head> tags for the ones this page's <SEO />
 * component produced, so every route ships its own title/description/canonical
 * rather than the home page's.
 */
function replaceHead(template, head) {
  if (!head) return template;

  const start = template.indexOf(HEAD_START);
  const end = template.indexOf(HEAD_END);
  if (start === -1 || end === -1) {
    throw new Error("SSG_HEAD markers missing from index.html — cannot inject per-page <head>.");
  }
  return template.slice(0, start) + head + template.slice(end + HEAD_END.length);
}

async function ssg() {
  console.log("\n⚛  NativeWay SSG — rendering routes with react-dom/server\n");

  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

  // 1. Build the server bundle. Separate from the client build so the client
  //    bundle in dist/ (already built) is not touched.
  console.log("  Building SSR bundle…");
  await build({
    root: ROOT,
    logLevel: "error",
    build: {
      ssr: path.join(ROOT, "src/entry-server.tsx"),
      outDir: SSR_OUT,
      emptyOutDir: true,
    },
  });

  const { render } = await import(path.join(SSR_OUT, "entry-server.js"));

  let ok = 0;
  for (const route of ROUTES) {
    try {
      const { html, head } = await render(route.path);

      let page = replaceHead(template, head);

      // Tell the client which route this document was generated for, so
      // src/main.tsx only hydrates when the markup actually matches the URL.
      page = page.replace(
        '<div id="root"></div>',
        `<script>window.__SSG_PATH__=${JSON.stringify(route.path)}</script>\n    <div id="root">${html}</div>`,
      );

      const outPath =
        route.path === "/"
          ? path.join(DIST, "index.html")
          : path.join(DIST, route.path.replace(/^\//, ""), "index.html");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, page);

      const kb = (Buffer.byteLength(page) / 1024).toFixed(0);
      console.log(`  ✅ ${route.label.padEnd(18)} → ${path.relative(DIST, outPath).padEnd(24)} ${kb} kB`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${route.label}: ${err.message}`);
    }
  }

  console.log(`\n  ✓ ${ok}/${ROUTES.length} routes prerendered`);
  if (ok !== ROUTES.length) {
    console.error("  ✗ SSG incomplete — failing the build rather than shipping empty HTML.\n");
    process.exit(1);
  }
  console.log("  ✓ Crawlers receive full page content, and it hydrates cleanly.\n");
}

ssg().catch((err) => {
  console.error("\n  ✗ SSG failed:", err);
  process.exit(1);
});
