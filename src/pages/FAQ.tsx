import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState, useMemo } from "react";
import { Shield, Cloud, FileCheck, Users, Clock, Search, ArrowRight, MessageCircle } from "lucide-react";

type Category = "all" | "audit" | "conformite" | "services" | "pratique";

interface FaqItem {
  q: string;
  a: string;
  category: Category;
}

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "Toutes", icon: <Shield className="h-4 w-4" /> },
  { key: "audit", label: "Audit & Pentest", icon: <Cloud className="h-4 w-4" /> },
  { key: "conformite", label: "Conformité", icon: <FileCheck className="h-4 w-4" /> },
  { key: "services", label: "Services", icon: <Users className="h-4 w-4" /> },
  { key: "pratique", label: "Pratique", icon: <Clock className="h-4 w-4" /> },
];

const faqs: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un audit de sécurité cloud ?",
    a: "Un audit de sécurité cloud est une évaluation approfondie de votre infrastructure cloud (AWS, Azure, GCP) pour identifier les vulnérabilités, les mauvaises configurations et les risques de sécurité. Il inclut l'analyse des accès IAM, la revue d'architecture, les tests d'intrusion et la vérification de conformité.",
    category: "audit",
  },
  {
    q: "Combien coûte un audit de sécurité AWS ou Azure ?",
    a: "Le coût d'un audit de sécurité cloud varie selon la taille et la complexité de votre infrastructure. Un audit AWS ou Azure démarre généralement à partir de 8 000 € pour une infrastructure simple, et peut aller jusqu'à 25 000 € pour des environnements multi-comptes complexes. Contactez-nous pour un devis personnalisé.",
    category: "audit",
  },
  {
    q: "Quelle est la différence entre un pentest et un audit de sécurité ?",
    a: "Un audit de sécurité évalue globalement votre posture de sécurité (configurations, politiques, conformité), tandis qu'un pentest (test d'intrusion) simule des attaques réelles pour exploiter activement les vulnérabilités. Les deux sont complémentaires : l'audit identifie les faiblesses théoriques, le pentest prouve leur exploitabilité.",
    category: "audit",
  },
  {
    q: "Combien de temps dure un audit de sécurité cloud ?",
    a: "Un audit de sécurité cloud standard dure entre 2 et 4 semaines selon la complexité de votre infrastructure. Cela inclut la phase de cadrage (2-3 jours), les tests techniques (1-2 semaines), l'analyse et la rédaction du rapport (3-5 jours), et la restitution des résultats.",
    category: "audit",
  },
  {
    q: "Que contient le rapport d'audit final ?",
    a: "Le rapport d'audit comprend un résumé exécutif pour la direction, la cartographie complète des vulnérabilités classées par criticité (CVSS), des preuves d'exploitation détaillées, un plan de remédiation priorisé avec estimation d'effort, et des recommandations d'architecture. Vous recevez également une restitution orale avec vos équipes techniques.",
    category: "audit",
  },
  {
    q: "Qu'est-ce que la conformité NIS2 et suis-je concerné ?",
    a: "La directive NIS2 (Network and Information Security) est la réglementation européenne sur la cybersécurité qui s'applique à un large éventail d'entreprises dans les secteurs essentiels et importants. Si votre entreprise opère dans l'énergie, les transports, la santé, le numérique ou les services financiers, vous êtes probablement concerné. Nous vous accompagnons dans votre mise en conformité.",
    category: "conformite",
  },
  {
    q: "Quelle est la différence entre SOC 2 et ISO 27001 ?",
    a: "SOC 2 est un standard américain (AICPA) axé sur les contrôles de sécurité des données clients, très demandé par les entreprises SaaS B2B. ISO 27001 est une norme internationale de management de la sécurité de l'information, plus reconnue en Europe. Beaucoup d'entreprises visent les deux pour couvrir les marchés US et EU. Nous vous accompagnons sur les deux certifications.",
    category: "conformite",
  },
  {
    q: "Qu'est-ce que la réglementation DORA ?",
    a: "DORA (Digital Operational Resilience Act) est le règlement européen sur la résilience opérationnelle numérique du secteur financier, applicable depuis janvier 2025. Il impose des exigences strictes en matière de gestion des risques ICT, tests de résilience, gestion des incidents et surveillance des prestataires tiers. Si vous êtes prestataire tech du secteur financier, vous êtes directement concerné.",
    category: "conformite",
  },
  {
    q: "Quelles certifications possédez-vous ?",
    a: "CloudSecure est qualifié PASSI par l'ANSSI (Prestataire d'Audit de Sécurité des Systèmes d'Information) et certifié ISO 27001:2022. Nos experts détiennent des certifications AWS Security Specialty, Azure Security Engineer, OSCP, CEH et CISSP.",
    category: "conformite",
  },
  {
    q: "Qu'est-ce qu'un RSSI externalisé ?",
    a: "Un RSSI (Responsable de la Sécurité des Systèmes d'Information) externalisé est un expert cybersécurité qui agit comme votre directeur sécurité à temps partiel. Il définit votre stratégie de sécurité, pilote les audits, gère les incidents et assure la conformité, sans le coût d'un recrutement en CDI. Idéal pour les startups et PME tech.",
    category: "services",
  },
  {
    q: "Quels sont les risques liés à l'IA générative pour la sécurité ?",
    a: "L'IA générative introduit de nouveaux risques : fuite de données confidentielles via les prompts, injection de prompts malveillants, génération de code vulnérable, deepfakes et usurpation d'identité. Nous auditons vos usages de l'IA et mettons en place des garde-fous adaptés.",
    category: "services",
  },
  {
    q: "Travaillez-vous avec des startups ou uniquement des grands comptes ?",
    a: "Nous travaillons avec des entreprises de toutes tailles, avec une expertise particulière pour les startups tech et scale-ups. Nos offres sont modulables : du premier audit sécurité pour une startup early-stage au programme de sécurité complet pour les entreprises en hyper-croissance.",
    category: "services",
  },
  {
    q: "Proposez-vous de la formation en cybersécurité ?",
    a: "Oui, nous proposons des formations sur mesure : sensibilisation des équipes aux risques cyber, formation DevSecOps pour les développeurs, ateliers pratiques sur la sécurité cloud AWS/Azure/GCP, et exercices de simulation d'incidents (tabletop exercises). Les formations sont disponibles en présentiel ou en visioconférence.",
    category: "services",
  },
  {
    q: "Comment se déroule un premier contact avec CloudSecure ?",
    a: "Le premier contact est simple et gratuit : vous remplissez notre formulaire ou nous appelez, un expert vous rappelle sous 24h pour comprendre votre besoin, puis nous vous envoyons une proposition détaillée sous 48h. Aucun engagement n'est requis à cette étape.",
    category: "pratique",
  },
  {
    q: "Intervenez-vous à distance ou sur site ?",
    a: "Nous intervenons principalement à distance, ce qui permet une grande réactivité et réduit les coûts. Pour les missions de pentest physique, les restitutions d'audit ou les formations, nous nous déplaçons dans toute la France. Nos outils sécurisés permettent un travail collaboratif efficace à distance.",
    category: "pratique",
  },
  {
    q: "Quels sont vos délais d'intervention en cas d'urgence ?",
    a: "En cas d'incident de sécurité, nous proposons une intervention d'urgence sous 4 heures pour nos clients sous contrat, et sous 24 heures pour les nouvelles demandes. Notre équipe de réponse à incidents est disponible 7j/7 pour les situations critiques (ransomware, fuite de données, compromission active).",
    category: "pratique",
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        !search ||
        faq.q.toLowerCase().includes(search.toLowerCase()) ||
        faq.a.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <MessageCircle className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold tracking-wide uppercase text-primary">Centre d'aide</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.05]">
                Comment pouvons-nous
                <br />
                <span className="text-gradient">vous aider ?</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Trouvez rapidement les réponses à vos questions sur nos services de cybersécurité cloud.
              </p>
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={0.08}>
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none text-foreground placeholder:text-muted-foreground transition-all duration-300 text-base"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Category pills */}
          <ScrollReveal delay={0.12}>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 active:scale-[0.97] ${
                    activeCategory === cat.key
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ List */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-16">
                  <Search className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Aucun résultat trouvé</p>
                  <p className="text-muted-foreground/60 text-sm mt-1">Essayez avec d'autres mots-clés</p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-3">
                  {filteredFaqs.map((faq, i) => (
                    <AccordionItem
                      key={`${activeCategory}-${i}`}
                      value={`faq-${i}`}
                      className="glass rounded-xl border border-border/50 hover:border-primary/20 px-6 transition-colors duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 text-base [&[data-state=open]]:text-primary">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          {faq.q}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-11 text-[15px]">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}

              {/* Result count */}
              {filteredFaqs.length > 0 && (
                <p className="text-center text-muted-foreground/50 text-sm mt-6">
                  {filteredFaqs.length} question{filteredFaqs.length > 1 ? "s" : ""} affichée{filteredFaqs.length > 1 ? "s" : ""}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto mt-20">
              <div className="glass rounded-2xl border border-border/50 p-8 md:p-10 text-center">
                <h2 className="font-heading text-2xl font-bold mb-3">
                  Vous n'avez pas trouvé votre réponse ?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Notre équipe d'experts répond sous 24h. Décrivez votre besoin et recevez un accompagnement personnalisé.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-[0.97]"
                >
                  Contactez un expert
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
