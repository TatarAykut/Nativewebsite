import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?w=1800&h=1200&fit=crop&auto=format"
          alt="Traveler standing by the sea with local village"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1829]/95 via-[#0b1829]/75 to-[#0b1829]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829] via-transparent to-transparent" />
      </div>

      {/* Floating pin dots decoration */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#f07b22] animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#f07b22] animate-pulse opacity-50 delay-300" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[#f07b22] animate-pulse opacity-60 delay-700" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={14} className="text-[#f07b22]" />
            <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase">Discover the world natively</span>
          </div>

          <h1
            className="text-5xl md:text-7xl text-[#f0ece4] mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Travel Easier.
            <br />
            <span className="text-[#f07b22]">Experience</span>
            <br />
            More.
          </h1>

          <p className="text-lg text-[#8da3b8] mb-10 leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            NativeWay connects you with authentic local experiences, hidden gems,
            and real recommendations from people who call the destination home.
            No tourist traps. Just real travel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-app"
              className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[#0b1829] px-7 py-4 rounded-full transition-all duration-200 hover:bg-[#ffa04a] hover:scale-105 active:scale-95 group"
              style={{ fontWeight: 600 }}
            >
              Get Early Access
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#f0ece4] px-7 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div>
              <p className="text-2xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>50+</p>
              <p className="text-xs text-[#8da3b8] tracking-wide mt-0.5">Cities planned</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>1,200+</p>
              <p className="text-xs text-[#8da3b8] tracking-wide mt-0.5">Waitlist members</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl text-[#f0ece4]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>100%</p>
              <p className="text-xs text-[#8da3b8] tracking-wide mt-0.5">Local-first</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-[#f0ece4] animate-pulse" />
        <span className="text-[10px] text-[#f0ece4] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
