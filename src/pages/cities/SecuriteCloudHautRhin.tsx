import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudHautRhin = () => (
  <CityLandingPage
    data={{
      city: "Haut-Rhin",
      citySlug: "haut-rhin",
      region: "Grand Est",
      postalCode: "68",
      intro: "CyberSecure est votre prestataire sécurité cloud Haut-Rhin (68) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Mulhouse, Colmar, Saint-Louis, Wittenheim, Cernay et tout le département.",
      localContext: "Le Haut-Rhin est un département où la proximité de trois pays (France, Allemagne, Suisse) crée des architectures cloud multi-juridictionnelles. Les entreprises alsaciennes utilisent des clouds US (AWS, Azure) mais sont soumises au droit français et européen (RGPD). Celles qui travaillent avec des clients suisses ont des contraintes supplémentaires (nLPD suisse). L'OVHcloud de Strasbourg, accessible depuis Mulhouse en très faible latence, propose des offres souveraines pour les données sensibles. La zone BASF/Novartis de Bâle impose des standards cloud pharma stricts aux sous-traitants alsaciens.",
      sectors: [
        "Industrie cloud (Stellantis Mulhouse — Azure digital twins, OTA software auto)",
        "Chimie cloud (BASF Mulhouse — IIoT cloud, analytics process, ERP SAP)",
        "Pharma cloud (prestataires Basel Area — Azure GxP, Veeva Vault, essais)",
        "Cloud transfrontalier (Saint-Louis — Azure multi-pays FR/CH/DE, RGPD)",
        "Tourisme cloud (Route des Vins, hôtellerie — réservation SaaS, PCI DSS)",
        "Cloud souverain (OVHcloud Strasbourg — faible latence depuis Mulhouse)",
        "PME cloud (M2A, ESN mulhousiennes — Microsoft 365, migration cloud)",
        "Collectivités (M2A, CD68 — Numspot, cloud souverain alsacien)",
      ],
      neighborhoods: [
        "Mulhouse – Bourtzwiller (68100)",
        "Colmar – Horbourg-Wihr (68000/68180)",
        "Saint-Louis (68300)",
        "Wittenheim (68270)",
        "Guebwiller (68500)",
        "Cernay (68700)",
        "Illzach (68110)",
        "Sierentz (68510)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Haut-Rhin (68) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 68 : Mulhouse Alsace Agglomération, Colmar-Agglomération, Saint-Louis, et zones frontalières. Nos spécialistes cloud maîtrisent les architectures cloud multi-pays (France/Suisse/Allemagne) et les offres souveraines OVHcloud accessibles depuis le 68. CERT cloud 24/7.",
        },
        {
          q: "Stellantis Mulhouse utilise Azure pour ses systèmes de production : comment auditer un tenant Azure d'une usine automobile ?",
          a: "Un audit de sécurité du tenant Azure d'une usine Stellantis couvre : conformité au Microsoft Cloud Security Benchmark (MCSB), analyse des permissions RBAC (trop de propriétaires d'abonnement, rôles trop larges), vérification des politiques Azure Defender (Defender for Cloud, Defender for IoT), contrôle des flux réseau (NSG, Azure Firewall, Private Endpoints), audit des logs (Azure Monitor, Log Analytics Workspace), et contrôle de la conformité aux politiques Azure Policy (ex : aucune VM sans chiffrement disque). CyberSecure réalise des audits Azure complets avec rapport de remédiation priorisé.",
        },
        {
          q: "Les entreprises du 68 qui travaillent avec Roche/Novartis en Suisse : AWS Switzerland ou Azure en France ?",
          a: "Pour les données de projets avec Roche et Novartis, deux options se posent : AWS Zurich (eu-central-2) ou Azure Switzerland North pour rester en Suisse et simplifier les flux de données, ou AWS Paris (eu-west-3) / Azure France Centre pour rester en France (RGPD). La décision dépend du type de données (données patients d'essais → rester en UE/France pour RGPD), des exigences du donneur d'ordre suisse (certains imposent la localisation Suisse), et des coûts. En règle générale, pour les données RGPD-sensibles, le cloud France est préférable. CyberSecure conseille sur la stratégie de localisation des données selon les contraintes réglementaires.",
        },
        {
          q: "OVHcloud Strasbourg est à 40km de Mulhouse : quelle solution cloud pour une PME du 68 qui veut garder ses données en France ?",
          a: "OVHcloud Strasbourg (SBG1-SBG5) offre une latence inférieure à 2ms depuis Mulhouse, c'est l'hébergeur cloud le plus proche pour les PME du 68. Pour une PME du Haut-Rhin qui veut garder ses données en France : OVHcloud Public Cloud (IaaS/PaaS) pour les workloads standard, OVHcloud SecNumCloud (qualifié ANSSI) pour les données sensibles (santé, défense, finances), et OVHcloud Hosted Private Cloud pour une isolation totale. CyberSecure audite les configurations OVHcloud des PME et ETI du 68.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Haut-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Sud Alsace Mulhouse — diagnostics numériques. M2A — programmes innovation. BPI France Grand Est — prêts innovation. Alsace Digitale et le réseau Grand E-Nov+ accompagnent les PME. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudHautRhin;
