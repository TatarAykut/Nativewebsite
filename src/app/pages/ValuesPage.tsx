import { ArrowRight, Heart, Shield, Users, Compass, Leaf, Eye } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const valueIcons = [Compass, Users, Heart, Shield, Leaf, Eye];
const valueColors = ["#f07b22", "#3a8fd9", "#e84393", "#4caf7d", "#7ec850", "#9b59b6"];

export function ValuesPage() {
  const { pt } = useLanguage();
  const p = pt.valuesPage;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nw-bg-alt)] to-[var(--nw-bg)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f07b22]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{p.hero.badge}</span>
          <h1
            className="text-5xl md:text-6xl text-[var(--nw-text)] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {p.hero.heading}
          </h1>
          <p className="text-xl text-[var(--nw-muted)] leading-relaxed max-w-2xl mx-auto">
            {p.hero.sub}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--nw-bg)] py-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
          {p.values.map((v, i) => {
            const Icon = valueIcons[i];
            const color = valueColors[i];
            return (
              <div key={v.title} className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>
                  <div>
                    <h2
                      className="text-2xl text-[var(--nw-text)]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {v.title}
                    </h2>
                    <p style={{ color }} className="text-sm mt-0.5">{v.summary}</p>
                  </div>
                </div>

                <div className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-8">
                  <p className="text-[var(--nw-muted)] leading-relaxed mb-7">{v.description}</p>
                  <ul className="flex flex-col gap-3 mb-7">
                    {v.principles.map((principle) => (
                      <li key={principle} className="flex items-start gap-3 text-sm text-[var(--nw-muted)]">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />
                        {principle}
                      </li>
                    ))}
                  </ul>
                  <blockquote
                    className="border-l-2 pl-5 italic text-sm text-[var(--nw-muted)]"
                    style={{ borderColor: color }}
                  >
                    {v.quote}
                  </blockquote>
                </div>

                {i < p.values.length - 1 && <div className="h-px bg-[var(--nw-border-subtle)]" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-[var(--nw-bg-surface)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-[var(--nw-text)] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {p.commitment.heading}
          </h2>
          <p className="text-[var(--nw-muted)] leading-relaxed mb-4">
            {p.commitment.p1}
          </p>
          <p className="text-[var(--nw-muted)] leading-relaxed">
            {p.commitment.p2}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--nw-bg)] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl text-[var(--nw-text)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {p.cta.heading}
          </h2>
          <p className="text-[var(--nw-muted)] mb-8">{p.cta.sub}</p>
          <a
            href="/#get-app"
            className="inline-flex items-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-7 py-4 rounded-full hover:bg-[var(--nw-accent-hover)] transition-all duration-200 group"
            style={{ fontWeight: 600 }}
          >
            {p.cta.button} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
