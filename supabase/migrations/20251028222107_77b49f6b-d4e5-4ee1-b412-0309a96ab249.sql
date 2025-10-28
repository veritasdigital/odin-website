-- Allow anonymous users to submit the marketing strategy form
CREATE POLICY "Allow anonymous form submissions"
ON public.form_submissions
FOR INSERT
TO anon
WITH CHECK (true);