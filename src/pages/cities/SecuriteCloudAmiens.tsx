import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAmiens = () => (
  <CityLandingPage
    data={{
      city: "Amiens",
      citySlug: "amiens",
      region: "Hauts-de-France",
      postalCode: "80000",
      intro: "CloudSecure accompagne les industriels de l'Industrie 4.0, opérateurs logistiques e-commerce et établissements de santé d'Amiens dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Amiens, sécurité cloud Azure Amiens et conformité NIS2 cloud Amiens pour les ETI industrielles de la Somme en migration cloud hybride. Nos experts en sécurisation infrastructure cloud Amiens protègent les données industrielles et médicales des entreprises de la métropole amiénoise.",
      localContext: "Amiens est un pôle industriel important des Hauts-de-France avec des ETI manufacturières (Valeo, Procter & Gamble, Saint-Gobain) qui déploient des systèmes MES et ERP cloud hybride Azure pour piloter leur production connectée à l'Industrie 4.0. La logistique e-commerce amiénoise connaît une expansion rapide avec des entrepôts automatisés opérant des WMS cloud (AWS, Azure) pour les enseignes nationales, créant des besoins en continuité d'activité et sécurité cloud critiques. Le CHU d'Amiens-Picardie, qui a subi plusieurs tentatives de cyberattaque, renforce sa posture de sécurité cloud HDS pour protéger les données de ses patients. Les PME de la Somme dans l'agroalimentaire (Bonduelle, RHD) adoptent des solutions SaaS cloud pour leur gestion et leur traçabilité.",
      sectors: [
        "Industrie 4.0 et manufacturing (Valeo, Saint-Gobain — cloud hybride)",
        "Logistique e-commerce et entrepôts automatisés (WMS cloud AWS)",
        "Agroalimentaire et industrie alimentaire (ERP cloud, traçabilité)",
        "Santé et CHU Amiens-Picardie (HDS cloud, données patients)",
        "Textile et mode (cloud ERP, e-commerce B2B)",
        "PME picarde en transformation numérique (SaaS cloud)",
      ],
      neighborhoods: [
        "Amiens Centre et Saint-Leu — sièges et services",
        "Longueau et Rivery — logistique et distribution",
        "Glisy et Boves — zones industrielles",
        "Dury et Salouël — parcs d'entreprises",
        "Albert et Corbie — industrie et PME",
        "Abbeville, Péronne — PME et agroalimentaire",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une ETI industrielle à Amiens en migration Industrie 4.0 ?",
          a: "Un audit AWS pour une ETI industrielle amiénoise en migration Industrie 4.0 (couvrant IAM, VPC, connexions OT/cloud, S3, RDS, conformité CIS Benchmark et revue des accès MES-ERP cloud) est facturé entre 5 000 et 11 000 euros HT selon la complexité de l'architecture hybride et le nombre de sites de production connectés. CloudSecure inclut une revue spécifique des interfaces OT/IT (passerelles industrielles vers le cloud) et des accès sous-traitants, vecteurs d'attaque majeurs dans les environnements industriels connectés. Livraison du rapport avec plan de remédiation sous 7 jours.",
        },
        {
          q: "Comment sécuriser un entrepôt e-commerce automatisé avec WMS cloud à Amiens ?",
          a: "La sécurisation d'un entrepôt e-commerce automatisé opérant un WMS cloud à Amiens couvre : la sécurité des APIs de gestion des stocks et commandes (API Gateway avec WAF, authentification OAuth2), la protection des données opérationnelles (volumes, références, clients enseignes), la continuité d'activité en cas d'incident cloud (PRA multi-AZ, RTO < 4h), et la conformité NIS2 pour les opérateurs logistiques. CloudSecure réalise des audits cloud logistique Amiens avec une expertise sur les architectures WMS et les intégrations EDI en temps réel.",
        },
        {
          q: "DevSecOps Amiens : accompagnez-vous les équipes tech des ETI industrielles ?",
          a: "Oui, CloudSecure accompagne les équipes IT et développement des ETI industrielles amiénoises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD des développements d'applications industrielles (SAST, scan de conteneurs, gestion des secrets), formons les équipes aux pratiques secure by design et accompagnons la sécurisation des architectures cloud hybride. Pour les ETI sans RSSI dédié, nous proposons des missions de RSSI cloud externalisé Amiens à temps partiel.",
        },
        {
          q: "Hébergement données de santé HDS pour le CHU Amiens-Picardie : quelles mesures cloud ?",
          a: "Le CHU Amiens-Picardie hébergeant des données patients sur le cloud doit utiliser un hébergeur certifié HDS, assurer le cloisonnement des données par service et département, chiffrer toutes les données au repos (AES-256) et en transit (TLS 1.2+), maintenir un journal d'accès complet avec surveillance des anomalies en temps réel, et tester régulièrement le plan de réponse aux incidents. CloudSecure réalise des audits HDS cloud Amiens adaptés aux contraintes des CHU publics et accompagne la mise en conformité dans les délais imposés par les exigences réglementaires hospitalières.",
        },
        {
          q: "CloudSecure intervient-il à Amiens et dans les Hauts-de-France ?",
          a: "CloudSecure intervient à Amiens, Longueau, Rivery, Glisy et dans toute la région Hauts-de-France incluant Lille, Dunkerque, Calais, Valenciennes, Lens, Arras et Beauvais. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Amiens pour les ateliers de restitution, formations DevSecOps et missions de RSSI cloud externalisé Amiens. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAmiens;
