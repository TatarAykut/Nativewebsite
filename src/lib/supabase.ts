import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://lnfgtcgnacmubnovzexi.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZmd0Y2duYWNtdWJub3Z6ZXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNTc3MzYsImV4cCI6MjA5NzkzMzczNn0.TYkgSzozC8sDsc8mlyA8MZaQMIm10exla-q3rh87sY8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
