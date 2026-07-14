import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { handleAnchorClick, smoothScrollTo } from "../utils/smoothScroll";

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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Hash route (e.g. "/#get-app" from the Navbar CTA, on-page or cross-page):
    // wait for the target section to mount, then smooth-scroll to it.
    if (hash) {
      const id = hash.slice(1);
      // Track the timeout too: the rAF callback fires within ~16ms, so by the
      // time a rapid second navigation runs this cleanup the rAF is already done
      // and cancelAnimationFrame alone cannot stop the timer it scheduled —
      // leaving a stale scroll to the previous hash.
      let timeout: ReturnType<typeof setTimeout> | undefined;
      const raf = requestAnimationFrame(() => {
        timeout = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) smoothScrollTo(el);
        }, 60);
      });
      return () => {
        cancelAnimationFrame(raf);
        if (timeout !== undefined) clearTimeout(timeout);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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
