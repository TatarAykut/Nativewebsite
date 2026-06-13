import { Link } from "react-router";
import { ArrowRight, MapPin, Star, MessageCircle, Route, Coffee, Zap, Bell, Shield, Globe, Download } from "lucide-react";

const coreFeatures = [
  {
    icon: MapPin,
    title: "Local Pin Maps",
    tagline: "Every pin placed by a resident",
    description:
      "Forget algorithmic recommendations. Every location on NativeWay's maps has been personally pinned by a verified local resident. Browse by neighbourhood, vibe, or category — and know that every result is genuinely loved by someone who lives there.",
    details: ["Neighbourhood-level filtering", "Verified local contributors", "Photo-rich entries", "Opening hours from locals, not bots"],
  },
  {
    icon: Star,
    title: "Insider Reviews",
    tagline: "Real opinions from real residents",
    description:
      "Our review system is built differently. Only locals can write primary reviews. Travellers can add their experience on top, but the local voice always comes first. No incentivised reviews, no paid placements.",
    details: ["Local-first review hierarchy", "No sponsored content", "Context tags (touristy / hidden gem / locals-only)", "Seasonal notes from regulars"],
  },
  {
    icon: MessageCircle,
    title: "Ask a Local",
    tagline: "Direct chat with verified residents",
    description:
      "Sometimes you just need a quick answer: 'Is this beach worth the 45-minute drive?' or 'What should I order here?'. Ask a Local connects you directly with residents who've opted in to help travellers — real-time, honest answers.",
    details: ["Verified resident profiles", "Response time indicators", "Translation support in 30+ languages", "Tipping locals for their time (coming soon)"],
  },
  {
    icon: Route,
    title: "Native Routes",
    tagline: "Day itineraries crafted by residents",
    description:
      "Follow full-day routes created by locals who know their city inside-out. Each route tells a story — the morning coffee spot, the lunch place only regulars know, the viewpoint tourists walk past every day.",
    details: ["Time-of-day optimised routes", "Budget tiers (budget / mid / splurge)", "Transport instructions included", "Downloadable for offline use"],
  },
  {
    icon: Coffee,
    title: "Hidden Gems",
    tagline: "The spots locals almost keep secret",
    description:
      "A curated collection of places that won't be in any guidebook. Nominated by locals, validated by multiple residents, and protected from going viral by limiting how prominently they're displayed.",
    details: ["Anti-overtourism design", "Capacity-aware visibility", "Rotating featured gems", "Only accessible to premium members after a threshold"],
  },
  {
    icon: Zap,
    title: "Offline Ready",
    tagline: "No signal, no problem",
    description:
      "Download any city before you leave home and get full access to maps, reviews, and routes without using data. Especially useful for navigating without expensive roaming charges.",
    details: ["Full city download in under 50MB", "Auto-syncs when online", "Works on airplane mode", "Smart caching for frequently viewed areas"],
  },
];

const upcomingFeatures = [
  { icon: Bell, title: "Local Alerts", description: "Get notified about temporary closures, new openings, and time-sensitive local tips for your destination." },
  { icon: Shield, title: "Scam Warnings", description: "Residents flag tourist scams and overpriced areas in real time so you can stay informed." },
  { icon: Globe, title: "Cultural Notes", description: "Etiquette tips, local customs, and things-not-to-do written by residents who've seen tourists get it wrong." },
  { icon: Download, title: "Trip Export", description: "Export your saved places and routes as a printable PDF or share them directly with your travel companions." },
];

export function FeaturesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2240] to-[#0b1829]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#f07b22]/4 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Features</span>
          <h1
            className="text-5xl md:text-6xl text-[#f0ece4] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Everything built with one <span className="text-[#f07b22]">principle</span>
          </h1>
          <p className="text-xl text-[#8da3b8] leading-relaxed max-w-2xl mx-auto">
            Every feature on NativeWay exists to surface authentic local knowledge faster. Nothing is here for engagement metrics or ad revenue.
          </p>
        </div>
      </section>

      {/* Core features */}
      <section className="py-20 bg-[#0b1829]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
          {coreFeatures.map((f, i) => (
            <div
              key={f.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                  <f.icon size={22} className="text-[#f07b22]" />
                </div>
                <p className="text-[#f07b22] text-xs tracking-[0.15em] uppercase mb-2">{f.tagline}</p>
                <h2
                  className="text-3xl text-[#f0ece4] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {f.title}
                </h2>
                <p className="text-[#8da3b8] leading-relaxed mb-7">{f.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-[#8da3b8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f07b22] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#122035] border border-white/8 rounded-2xl p-10 flex items-center justify-center aspect-square max-w-sm mx-auto md:mx-0 w-full">
                <f.icon size={80} className="text-[#f07b22]/20" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 bg-[#0d1e32]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Coming Soon</span>
            <h2 className="text-4xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              On the roadmap
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcomingFeatures.map((f) => (
              <div key={f.title} className="bg-[#122035] border border-white/8 border-dashed rounded-2xl p-7 opacity-75 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-[#f07b22]/10 flex items-center justify-center mb-5">
                  <f.icon size={18} className="text-[#f07b22]" />
                </div>
                <h3 className="text-[#f0ece4] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}>
                  {f.title}
                </h3>
                <p className="text-[#8da3b8] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b1829] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl text-[#f0ece4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Want to be first to use these features?
          </h2>
          <p className="text-[#8da3b8] mb-8">Early access members get everything free for a full year.</p>
          <Link
            to="/#get-app"
            className="inline-flex items-center gap-2 bg-[#f07b22] text-[#0b1829] px-7 py-4 rounded-full hover:bg-[#ffa04a] transition-all duration-200 group"
            style={{ fontWeight: 600 }}
          >
            Join the Waitlist <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
