import { EDGE_URL } from "./supabase";
import { getItem, setItem } from "./storage";

/**
 * Waitlist counter — the real signup count from the edge function, cached
 * locally with a short TTL so repeat visits render instantly.
 *
 * getCount() resolves to `null` (not 0) when the count is genuinely unknown, so
 * the UI can hide the stat rather than announce "0 people have joined" after a
 * transient network blip. Nothing here throws: storage goes through lib/storage,
 * which falls back to memory when localStorage is blocked.
 */

const COUNT_KEY = "nativeway-waitlist-count";
const COUNT_TS_KEY = "nativeway-waitlist-count-ts";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchLiveCount(): Promise<number> {
  const res = await fetch(`${EDGE_URL}/api/waitlist/count`);
  if (!res.ok) throw new Error(`count fetch failed: ${res.status}`);
  const data = (await res.json()) as { count?: number };
  if (typeof data.count !== "number") throw new Error("count missing from response");
  return data.count;
}

/** Last known count, fresh or stale. `null` when we have never seen one. */
function readCached(): number | null {
  const raw = getItem(COUNT_KEY);
  if (raw === null) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

function isFresh(): boolean {
  const ts = Number(getItem(COUNT_TS_KEY)) || 0;
  return Date.now() - ts <= CACHE_TTL;
}

function writeCached(count: number): void {
  setItem(COUNT_KEY, String(count));
  setItem(COUNT_TS_KEY, String(Date.now()));
}

/**
 * Resolves to the waitlist count, or `null` if it cannot be determined.
 * Serves a fresh cache immediately; otherwise fetches live, falling back to a
 * stale cached value before giving up.
 */
async function getCount(): Promise<number | null> {
  const cached = readCached();
  if (cached !== null && isFresh()) return cached;

  try {
    const live = await fetchLiveCount();
    writeCached(live);
    return live;
  } catch {
    // Prefer a stale number over no number; null only when we truly have none.
    return cached;
  }
}

/** Optimistically bump the cached count after a confirmed signup. */
function incrementLocally(): void {
  const current = readCached();
  if (current === null) return; // Nothing sensible to bump; the next fetch corrects it.
  writeCached(current + 1);
}

export const waitlistCounter = { get: getCount, increment: incrementLocally };
