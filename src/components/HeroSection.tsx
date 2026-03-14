import { motion } from "framer-motion";
import { Search, ShieldCheck, Phone, Award, ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Search, title: "Audit", desc: "Tests d'intrusion, audits de configuration et d'architecture", color: "from-primary/20 to-primary/5" },
  { icon: ShieldCheck, title: "Conseil", desc: "Accompagnement RSSI, conformité, formations", color: "from-accent/20 to-accent/5" },
  { icon: Phone, title: "CERT", desc: "Réponse à incident, analyse forensique, gestion de crise", color: "from-primary/20 to-primary/5" },
  { icon: Award, title: "Certifications", desc: "PASSI, ISO 27001, Cyber Expert, OSEP, OSCP", color: "from-accent/20 to-accent/5" },
];

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 animate-grid-pulse"
      style={{
        backgroundImage: `
          linear-gradient(hsl(145 80% 42% / 0.06) 1px, transparent 1px),
          linear-gradient(90deg, hsl(145 80% 42% / 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Scan line */}
    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan opacity-30" />
    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Infrastructure cloud sécurisée" className="w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>
      <GridBackground />

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 border-glow bg-primary/5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Qualifié PASSI · Certifié ISO 27001
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                Sécurité Cloud
                <br />
                <span className="text-gradient">& IA</span>
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mb-10 leading-relaxed">
                Cabinet expert en audit AWS, Azure et sécurité cloud pour startups et entreprises tech.
                Tests d'intrusion, conformité NIS2 et cybersécurité pilotée par l'IA.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center gap-2 group"
                >
                  Découvrir nos services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="glass border-glow px-8 py-4 rounded-xl font-semibold text-foreground border-glow-hover transition-all duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-10 mt-14 pt-10 border-t border-border/50"
            >
              {[
                { value: "15+", label: "Années d'expertise" },
                { value: "500+", label: "Audits réalisés" },
                { value: "100%", label: "Indépendant" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Terminal effect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-strong rounded-2xl overflow-hidden shadow-card border-glow">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
                <span className="text-xs text-muted-foreground ml-3 font-mono">security-scan.sh</span>
              </div>
                <div className="p-6 font-mono text-sm leading-7 text-muted-foreground">
                <div><span className="text-primary">$</span> cloudsecure --cloud-audit --target aws,azure</div>
                <div className="text-foreground/60 mt-1">→ Scanning cloud infrastructure...</div>
                <div className="text-foreground/60">→ Checking IAM policies, S3 buckets, VPC configs...</div>
                <div className="mt-3"><span className="text-primary">$</span> Running AI-powered threat detection</div>
                <div className="text-primary/80 mt-1">✓ AWS security posture analyzed</div>
                <div className="text-primary/80">✓ Azure AD configuration audited</div>
                <div className="text-primary/80">✓ Cloud misconfigurations detected: 12</div>
                <div className="mt-3"><span className="text-primary">$</span> Generating cloud security report</div>
                <div className="text-foreground mt-1 flex items-center gap-2">
                  → Rapport d'audit prêt
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
