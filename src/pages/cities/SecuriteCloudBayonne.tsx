import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBayonne = () => (
  <CityLandingPage
    data={{
      city: "Bayonne",
      citySlug: "bayonne",
      region: "Nouvelle-Aquitaine",
      postalCode: "64100",
      intro: "CloudSecure accompagne les industriels agroalimentaires basques, chimistes et acteurs du tourisme numérique de Bayonne dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Bayonne, sécurité cloud Azure Bayonne et conformité NIS2 cloud Bayonne pour l'économie basque et la zone industrielle de Lacq. Nos experts en sécurisation infrastructure cloud Bayonne protègent les données de l'agroalimentaire basque aux entreprises chimiques du Pays Basque.",
      localContext: "Bayonne et l'agglomération Côte Basque-Adour concentrent un tissu économique diversifié avec des leaders de l'agroalimentaire basque — Lindt (chocolaterie d'Oloa), Lur Berri (coopérative agricole), industrie du jambon de Bayonne — qui déploient des ERP cloud et des plateformes de traçabilité pour leurs productions IGP et AOP. La chimie basque (Arkema, Sobegi sur le site de Lacq) opère des processus industriels complexes dont la supervision connectée au cloud nécessite une sécurisation OT/IT rigoureuse. Le tourisme numérique Côte Basque (Biarritz, Saint-Jean-de-Luz) génère des plateformes de booking en ligne avec des données bancaires et clients à fort enjeu saisonnier. Les PME et artisans du Pays Basque adoptent progressivement des SaaS cloud pour leur gestion.",
      sectors: [
        "Agroalimentaire et IGP basque (Lindt, jambon de Bayonne — ERP cloud, traçabilité)",
        "Chimie et pétrochimie Lacq (cloud OT, supervision distante)",
        "Tourisme Côte Basque (booking cloud, PCI DSS, RGPD)",
        "Coopératives agricoles basques (ERP cloud Azure, traçabilité AOP)",
        "Santé et CH de Bayonne (HDS cloud, données patients)",
        "PME basques et artisanat connecté (SaaS cloud, e-commerce)",
      ],
      neighborhoods: [
        "Bayonne Centre et Grand Bayonne — sièges et services",
        "Mouguerre et Lahonce — zones industrielles et logistique",
        "Biarritz — tourisme et hôtellerie de luxe",
        "Anglet — aéroport et entreprises tech",
        "Saint-Jean-de-Luz — tourisme et pêche",
        "Lacq et Orthez — chimie et pétrochimie",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un acteur de l'agroalimentaire basque à Bayonne ?",
          a: "Un audit AWS pour un acteur de l'agroalimentaire basque bayonnais (couvrant IAM, S3 hébergeant les données de traçabilité IGP/AOP, RDS, API partenaires GMS, conformité CIS Benchmark et protection des données commerciales) est facturé entre 3 500 et 8 000 euros HT selon la taille de l'entreprise et le périmètre cloud. CloudSecure inclut une revue spécifique des accès partenaires (importateurs, distributeurs) et de la sécurité des systèmes de traçabilité blockchain ou cloud pour les labels IGP et AOP. Livraison du rapport sous 5 jours.",
        },
        {
          q: "Comment sécuriser les systèmes OT de la chimie basque (Lacq) connectés au cloud ?",
          a: "La sécurisation des systèmes OT de la chimie basque connectés au cloud (supervision SCADA distante, maintenance prédictive cloud) nécessite une architecture Zero Trust OT : segmentation stricte OT/IT (DMZ industrielle, flux unidirectionnels), chiffrement des communications OT vers le cloud (OPC-UA over TLS), surveillance comportementale des flux (Claroty, Darktrace OT) et conformité NIS2 pour les opérateurs d'importance vitale. CloudSecure réalise des audits OT/cloud Bayonne pour les industriels chimiques du bassin de Lacq avec une expertise sectorielle reconnue.",
        },
        {
          q: "DevSecOps Bayonne : accompagnez-vous les startups tech du Pays Basque ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech basques dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD (GitHub Actions, GitLab CI), déployons des outils SAST (Semgrep), SCA (Snyk), scan de conteneurs (Trivy) et formons les équipes ingénierie aux pratiques secure by design. Pour les PME basques à ressources limitées, nous proposons des missions de RSSI cloud externalisé Bayonne à temps partiel.",
        },
        {
          q: "Conformité NIS2 cloud pour les industriels et opérateurs agroalimentaires de Bayonne ?",
          a: "Les industriels chimiques du bassin de Lacq (entités essentielles NIS2 — secteur chimique) et les coopératives agroalimentaires basques dépassant 50 salariés (entités importantes — secteur alimentaire) sont soumis à NIS2. CloudSecure réalise des diagnostics NIS2 cloud Bayonne pour qualifier votre statut et identifier les obligations applicables. Pour les industriels chimiques OIV, nous articulons NIS2 avec les exigences spécifiques de l'ANSSI pour les opérateurs d'importance vitale dans la chimie.",
        },
        {
          q: "CloudSecure intervient-il à Bayonne et dans le Pays Basque ?",
          a: "CloudSecure intervient à Bayonne, Biarritz, Anglet, Saint-Jean-de-Luz, Hendaye et dans tout le Pays Basque et les Pyrénées-Atlantiques. Nous couvrons également le corridor Nouvelle-Aquitaine incluant Pau, Tarbes, Bordeaux et Dax. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Bayonne pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Bayonne. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBayonne;
