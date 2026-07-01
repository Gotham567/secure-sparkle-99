import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLeMans = () => (
  <CityLandingPage
    data={{
      city: "Le Mans",
      citySlug: "le-mans",
      region: "Pays de la Loire",
      postalCode: "72000",
      intro: "CloudSecure accompagne les acteurs de la mobilité connectée, du secteur assurantiel et des PME industrielles du Mans dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Le Mans, sécurité cloud Azure Le Mans et RSSI cloud externalisé Le Mans pour les entreprises d'assurance data et les sous-traitants automobiles. Nos experts en sécurisation infrastructure cloud Le Mans protègent les données des 24 Heures du Mans connectées aux assureurs data de la Sarthe.",
      localContext: "Le Mans est le siège de la MAIF — leader de l'assurance solidaire en France — qui opère d'importants volumes de données assurantielles et développe des solutions d'assurance-tech sur AWS avec des traitements IA sur les sinistres, la conduite connectée et les données télémétriques. L'écosystème de la mobilité et de l'automobile au Mans (24 Heures connectées, ACO, sous-traitants automobiles) génère des données de performance, de télémétrie et de connectivité qui migrent vers le cloud. Les startups SaaS d'assurance (insurtechs) mancelles développent des produits data sur AWS et GCP qui nécessitent une sécurisation spécifique des données assurantielles (données personnelles, données de santé, données comportementales). Les PME industrielles de la Sarthe dans la mécanique de précision et l'électronique migrent leurs ERP vers le cloud.",
      sectors: [
        "Assurance et insurtechs (MAIF — data, IA assurantielle, AWS)",
        "Automobile et mobilité connectée (données télémétrie, 24H cloud)",
        "SaaS assurance et data analytics (cloud AWS, GCP)",
        "Industrie de précision et mécanique (ERP cloud, cloud hybride)",
        "Santé et CHU (HDS cloud, données patients Sarthe)",
        "PME industrielles sarthoises (SaaS cloud, Microsoft 365)",
      ],
      neighborhoods: [
        "Le Mans Centre et Novaxis — assurance et services",
        "Arnage et Mulsanne — automobile et sous-traitants",
        "Allonnes — industrie et PME",
        "Saint-Saturnin — parcs d'entreprises",
        "La Flèche et Sablé-sur-Sarthe — PME et agroalimentaire",
        "Alençon — industrie normande et PME",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un assureur data comme la MAIF au Mans ?",
          a: "Un audit AWS pour un assureur data manceau (couvrant IAM, S3, RDS, SageMaker pour les modèles IA assurantiels, API Gateway, KMS, conformité CIS Benchmark et exigences ACPR cloud) est facturé entre 7 000 et 15 000 euros HT selon la taille de l'environnement AWS et la complexité des workloads IA. CloudSecure inclut une revue spécifique des données télémétriques de conduite connectée (PII, données comportementales), des modèles d'IA assurantiels et de la conformité ACPR pour l'usage des algorithmes en assurance. Livraison du rapport sous 7 jours.",
        },
        {
          q: "Comment sécuriser les données de sinistres et données personnelles assurantielles sur le cloud ?",
          a: "La sécurisation des données assurantielles sur le cloud (AWS, Azure) couvre : le chiffrement des données sensibles (données de santé dans les sinistres corporels = HDS obligatoire, données financières), la pseudonymisation des données pour les traitements analytiques et IA, le contrôle d'accès strict aux dossiers de sinistres (RBAC, accès conditionnel), la journalisation de tous les accès (CloudTrail, Azure Monitor), et la conformité RGPD pour les droits des assurés (portabilité, effacement). CloudSecure accompagne les assureurs manceaux dans la mise en place de ces contrôles et les audite annuellement.",
        },
        {
          q: "DevSecOps Le Mans : accompagnez-vous les insurtechs et startups tech de la Sarthe ?",
          a: "Oui, CloudSecure accompagne les insurtechs et startups tech mancelles dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD des équipes data et ingénierie, sécurisons les pipelines MLOps (entraînement et déploiement de modèles IA assurantiels), déployons des outils SAST (Semgrep) et SCA (Snyk), et formons les équipes aux pratiques secure by design pour les contextes assurantiels réglementés.",
        },
        {
          q: "Conformité ACPR et NIS2 cloud pour les assureurs et insurtechs du Mans ?",
          a: "Les assureurs manceaux (MAIF, Mutuelle du Mans Assurances) sont soumis à la supervision de l'ACPR pour leurs usages cloud, incluant la notification des externalisation matérielles vers des prestataires cloud, l'audit des conditions de réversibilité et la gestion du risque de concentration. CloudSecure accompagne les assureurs dans la constitution des dossiers d'externalisation cloud ACPR, la rédaction des SLA et exit clauses avec AWS ou Azure, et la mise en conformité DORA pour la résilience opérationnelle numérique des assureurs en 2025.",
        },
        {
          q: "CloudSecure intervient-il au Mans et dans les Pays de la Loire ?",
          a: "CloudSecure intervient au Mans, Arnage, Mulsanne, Allonnes et dans toute la région Pays de la Loire incluant Nantes, Angers, La Roche-sur-Yon, Cholet et Laval. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site au Mans pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Le Mans. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLeMans;
