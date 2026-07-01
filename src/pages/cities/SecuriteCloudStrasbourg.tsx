import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CloudSecure accompagne les institutions européennes, laboratoires pharmaceutiques, SaaS B2B et entreprises transfrontalières de Strasbourg dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Strasbourg, sécurité cloud Azure Strasbourg et conformité NIS2 cloud Strasbourg pour la capitale alsacienne. Nos experts en sécurisation infrastructure cloud Strasbourg maîtrisent les exigences de souveraineté du cloud pour les institutions européennes et la conformité HDS GxP pour la pharma alsacienne.",
      localContext: "Strasbourg, capitale européenne abritant le Parlement européen et le Conseil de l'Europe, impose des standards de sécurité cloud parmi les plus exigeants d'Europe : données hébergées exclusivement en UE, chiffrement souverain, conformité ENISA Cloud Security Framework et NIS2. Les laboratoires pharmaceutiques alsaciens (Lilly, Boehringer Ingelheim, Sanofi Pasteur) traitent des données R&D et de validation GxP sur des infrastructures cloud AWS et Azure qui exigent une conformité rigoureuse à la réglementation FDA 21 CFR Part 11 et EU Annex 11. Le CHU de Strasbourg, l'un des plus grands hôpitaux universitaires d'Europe, opère des systèmes d'information médicaux sur cloud avec des exigences HDS et RGPD strictes. Les entreprises transfrontalières franco-allemandes de la région Strasbourg-Kehl doivent concilier le RGPD européen et les exigences du BSI IT-Grundschutz allemand.",
      sectors: [
        "Institutions européennes (cloud souverain EU, ENISA)",
        "Pharmaceutique et R&D (HDS, GxP cloud, FDA)",
        "Santé et CHU (HDS cloud, données patients)",
        "SaaS B2B alsacien et entreprises transfrontalières",
        "Industrie et ETI (cloud hybride Grand Est)",
        "Finance et banque (Caisse d'Épargne, Crédit Mutuel)",
      ],
      neighborhoods: [
        "Strasbourg Centre et Quartier Européen",
        "Schiltigheim et Cronenbourg — industrie et pharma",
        "Illkirch-Graffenstaden — parc d'innovation",
        "Haguenau et Saverne — PME et industrie alsacienne",
        "Oberhausbergen et Eckbolsheim — logistique",
        "Kehl et zone transfrontalière franco-allemande",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un laboratoire pharmaceutique à Strasbourg en conformité GxP ?",
          a: "Un audit AWS pour un laboratoire pharmaceutique strasbourgeois (couvrant IAM, S3, RDS, EC2, CloudTrail, conformité CIS Benchmark, et validation GxP selon FDA 21 CFR Part 11 et EU Annex 11) est facturé entre 8 000 et 18 000 euros HT selon le nombre de systèmes validés et la complexité de l'architecture. CloudSecure inclut une revue spécifique des environnements de validation informatisés (VMP/URS/IQ-OQ-PQ), des contrôles d'audit trail et de la gestion des signatures électroniques qualifiées. Le rapport livré sous 10 jours est structuré pour servir de base documentaire à vos audits réglementaires FDA ou ANSM.",
        },
        {
          q: "Comment sécuriser un cloud souverain pour les prestataires des institutions européennes à Strasbourg ?",
          a: "Les prestataires des institutions européennes à Strasbourg (Parlement européen, Conseil de l'Europe) doivent respecter les exigences ENISA Cloud Security et héberger les données exclusivement sur des serveurs européens. CloudSecure accompagne ces prestataires dans la mise en conformité : sélection d'un cloud souverain EU (AWS eu-west-1, Azure France Central, OVHcloud), implémentation du chiffrement BYOK, configuration des contrôles d'accès NIS2-conformes et rédaction de la PSSI cloud adaptée aux exigences des marchés publics européens.",
        },
        {
          q: "DevSecOps Strasbourg : accompagnez-vous les entreprises transfrontalières franco-allemandes ?",
          a: "Oui, CloudSecure accompagne les entreprises transfrontalières de la région Strasbourg-Kehl dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous gérons la spécificité franco-allemande : conformité RGPD (côté français) et BSI IT-Grundschutz (côté allemand) dans les pipelines CI/CD, analyse de code en continu (Semgrep, SonarQube), gestion des secrets multi-cloud et documentation de sécurité bilingue. Nos consultants maîtrisent les deux référentiels réglementaires.",
        },
        {
          q: "Hébergement données de santé HDS pour le CHU de Strasbourg sur le cloud : quelles exigences ?",
          a: "Le CHU de Strasbourg et les établissements de santé alsaciens hébergeant des données patients sur AWS ou Azure doivent utiliser un hébergeur certifié HDS, restreindre les données aux régions françaises, mettre en place un chiffrement AES-256 au repos et TLS 1.2+ en transit, assurer la traçabilité complète des accès aux dossiers médicaux, et signer une convention HDS avec l'hébergeur. CloudSecure réalise des audits HDS cloud Strasbourg pour les hôpitaux et cliniques alsaciens, accompagne la mise en conformité technique et forme les équipes DSI hospitalières.",
        },
        {
          q: "CloudSecure intervient-il à Strasbourg et dans tout le Grand Est ?",
          a: "CloudSecure intervient à Strasbourg, Schiltigheim, Illkirch, Haguenau et dans tout le Grand Est incluant Colmar, Mulhouse, Metz, Nancy, Reims, Troyes et Belfort. Nous couvrons également les entreprises transfrontalières en Allemagne (Kehl, Freiburg) et au Luxembourg pour les missions multi-pays. Les audits cloud techniques se déroulent à distance, avec des interventions sur site à Strasbourg pour les ateliers, formations et missions de RSSI cloud externalisé Strasbourg.",
        },
      ],
    }}
  />
);

export default SecuriteCloudStrasbourg;
