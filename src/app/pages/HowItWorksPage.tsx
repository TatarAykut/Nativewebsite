import {
  ArrowRight, CalendarDays, Sparkles, MapPin, Users,
  BookOpen, Award, Heart, Pen, Navigation, Star, Route, Vote, Shield
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SEO } from "../components/SEO";

// 5 steps: AI Plan, Discover+Guide, Party Mode, Navigate, Collect+Share
const stepIcons = [CalendarDays, MapPin, Users, Navigation, Award];
const stepColors = ["#f07b22", "#3a8fd9", "#9b59b6", "#4caf7d", "#e84393"];
const stepFeatureIcons = [
  [Sparkles, Route, BookOpen],    // AI plan, routing, tourist guide
  [MapPin, Star, Shield],         // local discovery, hidden gems, safety
  [Users, Vote, Sparkles],        // shared lobby, preferences, AI overlap
  [Navigation, Sparkles, BookOpen], // offline maps, AI guide, tourist info
  [Award, Pen, Heart],            // passport, blog, community
];

export function HowItWorksPage() {
  const { pt } = useLanguage();
  const p = pt.howItWorksPage;

  return (
    <div className="pt-24">
      <SEO
        title="How It Works"
        path="/how-it-works"
        description="See how NativeWay works — from AI trip planning to local discovery, party mode, and digital passport in five simple steps."
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nw-bg-alt)] to-[var(--nw-bg)]" />
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

      {/* Phase timeline nav */}
      <section className="bg-[var(--nw-bg)] border-b border-[var(--nw-border)] sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {p.phases.map((label, i) => (
              <a
                key={label}
                href={`#step-${i + 1}`}
                className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[var(--nw-muted)] hover:text-[var(--nw-text)] hover:bg-[var(--nw-border-subtle)] transition-all"
              >
                <span className="text-[#f07b22] text-xs" style={{ fontWeight: 700 }}>0{i + 1}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Traveller steps */}
      <section className="bg-[var(--nw-bg)] py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
          {p.steps.map((step, i) => {
            const StepIcon = stepIcons[i]!;
            const color = stepColors[i];
            const featureIcons = stepFeatureIcons[i]!;
            return (
              <div key={i} id={`step-${i + 1}`} className="flex gap-6 items-start">
                {/* Left: number + line */}
                <div className="hidden md:flex flex-col items-center gap-2 pt-1 shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border shrink-0"
                    style={{ borderColor: `${color}40`, backgroundColor: `${color}10` }}
                  >
                    <StepIcon size={20} style={{ color }} />
                  </div>
                  {i < p.steps.length - 1 && (
                    <div className="w-px flex-1 min-h-12 bg-white/6" />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                      style={{ color, backgroundColor: `${color}12` }}
                    >
                      {step.phase}
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl text-[var(--nw-text)] mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-[var(--nw-muted)] leading-relaxed mb-6 max-w-2xl">{step.description}</p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {step.features.map((f, j) => {
                      const FeatureIcon = featureIcons[j]!;
                      return (
                        <div
                          key={f.label}
                          className="flex items-center gap-2.5 bg-[var(--nw-bg-card)] border rounded-xl px-4 py-3"
                          style={{ borderColor: `${color}20` }}
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${color}15` }}
                          >
                            <FeatureIcon size={13} style={{ color }} />
                          </div>
                          <div>
                            <p className="text-[var(--nw-text)] text-xs" style={{ fontWeight: 600 }}>{f.label}</p>
                            <p className="text-[var(--nw-muted)] text-xs">{f.note}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tip */}
                  <div className="flex items-start gap-2 bg-[var(--nw-bg-surface)] border border-white/6 rounded-xl px-4 py-3 max-w-xl">
                    <span style={{ color }} className="text-xs mt-0.5 shrink-0">★</span>
                    <p className="text-[var(--nw-muted)] text-xs leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* For locals */}
      <section className="bg-[var(--nw-bg-surface)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 items-center mb-12">
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase px-4">{p.locals.heading}</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {p.locals.steps.map((step: { number: string; title: string; description: string }) => (
              <div key={step.number} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-8">
                <span
                  className="text-5xl text-[#f07b22]/15 block mb-3 leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-[var(--nw-text)] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
}
