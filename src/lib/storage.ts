/**
 * Safe localStorage access.
 *
 * `localStorage` is a getter that THROWS (SecurityError) when storage is
 * blocked — Safari with "Block all cookies", enterprise policies, sandboxed
 * iframes, some private-mode configurations. Touching it unguarded during a
 * render would take down the whole site, so every access goes through here.
 *
 * When storage is unavailable we fall back to an in-memory map: preferences
 * still work for the session, they just do not survive a reload.
 */

const memory = new Map<string, string>();

let available: boolean | null = null;

function storageWorks(): boolean {
  if (available !== null) return available;
  try {
    const probe = "__nw_probe__";
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    available = true;
  } catch {
    available = false;
  }
  return available;
}

export function getItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  if (!storageWorks()) return memory.get(key) ?? null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return memory.get(key) ?? null;
  }
}

export function setItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  memory.set(key, value);
  if (!storageWorks()) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Quota exceeded or storage revoked mid-session — the in-memory copy stands.
  }
}
