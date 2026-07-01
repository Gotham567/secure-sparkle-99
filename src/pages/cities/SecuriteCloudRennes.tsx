import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CloudSecure accompagne les opérateurs télécoms, acteurs de la cyberdéfense, coopératives agroalimentaires et startups SaaS de Rennes dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Rennes, RSSI cloud externalisé Rennes et conformité NIS2 cloud Rennes pour les entreprises bretonnes au cœur des enjeux de souveraineté numérique. Nos experts en sécurisation infrastructure cloud Rennes protègent les données sensibles des télécoms aux industries de défense bretonne.",
      localContext: "Rennes est le premier pôle numérique de l'Ouest de la France, avec Orange Labs qui y concentre une partie majeure de sa R&D cloud et télécoms — un acteur soumis aux obligations NIS2 secteur télécoms et ARCEP les plus exigeantes. La présence de la DGA, de Naval Group et du ministère des Armées à Rennes crée une demande forte en cloud souverain (SecNumCloud) et en protection contre le cyberespionnage d'État, domaine de prédilection de CloudSecure. La Bretagne agroalimentaire (coopératives laitières, charcuterie, pêche) migre ses ERP et plateformes de traçabilité vers le cloud avec des enjeux de continuité d'activité critiques. Les startups SaaS bretonnes du campus numérique de Rennes développent des applications cloud-native pour les marchés agricoles, maritimes et industriels régionaux.",
      sectors: [
        "Télécoms cloud (Orange Labs, Bouygues Telecom)",
        "Cyberdéfense et défense nationale (DGA, Naval Group)",
        "Agroalimentaire breton (ERP cloud, traçabilité SaaS)",
        "SaaS agricole et maritime cloud-native",
        "Santé et HDS (CHU de Rennes, cliniques bretonnes)",
        "Collectivités bretonnes (cloud public souverain)",
      ],
      neighborhoods: [
        "Cesson-Sévigné — technopôle et Orange Labs",
        "Rennes Centre et Quartier Latin — ESN et startups",
        "Villejean — CHU et santé numérique",
        "Saint-Grégoire et Betton — parcs d'entreprises",
        "Bruz — défense et aérospatial",
        "Saint-Malo, Vitré — PME bretonnes et industrie",
      ],
      faq: [
        {
          q: "Combien coûte un audit GCP ou AWS pour une startup SaaS agricole rennaise ?",
          a: "Un audit AWS ou GCP pour une startup SaaS agricole rennaise (IAM, S3 ou Cloud Storage, API Gateway, Cloud Run ou Lambda, conformité CIS et RGPD données agricoles) est facturé entre 3 500 et 7 000 euros HT selon le périmètre. CloudSecure inclut une revue spécifique de la sécurité des API IoT connectant les capteurs agricoles au cloud — un vecteur d'attaque souvent négligé dans les plateformes agritech bretonnes. Livraison du rapport sous 5 jours.",
        },
        {
          q: "Comment sécuriser les infrastructures cloud des entreprises de défense à Rennes avec un cloud souverain ?",
          a: "Les entreprises de défense rennaises travaillant avec la DGA ou Naval Group sur des données sensibles doivent recourir à des solutions de cloud souverain qualifiées SecNumCloud par l'ANSSI — OVHcloud Trusted Zone, Outscale (BSO) ou NumSpot. CloudSecure accompagne ces entreprises dans la sélection du cloud souverain adapté à leur niveau de classification, la configuration des contrôles d'accès, la mise en conformité avec les politiques de sécurité ANSSI et la rédaction des dossiers de sécurité. Pour les données non classifiées, une stratégie de chiffrement souverain sur AWS Paris peut être suffisante.",
        },
        {
          q: "DevSecOps Rennes : accompagnez-vous les startups du campus numérique breton ?",
          a: "Oui, CloudSecure accompagne les startups rennaises et bretonnes dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD GitHub Actions ou GitLab CI, déployons des outils SAST (Semgrep, SonarQube), SCA (Snyk), scan d'images Docker et sécurisation Kubernetes (EKS, GKE). Nous proposons également des formations DevSecOps en présentiel à Rennes ou en distanciel pour les équipes bretonnes.",
        },
        {
          q: "Quelles obligations NIS2 cloud pour les opérateurs télécoms rennais comme Orange ?",
          a: "Les opérateurs de communications électroniques (Orange, Bouygues) sont des entités essentielles au sens de NIS2 et soumis aux obligations les plus strictes : gestion des risques cyber, notification des incidents sous 24h à l'ANSSI, sécurité de la supply chain fournisseurs cloud, tests de pénétration réguliers et conformité aux mesures techniques de l'ARCEP. CloudSecure accompagne les opérateurs télécoms rennais et leurs sous-traitants dans leur mise en conformité NIS2 cloud, avec une expertise spécifique sur les architectures réseau cloud et la sécurité des infrastructures télécoms exposées au cloud.",
        },
        {
          q: "CloudSecure intervient-il à Rennes et dans toute la Bretagne ?",
          a: "CloudSecure intervient à Rennes, Cesson-Sévigné, Bruz, Saint-Grégoire et dans toute la région Bretagne incluant Brest, Lorient, Quimper, Vannes, Saint-Malo et Saint-Brieuc. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des déplacements sur site à Rennes et en Bretagne pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Rennes. Nous disposons d'une expertise spécifique en cloud souverain et cyberdéfense adaptée au contexte régional.",
        },
      ],
    }}
  />
);

export default SecuriteCloudRennes;
