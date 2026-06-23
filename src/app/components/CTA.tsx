import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();
  const c = t.cta;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="get-app"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1829 0%, #0f2240 50%, #0b1829 100%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f07b22]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">{c.badge}</span>
        <h2
          className="text-4xl md:text-6xl text-[#f0ece4] leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {c.heading1}
          <br />
          <span className="text-[#f07b22]">{c.heading2}</span>
        </h2>
        <p className="text-[#8da3b8] text-lg leading-relaxed mb-10">{c.sub}</p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-[#122035] border border-[#f07b22]/30 rounded-2xl px-8 py-6">
            <CheckCircle size={22} className="text-[#f07b22]" />
            <p className="text-[#f0ece4]">{c.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={c.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#122035] border border-white/15 text-[#f0ece4] placeholder-[#8da3b8] rounded-full px-6 py-4 outline-none focus:border-[#f07b22]/50 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[#0b1829] px-7 py-4 rounded-full hover:bg-[#ffa04a] hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap group"
              style={{ fontWeight: 600 }}
            >
              {c.button}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        <p className="text-[#8da3b8] text-xs mt-5">{c.disclaimer}</p>
      </div>
    </section>
  );
}
