/**
 * Custom smooth scroll with configurable duration.
 * Uses easeInOutCubic easing for natural deceleration.
 *
 * Duration is intentionally longer (~900ms) than the browser default (~300-500ms)
 * to create a calmer, more deliberate scroll feel.
 */

const DEFAULT_DURATION = 550; // ms — calm but responsive (900ms felt sluggish)
const DEFAULT_OFFSET = 80;    // px — navbar clearance fallback

function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Smooth-scroll to a target element.
 * Respects the element's computed `scroll-margin-top` so Tailwind utilities
 * like `scroll-mt-36` are honoured automatically.
 */
export function smoothScrollTo(
  target: HTMLElement,
  options?: { duration?: number }
): void {
  const duration = options?.duration ?? DEFAULT_DURATION;

  // Respect the element's scroll-margin-top (set via scroll-mt-* classes)
  const style = getComputedStyle(target);
  const scrollMarginTop = parseFloat(style.scrollMarginTop) || DEFAULT_OFFSET;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
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
