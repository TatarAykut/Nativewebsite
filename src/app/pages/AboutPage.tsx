import { Link } from "react-router";
import { ArrowRight, Users, Globe, Lightbulb, Target } from "lucide-react";

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

const milestones = [
  { year: "2022", title: "The idea sparks", description: "Mateo and Aiko meet at a hostel in Lisbon and bond over the same frustration: the best local spots are invisible to tourists." },
  { year: "2023", title: "Building the foundation", description: "First prototype tested with 200 locals across 5 cities. The feedback was overwhelming — locals wanted a platform to share their city." },
  { year: "2024", title: "The team grows", description: "Rania and Diego join. NativeWay expands its local network to 20 cities and begins closed beta testing." },
  { year: "2025", title: "Waitlist opens", description: "Over 1,200 travelers sign up in the first month. Partner locals in 50+ cities curate their first collections." },
  { year: "2026", title: "Launch year", description: "NativeWay prepares for public launch. The mission is simple: make every traveler feel like a local." },
];

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2240] to-[#0b1829]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f07b22]/5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Our Story</span>
          <h1
            className="text-5xl md:text-6xl text-[#f0ece4] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            We believe travel should feel <span className="text-[#f07b22]">human</span>
          </h1>
          <p className="text-xl text-[#8da3b8] leading-relaxed max-w-2xl mx-auto">
            NativeWay was born from a simple frustration — the best experiences in any city
            are hidden from the people who need them most. We're changing that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0b1829]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", text: "To close the gap between tourists and locals — making every traveler feel like they belong, and every local feel heard." },
              { icon: Globe, title: "Our Vision", text: "A world where travel creates real cultural exchange, supports local economies, and leaves destinations better than we found them." },
              { icon: Lightbulb, title: "Our Approach", text: "Technology in service of human connection. We build tools that get out of the way and let the real experience shine through." },
            ].map((item) => (
              <div key={item.title} className="bg-[#122035] border border-white/8 rounded-2xl p-8">
                <div className="w-11 h-11 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-[#f07b22]" />
                </div>
                <h3 className="text-[#f0ece4] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem" }}>
                  {item.title}
                </h3>
                <p className="text-[#8da3b8] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 bg-[#0d1e32]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">The Origin</span>
            <h2 className="text-4xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Born from a bad meal in Barcelona
            </h2>
          </div>
          <div className="bg-[#122035] border border-white/8 rounded-2xl p-10">
            <p className="text-[#8da3b8] leading-relaxed text-lg mb-6">
              It was 2022. Mateo had just paid €28 for a paella that came out of a microwave, three blocks from La Rambla.
              Meanwhile, a local on the metro told him about a family-run place in Gràcia — open for 40 years, full of
              regulars, €12 for the best rice he'd ever eat.
            </p>
            <p className="text-[#8da3b8] leading-relaxed text-lg mb-6">
              "Why isn't this information findable?" he asked. The answer was uncomfortable: because the platforms
              that dominate travel discovery are optimised for advertising spend, not authenticity.
            </p>
            <p className="text-[#f0ece4] leading-relaxed text-lg">
              He called Aiko that night. Six months later, they had a prototype. Two years later, 1,200 people
              are on the waitlist. The paella restaurant in Gràcia? It's still going strong.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0b1829]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Journey</span>
            <h2 className="text-4xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              How we got here
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/8" />
            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-[#122035] border border-[#f07b22]/30 flex items-center justify-center z-10">
                    <span className="text-[#f07b22] text-xs" style={{ fontWeight: 700 }}>{m.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-[#f0ece4] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>
                      {m.title}
                    </h3>
                    <p className="text-[#8da3b8] text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0d1e32]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">The Team</span>
            <h2 className="text-4xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Built by travelers, for travelers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#122035] border border-white/8 rounded-2xl p-7 text-center hover:border-[#f07b22]/25 transition-all duration-300">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"
                  style={{ backgroundColor: `${member.color}20`, color: member.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {member.initial}
                </div>
                <h3 className="text-[#f0ece4] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{member.name}</h3>
                <p className="text-[#f07b22] text-xs mb-3 tracking-wide">{member.role}</p>
                <p className="text-[#8da3b8] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b1829] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl text-[#f0ece4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Ready to travel the native way?
          </h2>
          <p className="text-[#8da3b8] mb-8">Join the waitlist and be first to experience it.</p>
          <Link
            to="/#get-app"
            className="inline-flex items-center gap-2 bg-[#f07b22] text-[#0b1829] px-7 py-4 rounded-full hover:bg-[#ffa04a] transition-all duration-200 group"
            style={{ fontWeight: 600 }}
          >
            Get Early Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
