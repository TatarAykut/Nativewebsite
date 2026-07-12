import { EDGE_URL } from "./supabase";

/**
 * Waitlist counter — fetches the real signup count from the edge function,
 * cached in localStorage with a 5-minute TTL for fast repeat reads.
 */

const COUNT_KEY = "nativeway-waitlist-count";
const COUNT_TS_KEY = "nativeway-waitlist-count-ts";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchLiveCount(): Promise<number> {
  const res = await fetch(`${EDGE_URL}/api/waitlist/count`);
  if (!res.ok) throw new Error(`count fetch failed: ${res.status}`);
  const data = await res.json();
  return data.count ?? 0;
}

function getCachedCount(): number | null {
  const ts = Number(localStorage.getItem(COUNT_TS_KEY)) || 0;
  if (Date.now() - ts > CACHE_TTL) return null;
  const raw = localStorage.getItem(COUNT_KEY);
  return raw !== null ? Number(raw) : null;
}

function setCachedCount(count: number): void {
  localStorage.setItem(COUNT_KEY, String(count));
  localStorage.setItem(COUNT_TS_KEY, String(Date.now()));
}

/**
 * Returns the real waitlist count.
 * Uses cached value when fresh (< 5 min), otherwise fetches live.
 * On network errors falls back to cached value (even if stale) or 0.
 */
async function getCount(): Promise<number> {
  try {
    const cached = getCachedCount();
    if (cached !== null) return cached;

    const live = await fetchLiveCount();
    setCachedCount(live);
    return live;
  } catch {
    // Return stale cache or 0 on network failure
    const stale = Number(localStorage.getItem(COUNT_KEY)) || 0;
    return stale;
  }
}

/** Increment the cached count by 1 (optimistic, after successful signup). */
function incrementLocally(): number {
  const current = Number(localStorage.getItem(COUNT_KEY)) || 0;
  const next = current + 1;
  localStorage.setItem(COUNT_KEY, String(next));
  localStorage.setItem(COUNT_TS_KEY, String(Date.now()));
  return next;
}

/**
 * Force-refresh the count (bypasses cache).
 * Call after a successful signup so the next getCount() returns live data.
 */
async function refresh(): Promise<number> {
  try {
    const live = await fetchLiveCount();
    setCachedCount(live);
    return live;
  } catch {
    return Number(localStorage.getItem(COUNT_KEY)) || 0;
  }
}

export const waitlistCounter = { get: getCount, increment: incrementLocally, refresh };
