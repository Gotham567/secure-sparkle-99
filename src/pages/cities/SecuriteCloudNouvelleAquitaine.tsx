import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNouvelleAquitaine = () => (
  <CityLandingPage
    data={{
      city: "Nouvelle-Aquitaine",
      citySlug: "nouvelle-aquitaine",
      region: "Nouvelle-Aquitaine",
      postalCode: "16 / 17 / 19 / 23 / 24 / 33 / 40 / 47 / 64 / 79 / 86 / 87",
      intro: "CyberSecure est votre prestataire sécurité cloud Nouvelle-Aquitaine : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Bordeaux, Pau, Bayonne, Limoges, Poitiers, La Rochelle et toute la région.",
      localContext: "La Nouvelle-Aquitaine est la plus grande région française, avec une économie diversifiée et une scène numérique en forte croissance. Bordeaux est le hub régional avec une French Tech dynamique (French Tech Bordeaux, Station B) et des entreprises tech en forte croissance. La région accueille aussi Thales et Dassault Aviation (Mérignac), des industries chimiques (Lacq), et un tissu viticole et agroalimentaire exceptionnel. Limoges a une tradition de céramique et d'électronique embarquée. Le Pays Basque (Bayonne, Biarritz) attire des talents numériques et des startups dans un écosystème transfrontalier avec l'Espagne. Les datacenters régionaux (Celeste, Interxion Bordeaux) hébergent de nombreuses PME aquitaines.",
      sectors: [
        "Aéronautique et défense (Dassault Mérignac, Thales, Safran et sous-traitants)",
        "Chimie et énergie (BASF Lacq, Total Energies Pau, industrie pétrolière 64)",
        "Viticulture et spiritueux (Bordeaux, Cognac, Armagnac — cloud ERP viticole)",
        "Numérique et tech (French Tech Bordeaux, startups aquitaines, Pays Basque tech)",
        "Agroalimentaire (Landes, Périgord, filières AOC et productions régionales)",
        "Santé (CHU Bordeaux, Pellegrin, e-santé Nouvelle-Aquitaine)",
        "Logistique (entrepôts A63, plateforme de Bordeaux, hubs 47)",
        "Collectivités (Bordeaux Métropole, Région Nouvelle-Aquitaine)",
      ],
      neighborhoods: [
        "Bordeaux Métropole – Mérignac – Pessac (33)",
        "Pau – Lacq – Lourdes (64)",
        "Bayonne – Anglet – Biarritz (64)",
        "Limoges Métropole (87)",
        "Poitiers – Niort (86/79)",
        "La Rochelle – Saintes – Rochefort (17)",
        "Périgueux – Bergerac (24)",
        "Agen – Marmande (47)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 12 départements de Nouvelle-Aquitaine ?",
          a: "Oui, CyberSecure intervient dans les douze départements de Nouvelle-Aquitaine : Charente (16), Charente-Maritime (17), Corrèze (19), Creuse (23), Dordogne (24), Gironde (33), Landes (40), Lot-et-Garonne (47), Pyrénées-Atlantiques (64), Deux-Sèvres (79), Vienne (86) et Haute-Vienne (87). Nos spécialistes cloud se déplacent partout dans la région. CERT d'urgence 24/7.",
        },
        {
          q: "Les startups bordelaises utilisent AWS ou Azure — laquelle est plus sécurisée ?",
          a: "AWS et Azure offrent des niveaux de sécurité équivalents selon les cas d'usage. AWS est souvent préféré par les startups tech pour sa richesse de services (GuardDuty, Security Hub, WAF, Inspector). Azure est préféré par les entreprises avec des environnements Microsoft 365. GCP excelle pour les workloads data et ML. CyberSecure évalue votre stack existant et audite votre posture de sécurité cloud indépendamment du fournisseur. Nous sommes neutres vis-à-vis des CSP.",
        },
        {
          q: "Dassault Aviation et ses sous-traitants peuvent-ils utiliser le cloud public ?",
          a: "Pour les données techniques sensibles (plans, CAO), Dassault et ses sous-traitants utilisent des clouds souverains (Bleu, SecNumCloud) ou des environnements on-premise. Pour les données business non classifiées, des clouds hyperscalers avec chiffrement BYOK (Bring Your Own Key) peuvent être utilisés. CyberSecure accompagne les industriels de la défense dans la définition de leur politique cloud : segmentation données souveraines vs. business, chiffrement bout-en-bout, et homologation RGS.",
        },
        {
          q: "Comment sécuriser un ERP viticole (SAP, Vinifera) dans le cloud ?",
          a: "Les châteaux et négociants bordelais migrent leurs ERP viticoles vers le cloud (SAP S/4HANA Cloud, Vinifera, MEZA). Ces migrations exposent des données critiques : données clients/acheteurs internationaux (RGPD), stocks de millésimes à haute valeur, données de traçabilité. CyberSecure audite les configurations cloud des ERP viticoles, les accès API, le chiffrement des données, et la sécurisation des connexions avec les partenaires logistiques et douaniers.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Nouvelle-Aquitaine ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Nouvelle-Aquitaine via ses fonds FEDER et le programme Digital New Aquitaine. Les CCI régionales (CCI Bordeaux Gironde, CCI Pau-Béarn, CCI de la Corrèze). BPI France Nouvelle-Aquitaine — prêts innovation. La Cyber Digital Academy de Bordeaux et Aerospace Valley accompagnent aussi leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNouvelleAquitaine;
