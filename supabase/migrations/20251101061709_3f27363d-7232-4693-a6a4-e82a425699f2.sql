-- Add server-side input validation constraints to form_submissions table
ALTER TABLE form_submissions 
  ADD CONSTRAINT email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT first_name_length CHECK (char_length(first_name) BETWEEN 1 AND 50),
  ADD CONSTRAINT last_name_length CHECK (char_length(last_name) BETWEEN 1 AND 50),
  ADD CONSTRAINT company_length CHECK (char_length(company) BETWEEN 1 AND 100),
  ADD CONSTRAINT phone_length CHECK (char_length(phone) BETWEEN 1 AND 20),
  ADD CONSTRAINT target_audience_length CHECK (char_length(target_audience) <= 500),
  ADD CONSTRAINT current_challenges_length CHECK (char_length(current_challenges) <= 1000);

-- Create rate limiting function to prevent spam submissions
CREATE OR REPLACE FUNCTION check_submission_rate_limit()
RETURNS BOOLEAN AS $$
DECLARE
  hourly_limit INTEGER := 10; -- Max 10 submissions per hour globally
  recent_count INTEGER;
BEGIN
  -- Count submissions in the last hour
  SELECT COUNT(*) INTO recent_count
  FROM form_submissions
  WHERE created_at > NOW() - INTERVAL '1 hour';
  
  -- Return true if under limit, false if over
  RETURN recent_count < hourly_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update the RLS policy to include rate limiting
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON form_submissions;

CREATE POLICY "Allow anonymous form submissions with rate limit"
ON form_submissions
FOR INSERT
TO public
WITH CHECK (check_submission_rate_limit());