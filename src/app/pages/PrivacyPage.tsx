import { SEO } from "../components/SEO";
import { LegalSection } from "../components/LegalSection";
import { LegalFallbackNotice, LEGAL_FALLBACK_LANGS } from "../components/LegalFallbackNotice";
import { useLanguage } from "../i18n/LanguageContext";
import { pageTranslations } from "../i18n/pageTranslations";

export function PrivacyPage() {
  const { pt, language } = useLanguage();
  // zh/no legal content isn't fully translated — fall back to English + notice.
  const p = LEGAL_FALLBACK_LANGS.includes(language) ? pageTranslations.en.privacyPage : pt.privacyPage;

  return (
    <div className="pt-24 pb-20 bg-[var(--nw-bg)] min-h-screen">
      <SEO
        title="Privacy Policy"
        path="/privacy"
        description="NativeWay privacy policy — learn how we collect, use, and protect your data."
        ogType="article"
        publishedAt="2025-01-01"
        modifiedAt="2025-07-09"
      />
      <article className="max-w-3xl mx-auto px-6" aria-labelledby="privacy-title">
        <div className="py-16 border-b border-[var(--nw-border)] mb-12">
          <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.badge}</span>
          <h1 id="privacy-title" className="text-4xl md:text-5xl text-[var(--nw-text)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {p.title}
          </h1>
          <p className="text-[var(--nw-muted)]">{p.lastUpdated}</p>
        </div>

        <div className="prose-nw">
          <LegalFallbackNotice language={language} />
          {p.sections.map((section, i) => (
            <LegalSection key={i} title={section.title}>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </LegalSection>
          ))}
        </div>
      </article>
    </div>
  );
}
