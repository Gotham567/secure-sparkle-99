import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPuyDeDome = () => (
  <CityLandingPage
    data={{
      city: "Puy-de-Dôme",
      citySlug: "puy-de-dome",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63",
      intro: "CyberSecure est votre prestataire sécurité cloud Puy-de-Dôme (63) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Clermont-Ferrand, Riom, Thiers, Issoire, Ambert et tout le département.",
      localContext: "Le Puy-de-Dôme est un département industriel en fort virage cloud. Michelin (siège mondial à Clermont) a lancé une transformation cloud de grande ampleur avec AWS et Azure pour ses usines mondiales (analytics de production, maintenance prédictive, collaboration mondiale). La French Tech Clermont-Ferrand génère des startups SaaS en forte croissance. L'UCA (Université Clermont Auvergne) développe des recherches en IA et cybersécurité. Le secteur agroalimentaire (Source Perrier, industrie alimentaire) adopte le cloud pour ses ERP et sa chaîne du froid.",
      sectors: [
        "Pneumatiques cloud (Michelin — AWS/Azure industriel, analytics usines mondiales)",
        "Semences cloud (Limagrain — GCP bioinformatique, NGS data, génomique cloud)",
        "Chimie cloud (Arkema, Solvay — ERP cloud SAP, process analytics)",
        "Startups SaaS (French Tech Clermont, Inotech — cloud-native, B2B SaaS)",
        "Santé cloud (CHRU Clermont, établissements 63 — HDS, télémédecine AuRA)",
        "Agroalimentaire cloud (Source Perrier, industrie alimentaire — ERP, traçabilité)",
        "Smart city (Clermont Auvergne Métropole — IoT Azure, données mobilité)",
        "Collectivités (CAM, CD63 — cloud souverain, dématérialisation services)",
      ],
      neighborhoods: [
        "Clermont-Ferrand – La Pardieu (63000)",
        "Cournon-d'Auvergne – Aubière (63800/63170)",
        "Chamalières – Royat (63400)",
        "Riom – Chappes (63200/63720)",
        "Thiers (63300)",
        "Issoire (63500)",
        "Vichy (03200)",
        "Ambert (63600)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Puy-de-Dôme (63) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 63 : Clermont Auvergne Métropole, Riom-Limagne, Thiers, Issoire. Nos spécialistes cloud ont une expertise dans les architectures cloud industrielles de Michelin et les plateformes cloud de bioinformatique de Limagrain. CERT cloud 24/7.",
        },
        {
          q: "Michelin utilise AWS pour l'analytics de production de ses 70 usines mondiales : comment sécuriser ces flux ?",
          a: "Michelin déploie une plateforme cloud industrielle (IIoT) sur AWS pour collecter les données de production de ses usines (températures de vulcanisation, paramètres de mélanges caoutchouc, données de contrôle qualité). La sécurisation de ces flux : AWS IoT Greengrass dans chaque usine pour le traitement local avant remontée cloud, VPN site-à-site entre les usines et AWS, IAM policies minimales par site de production, chiffrement des données de recettes (AWS KMS avec BYOK), et monitoring des anomalies (GuardDuty, Macie pour détecter les exfiltrations de données R&D). CyberSecure audite ces architectures cloud industrielles.",
        },
        {
          q: "Limagrain utilise GCP pour la bioinformatique : comment sécuriser des pipelines NGS (séquençage génomique) ?",
          a: "Les pipelines NGS (Next Generation Sequencing) pour l'analyse génomique des semences tournent sur GCP (Google Life Sciences, BigQuery) ou AWS (Batch, S3). La sécurisation passe par : contrôle strict des accès aux buckets de données génomiques (IAM, VPC Service Controls), chiffrement des données génomiques au repos (CMEK — Customer Managed Encryption Keys), audit logs de tous les accès aux données (Cloud Audit Logs), et isolation des projets de recherche (projets GCP séparés par variété végétale). CyberSecure accompagne les entreprises de bioinformatique dans leur sécurité cloud.",
        },
        {
          q: "La French Tech Clermont : quelles certifications cloud sont recommandées pour les startups SaaS B2B ?",
          a: "Pour les startups SaaS B2B clermontoises qui veulent vendre à des grands comptes français (Michelin, Limagrain, Solvay), les certifications recommandées sont : ISO 27001 (standard européen, souvent exigé par les grands comptes), SOC 2 Type II (requis pour les clients américains), et HDS si la startup traite des données de santé. CyberSecure propose un parcours de certification adapté aux startups : gap analysis (4 semaines), plan de mise en conformité (3-6 mois), audit de certification préparatoire, et mise en relation avec des organismes certificateurs (Bureau Veritas, BSI, LRQA). Tarifs adaptés aux budgets startup.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Puy-de-Dôme ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Puy-de-Dôme — diagnostics numériques. Clermont Auvergne Métropole — programmes innovation. BPI France AuRA — prêts innovation. Le cluster VIAMECA et la French Tech Clermont accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPuyDeDome;
