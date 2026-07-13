/**
 * Backend endpoint config.
 *
 * The browser deliberately does NOT use @supabase/supabase-js. Every read and
 * write goes through the Hono edge function (which holds the service_role key
 * server-side), so the SDK's only job here was to be constructed — while adding
 * ~214 kB (~55 kB gzipped) to the bundle, roughly a quarter of the JS payload.
 * A plain fetch() to EDGE_URL does the same work for free.
 *
 * The edge function does not require an Authorization header from the client,
 * so no anon key needs to ship to the browser either.
 */

const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  "https://nsjbwadklqmresyqcfuk.supabase.co";

/** Edge function base URL — all /api/* calls go through this. */
export const EDGE_URL = `${supabaseUrl}/functions/v1/server`;
