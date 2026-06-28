import { motion } from "framer-motion";
import { ShieldCheck, Calendar, ArrowRight } from "lucide-react";

const FreeAuditBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden" id="audit-gratuit">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute inset-0 border-y border-primary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Offre gratuite
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
            Audit cybersécurité gratuit de 15 minutes
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Identifiez rapidement les principaux risques liés à votre cybersécurité.
            Un échange simple, <strong className="text-foreground">sans engagement</strong>, pour vous orienter vers les actions prioritaires.
          </p>

          <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="text-primary">🎯</span>
            Obtenez une vision claire de votre niveau de risque et des améliorations possibles.
          </p>

          <motion.a
            href="https://calendly.com/lakaoub/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-glow hover:shadow-glow transition-all duration-300"
          >
            <Calendar className="h-5 w-5" />
            Prendre rendez-vous
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <p className="mt-4 text-sm text-muted-foreground">
            📅 15 min · 100% gratuit · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAuditBanner;
