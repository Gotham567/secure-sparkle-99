import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudQuimper = () => (
  <CityLandingPage
    data={{
      city: "Quimper",
      citySlug: "quimper",
      region: "Bretagne",
      postalCode: "29000",
      intro: "CloudSecure accompagne les conserveries bretonne, coopératives de pêche et PME finistériennes de Quimper dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Quimper, sécurité cloud Azure Quimper et conformité NIS2 cloud Quimper pour l'agroalimentaire maritime et les PME de Cornouaille. Nos experts en sécurisation infrastructure cloud Quimper protègent les données des conserveries aux acteurs du tourisme breton.",
      localContext: "Quimper est le principal pôle économique de Cornouaille avec un tissu agroalimentaire fort centré sur la conserverie (conserves de thon, sardines, légumes — Petit Navire, Bonduelle, Coreff), la pêche industrielle et les coopératives bretonnes qui migrent leurs ERP et systèmes de traçabilité vers le cloud. Les coopératives de pêche quimpéroises (Brittany Ferries partenaires, criées connectées) développent des plateformes IoT cloud pour la traçabilité des produits de la mer — données de chaîne du froid, certifications MSC — sur AWS. Le tourisme breton de Cornouaille (Pointe du Raz, Bénodet, Festival de Cornouaille) génère des plateformes numériques de réservation et d'information avec des données visiteurs à protéger. Les PME quimpéroises dans les services, le BTP et la distribution numérisent progressivement leurs outils de gestion.",
      sectors: [
        "Conserveries et agroalimentaire maritime (ERP cloud, traçabilité MSC)",
        "Pêche et criées connectées (IoT cloud, chaîne du froid, AWS)",
        "Coopératives agricoles bretonnes (ERP cloud Azure, certification AB)",
        "Tourisme breton Cornouaille (booking cloud, données visiteurs)",
        "PME quimpéroises (SaaS cloud, Microsoft 365, RGPD)",
        "Santé et CH (HDS cloud, données patients Finistère Sud)",
      ],
      neighborhoods: [
        "Quimper Centre et Locmaria — sièges et services",
        "Ergué-Gabéric — industrie et agroalimentaire",
        "Cuzon et Ty Sanquer — zones d'entreprises",
        "Douarnenez — pêche et conserveries",
        "Concarneau — pêche industrielle et tourisme",
        "Pont-l'Abbé et Quimperlé — PME finistériennes sud",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une conserverie agroalimentaire marine à Quimper ?",
          a: "Un audit AWS pour une conserverie quimpéroise (couvrant IAM, S3 hébergeant les données de traçabilité produits, RDS des systèmes ERP, API partenaires GMS et certifications MSC, conformité CIS Benchmark et protection des données commerciales) est facturé entre 3 500 et 7 000 euros HT selon la taille de l'entreprise et le nombre de systèmes cloud. CloudSecure inclut une revue spécifique des accès partenaires (certifications, importateurs, grandes surfaces) et de la sécurité des données de traçabilité chaîne du froid sur cloud. Livraison du rapport sous 5 jours.",
        },
        {
          q: "Comment sécuriser une plateforme IoT de traçabilité de la pêche sur le cloud en Bretagne ?",
          a: "La sécurisation d'une plateforme IoT de traçabilité de la pêche bretonne (couvrant les capteurs de température des viviers et cuves, les données de débarquement à la criée, les certifications MSC/ASC et les intégrations EDI avec les acheteurs) nécessite : l'authentification des dispositifs IoT (certificats X.509, AWS IoT Device Defender), le chiffrement des flux de données en temps réel (MQTT over TLS), la protection des données agronomiques et commerciales propriétaires, et la conformité RGPD pour les données des pêcheurs. CloudSecure réalise des audits IoT cloud Quimper pour les acteurs de la filière pêche.",
        },
        {
          q: "DevSecOps Quimper : accompagnez-vous les PME tech de Cornouaille ?",
          a: "Oui, CloudSecure accompagne les PME tech et startups quimpéroises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube) et SCA (Snyk), gérons les secrets via AWS Secrets Manager ou HashiCorp Vault, et formons les équipes aux pratiques secure by design. Pour les PME à ressources limitées, nous proposons des missions de RSSI cloud externalisé Quimper à temps partiel.",
        },
        {
          q: "Conformité NIS2 cloud pour les acteurs agroalimentaires et de la pêche à Quimper ?",
          a: "Les acteurs agroalimentaires et de la pêche quimpérois dépassant 50 salariés ou 10 M€ de CA dans les secteurs de la production alimentaire ou de la distribution tombent potentiellement dans le champ de NIS2. CloudSecure réalise un diagnostic NIS2 cloud Quimper pour qualifier votre statut et les obligations applicables. Les enjeux portent sur la continuité des plateformes de traçabilité (interruption = blocage des certifications), la sécurité des APIs EDI avec les GMS, et la protection des données de qualité et de certification contre les attaques concurrentes.",
        },
        {
          q: "CloudSecure intervient-il à Quimper et dans le Finistère Sud ?",
          a: "CloudSecure intervient à Quimper, Douarnenez, Concarneau, Quimperlé et dans tout le Finistère Sud. Nous couvrons également le reste de la Bretagne (Brest, Lorient, Vannes, Rennes). Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Quimper pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Quimper. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudQuimper;
