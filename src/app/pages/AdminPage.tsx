import { useState, useCallback } from "react";
import { Loader2, LogOut, RefreshCw } from "lucide-react";
import { EDGE_URL } from "../../lib/supabase";
import { SEO } from "../components/SEO";

interface WaitlistEntry {
  id: number;
  email: string;
  source: string;
  created_at: string;
}

interface WaitlistResponse {
  entries: WaitlistEntry[];
  page: number;
  limit: number;
  total: number;
}

export function AdminPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem("nw-admin-token") ?? "");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<WaitlistResponse | null>(null);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async (authToken: string, p: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${EDGE_URL}/api/admin/waitlist?page=${p}&limit=50`, {
        headers: { "x-admin-token": authToken },
      });
      if (res.status === 401) {
        setError("Invalid token. Please check and try again.");
        sessionStorage.removeItem("nw-admin-token");
        setAuthed(false);
        setToken("");
        return;
      }
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = await res.json();
      setData(json);
      setAuthed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    sessionStorage.setItem("nw-admin-token", token.trim());
    fetchData(token.trim(), 1);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("nw-admin-token");
    setAuthed(false);
    setToken("");
    setData(null);
  };

  const totalPages = data ? Math.ceil(data.total / data.limit) : 0;

  return (
    <div className="pt-24 min-h-screen bg-[var(--nw-bg)]">
      <SEO
        title="Admin"
        path="/admin"
        description="NativeWay internal waitlist dashboard."
        noIndex
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-4xl text-[var(--nw-text)] mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Waitlist Admin
            </h1>
            <p className="text-[var(--nw-muted)]">
              {authed && data ? `${data.total} signups` : "Sign in to view entries"}
            </p>
          </div>
          {authed && (
            <button
              onClick={() => fetchData(token, page)}
              disabled={loading}
              className="flex items-center gap-2 text-sm text-[var(--nw-muted)] hover:text-[var(--nw-text)] transition-colors disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          )}
        </div>

        {!authed ? (
          <form onSubmit={handleLogin} className="max-w-md">
            <label htmlFor="admin-token" className="block text-sm text-[var(--nw-muted)] mb-2">
              Admin Token
            </label>
            <div className="flex gap-3">
              <input
                id="admin-token"
                type="password"
                value={token}
                onChange={(e) => { setToken(e.target.value); setError(""); }}
                placeholder="Enter admin token..."
                className="flex-1 bg-[var(--nw-bg-card)] border border-[var(--nw-border)] text-[var(--nw-text)] rounded-full px-5 py-3 outline-none focus:border-[#f07b22]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#f07b22] text-[var(--nw-accent-fg)] px-6 py-3 rounded-full hover:bg-[#ffa04a] transition-all duration-200 disabled:opacity-50"
                style={{ fontWeight: 600 }}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : "Sign In"}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-3" role="alert">{error}</p>}
          </form>
        ) : (
          <>
            {error && <p className="text-red-400 text-sm mb-4" role="alert">{error}</p>}

            {loading && !data ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 size={24} className="animate-spin text-[var(--nw-accent-text)]" />
              </div>
            ) : data && data.entries.length > 0 ? (
              <>
                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-[var(--nw-border)]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--nw-bg-card)] border-b border-[var(--nw-border)]">
                      <tr>
                        <th className="px-5 py-3 text-[var(--nw-muted)]" style={{ fontWeight: 600 }}>Email</th>
                        <th className="px-5 py-3 text-[var(--nw-muted)]" style={{ fontWeight: 600 }}>Source</th>
                        <th className="px-5 py-3 text-[var(--nw-muted)]" style={{ fontWeight: 600 }}>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.entries.map((entry) => (
                        <tr key={entry.id} className="border-t border-[var(--nw-border)] hover:bg-[var(--nw-bg-card)]/50 transition-colors">
                          <td className="px-5 py-3 text-[var(--nw-text)]">{entry.email}</td>
                          <td className="px-5 py-3 text-[var(--nw-muted)]">{entry.source}</td>
                          <td className="px-5 py-3 text-[var(--nw-muted)] whitespace-nowrap">
                            {new Date(entry.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button
                      onClick={() => { const p = page - 1; setPage(p); fetchData(token, p); }}
                      disabled={page <= 1 || loading}
                      className="px-4 py-2 rounded-full text-sm border border-[var(--nw-border)] text-[var(--nw-muted)] hover:text-[var(--nw-text)] disabled:opacity-30 transition-colors"
                    >
                      Prev
                    </button>
                    <span className="text-sm text-[var(--nw-muted)] px-3">
                      {page} / {totalPages}
                    </span>
                    <button
                      onClick={() => { const p = page + 1; setPage(p); fetchData(token, p); }}
                      disabled={page >= totalPages || loading}
                      className="px-4 py-2 rounded-full text-sm border border-[var(--nw-border)] text-[var(--nw-muted)] hover:text-[var(--nw-text)] disabled:opacity-30 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-[var(--nw-border)]">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm text-[var(--nw-muted)] hover:text-red-400 transition-colors"
                  >
                    <LogOut size={14} />
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-[var(--nw-muted)] text-lg mb-2">No entries yet</p>
                <p className="text-[var(--nw-muted)] text-sm">Waitlist is empty. Share the site to get signups!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
