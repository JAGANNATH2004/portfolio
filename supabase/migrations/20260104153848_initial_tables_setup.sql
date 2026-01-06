/*
  # Initial Database Setup

  1. New Tables
    - `resume_downloads`
      - `id` (uuid, primary key) - Unique identifier for each download
      - `downloaded_at` (timestamp) - When the resume was downloaded
      - `user_agent` (text) - Browser/device information
      - `ip_hash` (text) - Hashed IP for privacy
      - `created_at` (timestamp) - Record creation time
    
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Visitor's name
      - `email` (text) - Visitor's email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `status` (text) - Processing status (pending, sent, failed)
      - `created_at` (timestamp) - Submission time
      - `updated_at` (timestamp) - Last update time

  2. Security
    - Enable RLS on all tables
    - Public read access for downloads (statistics only)
    - No direct write access from frontend (use edge functions)
    - Contact submissions are write-only from frontend
*/

CREATE TABLE IF NOT EXISTS resume_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  downloaded_at timestamptz DEFAULT now(),
  user_agent text,
  ip_hash text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resume_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view download statistics"
  ON resume_downloads FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "No direct select on contact submissions"
  ON contact_submissions FOR SELECT
  TO public
  USING (false);
