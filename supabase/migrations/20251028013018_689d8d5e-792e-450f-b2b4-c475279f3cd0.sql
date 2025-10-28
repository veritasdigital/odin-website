-- Create table for marketing strategy form submissions
CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  industry TEXT NOT NULL,
  current_marketing TEXT[] DEFAULT '{}',
  monthly_budget TEXT NOT NULL,
  primary_goal TEXT NOT NULL,
  target_audience TEXT NOT NULL,
  current_challenges TEXT DEFAULT '',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- No public access - only service role can read/write
-- This ensures form submissions are only accessible to admins via dashboard
CREATE POLICY "Service role can manage all submissions"
ON public.form_submissions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create index on created_at for efficient querying
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_form_submissions_status ON public.form_submissions(status);