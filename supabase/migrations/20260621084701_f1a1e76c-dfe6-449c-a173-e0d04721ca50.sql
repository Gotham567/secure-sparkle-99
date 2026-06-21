
-- Tighten contact_submissions INSERT policy (no longer "always true") and add explicit deny-SELECT
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can insert contact submissions"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 1 AND 100
    AND length(btrim(email)) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(btrim(message)) BETWEEN 1 AND 5000
  );

CREATE POLICY "No public read of contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Tighten newsletter_subscriptions INSERT policy and add explicit deny-SELECT
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions;
CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(email)) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

CREATE POLICY "No public read of newsletter subscriptions"
  ON public.newsletter_subscriptions
  FOR SELECT
  TO anon, authenticated
  USING (false);
