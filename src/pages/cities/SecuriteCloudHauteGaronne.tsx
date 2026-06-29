import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudHauteGaronne = () => (
  <CityLandingPage
    data={{
      city: "Haute-Garonne",
      citySlug: "haute-garonne",
      region: "Occitanie",
      postalCode: "31",
      intro: "CyberSecure est votre prestataire sécurité cloud Haute-Garonne (31) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Toulouse, Blagnac, Colomiers, Tournefeuille, Muret et tout le département.",
      localContext: "La Haute-Garonne héberge la capitale mondiale de l'aérospatial civil. L'écosystème toulousain adopte massivement le cloud pour ses processus : Airbus utilise Azure et AWS pour ses plateformes de collaboration (Skywise data platform), ses outils de simulation, et ses MRO (Maintenance Repair & Overhaul). Les startups deeptech de la French Tech Toulouse sont nativement cloud. Le CHU de Toulouse et l'Oncopole migrent vers des architectures cloud hybrides pour la recherche médicale. La ville intelligente Toulouse Métropole s'appuie sur des plateformes cloud pour ses données urbaines.",
      sectors: [
        "Aérospatial cloud (Airbus Skywise Azure, simulation HPC cloud, MRO cloud)",
        "Défense cloud (Thales Alenia Space, CNES — cloud souverain, données spatiales)",
        "Santé cloud (CHU Toulouse, Oncopole, Pierre Fabre — HDS cloud, essais cliniques)",
        "Startups SaaS (French Tech Toulouse, deeptech IA, drones — AWS/GCP natif)",
        "Recherche cloud (INSA, ISAE-Supaéro, CNRS — HPC cloud, données recherche)",
        "Agroalimentaire cloud (Pierre Fabre, coopératives cereales — ERP cloud)",
        "Smart city (Toulouse Métropole — données urbaines cloud, mobilité)",
        "Collectivités (CD31, communes — cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Toulouse – Compans-Caffarelli – La Cartoucherie (31000)",
        "Blagnac – Beauzelle (31700)",
        "Colomiers – Tournefeuille (31770/31170)",
        "Labège – SETO – Ramonville (31670)",
        "Muret – Portet-sur-Garonne (31600)",
        "L'Union – Balma (31240)",
        "Saint-Orens-de-Gameville (31650)",
        "Cugnaux – Villeneuve-Tolosane (31270)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Haute-Garonne (31) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans toute la Haute-Garonne : Toulouse Métropole, Muretain, Lauragais, Comminges. Nos spécialistes cloud sont intégrés dans l'écosystème aérospatial toulousain et connaissent les contraintes spécifiques du secteur (TISAX cloud, données de propriété intellectuelle). CERT cloud 24/7.",
        },
        {
          q: "Airbus utilise Skywise sur Azure : comment sécuriser une plateforme de données aéronautique cloud ?",
          a: "Airbus Skywise est une plateforme de données aéronautiques hébergée sur Microsoft Azure, permettant l'analyse des données de vol pour la maintenance prédictive. Pour sécuriser une telle plateforme : contrôle strict des accès (Entra ID, RBAC par compagnie aérienne cliente), chiffrement des données au repos et en transit (AES-256, TLS 1.3), isolation des données par tenant (architecture multi-tenant sécurisée), audit logs pour chaque accès aux données de vol, et conformité aux réglementations aéronautiques (EASA). CyberSecure audite les plateformes cloud dans l'aéronautique.",
        },
        {
          q: "Les startups deeptech toulousaines (IA embarquée, drones) : quelle architecture cloud sécurisée pour leur R&D ?",
          a: "Les startups deeptech développent des algorithmes propriétaires (modèles IA, logiciels de contrôle de drones) qui nécessitent des environnements cloud sécurisés pour leurs expériences. AWS ou GCP proposent des environnements isolés (VPC privés, Private Link) pour les données de R&D. La gestion des secrets (AWS Secrets Manager, HashiCorp Vault) protège les clés de chiffrement et credentials. Un SBOM (Software Bill of Materials) pour les dépendances open-source évite les vulnérabilités de type supply chain. CyberSecure accompagne les startups deeptech dans leur sécurité cloud.",
        },
        {
          q: "Le CHU Toulouse et l'Oncopole : peut-on utiliser AWS ou Azure pour la recherche sur le cancer ?",
          a: "Oui. AWS (Health Information Service, régions européennes) et Microsoft Azure (Microsoft Cloud for Healthcare, France Centre) sont certifiés HDS en France et peuvent héberger des données de santé, y compris des données de recherche clinique sensibles (données génomiques, images médicales). Pour les essais cliniques, les plateformes cloud doivent respecter les ICH E6(R3) Guidelines (Clinical Trial Data Management) et être validées selon les bonnes pratiques GCP. L'anonymisation des données patients est essentielle avant tout traitement analytique cloud. CyberSecure accompagne les établissements de santé dans leur stratégie cloud HDS.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Haute-Garonne ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Toulouse Métropole — chèques numériques. Toulouse Métropole — programmes innovation. BPI France Occitanie — prêts innovation. Aerospace Valley accompagne ses membres avec des ressources cybersécurité. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudHauteGaronne;
