import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudIleDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Île-de-France",
      citySlug: "ile-de-france",
      region: "Île-de-France",
      postalCode: "75 / 77 / 78 / 91 / 92 / 93 / 94 / 95",
      intro: "CyberSecure est votre expert en sécurité cloud Île-de-France : audit AWS, Azure et GCP, conformité DORA et NIS2 pour les fintechs et grands groupes, DevSecOps, architecture Zero Trust et migration sécurisée vers le cloud pour les entreprises franciliennes.",
      localContext: "L'Île-de-France est le premier marché cloud de France et l'un des premiers d'Europe. Les data centers AWS (eu-west-3 Paris), Microsoft Azure (France Central à Paris, France South à Marseille), et GCP (europe-west9 Paris) hébergent une proportion croissante des données des entreprises franciliennes. La région concentre les principales fintechs françaises (Lydia, Qonto, Shine, Alan) soumises à DORA, les startups SaaS les plus financées d'Europe, et les DSI des groupes du CAC40 qui migraient leurs workloads critiques vers le cloud. CyberSecure accompagne ces entreprises dans la sécurisation de leurs environnements cloud, des startups pre-seed aux grands groupes cotés.",
      sectors: [
        "Fintechs et néobanques (Lydia, Qonto, Shine, Alan — DORA obligatoire)",
        "Grands groupes CAC40 (migration cloud hybride, SaaS enterprise)",
        "Startups SaaS (Station F, French Tech Paris — pre-seed à série B)",
        "Banque et assurance (La Défense — conformité DORA et NIS2)",
        "E-commerce et retail digital (fashion, luxury digital)",
        "Médias et entertainment (streaming, gaming, adtech)",
        "Santé numérique (HDS, télémédecine, medtech parisienne)",
        "Défense et aérospatial (sécurisation des données sur cloud souverain)",
      ],
      neighborhoods: [
        "Paris intramuros – arrondissements tech et finance (2e, 8e, 9e, 11e)",
        "La Défense – Nanterre – Puteaux – Courbevoie (92)",
        "Boulogne-Billancourt – Issy-les-Moulineaux (92)",
        "Saint-Denis – Montreuil – Pantin (93) — data centers mutualisés",
        "Saclay – Gif-sur-Yvette – Palaiseau (91) — cluster recherche cloud",
        "Vélizy-Villacoublay – Versailles – Massy (78/91)",
        "Cergy-Pontoise – Argenteuil – Val-d'Oise (95)",
        "Marne-la-Vallée – Meaux – Melun (77)",
      ],
      faq: [
        {
          q: "Quelles sont les spécificités de la sécurité cloud en Île-de-France ?",
          a: "Les entreprises franciliennes utilisent les 3 hyperscalers (AWS, Azure, GCP) avec une prédominance d'Azure pour les grands groupes et d'AWS/GCP pour les startups. Les enjeux spécifiques incluent : la conformité DORA pour les fintechs et banques de La Défense, la souveraineté des données pour les entreprises avec des contraintes réglementaires (cloud souverain OVHcloud, S3NS), et la sécurisation des pipelines CI/CD des startups. CyberSecure maîtrise tous ces contextes.",
        },
        {
          q: "Avez-vous de l'expérience avec les fintechs parisiennes soumises à DORA ?",
          a: "Oui. Nous accompagnons plusieurs fintechs franciliennes dans leur conformité DORA (Digital Operational Resilience Act) : évaluation des risques TIC, revue des contrats cloud (AWS/Azure/GCP), tests de résilience opérationnelle, notification des incidents à l'ACPR/AMF (4h pour les incidents majeurs). DORA est entré en application en janvier 2025 — ne tardez pas à initier votre mise en conformité.",
        },
        {
          q: "Mon startup parisienne utilise AWS — avez-vous des packages adaptés aux budgets startup ?",
          a: "Oui. CyberSecure propose des packages startup spécialement conçus pour les budgets pre-seed et seed : audit AWS Well-Architected Security pillar, revue IAM et configuration, rapport de vulnérabilités cloud, synthèse pour les investisseurs (due diligence ready). Tarifs transparents et délai sous 5 jours ouvrés. Nous intervenons aussi dans les programmes d'accélération (Station F, TheFamily, NUMA) pour des prestations collectives.",
        },
        {
          q: "Nos serveurs sont dans le cloud Azure France Central (Paris) — sommes-nous conformes RGPD ?",
          a: "La localisation en France (Azure France Central à Paris) est un premier pas important pour la conformité RGPD, mais ce n'est pas suffisant. Il faut aussi : signer le DPA RGPD avec Microsoft, configurer les paramètres de résidence des données (Data Residency), activer le chiffrement des données sensibles, contrôler les accès des ingénieurs Microsoft (Microsoft Customer Lockbox), et documenter ces mesures dans votre registre des traitements. CyberSecure audite votre tenant Azure sur tous ces points.",
        },
        {
          q: "Quels sont vos délais d'intervention en Île-de-France pour un audit cloud ?",
          a: "Pour les audits cloud planifiés (AWS, Azure, GCP), nous démarrons sous 3 à 7 jours ouvrés en Île-de-France. Les audits cloud se réalisent principalement à distance (pas besoin de déplacement physique pour un audit cloud), ce qui accélère les délais. Pour les incidents cloud urgents (compromission de compte, fuite de données S3, accès non autorisé), notre CERT intervient sous 2 heures, 24/7. Devis gratuit sous 48h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudIleDeFrance;
