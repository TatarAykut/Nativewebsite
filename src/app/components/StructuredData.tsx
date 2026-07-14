/**
 * Per-page BreadcrumbList JSON-LD.
 *
 * The Organization / SoftwareApplication / WebSite graphs live in the STATIC
 * index.html <head> — present on every page, including for no-JS crawlers.
 * Emitting them here as well duplicated all three on every page, so this
 * component now only adds the per-page BreadcrumbList that the static block
 * can't provide (home has no breadcrumb → renders nothing).
 *
 * NOTE: renders a raw <script> — it must be placed INSIDE a <Helmet> (the SEO
 * component handles that), never directly in the JSX body.
 */

const BASE_URL = "https://nativeway.app";

interface StructuredDataProps {
  path?: string;
}

export function StructuredData({ path = "" }: StructuredDataProps) {
  const breadcrumb = path && path !== "/" ? buildBreadcrumb(path) : null;
  if (!breadcrumb) return null;

  // dangerouslySetInnerHTML, not children: as children React HTML-escapes the
  // JSON (" → &quot;), but browsers parse <script> content as raw text and never
  // decode entities — so the hydrated DOM would hold a literal "&quot;" where
  // React expects '"'. That mismatch made React discard and rebuild every page
  // that renders a breadcrumb (i.e. every page except home).
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

/** Build a BreadcrumbList for the current path. */
function buildBreadcrumb(path: string) {
  const segments = path
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);

  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ];

  let accumulated = "";
  segments.forEach((segment, i) => {
    accumulated += `/${segment}`;
    items.push({
      "@type": "ListItem" as const,
      position: i + 2,
      name: segmentToLabel(segment),
      item: `${BASE_URL}${accumulated}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function segmentToLabel(seg: string): string {
  const map: Record<string, string> = {
    about: "About",
    features: "Features",
    "how-it-works": "How It Works",
    values: "Values",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
  };
  return map[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
