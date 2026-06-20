import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudParis = () => (
  <CityLandingPage
    data={{
      city: "Paris",
      citySlug: "paris",
      region: "Île-de-France",
      postalCode: "75000",
      intro: "CloudSecure accompagne les startups, fintech et grandes entreprises parisiennes dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises d'Île-de-France.",
      localContext: "Paris concentre l'essentiel de l'écosystème tech français : fintech, e-commerce, SaaS B2B, médias numériques et grandes entreprises qui ont massivement migré vers le cloud. La Station F, les incubateurs et accélérateurs parisiens génèrent des centaines de startups qui hébergent des données sensibles sur AWS, Azure ou GCP sans toujours en maîtriser les risques.",
      sectors: [
        "Fintech et néobanques",
        "E-commerce et marketplaces",
        "SaaS B2B et éditeurs logiciels",
        "Médias et plateformes numériques",
        "Assurance et services financiers",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Paris 2e (Sentier numérique)",
        "Paris 10e et 11e (startups)",
        "La Défense et Neuilly-sur-Seine",
        "Saint-Denis et Paris Nord",
        "Boulogne, Levallois, Issy",
        "Toute l'Île-de-France",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité AWS à Paris ?",
          a: "Un audit AWS complet (IAM, S3, EC2, réseau, conformité CIS) pour une startup parisienne démarre à 3 500 euros HT. Nous livrons un rapport avec les findings priorisés et un plan de remédiation sous 5 jours.",
        },
        {
          q: "Comment sécuriser un environnement multi-cloud à Paris ?",
          a: "La sécurité multi-cloud (AWS + Azure ou GCP) nécessite une stratégie unifiée : gestion centralisée des identités (IAM), chiffrement cohérent, monitoring unifié (SIEM cloud-native). Nous réalisons des audits multi-cloud et implémentons les mesures de sécurité.",
        },
        {
          q: "Intervenez-vous à Paris pour des missions DevSecOps ?",
          a: "Oui. Nous intervenons en régie ou au forfait à Paris et en Île-de-France pour intégrer la sécurité dans vos pipelines CI/CD (GitLab, GitHub Actions), déployer des outils SAST/DAST et former vos équipes DevOps.",
        },
        {
          q: "Quelles certifications cloud obtenez-vous après votre audit ?",
          a: "Notre audit prépare votre conformité ISO 27001 (cloud), SOC 2 Type II, HDS (hébergement données de santé) et NIS2. Nous vous accompagnons jusqu'à l'obtention de la certification avec les organismes accrédités.",
        },
      ],
    }}
  />
);

export default SecuriteCloudParis;
