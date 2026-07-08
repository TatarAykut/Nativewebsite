import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="bg-[var(--nw-bg)] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{a.badge}</span>
            <h2
              className="text-4xl md:text-5xl text-[var(--nw-text)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {a.heading}
            </h2>
            <p className="text-[var(--nw-muted)] leading-relaxed mb-6">{a.p1}</p>
            <p className="text-[var(--nw-muted)] leading-relaxed mb-6">{a.p2}</p>
            <p className="text-[var(--nw-muted)] leading-relaxed mb-8">{a.p3}</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["Ahmet Semih Dikilitaş", "Said", "Aykut"].map((name, i) => (
                  <div
                    key={name}
                    className="w-9 h-9 rounded-full border-2 border-[var(--nw-bg)] bg-[var(--nw-bg-input)] flex items-center justify-center text-xs text-[#f07b22]"
                    style={{ zIndex: 3 - i }}
                  >
                    {name[0]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--nw-muted)]">{a.founderNote}</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--nw-bg-card)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1780616144913-83206bd3b512?w=800&h=1000&fit=crop&auto=format"
                alt="Traditional local coffee shop exterior"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[var(--nw-bg)]/80 backdrop-blur-sm rounded-xl px-5 py-4 border border-[var(--nw-border)]">
                <p className="text-[var(--nw-text)] text-sm mb-1" style={{ fontWeight: 600 }}>{a.cardTitle}</p>
                <p className="text-[var(--nw-muted)] text-xs">{a.cardSub}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-[#f07b22]" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-[#f07b22]/10 border border-[#f07b22]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
