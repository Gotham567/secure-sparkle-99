import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMaineEtLoire = () => (
  <CityLandingPage
    data={{
      city: "Maine-et-Loire",
      citySlug: "maine-et-loire",
      region: "Pays de la Loire",
      postalCode: "49",
      intro: "CyberSecure est votre prestataire sécurité cloud Maine-et-Loire (49) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises d'Angers, Saint-Barthélemy-d'Anjou, Avrillé, Saumur, Cholet et tout le département.",
      localContext: "Le Maine-et-Loire adopte le cloud à un rythme soutenu. STMicroelectronics Angers utilise des environnements cloud (AWS, Azure) pour ses outils de simulation et de collaboration avec les fondeurs. Servier Pharmaceuticals migre ses systèmes R&D vers des plateformes cloud GxP. La French Tech Angers génère des startups cloud-native dans l'IoT industriel et l'agritech. Le secteur viticole ligérien développe des plateformes e-commerce et DTC (Direct to Consumer) cloud. Angers Loire Métropole développe une politique smart city avec des déploiements IoT cloud.",
      sectors: [
        "Microélectronique cloud (STMicro Angers — simulation EDA cloud, collaboration)",
        "Pharma cloud (Servier — Azure GxP, Veeva Vault, essais cliniques cloud)",
        "Agritech cloud (Loire viticulture, startups agri 49 — IoT capteurs, ERP cloud)",
        "IoT industriel (French Tech Angers, ESEO — cloud-native IoT, AWS IoT)",
        "Santé cloud (CHU Angers, ICO — HDS cloud, imagerie médicale, IA)",
        "Agroalimentaire cloud (Cointreau, Andros — ERP cloud, traçabilité export)",
        "Smart city (ALM — IoT Azure, mobilité, environnement)",
        "Collectivités (CD49, communes 49 — cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Angers – Technopôle (49000)",
        "Saint-Barthélemy-d'Anjou (49124)",
        "Avrillé – Beaucouzé (49240/49070)",
        "Saumur (49400)",
        "Cholet (49300)",
        "Les Ponts-de-Cé (49130)",
        "Segré-en-Anjou (49500)",
        "Doué-en-Anjou (49700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Maine-et-Loire (49) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 49 : Angers Loire Métropole, Saumurois, Choletais, Baugeois. Nos spécialistes cloud ont une expertise dans les architectures cloud des secteurs microélectronique et pharma du Maine-et-Loire. CERT cloud 24/7.",
        },
        {
          q: "STMicroelectronics Angers utilise AWS pour la simulation de circuits intégrés : comment sécuriser ces workloads HPC ?",
          a: "Les simulations EDA (SPICE, FEM, simulation de timing) sur AWS utilisent des instances EC2 à haute mémoire (r6i.32xlarge) ou des services HPC (AWS ParallelCluster). La sécurisation de ces workloads : isolation dans un VPC privé sans accès internet public, chiffrement EBS des volumes de simulation (données de layout et netlists sensibles), IAM policies strictes pour les ingénieurs (accès limité aux projets assignés), et CloudTrail pour auditer les accès aux données de conception. Les licences EDA (flexlm) doivent être accessibles depuis le cloud sans exposer le serveur de licences sur internet (VPN site-à-site entre Angers et AWS). CyberSecure audite ces configurations.",
        },
        {
          q: "Servier Pharmaceuticals utilise Veeva Vault sur cloud pour ses essais cliniques : est-ce conforme RGPD et ICH E6 ?",
          a: "Veeva Vault (plateforme SaaS cloud pour la gestion des documents et données d'essais cliniques) est certifiée 21 CFR Part 11, GxP (Annex 11), et RGPD. Pour Servier, l'utilisation de Veeva Vault est généralement conforme si : le tenant est hébergé dans des datacenters européens (Veeva dispose de datacenters en UE), un DPA (Data Processing Agreement) RGPD est signé avec Veeva, et les contrôles d'accès par étude sont correctement configurés (RBAC par protocole de recherche). CyberSecure audite les configurations Veeva Vault des laboratoires pharmaceutiques.",
        },
        {
          q: "La French Tech Angers et les startups IoT : comment construire une architecture cloud sécurisée pour l'IoT industriel ?",
          a: "Une architecture cloud IoT industrielle sécurisée pour les startups angevines repose sur : AWS IoT Core ou Azure IoT Hub pour l'ingestion des données capteurs, un broker MQTT avec authentification par certificats X.509 pour chaque device, une ségrégation entre les environnements dev/staging/prod, des politiques IoT minimales (les appareils ne peuvent publier que sur leurs propres topics), AWS Macie ou Azure Purview pour détecter les données sensibles dans les flux IoT, et un système d'alertes sur les anomalies (DDoS de devices, comportement anormal). CyberSecure accompagne les startups IoT dans leur architecture cloud sécurisée.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Maine-et-Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Maine-et-Loire — diagnostics numériques. Angers Loire Métropole — programmes innovation. BPI France Pays de Loire — prêts innovation. Atlanpole et la French Tech Angers accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMaineEtLoire;
