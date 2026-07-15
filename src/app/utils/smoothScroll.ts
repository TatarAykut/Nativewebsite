/**
 * Smooth-scroll to a target element.
 *
 * Uses the browser's *native* smooth scroll (compositor-driven) rather than a
 * hand-rolled requestAnimationFrame loop. A JS rAF loop that calls
 * window.scrollTo() every frame runs on the main thread, so it competes with
 * React renders and the page's `position: sticky` bars re-laying-out each frame
 * — which showed up as visibly janky ("stepping") scrolling on the Features
 * page. Native smooth scroll runs off the main thread and stays smooth under load.
 *
 * Respects the element's computed `scroll-margin-top` so Tailwind utilities
 * like `scroll-mt-36` are honoured automatically, and honours the user's
 * reduced-motion preference by jumping instantly.
 */

const DEFAULT_OFFSET = 80; // px — navbar clearance fallback

export function smoothScrollTo(target: HTMLElement): void {
  // Respect the element's scroll-margin-top (set via scroll-mt-* classes)
  const style = getComputedStyle(target);
  const scrollMarginTop = parseFloat(style.scrollMarginTop) || DEFAULT_OFFSET;

  const targetY = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top: targetY, behavior: prefersReduced ? "auto" : "smooth" });
}

/**
 * Global click handler for anchor links.
 * Intercept clicks on <a href="#..."> and use custom smooth scroll.
 */
export function handleAnchorClick(e: MouseEvent): void {
  const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;

  const targetId = href.slice(1); // remove leading #
  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();
  smoothScrollTo(target);
}
