import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAlpesMaritimes = () => (
  <CityLandingPage
    data={{
      city: "Alpes-Maritimes",
      citySlug: "alpes-maritimes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06",
      intro: "CyberSecure est votre prestataire sécurité cloud Alpes-Maritimes (06) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Nice, Sophia Antipolis, Antibes, Cannes, Grasse et tout le département.",
      localContext: "Les Alpes-Maritimes concentrent des entreprises technologiques parmi les plus avancées dans l'adoption du cloud. Sophia Antipolis héberge des pionniers du cloud : SAP avec ses SaaS d'entreprise (SAP SuccessFactors, SAP Concur), Amadeus avec sa plateforme de réservation mondiale cloud-native, et des centaines de scale-ups en SaaS B2B. Nice Côte d'Azur est un laboratoire grandeur nature du smart city avec des déploiements IoT cloud (capteurs de mobilité, gestion des parkings, éclairage intelligent). La French Tech Nice Côte d'Azur génère des startups cloud-native en healthtech, fintech, et tourismtech.",
      sectors: [
        "SaaS global (SAP SuccessFactors, Amadeus — plateformes cloud worldwide)",
        "Smart city cloud (Nice Métropole — IoT Azure, données urbaines, mobilité)",
        "Finance cloud (Monaco, banques privées — Temenos cloud, DORA)",
        "Tourisme cloud (Airbnb méditerranée, hôtels luxe — réservation SaaS, PCI DSS)",
        "Santé cloud (CHU Nice Pasteur, startups healthtech — HDS, IA médicale)",
        "Défense cloud (MBDA Sophia, DGA — cloud souverain SecNumCloud)",
        "Startups SaaS (French Tech Nice, IFD, Sophia Incubateur — AWS/GCP)",
        "Collectivités (CANCA, CD06 — cloud souverain, portail citoyen)",
      ],
      neighborhoods: [
        "Nice – Arenas – Grand Arénas (06000/06200)",
        "Sophia Antipolis – Valbonne – Les Templiers (06560)",
        "Antibes – Juan-les-Pins – Villeneuve-Loubet (06600)",
        "Cannes – Mougins (06400/06250)",
        "Grasse – Opio (06130)",
        "Cagnes-sur-Mer – Saint-Laurent-du-Var (06800/06700)",
        "Menton – Beausoleil (06500/06240)",
        "Carros (06510)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Alpes-Maritimes (06) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 06 : Nice Métropole Côte d'Azur, Sophia Antipolis, Pays Grassois, Pays de l'Azur. Nos spécialistes cloud connaissent les architectures cloud des entreprises tech de Sophia Antipolis et les problématiques de conformité des acteurs financiers proches de Monaco. CERT cloud 24/7.",
        },
        {
          q: "SAP (Sophia Antipolis) héberge ses SaaS sur AWS et Azure : quelles bonnes pratiques de sécurité pour un éditeur SaaS B2B ?",
          a: "Un éditeur SaaS B2B de la taille de SAP doit implémenter : une architecture multi-tenant sécurisée (isolation des données entre clients), des tests de pénétration réguliers (trimestriels pour les fonctions critiques), un programme de bug bounty, la conformité SOC 2 Type II (standard pour les clients américains) et ISO 27001 (standard européen), et une réponse aux incidents avec SLA de notification (72h pour RGPD). Pour les startups SaaS B2B de Sophia Antipolis qui veulent vendre à des grands comptes, CyberSecure propose un parcours de certification SOC 2 ou ISO 27001 en 6-12 mois.",
        },
        {
          q: "Amadeus héberge ses données de réservation aérienne sur le cloud : comment est-ce sécurisé ?",
          a: "Amadeus utilise une architecture cloud hybride (datacenters propriétaires à Erding/Allemagne + AWS) pour ses plateformes de réservation qui traitent des millions de transactions par jour. La sécurité repose sur : redondance géographique (RPO < 15 min), chiffrement de bout en bout des transactions (TLS 1.3 minimum), authentification forte pour les APIs compagnies aériennes (OAuth 2.0, API keys rotatives), et conformité PCI DSS niveau 1 pour les paiements. Les partenaires qui s'intègrent à Amadeus via les APIs New Distribution Capability (NDC) doivent aussi respecter ces standards. CyberSecure audite les intégrations Amadeus.",
        },
        {
          q: "Nice Côte d'Azur smart city utilise des milliers de capteurs IoT cloud : comment les sécuriser ?",
          a: "Nice Métropole a déployé 10 000+ capteurs IoT (caméras intelligentes, capteurs de pollution, compteurs intelligents) connectés à une plateforme de données cloud (Azure). La sécurité IoT cloud passe par : provisioning sécurisé des appareils (certificats X.509 uniques par device), segmentation réseau IoT (VLAN séparés pour les capteurs), chiffrement TLS des flux vers Azure IoT Hub, monitoring des anomalies (Azure Defender for IoT), et mise à jour régulière du firmware des appareils. CyberSecure audite les déploiements smart city pour les collectivités.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans les Alpes-Maritimes ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nice Côte d'Azur — diagnostics numériques. Nice Métropole Côte d'Azur — programmes innovation. BPI France PACA — prêts innovation. Sophia Antipolis et la French Tech Nice Côte d'Azur accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAlpesMaritimes;
