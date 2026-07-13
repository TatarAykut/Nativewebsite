import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initAnalytics } from "./lib/analytics.ts";
import "./styles/index.css";

declare global {
  interface Window {
    /** Route this document was prerendered for; injected by scripts/ssg.mjs. */
    __SSG_PATH__?: string;
  }
}

initAnalytics();

const container = document.getElementById("root")!;

// Hydrate only when this document's markup was generated for the route we are
// actually on. Unknown paths (/admin, 404s) are served the home page's HTML by
// the SPA fallback, so hydrating would compare home's markup against a different
// page and force React to rebuild the tree anyway — mount cleanly instead.
const isPrerenderedForThisRoute =
  container.hasChildNodes() && window.__SSG_PATH__ === window.location.pathname;

if (isPrerenderedForThisRoute) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
