/*
# Add ip_hash column for server-side rate limiting on contact form

1. Modified Tables
- `contact_submissions` — add `ip_hash` (text, nullable initially, then set NOT NULL)
  This column stores a SHA-256 hash of the sender's IP address so the edge function
  can rate-limit submissions (max 2 per hour per IP) without storing the raw IP.

2. Security
- Drop and recreate INSERT policy to allow anon + authenticated inserts (public contact form).
- Ensure no SELECT/UPDATE/DELETE policies exist for anon (write-only from client).

3. Notes
- The table already existed from a prior migration with columns: id, name, email,
  subject, message, status, created_at, updated_at.
- We add an index on (ip_hash, created_at) for fast rate-limit lookups.
*/

-- Add ip_hash column
ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS ip_hash text;

-- Backfill any existing rows with a placeholder so we can set NOT NULL
UPDATE contact_submissions SET ip_hash = 'unknown' WHERE ip_hash IS NULL;

ALTER TABLE contact_submissions
  ALTER COLUMN ip_hash SET NOT NULL;

-- Create index for rate-limit queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_ip_hash_created
  ON contact_submissions (ip_hash, created_at);

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies and recreate
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Remove any SELECT/UPDATE/DELETE policies for anon if they exist
DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
DROP POLICY IF EXISTS "anon_update_contact" ON contact_submissions;
DROP POLICY IF EXISTS "anon_delete_contact" ON contact_submissions;
