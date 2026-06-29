import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudIlleEtVilaine = () => (
  <CityLandingPage
    data={{
      city: "Ille-et-Vilaine",
      citySlug: "ille-et-vilaine",
      region: "Bretagne",
      postalCode: "35",
      intro: "CyberSecure est votre prestataire sécurité cloud Ille-et-Vilaine (35) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Rennes, Cesson-Sévigné, Saint-Malo, Fougères, Vitré et tout le département.",
      localContext: "L'Ille-et-Vilaine est le département breton le plus peuplé, avec Rennes comme capitale régionale dynamique. Rennes Atalante est l'un des premiers campus cyber de France : Thales, Orange Cyberdefense, Sopra Steria, et des dizaines de startups cybersécurité y sont implantés. Le Campus Cyber Bretagne (inauguré à Rennes en 2024) fédère les acteurs cyber régionaux autour de la recherche, de la formation et de l'opérationnel. L'Université de Rennes et l'INRIA Rennes Bretagne-Atlantique génèrent une recherche avancée en sécurité des systèmes. La ville est aussi un hub d'entreprises numériques (SFR Business, Capgemini, Atos) qui ont massivement adopté les architectures cloud hybrides.",
      sectors: [
        "Cybersécurité cloud (Thales, Orange Cyberdefense, Sopra Steria — Campus Cyber Bretagne)",
        "Télécoms cloud (SFR Business Rennes, Orange — infrastructure cloud telco)",
        "Défense cloud (DGA Maîtrise de l'Information, Airbus CyberSecurity — cloud souverain)",
        "Startups SaaS (Rennes French Tech, Besoindagilité, Kereval — cloud-native)",
        "Automobile cloud (PSA/Stellantis La Janais — PLM cloud, IoT manufacturing)",
        "Agroalimentaire cloud (Lactalis, Triballat Noyal — ERP cloud, supply chain)",
        "Santé cloud (CHU Rennes, CHGR — HDS, e-santé bretonne)",
        "Collectivités (Rennes Métropole — cloud souverain, Numspot)",
      ],
      neighborhoods: [
        "Rennes – Atalante – Beaulieu (35000)",
        "Cesson-Sévigné – Via Silva (35510)",
        "Saint-Malo – Paramé (35400)",
        "Fougères – Vitré (35300/35500)",
        "Bruz – Chavagne (35170)",
        "Saint-Grégoire – La Chapelle-Saint-Aubin (35760)",
        "Montfort-sur-Meu – Bédée (35160)",
        "Redon – Pipriac (35600)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Ille-et-Vilaine (35) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le département d'Ille-et-Vilaine : Rennes Métropole, Saint-Malo Agglomération, Fougères Agglomération, Vitré Communauté, Pays de Redon. Nos spécialistes cloud sont intégrés dans l'écosystème du Campus Cyber Bretagne à Rennes. Nous sommes particulièrement présents dans les filières cybersécurité, défense et télécoms. CERT cloud 24/7.",
        },
        {
          q: "Le Campus Cyber Bretagne à Rennes : comment en bénéficier pour sécuriser votre cloud ?",
          a: "Le Campus Cyber Bretagne est une infrastructure unique rassemblant des opérateurs (Thales, Orange Cyberdefense), des institutionnels (ANSSI, DGA) et des startups. Les entreprises bretonnes peuvent bénéficier de ses ressources : exercices de crise cyber, formations certifiantes, partage de renseignement sur les menaces (CTI). CyberSecure est connecté à cet écosystème et intègre les dernières menaces locales dans ses audits cloud AWS, Azure et GCP.",
        },
        {
          q: "Stellantis (ex-PSA) à La Janais peut-il utiliser le cloud pour ses outils de conception automobile ?",
          a: "Les constructeurs automobiles utilisent des clouds industriels pour leur PLM (Product Lifecycle Management), leurs simulations CAO/CAE (CATIA, Siemens NX sur cloud), et leur manufacturing execution system (MES). Ces architectures cloud doivent respecter la confidentialité des données de conception (IP protection), les exigences TISAX (Trusted Information Security Assessment Exchange) pour les fournisseurs automobiles, et les normes IEC 62443 pour les OT. CyberSecure accompagne les industriels bretons dans leurs audits cloud TISAX.",
        },
        {
          q: "Comment les entreprises de défense de Rennes (DGA, Airbus) sécurisent-elles leurs données cloud ?",
          a: "Les entreprises de la défense traitant des données sensibles (IGC/CD, CONFIDENTIEL DÉFENSE, DIFFUSION RESTREINTE) ne peuvent pas utiliser les clouds hyperscalers standard pour ces données. Elles utilisent des solutions qualifiées ANSSI : clouds souverains SecNumCloud (OVHcloud, Cloud Temple), solutions air-gappées pour les plus sensibles. Pour les données non classifiées, AWS GovCloud ou Azure Government avec chiffrement BYOK peuvent être envisagés. CyberSecure connaît les contraintes réglementaires des industriels de défense.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Ille-et-Vilaine ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Ille-et-Vilaine — diagnostics numériques. Rennes Métropole — programmes innovation numérique. BPI France Bretagne — prêts innovation. Le Campus Cyber Bretagne propose des ressources et formations pour ses membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudIlleEtVilaine;
