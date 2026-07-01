import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CloudSecure accompagne les startups deeptech de Sophia Antipolis, les hôtels de luxe et les acteurs de la santé de Nice dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Nice, sécurité cloud Azure Nice et DevSecOps Nice pour les entreprises cloud-native de la technopôle. Nos experts en sécurisation infrastructure cloud Nice protègent les données des startups de Sophia Antipolis aux établissements touristiques de la Riviera.",
      localContext: "Sophia Antipolis est l'un des premiers parcs technologiques d'Europe avec plus de 2 400 entreprises cloud-native — startups IA, IoT, deeptech, cybersécurité — qui développent leurs applications sur AWS, Azure et GCP avec des architectures microservices et Kubernetes à haute technicité. Le tourisme numérique niçois et de la Côte d'Azur génère des plateformes de booking hébergeant des données bancaires et clients (PCI DSS, RGPD) dont la configuration cloud est souvent insuffisante face aux attaques saisonnières. Le CHU de Nice et les cliniques azuréennes migrent leurs systèmes d'information hospitaliers vers le cloud avec des exigences HDS spécifiques que CloudSecure maîtrise. Les start-ups niçoises dans la santé numérique (medtech, e-santé) développent des applications cloud qui combinent les exigences HDS et les contraintes de performance temps réel.",
      sectors: [
        "Startups deeptech et IA (Sophia Antipolis, cloud-native)",
        "Tourisme, hôtellerie de luxe et booking (PCI DSS cloud)",
        "Santé et HDS (CHU de Nice, medtech azuréennes)",
        "Finance et gestion de patrimoine (cloud Azure)",
        "IoT industriel et smart city (cloud AWS, GCP)",
        "Yachting et nautisme (IoT cloud, data connectée)",
      ],
      neighborhoods: [
        "Sophia Antipolis et Valbonne — tech et startups",
        "Nice Méridia — campus numérique et innovation",
        "Nice Centre et Promenade — hôtellerie et luxe",
        "Antibes, Juan-les-Pins — tech et tourisme",
        "Cagnes-sur-Mer, Saint-Laurent-du-Var",
        "Grasse et arrière-pays azuréen — industrie et parfumerie",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une startup deeptech de Sophia Antipolis ?",
          a: "Un audit AWS pour une startup deeptech de Sophia Antipolis (IAM, S3, EKS, Lambda, API Gateway, CloudTrail, conformité CIS Benchmark) est facturé entre 4 000 et 8 000 euros HT selon la complexité de l'architecture et le nombre d'environnements. CloudSecure inclut une revue spécifique des pipelines MLOps, des API exposées aux clients enterprise et de la configuration des clusters EKS — points critiques pour les startups IA et IoT. Le rapport livré sous 5 jours identifie les risques de fuite de propriété intellectuelle et les vecteurs d'attaque sur les APIs.",
        },
        {
          q: "Comment sécuriser une plateforme de booking hôtelière sur le cloud en Côte d'Azur en conformité PCI DSS ?",
          a: "La sécurisation d'une plateforme de booking hôtelière sur le cloud nécessite la tokenisation des données bancaires (réduction du périmètre PCI DSS), la segmentation du CDE (Cardholder Data Environment) du reste de l'infrastructure, le chiffrement TLS 1.3 de toutes les transactions, et un scan trimestriel ASV. CloudSecure réalise des audits PCI DSS cloud Nice pour les hôtels et opérateurs touristiques de la Côte d'Azur, et accompagne la mise en conformité avec les architectures cloud modernes (serverless, microservices).",
        },
        {
          q: "DevSecOps Nice : comment sécuriser les applications cloud-native des startups de Sophia Antipolis ?",
          a: "CloudSecure accompagne les startups de Sophia Antipolis dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD (GitHub Actions, GitLab CI), déployons des outils SAST (Semgrep, Checkmarx), SCA (Snyk), scan d'images Docker (Trivy), et sécurisons les clusters Kubernetes (EKS, GKE) avec OPA Gatekeeper et Falco pour la détection d'anomalies en runtime. Formations DevSecOps en présentiel à Sophia Antipolis ou Nice disponibles.",
        },
        {
          q: "Comment sécuriser les données de santé sur le cloud en conformité HDS pour les medtech niçoises ?",
          a: "Les startups medtech et e-santé niçoises hébergeant des données de santé doivent utiliser un hébergeur certifié HDS (AWS Paris, Azure France Central, OVHcloud) et respecter les exigences du référentiel HDS de l'ANS : chiffrement des données au repos et en transit, contrôle d'accès strict avec traçabilité, cloisonnement des environnements, et DPA (Data Processing Agreement) conforme. CloudSecure réalise des audits HDS cloud Nice spécialisés pour les medtech et établissements de santé azuréens, couvrant à la fois les aspects techniques et organisationnels.",
        },
        {
          q: "CloudSecure intervient-il à Nice et dans toute la Côte d'Azur ?",
          a: "CloudSecure intervient à Nice, Sophia Antipolis, Antibes, Cannes, Grasse, Menton et dans toute la région Côte d'Azur et PACA Est. Les audits cloud techniques se déroulent à distance pour une réactivité optimale, avec des interventions sur site à Nice, Sophia Antipolis et Cannes pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Nice. Nous couvrons également les entreprises monégasques dans leur conformité cloud (RGPD, CCIN, exigences financières spécifiques à Monaco).",
        },
      ],
    }}
  />
);

export default SecuriteCloudNice;
