import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudGironde = () => (
  <CityLandingPage
    data={{
      city: "Gironde",
      citySlug: "gironde",
      region: "Nouvelle-Aquitaine",
      postalCode: "33",
      intro: "CyberSecure est votre prestataire sécurité cloud Gironde (33) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Bordeaux, Mérignac, Pessac, Libourne et tout le département.",
      localContext: "La Gironde est un département dynamique avec une scène tech en pleine croissance. French Tech Bordeaux est l'un des écosystèmes les plus actifs hors Paris, avec des startups SaaS en amorçage et en scale-up. L'aéronautique (Dassault, Thales) migre vers des architectures cloud hybrides pour ses outils de conception et de gestion. Les châteaux bordelais développent des plateformes DTC cloud pour vendre directement à l'international. Le cluster Mérignac Cyber regroupe des acteurs de la cybersécurité locale. Les datacenters régionaux (Celeste Bordeaux, Interxion) hébergent de nombreuses entreprises girondines.",
      sectors: [
        "Startups tech et SaaS (French Tech Bordeaux, Station B — architectures cloud AWS/Azure/GCP)",
        "Aéronautique cloud (Dassault Mérignac — PLM cloud, outils de conception sécurisés)",
        "Viticulture DTC (bordeaux.com, boutiques cloud, e-commerce international)",
        "Santé cloud (CHU Bordeaux, cliniques — hébergement HDS, e-santé)",
        "Cybersécurité (Mérignac Cyber — acteurs cloud sécurité)",
        "Finance et assurance (cabinets bordelais — cloud compliance)",
        "Logistique cloud (WMS, ERP cloud, axe A63)",
        "Collectivités (Bordeaux Métropole — cloud souverain public)",
      ],
      neighborhoods: [
        "Bordeaux – Mérignac – Pessac (33000/33700)",
        "Mérignac Cyber – Zone aéroportuaire",
        "Libourne – Saint-Émilion (33500)",
        "Arcachon – Bassin (33120)",
        "Langon – Sud-Gironde (33210)",
        "Bordeaux Nord – Lormont – Floirac (33310)",
        "Saint-Médard-en-Jalles – Mérignac Nord (33160)",
        "Blaye – Nord-Gironde (33390)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la Gironde (33) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le département de la Gironde pour les audits cloud AWS, Azure et GCP. Nos spécialistes cloud se déplacent sur site dans l'agglomération bordelaise et dans tout le 33. Présence dans l'écosystème Mérignac Cyber. CERT d'urgence cloud 24/7.",
        },
        {
          q: "Les startups bordelaises (French Tech) ont-elles besoin d'une certification cloud pour lever des fonds ?",
          a: "Oui. Les investisseurs et fonds de VC (KIMA, Partech, BPI) demandent de plus en plus des preuves de maturité sécurité avant les tours de table. Un rapport d'audit cloud, une conformité RGPD documentée, et une roadmap ISO 27001 ou SOC 2 sont des prérequis pour les séries A et B. CyberSecure propose des packages levée de fonds adaptés aux startups bordelaises.",
        },
        {
          q: "Comment sécuriser une boutique en ligne de vins bordelais sur Shopify ou WooCommerce ?",
          a: "Les boutiques DTC des châteaux bordelais (Shopify, WooCommerce, Magento) traitent des données clients internationaux (RGPD, CCPA) et des paiements (PCI DSS). CyberSecure audite ces plateformes : configuration WAF (Cloudflare, Sucuri), politique de cookies conforme CNIL, sécurité du back-office Shopify, intégration des passerelles de paiement (Stripe, PayPal), et gestion des bases de données clients.",
        },
        {
          q: "Les aéronauticiens girondins peuvent-ils utiliser AWS ou Azure pour leurs outils de CAO ?",
          a: "Pour les données de conception non classifiées, AWS et Azure sont utilisables avec les bonnes configurations (chiffrement BYOK, Private Link, résidence des données en Europe). Pour les données sensibles liées aux marchés de défense (DGA), il faut des solutions souveraines (OVHcloud SecNumCloud, Outscale). CyberSecure aide les entreprises aéronautiques à définir leur stratégie cloud selon la sensibilité de leurs données.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Gironde ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Bordeaux Gironde — diagnostics numériques. BPI France Nouvelle-Aquitaine — prêts innovation. Bordeaux Métropole — programmes startups numériques. La Cyber Digital Academy de Bordeaux propose des formations et accompagnements.",
        },
      ],
    }}
  />
);

export default SecuriteCloudGironde;
