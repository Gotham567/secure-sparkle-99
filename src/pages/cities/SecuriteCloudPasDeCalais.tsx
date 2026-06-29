import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPasDeCalais = () => (
  <CityLandingPage
    data={{
      city: "Pas-de-Calais",
      citySlug: "pas-de-calais",
      region: "Hauts-de-France",
      postalCode: "62",
      intro: "CyberSecure est votre prestataire sécurité cloud Pas-de-Calais (62) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Calais, Arras, Lens, Béthune, Boulogne-sur-Mer et tout le département.",
      localContext: "Le Pas-de-Calais adopte le cloud selon des logiques sectorielles variées. L'agro-industrie (Roquette Frères, McCain) migre ses ERP SAP vers le cloud public (SAP RISE on AWS/Azure) tout en maintenant des OT on-premise. La logistique (hubs Calais-Dover) utilise des WMS cloud (Manhattan Associates, JDA/Blue Yonder) pour la traçabilité en temps réel. Les collectivités (Arras, Lens-Liévin) s'orientent vers les offres cloud souveraines (Numspot, OVHcloud). La proximité avec Lille (OVH datacenter Roubaix) offre une connectivité cloud optimale. Getlink et les ports utilisent des architectures cloud hybrides pour leurs systèmes non-critiques.",
      sectors: [
        "Cloud agro-industrie (Roquette Frères — SAP RISE cloud, analytics process, IoT)",
        "Cloud logistique (hubs Calais-Dover — WMS cloud, traçabilité temps réel, EDI)",
        "Cloud agroalimentaire (McCain, IAA 62 — ERP cloud, MES, conformité IFS)",
        "Cloud portuaire (Boulogne-Calais — SIP cloud, AIS maritime, gestion flux)",
        "Cloud collectivités (Arras, Lens-Liévin — Numspot, cloud souverain, e-services)",
        "Cloud PME artois (Béthune, Saint-Omer — Microsoft 365, Azure, migration cloud)",
        "Cloud reconversion (bassin minier — digitalisation OT, cloud manufacturing)",
        "Cloud souverain (OVH Roubaix/Euralille — faible latence 62, SecNumCloud)",
      ],
      neighborhoods: [
        "Calais – Coquelles (62100/62231)",
        "Arras (62000)",
        "Lens – Liévin (62300/62800)",
        "Béthune – Bruay-la-Buissière (62400)",
        "Boulogne-sur-Mer (62200)",
        "Saint-Omer (62500)",
        "Harnes – Hénin-Beaumont (62440)",
        "Lestrem – Laventie (62136)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Pas-de-Calais (62) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 62 pour la sécurité cloud : Calais, Arras, Lens-Liévin, Béthune, Boulogne-sur-Mer, bassin minier. Nos spécialistes cloud connaissent les architectures hybrides des industriels du 62. CERT cloud 24/7.",
        },
        {
          q: "Roquette Frères migre son ERP vers SAP RISE on Azure : quels risques de sécurité cloud spécifiques ?",
          a: "SAP RISE with Microsoft (S/4HANA sur Azure hébergé par SAP) implique une architecture de sécurité tripartite : Roquette, SAP, et Microsoft. Les risques cloud spécifiques : configuration des périmètres réseau Azure (qui peut accéder au tenant SAP depuis l'OT ?), gestion des identités SAP (profils SAP_ALL, rôles trop larges), sécurité des interfaces IDoc/RFC entre SAP RISE et les systèmes OT on-premise (SCADA, MES), et protection des données de production (formules, rendements — données très sensibles industriellement). CyberSecure audite les configurations SAP RISE et les architectures cloud hybrides des industriels.",
        },
        {
          q: "Les hubs logistiques Calais-Dover utilisent des WMS cloud : comment sécuriser un entrepôt connecté ?",
          a: "Un entrepôt connecté sur Calais (hub e-commerce, transit Royaume-Uni) utilise des WMS cloud (Manhattan Associates, JDA Blue Yonder, ou SAP EWM cloud) avec des terminaux RF, scanners mobile, et convoyeurs automatisés. Les risques cloud logistique : compromission du WMS cloud = arrêt des opérations (les transporteurs ne peuvent plus décharger/charger), vol de données RGPD clients (e-commerçants confient leurs données acheteurs), et attaque supply chain (un fournisseur compromise peut injecter de fausses commandes). La sécurisation passe par : MFA sur tous les accès WMS, chiffrement des communications RF, et audit des connecteurs API avec les systèmes e-commerce clients.",
        },
        {
          q: "Les ports de Calais et Boulogne migrent vers des systèmes d'information portuaire cloud : quelles précautions NIS2 ?",
          a: "Les ports maritimes européens sont couverts par NIS2 (catégorie 'transports maritimes'). La migration d'un Système d'Information Portuaire (SIP) vers le cloud implique des contraintes NIS2 : le CSP (cloud provider) doit être audité sur sa chaîne d'approvisionnement (article 21 NIS2), la localisation des données doit respecter la souveraineté (préférence pour AWS Paris eu-west-3 ou OVHcloud Roubaix), et des procédures de continuité d'activité doivent être documentées. CyberSecure accompagne les ports dans leur conformité NIS2 et la sécurisation de leurs systèmes d'information cloud.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Pas-de-Calais ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Artois et Côte d'Opale — diagnostics numériques. BPI France Hauts-de-France — prêts innovation. La Région Hauts-de-France — Rev3, fonds numérisation PME. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPasDeCalais;
