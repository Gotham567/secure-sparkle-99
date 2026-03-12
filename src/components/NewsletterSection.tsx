import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-28 relative">
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
          {/* Decorative elements */}
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

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 bg-card border border-border/80 rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
              <button className="bg-gradient-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap">
                S'abonner
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

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
