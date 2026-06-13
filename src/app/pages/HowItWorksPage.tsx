import { Link } from "react-router";
import { ArrowRight, Search, Map, MessageCircle, Bookmark, Navigation, Star } from "lucide-react";

const travelerSteps = [
  {
    number: "01",
    icon: Search,
    title: "Search your destination",
    description: "Type any city we support and instantly see a live map populated entirely by local contributors. Filter by vibe — late night, family-friendly, budget, off-the-beaten-path — and watch the map respond.",
    tip: "Tip: Save your destination before you fly so everything downloads for offline use.",
  },
  {
    number: "02",
    icon: Map,
    title: "Explore local maps & collections",
    description: "Browse curated neighbourhood maps, themed collections ('best Sunday mornings in Lisbon', 'Tokyo spots only salarymen know'), and route suggestions built by people who live there.",
    tip: "Tip: Collections are updated seasonally — check back if you're visiting months apart.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Ask a local anything",
    description: "Have a specific question? Use Ask a Local to message a verified resident directly. They know where the crowds are, which days to avoid, and what's worth the detour.",
    tip: "Tip: Be specific — 'best ramen near Shinjuku station on a Tuesday night' gets better answers than 'best ramen'.",
  },
  {
    number: "04",
    icon: Bookmark,
    title: "Build your trip board",
    description: "Save places, routes, and recommendations to your personal trip board. Organise by day, area, or category. Share the board with travel companions so everyone's on the same page.",
    tip: "Tip: Trip boards can be exported as a PDF for tech-free backup.",
  },
  {
    number: "05",
    icon: Navigation,
    title: "Navigate and explore",
    description: "Head out with NativeWay open. Follow a Native Route step-by-step, or free-explore with the local map as your guide. Mark places as visited and leave your own honest reaction.",
    tip: "Tip: The app works fully offline once your city is downloaded.",
  },
  {
    number: "06",
    icon: Star,
    title: "Share your experience",
    description: "After your trip, add your traveller perspective on top of the local reviews. Your experience helps future visitors — and earns you reputation points in the community.",
    tip: "Tip: The most helpful traveller notes mention what surprised you — good or bad.",
  },
];

const localSteps = [
  {
    number: "01",
    title: "Verify your residency",
    description: "Quick and private — we verify you live in the city without storing sensitive documents. A utility bill or local ID is all it takes.",
  },
  {
    number: "02",
    title: "Pin your favourite spots",
    description: "Add the places you genuinely love. Your neighbourhood café, the park bench with the best view, the market stall that's been there since your grandparents' time.",
  },
  {
    number: "03",
    title: "Write honest reviews",
    description: "Tell it like it is. Best dish, worst time to visit, what the tourist photos don't show. Locals are the truth-tellers on NativeWay.",
  },
  {
    number: "04",
    title: "Build a Native Route",
    description: "Chain your favourite places into a day itinerary. Describe the journey between spots, the context, the history. Make it something you'd give to a friend.",
  },
];

export function HowItWorksPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2240] to-[#0b1829]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">How It Works</span>
          <h1
            className="text-5xl md:text-6xl text-[#f0ece4] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Simple steps to a <span className="text-[#f07b22]">better trip</span>
          </h1>
          <p className="text-xl text-[#8da3b8] leading-relaxed max-w-2xl mx-auto">
            Whether you're a traveller looking for the real city, or a local wanting to share yours —
            NativeWay makes it effortless.
          </p>
        </div>
      </section>

      {/* Toggle label */}
      <section className="bg-[#0b1829] pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 items-center">
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase px-4">For Travellers</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
        </div>
      </section>

      {/* Traveler steps */}
      <section className="bg-[#0b1829] py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          {travelerSteps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-[#122035] border border-[#f07b22]/30 flex items-center justify-center">
                  <step.icon size={20} className="text-[#f07b22]" />
                </div>
                <span className="text-[#f07b22]/40 text-xs" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{step.number}</span>
              </div>
              <div className="bg-[#122035] border border-white/8 rounded-2xl p-7 flex-1">
                <h3
                  className="text-[#f0ece4] mb-3 text-xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#8da3b8] leading-relaxed mb-4">{step.description}</p>
                <div className="flex items-start gap-2 bg-[#0b1829]/50 rounded-xl px-4 py-3">
                  <span className="text-[#f07b22] text-xs mt-0.5 shrink-0">★</span>
                  <p className="text-[#8da3b8] text-xs leading-relaxed">{step.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For locals */}
      <section className="bg-[#0d1e32] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 items-center mb-12">
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase px-4">For Locals</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {localSteps.map((step) => (
              <div key={step.number} className="bg-[#122035] border border-white/8 rounded-2xl p-8">
                <span
                  className="text-5xl text-[#f07b22]/15 block mb-3 leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-[#f0ece4] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#8da3b8] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#8da3b8] text-sm mt-8">
            Locals earn reputation, recognition, and (coming soon) tips from grateful travellers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b1829] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl text-[#f0ece4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Ready to try it yourself?
          </h2>
          <p className="text-[#8da3b8] mb-8">Sign up for early access and be among the first to explore.</p>
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
