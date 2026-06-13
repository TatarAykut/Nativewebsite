const steps = [
  {
    number: "01",
    title: "Pick your destination",
    description:
      "Search any of our supported cities. We'll show you what locals actually love — not just what's trending on social media.",
    image: "https://images.unsplash.com/photo-1681118143075-5f5a10c9c092?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Person standing on a stone wall overlooking a city",
  },
  {
    number: "02",
    title: "Explore native recommendations",
    description:
      "Browse maps, read insider reviews, and save places to your personal trip board. Filter by vibe, budget, or time of day.",
    image: "https://images.unsplash.com/photo-1761150285819-6642e509f9ca?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Outdoor cafe with local atmosphere",
  },
  {
    number: "03",
    title: "Go and experience it",
    description:
      "Head out with offline maps and local tips in your pocket. Chat with the community if you get lost or want a live recommendation.",
    image: "https://images.unsplash.com/photo-1716485089024-b2949569f1b1?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Traveler with suitcase exploring the city",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0d1e32] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">How It Works</span>
          <h2
            className="text-4xl md:text-5xl text-[#f0ece4] max-w-lg mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Three steps to a better trip
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#122035]">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1829]/40 to-transparent" />
              </div>

              <div className="py-4">
                <span
                  className="text-7xl text-[#f07b22]/15 block mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-2xl md:text-3xl text-[#f0ece4] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#8da3b8] leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
