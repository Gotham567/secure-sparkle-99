import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLyon = () => (
  <CityLandingPage
    data={{
      city: "Lyon",
      citySlug: "lyon",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69000",
      intro: "CloudSecure accompagne les ETI industrielles, laboratoires pharmaceutiques et startups deeptech de Lyon dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Lyon, sécurité cloud Azure Lyon et conformité NIS2 cloud Lyon pour les entreprises en migration Industrie 4.0. Nos experts en sécurisation infrastructure cloud Lyon interviennent auprès des acteurs de la pharma, du CHU et des ETI en cloud hybride qui constituent l'ossature économique de la métropole.",
      localContext: "Lyon est le deuxième hub économique français, porté par un tissu d'ETI industrielles qui migrent massivement vers le cloud hybride pour leurs ERP, systèmes MES et applications d'Industrie 4.0 connectant usines et SI corporate. Le secteur pharmaceutique lyonnais (Sanofi, Biomérieux, Boehringer Ingelheim) impose des exigences HDS et GxP pour l'hébergement des données de santé sur cloud, que CloudSecure maîtrise intégralement. Le CHU de Lyon et les cliniques privées opèrent des workloads de santé sur AWS et Azure qui nécessitent une configuration HDS rigoureuse et un suivi RSSI cloud externalisé Lyon continu. Les startups deeptech lyonnaises (Lyonbiopôle, Minalogic) développent des applications cloud-native avec des architectures complexes que nos équipes auditent régulièrement.",
      sectors: [
        "ETI industrielles en migration Industrie 4.0 (cloud hybride)",
        "Pharmaceutique et biosciences (HDS, GxP cloud)",
        "Santé et CHU (cloud souverain, données patients)",
        "Finance et banque régionale (Crédit Agricole, LCL)",
        "Startups deeptech et Lyonbiopôle",
        "ESN et intégrateurs cloud Auvergne-Rhône-Alpes",
      ],
      neighborhoods: [
        "Lyon Part-Dieu — sièges ETI et banques",
        "Lyon Confluence — startups et numérique",
        "Villeurbanne et Carré de Soie — tech et recherche",
        "Bron — CHU et biotech",
        "Gerland et Mermoz — pharma et industrie",
        "Limonest, Ecully et Caluire — parcs d'entreprises",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une ETI industrielle lyonnaise en cloud hybride ?",
          a: "Un audit AWS pour une ETI lyonnaise en cloud hybride (couvrant AWS Organizations, IAM, VPC peering avec le SI on-premise, CloudTrail, Config et Guard Duty) est facturé entre 6 000 et 12 000 euros HT selon le nombre de comptes AWS et la complexité de l'architecture hybride. CloudSecure inclut une revue spécifique de la connectivité Direct Connect ou VPN Site-to-Site, souvent mal configurée dans les contextes industriels. Le rapport livré sous 7 jours identifie les risques de mouvement latéral entre le SI industriel et le cloud.",
        },
        {
          q: "Comment sécuriser les données pharmaceutiques sur AWS ou Azure à Lyon en conformité HDS ?",
          a: "L'hébergement de données de santé sur AWS ou Azure à Lyon exige l'utilisation d'un hébergeur certifié HDS (AWS, Microsoft Azure et OVHcloud le sont), une configuration stricte des régions françaises uniquement, le chiffrement des données au repos et en transit avec des clés maîtrisées, et la traçabilité complète des accès via CloudTrail ou Azure Monitor. CloudSecure réalise des audits HDS cloud spécialisés pour les laboratoires pharmaceutiques lyonnais et accompagne la mise en conformité GxP (21 CFR Part 11, Annex 11 EU) pour les environnements de validation sur cloud.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les startups deeptech de Lyon ?",
          a: "Oui, CloudSecure accompagne les startups deeptech lyonnaises (Lyonbiopôle, Minalogic, French Tech Lyon) dans la mise en place d'une culture DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dès les pipelines CI/CD (GitLab, GitHub Actions), déployons des outils d'analyse de code (Semgrep, Snyk), sécurisons les images Docker et Helm charts, et mettons en place la gestion des secrets via HashiCorp Vault ou AWS Secrets Manager. Nous formons également les équipes R&D aux bonnes pratiques de sécurité cloud.",
        },
        {
          q: "Quelle conformité NIS2 cloud pour les entreprises industrielles de Lyon ?",
          a: "Les ETI lyonnaises des secteurs de la fabrication, de l'énergie ou des transports dépassant 50 salariés ou 10 M€ de CA entrent dans le champ d'application de NIS2. CloudSecure réalise un audit de conformité NIS2 cloud Lyon qui évalue les mesures techniques (segmentation réseau, MFA, gestion des incidents) et organisationnelles (politique de sécurité cloud, plan de continuité) par rapport aux exigences de la directive. Nous produisons un plan de remédiation priorisé et accompagnons la mise en conformité effective dans les délais imposés par l'ANSSI.",
        },
        {
          q: "Intervenez-vous à Lyon et dans toute la région Auvergne-Rhône-Alpes ?",
          a: "CloudSecure intervient à Lyon, Villeurbanne, Bron, Caluire, Limonest et dans toute la région Auvergne-Rhône-Alpes incluant Grenoble, Chambéry, Saint-Étienne, Valence, Annecy et Clermont-Ferrand. Les audits cloud techniques se déroulent à distance, avec des déplacements sur site pour les ateliers de restitution, les formations et les missions de RSSI cloud externalisé Lyon. Les délais d'intervention en présentiel sont de 24 à 48h pour les urgences.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLyon;
