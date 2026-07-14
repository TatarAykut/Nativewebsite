import type { Language } from "../i18n/translations";

/**
 * Legal pages (Privacy/Terms/Cookie) are only fully authored in English and
 * Turkish. For zh/no we render the English content plus this notice, rather
 * than ship a truncated/machine-translated legal document.
 */
const NOTICE: Partial<Record<Language, string>> = {
  zh: "此法律文件目前仅提供英文版本。完整的本地化版本即将推出。",
  no: "Dette juridiske innholdet er foreløpig kun tilgjengelig på engelsk. En fullstendig oversettelse kommer snart.",
};

/** Languages whose legal pages fall back to English content. */
export const LEGAL_FALLBACK_LANGS: Language[] = ["zh", "no"];

export function LegalFallbackNotice({ language }: { language: Language }) {
  const msg = NOTICE[language];
  if (!msg) return null;
  return (
    <div
      role="note"
      className="mb-10 rounded-xl border border-[#f07b22]/30 bg-[#f07b22]/5 px-5 py-4 text-sm text-[var(--nw-muted)]"
    >
      {msg}
    </div>
  );
}
