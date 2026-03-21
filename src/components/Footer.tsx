import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield, Linkedin, Twitter, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  return (
    <footer className="border-t border-border/50 relative" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="CloudSecure - Accueil">
              <Shield className="h-7 w-7 text-primary" aria-hidden="true" />
              <span className="font-heading text-lg font-bold text-foreground">
                cloud<span className="text-gradient">secure</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Cabinet expert en sécurité cloud, audit AWS & Azure. Qualifié PASSI & certifié ISO 27001.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/algosecure/" target="_blank" rel="noopener noreferrer" aria-label="CloudSecure sur LinkedIn" className="w-9 h-9 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/AlgoSecure" target="_blank" rel="noopener noreferrer" aria-label="CloudSecure sur Twitter" className="w-9 h-9 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Services</h4>
            <nav aria-label="Services" className="space-y-3">
              {["Audit AWS & Azure", "Sécurité Cloud", "Pentest Cloud", "Conformité NIS2", "RSSI externalisé"].map((item) => (
                <a
                  key={item}
                  href={isHome ? "#services" : "/#services"}
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Entreprise</h4>
            <nav aria-label="Entreprise" className="space-y-3">
              <a href={isHome ? "#about" : "/#about"} onClick={(e) => handleAnchorClick(e, "#about")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Qui sommes-nous</a>
              <a href={isHome ? "#certifications" : "/#certifications"} onClick={(e) => handleAnchorClick(e, "#certifications")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Nos certifications</a>
              <Link to="/tarifs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Tarifs</Link>
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
              <Link to="/actualites" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Actualités</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Contact</h4>
            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary/70" aria-hidden="true" />
                <a href="tel:+33426782486" className="hover:text-foreground transition-colors">04 26 78 24 86</a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" aria-hidden="true" />
                Lyon · Paris · Grenoble · Saint-Étienne
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © CloudSecure 2026. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">RSE</a>
            <span className="hidden md:inline text-border/50">|</span>
            <a href="https://securecyber.fr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">SecureCyber</a>
            <a href="https://cyberconform.fr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">CyberConform</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
