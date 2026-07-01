import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CloudSecure accompagne les équipementiers automobiles, industriels de l'Industrie 4.0 et ETI auvergnates de Clermont-Ferrand dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Clermont-Ferrand, sécurité cloud Azure Clermont-Ferrand et DevSecOps Clermont-Ferrand pour la filière automobile connectée et les fournisseurs Michelin. Nos experts en sécurisation infrastructure cloud Clermont-Ferrand protègent les données industrielles critiques de l'écosystème pneumatique et automobile auvergnat.",
      localContext: "Clermont-Ferrand est dominée par Michelin — premier employeur de la région — qui déploie des plateformes cloud IoT massives pour le pneumatique connecté (capteurs embarqués, données usage, télémétrie véhicule) sur AWS et Azure, impliquant des centaines de sous-traitants et fournisseurs dans son écosystème cloud. Les équipementiers automobiles auvergnats (Valeo, Aubert & Duval, Limagrain) migrent leurs ERP et systèmes MES vers le cloud hybride pour optimiser leur chaîne de production et réduire leurs coûts IT. L'industrie 4.0 auvergnate génère des volumes croissants de données de production connectées (OT/IoT) qui convergent vers le cloud, créant des risques de sécurité OT/IT spécifiques que CloudSecure audite avec une expertise industrielle. Les ETI et PME auvergnates du secteur agroalimentaire (Limagrain, Coop de France) adoptent des SaaS cloud pour leur gestion sans toujours en maîtriser les risques.",
      sectors: [
        "Pneumatique connecté et IoT Michelin (AWS, Azure)",
        "Équipementiers automobiles (ERP cloud, MES cloud)",
        "Industrie 4.0 et OT/IoT connecté (cloud hybride ETI)",
        "Agroalimentaire (Limagrain, coopératives cloud)",
        "Santé et thermalisme (HDS cloud, données patients)",
        "PME auvergnates en transformation numérique",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre — sièges et tertiaire",
        "Cournon-d'Auvergne — industrie et logistique",
        "Aubière — université et recherche",
        "Thiers — coutellerie et industrie numérique",
        "Issoire — aéronautique et sous-traitants",
        "Vichy, Riom — PME et thermalisme",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un fournisseur Michelin connecté au cloud IoT à Clermont-Ferrand ?",
          a: "Un audit AWS pour un fournisseur Michelin connecté aux plateformes IoT du groupe (couvrant IAM, gestion des comptes partenaires, API Gateway, IoT Core, S3, CloudTrail et conformité CIS Benchmark) est facturé entre 4 000 et 9 000 euros HT selon la complexité des intégrations cloud. CloudSecure inclut une revue spécifique des accès inter-entreprises (cross-account AWS), souvent le principal vecteur d'attaque dans les chaînes de sous-traitance industrielle. Le rapport identifie les risques de mouvement latéral entre les systèmes fournisseurs et les plateformes Michelin.",
        },
        {
          q: "Comment sécuriser les données industrielles connectées (IoT/OT) sur le cloud pour les équipementiers clermontois ?",
          a: "La sécurisation des données IoT/OT industrielles sur le cloud passe par la segmentation stricte des réseaux OT et IT (zones Purdue, DMZ industrielle), le chiffrement des flux MQTT et OPC-UA vers le cloud (AWS IoT Greengrass, Azure IoT Edge), la gestion des identités des appareils (AWS IoT Device Defender, Azure IoT Hub), et la surveillance des anomalies comportementales en temps réel. CloudSecure réalise des audits OT/cloud Clermont-Ferrand pour les équipementiers automobiles et industriels, avec une expertise sur les architectures industrie 4.0 convergentes.",
        },
        {
          q: "DevSecOps Clermont-Ferrand : accompagnez-vous les startups industrielles auvergnates ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech auvergnates dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, sécurisons les APIs connectant les systèmes industriels au cloud, déployons des outils SAST et SCA et gérons les secrets via HashiCorp Vault ou AWS Secrets Manager. Nous proposons également des formations DevSecOps en présentiel à Clermont-Ferrand pour les équipes ingénierie et les responsables IT industriels.",
        },
        {
          q: "Conformité NIS2 cloud pour les industriels clermontois : quelles obligations spécifiques ?",
          a: "Les industriels clermontois des secteurs de la fabrication critique (automobile, agroalimentaire) dépassant 250 salariés ou 50 M€ de CA sont des entités importantes au sens de NIS2 et soumis à des obligations de sécurité cloud renforcées. CloudSecure réalise un diagnostic NIS2 cloud Clermont-Ferrand pour identifier vos obligations spécifiques et auditer vos mesures actuelles. Les exigences portent notamment sur la sécurité des systèmes OT/cloud convergents, la gestion des accès sous-traitants, la continuité d'activité et la notification des incidents à l'ANSSI sous 72h.",
        },
        {
          q: "CloudSecure intervient-il à Clermont-Ferrand et dans toute l'Auvergne ?",
          a: "CloudSecure intervient à Clermont-Ferrand, Cournon-d'Auvergne, Aubière, Thiers, Issoire et dans toute la région Auvergne (Vichy, Riom, Ambert, Le Puy-en-Velay, Aurillac). Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Clermont-Ferrand pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Clermont-Ferrand. Nous disposons d'une expertise spécifique dans les contextes industriels automobile et agroalimentaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudClermontFerrand;
