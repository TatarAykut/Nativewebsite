import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// ---------------------------------------------------------------------------
// Supabase client (service role — server-side only, never exposed to browser)
// ---------------------------------------------------------------------------
const supabase = () =>
  createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

// ---------------------------------------------------------------------------
// Rate limiter — in-memory, per-IP. Resets on cold start (fine for this scale).
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 3;       // requests
const RATE_LIMIT_WINDOW = 60_000; // per minute

const rateStore = new Map<string, { count: number; resetAt: number }>();

function getClientIP(c: any): string {
  const forwarded = c.req.header("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  // Fallback — Deno.connectInfo available in fetch handler
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Evict expired buckets so rateStore can't grow unbounded across warm invocations.
  if (rateStore.size > 500) {
    for (const [key, val] of rateStore) {
      if (now > val.resetAt) rateStore.delete(key);
    }
  }

  const entry = rateStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use("*", logger(console.log));

// Allowed origins — override via ALLOWED_ORIGINS env (comma-separated) per deploy.
const ALLOWED_ORIGINS = (
  Deno.env.get("ALLOWED_ORIGINS") ??
  "https://nativeway.app,https://www.nativeway.app,http://localhost:5173"
)
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  "/*",
  cors({
    origin: ALLOWED_ORIGINS,
    allowHeaders: ["Content-Type", "Authorization", "x-admin-token"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ---------------------------------------------------------------------------
// Health check
// ---------------------------------------------------------------------------
app.get("/make-server-947b0a07/health", (c) => {
  return c.json({ status: "ok" });
});

// ---------------------------------------------------------------------------
// POST /api/waitlist — submit email to waitlist
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/waitlist", async (c) => {
  // Rate limit
  const ip = getClientIP(c);
  if (!checkRateLimit(ip)) {
    return c.json({ error: "Too many requests. Please wait a minute." }, 429);
  }

  // Parse & validate
  let body: { email?: string };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body." }, 400);
  }

  const email = (body.email ?? "").trim().toLowerCase();

  if (!email) {
    return c.json({ error: "Email is required." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return c.json({ error: "Please enter a valid email address." }, 400);
  }
  if (email.length > 255) {
    return c.json({ error: "Email is too long." }, 400);
  }

  // Insert
  const { error } = await supabase()
    .from("waitlist")
    .insert({ email, source: "website" });

  if (error) {
    // Duplicate — user already signed up
    if (error.code === "23505") {
      return c.json({ alreadySignedUp: true }, 409);
    }
    console.error("waitlist insert error:", error.message);
    return c.json({ error: "Something went wrong. Please try again." }, 500);
  }

  return c.json({ success: true }, 201);
});

// ---------------------------------------------------------------------------
// GET /api/waitlist/count — public real-time signup count
// ---------------------------------------------------------------------------
let cachedCount: number | null = null;
let cachedAt = 0;
const COUNT_CACHE_TTL = 60_000; // 1 minute

app.get("/api/waitlist/count", async (c) => {
  const now = Date.now();

  if (cachedCount !== null && now - cachedAt < COUNT_CACHE_TTL) {
    return c.json({ count: cachedCount });
  }

  const { count, error } = await supabase()
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("waitlist count error:", error.message);
    // Return stale cache if available, otherwise 0
    return c.json({ count: cachedCount ?? 0 });
  }

  cachedCount = count ?? 0;
  cachedAt = now;

  return c.json({ count: cachedCount });
});

// ---------------------------------------------------------------------------
// GET /api/admin/waitlist — admin view (token-protected)
// ---------------------------------------------------------------------------
app.get("/api/admin/waitlist", async (c) => {
  // Prefer the x-admin-token header (query param leaks into request logs/history).
  const token = c.req.header("x-admin-token") ?? c.req.query("token");
  const adminToken = Deno.env.get("ADMIN_TOKEN");

  if (!adminToken || token !== adminToken) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const page = Math.max(1, parseInt(c.req.query("page") ?? "1", 10));
  const limit = Math.min(100, Math.max(1, parseInt(c.req.query("limit") ?? "50", 10)));
  const offset = (page - 1) * limit;

  const { data, error, count } = await supabase()
    .from("waitlist")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("admin waitlist error:", error.message);
    return c.json({ error: "Something went wrong." }, 500);
  }

  return c.json({
    entries: data ?? [],
    page,
    limit,
    total: count ?? 0,
  });
});

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------
Deno.serve(app.fetch);
