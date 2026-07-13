import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";

/**
 * The provider stack, shared verbatim by the browser entry (src/main.tsx) and
 * the build-time SSG entry (src/entry-server.tsx). Both must render the exact
 * same tree or the generated HTML will not hydrate.
 */
export function AppProviders({
  children,
  helmetContext,
}: {
  children: ReactNode;
  /** SSG only: Helmet writes the collected <head> tags into this object. */
  helmetContext?: Record<string, unknown>;
}) {
  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
