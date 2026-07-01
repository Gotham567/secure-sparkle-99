import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPoitiers = () => (
  <CityLandingPage
    data={{
      city: "Poitiers",
      citySlug: "poitiers",
      region: "Nouvelle-Aquitaine",
      postalCode: "86000",
      intro: "CloudSecure accompagne les PME numériques, agriculteurs connectés, établissements de santé et universités de Poitiers dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Poitiers, sécurité cloud Azure Poitiers et conformité NIS2 cloud Poitiers pour les entreprises de la Vienne en transformation numérique. Nos experts en sécurisation infrastructure cloud Poitiers protègent les données agricoles, universitaires et sanitaires de l'agglomération du Grand Poitiers.",
      localContext: "Poitiers est une ville universitaire et de recherche avec l'Université de Poitiers et l'ENSMA qui génèrent des données de recherche hébergées sur cloud (Microsoft 365, AWS, GCP) avec des enjeux de RGPD pour les données étudiantes et de protection de la propriété intellectuelle pour la recherche. L'agriculture numérique viennoise développe des plateformes cloud IoT pour la gestion des exploitations céréalières et viticoles (vignoble de Haut-Poitou) avec des données agronomiques propriétaires à protéger. Les PME poitevines dans le numérique, les services et la santé adoptent progressivement des SaaS cloud pour leur gestion, sans expertise interne suffisante en sécurité cloud. Le Centre Hospitalier Universitaire de Poitiers est engagé dans une modernisation de son SI sur cloud avec des exigences HDS.",
      sectors: [
        "Enseignement supérieur et recherche (cloud éducatif, Microsoft 365)",
        "Agriculture numérique et viticulture (IoT cloud, traçabilité AOC)",
        "PME numérique et services (SaaS cloud, ERP)",
        "Santé et CHU (HDS cloud, données patients Vienne)",
        "Automobile et sous-traitants (cloud hybride, données production)",
        "Collectivités Grand Poitiers (cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Poitiers Centre et République — sièges et services",
        "Futuroscope et Chasseneuil — technopôle et numérique",
        "Buxerolles et Croutelle — parcs d'entreprises",
        "Saint-Benoît — industrie et PME",
        "Châtellerault — équipementiers automobile et PME",
        "Niort et La Rochelle — PME Nouvelle-Aquitaine",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud pour une startup numérique du Futuroscope à Poitiers ?",
          a: "Un audit cloud pour une startup numérique du technopôle du Futuroscope (couvrant IAM, S3, API Gateway, Lambda, conformité CIS Benchmark et protection des données clients) est facturé entre 3 000 et 6 000 euros HT selon la taille de l'environnement cloud et le nombre d'applications exposées. CloudSecure inclut une revue des accès aux API partenaires du Futuroscope et de la sécurité des applications de réalité virtuelle et augmentée hébergées sur cloud. Livraison du rapport sous 5 jours avec plan de remédiation priorisé.",
        },
        {
          q: "Comment sécuriser les données agricoles et viticoles sur le cloud dans la Vienne ?",
          a: "La sécurisation des données agricoles et viticoles viennoises sur le cloud couvre : la protection des données agronomiques propriétaires (variétés, rendements, pratiques culturales) contre l'espionnage concurrentiel, la sécurité des capteurs IoT de terrain (authentification X.509, chiffrement MQTT), et la conformité RGPD pour les données des coopératives agricoles partenaires. CloudSecure réalise des audits sécurité cloud agritech Poitiers pour les exploitations et coopératives viennoises, avec une expertise sur les plateformes AWS IoT et Azure IoT Hub.",
        },
        {
          q: "DevSecOps Poitiers : accompagnez-vous les équipes IT des PME viennoises ?",
          a: "Oui, CloudSecure accompagne les PME tech et startups poitevines dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube), gérons les secrets (HashiCorp Vault, AWS Secrets Manager) et formons les équipes aux pratiques secure by design. Pour les PME à ressources limitées, nous proposons des missions de RSSI cloud externalisé Poitiers à temps partiel pour un suivi continu de la sécurité.",
        },
        {
          q: "Conformité NIS2 cloud pour l'Université de Poitiers et les établissements d'enseignement supérieur ?",
          a: "Les établissements d'enseignement supérieur et de recherche comme l'Université de Poitiers peuvent être classifiés comme entités importantes au sens de NIS2 pour leur rôle dans la recherche et l'éducation. Les enjeux spécifiques portent sur la protection des données de recherche (propriété intellectuelle, données personnelles des sujets d'étude), la sécurité des environnements cloud d'enseignement (Microsoft 365 Education, Moodle cloud) et la conformité RGPD pour les données des étudiants. CloudSecure réalise des audits NIS2 cloud Poitiers adaptés au secteur éducatif public.",
        },
        {
          q: "CloudSecure intervient-il à Poitiers et dans la région ?",
          a: "CloudSecure intervient à Poitiers, Futuroscope, Châtellerault, Buxerolles et dans toute la Vienne et la région Nouvelle-Aquitaine incluant Niort, La Rochelle, Limoges, Périgueux et Angoulême. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Poitiers et au Futuroscope pour les ateliers de restitution, formations DevSecOps et missions de RSSI cloud externalisé Poitiers. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPoitiers;
