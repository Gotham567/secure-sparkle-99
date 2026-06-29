import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudDoubs = () => (
  <CityLandingPage
    data={{
      city: "Doubs",
      citySlug: "doubs",
      region: "Bourgogne-Franche-Comté",
      postalCode: "25",
      intro: "CyberSecure est votre prestataire sécurité cloud Doubs (25) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Besançon, Montbéliard, Pontarlier, Morteau, Audincourt et tout le département.",
      localContext: "Le Doubs adopte progressivement le cloud dans ses deux pôles économiques. Stellantis Sochaux utilise Azure Industrial IoT et AWS pour sa transformation Industrie 4.0 (maintenance prédictive, analytics de production). FEMTO-ST utilise le HPC cloud (AWS, GENCI) pour ses simulations de MEMS. Les PME bisontines migrent massivement vers Microsoft 365 et des ERP cloud (Sage, SAP Business One). Numerica et le TEMIS accompagnent les PME dans leur transition numérique. La frontière suisse génère des architectures multi-cloud France-Suisse avec des exigences de souveraineté des données.",
      sectors: [
        "Industrie 4.0 cloud (Stellantis Sochaux — Azure IoT, maintenance prédictive cloud)",
        "Recherche cloud (FEMTO-ST — HPC AWS, GCP simulation MEMS, calcul scientifique)",
        "Pharma cloud (Novartis Pontarlier, Nestlé Purina — Azure GxP, ERP SAP cloud)",
        "Transfrontalier cloud (entreprises Doubs-CH — OVHcloud France, souveraineté data)",
        "PME cloud (Besançon tertiaire — Microsoft 365, Sage cloud, Teams)",
        "Santé cloud (CHRU Besançon, cliniques — HDS cloud, imagerie médicale)",
        "Microtechnique cloud (horlogerie, robotique — PLM cloud, collaboration)",
        "Collectivités (Grand Besançon Métropole — Numspot, e-services, open data)",
      ],
      neighborhoods: [
        "Besançon – Planoise (25000)",
        "Montbéliard – Sochaux – Audincourt (25200/25600)",
        "Pontarlier (25300)",
        "Morteau – Maîche (25500/25120)",
        "Baume-les-Dames (25110)",
        "Valentigney (25700)",
        "Ornans (25290)",
        "Clerval – Baume-les-Dames (25520)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Doubs (25) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le Doubs : Grand Besançon Métropole, Pays de Montbéliard, Haut-Doubs frontalier. Nos spécialistes cloud ont une expertise dans les architectures cloud industrielles de Stellantis et les plateformes HPC cloud de FEMTO-ST. CERT cloud 24/7.",
        },
        {
          q: "Stellantis Sochaux migre vers Azure Industrial IoT : comment sécuriser les données de production automobile en cloud ?",
          a: "Stellantis utilise Azure Digital Twins pour créer des jumeaux numériques de ses usines (jumeau numérique de l'usine de Sochaux) et Azure IoT Hub pour la collecte des données capteurs (robots soudeurs, lignes d'assemblage). La sécurisation : segmentation réseau entre les automates de production (Layer 1-3 Purdue) et les passerelles IoT Edge (Layer 3-4), authentification forte des passerelles industrielles vers Azure (certificats X.509), politiques IAM minimales pour les workloads cloud (least privilege), et monitoring des anomalies (Azure Defender for IoT avec alertes sur les écarts de comportement des machines). CyberSecure audite ces architectures cloud industrielles.",
        },
        {
          q: "Les entreprises doubistes avec des filiales en Suisse : comment gérer la souveraineté des données France/Suisse ?",
          a: "La Suisse est un pays tiers (hors UE) bénéficiant d'une décision d'adéquation. Les données personnelles peuvent y être transférées sans formalité supplémentaire. Cependant, pour les données stratégiques (plans industriels, R&D, données financières sensibles), les entreprises doubistes préfèrent souvent garder leurs données en France pour des raisons de souveraineté. OVHcloud (Roubaix/Strasbourg) propose des offres SecNumCloud qui garantissent que les données restent en France, sous droit français, sans risque de requêtes étrangères (CLOUD Act). CyberSecure conseille sur les stratégies de localisation des données.",
        },
        {
          q: "Novartis à Pontarlier utilise Azure pour ses systèmes GxP : est-ce conforme aux exigences pharma européennes ?",
          a: "Microsoft Azure est conforme aux bonnes pratiques de fabrication pharmaceutique (GMP/GxP) européennes (Eudralex Annex 11) et propose une documentation de qualification (IQ/OQ) pour ses services cloud. Pour Novartis Pontarlier, les systèmes GxP sur Azure doivent : être inclus dans le périmètre du Computer System Validation (CSV), avoir des audit trails immuables (Log Analytics avec rétention longue durée), être protégés contre la modification non autorisée des données (versioning S3 ou Blob avec soft delete), et être couverts par un contrat cloud incluant les clauses Annex 11. CyberSecure accompagne les sites pharma dans leurs audits cloud GxP.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Doubs ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Doubs — diagnostics numériques. Grand Besançon Métropole — programmes innovation. BPI France Bourgogne-Franche-Comté — prêts innovation. Le TEMIS et Numerica accompagnent les PME dans leur transformation numérique. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudDoubs;
