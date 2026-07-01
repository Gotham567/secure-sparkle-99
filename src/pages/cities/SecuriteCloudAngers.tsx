import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAngers = () => (
  <CityLandingPage
    data={{
      city: "Angers",
      citySlug: "angers",
      region: "Pays de la Loire",
      postalCode: "49000",
      intro: "CloudSecure accompagne les acteurs du végétal connecté (Végépolys), e-commerçants, industriels électroniques et startups numériques d'Angers dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Angers, sécurité cloud Azure Angers et DevSecOps Angers pour le pôle de compétitivité végétal et l'écosystème numérique angevin. Nos experts en sécurisation infrastructure cloud Angers protègent les données IoT agricoles, e-commerce et industrielles des entreprises du Maine-et-Loire.",
      localContext: "Angers est la capitale mondiale du végétal avec Végépolys Valley, un pôle de compétitivité qui regroupe des semenciers, horticulteurs et agritech développant des plateformes cloud IoT pour la gestion des serres connectées, la traçabilité des plants et le pilotage des cultures — des architectures AWS et GCP à fort enjeu de propriété intellectuelle. Le secteur e-commerce angevin (Cdiscount logistique, 3Suisses, startups DTC) opère des plateformes cloud à fort trafic nécessitant une architecture sécurisée PCI DSS et RGPD. L'industrie électronique d'Angers (STMicroelectronics Angers, Soitec partenaires) migre vers des environnements cloud hybride avec des données de conception sensibles. Les startups numériques angevines développent des solutions SaaS pour les marchés agricoles et industriels sur AWS et GCP.",
      sectors: [
        "Végétal connecté et agritech (Végépolys, IoT cloud AWS)",
        "E-commerce et logistique (plateformes cloud haute disponibilité)",
        "Électronique et industrie numérique (cloud hybride, données conception)",
        "Santé et CHU (HDS cloud, données patients Maine-et-Loire)",
        "SaaS B2B et startups numériques angevines",
        "Agroalimentaire et vins de Loire (traçabilité cloud, ERP)",
      ],
      neighborhoods: [
        "Angers Centre et Belle-Beille — sièges et ESN",
        "Technopôle d'Angers et Végépolys — agritech et innovation",
        "Saint-Sylvain-d'Anjou — parcs d'entreprises",
        "La Roseraie et les Capucins — e-commerce et logistique",
        "Cholet et Chemillé — PME industrielles et textile",
        "Saumur et Segré — vitivinicole et PME",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une startup agritech angevine de Végépolys ?",
          a: "Un audit AWS pour une startup agritech de Végépolys Angers (couvrant AWS IoT Core, S3, API Gateway, Lambda, conformité CIS Benchmark et protection des données végétales propriétaires) est facturé entre 3 500 et 7 000 euros HT selon la complexité de l'architecture IoT et le nombre d'objets connectés. CloudSecure inclut une revue spécifique de l'authentification des capteurs et passerelles IoT (certificats X.509, flux MQTT sécurisé), ainsi que des contrôles DLP sur les données agronomiques à haute valeur intellectuelle (variétés, protocoles). Livraison sous 5 jours.",
        },
        {
          q: "Comment sécuriser une plateforme e-commerce angevine sur AWS en conformité PCI DSS ?",
          a: "La sécurisation d'une plateforme e-commerce angevine sur AWS passe par la conformité PCI DSS : tokenisation des données bancaires (réduction du périmètre CDE), segmentation stricte des systèmes de paiement (VPC dédié), chiffrement TLS 1.3 de toutes les transactions, scan ASV trimestriel et test d'intrusion annuel sur l'application web. CloudSecure réalise des audits PCI DSS cloud Angers pour les e-commerçants et accompagne la préparation aux audits QSA, avec une expertise sur les architectures serverless et les intégrations de paiement modernes (Stripe, Adyen).",
        },
        {
          q: "DevSecOps Angers : accompagnez-vous les startups numériques angevines ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech angevines dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD (GitHub Actions, GitLab CI), sécurisons les APIs IoT connectant les systèmes végétaux au cloud, déployons des outils SAST (Semgrep) et SCA (Snyk), et formons les équipes ingénierie aux pratiques secure by design. Ateliers DevSecOps disponibles en présentiel à Angers ou au technopôle.",
        },
        {
          q: "Conformité NIS2 cloud pour les acteurs du végétal et de l'agritech angevin ?",
          a: "Les entreprises de Végépolys Valley développant des applications cloud pour la production alimentaire et agricole tombent potentiellement dans le champ de NIS2 pour le secteur alimentaire. CloudSecure réalise un diagnostic NIS2 cloud Angers pour qualifier votre statut et les obligations applicables. Les enjeux pour les agritech angevines portent sur la protection de la propriété intellectuelle végétale (brevets de variétés, protocoles de culture), la sécurité des APIs IoT et la continuité d'activité des plateformes en période de production critique.",
        },
        {
          q: "CloudSecure intervient-il à Angers et dans les Pays de la Loire ?",
          a: "CloudSecure intervient à Angers, Saint-Sylvain-d'Anjou, Cholet, Saumur et dans toute la région Pays de la Loire incluant Nantes, Le Mans, La Roche-sur-Yon et Laval. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Angers pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Angers. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAngers;
