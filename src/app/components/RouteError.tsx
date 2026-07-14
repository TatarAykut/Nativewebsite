import { useRouteError, Link } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

/**
 * Router-level error boundary. React Router intercepts render/loader errors
 * inside routes and renders its OWN default screen unless a route provides
 * this — so it's wired as `errorElement` on the root route in routes.tsx.
 * Kept English-only and dependency-light, matching the class ErrorBoundary.
 */
export function RouteError() {
  const error = useRouteError();
  // Surface the message in the console for debugging; keep the UI generic.
  if (error) console.error("Route error:", error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--nw-bg)]">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f07b22]/10 mb-6">
          <AlertTriangle size={32} className="text-[var(--nw-accent-text)]" />
        </div>
        <h1
          className="text-2xl text-[var(--nw-text)] mb-3"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Something went wrong
        </h1>
        <p className="text-[var(--nw-muted)] mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or head back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-6 py-3 rounded-full hover:bg-[#ffa04a] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <RefreshCw size={16} />
            Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 border border-[var(--nw-border)] text-[var(--nw-text)] px-6 py-3 rounded-full hover:bg-[var(--nw-bg-card)] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <Home size={16} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
