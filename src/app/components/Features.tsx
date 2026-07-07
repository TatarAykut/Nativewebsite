import { Sparkles, MapPin, Users, BookOpen, Award, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import phoneImgTr from "../../imports/phone.png";
import phoneImgEn from "../../imports/phone2.png";
import phoneImgZh from "../../imports/phone3.png";
import phoneImgNo from "../../imports/phone4.png";

const phoneImages = {
  en: phoneImgEn,
  zh: phoneImgZh,
  tr: phoneImgTr,
  no: phoneImgNo,
} as const;

const icons = [Sparkles, MapPin, Users, BookOpen, Award, MessageCircle];

export function Features() {
  const { t, language } = useLanguage();
  const f = t.features;
  const featureImg = phoneImages[language];

  return (
    <section id="features" className="bg-[var(--nw-bg)] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{f.badge}</span>
            <h2
              className="text-4xl md:text-5xl text-[var(--nw-text)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {f.heading}
            </h2>
            <p className="text-[var(--nw-muted)] leading-relaxed mb-8">{f.sub}</p>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--nw-bg-card)]">
              <ImageWithFallback
                src={featureImg}
                alt="Person using NativeWay on their phone"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {f.items.map((item, i) => {
              const Icon = icons[i]!;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-6 hover:border-[#f07b22]/25 hover:bg-[var(--nw-bg-surface)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#f07b22]/10 flex items-center justify-center group-hover:bg-[#f07b22]/20 transition-colors">
                    <Icon size={18} className="text-[#f07b22]" />
                  </div>
                  <div>
                    <h3
                      className="text-[var(--nw-text)] mb-1.5"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{item.description}</p>
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
