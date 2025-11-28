/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Contact name
      - `phone` (text, required) - Contact phone number
      - `email` (text, optional) - Contact email address
      - `message` (text, optional) - Contact message
      - `language` (text) - Language used when submitting
      - `created_at` (timestamptz) - Timestamp of submission
      - `email_sent` (boolean) - Flag to track if notification email was sent
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert submissions
    - Add policy for authenticated admins to view all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  message text,
  language text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);