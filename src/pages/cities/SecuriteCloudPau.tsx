import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPau = () => (
  <CityLandingPage
    data={{
      city: "Pau",
      citySlug: "pau",
      region: "Nouvelle-Aquitaine",
      postalCode: "64000",
      intro: "CloudSecure accompagne les géants de l'énergie TotalEnergies, Safran et les acteurs de l'agriculture smart de Pau dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Pau, sécurité cloud Azure Pau et RSSI cloud externalisé Pau pour l'industrie pétrolière data et l'aéronautique béarnaise. Nos experts en sécurisation infrastructure cloud Pau protègent les données pétrolières critiques et la propriété intellectuelle aéronautique des grandes entreprises du bassin palois.",
      localContext: "Pau est le siège historique de l'industrie pétrolière française avec TotalEnergies (ex-Total) qui concentre d'importantes activités R&D et ingénierie de réservoirs générant des données géoscientifiques d'une valeur extraordinaire, migrées vers des environnements cloud HPC pour la simulation numérique et l'IA pétrolière. Safran dispose d'un site de production aéronautique important à Bordes (près de Pau) qui déploie des architectures cloud hybride pour ses applications PLM et les données de certification moteurs — des données à très haute sensibilité industrielle. L'agriculture smart béarnaise (maïs, productions AOC Ossau-Iraty, vignoble de Jurançon) développe des plateformes IoT cloud pour le pilotage des exploitations. Les PME et ETI du Pays Basque-Béarn dans les services et l'agroalimentaire migrent progressivement vers le cloud.",
      sectors: [
        "Énergie pétrolière et géosciences (TotalEnergies — HPC cloud, data pétrole)",
        "Aéronautique (Safran Bordes — PLM cloud, données certification)",
        "Agriculture smart béarnaise (IoT cloud, AOC Pyrénées)",
        "Industrie et sous-traitants aéronautiques (cloud hybride)",
        "Santé et CHU (HDS cloud, données patients Béarn)",
        "PME et ETI Pays Basque-Béarn (ERP cloud, SaaS)",
      ],
      neighborhoods: [
        "Pau Centre et Hédas — sièges TotalEnergies et services",
        "Pau Pyrénées et Lons — industrie et logistique",
        "Bordes et Assat — Safran et aéronautique",
        "Jurançon et Billère — PME et commerce",
        "Orthez, Bayonne — entreprises béarnaises et basques",
        "Tarbes et Lourdes — industrie Hautes-Pyrénées",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud pour les données géoscientifiques de TotalEnergies à Pau ?",
          a: "Un audit cloud pour des workloads géoscientifiques TotalEnergies (simulation de réservoirs, données sismiques, modèles pétroliers sur AWS HPC ou Azure HPC) est facturé entre 10 000 et 25 000 euros HT selon le périmètre et la complexité des architectures HPC cloud. CloudSecure audite les contrôles d'accès aux datasets géoscientifiques (IAM strict, encryption at rest KMS), les pipelines de simulation sécurisés, la DLP pour éviter l'exfiltration de données de réservoirs propriétaires, et les accès des partenaires JV (joint-venture) aux données partagées. Ces données représentent une valeur de plusieurs milliards d'euros et font l'objet de cyberespionnage industriel ciblé.",
        },
        {
          q: "Comment sécuriser les données de certification moteur Safran sur le cloud à Pau ?",
          a: "Les données de certification des moteurs Safran (données d'essais, dossiers de navigabilité, propriété intellectuelle technologique) sur le cloud nécessitent une architecture à très haute assurance : cloud souverain ou chiffrement BYOK avec HSM dédié, contrôle d'accès conditionnel géographique, DLP actif et journalisation forensique complète. CloudSecure accompagne Safran Bordes et ses sous-traitants dans la sécurisation de ces architectures cloud et dans la conformité avec les exigences de l'EASA, de la DGA et des autorités de certification des moteurs d'aéronefs.",
        },
        {
          q: "DevSecOps Pau : accompagnez-vous les équipes tech des industries énergétiques et aéronautiques ?",
          a: "Oui, CloudSecure accompagne les équipes de développement des industries énergétiques et aéronautiques paloise dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous sécurisons les pipelines CI/CD des applications industrielles, intégrons des outils SAST et SCA adaptés aux contextes réglementés (aéronautique, énergie), gérons les secrets dans des architectures cloud hybride et formons les équipes aux bonnes pratiques de sécurité cloud pour les secteurs critiques.",
        },
        {
          q: "Conformité NIS2 cloud pour les opérateurs énergétiques du Béarn ?",
          a: "TotalEnergies et les opérateurs d'énergie béarnais sont des entités essentielles au sens de NIS2 et soumis aux obligations les plus strictes de sécurité des systèmes d'information. CloudSecure accompagne ces acteurs dans l'audit NIS2 cloud Pau, en articulant les exigences NIS2 avec les réglementations sectorielles spécifiques à l'énergie (décret IIV, sécurité des OIV). Nous réalisons également des audits de conformité pour les sous-traitants des opérateurs d'énergie soumis aux exigences de sécurité imposées par leurs donneurs d'ordres.",
        },
        {
          q: "CloudSecure intervient-il à Pau et dans les Pyrénées-Atlantiques ?",
          a: "CloudSecure intervient à Pau, Bordes, Lons, Jurançon et dans tout le département des Pyrénées-Atlantiques incluant Bayonne, Biarritz, Anglet et Orthez. Nous couvrons également les Hautes-Pyrénées (Tarbes, Lourdes) et tout le corridor Nouvelle-Aquitaine. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Pau pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Pau. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPau;
