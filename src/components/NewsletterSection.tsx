import { motion } from "framer-motion";
import { Mail, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Veuillez entrer votre email");
      return;
    }

    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("newsletter_subscriptions")
        .insert({ email: email.trim() });

      if (dbError) {
        if (dbError.code === "23505") {
          toast.info("Vous êtes déjà abonné !");
          setSubscribed(true);
          return;
        }
        throw dbError;
      }

      // Send email notification
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: { type: "newsletter", email: email.trim() },
      });

      if (fnError) console.error("Email notification failed:", fnError);

      setSubscribed(true);
      setEmail("");
      toast.success("Abonnement confirmé !");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de l'abonnement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden border-glow"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mx-auto mb-8 shadow-glow-sm"
            >
              <Mail className="h-10 w-10 text-primary" />
            </motion.div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">
              Restez <span className="text-gradient">informé</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
              Abonnez-vous à notre newsletter pour recevoir nos actualités cybersécurité et invitations aux MLSSI.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-3 text-primary">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">Merci pour votre abonnement !</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  maxLength={255}
                  className="flex-1 bg-card border border-border/80 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      S'abonner
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-6">
              En vous abonnant, vous acceptez notre politique de confidentialité. Désabonnement à tout moment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
