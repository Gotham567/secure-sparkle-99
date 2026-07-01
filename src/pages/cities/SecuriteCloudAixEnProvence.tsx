import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAixEnProvence = () => (
  <CityLandingPage
    data={{
      city: "Aix-en-Provence",
      citySlug: "aix-en-provence",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13100",
      intro: "Aix-en-Provence concentre des géants du cloud comme Sopra Steria et Capgemini : CloudSecure réalise vos audits de sécurité AWS, Azure et GCP pour protéger les données sensibles de la Technopole Aix. Conformité NIS2, DevSecOps et RSSI cloud externalisé pour les PME tech et laboratoires de recherche de la région Provence-Alpes-Côte d'Azur.",
      localContext: "La Technopole d'Aix-en-Provence regroupe des ESN de premier plan (Sopra Steria, Capgemini, Atos) qui migrent massivement vers le cloud AWS et Azure, créant des surfaces d'attaque étendues sur les environnements hybrides. Le tissu universitaire aixois (Aix-Marseille Université) et ses laboratoires de recherche hébergent des données sensibles en cloud éducation, exposés aux attaques par phishing et exfiltration. Les cliniques et établissements de santé du bassin d'Aix doivent se conformer au référentiel HDS (Hébergeur de Données de Santé) pour tout hébergement cloud de dossiers médicaux. Les PME tech de la région font face à des ransomwares ciblant les sauvegardes cloud et les API SaaS B2B mal configurées.",
      sectors: [
        "ESN et cabinets conseil cloud (Sopra Steria, Capgemini, Atos)",
        "Universités et laboratoires de recherche (cloud éducation HPC)",
        "Santé et cliniques privées (cloud HDS, dossiers patients)",
        "PME tech et éditeurs SaaS B2B",
        "Immobilier et proptech (cloud data, CRM SaaS)",
        "Collectivités et Métropole Aix-Marseille-Provence",
      ],
      neighborhoods: [
        "Technopole de l'Arbois (Aix-en-Provence)",
        "Quartier Sextius-Mirabeau (centre affaires)",
        "Plateau de l'Arbois – Vitrolles",
        "Zone d'activités Les Milles",
        "Pertuis et Pays d'Aix",
        "Métropole Aix-Marseille-Provence",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit de sécurité cloud AWS pour une PME tech à Aix-en-Provence ?",
          a: "Un audit de sécurité AWS pour une PME tech ou une ESN d'Aix-en-Provence est facturé entre 3 500 et 8 000 € HT selon le nombre de comptes AWS, de services exposés (EC2, S3, RDS, Lambda) et de workloads en production. CloudSecure inclut systématiquement une analyse IAM, une revue des Security Groups et un rapport de conformité CIS Benchmarks livré sous 7 jours. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un environnement cloud hybride pour une ESN de la Technopole d'Aix ?",
          a: "Les ESN comme Sopra Steria ou Capgemini opèrent des architectures hybrides mêlant datacenter on-premise et cloud AWS/Azure. CloudSecure audite les connexions VPN/ExpressRoute, les droits IAM cross-account, les flux de données entre environnements et la segmentation réseau cloud. Nous déployons ensuite des garde-fous Terraform (Infrastructure as Code sécurisé) et des pipelines DevSecOps avec contrôles SAST/DAST automatisés. Chaque remédiation est documentée et priorisée selon l'impact métier.",
        },
        {
          q: "Les universités d'Aix-en-Provence doivent-elles se conformer à une réglementation cloud spécifique ?",
          a: "Aix-Marseille Université et ses laboratoires hébergent des données de recherche parfois sensibles (données personnelles, données de santé dans le cadre d'études cliniques) soumises au RGPD et potentiellement au SecNumCloud si des données classifiées sont impliquées. CloudSecure réalise un audit RGPD cloud pour cartographier les flux de données, contrôler les droits d'accès aux buckets S3 ou Azure Blob, et s'assurer que les prestataires cloud utilisés sont certifiés. Nous intervenons en distanciel ou sur le campus à Aix.",
        },
        {
          q: "Comment mettre en place un pipeline DevSecOps sécurisé pour une startup SaaS aixoise ?",
          a: "CloudSecure intègre la sécurité dès la CI/CD pour les startups SaaS d'Aix-en-Provence : analyse SAST avec SonarQube, scan de secrets avec Trufflebite/GitGuardian, analyse de dépendances (OWASP Dependency-Check), scan d'images Docker avec Trivy et déploiement Terraform sécurisé avec Checkov. Nos ingénieurs DevSecOps interviennent en régie à 700-900 €/jour ou en mode forfait pour bootstrapper votre pipeline GitHub Actions ou GitLab CI. Un audit initial de vos workflows existants est inclus.",
        },
        {
          q: "CloudSecure intervient-il à Aix-en-Provence en présentiel ou uniquement à distance ?",
          a: "CloudSecure intervient à Aix-en-Provence aussi bien en présentiel qu'en distanciel selon vos préférences. Nos consultants se déplacent à la Technopole de l'Arbois, sur les Milles ou dans votre siège social pour les phases d'audit qui nécessitent un accès sur site (interviews RSSI, revue d'architecture physique, ateliers de remédiation). Les phases techniques (tests d'intrusion cloud, revue de configuration, déploiement DevSecOps) sont réalisables entièrement à distance via accès sécurisé. Devis gratuit et déplacement offert pour tout audit supérieur à 5 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAixEnProvence;
