import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, ArrowRight, Shield, Zap, Crown } from "lucide-react";

const plans = [
  {
    icon: Shield,
    name: "Audit Essentiel",
    price: "8 000",
    unit: "€",
    period: "à partir de",
    description: "Premier audit de sécurité cloud pour startups et PME. Idéal pour identifier vos risques principaux.",
    features: [
      "Audit de configuration AWS ou Azure",
      "Revue des accès IAM",
      "Rapport détaillé avec recommandations",
      "Restitution avec vos équipes",
      "Plan de remédiation prioritaire",
    ],
    popular: false,
    cta: "Demander un devis",
  },
  {
    icon: Zap,
    name: "Pentest Cloud",
    price: "12 000",
    unit: "€",
    period: "à partir de",
    description: "Tests d'intrusion avancés sur votre infrastructure cloud. Simulation d'attaques réelles par nos experts certifiés.",
    features: [
      "Tests d'intrusion AWS, Azure ou GCP",
      "Exploitation active des vulnérabilités",
      "Audit d'architecture cloud",
      "Tests d'escalade de privilèges",
      "Rapport exécutif + technique",
      "Vérification post-remédiation incluse",
    ],
    popular: true,
    cta: "Demander un devis",
  },
  {
    icon: Crown,
    name: "RSSI Externalisé",
    price: "3 000",
    unit: "€/mois",
    period: "à partir de",
    description: "Un directeur sécurité dédié à temps partiel. Pilotage complet de votre stratégie cybersécurité cloud.",
    features: [
      "Définition de la stratégie sécurité",
      "Pilotage des audits et pentests",
      "Conformité NIS2, RGPD, ISO 27001",
      "Gestion des incidents de sécurité",
      "Formation de vos équipes",
      "Reporting mensuel au COMEX",
      "Veille cyber personnalisée",
    ],
    popular: false,
    cta: "Demander un devis",
  },
];

const Tarifs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tarifs – Audit Sécurité Cloud, Pentest & RSSI Externalisé"
        description="Découvrez nos tarifs pour l'audit de sécurité cloud AWS/Azure, les tests d'intrusion et le RSSI externalisé. Devis gratuit sous 48h. CloudSecure expert cybersécurité."
      />
      <Navbar />
      <FloatingCTA />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Tarifs</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
                Des offres <span className="text-gradient">adaptées</span> à vos besoins
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Chaque infrastructure est unique. Nos tarifs sont indicatifs et ajustés après analyse de votre environnement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative glass rounded-2xl p-8 border-glow border-glow-hover transition-all duration-300 h-full flex flex-col ${plan.popular ? "ring-2 ring-primary/40 shadow-glow" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      Le plus demandé
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-5">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground">{plan.period}</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-primary text-primary-foreground hover:shadow-glow"
                        : "bg-muted/50 text-foreground border border-border/50 hover:border-primary/30 hover:bg-muted"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mt-16 border-glow text-center">
              <h3 className="font-heading text-2xl font-bold mb-3">Besoin d'une offre sur-mesure ?</h3>
              <p className="text-muted-foreground mb-6">
                Pour les infrastructures multi-cloud complexes, les programmes de sécurité annuels ou les besoins spécifiques, nous élaborons une proposition personnalisée.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300"
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifs;
