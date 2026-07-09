import { SEO } from "../components/SEO";
import { LegalSection } from "../components/LegalSection";
import { useLanguage } from "../i18n/LanguageContext";

export function CookiePage() {
  const { pt } = useLanguage();
  const p = pt.cookiePage;

  return (
    <div className="pt-24 pb-20 bg-[var(--nw-bg)] min-h-screen">
      <SEO
        title="Cookie Policy"
        path="/cookies"
        description="NativeWay cookie policy — how and why we use cookies on our platform."
        ogType="article"
        publishedAt="2025-01-01"
        modifiedAt="2025-07-09"
      />
      <article className="max-w-3xl mx-auto px-6" aria-labelledby="cookies-title">
        <div className="py-16 border-b border-[var(--nw-border)] mb-12">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{p.badge}</span>
          <h1 id="cookies-title" className="text-4xl md:text-5xl text-[var(--nw-text)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {p.title}
          </h1>
          <p className="text-[var(--nw-muted)]">{p.lastUpdated}</p>
        </div>

        <div className="prose-nw">
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
