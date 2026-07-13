import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { EDGE_URL } from "../../lib/supabase";
import { waitlistCounter } from "../../lib/counter";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();
  const c = t.cta;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    const trimmed = email.trim();
    if (!trimmed) {
      setError(c.errorEmpty);
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setError(c.errorInvalid);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${EDGE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      // 409 = already signed up — show success but do NOT bump the counter (no new row)
      if (res.status === 409) {
        setSubmitted(true);
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error || `Request failed (${res.status})`);
      }

      // Optimistic +1 only. Don't refresh() here: the count endpoint is cached
      // ~60s server-side and would clobber this bump with the pre-signup value.
      waitlistCounter.increment();
      setSubmitted(true);
    } catch {
      setError(c.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="get-app"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--nw-bg) 0%, var(--nw-bg-alt) 50%, var(--nw-bg) 100%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f07b22]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <span className="text-[var(--nw-accent-text)] text-xs tracking-[0.2em] uppercase block mb-4">{c.badge}</span>
        <h2
          className="text-4xl md:text-6xl text-[var(--nw-text)] leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {c.heading1}
          <br />
          <span className="text-[var(--nw-accent-text)]">{c.heading2}</span>
        </h2>
        <p className="text-[var(--nw-muted)] text-lg leading-relaxed mb-10">{c.sub}</p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-[var(--nw-bg-card)] border border-[#f07b22]/30 rounded-2xl px-8 py-6">
            <CheckCircle size={22} className="text-[var(--nw-accent-text)]" />
            <p className="text-[var(--nw-text)]">{c.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
            <div className="flex-1">
              <label htmlFor="waitlist-email" className="sr-only">{c.placeholder}</label>
              <input
                id="waitlist-email"
                type="email"
                placeholder={c.placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                required
                autoComplete="email"
                aria-invalid={!!error}
                aria-describedby={error ? "waitlist-error" : undefined}
                className="w-full bg-[var(--nw-bg-card)] border border-[var(--nw-border)] text-[var(--nw-text)] placeholder-[var(--nw-muted)] rounded-full px-6 py-4 outline-none focus:border-[#f07b22]/50 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-7 py-4 rounded-full hover:bg-[#ffa04a] hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 whitespace-nowrap group"
              style={{ fontWeight: 600 }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              )}
              {loading ? c.loading : c.button}
            </button>
          </form>
        )}
        {error && (
          <p id="waitlist-error" role="alert" className="text-red-400 text-sm mt-3">
            {error}
          </p>
        )}
        <p className="text-[var(--nw-muted)] text-xs mt-5">{c.disclaimer}</p>
      </div>
    </section>
  );
}
