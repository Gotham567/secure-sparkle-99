import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBordeaux = () => (
  <CityLandingPage
    data={{
      city: "Bordeaux",
      citySlug: "bordeaux",
      region: "Nouvelle-Aquitaine",
      postalCode: "33000",
      intro: "CloudSecure accompagne les scale-ups cloud-native, SaaS vitivinicoles, acteurs du tourisme et de l'hôtellerie de Bordeaux dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Bordeaux, DevSecOps Bordeaux et conformité NIS2 cloud Bordeaux pour l'écosystème numérique girondin. Nos experts en sécurisation infrastructure cloud Bordeaux protègent les données des startups de la French Tech Bordeaux aux grands groupes du secteur vitivinicole.",
      localContext: "Bordeaux est devenu en quelques années l'un des écosystèmes tech les plus dynamiques de France, avec des scale-ups cloud-native dans le SaaS B2B, le tourisme numérique et la proptech qui hébergent leurs applications sur AWS ou GCP. La filière vitivinicole bordelaise — premier secteur exportateur de la région — migre vers des plateformes SaaS de gestion de cave et de traçabilité blockchain hébergées en cloud, avec des données commerciales et de propriété intellectuelle à fort enjeu. Le secteur touristique et hôtelier bordelais (plus de 10 millions de touristes par an) s'appuie massivement sur des PMS et plateformes de booking cloud dont les configurations PCI DSS et RGPD sont souvent lacunaires. Les ETI du BTP, de la logistique et de l'agroalimentaire girondine migrent leurs ERP (SAP, Microsoft 365) vers le cloud et cherchent un accompagnement en sécurité cloud hybride.",
      sectors: [
        "SaaS B2B et scale-ups cloud-native French Tech Bordeaux",
        "Vitivinicole et agroalimentaire (traçabilité cloud, SaaS cave)",
        "Tourisme, hôtellerie et booking numérique",
        "BTP et proptech (ERP cloud, BIM cloud)",
        "Logistique et transport (cloud hybride)",
        "Santé et médico-social (HDS cloud Nouvelle-Aquitaine)",
      ],
      neighborhoods: [
        "Bordeaux Euratlantique — startups et numérique",
        "Bordeaux Tech et Darwin — co-working tech",
        "Mérignac et aéroparc — ETI et industrie",
        "Pessac, Talence et campus universitaire",
        "Bègles, Floirac — logistique et e-commerce",
        "Libourne, Langon — vitivinicole et PME girondines",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un SaaS vitivinicole bordelais ?",
          a: "Un audit AWS pour un SaaS vitivinicole bordelais (couvrant IAM, S3, RDS, Lambda, API Gateway, conformité CIS et protection des données commerciales sensibles) est facturé entre 4 000 et 8 000 euros HT selon le nombre de workloads et d'environnements (prod, staging, dev). CloudSecure inclut une revue spécifique des accès des clients et partenaires négociants via les API publiques, souvent le principal vecteur d'attaque pour ces plateformes. Le rapport livré sous 5 jours identifie les risques d'exfiltration de données propriétaires (millésimes, volumes, prix).",
        },
        {
          q: "Comment sécuriser une plateforme de booking hôtelier bordeaux sur le cloud en conformité PCI DSS ?",
          a: "La sécurisation d'une plateforme de booking hôtelière sur le cloud nécessite la tokenisation des données bancaires (PCI DSS P2PE ou HPoI), la segmentation stricte des environnements de paiement (CDE) du reste de l'infrastructure cloud, le chiffrement des données cartes, et un scan trimestriel ASV (Approved Scanning Vendor). CloudSecure réalise des audits PCI DSS cloud Bordeaux pour les hôtels et plateformes touristiques, accompagne la préparation aux audits QSA et implémente les contrôles compensatoires adaptés aux architectures serverless et microservices.",
        },
        {
          q: "DevSecOps Bordeaux : comment intégrer la sécurité dans le CI/CD d'une scale-up ?",
          a: "CloudSecure accompagne les scale-ups bordelaises dans la mise en place d'une chaîne DevSecOps complète à partir de 700 euros par jour : analyse de code en continu (Semgrep, Snyk), scan des dépendances (OWASP Dependency Check), sécurisation des images Docker (Trivy, Grype), gestion des secrets (HashiCorp Vault, AWS Secrets Manager), et monitoring de sécurité cloud-native (AWS Security Hub, Datadog Security). Nous intervenons en régie à Bordeaux ou à distance et formons les équipes ingénierie aux pratiques secure by design.",
        },
        {
          q: "Conformité NIS2 cloud pour les acteurs du numérique bordelais : quelles obligations ?",
          a: "Les SaaS B2B et acteurs du numérique bordelais classés comme fournisseurs de services numériques (DNS, cloud computing, places de marché en ligne) tombent dans le champ de NIS2 dès 50 salariés ou 10 M€ de CA. CloudSecure réalise un diagnostic NIS2 cloud Bordeaux gratuit, un audit complet des mesures de sécurité existantes et un plan de mise en conformité priorisé. Les obligations incluent la politique de sécurité cloud documentée, la gestion des incidents avec notification ANSSI sous 24h, la sécurité de la supply chain et les tests de pénétration réguliers.",
        },
        {
          q: "CloudSecure intervient-il à Bordeaux et dans toute la Nouvelle-Aquitaine ?",
          a: "CloudSecure intervient à Bordeaux, Mérignac, Pessac et dans toute la région Nouvelle-Aquitaine incluant Pau, Bayonne, La Rochelle, Limoges, Périgueux, Angoulême et Poitiers. Les audits cloud techniques se déroulent à distance pour une réactivité optimale, avec des déplacements sur site à Bordeaux et en Nouvelle-Aquitaine pour les ateliers de restitution, les formations et les missions de RSSI cloud externalisé Bordeaux. Devis gratuit sous 24h, démarrage de mission sous 48h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBordeaux;
