import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { type Language, translations, LANGUAGES } from "./translations";
import { pageTranslations } from "./pageTranslations";
import { getItem, setItem } from "../../lib/storage";

type T = (typeof translations)[Language];
type PT = (typeof pageTranslations)[Language];

const STORAGE_KEY = "nativeway-lang";

/**
 * useLayoutEffect has no meaning during the SSG build and React warns when it is
 * used there, so fall back to useEffect on the server. Only the browser path
 * actually runs.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The language the prerenderer (scripts/prerender.mjs) bakes into the static
 * HTML. React's first client render MUST produce this same language or
 * hydration mismatches and React discards the prerendered DOM and rebuilds it —
 * which is visible as the page flashing. Keep this in sync with prerender.mjs.
 */
const PRERENDER_LANGUAGE: Language = "en";

function detectLanguage(): Language {
  const saved = getItem(STORAGE_KEY);
  if (saved && saved in translations) return saved as Language;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("tr")) return "tr";
  if (browserLang.startsWith("no") || browserLang.startsWith("nb") || browserLang.startsWith("nn"))
    return "no";
  return "en";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: T;
  pt: PT;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(PRERENDER_LANGUAGE);

  // Resolve the real language in a *layout* effect: React flushes the resulting
  // re-render synchronously before the browser paints, so a Turkish visitor
  // never sees a frame of the English markup we hydrated against.
  useIsomorphicLayoutEffect(() => {
    const detected = detectLanguage();
    if (detected !== PRERENDER_LANGUAGE) setLanguageState(detected);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setItem(STORAGE_KEY, lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      pt: pageTranslations[language],
      languages: LANGUAGES,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
