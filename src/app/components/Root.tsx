import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { handleAnchorClick } from "../utils/smoothScroll";

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#f07b22] focus:text-[var(--nw-accent-fg)] focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      style={{ fontWeight: 600 }}
    >
      Skip to main content
    </a>
  );
}

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Intercept anchor-link clicks for custom smooth scroll (slower than browser default)
  useEffect(() => {
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--nw-bg)] overflow-x-hidden"
      role="document"
    >
      <SkipLink />
      <Navbar />
      <main id="main-content" aria-label="Main content">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
