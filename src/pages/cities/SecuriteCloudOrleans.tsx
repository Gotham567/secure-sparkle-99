import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudOrleans = () => (
  <CityLandingPage
    data={{
      city: "Orléans",
      citySlug: "orleans",
      region: "Centre-Val de Loire",
      postalCode: "45000",
      intro: "CloudSecure accompagne les laboratoires pharmaceutiques Servier, opérateurs logistiques e-commerce et acteurs du numérique d'Orléans dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Orléans, sécurité cloud Azure Orléans et conformité NIS2 cloud Orléans pour les entreprises pharmaceutiques et logistiques du Loiret. Nos experts en sécurisation infrastructure cloud Orléans protègent les données R&D pharmaceutiques et les plateformes logistiques critiques du bassin orléanais.",
      localContext: "Orléans est un pôle pharmaceutique et logistique majeur du Centre-Val de Loire avec Servier — deuxième groupe pharmaceutique français — dont le siège social et les centres R&D sont basés dans l'agglomération et qui déploie des environnements cloud AWS et Azure pour la gestion des essais cliniques, la validation GxP et la collaboration R&D internationale. La cosmétique orléanaise (Cosmetic Valley, avec des acteurs comme LVMH Parfums) opère des processus de R&D et de contrôle qualité sur cloud avec des données de formulation propriétaires extrêmement sensibles. La logistique e-commerce orléanaise bénéficie d'une position centrale en France et opère des plateformes WMS cloud pour les enseignes nationales. Les collectivités du Grand Orléans déploient des services publics numériques sur cloud souverain.",
      sectors: [
        "Pharmaceutique (Servier — R&D cloud, essais cliniques, GxP HDS)",
        "Cosmétique Cosmetic Valley (R&D cloud, formulation, données propriétaires)",
        "Logistique e-commerce (WMS cloud AWS, entrepôts automatisés)",
        "Santé et CHU (HDS cloud, données patients Loiret)",
        "Numérique et startups (centre-ville numérique Orléans)",
        "Collectivités et services publics (cloud souverain, dématérialisation)",
      ],
      neighborhoods: [
        "Orléans Centre et la Madeleine — sièges et services",
        "Orléans Chécy et Semoy — logistique et industrie",
        "Saran et Fleury-les-Aubrais — zones industrielles",
        "Olivet — technologie et parcs d'entreprises",
        "Saint-Jean-de-la-Ruelle — Servier et pharma",
        "Gien, Pithiviers — PME et agroalimentaire",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour les laboratoires Servier à Orléans en conformité GxP ?",
          a: "Un audit AWS pour les laboratoires Servier ou leurs sous-traitants à Orléans (couvrant les environnements de validation GxP, IAM, S3, RDS, CloudTrail, conformité CIS Benchmark, FDA 21 CFR Part 11 et EU Annex 11) est facturé entre 9 000 et 20 000 euros HT selon le nombre de systèmes validés et la complexité de l'architecture cloud. CloudSecure inclut une revue des systèmes de gestion des essais cliniques (EDC, CTMS) hébergés sur cloud, des contrôles d'audit trail et des processus de validation informatisée. Le rapport est structuré pour faciliter les audits ANSM et EMA.",
        },
        {
          q: "Comment sécuriser les données de formulation cosmétique de la Cosmetic Valley sur le cloud ?",
          a: "Les données de formulation cosmétique (recettes, procédés industriels, données d'efficacité clinique) hébergées sur le cloud constituent une propriété intellectuelle à très haute valeur nécessitant une protection rigoureuse : chiffrement BYOK (clés maîtrisées par l'entreprise), DLP actif sur les transferts sortants, contrôle d'accès conditionnel géographique, journalisation forensique et cloisonnement des accès par projet/produit. CloudSecure réalise des audits cloud R&D Orléans pour les acteurs de la Cosmetic Valley, avec une expertise sur la protection de la propriété intellectuelle chimique et cosmétique.",
        },
        {
          q: "DevSecOps Orléans : accompagnez-vous les startups numériques du bassin orléanais ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech orléanaises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD (GitHub Actions, GitLab CI), déployons des outils SAST (Semgrep, SonarQube), SCA (Snyk), scan de conteneurs (Trivy) et formons les équipes aux pratiques secure by design. Pour les équipes de développement pharmaceutiques, nous intégrons les exigences GxP dans les processus de développement sécurisé.",
        },
        {
          q: "Hébergement données de santé HDS pour les laboratoires pharmaceutiques orléanais ?",
          a: "Les laboratoires pharmaceutiques orléanais (Servier, sous-traitants CRO) hébergeant des données de santé issues d'essais cliniques doivent utiliser un hébergeur certifié HDS et respecter les exigences du référentiel HDS de l'ANS. CloudSecure réalise des audits HDS cloud Orléans pour les laboratoires et CRO du Loiret, en articulant les exigences HDS avec les contraintes GxP spécifiques au contexte pharmaceutique. Nous accompagnons également la mise en conformité RGPD pour les droits des participants aux essais cliniques (accès, rectification, limitation).",
        },
        {
          q: "CloudSecure intervient-il à Orléans et dans le Centre-Val de Loire ?",
          a: "CloudSecure intervient à Orléans, Saran, Fleury-les-Aubrais, Olivet et dans tout le Loiret et le Centre-Val de Loire incluant Tours, Blois, Chartres, Bourges et Châteauroux. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Orléans pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Orléans. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudOrleans;
