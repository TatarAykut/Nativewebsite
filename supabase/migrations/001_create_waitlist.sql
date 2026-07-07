-- Create waitlist table for early access signups
-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/lnfgtcgnacmubnovzexi/sql/new

CREATE TABLE IF NOT EXISTS waitlist (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert their email
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only allow users to see their own entry (requires auth, not needed for waitlist)
-- No SELECT policy for anon users (privacy)
