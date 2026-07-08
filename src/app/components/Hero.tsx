import { useState, useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { waitlistCounter } from "../../lib/counter";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const [count, setCount] = useState(1200);

  useEffect(() => {
    setCount(waitlistCounter.get());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?w=1800&h=1200&fit=crop&auto=format"
          alt="Traveler standing by the sea with local village"
          className="w-full h-full object-cover object-center"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--nw-bg)]/95 via-[var(--nw-bg)]/75 to-[var(--nw-bg)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--nw-bg)] via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#f07b22] animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#f07b22] animate-pulse opacity-50 delay-300" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[#f07b22] animate-pulse opacity-60 delay-700" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={14} className="text-[#f07b22]" />
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase">{h.badge}</span>
          </div>

          <h1
            className="text-5xl md:text-7xl text-[var(--nw-text)] mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {h.headline1}
            <br />
            <span className="text-[#f07b22]">{h.headline2}</span>
            <br />
            {h.headline3}
          </h1>

          <p className="text-lg text-[var(--nw-muted)] mb-10 leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            {h.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-app"
              className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-7 py-4 rounded-full transition-all duration-200 hover:bg-[#ffa04a] hover:scale-105 active:scale-95 group"
              style={{ fontWeight: 600 }}
            >
              {h.ctaPrimary}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-[var(--nw-border)] text-[var(--nw-text)] px-7 py-4 rounded-full hover:border-[var(--nw-border)] hover:bg-[var(--nw-border-subtle)] transition-all duration-200"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div>
              <p className="text-2xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>50+</p>
              <p className="text-xs text-[var(--nw-muted)] tracking-wide mt-0.5">{h.stat1Label}</p>
            </div>
            <div className="w-px h-10 bg-[var(--nw-border)]" />
            <div>
              <p className="text-2xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{count.toLocaleString()}+</p>
              <p className="text-xs text-[var(--nw-muted)] tracking-wide mt-0.5">{h.stat2Label}</p>
            </div>
            <div className="w-px h-10 bg-[var(--nw-border)]" />
            <div>
              <p className="text-2xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>100%</p>
              <p className="text-xs text-[var(--nw-muted)] tracking-wide mt-0.5">{h.stat3Label}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-[var(--nw-text)] animate-pulse" />
        <span className="text-[10px] text-[var(--nw-text)] tracking-[0.2em] uppercase">{h.scroll}</span>
      </div>
    </section>
  );
}
