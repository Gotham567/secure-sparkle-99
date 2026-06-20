
-- Fix: Prevent public read access on contact_submissions and newsletter_subscriptions
-- Only INSERT is allowed for anonymous users (public contact form & newsletter)

-- Drop any SELECT policies that may have been auto-generated and allow public read
DROP POLICY IF EXISTS "Anyone can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Public read contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can view newsletter subscriptions" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Public read newsletter subscriptions" ON public.newsletter_subscriptions;

-- Explicitly revoke SELECT from anon role (belt-and-suspenders on top of RLS)
REVOKE SELECT ON public.contact_submissions FROM anon;
REVOKE SELECT ON public.newsletter_subscriptions FROM anon;

-- Replace overly-permissive INSERT policies with named, scoped ones
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions;

CREATE POLICY "anon_insert_contact"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 5 AND 255
    AND email LIKE '%@%'
    AND char_length(message) BETWEEN 1 AND 5000
  );

CREATE POLICY "anon_insert_newsletter"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (
    char_length(email) BETWEEN 5 AND 255
    AND email LIKE '%@%'
  );
