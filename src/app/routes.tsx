import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router";
import { Root } from "./components/Root";
import { RouteError } from "./components/RouteError";

// The eight public pages are imported eagerly and NOT code-split. They are
// prerendered by scripts/ssg.mjs, and React.lazy would make the client's first
// render emit a Suspense fallback (the spinner) rather than the page — which
// cannot hydrate the prerendered markup, so React would discard it and rebuild
// the page from scratch (a visible flash). Together they are only a few kB.
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ValuesPage } from "./pages/ValuesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { CookiePage } from "./pages/CookiePage";

// Never prerendered, so lazy-loading them costs nothing at hydration time.
const AdminPage = lazy(() => import("./pages/AdminPage").then((m) => ({ default: m.AdminPage })));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--nw-bg)]">
      <div className="w-6 h-6 border-2 border-[#f07b22] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Lazy({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

/**
 * The shared route table. The browser builds a data router from it (below) and
 * the SSG build feeds the same array to createStaticHandler, so both render an
 * identical tree — which is what makes the generated HTML hydratable.
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    errorElement: <RouteError />,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "features", Component: FeaturesPage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "values", Component: ValuesPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
      { path: "cookies", Component: CookiePage },
      {
        path: "admin",
        Component: () => (
          <Lazy>
            <AdminPage />
          </Lazy>
        ),
      },
      {
        path: "*",
        Component: () => (
          <Lazy>
            <NotFoundPage />
          </Lazy>
        ),
      },
    ],
  },
];

// NOTE: no createBrowserRouter here. This module is imported by the SSG entry,
// which runs in Node — and createBrowserRouter touches `document` at call time.
// The browser router is created in App.tsx, which only the client entry loads.
