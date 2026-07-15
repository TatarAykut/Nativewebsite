/**
 * Smooth-scroll to a target element.
 *
 * Native `scroll-behavior: smooth` is buttery but its speed is fixed by the
 * browser and feels too fast. A hand-rolled rAF loop lets us slow it down — but
 * the earlier easeInOutCubic version janked ("kasa kasa"): its velocity starts
 * at zero, so the first frames move sub-pixel amounts that round to the same
 * integer scroll position, freezing for a few frames then jumping.
 *
 * This version avoids that two ways:
 *  - easeOutCubic starts at full velocity (no sub-pixel stepping at the start)
 *    and decelerates into a natural stop.
 *  - the duration scales with distance, so short hops finish quickly instead of
 *    crawling through a long sub-pixel tail.
 *
 * Respects the element's computed `scroll-margin-top` (so `scroll-mt-*` classes
 * are honoured) and the user's reduced-motion preference (jumps instantly).
 */

const DEFAULT_OFFSET = 80; // px — navbar clearance fallback
const MIN_DURATION = 350;  // ms — floor for short hops
const MAX_DURATION = 750;  // ms — ceiling for long-page scrolls
const MS_PER_PX = 0.55;    // ↑ = calmer/slower, ↓ = snappier

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function smoothScrollTo(target: HTMLElement): void {
  // Respect the element's scroll-margin-top (set via scroll-mt-* classes)
  const style = getComputedStyle(target);
  const scrollMarginTop = parseFloat(style.scrollMarginTop) || DEFAULT_OFFSET;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - scrollMarginTop;
  const distance = targetY - startY;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || distance === 0) {
    window.scrollTo(0, targetY);
    return;
  }

  const duration = Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, Math.abs(distance) * MS_PER_PX),
  );
  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
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
