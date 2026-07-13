import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://nsjbwadklqmresyqcfuk.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zamJ3YWRrbHFtcmVzeXFjZnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTgyMDcsImV4cCI6MjA5OTUzNDIwN30.-gp2oiBq__o0pILmN9rdUp2bAT6z_ex7maF6mcGls10";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Edge function base URL — all /api/* calls go through this. */
export const EDGE_URL = `${supabaseUrl}/functions/v1/server`;
