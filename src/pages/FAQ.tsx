import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { Shield } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce qu'un audit de sécurité cloud ?",
    a: "Un audit de sécurité cloud est une évaluation approfondie de votre infrastructure cloud (AWS, Azure, GCP) pour identifier les vulnérabilités, les mauvaises configurations et les risques de sécurité. Il inclut l'analyse des accès IAM, la revue d'architecture, les tests d'intrusion et la vérification de conformité."
  },
  {
    q: "Combien coûte un audit de sécurité AWS ou Azure ?",
    a: "Le coût d'un audit de sécurité cloud varie selon la taille et la complexité de votre infrastructure. Un audit AWS ou Azure démarre généralement à partir de 8 000 € pour une infrastructure simple, et peut aller jusqu'à 25 000 € pour des environnements multi-comptes complexes. Contactez-nous pour un devis personnalisé."
  },
  {
    q: "Qu'est-ce que la conformité NIS2 et suis-je concerné ?",
    a: "La directive NIS2 (Network and Information Security) est la réglementation européenne sur la cybersécurité qui s'applique à un large éventail d'entreprises dans les secteurs essentiels et importants. Si votre entreprise opère dans l'énergie, les transports, la santé, le numérique ou les services financiers, vous êtes probablement concerné. Nous vous accompagnons dans votre mise en conformité."
  },
  {
    q: "Qu'est-ce qu'un RSSI externalisé ?",
    a: "Un RSSI (Responsable de la Sécurité des Systèmes d'Information) externalisé est un expert cybersécurité qui agit comme votre directeur sécurité à temps partiel. Il définit votre stratégie de sécurité, pilote les audits, gère les incidents et assure la conformité, sans le coût d'un recrutement en CDI. Idéal pour les startups et PME tech."
  },
  {
    q: "Quelle est la différence entre un pentest et un audit de sécurité ?",
    a: "Un audit de sécurité évalue globalement votre posture de sécurité (configurations, politiques, conformité), tandis qu'un pentest (test d'intrusion) simule des attaques réelles pour exploiter activement les vulnérabilités. Les deux sont complémentaires : l'audit identifie les faiblesses théoriques, le pentest prouve leur exploitabilité."
  },
  {
    q: "Quelles certifications possédez-vous ?",
    a: "CloudSecure est qualifié PASSI par l'ANSSI (Prestataire d'Audit de Sécurité des Systèmes d'Information) et certifié ISO 27001:2022. Nos experts détiennent des certifications AWS Security Specialty, Azure Security Engineer, OSCP, CEH et CISSP."
  },
  {
    q: "Combien de temps dure un audit de sécurité cloud ?",
    a: "Un audit de sécurité cloud standard dure entre 2 et 4 semaines selon la complexité de votre infrastructure. Cela inclut la phase de cadrage (2-3 jours), les tests techniques (1-2 semaines), l'analyse et la rédaction du rapport (3-5 jours), et la restitution des résultats."
  },
  {
    q: "Quels sont les risques liés à l'IA générative pour la sécurité ?",
    a: "L'IA générative introduit de nouveaux risques : fuite de données confidentielles via les prompts, injection de prompts malveillants, génération de code vulnérable, deepfakes et usurpation d'identité. Nous auditons vos usages de l'IA et mettons en place des garde-fous adaptés."
  },
  {
    q: "Travaillez-vous avec des startups ou uniquement des grands comptes ?",
    a: "Nous travaillons avec des entreprises de toutes tailles, avec une expertise particulière pour les startups tech et scale-ups. Nos offres sont modulables : du premier audit sécurité pour une startup early-stage au programme de sécurité complet pour les entreprises en hyper-croissance."
  },
  {
    q: "Comment se déroule un premier contact avec CloudSecure ?",
    a: "Le premier contact est simple et gratuit : vous remplissez notre formulaire ou nous appelez, un expert vous rappelle sous 24h pour comprendre votre besoin, puis nous vous envoyons une proposition détaillée sous 48h. Aucun engagement n'est requis à cette étape."
  },
];

const FAQ = () => {
  useEffect(() => {
    // Add FAQ structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        }
      }))
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ – Questions Fréquentes Cybersécurité Cloud"
        description="Réponses à vos questions sur l'audit de sécurité cloud, le pentest AWS/Azure, la conformité NIS2, le RSSI externalisé et les tarifs. CloudSecure expert cybersécurité."
      />
      <Navbar />
      <FloatingCTA />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">FAQ</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
                Questions <span className="text-gradient">fréquentes</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Tout ce que vous devez savoir sur nos services de cybersécurité cloud.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="glass rounded-xl border-glow px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 text-base">
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-primary shrink-0" />
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-7">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">Vous n'avez pas trouvé la réponse à votre question ?</p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300"
              >
                Contactez-nous
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
