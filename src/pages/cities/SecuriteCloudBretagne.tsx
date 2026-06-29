import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBretagne = () => (
  <CityLandingPage
    data={{
      city: "Bretagne",
      citySlug: "bretagne",
      region: "Bretagne",
      postalCode: "22 / 29 / 35 / 56",
      intro: "CyberSecure est votre prestataire sécurité cloud Bretagne : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Rennes, Brest, Quimper, Lorient, Vannes et toute la région.",
      localContext: "La Bretagne est une région pionnière du numérique en France, notamment grâce à Rennes qui abrite l'un des plus importants pôles cybersécurité d'Europe : Rennes Atalante Cyber, le campus Cyber Bretagne (CCI, CNRS, Université de Rennes), et des acteurs majeurs comme Thales, Orange Cyberdefense, et Amossys. Le secteur naval et défense (Naval Group Lorient, DCNS Brest, DGA à Lorient et Brest) génère d'importants besoins en sécurité des systèmes d'information. La filière agroalimentaire bretonne (Lactalis, Bigard, Entremont) est l'une des plus importantes de France. L'économie maritime (ports de Brest et Lorient, énergies marines renouvelables) est en plein développement.",
      sectors: [
        "Cybersécurité et défense (Thales Rennes, Orange Cyberdefense, Naval Group Lorient)",
        "Naval et militaire (Naval Group Brest, DCNS, DGA Lorient, port militaire Brest)",
        "Agroalimentaire (Lactalis, Bigard, Entremont, coopératives bretonnes)",
        "Numérique et tech (Rennes Atalante, campus Cyber Bretagne, startups rennaises)",
        "Télécommunications (Orange, SFR Business Bretagne, réseaux fibres)",
        "Énergie marine (EMR, parc éolien offshore Bretagne, houle)",
        "Santé (CHU Rennes, CHU Brest, centres hospitaliers 29/56)",
        "Collectivités (Rennes Métropole, Brest Métropole, Région Bretagne)",
      ],
      neighborhoods: [
        "Rennes Métropole – Cesson-Sévigné – Bruz (35)",
        "Brest Métropole – Guipavas – Plouzané (29)",
        "Quimper Bretagne Occidentale – Concarneau (29)",
        "Lorient Agglomération – Lanester (56)",
        "Vannes Agglomération – Auray (56)",
        "Saint-Brieuc Armor Agglomération (22)",
        "Saint-Malo Agglomération (35)",
        "Lannion-Trégor Communauté (22)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 4 départements bretons ?",
          a: "Oui, CyberSecure intervient dans les quatre départements : Côtes-d'Armor (22), Finistère (29), Ille-et-Vilaine (35) et Morbihan (56). Nos spécialistes cloud se déplacent sur site dans toute la Bretagne. En tant que région pionnière de la cybersécurité en France, CyberSecure connaît l'écosystème breton. CERT d'urgence 24/7.",
        },
        {
          q: "Naval Group à Brest et Lorient utilise-t-il des clouds privés sécurisés ?",
          a: "Naval Group (construction navale de défense) utilise des infrastructures cloud privées et hybrides avec des exigences de sécurité de défense nationale (IGC/A, RGS, NIS2 défense). La supply chain de Naval Group doit répondre à des exigences élevées. CyberSecure propose des audits de sécurité cloud adaptés aux contraintes de la défense et aux exigences de confidentialité de type Diffusion Restreinte (DR).",
        },
        {
          q: "Le campus Cyber Bretagne à Rennes : quels services cloud pour les startups cybersécurité ?",
          a: "Le campus Cyber Bretagne (Rennes Atalante) regroupe des acteurs publics et privés de la cybersécurité. Les startups bretonnes spécialisées en cyber (SaaS de détection, plateformes SOC cloud-native) ont besoin d'architectures cloud sécurisées dès le départ : conformité SOC 2 Type II, ISO 27001, architecture Zero Trust sur AWS/Azure, gestion des secrets (HashiCorp Vault, AWS Secrets Manager). CyberSecure propose un accompagnement dédié aux startups cyber.",
        },
        {
          q: "Les coopératives agroalimentaires bretonnes ont-elles des besoins cloud spécifiques ?",
          a: "Oui. Les grandes coopératives bretonnes (Lactalis, Bigard, Laïta, Even) migrent progressivement leurs ERP et systèmes logistiques vers le cloud (SAP S/4HANA Cloud, Microsoft Azure). Ces migrations créent des enjeux de sécurité : protection des données de production, sécurisation des API OT/IT, conformité NIS2 secteur alimentation. CyberSecure propose des audits de sécurité cloud pour les transitions ERP des industriels agroalimentaires.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Bretagne ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Bretagne via ses fonds FEDER et le programme Bretagne Numérique. Les CCI bretonnes (CCI Bretagne, CCI Rennes, CCI Brest). BPI France Bretagne — prêts innovation numériques. Rennes Atalante accompagne ses membres avec des diagnostics co-financés. Les clusters agroalimentaires (Valorial, Végépolys Val de Loire) proposent aussi des accompagnements.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBretagne;
