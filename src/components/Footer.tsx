import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">
              algo<span className="text-primary">secure</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
            <span>Démarche RSE</span>
            <span>Glossaire</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © AlgoSecure 2026
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          Spécialistes en cybersécurité et pentests à Lyon, Paris, Saint-Étienne et partout en France
        </p>
      </div>
    </footer>
  );
};

export default Footer;
