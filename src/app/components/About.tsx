import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="bg-[#0b1829] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{a.badge}</span>
            <h2
              className="text-4xl md:text-5xl text-[#f0ece4] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {a.heading}
            </h2>
            <p className="text-[#8da3b8] leading-relaxed mb-6">{a.p1}</p>
            <p className="text-[#8da3b8] leading-relaxed mb-8">
              {a.p2.split("the best travel guide is always a local")[0]}
              {a.p2.includes("the best travel guide is always a local") && (
                <span className="text-[#f0ece4]">the best travel guide is always a local</span>
              )}
              {a.p2.split("the best travel guide is always a local")[1] ?? ""}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["Mateo", "Aiko", "Rania"].map((name, i) => (
                  <div
                    key={name}
                    className="w-9 h-9 rounded-full border-2 border-[#0b1829] bg-[#1a2f47] flex items-center justify-center text-xs text-[#f07b22]"
                    style={{ zIndex: 3 - i }}
                  >
                    {name[0]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#8da3b8]">{a.founderNote}</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#122035]">
              <img
                src="https://images.unsplash.com/photo-1780616144913-83206bd3b512?w=800&h=1000&fit=crop&auto=format"
                alt="Traditional local coffee shop exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0b1829]/80 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
                <p className="text-[#f0ece4] text-sm mb-1" style={{ fontWeight: 600 }}>{a.cardTitle}</p>
                <p className="text-[#8da3b8] text-xs">{a.cardSub}</p>
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
