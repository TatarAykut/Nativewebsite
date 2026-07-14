import {
  Sparkles, MapPin, Users, BookOpen, Award, Heart, MessageCircle,
  CalendarDays, Route, Star, Coffee, Vote, Globe, Shield,
  Pen, Bookmark, Bell, Download
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SEO } from "../components/SEO";

// 7 pillars: AI Planner, Local Discovery, Party Mode, Tourist Guide, Passport, Community, Messaging
const pillarColors = ["#f07b22", "#3a8fd9", "#9b59b6", "#4caf7d", "#e84393", "#f5c842", "#3ab5c7"];
const pillarIcons = [Sparkles, MapPin, Users, BookOpen, Award, Heart, MessageCircle];
const pillarItemIcons = [
  [CalendarDays, Route, Sparkles],   // AI Planner: itineraries, routing, adjustments
  [MapPin, Coffee, Star],            // Local Discovery: places, hidden gems, AI guide
  [Users, Vote, MessageCircle],      // Party Mode: lobby, preferences, chat
  [Globe, Shield, BookOpen],         // Tourist Guide: sights, safety, transport
  [Award, Star, Sparkles],           // Passport: stamps, tiers, elite status
  [Pen, Heart, Bookmark],            // Community: blogs, badges, collections
  [MessageCircle, Users, Sparkles],  // Messaging: DM, group, trip chat
];
const comingSoonIcons = [Bell, Shield, Globe, Download];

export function FeaturesPage() {
  const { pt } = useLanguage();
  const p = pt.featuresPage;

  return (
    <div className="pt-24">
      <SEO
        title="Features"
        path="/features"
        description="Explore NativeWay's features — AI-powered itineraries, local discovery, party mode, digital passport, and community tools."
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nw-bg-alt)] to-[var(--nw-bg)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#f07b22]/4 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.hero.badge}</span>
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

      {/* Pillar nav */}
      <section className="bg-[var(--nw-bg)] border-b border-[var(--nw-border)] sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {p.pillars.map((pillar, i) => {
              const PillarIcon = pillarIcons[i]!;
              const color = pillarColors[i];
              return (
                <a
                  key={pillar.category}
                  href={`#pillar-${i}`}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[var(--nw-muted)] hover:text-[var(--nw-text)] hover:bg-[var(--nw-border-subtle)] transition-all duration-200"
                >
                  <PillarIcon size={14} style={{ color }} />
                  {pillar.category}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature pillars */}
      <section className="bg-[var(--nw-bg)] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
          {p.pillars.map((pillar, i) => {
            const PillarIcon = pillarIcons[i]!;
            const color = pillarColors[i];
            const itemIcons = pillarItemIcons[i]!;
            return (
              <div key={pillar.category} id={`pillar-${i}`} className="scroll-mt-36">
                {/* Pillar header */}
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <PillarIcon size={22} style={{ color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <span className="text-xs tracking-[0.2em] uppercase" style={{ color }}>{pillar.category}</span>
                      <div className="h-px w-12 bg-white/10" />
                    </div>
                    <h2
                      className="text-2xl text-[var(--nw-text)]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {pillar.tagline}
                    </h2>
                  </div>
                </div>

                <div className={`grid md:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* Description */}
                  <div>
                    <p className="text-[var(--nw-muted)] leading-relaxed text-lg mb-8">{pillar.description}</p>
                    <div className="flex flex-col gap-4">
                      {pillar.items.map((item, j) => {
                        const ItemIcon = itemIcons[j]!;
                        return (
                          <div
                            key={item.title}
                            className="flex gap-4 bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-xl p-5 hover:border-opacity-50 transition-all duration-300 group"
                            style={{ borderColor: `${color}20` }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}50`)}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${color}20`)}
                          >
                            <div
                              className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center"
                              style={{ backgroundColor: `${color}12` }}
                            >
                              <ItemIcon size={16} style={{ color }} />
                            </div>
                            <div>
                              <h3
                                className="text-[var(--nw-text)] mb-1"
                                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}
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

                  {/* Visual block */}
                  <div
                    className="rounded-2xl border p-10 flex flex-col items-center justify-center gap-6 aspect-square max-w-sm mx-auto md:mx-0 w-full"
                    style={{ backgroundColor: `${color}15`, borderColor: `${color}40` }}
                  >
                    <PillarIcon size={72} style={{ color: `${color}70` }} strokeWidth={1} />
                    <div className="flex flex-wrap gap-2 justify-center">
                      {pillar.items.map((item) => (
                        <span
                          key={item.title}
                          className="text-xs px-3 py-1.5 rounded-full border font-medium"
                          style={{ color, borderColor: `${color}50`, backgroundColor: `${color}20` }}
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {i < p.pillars.length - 1 && (
                  <div className="mt-16 h-px bg-[var(--nw-border-subtle)]" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 bg-[var(--nw-bg-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.comingSoon.badge}</span>
            <h2 className="text-4xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {p.comingSoon.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.comingSoon.items.map((f, i) => {
              const Icon = comingSoonIcons[i]!;
              return (
                <div key={f.title} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] border-dashed rounded-2xl p-7 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[var(--nw-accent-text)]" />
                  </div>
                  <h3 className="text-[var(--nw-text)] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}>
                    {f.title}
                  </h3>
                  <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
}
