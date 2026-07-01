import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLaRochelle = () => (
  <CityLandingPage
    data={{
      city: "La Rochelle",
      citySlug: "la-rochelle",
      region: "Nouvelle-Aquitaine",
      postalCode: "17000",
      intro: "CloudSecure accompagne les opérateurs portuaires, producteurs d'énergies renouvelables et acteurs du tourisme numérique de La Rochelle dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS La Rochelle, sécurité cloud Azure La Rochelle et DevSecOps La Rochelle pour les startups cleantech et les opérateurs d'énergie verte charentais. Nos experts en sécurisation infrastructure cloud La Rochelle protègent les données des plateformes éolien/solaire aux systèmes de booking touristique atlantique.",
      localContext: "La Rochelle est pionnière dans les énergies renouvelables avec des fermes éoliennes offshore et solaires dont les données de production (puissance, rendement, maintenance prédictive) sont collectées en temps réel sur des plateformes cloud AWS IoT et Azure IoT Hub — des architectures OT/cloud nécessitant une sécurisation spécialisée. Le Port de La Rochelle (premier port de France pour les importations céréalières) numérise ses systèmes de gestion portuaire avec des plateformes cloud et des APIs EDI à sécuriser. Le tourisme numérique rochelais (Aquarium, Vieux Port, Île de Ré) génère des plateformes de réservation en ligne avec des données bancaires et personnelles à protéger. L'Université de La Rochelle, pôle de recherche en sciences marines et environnement, héberge des données de recherche sur cloud avec des enjeux de propriété intellectuelle.",
      sectors: [
        "Énergie renouvelable (éolien/solaire offshore — data cloud AWS IoT)",
        "Logistique portuaire (Port de La Rochelle — EDI cloud, TOS)",
        "Tourisme numérique atlantique (booking cloud, PCI DSS)",
        "Recherche marine et environnement (HPC cloud, données scientifiques)",
        "Agroalimentaire et pêche (traçabilité cloud, ERP)",
        "PME charentaises en transformation numérique (SaaS cloud)",
      ],
      neighborhoods: [
        "La Rochelle Centre et Vieux Port — tourisme et services",
        "Chef de Baie — port et industrie navale",
        "Périgny — technopôle Atlantech et startups",
        "Lagord et Puilboreau — zones d'entreprises",
        "Rochefort — industries navales et aéronautique",
        "Saintes et Cognac — PME et agroalimentaire charentais",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un opérateur d'énergie renouvelable à La Rochelle ?",
          a: "Un audit AWS pour un opérateur d'énergie renouvelable rochelais (couvrant AWS IoT Core pour les données de production éolien/solaire, S3, Lambda, API Gateway, conformité CIS Benchmark et résilience des systèmes de supervision en temps réel) est facturé entre 5 000 et 11 000 euros HT selon la taille du parc et le nombre de dispositifs IoT connectés. CloudSecure inclut une revue spécifique de l'authentification des turbines et panneaux IoT, de la sécurité des données de production temps réel et de la résilience des systèmes SCADA connectés au cloud. Livraison sous 7 jours.",
        },
        {
          q: "Comment sécuriser les données de recherche marine de l'Université de La Rochelle sur le cloud ?",
          a: "Les données de recherche marine de l'Université de La Rochelle hébergées sur cloud (AWS, GCP pour les simulations HPC, données de surveillance côtière) nécessitent : une architecture de comptes isolés par projet de recherche, le chiffrement des datasets scientifiques sensibles (données bathymétriques, modèles océaniques), un contrôle d'accès strict pour les collaborateurs internationaux, et la conformité RGPD pour les données personnelles associées à certaines études (enquêtes pêcheurs, données sociologiques maritimes). CloudSecure accompagne les établissements de recherche dans la définition de leur politique de données cloud.",
        },
        {
          q: "DevSecOps La Rochelle : accompagnez-vous les startups cleantech du technopôle Atlantech ?",
          a: "Oui, CloudSecure accompagne les startups cleantech du technopôle Atlantech de La Rochelle dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD des applications IoT et énergie, sécurisons les APIs de collecte de données de production, déployons des outils SAST (Semgrep) et SCA (Snyk), et formons les équipes aux pratiques secure by design pour les plateformes cloud critiques de l'énergie renouvelable.",
        },
        {
          q: "Conformité NIS2 cloud pour les opérateurs d'énergie renouvelable de La Rochelle ?",
          a: "Les opérateurs d'énergie renouvelable rochelais (exploitants de parcs éoliens offshore et solaires) sont des entités essentielles au sens de NIS2 dans le secteur de l'énergie, soumis aux obligations les plus strictes de sécurité des systèmes d'information. CloudSecure accompagne ces opérateurs dans l'audit NIS2 cloud La Rochelle, en articulant les exigences NIS2 avec les obligations sectorielles spécifiques à l'énergie (arrêté Systèmes d'Information d'Importance Vitale, décret IIV). Nous réalisons également les tests de résilience imposés par NIS2 sur les infrastructures cloud critiques.",
        },
        {
          q: "CloudSecure intervient-il à La Rochelle et en Charente-Maritime ?",
          a: "CloudSecure intervient à La Rochelle, Périgny, Lagord, Puilboreau, Rochefort et dans toute la Charente-Maritime incluant Saintes, Cognac, Royan et Saint-Jean-d'Angély. Nous couvrons également l'ensemble de la Nouvelle-Aquitaine. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à La Rochelle pour les ateliers de restitution, formations DevSecOps et missions de RSSI cloud externalisé La Rochelle. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLaRochelle;
