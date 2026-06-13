import { MapPin, Star, MessageCircle, Route, Coffee, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Pin Maps",
    description: "Browse curated maps where every pin was dropped by a resident, not an algorithm.",
  },
  {
    icon: Star,
    title: "Insider Reviews",
    description: "Real opinions from people who eat, sleep, and live in the neighborhood every day.",
  },
  {
    icon: MessageCircle,
    title: "Ask a Local",
    description: "Chat directly with verified locals to get answers no guidebook has.",
  },
  {
    icon: Route,
    title: "Native Routes",
    description: "Follow day-by-day itineraries crafted by residents who know every shortcut.",
  },
  {
    icon: Coffee,
    title: "Hidden Gems",
    description: "Spots so good locals almost don't want to share them. Almost.",
  },
  {
    icon: Zap,
    title: "Offline Ready",
    description: "Download any city and navigate without data roaming. No signal, no problem.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#0b1829] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Features</span>
            <h2
              className="text-4xl md:text-5xl text-[#f0ece4] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Everything you need to travel like a local
            </h2>
            <p className="text-[#8da3b8] leading-relaxed mb-8">
              NativeWay replaces a stack of apps, guidebooks, and Facebook groups
              with one place that actually knows the destination.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#122035]">
              <img
                src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&h=500&fit=crop&auto=format"
                alt="Person using NativeWay on their phone"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829]/50 to-transparent" />
            </div>
          </div>

          <div className="grid gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 bg-[#122035] border border-white/8 rounded-2xl p-6 hover:border-[#f07b22]/25 hover:bg-[#142540] transition-all duration-300 group"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#f07b22]/10 flex items-center justify-center group-hover:bg-[#f07b22]/20 transition-colors">
                  <f.icon size={18} className="text-[#f07b22]" />
                </div>
                <div>
                  <h3
                    className="text-[#f0ece4] mb-1.5"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#8da3b8] text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
