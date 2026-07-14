import { Globe, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SEO } from "../components/SEO";

/**
 * Identity only — role and bio are translated and live in pageTranslations under
 * aboutPage.team.members, index-aligned with this array. They used to be
 * hardcoded here in Turkish, which every English, Chinese and Norwegian visitor
 * saw untranslated.
 */
const team = [
  { name: "Ahmet Semih Dikilitaş", initial: "A", color: "#f07b22" },
  { name: "Said Aydın", initial: "S", color: "#3a8fd9" },
  { name: "Aykut Arayıcı", initial: "A", color: "#4caf7d" },
];

const missionIcons = [Target, Globe, Lightbulb];

export function AboutPage() {
  const { pt } = useLanguage();
  const p = pt.aboutPage;

  return (
    <div className="pt-24">
      <SEO
        title="About"
        path="/about"
        description="Learn about NativeWay — our mission to connect travelers with authentic local experiences and the team behind the app."
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nw-bg-alt)] to-[var(--nw-bg)]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f07b22]/5 blur-3xl" />
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

      {/* Mission */}
      <section className="py-20 bg-[var(--nw-bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {p.mission.map((item, i) => {
              const Icon = missionIcons[i]!;
              return (
                <div key={item.title} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-8">
                  <div className="w-11 h-11 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--nw-accent-text)]" />
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
            <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.origin.badge}</span>
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
            <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.timeline.badge}</span>
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
                    <span className="text-[var(--nw-accent-text)] text-xs" style={{ fontWeight: 700 }}>{m.year}</span>
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
            <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{p.team.badge}</span>
            <h2 className="text-4xl text-[var(--nw-text)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {p.team.heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-7 text-center hover:border-[#f07b22]/25 transition-all duration-300">
                {/* The initial sits on a solid tint of the member's colour rather
                    than colour-on-colour-at-12%-alpha, which measured 2.45:1 in
                    light theme — below the 3:1 WCAG AA floor even for large text. */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl text-white"
                  style={{ backgroundColor: member.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {member.initial}
                </div>
                <h3 className="text-[var(--nw-text)] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{member.name}</h3>
                <p className="text-[var(--nw-accent-text)] text-xs mb-3 tracking-wide">{p.team.members[i]?.role}</p>
                <p className="text-[var(--nw-muted)] text-sm leading-relaxed">{p.team.members[i]?.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
