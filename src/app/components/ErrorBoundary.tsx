import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("ErrorBoundary caught:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--nw-bg)]">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f07b22]/10 mb-6">
              <AlertTriangle size={32} className="text-[var(--nw-accent-text)]" />
            </div>
            <h1 className="text-2xl text-[var(--nw-text)] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Something went wrong
            </h1>
            <p className="text-[var(--nw-muted)] mb-8 leading-relaxed">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 bg-[#f07b22] text-[var(--nw-accent-fg)] px-6 py-3 rounded-full hover:bg-[#ffa04a] transition-colors"
              style={{ fontWeight: 600 }}
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
