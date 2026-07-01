import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNancy = () => (
  <CityLandingPage
    data={{
      city: "Nancy",
      citySlug: "nancy",
      region: "Grand Est",
      postalCode: "54000",
      intro: "CloudSecure accompagne les industriels lorrains, établissements de santé et PME de Nancy dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Nancy, sécurité cloud Azure Nancy et RSSI cloud externalisé Nancy pour les ETI industrielles en migration cloud hybride. Nos experts en sécurisation infrastructure cloud Nancy protègent les données industrielles, médicales et universitaires de la métropole du Grand Nancy.",
      localContext: "Nancy est le principal pôle universitaire et industriel lorrain avec une présence forte dans l'industrie de précision, la métallurgie et les sciences des matériaux — des secteurs qui migrent vers le cloud hybride (ERP SAP on Azure, supervision OT connectée) avec des besoins croissants en sécurité cloud. Le CHU de Nancy, l'un des plus grands hôpitaux universitaires du quart Nord-Est de la France, opère des systèmes d'information médicaux sur cloud avec des exigences HDS et RGPD strictes — une priorité suite aux cyberattaques hospitalières récentes. Les universités de Lorraine (Université de Lorraine, INPL, ENSEM) opèrent des environnements cloud d'enseignement et de recherche (Microsoft 365, AWS) avec des milliers d'utilisateurs dont les données nécessitent une protection rigoureuse. Les PME nancéiennes dans les services, le commerce et l'industrie légère adoptent progressivement des SaaS cloud sans expertise interne en sécurité.",
      sectors: [
        "Industrie lorraine de précision (ERP cloud, cloud hybride ETI)",
        "Santé et CHU (HDS cloud, données patients, urgences numériques)",
        "Enseignement supérieur et recherche (cloud éducatif, Microsoft 365)",
        "PME tertiaire et services (SaaS cloud, RGPD)",
        "Agroalimentaire et agrotech (ERP cloud, traçabilité)",
        "Collectivités Métropole du Grand Nancy (cloud souverain)",
      ],
      neighborhoods: [
        "Nancy Centre et Vieille-Ville — sièges et services",
        "Vandœuvre-lès-Nancy — CHU et sciences",
        "Maxéville et Laxou — industrie et PME",
        "Essey-lès-Nancy — parcs d'entreprises",
        "Pont-à-Mousson et Lunéville — industrie lorraine",
        "Épinal, Bar-le-Duc — PME régionales",
      ],
      faq: [
        {
          q: "Combien coûte un audit Azure pour une ETI industrielle à Nancy ?",
          a: "Un audit Azure pour une ETI industrielle nancéienne (couvrant Azure AD, NSG, Microsoft Defender for Cloud, intégrations OT/IT, politiques de chiffrement et conformité CIS Benchmark Azure) est facturé entre 4 500 et 10 000 euros HT selon la complexité de l'architecture hybride et le nombre de sites interconnectés. CloudSecure inclut une revue des connexions on-premise/Azure (ExpressRoute ou VPN), souvent insuffisamment sécurisées dans les ETI industrielles lorraines. Livraison du rapport avec plan de remédiation sous 7 jours.",
        },
        {
          q: "Comment sécuriser les données de santé du CHU de Nancy sur le cloud en conformité HDS ?",
          a: "La sécurisation des données du CHU de Nancy sur le cloud exige l'utilisation d'un hébergeur certifié HDS, une architecture multi-couches de protection des données patients (chiffrement AES-256 au repos, TLS 1.2+ en transit, gestion des clés KMS dédiées), une traçabilité exhaustive des accès médicaux et une gouvernance des identités stricte (MFA pour tous les praticiens, PIM pour les administrateurs). CloudSecure réalise des audits HDS cloud Nancy adaptés aux contraintes des établissements hospitaliers publics, incluant la gestion des risques résiduels et les plans de réponse aux incidents.",
        },
        {
          q: "DevSecOps Nancy : accompagnez-vous les PME tech lorraines ?",
          a: "Oui, CloudSecure accompagne les PME tech et startups nancéiennes dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube), gérons les secrets (HashiCorp Vault, AWS Secrets Manager) et formons les équipes ingénierie aux pratiques secure by design. Pour les PME avec des ressources IT limitées, nous proposons des missions de RSSI cloud externalisé Nancy à temps partiel.",
        },
        {
          q: "Conformité NIS2 cloud pour les PME industrielles de Nancy : comment se préparer ?",
          a: "Les PME industrielles nancéiennes des secteurs de la fabrication, de la distribution ou des services numériques dépassant 50 salariés sont potentiellement soumises à NIS2. CloudSecure réalise un diagnostic NIS2 cloud Nancy gratuit pour qualifier votre statut, puis un audit complet des mesures de sécurité existantes et un plan de mise en conformité priorisé. Les obligations portent sur la politique de sécurité cloud documentée, la gestion des incidents avec notification ANSSI, la sécurité des prestataires cloud et les tests de pénétration annuels.",
        },
        {
          q: "CloudSecure intervient-il à Nancy et dans toute la Lorraine ?",
          a: "CloudSecure intervient à Nancy, Vandœuvre-lès-Nancy, Maxéville, Laxou et dans toute la Lorraine incluant Metz, Épinal, Thionville, Pont-à-Mousson et Lunéville. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Nancy pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Nancy. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNancy;
