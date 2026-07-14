import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { getItem, setItem } from "../../lib/storage";

const STORAGE_KEY = "nativeway-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  const c = t.cookieBanner;

  useEffect(() => {
    const consented = getItem(STORAGE_KEY);
    if (!consented) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-[100] bg-[var(--nw-bg-card)] border border-[var(--nw-border)] rounded-2xl p-5 shadow-2xl"
      role="dialog"
      aria-label={c.ariaLabel}
    >
      <div className="flex items-start gap-3 mb-3">
        <Cookie size={18} className="text-[var(--nw-accent-text)] shrink-0 mt-0.5" />
        <p className="text-sm text-[var(--nw-muted)] leading-relaxed">
          {c.text}{" "}
          <Link to="/cookies" className="text-[var(--nw-accent-text)] hover:underline" onClick={dismiss}>
            {c.learnMore}
          </Link>
        </p>
        <button onClick={dismiss} className="text-[var(--nw-muted)] hover:text-[var(--nw-text)] shrink-0" aria-label={c.dismiss}>
          <X size={16} />
        </button>
      </div>
      <button
        onClick={accept}
        className="w-full bg-[#f07b22] text-[var(--nw-accent-fg)] py-2.5 rounded-full text-sm hover:bg-[#ffa04a] transition-colors"
        style={{ fontWeight: 600 }}
      >
        {c.accept}
      </button>
    </div>
  );
}
