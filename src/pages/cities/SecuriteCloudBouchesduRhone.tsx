import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBouchesduRhone = () => (
  <CityLandingPage
    data={{
      city: "Bouches-du-Rhône",
      citySlug: "bouches-du-rhone",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13",
      intro: "CyberSecure est votre prestataire sécurité cloud Bouches-du-Rhône (13) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Marseille, Aix-en-Provence, Vitrolles, Aubagne, Martigues et tout le département.",
      localContext: "Les Bouches-du-Rhône est connecté au monde entier grâce à ses câbles sous-marins (SEACOM, PEACE, EllaLink, SMW5) qui atterrissent à Marseille, faisant de la ville l'un des plus grands hubs de connectivité mondiale. CMA CGM (siège à Marseille, 3e armateur mondial) a massivement investi dans le cloud et la transformation numérique après la cyberattaque de 2020. La Technopole de l'Arbois accueille des entreprises high-tech à fort usage cloud. Marseille est également un hub français pour l'intelligence artificielle (Centrale Méditerranée, startups IA).",
      sectors: [
        "Maritime cloud (CMA CGM, MSC, armateurs — plateformes cloud logistique, Track & Trace)",
        "Pétrochimie cloud (TotalEnergies — IIoT cloud, maintenance prédictive industrielle)",
        "High-tech cloud (Technopole Arbois, Sophia Antipolis — SaaS, cloud-native)",
        "Santé cloud (AP-HM, IPC — HDS cloud, télémédecine, oncologie)",
        "Connectivité (câbles sous-marins Marseille — datacenters, peering cloud)",
        "Tourisme cloud (Aéroport Marseille-Provence, hôtellerie — réservation cloud)",
        "IA et données (Centrale Méditerranée, startups IA — GPU cloud, données entraînement)",
        "Collectivités (Métropole AMP, CD13 — cloud souverain, Numspot)",
      ],
      neighborhoods: [
        "Marseille – La Joliette – Euroméditerranée (13001/13002)",
        "Aix-en-Provence – Technopole Arbois (13100)",
        "Vitrolles – Marignane – Aéroport (13127)",
        "Martigues – Fos-sur-Mer (13500)",
        "Aubagne – La Ciotat (13400/13600)",
        "Salon-de-Provence (13300)",
        "Arles (13200)",
        "Gardanne – Gréasque (13120/13850)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Bouches-du-Rhône (13) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 13 : Métropole Aix-Marseille-Provence, Pays d'Arles, Pays de Martigues, et Pays Salonais. Nos spécialistes cloud connaissent les architectures cloud des entreprises maritimes et industrielles marseillaises. CERT cloud 24/7.",
        },
        {
          q: "Marseille est un nœud de câbles sous-marins (SEACOM, PEACE) : quels enjeux cloud pour les datacenters locaux ?",
          a: "Les points d'atterrissement des câbles sous-marins à Marseille (CMA CGM Campus, Interxion/Digital Realty MRS) font de la ville un hub cloud de premier plan. Les datacenters Marseillais offrent des latences ultra-faibles vers l'Afrique, l'Asie, et le Moyen-Orient, ce qui les rend attractifs pour des workloads régionaux. Sur le plan sécurité, ces infrastructures sont des cibles potentielles pour des attaques étatiques visant à intercepter le trafic intercontinental. Les entreprises qui colocalisent dans ces datacenters bénéficient de certifications ISO 27001 et Tier III. CyberSecure audite les configurations cloud colocalisées.",
        },
        {
          q: "CMA CGM a subi une cyberattaque ransomware en 2020 : comment ont-ils sécurisé leur cloud depuis ?",
          a: "Après l'attaque Ragnar Locker (octobre 2020) qui a paralysé leurs systèmes de réservation pendant plusieurs jours, CMA CGM a massivement investi dans sa transformation cyber. Leurs mesures cloud : migration progressive vers un cloud hybride sécurisé (Azure avec contrôles renforcés), Zero Trust Network Access (ZTNA) pour les accès distants, EDR Crowdstrike sur l'ensemble du parc, Security Operations Center (SOC) interne renforcé, et exercices de crise cyber annuels. CyberSecure accompagne les acteurs maritimes dans leur sécurisation cloud post-incident.",
        },
        {
          q: "TotalEnergies Lavera : peut-on utiliser le cloud public pour les données OT d'une raffinerie ?",
          a: "Pour les données OT critiques d'une raffinerie (données des DCS, des SIS — Safety Instrumented Systems), le cloud public n'est pas adapté en raison des latences réseau et des risques de cybersécurité. Cependant, des workloads de la couche 4-5 du modèle Purdue peuvent migrer vers le cloud : analytics de production (données capteurs agrégées), maintenance prédictive (IA sur données historiques), et gestion des pièces de rechange (ERP cloud). Ces workloads utilisent AWS IoT Greengrass ou Azure IoT Edge pour une connectivité OT-cloud sécurisée. CyberSecure audite ces architectures hybrides OT/cloud.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans les Bouches-du-Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Marseille-Provence — diagnostics numériques. Métropole Aix-Marseille-Provence — programmes numériques. BPI France PACA — prêts innovation. French Tech Aix-Marseille accompagne ses startups. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBouchesduRhone;
