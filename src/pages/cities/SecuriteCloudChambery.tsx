import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudChambery = () => (
  <CityLandingPage
    data={{
      city: "Chambéry",
      citySlug: "chambery",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "73000",
      intro: "CloudSecure accompagne les entreprises du technopôle Savoie Technolac, les industriels savoyards et les acteurs du tourisme alpin de Chambéry dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Chambéry, sécurité cloud Azure Chambéry et conformité NIS2 cloud Chambéry pour l'écosystème numérique et industriel savoyard. Nos experts en sécurisation infrastructure cloud Chambéry protègent les données des startups cloud-native de Savoie Technolac aux ETI industrielles alpines.",
      localContext: "Chambéry abrite Savoie Technolac — l'un des principaux parcs technologiques des Alpes — qui concentre des startups cloud-native, des ESN et des PME innovantes dans les énergies renouvelables, l'IoT industriel et les SaaS B2B, créant un écosystème numérique dynamique avec des besoins croissants en DevSecOps et sécurité cloud. L'industrie savoyarde (câblerie, métallurgie, traitement de surface) migre ses ERP et systèmes de production vers le cloud hybride Azure avec des besoins en sécurité OT/IT spécifiques. Le tourisme alpin chamberylain (accès aux stations de ski, Lac du Bourget) génère des plateformes de réservation en ligne avec des données clients et bancaires à protéger. La filière logistique savoyarde, positionnée sur l'axe franco-italien, développe des systèmes cloud pour la gestion des flux transfrontaliers.",
      sectors: [
        "Savoie Technolac — startups cloud-native et ESN numériques",
        "Industrie savoyarde et ETI (ERP cloud Azure, cloud hybride)",
        "Tourisme alpin et booking (PCI DSS cloud, RGPD)",
        "Logistique franco-italienne transfrontalière (cloud hybride)",
        "Santé et CH (HDS cloud, données patients Savoie)",
        "Énergies renouvelables et IoT (cloud AWS, données capteurs)",
      ],
      neighborhoods: [
        "Savoie Technolac et Le Bourget-du-Lac — startups et innovation",
        "Chambéry Centre et Jacob-Bellecombette — sièges et services",
        "La Ravoire — parcs d'entreprises et PME",
        "Challes-les-Eaux — industrie et logistique",
        "Albertville et Moûtiers — tourisme alpin et industrie",
        "Aix-les-Bains — tourisme thermal et services",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une startup de Savoie Technolac à Chambéry ?",
          a: "Un audit AWS pour une startup cloud-native de Savoie Technolac (couvrant IAM, S3, EKS ou Lambda, API Gateway, CloudTrail, conformité CIS Benchmark) est facturé entre 3 500 et 7 000 euros HT selon le périmètre et le nombre d'environnements. CloudSecure inclut une revue spécifique des APIs exposées aux clients enterprise, de la sécurité des pipelines CI/CD et de la configuration des clusters Kubernetes — points critiques pour les startups SaaS B2B de Savoie Technolac. Livraison du rapport sous 5 jours avec plan de remédiation priorisé.",
        },
        {
          q: "Comment sécuriser un ERP cloud pour une ETI industrielle savoyarde à Chambéry ?",
          a: "La sécurisation d'un ERP cloud pour une ETI industrielle savoyarde (SAP RISE on Azure, Microsoft Dynamics 365 ou Oracle Fusion Cloud) couvre : l'audit Azure AD avec MFA et accès conditionnel, la revue des comptes à privilèges SAP via Azure PIM, le chiffrement des données industrielles sensibles (données de production, données clients OEM), la segmentation réseau Azure Virtual Network, et la surveillance via Microsoft Sentinel. CloudSecure réalise des audits sécurité Azure Chambéry pour les ETI industrielles savoyardes avec une expertise sur les migrations ERP cloud et les architectures hybrides.",
        },
        {
          q: "DevSecOps Chambéry : accompagnez-vous les startups de Savoie Technolac ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech de Savoie Technolac dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube), SCA (Snyk), scan de conteneurs (Trivy) et formons les équipes aux pratiques secure by design. Nous intervenons en présentiel au Technopôle ou à distance selon les préférences des équipes. Ateliers DevSecOps groupés pour les startups du même parc disponibles.",
        },
        {
          q: "Conformité NIS2 cloud pour les industriels et les opérateurs de services numériques de Chambéry ?",
          a: "Les ETI industrielles savoyardes (câblerie, métallurgie) dépassant 50 salariés et les prestataires de services numériques de Savoie Technolac tombent potentiellement dans le champ de NIS2. CloudSecure réalise un diagnostic NIS2 cloud Chambéry pour qualifier votre statut (entité importante ou essentielle) et identifier les obligations applicables. Nous produisons un plan de mise en conformité priorisé couvrant les mesures techniques (sécurité cloud, segmentation réseau, monitoring) et organisationnelles (politique de sécurité, gestion des incidents, formation des équipes).",
        },
        {
          q: "CloudSecure intervient-il à Chambéry et dans toute la Savoie ?",
          a: "CloudSecure intervient à Chambéry, Savoie Technolac, La Ravoire, Challes-les-Eaux et dans toute la Savoie incluant Albertville, Moûtiers, Aix-les-Bains et Saint-Jean-de-Maurienne. Nous couvrons également la Haute-Savoie (Annecy, Thonon) et l'axe Rhône-Alpes vers Grenoble et Lyon. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Chambéry pour les ateliers, formations et missions de RSSI cloud externalisé Chambéry. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudChambery;
