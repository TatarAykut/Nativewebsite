export function About() {
  return (
    <section id="about" className="bg-[#0b1829] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Our Story</span>
            <h2
              className="text-4xl md:text-5xl text-[#f0ece4] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Born from a bad travel experience
            </h2>
            <p className="text-[#8da3b8] leading-relaxed mb-6">
              We were tired of overpaying for mediocre tourist restaurants while the real gems were just around the corner.
              Tired of algorithmic travel guides that feel the same in every city. Tired of missing the soul of a place.
            </p>
            <p className="text-[#8da3b8] leading-relaxed mb-8">
              NativeWay was built with one belief: <span className="text-[#f0ece4]">the best travel guide is always a local.</span> We connect travelers
              with authentic insider knowledge — the neighborhood coffee shop that's been there for 40 years,
              the shortcut to the viewpoint, the market only open on Sundays.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["Mateo", "Aiko", "Rania"].map((name, i) => (
                  <div
                    key={name}
                    className="w-9 h-9 rounded-full border-2 border-[#0b1829] bg-[#1a2f47] flex items-center justify-center text-xs text-[#f07b22]"
                    style={{ zIndex: 3 - i }}
                  >
                    {name[0]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#8da3b8]">Founded by travelers, for travelers</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#122035]">
              <img
                src="https://images.unsplash.com/photo-1780616144913-83206bd3b512?w=800&h=1000&fit=crop&auto=format"
                alt="Traditional local coffee shop exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0b1829]/80 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
                <p className="text-[#f0ece4] text-sm mb-1" style={{ fontWeight: 600 }}>Yamamoto Coffee, Kyoto</p>
                <p className="text-[#8da3b8] text-xs">Open since 1962 · Recommended by 47 locals</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-[#f07b22]" />
                  ))}
                </div>
              </div>
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-[#f07b22]/10 border border-[#f07b22]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
