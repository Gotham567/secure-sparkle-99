import { Shield, Linkedin, Twitter, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                algo<span className="text-gradient">secure</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Cabinet expert en sécurité cloud, audit AWS & Azure. Qualifié PASSI & certifié ISO 27001.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/algosecure/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/AlgoSecure" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Services</h4>
            <div className="space-y-3">
              {["Tests d'intrusion", "Audit de configuration", "Audit d'architecture", "Accompagnement RSSI", "Formation"].map((item) => (
                <a key={item} href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Entreprise</h4>
            <div className="space-y-3">
              {["Qui sommes-nous", "Nos certifications", "AlgoLightHouse", "Livres blancs", "Blog"].map((item) => (
                <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary/70" />
                04 26 78 24 86
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                Lyon · Paris · Grenoble · Saint-Étienne
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © AlgoSecure 2026. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">RSE</a>
            <a href="#" className="hover:text-foreground transition-colors">Glossaire</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
