import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cloudsecure-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Consentement aux cookies"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="glass-strong rounded-2xl border-glow p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  Gestion des cookies
                </h3>
              </div>
              <button
                onClick={refuse}
                aria-label="Fermer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-5">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
              Conformément au RGPD, votre consentement est requis pour les cookies non essentiels.{" "}
              <a href="/politique-confidentialite" className="text-primary hover:underline">En savoir plus</a>
            </p>
            <div className="flex gap-3">
              <button
                onClick={refuse}
                className="flex-1 rounded-xl border border-border/50 px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="flex-1 bg-gradient-primary text-primary-foreground rounded-xl px-4 py-2.5 text-xs font-semibold hover:shadow-glow-sm transition-all"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
