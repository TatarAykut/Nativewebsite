import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { getItem, setItem } from "../../lib/storage";

type Theme = "dark" | "light";

const STORAGE_KEY = "nativeway-theme";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * The theme is already resolved and applied to <html> by the blocking boot
 * script in index.html, so the first paint is correct. We read it back from the
 * DOM rather than re-deriving it, which keeps React's state in lockstep with
 * what is on screen and avoids a second, visible theme switch on mount.
 */
function readAppliedTheme(): Theme {
  // During the SSG build there is no DOM. Render the dark default — the theme is
  // expressed purely through CSS variables and no component branches on it, so
  // the markup is theme-independent and hydrates under either theme.
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readAppliedTheme);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // The boot script already applied the initial theme to <html> and we have
    // not persisted anything the user did not choose. Skip the first run so we
    // neither redundantly touch the DOM nor write a value the user never picked
    // (which would silently opt them out of following their OS setting).
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    document.documentElement.classList.toggle("light", theme === "light");
    setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Follow the OS theme for as long as the user has not made an explicit choice.
  useEffect(() => {
    if (getItem(STORAGE_KEY) !== null) return;

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => setTheme(e.matches ? "light" : "dark");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
