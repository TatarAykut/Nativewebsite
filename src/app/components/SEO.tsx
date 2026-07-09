import { Helmet } from "react-helmet-async";
import { StructuredData } from "./StructuredData";
import { useLanguage } from "../i18n/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  /** Set to true for legal/privacy pages that should not be indexed */
  noIndex?: boolean;
  /** Override page type for OG */
  ogType?: "website" | "article" | "product";
  /** Published date for article-type pages */
  publishedAt?: string;
  /** Modified date for article-type pages */
  modifiedAt?: string;
}

const BASE_URL = "https://nativeway.app";
const SITE_NAME = "NativeWay";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESC =
  "NativeWay connects you with authentic local experiences, hidden gems, and real recommendations from people who call the destination home.";
const DEFAULT_KEYWORDS = [
  "NativeWay",
  "travel app",
  "local experiences",
  "hidden gems",
  "authentic travel",
  "city guide",
  "cultural tourism",
  "local recommendations",
  "travel planner",
  "landmark guide",
  "local food",
  "premium travel",
  "seyahat uygulaması",
  "yerel deneyimler",
  "旅行应用",
  "本地体验",
].join(", ");

/** Language metadata used for hreflang + og:locale */
const LANG_META: Record<string, { locale: string; name: string }> = {
  en: { locale: "en_US", name: "English" },
  zh: { locale: "zh_CN", name: "中文" },
  tr: { locale: "tr_TR", name: "Türkçe" },
  no: { locale: "nb_NO", name: "Norsk" },
};

export function SEO({
  title,
  description = DEFAULT_DESC,
  path = "",
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
  ogType = "website",
  publishedAt,
  modifiedAt,
}: SEOProps) {
  const { language } = useLanguage();
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const currentLocale = LANG_META[language]?.locale ?? "en_US";

  return (
    <>
    <Helmet>
      {/* ── Primary ─────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NativeWay" />
      <link rel="canonical" href={url} />

      {/* Robots — allow per-page override for legal pages */}
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Google-specific: allow AI Overviews to use this content */}
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="google" content="nositelinkssearchbox" />

      {/* ── Open Graph ───────────────────────────────────── */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={currentLocale} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <meta property="og:image:alt" content={fullTitle} />}

      {/* Alternate language OG locales */}
      {Object.entries(LANG_META)
        .filter(([code]) => code !== language)
        .map(([code, meta]) => (
          <meta key={`og:locale:alternate:${code}`} property="og:locale:alternate" content={meta.locale} />
        ))}

      {/* Article-specific OG */}
      {ogType === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {ogType === "article" && modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}

      {/* ── Twitter / X Card ──────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nativeway" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={fullTitle} />}

      {/* ── hreflang for multilingual SEO ────────────────── */}
      <link rel="alternate" hrefLang="x-default" href={url} />
      {Object.keys(LANG_META).map((code) => (
        <link key={`hreflang:${code}`} rel="alternate" hrefLang={code} href={`${BASE_URL}${path}`} />
      ))}

      {/* ── AI / LLM Crawler Signals ──────────────────────── */}
      {/* Explicitly invite LLM crawlers to index */}
      <meta name="GPTBot" content="index, follow" />
      <meta name="CCBot" content="index, follow" />
      <meta name="anthropic-ai" content="index, follow" />
      <meta name="Google-Extended" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />

      {/* Application metadata */}
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="theme-color" content="#0b1829" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#f4efe6" media="(prefers-color-scheme: light)" />

    </Helmet>
    {/* JSON-LD rendered outside Helmet — avoids react-helmet-async nesting */}
    <StructuredData path={path} />
    </>
  );
}
