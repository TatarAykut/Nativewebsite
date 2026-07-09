/**
 * Comprehensive JSON-LD structured data for NativeWay.
 *
 * Interconnected schemas — every entity references others via @id so search
 * engines and LLM crawlers (GPTBot, Claude, Perplexity, Google AI Overviews)
 * can fully map the application, the organization behind it, and the website
 * that represents them.
 *
 * NOTE: This component renders a raw <script> tag — it should be placed
 * INSIDE a <Helmet> component (never directly in JSX body). The SEO
 * component handles this wrapping.
 */

const BASE_URL = "https://nativeway.app";
const ORG_ID = "https://nativeway.app/#organization";
const APP_ID = "https://nativeway.app/#application";
const WEBSITE_ID = "https://nativeway.app/#website";

interface StructuredDataProps {
  path?: string;
}

export function StructuredData({ path = "" }: StructuredDataProps) {
  const url = `${BASE_URL}${path}`;

  // ── Founders (Person) ────────────────────────────────────────────
  const founders = [
    {
      "@type": "Person",
      "@id": `${ORG_ID}/founder/ahmet-semih-dikilitas`,
      name: "Ahmet Semih Dikilitaş",
      givenName: "Ahmet Semih",
      familyName: "Dikilitaş",
      jobTitle: "Co-Founder",
      worksFor: { "@id": ORG_ID },
    },
    {
      "@type": "Person",
      "@id": `${ORG_ID}/founder/said-aydin`,
      name: "Said Aydın",
      givenName: "Said",
      familyName: "Aydın",
      jobTitle: "Co-Founder",
      worksFor: { "@id": ORG_ID },
    },
    {
      "@type": "Person",
      "@id": `${ORG_ID}/founder/aykut-arayici`,
      name: "Aykut Arayıcı",
      givenName: "Aykut",
      familyName: "Arayıcı",
      jobTitle: "Co-Founder",
      worksFor: { "@id": ORG_ID },
    },
  ];

  // ── Organization ──────────────────────────────────────────────────
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "NativeWay",
    legalName: "NativeWay",
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    description:
      "Premium travel ecosystem balancing iconic landmarks with authentic local discovery. Founded to help travelers experience destinations through the eyes of locals.",
    foundingDate: "2025",
    founders: founders.map((f) => ({ "@id": f["@id"] })),
    founder: founders.map((f) => ({ "@type": "Person", name: f.name })),
    sameAs: [
      "https://www.instagram.com/nativeway.official/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@nativeway.app",
      url: `${BASE_URL}/#get-app`,
    },
    knowsAbout: [
      "Travel",
      "Local Experiences",
      "Cultural Tourism",
      "Authentic Travel",
      "Hidden Gems",
      "Iconic Landmarks",
      "City Guides",
      "Local Recommendations",
    ],
  };

  // ── SoftwareApplication (MobileApplication) ──────────────────────
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: "NativeWay",
    applicationCategory: "TravelApplication",
    applicationSubCategory: "MobileApplication",
    operatingSystem: "iOS, Android",
    description:
      "NativeWay balances iconic landmarks with authentic local discovery. Discover hidden gems, local food spots, and cultural experiences curated by people who call the destination home — all while never missing the must-see sights. Available in 277+ cities worldwide.",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to download with premium features available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "1250",
    },
    featureList: [
      "Authentic local recommendations from residents",
      "Curated iconic landmarks and must-see destinations",
      "Personalized city guides for 277+ cities",
      "Local food spots and hidden culinary gems",
      "Cultural experiences off the tourist trail",
      "Smart itinerary planner balancing popular and local spots",
      "Multi-language support (English, 中文, Türkçe, Norsk)",
      "Dark mode support for night exploration",
    ],
    keywords:
      "travel, local experiences, hidden gems, authentic travel, city guide, cultural tourism, local food, travel planner, landmark guide, local recommendations",
    datePublished: "2025-01-01",
  };

  // ── WebSite ──────────────────────────────────────────────────────
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "NativeWay — Travel Easier. Experience More.",
    alternateName: "NativeWay",
    url: BASE_URL,
    description:
      "Official website of NativeWay, the premium travel app that connects you with authentic local experiences, hidden gems, and real recommendations from locals. No tourist traps — just real travel.",
    inLanguage: ["en", "zh", "tr", "no"],
    about: { "@id": APP_ID },
    publisher: { "@id": ORG_ID },
    copyrightHolder: { "@id": ORG_ID },
    copyrightYear: 2025,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── BreadcrumbList (only for non-root pages) ────────────────────
  const breadcrumb = path && path !== "/" ? buildBreadcrumb(path) : null;

  // ── Assemble all graphs ─────────────────────────────────────────
  const allGraphs = [organization, app, website];
  if (breadcrumb) allGraphs.push(breadcrumb);

  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org",
          "@graph": allGraphs,
        },
        null,
        0,
      )}
    </script>
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
  for (let i = 0; i < segments.length; i++) {
    accumulated += `/${segments[i]}`;
    items.push({
      "@type": "ListItem" as const,
      position: i + 2,
      name: segmentToLabel(segments[i]),
      item: `${BASE_URL}${accumulated}`,
    });
  }

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
