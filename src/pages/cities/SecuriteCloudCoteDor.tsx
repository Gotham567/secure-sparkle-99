import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCoteDor = () => (
  <CityLandingPage
    data={{
      city: "Côte-d'Or",
      citySlug: "cote-dor",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21",
      intro: "CyberSecure est votre prestataire sécurité cloud Côte-d'Or (21) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Dijon, Beaune, Chenôve, Quetigny, Longvic et tout le département.",
      localContext: "La Côte-d'Or est bien connectée aux datacenters cloud grâce à Dijon, nœud fibré sur l'axe Paris-Lyon. OVHcloud Roubaix est accessible en très faible latence pour les workloads cloud. Dijon Métropole (OnDijon) est une référence nationale en déploiement IoT urbain sur infrastructure cloud. Le CHU Dijon-Bourgogne utilise des architectures HDS pour ses données de santé. Le vitivinicole bourguignon adopte des CRM cloud et plateformes e-commerce. Les PME dijonnaises migrent massivement vers Microsoft 365 et Azure. L'Université de Bourgogne exploite des infrastructures cloud hybrides pour la recherche.",
      sectors: [
        "Cloud santé (CHU Dijon-Bourgogne — HDS cloud, télémédecine, données patients)",
        "Cloud smart city (Dijon Métropole OnDijon — IoT cloud, Azure/AWS, données urbaines)",
        "Cloud vitivinicole (négoces Beaune — CRM cloud, e-commerce, PCI DSS)",
        "Cloud industrie (Urgo Group, Nidec — SAP cloud, ERP, données R&D)",
        "Cloud agroalimentaire (Cargill, IAA 21 — ERP cloud, traçabilité, supply chain)",
        "Cloud logistique (Bolloré Dijon — WMS cloud, TMS, sécurité flux)",
        "Cloud recherche (Université Bourgogne, INRAE — cloud HPC, open data, RGPD)",
        "Cloud souverain (OVH Roubaix, axe Paris-Lyon — faible latence Dijon, SecNumCloud)",
      ],
      neighborhoods: [
        "Dijon – Quetigny (21000/21560)",
        "Chenôve – Marsannay (21300)",
        "Beaune (21200)",
        "Longvic – Chevigny-Saint-Sauveur (21600/21800)",
        "Talant – Fontaine-lès-Dijon (21240)",
        "Auxonne (21130)",
        "Nuits-Saint-Georges (21700)",
        "Montbard (21500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Côte-d'Or (21) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans toute la Côte-d'Or pour la sécurité cloud : Dijon Métropole, Beaune, Côte de Nuits, Auxois. Nos spécialistes cloud accompagnent les ETI dijonnaises, les établissements de santé, et les acteurs vitivinicoles. CERT cloud 24/7.",
        },
        {
          q: "OnDijon est hébergée sur quelle infrastructure cloud — et comment l'auditer ?",
          a: "La plateforme OnDijon (GreenSys/SUEZ) centralise les données IoT de Dijon Métropole sur une architecture cloud hybride (données sur serveurs mutualisés, edge computing sur site). L'audit de sécurité cloud d'OnDijon couvre : la sécurité des flux MQTT/LoRaWAN des capteurs vers le cloud, les accès aux APIs de gestion des feux tricolores et vidéosurveillance (RBAC strict), la conformité RGPD des images de vidéosurveillance (durée conservation 30 jours max), et la résilience (PRA en cas de défaillance cloud — les feux doivent continuer à fonctionner en mode dégradé). CyberSecure audite les architectures cloud des plateformes smart city.",
        },
        {
          q: "Le CHU Dijon-Bourgogne doit héberger ses données de santé en cloud HDS : comment choisir ?",
          a: "La certification HDS (Hébergeur de Données de Santé) est obligatoire pour tout cloud hébergeant des données de santé à caractère personnel. En France, les options certifiées HDS pour un CHU : OVHcloud (SecNumCloud + HDS) pour les workloads sensibles, AWS Healthcare (HDS via contrat HADS), Azure Government/Azure France Central (HDS), et Atos Cloud (HDS souverain). Le CHU Dijon doit également respecter les contraintes PGSSI-S (Politique Générale de Sécurité des Systèmes d'Information de Santé). CyberSecure accompagne les établissements de santé de Bourgogne dans leur stratégie cloud HDS.",
        },
        {
          q: "Les domaines viticoles de la Côte de Nuits (grands crus) vendent en ligne : comment sécuriser leur e-commerce cloud ?",
          a: "Un domaine comme Romanée-Conti ou Domaine Leroy a une boutique en ligne où des bouteilles s'échangent à des milliers d'euros. La sécurité cloud e-commerce vitivinicole : hébergement sur AWS CloudFront + WAF pour protéger contre les bots fraudeurs (bots qui achetent des allocations de vins rares), certification PCI DSS pour les paiements (tokenisation Stripe ou Adyen), protection DDoS (les jours de lancement d'un nouveau millésime, des milliers d'acheteurs se connectent simultanément), et conformité RGPD pour la base de données acheteurs internationaux. CyberSecure audite les boutiques cloud des acteurs premium du vitivinicole.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Côte-d'Or ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Côte-d'Or — diagnostics numériques. Dijon Métropole — programmes innovation PME. BPI France Bourgogne-Franche-Comté — prêts innovation. La Région Bourgogne-Franche-Comté — aides à la numérisation PME, FEDER. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCoteDor;
