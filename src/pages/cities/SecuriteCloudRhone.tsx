import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudRhone = () => (
  <CityLandingPage
    data={{
      city: "Rhône",
      citySlug: "rhone",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69",
      intro: "CyberSecure est votre prestataire sécurité cloud Rhône (69) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Lyon, Villeurbanne, Vénissieux, Bron, Caluire et tout le département.",
      localContext: "Le Rhône est la 2e économie française hors Île-de-France, avec une densité de datacenters et d'entreprises numériques exceptionnelle. Lyon est la première destination datacenter hors Paris (Equinix FR7, SFR Business, Kyndryl, Interxion). La French Tech Lyon regroupe plus de 2 000 startups et scale-ups. L'écosystème biotech lyonnais (BioMérieux, Sanofi, Lyonbiopôle) génère des enjeux de sécurité cloud de données de santé (HDS). Le secteur financier (Crédit Agricole Centre-Est, banques) a des besoins cloud compliance importants. La transformation numérique des industries lyonnaises (chimie, pharmacie, luxe) crée de nouveaux besoins en sécurité cloud hybride.",
      sectors: [
        "Datacenters (Equinix FR7 Lyon, SFR Business, Kyndryl, Interxion Lyon)",
        "Startups SaaS (French Tech Lyon, Axeleo, éditeurs logiciels lyonnais)",
        "Biotech cloud (BioMérieux, Sanofi Marcy, Lyonbiopôle — HDS requis)",
        "Finance cloud (Crédit Agricole, BNP Lyon, fintech lyonnaises)",
        "Santé et e-santé (HCL Lyon, cliniques, éditeurs logiciels santé 69)",
        "Industrie 4.0 (chimie et pharmacie — IoT cloud, PLM cloud)",
        "Luxe et e-commerce (Hermès, boutiques en ligne marques lyonnaises)",
        "Collectivités (Métropole Lyon — cloud souverain, Numspot)",
      ],
      neighborhoods: [
        "Lyon Part-Dieu – 3e – Gerland (69003/69007)",
        "Villeurbanne – Technopôle de la Doua (69100)",
        "Vénissieux – Feyzin – Saint-Fons (69200)",
        "Écully – Dardilly – Limonest (130/69760)",
        "Caluire – Rillieux – Décines (69300)",
        "Bron – Vaulx-en-Velin (69500)",
        "Meyzieu – Jonage (69330)",
        "Givors – Mornant (69700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Rhône (69) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le Rhône pour les audits cloud. Nos spécialistes AWS, Azure et GCP sont basés à Lyon. Nous connaissons l'écosystème des datacenters lyonnais (Equinix, SFR Business, Kyndryl). CERT d'urgence cloud 24/7.",
        },
        {
          q: "Equinix FR7 à Lyon : comment les entreprises hébergées là-bas sécurisent-elles leur cloud ?",
          a: "Equinix FR7 (Lyon) est un datacenter de colocation Tier III+ où de nombreuses entreprises rhônalpines hébergent leurs serveurs ou se connectent aux hyperscalers via Direct Connect (AWS) ou ExpressRoute (Azure). La sécurité de l'hébergement colocalisé implique : segmentation des baies (cage dédiée), chiffrement des liens WAN, sécurité des accès physiques (contrôle d'accès biométrique), et supervision des flux réseau. CyberSecure audite ces architectures.",
        },
        {
          q: "Les éditeurs SaaS lyonnais : comment obtenir la certification ISO 27001 ?",
          a: "ISO 27001 est le standard international de référence pour les SMSI. Pour un éditeur SaaS lyonnais, le processus comprend : gap analysis (2-4 semaines), implémentation des 93 contrôles (6-12 mois), audit interne, audit de certification par un organisme accrédité (BSI, Bureau Veritas, LRQA). CyberSecure accompagne les éditeurs lyonnais de la mise en conformité à la certification, avec une attention particulière sur les environnements cloud AWS/Azure/GCP.",
        },
        {
          q: "BioMérieux doit-il utiliser un cloud souverain pour ses données de santé ?",
          a: "BioMérieux (diagnostic in vitro) traite des données de santé qui peuvent nécessiter la certification HDS (Hébergement de Données de Santé). Pour les données HDS, l'hébergeur doit être certifié HDS (AWS Healthcare, Azure Healthcare APIs, OVHcloud HDS, Outscale HDS). Le choix entre cloud souverain et hyperscaler dépend de la classification des données. CyberSecure accompagne les entreprises biotech dans leur stratégie cloud souveraine vs. hyperscaler.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Lyon Métropole — diagnostics numériques. Métropole de Lyon — programmes innovation. BPI France AuRA — prêts innovation cloud. Axeleo et Lyonbiopôle proposent des ressources pour leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudRhone;
