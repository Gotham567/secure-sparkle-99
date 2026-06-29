import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudVar = () => (
  <CityLandingPage
    data={{
      city: "Var",
      citySlug: "var",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83",
      intro: "CyberSecure est votre prestataire sécurité cloud Var (83) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Toulon, La Seyne-sur-Mer, Hyères, Fréjus, Brignoles et tout le département.",
      localContext: "Le Var est un département en transition numérique rapide. Toulon Provence Méditerranée développe une politique smart city avec des déploiements de capteurs IoT et des plateformes de données urbaines cloud. Le secteur naval de défense (Naval Group Toulon) adopte progressivement des outils cloud pour ses processus non classifiés (PLM cloud, gestion des configurations). Le secteur touristique (Saint-Tropez, Porquerolles) utilise des plateformes cloud de réservation et de gestion (Property Management Systems cloud). Les PME varoises (industrie, santé, tertiaire) migrent massivement vers le cloud après la crise COVID.",
      sectors: [
        "Défense cloud (Naval Group — PLM cloud non classifié, gestion des configurations)",
        "Smart city cloud (Toulon Provence Méditerranée — IoT, données mobilité, Azure)",
        "Tourisme cloud (marinas Saint-Tropez, hôtels Var — PMS cloud, PCI DSS)",
        "Santé cloud (Hôpital Sainte-Musse, cliniques — HDS cloud, télémédecine)",
        "PME cloud (secteur services, tertiaire varois — Microsoft 365, AWS SaaS)",
        "Agri et vin cloud (vignobles Bandol, Côtes de Provence — ERP cloud, e-commerce)",
        "Logistique cloud (port Toulon, fret — TMS cloud, douane numérique)",
        "Collectivités (TPM, CD83 — cloud souverain, Numspot)",
      ],
      neighborhoods: [
        "Toulon – La Seyne – Le Pradet (83000/83500)",
        "Hyères – Carqueiranne (83400)",
        "La Garde – La Valette (83130)",
        "Fréjus – Saint-Raphaël (83600/83700)",
        "Brignoles – Saint-Maximin (83170)",
        "Draguignan (83300)",
        "Six-Fours – Sanary (83140/83110)",
        "Ollioules (83190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Var (83) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le Var : Toulon Provence Méditerranée, Dracénie, Saint-Tropez et les zones côtières. Nos spécialistes cloud ont une expertise dans les architectures cloud des acteurs de la défense, du tourisme de luxe, et des collectivités varoises. CERT cloud 24/7.",
        },
        {
          q: "Naval Group Toulon utilise-t-il le cloud pour ses processus non classifiés ?",
          a: "Naval Group utilise des plateformes cloud pour ses processus corporatifs non classifiés (RH, finance, formation, communication interne) via des offres Microsoft 365 et Azure configurées selon les exigences de sécurité du groupe. Pour les processus de conception et d'ingénierie sensibles (non classifiés mais confidentiels), des clouds privés ou des offres qualifiées SecNumCloud (OVHcloud) peuvent être utilisés. Les données classifiées restent sur des systèmes homologués hors cloud public. CyberSecure audite les configurations cloud de Naval Group pour les périmètres non classifiés.",
        },
        {
          q: "Les Property Management Systems (PMS) cloud des hôtels de luxe varois : quelles certifications de sécurité requis ?",
          a: "Les PMS cloud (Opera Cloud d'Oracle, Mews, Cloudbeds) gèrent les réservations, les paiements, et les données personnelles des clients des hôtels de luxe du Var. Ces systèmes doivent être conformes à : PCI DSS pour les paiements par carte (obligatoire dès 1 transaction/mois), RGPD pour les données clients (registre des traitements, durées de conservation), et aux standards de sécurité des chaînes hôtelières (Marriott, Accor, IHG ont leurs propres exigences pour les franchisés). CyberSecure audite les PMS cloud et accompagne les hôtels dans leur conformité PCI DSS et RGPD.",
        },
        {
          q: "Les vignobles de Bandol et de Côtes de Provence : comment digitaliser la vente directe (DTC) en sécurisant les données clients ?",
          a: "La filière viticole varoise développe massivement la vente en ligne directe (DTC — Direct to Consumer). Les plateformes e-commerce utilisées (Shopify, WooCommerce, Winecrush) traitent des données clients RGPD et des paiements PCI DSS. La sécurisation passe par : SSL/TLS sur le site e-commerce, intégration des paiements via une passerelle certifiée PCI DSS (Stripe, Mollie), politique de conservation des données clients documentée, et protection contre le vol de données de carte (content security policy, prévention des attaquant JS skimmers). CyberSecure propose des audits de sécurité pour les caves coopératives et domaines viticoles en ligne.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Var ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Var — diagnostics numériques. Toulon Provence Méditerranée — programmes numériques. BPI France PACA — prêts innovation. Toulon Var Technologies accompagne les PME innovantes. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudVar;
