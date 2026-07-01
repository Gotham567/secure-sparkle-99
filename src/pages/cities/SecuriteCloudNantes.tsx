import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CloudSecure accompagne les industriels navals, agroalimentaires, SaaS B2B et startups deeptech de Nantes dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Nantes, sécurité cloud Azure Nantes et DevSecOps Nantes pour l'industrie navale et les ETI en cloud hybride. Nos experts en sécurisation infrastructure cloud Nantes protègent les données critiques des Chantiers de l'Atlantique aux scale-ups de la French Tech Nantes.",
      localContext: "Nantes combine industrie navale de pointe (Chantiers de l'Atlantique, Naval Group), coopératives agroalimentaires avec ERP SAP sur Azure et un écosystème deeptech dynamique — trois profils cloud très différents que CloudSecure audite avec une expertise sectorielle dédiée. L'industrie navale nantaise gère des données de conception PLM et CAO de haute sensibilité sur des clouds hybrides exposées au cyberespionnage industriel international. Les coopératives agroalimentaires des Pays de la Loire migrent massivement leurs ERP vers le cloud, créant des besoins en sécurité cloud hybride, gestion des accès multi-sites et conformité NIS2 cloud Nantes. Les startups deeptech de la French Tech Nantes — IA, IoT industriel, robotique — développent leurs applications sur AWS et GCP avec des architectures microservices nécessitant un DevSecOps structurant.",
      sectors: [
        "Industrie navale et construction (cloud hybride, PLM cloud)",
        "Agroalimentaire et coopératives (ERP cloud Azure, traçabilité)",
        "SaaS B2B et startups deeptech French Tech Nantes",
        "Retail et e-commerce (cloud AWS)",
        "Santé et CHU (HDS cloud, données patients)",
        "ESN et intégrateurs cloud Pays de la Loire",
      ],
      neighborhoods: [
        "Île de Nantes — startups et numérique",
        "Saint-Herblain et Orvault — ETI et ESN",
        "Rezé et Carquefou — industrie et logistique",
        "La Beaujoire — agroalimentaire et distribution",
        "Saint-Nazaire — naval et offshore éolien",
        "Cholet, Angers — PME industrielles ligériennes",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une startup deeptech nantaise ?",
          a: "Un audit AWS pour une startup deeptech nantaise (IAM, S3, EC2, EKS, RDS, CloudTrail, conformité CIS Benchmark) est facturé entre 3 500 et 7 000 euros HT selon le périmètre et le nombre d'environnements cloud. CloudSecure inclut une revue spécifique des pipelines MLOps et des buckets S3 hébergeant des données d'entraînement IA, souvent sous-protégés dans les startups deeptech. Le rapport livré sous 5 jours inclut un plan de remédiation priorisé et une feuille de route DevSecOps adaptée à la taille de l'équipe ingénierie.",
        },
        {
          q: "Comment sécuriser un ERP agroalimentaire sur Azure pour une coopérative nantaise ?",
          a: "La sécurisation d'un ERP agroalimentaire sur Azure (SAP RISE on Azure, Microsoft Dynamics 365) passe par la configuration stricte d'Azure AD avec MFA et accès conditionnel, la revue des comptes à privilèges SAP_BASIS via PIM, le chiffrement des données sensibles (recettes, volumes, clients), la segmentation réseau Azure Virtual Network et la surveillance via Microsoft Sentinel. CloudSecure réalise des audits sécurité Azure Nantes pour les coopératives et ETI agroalimentaires avec une expertise sur l'intégration OT/cloud (usines connectées à l'ERP).",
        },
        {
          q: "DevSecOps Nantes : comment intégrer la sécurité dans les pipelines CI/CD des startups ?",
          a: "CloudSecure accompagne les startups nantaises dans la mise en place d'une chaîne DevSecOps complète à partir de 700 euros par jour. Nous intervenons sur GitHub Actions, GitLab CI ou Bitbucket Pipelines pour intégrer l'analyse de code (Semgrep, SonarQube), le scan de conteneurs (Trivy, Grype), la gestion des secrets (HashiCorp Vault, AWS Secrets Manager) et le contrôle des accès Kubernetes (OPA Gatekeeper). Nous proposons des formations DevSecOps Nantes en présentiel pour les équipes ingénierie et leads tech.",
        },
        {
          q: "Quelles obligations NIS2 cloud pour les industriels navals nantais ?",
          a: "Les industriels navals nantais (Chantiers de l'Atlantique, Naval Group, sous-traitants) opérant dans les secteurs des transports maritimes ou de la fabrication critique entrent dans le champ de NIS2. CloudSecure réalise un diagnostic NIS2 cloud Nantes pour identifier votre statut et les obligations applicables : sécurité des systèmes PLM cloud, gestion des accès sous-traitants, protection contre le cyberespionnage, plan de réponse aux incidents et notification ANSSI sous 24h. Nous accompagnons également la mise en place de la conformité ISO 27001 cloud pour les industriels.",
        },
        {
          q: "CloudSecure intervient-il à Nantes et dans les Pays de la Loire ?",
          a: "CloudSecure intervient à Nantes, Saint-Herblain, Rezé, Carquefou et dans toute la région Pays de la Loire incluant Saint-Nazaire, Angers, Le Mans, La Roche-sur-Yon, Cholet et Laval. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des déplacements sur site à Nantes et en région pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Nantes. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNantes;
