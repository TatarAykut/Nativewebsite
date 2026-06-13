import { Heart, Shield, Users, Compass } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Authenticity First",
    description:
      "Every recommendation on NativeWay comes from real locals — residents, not influencers. If it doesn't feel genuine, it doesn't make the cut.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Locals earn recognition for sharing their city. Travelers give back by rating honestly. The whole ecosystem runs on mutual trust.",
  },
  {
    icon: Heart,
    title: "Support Local",
    description:
      "We deliberately steer tourism toward independent businesses, family-run spots, and cultural institutions that need it most.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Your data is yours. No location selling, no ad tracking, no behavioral profiling. We make money when you use the app, period.",
  },
];

export function Values() {
  return (
    <section id="values" className="bg-[#0d1e32] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">What We Stand For</span>
          <h2
            className="text-4xl md:text-5xl text-[#f0ece4] max-w-xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Built on values that actually matter
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-[#122035] border border-white/8 rounded-2xl p-7 hover:border-[#f07b22]/30 hover:bg-[#142540] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5 group-hover:bg-[#f07b22]/20 transition-colors">
                <v.icon size={20} className="text-[#f07b22]" />
              </div>
              <h3
                className="text-[#f0ece4] mb-3 text-lg"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {v.title}
              </h3>
              <p className="text-[#8da3b8] text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
