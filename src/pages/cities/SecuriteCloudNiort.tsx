import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNiort = () => (
  <CityLandingPage
    data={{
      city: "Niort",
      citySlug: "niort",
      region: "Nouvelle-Aquitaine",
      postalCode: "79000",
      intro: "CloudSecure accompagne les assureurs mutualistes, insurtechs et entreprises assurancielles de Niort dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Niort, sécurité cloud Azure Niort et RSSI cloud externalisé Niort pour les leaders de l'assurance mutualiste française. Nos experts en sécurisation infrastructure cloud Niort maîtrisent les exigences ACPR cloud et DORA pour les acteurs assurantiels de la capitale française de la mutualité.",
      localContext: "Niort est la capitale mondiale de la mutualité et de l'assurance solidaire avec la MAIF, la Matmut, la MACIF et de nombreuses mutuelles qui concentrent des pétaoctets de données assurantielles (sinistres, risques, données personnelles des assurés) sur des infrastructures cloud AWS et Azure nécessitant une sécurité de niveau bancaire. Les insurtechs niortaises développent des produits data et IA assurantiels (tarification dynamique, détection de fraude, assistance connectée) sur GCP et AWS avec des architectures MLOps qui traitent des données personnelles sensibles. La donnée assurantielle niortaise est parmi les données personnelles les plus sensibles du marché : elle combine données de santé, financières, comportementales et patrimoniales soumises au RGPD et aux exigences ACPR. CloudSecure réalise des audits cloud spécifiquement calibrés pour les exigences du secteur assurantiel français.",
      sectors: [
        "Assurance mutualiste et solidaire (MAIF, Matmut, MACIF — AWS/Azure massif)",
        "Insurtechs et data assurantielle (IA tarification, fraude, GCP/AWS)",
        "Services aux assurés (applications mobiles cloud, données personnelles)",
        "Courtage et intermédiation en ligne (SaaS cloud B2B)",
        "Santé et médico-social (HDS cloud, mutuelles santé)",
        "Agroalimentaire et PME Deux-Sèvres (ERP cloud, SaaS)",
      ],
      neighborhoods: [
        "Niort Centre et Molière — sièges MAIF, Matmut, MACIF",
        "ZI de la Gare et Espace Mendès-France — entreprises tech",
        "Chauray et Bessines — parcs d'entreprises et logistique",
        "Saint-Florent et Aiffres — PME deux-sévriennes",
        "Bressuire et Parthenay — industrie et agroalimentaire",
        "Poitiers et La Rochelle — Nouvelle-Aquitaine",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un assureur mutualiste niortais comme la MAIF ou la Matmut ?",
          a: "Un audit AWS pour un assureur mutualiste niortais (couvrant IAM, S3 hébergeant les dossiers sinistres, RDS et DynamoDB des données assurés, Lambda et SageMaker pour les modèles IA assurantiels, conformité CIS Benchmark, exigences ACPR et contrôles DORA) est facturé entre 12 000 et 30 000 euros HT selon la taille de l'environnement AWS et la complexité des workloads. CloudSecure inclut une revue spécifique des modèles IA de tarification et de détection de fraude, des données biométriques et comportementales des assurés, et de la conformité RGPD avancée pour les données assurantielles sensibles.",
        },
        {
          q: "Comment sécuriser les données personnelles assurantielles (sinistres, santé, patrimoine) sur le cloud à Niort ?",
          a: "La sécurisation des données assurantielles sur le cloud nécessite une architecture de protection multicouche : chiffrement des données au repos (AES-256, KMS dédié par catégorie de données), pseudonymisation des datasets pour les traitements analytiques et IA, contrôle d'accès RBAC strict aux dossiers de sinistres avec journalisation complète, DLP actif pour détecter les fuites de données vers l'extérieur, et séparation des environnements de production, test et analytique. Pour les données de santé des assurés mutualistes (remboursements, pathologies), l'hébergeur cloud doit être certifié HDS. CloudSecure accompagne les assureurs niortais dans la définition et l'implémentation de cette architecture.",
        },
        {
          q: "DevSecOps Niort : comment sécuriser les pipelines MLOps des insurtechs assurantielles ?",
          a: "CloudSecure accompagne les insurtechs niortaises dans la mise en place d'un DevSecOps spécialisé MLOps à partir de 700 euros par jour. Nous sécurisons les pipelines d'entraînement des modèles IA (protection des données d'entraînement, isolation des environnements GPU, gestion des versions de modèles), les APIs d'inférence exposées aux partenaires (authentification OAuth2, rate limiting, monitoring), et les processus de déploiement continu des modèles de tarification. Nous intégrons les exigences réglementaires ACPR sur l'explicabilité et l'auditabilité des algorithmes assurantiels.",
        },
        {
          q: "Conformité ACPR, DORA et NIS2 cloud pour les assureurs de Niort ?",
          a: "Les assureurs niortais (MAIF, Matmut, MACIF) sont soumis à la supervision de l'ACPR pour leurs externalisations cloud (notification obligatoire, exit clauses, audit droit de résiliation) et à DORA (Digital Operational Resilience Act for Financial Services) pour leur résilience opérationnelle numérique depuis 2025. CloudSecure accompagne les assureurs dans la constitution des dossiers d'externalisation cloud ACPR, l'audit DORA cloud (tests de résilience, gestion des incidents ICT, sécurité de la supply chain numérique) et la mise en conformité NIS2 pour les entités essentielles du secteur financier.",
        },
        {
          q: "CloudSecure intervient-il à Niort et dans les Deux-Sèvres ?",
          a: "CloudSecure intervient à Niort, Chauray, Bessines, Bressuire, Parthenay et dans tout le département des Deux-Sèvres. Nous couvrons également l'ensemble de la Nouvelle-Aquitaine incluant Poitiers, La Rochelle, Bordeaux, Limoges et Bayonne. Les audits cloud assurantiels se déroulent en partie à distance et en partie en présentiel (sessions de restitution, ateliers architecture sécurité, formations). Nous disposons d'experts en sécurité assurantielle cloud capables d'intervenir dans les contextes réglementés ACPR et DORA. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNiort;
