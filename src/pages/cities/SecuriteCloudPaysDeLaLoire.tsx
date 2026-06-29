import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPaysDeLaLoire = () => (
  <CityLandingPage
    data={{
      city: "Pays de la Loire",
      citySlug: "pays-de-la-loire",
      region: "Pays de la Loire",
      postalCode: "44 / 49 / 53 / 72 / 85",
      intro: "CyberSecure est votre prestataire sécurité cloud Pays de la Loire : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Nantes, Saint-Nazaire, Angers, Le Mans, La Roche-sur-Yon et toute la région.",
      localContext: "Les Pays de la Loire combinent une industrie puissante et un écosystème numérique parmi les plus dynamiques hors Paris. Nantes est la capitale de la French Tech régionale avec plus de 2 500 startups et scale-ups (Digital League, La Cantine Numérique). L'agglomération nantaise concentre de nombreux éditeurs de logiciels SaaS et prestataires cloud. Saint-Nazaire abrite les Chantiers de l'Atlantique (paquebots GNL) et Airbus, qui utilisent des solutions PLM cloud pour la conception navale et aéronautique. La filière agroalimentaire vendéenne et sarthoise est la 1ère de France. La région accueille plusieurs datacenters régionaux (OVHcloud Nantes, SFR Business, Data4 Nantes Atlantique).",
      sectors: [
        "Numérique et tech (French Tech Nantes, Digital League, éditeurs SaaS ligériens)",
        "Naval et aéronautique (Chantiers Atlantique, Airbus Saint-Nazaire — PLM cloud)",
        "Agroalimentaire (Lactalis, Maine Viande, conserveries vendéennes — ERP cloud)",
        "Automobile (Renault Le Mans, équipementiers Sarthe — cloud industriel)",
        "Datacenters (OVHcloud Nantes, SFR Business, Data4 Nantes Atlantique)",
        "Énergie offshore (EDF Renouvelables, parc éolien offshore 44)",
        "Santé et e-santé (CHU Nantes, Angers, éditeurs logiciels santé)",
        "Collectivités (Nantes Métropole, numérique public ligérien)",
      ],
      neighborhoods: [
        "Nantes Métropole – Rezé – Saint-Herblain – Orvault (44)",
        "Saint-Nazaire Agglomération – Montoir-de-Bretagne (44)",
        "Angers Loire Métropole – Cholet (49)",
        "Le Mans Métropole (72)",
        "La Roche-sur-Yon – Les Sables-d'Olonne (85)",
        "Laval – Mayenne (53)",
        "Châteaubriant – Ancenis-Saint-Géréon (44)",
        "Saint-Jean-de-Monts – Les Herbiers (85)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 5 départements des Pays de la Loire ?",
          a: "Oui, CyberSecure intervient dans les cinq départements : Loire-Atlantique (44), Maine-et-Loire (49), Mayenne (53), Sarthe (72) et Vendée (85). Nos spécialistes cloud AWS, Azure, GCP se déplacent sur site dans toute la région. La scène tech nantaise est l'un de nos marchés principaux. CERT d'urgence 24/7.",
        },
        {
          q: "Les éditeurs SaaS nantais : comment obtenir la certification SOC 2 Type II ?",
          a: "SOC 2 Type II est le standard requis par les entreprises américaines et grands comptes pour valider la sécurité d'un SaaS. Le processus comprend : gap analysis SOC 2 (Trust Service Criteria), implémentation des contrôles techniques (logging, monitoring, accès), audit par un auditeur CPA accrédité (3-6 mois d'observation), et rapport final. CyberSecure accompagne les éditeurs SaaS nantais dans leur préparation SOC 2 : roadmap, implémentation AWS/Azure/GCP, et coordination avec les auditeurs. Délai moyen : 6-12 mois.",
        },
        {
          q: "Le datacenter OVHcloud de Nantes : est-il éligible SecNumCloud ?",
          a: "OVHcloud opère plusieurs datacenters en France dont Nantes et Roubaix. La qualification SecNumCloud (ANSSI) est disponible sur certaines offres spécifiques d'OVHcloud (Hosted Private Cloud). Pour les organisations traitant des données sensibles (secteur public, santé, défense), SecNumCloud est recommandé ou obligatoire. CyberSecure accompagne les entreprises ligériennes dans le choix de leur stratégie cloud souverain vs. hyperscaler selon la sensibilité de leurs données.",
        },
        {
          q: "Les Chantiers de l'Atlantique utilisent-ils des solutions PLM cloud pour la conception de navires ?",
          a: "Oui. Les Chantiers de l'Atlantique (STXFRA) utilisent des plateformes PLM (Product Lifecycle Management) cloud pour la conception des paquebots (Dassault Systèmes 3DEXPERIENCE, Siemens PLM). Ces environnements cloud traitent des plans de construction confidentiels, des données de fournisseurs et des données de conformité navale (Bureau Veritas). CyberSecure audite ces environnements : gestion des accès partenaires (IAM fédéré), chiffrement des données de conception, et sécurité des API PLM.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Pays de la Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Pays de la Loire via ses fonds FEDER et le programme Numérique en Entreprise. Les CCI régionales (CCI Loire-Atlantique, CCI Maine-et-Loire, CCI Vendée). BPI France Pays de la Loire — prêts innovation. La Digital League accompagne ses membres. Data4 (Nantes Atlantique) propose des diagnostics de sécurité datacenters. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPaysDeLaLoire;
