-- Drop the policy first, then recreate function with secure search_path
DROP POLICY IF EXISTS "Allow anonymous form submissions with rate limit" ON form_submissions;
DROP FUNCTION IF EXISTS check_submission_rate_limit() CASCADE;

-- Recreate function with secure search_path
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Recreate the RLS policy
CREATE POLICY "Allow anonymous form submissions with rate limit"
ON form_submissions
FOR INSERT
TO public
WITH CHECK (check_submission_rate_limit());