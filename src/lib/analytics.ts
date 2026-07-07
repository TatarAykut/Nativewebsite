/**
 * Minimal analytics helper.
 *
 * Supports Google Analytics (gtag) via the VITE_GA_ID env var.
 * To enable: set VITE_GA_ID=G-XXXXXXXXXX in .env
 *
 * For Plausible or other providers, swap the pageview/event implementations.
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

let initialized = false;

export function initAnalytics(): void {
  if (initialized || !GA_ID) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { send_page_view: false });
  `;
  document.head.appendChild(inline);
}

export function pageview(url: string): void {
  if (!GA_ID) return;
  window.gtag?.("event", "page_view", { page_location: url });
}

export function event(
  action: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!GA_ID) return;
  window.gtag?.("event", action, params);
}
