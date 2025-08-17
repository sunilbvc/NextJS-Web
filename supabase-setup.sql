-- Create the contact_submissions table for storing form data
-- Run this SQL in your Supabase Dashboard → SQL Editor

-- Create the table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for form submissions)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view (optional - for admin panel)
CREATE POLICY "Allow authenticated view" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a policy for admins to delete (if you want admin functionality)
CREATE POLICY "Allow admin delete" ON contact_submissions
  FOR DELETE USING (auth.role() = 'authenticated');

-- Test the table by inserting a sample record
INSERT INTO contact_submissions (name, email, service, message) 
VALUES ('Test User', 'test@example.com', 'Web Development', 'This is a test message');

-- Verify the table was created
SELECT * FROM contact_submissions; 