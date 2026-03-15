import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (isHome) {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-primary-foreground px-5 py-3.5 rounded-2xl font-semibold text-sm shadow-glow flex items-center gap-2.5 hover:shadow-glow transition-all duration-300"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Demander un devis gratuit</span>
            <span className="sm:hidden">Devis gratuit</span>
          </motion.button>
          <button
            onClick={() => setDismissed(true)}
            className="w-8 h-8 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fermer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
