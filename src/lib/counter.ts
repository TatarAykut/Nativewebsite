/** Minimal waitlist counter. Tracks signups in localStorage. */
const KEY = "nativeway-waitlist-count";

function getCount(): number {
  return Number(localStorage.getItem(KEY)) || 0;
}

function incrementCount(): number {
  const next = getCount() + 1;
  localStorage.setItem(KEY, String(next));
  return next;
}

export const waitlistCounter = { get: getCount, increment: incrementCount };
