import { ArrowRight, Globe, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const team = [
  {
    name: "Mateo Reyes",
    role: "Co-founder & CEO",
    bio: "Former backpacker who spent 3 years living in 12 countries. Built NativeWay after one too many tourist traps.",
    initial: "M",
    color: "#f07b22",
  },
  {
    name: "Aiko Tanaka",
    role: "Co-founder & CTO",
    bio: "Ex-Google engineer passionate about community-driven products. Grew up between Tokyo and São Paulo.",
    initial: "A",
    color: "#3a8fd9",
  },
  {
    name: "Rania Khalil",
    role: "Head of Community",
    bio: "Traveled to 60+ countries, former travel journalist. Obsessed with connecting curious people to real places.",
    initial: "R",
    color: "#4caf7d",
  },
  {
    name: "Diego Ferreira",
    role: "Head of Design",
    bio: "Believes great design should feel invisible. Makes sure NativeWay is as beautiful as the places it features.",
    initial: "D",
    color: "#9b59b6",
  },
];

const missionIcons = [Target, Globe, Lightbulb];

export function AboutPage() {
  const { pt } = useLanguage();
  const p = pt.aboutPage;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nw-bg-alt)] to-[var(--nw-bg)]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f07b22]/5 blur-3xl" />
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

      {/* Mission */}
      <section className="py-20 bg-[var(--nw-bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {p.mission.map((item, i) => {
              const Icon = missionIcons[i];
              return (
                <div key={item.title} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-8">
                  <div className="w-11 h-11 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#f07b22]" />
                  </div>
                  <h3 className="text-[var(--nw-text)] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem" }}>
                    {item.title}
                  </h3>
                  <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 bg-[var(--nw-bg-surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{p.origin.badge}</span>
            <h2 className="text-4xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {p.origin.heading}
            </h2>
          </div>
          <div className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-10">
            <p className="text-[var(--nw-muted)] leading-relaxed text-lg mb-6">{p.origin.p1}</p>
            <p className="text-[var(--nw-muted)] leading-relaxed text-lg mb-6">{p.origin.p2}</p>
            <p className="text-[var(--nw-text)] leading-relaxed text-lg">{p.origin.p3}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--nw-bg)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{p.timeline.badge}</span>
            <h2 className="text-4xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {p.timeline.heading}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/8" />
            <div className="flex flex-col gap-10">
              {p.timeline.milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-[var(--nw-bg-card)] border border-[#f07b22]/30 flex items-center justify-center z-10">
                    <span className="text-[#f07b22] text-xs" style={{ fontWeight: 700 }}>{m.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-[var(--nw-text)] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>
                      {m.title}
                    </h3>
                    <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--nw-bg-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{p.team.badge}</span>
            <h2 className="text-4xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {p.team.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-7 text-center hover:border-[#f07b22]/25 transition-all duration-300">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"
                  style={{ backgroundColor: `${member.color}20`, color: member.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {member.initial}
                </div>
                <h3 className="text-[var(--nw-text)] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{member.name}</h3>
                <p className="text-[#f07b22] text-xs mb-3 tracking-wide">{member.role}</p>
                <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
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
