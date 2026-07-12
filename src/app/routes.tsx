import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";

// Code-split all non-home pages for faster initial load
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage").then(m => ({ default: m.FeaturesPage })));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage").then(m => ({ default: m.HowItWorksPage })));
const ValuesPage = lazy(() => import("./pages/ValuesPage").then(m => ({ default: m.ValuesPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then(m => ({ default: m.TermsPage })));
const CookiePage = lazy(() => import("./pages/CookiePage").then(m => ({ default: m.CookiePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: () => <Lazy><AboutPage /></Lazy> },
      { path: "features", Component: () => <Lazy><FeaturesPage /></Lazy> },
      { path: "how-it-works", Component: () => <Lazy><HowItWorksPage /></Lazy> },
      { path: "values", Component: () => <Lazy><ValuesPage /></Lazy> },
      { path: "privacy", Component: () => <Lazy><PrivacyPage /></Lazy> },
      { path: "terms", Component: () => <Lazy><TermsPage /></Lazy> },
      { path: "cookies", Component: () => <Lazy><CookiePage /></Lazy> },
      { path: "*", Component: () => <Lazy><NotFoundPage /></Lazy> },
    ],
  },
]);
