import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudYvelines = () => (
  <CityLandingPage
    data={{
      city: "Yvelines",
      citySlug: "yvelines",
      region: "Île-de-France",
      postalCode: "78",
      intro: "CyberSecure est votre prestataire sécurité cloud Yvelines (78) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Versailles, Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Mantes-la-Jolie, Rambouillet et tout le département.",
      localContext: "Les Yvelines abritent certaines des architectures cloud les plus complexes de France. Dassault Systèmes (Vélizy) héberge sa plateforme 3DExperience SaaS sur cloud hybride (datacenters propriétaires + AWS). Thales a une division Cyber qui accompagne des centaines d'entreprises dans leur sécurité cloud. Renault Group utilise massivement Azure pour sa transformation digitale (Renault Technocentre Guyancourt). Toyota Europe déploie des applications cloud pour ses opérations européennes. La proximité avec Paris et Paris-Saclay génère un tissu de startups et de grandes entreprises tech qui adoptent le cloud comme first choice.",
      sectors: [
        "PLM cloud (Dassault Systèmes — 3DExperience SaaS, sécurité multi-tenant)",
        "Défense cloud (Thales Cyber — cloud souverain SecNumCloud, PASSI)",
        "Automobile cloud (Renault Guyancourt — Azure digital twins, OTA software)",
        "Tech cloud (DXC Vélizy, Oracle, Cap Gemini — managed cloud services)",
        "Santé cloud (André-Mignot, cliniques 78 — HDS, imagerie, télémédecine)",
        "Recherche cloud (UVSQ, Paris-Saclay — HPC cloud, données recherche)",
        "Startups cloud (SQY, Paris-Saclay écosystème — cloud-native B2B SaaS)",
        "Collectivités (CASQY, CD78 — cloud souverain, Numspot IDF)",
      ],
      neighborhoods: [
        "Vélizy-Villacoublay (78140)",
        "Versailles – Le Chesnay (78000/78150)",
        "Guyancourt – Élancourt (78280/78990)",
        "Mantes-la-Jolie (78200)",
        "Rambouillet (78120)",
        "Poissy (78300)",
        "Saint-Germain-en-Laye (78100)",
        "Sartrouville (78500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Yvelines (78) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 78 : SQY Communauté, Versailles Grand Parc, Mantes en Yvelines, Grand Paris Seine et Oise. Nos spécialistes cloud ont une expertise dans les architectures cloud des grands groupes industriels de Vélizy et les besoins cloud des collectivités yvelinoises. CERT cloud 24/7.",
        },
        {
          q: "Dassault Systèmes héberge 3DExperience sur cloud hybride : comment auditer la sécurité d'une plateforme PLM multi-tenant ?",
          a: "3DExperience SaaS (ENOVIA, CATIA, SIMULIA cloud) est hébergé sur une infrastructure cloud hybride avec des datacenters DS et des services AWS. Un audit de sécurité d'une plateforme SaaS multi-tenant couvre : isolation des données entre tenants (vérification par test que les données client A ne sont pas accessibles depuis le tenant client B), gestion des API keys et des tokens d'authentification (OAuth 2.0, expiration, révocation), logs d'audit des accès administrateurs DS aux données clients, et procédures de réponse aux incidents (SLA de notification DS en cas de breach). CyberSecure accompagne les clients de Dassault Systèmes dans l'évaluation de leur configuration 3DExperience.",
        },
        {
          q: "Renault Group (Guyancourt) utilise Azure pour ses véhicules connectés : comment sécuriser les données de télématique automobile ?",
          a: "Les véhicules Renault connectés transmettent des données de télématique (position GPS, consommation, données de conduite) vers des plateformes Azure (Azure IoT Hub, Azure Digital Twins). La sécurisation de ces flux : anonymisation des données de position avant stockage (conformité RGPD — les données GPS liées à un véhicule identifié sont des données personnelles), chiffrement TLS des communications véhicule-cloud, gestion des consentements conducteurs pour la collecte de données (RGPD article 6), et sécurité des OTA (Over-The-Air) updates pour éviter la compromission du logiciel embarqué. CyberSecure audite les architectures cloud automotive.",
        },
        {
          q: "Thales Group a une division cybersécurité basée à Vélizy : comment travaille-t-il avec des partenaires cloud ?",
          a: "Thales Cyber (ex-Thales e-Security, ex-Gemalto) propose des solutions de chiffrement cloud (Luna HSM, CipherTrust Manager) compatibles avec AWS, Azure, et GCP. Pour ses propres opérations, Thales utilise des clouds hybrides avec des offres souveraines pour ses données les plus sensibles. Thales est accrédité PASSI (Prestataire d'Audit de Sécurité des Systèmes d'Information) qualifié ANSSI, ce qui lui permet d'auditer les systèmes d'information des OIV et des entités essentielles. CyberSecure travaille avec les équipes de Thales sur des projets nécessitant une expertise cloud complémentaire.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans les Yvelines ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Versailles-Yvelines — diagnostics numériques. CASQY et CD78 — programmes innovation. BPI France Île-de-France — prêts innovation. Paris-Saclay et Systematic Paris-Region accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudYvelines;
