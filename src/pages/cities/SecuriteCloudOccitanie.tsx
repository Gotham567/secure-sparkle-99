import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudOccitanie = () => (
  <CityLandingPage
    data={{
      city: "Occitanie",
      citySlug: "occitanie",
      region: "Occitanie",
      postalCode: "31 / 34 / 30 / 66 / 81 / 11 / 65 / 09 / 12 / 46 / 48 / 82 / 32",
      intro: "CyberSecure est votre expert en sécurité cloud Occitanie : audit AWS, Azure et GCP, DevSecOps, conformité NIS2 pour les entreprises de Toulouse, Montpellier, Nîmes, Perpignan et toute la région.",
      localContext: "L'Occitanie est une région au potentiel cloud en forte croissance. Toulouse abrite des entreprises tech et aéronautiques qui migrent massivement vers le cloud (AWS pour la simulation aéronautique, Azure pour Airbus et Thales, GCP pour les startups de la French Tech Toulouse). Le campus Labège concentre de nombreuses ETI tech. Montpellier attire des entreprises numériques grâce à son cadre de vie et son université dynamique. Les enjeux cloud en Occitanie sont marqués par la sécurisation des données industrielles aéronautiques (export control, ITAR) et par la conformité RGPD des startups B2C.",
      sectors: [
        "Aéronautique et spatial (données de simulation cloud, Airbus, CNES, ATR)",
        "Numérique et SaaS (French Tech Toulouse, startups montpelliéraines)",
        "Santé et biotech (CHU cloud, télémedecine, medtech occitane)",
        "Agriculture connectée (IoT agricole, traçabilité cloud)",
        "Tourisme et e-tourisme (plateformes de réservation, OTA)",
        "Collectivités (Toulouse Métropole, Montpellier Métropole en cloud souverain)",
        "PME industrielles (migration ERP vers SaaS cloud)",
        "Enseignement supérieur et recherche (CNES, INRAE, universités)",
      ],
      neighborhoods: [
        "Toulouse – Labège – Blagnac – Colomiers (31)",
        "Montpellier – Lattes – Millénaire (34)",
        "Nîmes – Alès (30)",
        "Perpignan – Canet-en-Roussillon (66)",
        "Albi – Castres (81)",
        "Béziers – Sète (34)",
        "Narbonne – Carcassonne (11)",
        "Tarbes – Lourdes (65)",
      ],
      faq: [
        {
          q: "Les entreprises aéronautiques de Toulouse peuvent-elles stocker leurs données sur le cloud public ?",
          a: "C'est une question complexe en aéronautique. Les données ITAR (International Traffic in Arms Regulations) et les données de défense classifiées ne peuvent pas être stockées sur des clouds hyperscalers américains sans mesures complémentaires (contrôle de l'export, habilitations). En revanche, les données non classifiées (données CAO commerciales, ERP de gestion) peuvent migrer vers le cloud avec une architecture sécurisée appropriée (chiffrement client-side, CMEK, contrôle des accès ingénieurs). CyberSecure vous guide dans la classification de vos données et le choix de l'architecture cloud adaptée.",
        },
        {
          q: "Existe-t-il des solutions de cloud souverain pour les entreprises occitanes ?",
          a: "Oui. OVHcloud (data centers à Strasbourg et Roubaix) propose une offre cloud souverain française. S3NS (joint-venture Google/Thales) offre un cloud GCP avec des garanties de souveraineté françaises. Outscale (Dassault Systèmes) est une autre option. Pour les collectivités d'Occitanie (Toulouse Métropole, Région Occitanie), ces clouds souverains répondent aux exigences de localisation des données publiques. CyberSecure accompagne le choix et la sécurisation de ces environnements.",
        },
        {
          q: "Les startups de la French Tech Toulouse ont-elles des besoins spécifiques en sécurité cloud ?",
          a: "Oui. Les startups toulousaines en pré-amorçage et amorçage ont 3 besoins prioritaires : (1) Une architecture AWS/GCP sécurisée dès le départ (éviter de corriger une dette sécurité en série B), (2) Un rapport de sécurité pour rassurer les investisseurs lors de la due diligence, (3) Une conformité RGPD de base (mentions légales, cookies, registre des traitements). CyberSecure propose des packages startup à prix accessible, avec des délais courts.",
        },
        {
          q: "Mon hôpital ou clinique en Occitanie veut passer à un ERP cloud — quelles précautions ?",
          a: "Le cloud pour les établissements de santé est soumis à la certification HDS (Hébergement de Données de Santé). Avant de migrer un ERP ou un DPI (Dossier Patient Informatisé) vers le cloud, vous devez : vérifier que le prestataire cloud est certifié HDS (AWS, Azure, GCP, OVHcloud le sont), réaliser une Analyse d'Impact RGPD (AIPD/PIA) sur le nouveau traitement, et documenter les clauses de sous-traitance avec l'hébergeur. CyberSecure accompagne les établissements de santé occitans dans ces démarches.",
        },
        {
          q: "Quel budget prévoir pour un audit sécurité cloud à Toulouse ou Montpellier ?",
          a: "Un audit sécurité cloud complet (AWS, Azure ou GCP) pour une PME/ETI varie entre 3 000 et 15 000 € selon la complexité de l'environnement et les services utilisés. Pour les startups early-stage, CyberSecure propose des packages d'entrée de gamme (revue de configuration, rapport de vulnérabilités) à partir de 1 500-2 500 €. Plusieurs financements disponibles (Mon Aide Cyber, BPI France). Devis gratuit sous 48h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudOccitanie;
