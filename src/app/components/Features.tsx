import { MapPin, Star, MessageCircle, Route, Coffee, Zap } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [MapPin, Star, MessageCircle, Route, Coffee, Zap];

export function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="features" className="bg-[#0b1829] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{f.badge}</span>
            <h2
              className="text-4xl md:text-5xl text-[#f0ece4] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {f.heading}
            </h2>
            <p className="text-[#8da3b8] leading-relaxed mb-8">{f.sub}</p>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#122035]">
              <img
                src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&h=500&fit=crop&auto=format"
                alt="Person using NativeWay on their phone"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829]/50 to-transparent" />
            </div>
          </div>

          <div className="grid gap-4">
            {f.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="flex gap-5 bg-[#122035] border border-white/8 rounded-2xl p-6 hover:border-[#f07b22]/25 hover:bg-[#142540] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#f07b22]/10 flex items-center justify-center group-hover:bg-[#f07b22]/20 transition-colors">
                    <Icon size={18} className="text-[#f07b22]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#f0ece4] mb-1.5"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#8da3b8] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
