import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudIsere = () => (
  <CityLandingPage
    data={{
      city: "Isère",
      citySlug: "isere",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38",
      intro: "CyberSecure est votre prestataire sécurité cloud Isère (38) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Grenoble, Meylan, Crolles, Échirolles, Bourgoin-Jallieu et tout le département.",
      localContext: "L'Isère est l'un des départements les plus innovants d'Europe. Grenoble est un pôle mondial de la microélectronique (STMicroelectronics, Soitec) et de la recherche (CEA-Leti). Ces industries de haute technologie sont au premier rang de la transition vers des architectures cloud hybrides pour leurs outils de conception (EDA cloud), leurs systèmes de gestion de la R&D, et leurs plateformes de simulation. Schneider Electric, dont le siège est à Rueil-Malmaison mais avec une forte présence en Isère, est pionnier du cloud industriel. Minalogic rassemble les acteurs du numérique isérois avec de nombreux éditeurs SaaS spécialisés.",
      sectors: [
        "Cloud microélectronique (STMicro, Soitec — EDA cloud, PLM, conception sécurisée)",
        "Recherche cloud (CEA-Leti, Grenoble INP — cloud R&D, données expérimentales)",
        "Énergie cloud (Schneider Electric — EcoStruxure cloud, IoT énergie)",
        "Deeptech cloud (Minalogic, startups quantique, photonique — AWS/GCP)",
        "Santé cloud (CHU Grenoble-Alpes, cliniques — HDS, e-santé alpine)",
        "Tourisme cloud (domaines skiables — billetterie cloud, apps skieurs)",
        "Industrie cloud (chimie, ArianeGroup — OT/IT cloud sécurisé)",
        "Collectivités (Grenoble-Alpes Métropole — cloud souverain public)",
      ],
      neighborhoods: [
        "Grenoble – Presqu'île – Europole (38000)",
        "Meylan – Montbonnot (38240)",
        "Crolles – STMicro (38920)",
        "Échirolles – Évreux (38130)",
        "Bourgoin-Jallieu (38300)",
        "Vienne – Pont-Évêque (38200)",
        "Voiron – Pays Voironnais (38500)",
        "Vizille – Bièvre (38220)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Isère (38) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le département de l'Isère : Grenoble-Alpes Métropole, Bièvre Isère, Pays Voironnais, Viennois. Nos spécialistes cloud sont intégrés dans l'écosystème Minalogic grenoblois. Nous avons une expertise particulière dans les architectures cloud de la microélectronique et de la deeptech. CERT cloud 24/7.",
        },
        {
          q: "Soitec peut-il utiliser le cloud public pour ses processus de conception de wafers SOI ?",
          a: "La conception des wafers SOI (Silicon-On-Insulator) de Soitec implique des données de R&D ultra-sensibles (recettes de fabrication, propriétés des matériaux). Pour ces données, Soitec utilise des environnements air-gapped ou des clouds privés. Pour les workloads moins sensibles (simulation, analytics de production), des configurations AWS/Azure avec BYOK (Bring Your Own Key) et Private Link peuvent être envisagées. CyberSecure aide à définir la stratégie de classification et de placement des données.",
        },
        {
          q: "CEA-Leti utilise-t-il des plateformes cloud collaboratives pour ses projets avec l'industrie ?",
          a: "Oui. Le CEA-Leti utilise des espaces de collaboration cloud (Microsoft Teams, SharePoint, plateformes de simulation cloud) pour ses projets collaboratifs Carnot et ses partenariats industriels (STMicro, Soitec, Schneider Electric). Ces espaces doivent être sécurisés : accès conditionnel (Conditional Access Entra ID), chiffrement des données partagées, gestion des droits d'accès par projet (RBAC), et audit logs. CyberSecure audite ces environnements de collaboration cloud sécurisée.",
        },
        {
          q: "Les domaines skiables isérois (Chamrousse, Alpe d'Huez) peuvent-ils adopter des solutions cloud SaaS pour la billetterie ?",
          a: "Oui, et c'est de plus en plus le cas. Les solutions SaaS de billetterie (Skidata, Axess, TNCO) migrent vers le cloud. Ces plateformes traitent des millions de données clients (RGPD) et des paiements (PCI DSS). CyberSecure audite la configuration cloud de ces plateformes : chiffrement des données au repos, sécurité des API, gestion des sessions, intégration des passerelles de paiement, et politique de rétention des données.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Isère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Grenoble — diagnostics numériques. Grenoble-Alpes Métropole — programmes innovation numérique. BPI France AuRA — prêts innovation. Minalogic accompagne ses membres avec des ressources cybersécurité et des appels à projets. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudIsere;
