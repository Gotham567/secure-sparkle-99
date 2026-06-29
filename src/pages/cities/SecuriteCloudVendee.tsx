import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudVendee = () => (
  <CityLandingPage
    data={{
      city: "Vendée",
      citySlug: "vendee",
      region: "Pays de la Loire",
      postalCode: "85",
      intro: "CyberSecure est votre prestataire sécurité cloud Vendée (85) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de La Roche-sur-Yon, Les Herbiers, Montaigu-Vendée, Les Sables-d'Olonne, Challans et tout le département.",
      localContext: "La Vendée adopte progressivement le cloud dans ses secteurs phares. Fleury Michon utilise des plateformes cloud SAP pour sa supply chain internationale. Bénéteau groupe utilise des outils CAO cloud et des plateformes de collaboration PLM avec ses sous-traitants. La French Tech vendéenne (Numerial, startups) développe des solutions SaaS cloud-native. Le secteur touristique (Puy du Fou, côte vendéenne) gère des millions de données clients sur des plateformes cloud de réservation. La Roche-sur-Yon Agglomération développe un projet de cloud mutualisé pour les collectivités vendéennes.",
      sectors: [
        "Industrie cloud (PME bocage vendéen — Microsoft 365, Azure IoT, ERP cloud)",
        "Agroalimentaire cloud (Fleury Michon — SAP S/4HANA cloud, supply chain)",
        "Nautisme cloud (Bénéteau, Jeanneau — PLM cloud, collaboration sous-traitants)",
        "Tourisme cloud (Puy du Fou, côte Vendée — réservation SaaS, CRM cloud)",
        "SaaS vendéen (startups Tech Vendée — cloud-native, B2B, AWS/Azure)",
        "Santé cloud (CHD Vendée, cliniques — HDS cloud, télémédecine)",
        "Aménagement cloud (Vendée Numérique — smart city, IoT eau/énergie)",
        "Collectivités (LRYA, CD85 — cloud souverain, Numspot Vendée)",
      ],
      neighborhoods: [
        "La Roche-sur-Yon (85000)",
        "Les Herbiers – Montaigu-Vendée (85500/85600)",
        "Les Sables-d'Olonne (85100)",
        "Challans (85300)",
        "Fontenay-le-Comte (85200)",
        "Saint-Gilles-Croix-de-Vie (85800)",
        "Noirmoutier (85330)",
        "Chantonnay (85110)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Vendée (85) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans toute la Vendée : La Roche-sur-Yon Agglomération, Nord Vendée, Bocage, zones côtières. Nos spécialistes cloud accompagnent les PME et ETI vendéennes dans leur migration et sécurisation cloud. CERT cloud 24/7.",
        },
        {
          q: "Fleury Michon (Pouzauges) a migré son ERP vers SAP S/4HANA cloud : quelles précautions de sécurité ?",
          a: "SAP S/4HANA Cloud (Private Cloud Edition) hébergé sur AWS ou Azure impose une configuration rigoureuse pour les entreprises agroalimentaires. Les points clés : gestion des profils d'autorisation SAP (ségrégation des pouvoirs — les mêmes personnes ne doivent pas pouvoir commander ET valider les paiements dans SAP), sécurisation des interfaces SAP (ABAP WebDynpro, Fiori, RFC connections), audit SAP par un expert (transaction SE16, SM59, SM30), et monitoring des accès privilégiés (SAP BASIS, SAP_ALL). CyberSecure réalise des audits SAP sécurité pour les ETI industrielles.",
        },
        {
          q: "Bénéteau utilise un PLM cloud pour collaborer avec ses sous-traitants : comment contrôler les accès ?",
          a: "Un PLM cloud collaboratif (Dassault Systèmes 3DExperience, PTC Windchill cloud) partagé avec les sous-traitants nautiques de Bénéteau doit implémenter : RBAC strict (chaque sous-traitant n'accède qu'aux projets qui le concernent), audit trails de tous les téléchargements de fichiers de conception, expiration automatique des accès à la fin du contrat, et DLP pour empêcher les téléchargements massifs de fichiers CAO. Un accès sous-traitant compromis pourrait exposer les plans de tous les futurs modèles Bénéteau-Jeanneau. CyberSecure audite les configurations de PLM cloud dans le secteur nautique.",
        },
        {
          q: "Les PME vendéennes qui migrent vers Microsoft 365 : comment configurer la sécurité correctement ?",
          a: "Microsoft 365 est souvent mal configuré dans les PME (partage externe de fichiers trop ouvert, pas de MFA, alertes de sécurité désactivées). La configuration de base pour une PME vendéenne : activation du MFA pour tous les utilisateurs (Microsoft Authenticator), politique de mot de passe sans expiration périodique mais avec détection des mots de passe compromis, Conditional Access pour bloquer les accès depuis des pays suspects, DLP pour éviter les fuites de données sensibles, et protection avancée contre le phishing (Microsoft Defender for Office 365 Plan 1). CyberSecure propose des audits Microsoft 365 et des corrections immédiates.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Vendée ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI de Vendée — diagnostics numériques. La Roche-sur-Yon Agglomération — programmes innovation. BPI France Pays de Loire — prêts innovation. Vendée Expansion accompagne les PME. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudVendee;
