-- Create table for strategy session submissions
CREATE TABLE public.strategy_session_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_type TEXT NOT NULL,
  current_marketing TEXT[] NOT NULL,
  marketing_budget TEXT NOT NULL,
  website_url TEXT NOT NULL,
  business_description TEXT NOT NULL,
  current_revenue TEXT NOT NULL,
  target_revenue TEXT NOT NULL,
  biggest_obstacle TEXT NOT NULL,
  timeline TEXT NOT NULL,
  commitment_level INTEGER NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE public.strategy_session_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone
CREATE POLICY "Allow public inserts" 
ON public.strategy_session_submissions 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create policy for viewing submissions (authenticated users only)
CREATE POLICY "Allow authenticated users to view all submissions" 
ON public.strategy_session_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Create index for better performance
CREATE INDEX idx_strategy_sessions_created_at ON public.strategy_session_submissions(created_at DESC);
CREATE INDEX idx_strategy_sessions_status ON public.strategy_session_submissions(status);