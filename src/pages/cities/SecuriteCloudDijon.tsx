import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudDijon = () => (
  <CityLandingPage
    data={{
      city: "Dijon",
      citySlug: "dijon",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21000",
      intro: "CloudSecure accompagne les coopératives agroalimentaires, ETI industrielles et banques régionales de Dijon dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Dijon, sécurité cloud Azure Dijon et conformité NIS2 cloud Dijon pour l'économie bourguignonne en transformation numérique. Nos experts en sécurisation infrastructure cloud Dijon protègent les données vitivinicoles, industrielles et financières des entreprises de Côte-d'Or.",
      localContext: "Dijon est la capitale d'une région dont l'économie repose sur un triptyque fort : agroalimentaire vitivinicole (vignerons de Bourgogne, négoces, cave coopératives), industrie manufacturière (Armor Lux, Framatome, Schneider Electric) et finance bancaire régionale (Banque de Savoie, Caisse Épargne Bourgogne). Ces secteurs migrent progressivement vers des ERP cloud (SAP RISE, Microsoft Dynamics) et des plateformes SaaS avec des niveaux de sensibilité des données très élevés. Le secteur vitivinicole bourguignon développe des plateformes cloud de traçabilité des appellations et de gestion des caves qui hébergent des données commerciales stratégiques. La banque régionale dijonnaise opère des systèmes core banking en cloud hybride (Azure pour Microsoft 365, AWS pour certains workloads) nécessitant une expertise cloud bancaire spécifique.",
      sectors: [
        "Vitivinicole et agroalimentaire (traçabilité cloud, cave management SaaS)",
        "Industrie manufacturière (ERP cloud, MES, cloud hybride)",
        "Banque et finance régionale (cloud hybride, core banking)",
        "Santé et CHU (HDS cloud, données patients)",
        "Collectivités et administrations (cloud souverain)",
        "PME et artisanat numérique dijonnais",
      ],
      neighborhoods: [
        "Dijon Centre et Toison d'Or — sièges et commerces",
        "Longvic — industrie et logistique",
        "Chenôve et Marsannay — PME et artisanat",
        "Quetigny — parc d'entreprises technologiques",
        "Beaune et Nuits-Saint-Georges — vitivinicole",
        "Auxerre, Chalon-sur-Saône — PME régionales",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une cave coopérative viticole bourguignonne ?",
          a: "Un audit AWS pour une cave coopérative viticole bourguignonne (couvrant IAM, S3, RDS, API de traçabilité, conformité RGPD données clients et CIS Benchmark) est facturé entre 3 500 et 7 000 euros HT selon la taille de la coopérative et le nombre de systèmes cloud interconnectés. CloudSecure inclut une revue spécifique des accès partenaires (négociants, cavistes, importateurs) aux plateformes de gestion des appellations — un vecteur d'attaque fréquent dans les systèmes de traçabilité vitivinicole. Livraison du rapport avec plan de remédiation sous 5 jours.",
        },
        {
          q: "Comment sécuriser un ERP industriel sur Azure pour une ETI dijonnaise ?",
          a: "La sécurisation d'un ERP industriel sur Azure (SAP RISE on Azure, Microsoft Dynamics 365) pour une ETI dijonnaise passe par l'audit Azure AD (MFA, accès conditionnel, PIM pour les comptes administrateurs), la revue des Network Security Groups, le chiffrement des données sensibles (plans de production, données fournisseurs), la surveillance via Microsoft Sentinel et la conformité NIS2 cloud. CloudSecure réalise des audits sécurité Azure Dijon pour les ETI industrielles de Bourgogne avec une expertise sur les migrations ERP cloud et les architectures hybrides on-premise / Azure.",
        },
        {
          q: "DevSecOps Dijon : accompagnez-vous les PME tech de la région bourguignonne ?",
          a: "Oui, CloudSecure accompagne les PME tech et startups dijonnaises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST et SCA, gérons les secrets via HashiCorp Vault ou AWS Secrets Manager, et formons les équipes aux pratiques secure by design. Pour les PME avec des ressources IT limitées, nous proposons également des missions de RSSI cloud externalisé Dijon à temps partiel, permettant un suivi continu de la posture de sécurité cloud.",
        },
        {
          q: "Conformité NIS2 cloud pour les banques régionales et coopératives agricoles de Dijon ?",
          a: "Les banques régionales dijonnaises (Crédit Mutuel, Caisse d'Épargne, Banque Populaire) sont des entités essentielles au sens de NIS2 et soumises aux obligations les plus strictes de sécurité cloud, complétées par les exigences DORA (Digital Operational Resilience Act) pour les services financiers. Les coopératives agricoles dépassant 50 salariés tombent également dans le champ NIS2. CloudSecure réalise des audits NIS2 et DORA cloud Dijon pour ces acteurs, avec une expertise sur les exigences de continuité d'activité, la gestion des incidents et la sécurité des prestataires cloud tiers.",
        },
        {
          q: "CloudSecure intervient-il à Dijon et dans la région Bourgogne-Franche-Comté ?",
          a: "CloudSecure intervient à Dijon, Longvic, Quetigny, Beaune et dans toute la région Bourgogne-Franche-Comté incluant Auxerre, Chalon-sur-Saône, Mâcon, Besançon, Belfort et Montbéliard. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Dijon pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Dijon. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudDijon;
