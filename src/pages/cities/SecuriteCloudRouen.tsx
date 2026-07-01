import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CloudSecure accompagne les industriels chimiques, opérateurs portuaires et ETI normandes de Rouen dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Rouen, sécurité cloud Azure Rouen et pentest cloud Rouen entreprise pour l'industrie chimique connectée et la logistique portuaire numérique. Nos experts en sécurisation infrastructure cloud Rouen protègent les systèmes SCADA connectés au cloud et les plateformes logistiques du Port de Rouen.",
      localContext: "Rouen abrite l'une des plus importantes zones industrielles chimiques de France (Lubrizol, TotalEnergies, Bostik) dont les systèmes SCADA et OT se connectent progressivement au cloud pour la maintenance prédictive et la supervision à distance — une convergence OT/IT qui crée des risques de sécurité critiques que CloudSecure audite avec une expertise industrielle spécialisée. Le Port de Rouen, quatrième port fluvio-maritime français, numérise ses systèmes de gestion portuaire (TOS, EDI) sur des architectures cloud hybride avec des exigences NIS2 spécifiques aux opérateurs d'importance vitale. L'agroalimentaire normand (Danone, Nestlé, brasseries) déploie des ERP cloud et des plateformes de traçabilité alimentaire sur AWS et Azure. Le CHU Charles Nicolle de Rouen, qui a subi une cyberattaque majeure en 2019, a renforcé ses exigences de sécurité cloud HDS.",
      sectors: [
        "Industrie chimique et pétrochimique (SCADA connecté, cloud OT)",
        "Logistique portuaire et transport (TOS cloud, EDI sécurisé)",
        "Agroalimentaire normand (ERP cloud, traçabilité alimentaire)",
        "Santé et CHU (HDS cloud, après cyberattaque 2019)",
        "Automobile et équipementiers (cloud hybride ETI)",
        "ETI industrielles Seine-Maritime (cloud hybride, ERP SaaS)",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite — sièges et services",
        "Grand-Couronne et Petit-Couronne — zone pétrochimique",
        "Saint-Étienne-du-Rouvray — industrie et technopôle",
        "Le Havre et zone portuaire — logistique maritime",
        "Elbeuf, Louviers — PME industrielles et textile",
        "Mont-Saint-Aignan — université et ESN",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un industriel chimique connecté au cloud à Rouen ?",
          a: "Un audit cloud pour un industriel chimique rouennais connectant ses systèmes OT au cloud (AWS IoT, Azure IoT Hub, supervision SCADA distante) est facturé entre 7 000 et 15 000 euros HT selon la complexité de l'architecture OT/IT et le nombre de systèmes connectés. CloudSecure inclut une revue spécifique de la segmentation OT/IT (zones Purdue, DMZ industrielle), des protocoles de communication sécurisés (OPC-UA over TLS, MQTT sécurisé) et de la surveillance des anomalies comportementales sur les flux OT. Le rapport identifie les risques de sabotage à distance et les vecteurs d'attaque sur les procédés industriels.",
        },
        {
          q: "Comment sécuriser les systèmes de gestion portuaire du Port de Rouen sur le cloud ?",
          a: "Les systèmes TOS (Terminal Operating System) et EDI du Port de Rouen migrant vers le cloud sont des infrastructures critiques soumises à NIS2 et aux exigences des opérateurs d'importance vitale (OIV). CloudSecure accompagne les opérateurs portuaires dans la sécurisation de ces systèmes : architecture cloud résiliente (multi-AZ, PRA testé), chiffrement des communications avec les partenaires (armateurs, transitaires), contrôle d'accès strict avec journalisation, et conformité NIS2 cloud Rouen incluant la notification des incidents à l'ANSSI sous 24h.",
        },
        {
          q: "DevSecOps Rouen : accompagnez-vous les ETI industrielles normandes ?",
          a: "Oui, CloudSecure accompagne les ETI industrielles normandes dans la mise en place d'une démarche DevSecOps adaptée à leurs contextes OT et cloud à partir de 700 euros par jour. Nous sécurisons les pipelines CI/CD des équipes IT internes, intégrons des outils SAST et SCA pour les développements d'applications industrielles, et accompagnons la sécurisation des architectures cloud hybride. Nous proposons également des missions de RSSI cloud externalisé Rouen pour les ETI sans RSSI dédié.",
        },
        {
          q: "Hébergement données de santé HDS pour le CHU de Rouen après la cyberattaque de 2019 ?",
          a: "Après la cyberattaque de 2019 qui a mis hors ligne des milliers d'équipements du CHU de Rouen, les exigences de sécurité cloud HDS ont été considérablement renforcées. CloudSecure accompagne le CHU et les établissements de santé normands dans la mise en conformité HDS cloud : hébergeur certifié HDS, chiffrement des données patients, cloisonnement des environnements, détection des intrusions en temps réel, plan de réponse aux incidents testé et formation continue des équipes DSI hospitalières. Notre approche intègre les retours d'expérience post-incident des hôpitaux cyberattaqués.",
        },
        {
          q: "CloudSecure intervient-il à Rouen et dans toute la Normandie ?",
          a: "CloudSecure intervient à Rouen, Grand-Couronne, Saint-Étienne-du-Rouvray, Le Havre et dans toute la région Normandie incluant Caen, Cherbourg, Évreux, Alençon et Dieppe. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Rouen pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Rouen. Nous disposons d'une expertise spécifique sur les contextes industriels OT/IT qui nous différencie des cabinets de cybersécurité généralistes.",
        },
      ],
    }}
  />
);

export default SecuriteCloudRouen;
