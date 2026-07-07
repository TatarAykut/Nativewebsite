import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[var(--nw-bg)]">
      <SEO title="Page Not Found" path="" description="The page you're looking for doesn't exist." />
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="text-8xl mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          <span className="text-[#f07b22]">4</span>
          <span className="text-[var(--nw-text)]">0</span>
          <span className="text-[#f07b22]">4</span>
        </div>
        <h1 className="text-2xl text-[var(--nw-text)] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          Page not found
        </h1>
        <p className="text-[var(--nw-muted)] mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-6 py-3 rounded-full hover:bg-[#ffa04a] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center justify-center gap-2 border border-[var(--nw-border)] text-[var(--nw-text)] px-6 py-3 rounded-full hover:bg-[var(--nw-bg-card)] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <Search size={16} />
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
}
