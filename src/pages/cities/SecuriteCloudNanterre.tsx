import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNanterre = () => (
  <CityLandingPage
    data={{
      city: "Nanterre",
      citySlug: "nanterre",
      region: "Île-de-France",
      postalCode: "92000",
      intro: "CloudSecure sécurise les infrastructures cloud hybrides des grands groupes de La Défense — Total, EDF, Société Générale, LVMH, Sanofi — et de leurs sous-traitants contre les cybermenaces ciblant la finance, l'énergie et le luxe. Audit cloud hybride Azure/AWS grands comptes, RSSI cloud externalisé La Défense et conformité NIS2 secteur énergie-finance pour les Hauts-de-Seine.",
      localContext: "Nanterre et le quartier d'affaires de La Défense constituent l'un des plus grands centres de décision économique d'Europe, concentrant les sièges sociaux de Total Energies, EDF, Société Générale, BNP Paribas, LVMH, Sanofi et de dizaines d'autres groupes du CAC 40. Ces grands groupes opèrent des infrastructures cloud hybrides (Azure, AWS, GCP) d'une complexité exceptionnelle, gérant des pétaoctets de données financières, de propriété intellectuelle industrielle et de données clients ultra-sensibles. La surface d'attaque est considérable : services d'accès distant des partenaires et sous-traitants, APIs interopérables entre systèmes legacy et cloud, tenants multi-pays avec des droits d'accès complexes. Les fournisseurs et prestataires IT de ces grands groupes à Nanterre-La Défense doivent également répondre à des exigences de sécurité cloud strictes imposées par leurs donneurs d'ordres. CloudSecure accompagne les DSI, RSSI et DAF des grandes entreprises et des PME des Hauts-de-Seine dans leurs programmes de sécurisation cloud à la hauteur des enjeux de La Défense.",
      sectors: [
        "Finance cloud hybride (banques, assurances, asset management La Défense)",
        "Énergie cloud (Total Energies, EDF — données industrielles et SCADA)",
        "Luxe et retail numérique (LVMH, données clients et supply chain cloud)",
        "Services numériques et ESN (sous-traitants grands groupes)",
        "Start-ups et scale-ups des Hauts-de-Seine (92)",
        "Immobilier tech et smart building (tours La Défense connectées)",
      ],
      neighborhoods: [
        "La Défense (CNIT, Tour First, Grande Arche)",
        "Tour Total et quartier Michelet",
        "Quartier Préfecture et centre de Nanterre",
        "Puteaux et Courbevoie",
        "Hauts-de-Seine (92) et Péri-Défense",
        "Axe Neuilly–La Défense–Versailles",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud hybride pour un grand groupe ou une ETI de La Défense à Nanterre ?",
          a: "Un audit cloud hybride pour une grande entreprise ou une ETI de La Défense démarre à 8 000 € HT pour un périmètre Azure ou AWS mono-tenant. Pour les environnements multi-cloud complexes (Azure + AWS + GCP), les architectures hybrides avec interconnexions on-premise et les groupes multi-pays, les budgets se situent entre 15 000 et 40 000 € HT selon le périmètre. CloudSecure constitue des équipes pluridisciplinaires (architectes cloud, pentesters, experts conformité) pour ces missions à fort enjeu. Demandez votre cadrage gratuit en 48h.",
        },
        {
          q: "Comment sécuriser un tenant Azure multi-tenant pour une banque ou un assureur de La Défense ?",
          a: "La sécurisation d'un tenant Azure multi-tenant pour un acteur financier de La Défense requiert une approche en profondeur : gouvernance Azure Entra ID avec Privileged Identity Management (PIM) et accès juste-à-temps, segmentation réseau via Azure Landing Zones et Virtual WAN, audit des politiques d'accès conditionnel et de conformité Azure Policy, et déploiement de Microsoft Sentinel pour la détection des menaces corrélée avec les sources SIEM métier. CloudSecure accompagne les RSSI de Nanterre dans la définition de leur architecture cloud sécurisée Zero Trust et la mise en conformité DORA (Digital Operational Resilience Act) pour le secteur financier.",
        },
        {
          q: "Quelles sont les obligations NIS2 pour les entreprises du secteur énergie à Nanterre et La Défense ?",
          a: "Les groupes énergétiques (Total, EDF) et leurs sous-traitants classés entités essentielles NIS2 dans le secteur énergie doivent implémenter des mesures de sécurité cloud renforcées : audits techniques annuels, gestion des risques fournisseurs (supply chain cloud), détection et réponse aux incidents 24/7, et notification ANSSI sous 24h. Les filiales et sous-traitants de ces groupes sont également concernés par des clauses contractuelles de sécurité imposant des standards élevés. CloudSecure réalise les audits NIS2 énergie à Nanterre et accompagne les équipes dans la mise en conformité réglementaire. Forfait NIS2 énergie à partir de 12 000 € HT.",
        },
        {
          q: "Proposez-vous un RSSI cloud externalisé pour les PME et start-ups des Hauts-de-Seine ?",
          a: "Oui. CloudSecure propose un service de RSSI cloud externalisé (vCISO) pour les PME, scale-ups et filiales de grands groupes des Hauts-de-Seine qui n'ont pas de RSSI dédié mais font face à des exigences de sécurité cloud élevées (réglementation sectorielle, exigences des donneurs d'ordres, levées de fonds). Notre RSSI externalisé pilote la politique de sécurité cloud, accompagne les audits clients et fournisseurs, et représente l'entreprise dans les comités cyber. Tarif à partir de 3 500 € HT/mois pour un accompagnement hebdomadaire dédié à Nanterre et La Défense.",
        },
        {
          q: "Comment gérer la sécurité cloud d'une supply chain complexe comme celle de LVMH ou des grands groupes de La Défense ?",
          a: "La sécurité de la supply chain cloud (third-party risk management) est un enjeu critique pour les grands groupes de La Défense qui partagent des accès cloud avec des centaines de fournisseurs et partenaires. CloudSecure évalue le risque cyber de vos fournisseurs cloud via des questionnaires de sécurité structurés, des audits techniques des interfaces API et des accès distants, et la mise en place de tableaux de bord de suivi du risque fournisseur. Nous déployons également des architectures de cloisonnement (Privileged Access Workstations, bastion cloud) pour sécuriser les accès des tiers à vos environnements cloud sensibles. Forfait supply chain cloud security à partir de 10 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNanterre;
