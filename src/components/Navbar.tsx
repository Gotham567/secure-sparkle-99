import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Tarifs", href: "/tarifs", isRoute: true },
  { label: "FAQ", href: "/faq", isRoute: true },
  { label: "Actualités", href: "/actualites", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/#contact");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to hash after navigation to home
  useEffect(() => {
    if (isHome && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location, isHome]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">
            cloud<span className="text-gradient">secure</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-muted/30"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-muted/30"
              >
                {link.label}
              </a>
            )
          )}
          <div className="w-px h-6 bg-border mx-3" />
          <a
            href="https://calendly.com/lakaoub/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-glow-sm transition-all duration-300 flex items-center gap-2"
          >
            Audit gratuit
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted/30 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border/50"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => { handleAnchorClick(e, link.href); setOpen(false); }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://calendly.com/lakaoub/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Audit gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
