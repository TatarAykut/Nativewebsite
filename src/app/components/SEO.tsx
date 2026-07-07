import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://nativeway.app";
const SITE_NAME = "NativeWay";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESC =
  "NativeWay connects you with authentic local experiences, hidden gems, and real recommendations from people who call the destination home.";

export function SEO({
  title,
  description = DEFAULT_DESC,
  path = "",
  image = DEFAULT_IMAGE,
}: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: BASE_URL,
          description: DEFAULT_DESC,
        })}
      </script>
    </Helmet>
  );
}
