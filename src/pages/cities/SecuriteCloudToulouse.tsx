import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CloudSecure accompagne les industriels aéronautiques, spatiaux et startups cloud-native de Toulouse dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit GCP Toulouse, pentest cloud Toulouse entreprise et DevSecOps Toulouse pour les acteurs de la filière aérospatiale et de la deeptech occitane. Nos experts en sécurisation infrastructure cloud Toulouse protègent la propriété intellectuelle sensible d'Airbus, du CNES et de leurs sous-traitants contre le cyberespionnage industriel.",
      localContext: "Toulouse est la capitale mondiale de l'aéronautique civile avec Airbus, Thales Alenia Space, Safran et le CNES qui pilotent des architectures cloud hybride pour leurs applications PLM, simulations numériques et collaborations inter-sites internationales — des environnements à très haute sensibilité que CloudSecure audite avec une expertise en données à diffusion restreinte. Le CNES exige une souveraineté numérique totale pour ses données spatiales et opère des workloads sur cloud souverain français (OVHcloud, Outscale), un domaine que CloudSecure maîtrise. L'écosystème de startups cloud-native toulousaines (Innovatech, Aerospace Valley) développe des applications SaaS aéronautiques sur AWS et GCP qui nécessitent une intégration DevSecOps rigoureuse dès les phases de développement. Les CHU et cliniques toulousaines migrent progressivement leurs applications de santé vers le cloud en conformité HDS, sous l'impulsion du GHT Haute-Garonne.",
      sectors: [
        "Aéronautique et spatial (cloud hybride, PLM, données classifiées)",
        "Défense et systèmes embarqués (cloud souverain)",
        "Startups SaaS cloud-native Aerospace Valley",
        "Santé et CHU (HDS cloud, données patients)",
        "Recherche et simulation HPC cloud (CNES, ONERA)",
        "Sous-traitants aéronautiques (Tier 1 et 2)",
      ],
      neighborhoods: [
        "Blagnac — Airbus, Safran et industrie aéro",
        "Labège et Innopole — tech et startups",
        "Toulouse Métropole Centre — ESN et conseil",
        "Colomiers — sous-traitants et industrie",
        "Rangueil et Basso Cambo — recherche et CHU",
        "Montaudran Aerospace — campus innovation",
      ],
      faq: [
        {
          q: "Combien coûte un audit GCP pour une startup SaaS aéronautique à Toulouse ?",
          a: "Un audit GCP pour une startup aéronautique toulousaine (couvrant GCP IAM, Cloud Storage, GKE, Artifact Registry, Cloud Build et conformité CIS GCP) est facturé entre 4 500 et 9 000 euros HT selon le nombre de projets GCP et la complexité de l'architecture. CloudSecure ajoute une revue spécifique des contrôles d'accès aux données de conception et de la conformité CMMC pour les startups travaillant avec des donneurs d'ordres américains. Le rapport identifie les risques d'exfiltration de propriété intellectuelle et les vecteurs d'attaque sur les pipelines CI/CD.",
        },
        {
          q: "Comment sécuriser les données de conception Airbus et CNES dans le cloud à Toulouse ?",
          a: "Les données de conception aéronautique et spatiale nécessitent une stratégie combinant cloud souverain français (OVHcloud SecNumCloud, Outscale) pour les données les plus sensibles, et un chiffrement end-to-end avec clés HSM pour les workloads sur cloud public (AWS, Azure). CloudSecure évalue les options adaptées à chaque catégorie de données (DR, EU Restricted, IGC/RGS) et implémente les contrôles d'accès conditionnel géographique, la journalisation exhaustive et la DLP pour prévenir les fuites. Nous accompagnons également la qualification PASSI pour les audits de sécurité des systèmes d'information sensibles.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les startups cloud-native de Toulouse ?",
          a: "Oui, CloudSecure accompagne les startups toulousaines d'Aerospace Valley et d'Innovatech dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD (GitHub Actions, GitLab CI, Jenkins), sécurisons les images Docker hébergées sur ECR ou GCR, déployons des outils SAST (Semgrep, Checkmarx), gérons les secrets via HashiCorp Vault et implémentons le monitoring de sécurité cloud-native. Nous proposons également des formations DevSecOps pour les équipes d'ingénierie toulousaines.",
        },
        {
          q: "Quelles exigences de cloud souverain pour les entreprises de défense à Toulouse ?",
          a: "Les entreprises toulousaines de la défense (Thales, Safran, MBDA et leurs sous-traitants) traitant des données classifiées ou à diffusion restreinte doivent recourir à des solutions de cloud souverain qualifiées SecNumCloud par l'ANSSI — notamment OVHcloud SecNumCloud ou Outscale (Dassault Systèmes). CloudSecure accompagne ces entreprises dans la qualification de leurs architectures cloud souverain, la mise en conformité avec les exigences ANSSI et la rédaction des dossiers de sécurité pour les systèmes d'information sensibles. Pour les données non classifiées, une stratégie de chiffrement souverain sur AWS ou Azure peut être suffisante.",
        },
        {
          q: "Intervenez-vous à Toulouse et dans toute la région Occitanie ?",
          a: "CloudSecure intervient à Toulouse, Blagnac, Labège, Colomiers et dans toute la région Occitanie, incluant Montpellier, Tarbes, Albi, Castres et Nîmes. Les audits cloud techniques se déroulent à distance pour un démarrage rapide, avec des interventions sur site à Toulouse pour les ateliers de restitution, les formations d'équipes et les missions de RSSI cloud externalisé Toulouse. Nous disposons d'experts en sécurité aéronautique et spatiale capables d'intervenir en présentiel dans les zones sécurisées des industriels de la défense.",
        },
      ],
    }}
  />
);

export default SecuriteCloudToulouse;
