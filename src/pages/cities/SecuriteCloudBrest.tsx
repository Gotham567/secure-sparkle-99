import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBrest = () => (
  <CityLandingPage
    data={{
      city: "Brest",
      citySlug: "brest",
      region: "Bretagne",
      postalCode: "29200",
      intro: "CloudSecure accompagne la Marine Nationale, les chercheurs océanographiques de l'Ifremer et les startups numériques de Brest dans la sécurisation de leurs infrastructures cloud souverain, AWS, Azure et GCP — audit sécurité AWS Brest, RSSI cloud externalisé Brest et conformité cloud souverain Brest pour les entreprises de défense et de recherche maritime. Nos experts en sécurisation infrastructure cloud Brest maîtrisent les exigences SecNumCloud pour la défense navale et la souveraineté numérique des données océanographiques.",
      localContext: "Brest est le principal port militaire de l'Atlantique avec la Marine Nationale (Préfecture Maritime, IRCGN) et Naval Group qui opèrent des systèmes d'information de défense extrêmement sensibles nécessitant un cloud souverain qualifié SecNumCloud — un domaine d'expertise clé de CloudSecure. L'Ifremer de Brest conduit des recherches océanographiques générant d'importants volumes de données scientifiques (modélisation des courants, données de pêche, changement climatique) hébergées sur des environnements HPC cloud avec des exigences d'intégrité et de disponibilité strictes. L'écosystème numérique brestois (Technopôle de Brest-Iroise, Pôle Mer Bretagne Atlantique) développe des solutions cloud pour les marchés maritime, de la défense et de l'environnement. Les PME et startups finistériennes dans la pêche connectée, la nautisme et le numérique adoptent des solutions SaaS cloud avec des besoins en sécurité croissants.",
      sectors: [
        "Marine Nationale et défense navale (cloud souverain SecNumCloud)",
        "Recherche océanographique HPC (Ifremer, CNRS — cloud calcul)",
        "Industries navales et construction (Naval Group, DCNS — données classifiées)",
        "Pêche et nautisme connecté (IoT cloud, données maritimes)",
        "Startups maritimes et numériques (Technopôle Brest-Iroise)",
        "Santé et CHU (HDS cloud, données patients Finistère)",
      ],
      neighborhoods: [
        "Brest Centre et Recouvrances — sièges et défense",
        "Technopôle Brest-Iroise — innovation et startups",
        "Guipavas et Gouesnou — industrie et logistique",
        "Naval Group Brest — construction navale",
        "Quimper et Landerneau — PME finistériennes",
        "Brest Métropole — services et université",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud souverain pour un sous-traitant de la Marine Nationale à Brest ?",
          a: "Un audit cloud souverain pour un sous-traitant de la Marine Nationale à Brest (couvrant la qualification SecNumCloud des hébergeurs utilisés, la configuration des contrôles d'accès, la gestion des habilitations et la conformité aux exigences ANSSI pour les données de défense) est facturé entre 6 000 et 14 000 euros HT selon la complexité du SI et les niveaux de classification des données traitées. CloudSecure évalue les architectures cloud souverain (OVHcloud Trusted Zone, Outscale) et accompagne la rédaction des dossiers de sécurité ANSSI. Livraison du rapport sous 7 jours.",
        },
        {
          q: "Comment sécuriser les données de recherche océanographique de l'Ifremer sur le cloud ?",
          a: "Les données de recherche océanographique de l'Ifremer sur le cloud (AWS ou GCP pour les workloads HPC non sensibles) nécessitent une architecture de comptes isolés, un chiffrement des datasets (S3 SSE-KMS ou GCS CSEK), un contrôle d'accès IAM strict pour les équipes de recherche internationales, et une politique de partage sécurisé des données avec les partenaires scientifiques (IODE, Copernicus). CloudSecure accompagne les instituts de recherche brestois dans la définition de leur politique de données cloud et l'audit de leurs architectures HPC cloud.",
        },
        {
          q: "DevSecOps Brest : accompagnez-vous les startups maritimes du Technopôle ?",
          a: "Oui, CloudSecure accompagne les startups maritimes et numériques du Technopôle Brest-Iroise dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, sécurisons les APIs IoT maritimes (AIS, capteurs embarqués), déployons des outils SAST (Semgrep) et SCA (Snyk), et formons les équipes ingénierie aux pratiques secure by design. Pour les startups développant des solutions pour la défense, nous intégrons les exigences de sécurité spécifiques au secteur.",
        },
        {
          q: "Quelles solutions cloud souveraines pour les entreprises de défense navale à Brest ?",
          a: "Les entreprises de défense navale brestoise (Naval Group, sous-traitants) traitant des données classifiées ou à diffusion restreinte doivent recourir à des clouds souverains qualifiés SecNumCloud : OVHcloud Trusted Zone ou Outscale (filiale Dassault Systèmes). CloudSecure accompagne ces entreprises dans la sélection du cloud souverain adapté à leur niveau de classification, la configuration des contrôles d'accès (habilitations, accès conditionnel géographique), la mise en conformité avec les politiques ANSSI et la rédaction des dossiers de sécurité. Pour les données non classifiées, une stratégie de chiffrement souverain sur AWS eu-west-3 peut être suffisante.",
        },
        {
          q: "CloudSecure intervient-il à Brest et dans tout le Finistère ?",
          a: "CloudSecure intervient à Brest, Guipavas, Technopôle Brest-Iroise et dans tout le Finistère incluant Quimper, Morlaix, Landerneau et Brest Métropole. Nous couvrons également le reste de la Bretagne (Rennes, Lorient, Vannes, Saint-Brieuc). Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Brest pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Brest. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBrest;
