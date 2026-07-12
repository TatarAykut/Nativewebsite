import { Heart, Shield, Users, Compass } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Compass, Users, Heart, Shield];

export function Values() {
  const { t } = useLanguage();
  const v = t.values;

  return (
    <section id="values" className="bg-[var(--nw-bg-surface)] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{v.badge}</span>
          <h2
            className="text-4xl md:text-5xl text-[var(--nw-text)] max-w-xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {v.heading}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {v.items.map((item, i) => {
            const Icon = icons[i]!;
            return (
              <div
                key={item.title}
                className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-7 hover:border-[#f07b22]/30 hover:bg-[var(--nw-bg-surface)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5 group-hover:bg-[#f07b22]/20 transition-colors">
                  <Icon size={20} className="text-[var(--nw-accent-text)]" />
                </div>
                <h3
                  className="text-[var(--nw-text)] mb-3 text-lg"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
