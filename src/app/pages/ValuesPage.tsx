import { Link } from "react-router";
import { ArrowRight, Heart, Shield, Users, Compass, Leaf, Eye } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Authenticity First",
    color: "#f07b22",
    summary: "Every recommendation comes from real locals — residents, not influencers.",
    description:
      "We built NativeWay around a simple belief: the most valuable travel information comes from people who actually live somewhere. Not from algorithmic systems that surface the most-reviewed, not from influencers who stayed for two nights, not from guidebooks written two years ago.",
    principles: [
      "Locals must verify their residency before contributing",
      "No paid placements or sponsored recommendations",
      "Content is reviewed by multiple locals before being surfaced",
      "Transparency labels on every entry (how many locals confirmed this)",
    ],
    quote: "\"If my mum wouldn't eat there, it doesn't go on the map.\" — Rania, Head of Community",
  },
  {
    icon: Users,
    title: "Community-Driven",
    color: "#3a8fd9",
    summary: "The whole ecosystem runs on mutual trust between locals and travellers.",
    description:
      "NativeWay is not a product that was designed behind closed doors and handed to users. It's a living system that improves because locals contribute honestly and travellers respond with genuine appreciation. Both sides have obligations, both sides benefit.",
    principles: [
      "Locals earn reputation, not just thanks",
      "Travellers are expected to leave honest, specific feedback",
      "Community moderators (locals themselves) flag bad actors",
      "Decisions about platform changes are informed by community input",
    ],
    quote: "\"This platform only works if people choose honesty over being nice. We ask for both where possible, but honesty first.\" — Mateo, CEO",
  },
  {
    icon: Heart,
    title: "Support Local",
    color: "#e84393",
    summary: "We deliberately direct tourism toward independent businesses and local culture.",
    description:
      "Mass tourism has hollowed out countless city centres, replacing local culture with international chains and tourist-priced menus. NativeWay exists partly as a corrective — to actively route attention and money toward the places that make a destination worth visiting.",
    principles: [
      "Independent businesses are always prioritised in discovery",
      "Chains are not surfaced in local recommendations",
      "Cultural and heritage sites receive dedicated promotion",
      "NativeWay donates 2% of revenue to local preservation funds",
    ],
    quote: "\"The best souvenir you can take home is knowing you spent money somewhere that needed it.\" — Aiko, CTO",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    color: "#4caf7d",
    summary: "Your data is yours. Full stop.",
    description:
      "The travel industry is built on data extraction. Your searches, your bookings, your location history — all harvested and sold. NativeWay is built on the opposite model. We make money when you find value in the app. That's the only incentive we need.",
    principles: [
      "No location data sold to third parties — ever",
      "No behavioural tracking for advertising",
      "Minimal data collection: we take only what the product needs",
      "Full data export and account deletion available at any time",
    ],
    quote: "\"We could make more money selling your data. We chose not to. That's not a feature — it's a commitment.\" — Diego, Design",
  },
  {
    icon: Leaf,
    title: "Sustainable Travel",
    color: "#7ec850",
    summary: "We think about the long-term health of destinations, not just visitor numbers.",
    description:
      "Some places are loved to death. Overtourism destroys the very qualities that made a destination attractive. NativeWay is built with features that consciously manage visitor flow — protecting hidden gems, spreading discovery across less-visited areas, and educating travellers on responsible behaviour.",
    principles: [
      "Hidden Gems visibility is capped to prevent viral overcrowding",
      "Cultural etiquette guides on every destination page",
      "Off-season travel is promoted with seasonal local content",
      "Partnerships with local environmental groups",
    ],
    quote: "\"We want the places we love to still be worth loving in 20 years.\" — Rania, Head of Community",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    color: "#9b59b6",
    summary: "We tell you how the sausage is made — because you deserve to know.",
    description:
      "Most travel platforms are black boxes. NativeWay publishes its content moderation guidelines, its local verification process, and its business model openly. If we change anything significant, we tell the community first.",
    principles: [
      "Public content moderation policy",
      "Open changelog of platform updates",
      "Business model clearly explained: subscription, no ads",
      "Community feedback published (including critical)",
    ],
    quote: "\"Trust is built by showing your work. Every time.\" — Mateo, CEO",
  },
];

export function ValuesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2240] to-[#0b1829]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f07b22]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Our Values</span>
          <h1
            className="text-5xl md:text-6xl text-[#f0ece4] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            What we actually <span className="text-[#f07b22]">stand for</span>
          </h1>
          <p className="text-xl text-[#8da3b8] leading-relaxed max-w-2xl mx-auto">
            Values aren't a marketing page — they're the decisions we make when it costs us something.
            Here's what we've committed to, and why.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0b1829] py-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
          {values.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${v.color}15` }}
                >
                  <v.icon size={24} style={{ color: v.color }} />
                </div>
                <div>
                  <h2
                    className="text-2xl text-[#f0ece4]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {v.title}
                  </h2>
                  <p style={{ color: v.color }} className="text-sm mt-0.5">{v.summary}</p>
                </div>
              </div>

              <div className="bg-[#122035] border border-white/8 rounded-2xl p-8">
                <p className="text-[#8da3b8] leading-relaxed mb-7">{v.description}</p>
                <ul className="flex flex-col gap-3 mb-7">
                  {v.principles.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-[#8da3b8]">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: v.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <blockquote
                  className="border-l-2 pl-5 italic text-sm text-[#8da3b8]"
                  style={{ borderColor: v.color }}
                >
                  {v.quote}
                </blockquote>
              </div>

              {i < values.length - 1 && <div className="h-px bg-white/5" />}
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-[#0d1e32]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-[#f0ece4] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            These aren't aspirations — they're constraints
          </h2>
          <p className="text-[#8da3b8] leading-relaxed mb-4">
            We've turned our values into hard product rules. We can't insert a sponsored recommendation
            even if we wanted to — the system doesn't allow it. We can't sell location data — we don't
            collect it in a form that can be sold.
          </p>
          <p className="text-[#8da3b8] leading-relaxed">
            That's the difference between a value statement and a value. We build the constraints in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b1829] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl text-[#f0ece4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Share our values? Come join us.
          </h2>
          <p className="text-[#8da3b8] mb-8">Early access is open — and free for the first year.</p>
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
