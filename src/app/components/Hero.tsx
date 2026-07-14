import { useState, useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { waitlistCounter } from "../../lib/counter";
import { HERO_LQIP } from "./heroLqip";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  // null = not known yet (or the fetch failed). The stat is hidden rather than
  // rendered as "0+", which would tell visitors nobody has signed up.
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    waitlistCounter.get().then((n) => {
      if (!cancelled) setCount(n);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleCtaClick = () => {
    // Navigate to CTA section — signup happens there
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* The inlined placeholder is the background of this layer, so the hero
          area already carries the photo's colours and brightness on the first
          painted frame. The real image then lands on top as a blur→sharp
          transition instead of a dark→bright flash. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${HERO_LQIP}")` }}
      >
        {/* LCP element. Self-hosted (no third-party DNS/TLS hop on the critical
            path), preloaded from index.html at high priority, and served at the
            width the viewport actually needs. Keep the srcset in sync with the
            <link rel="preload" imagesrcset> there. */}
        <ImageWithFallback
          src="/hero/hero-1440.webp"
          srcSet="/hero/hero-960.webp 960w, /hero/hero-1440.webp 1440w, /hero/hero-1920.webp 1920w"
          sizes="100vw"
          alt="Traveler standing by the sea with local village"
          className="w-full h-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
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
            <MapPin size={14} className="text-[var(--nw-accent-text)]" />
            <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase">{h.badge}</span>
          </div>

          <h1
            className="text-5xl md:text-7xl text-[var(--nw-text)] mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {h.headline1}
            <br />
            <span className="text-[var(--nw-accent-text)]">{h.headline2}</span>
            <br />
            {h.headline3}
          </h1>

          <p className="text-lg text-[var(--nw-muted)] mb-10 leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            {h.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-app"
              onClick={handleCtaClick}
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

          {/* Two stats, both real: a planned-coverage figure that says "planned"
              on the label, and the live signup count. The third slot used to read
              "100% / Local-first" — a slogan dressed as a measurement, and one
              that contradicted the product's own "balance landmarks WITH local"
              positioning. A fabricated number sitting beside the live counter
              only made the counter look fabricated too. */}
          <div className="mt-16 flex items-center gap-8">
            <div>
              <p className="text-2xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>277+</p>
              <p className="text-xs text-[var(--nw-muted)] tracking-wide mt-0.5">{h.stat1Label}</p>
            </div>
            {count !== null && (
              <>
                <div className="w-px h-10 bg-[var(--nw-border)]" />
                <div>
                  <p className="text-2xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{count.toLocaleString()}+</p>
                  <p className="text-xs text-[var(--nw-muted)] tracking-wide mt-0.5">{h.stat2Label}</p>
                </div>
              </>
            )}
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
