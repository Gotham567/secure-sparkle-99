import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CloudSecure accompagne les entreprises aéronautiques, spatiales et tech de Toulouse dans la sécurisation de leurs infrastructures cloud. AWS, Azure et GCP pour l'industrie de pointe : nos experts protègent la propriété intellectuelle des entreprises toulousaines.",
      localContext: "Toulouse est la capitale mondiale de l'aéronautique (Airbus, Thales, Safran, CNES) et un hub deeptech majeur. Ces acteurs industriels migrent vers le cloud hybride pour leurs applications PLM, ERP, simulations et collaboration inter-sites. La protection des données sensibles de conception dans le cloud est un enjeu critique face au cyberespionnage industriel.",
      sectors: [
        "Aéronautique et spatial (cloud hybride)",
        "Défense et systèmes embarqués",
        "Recherche et simulation (HPC cloud)",
        "Santé et biotech (CHU cloud)",
        "Startups deeptech",
        "Sous-traitants aéronautiques",
      ],
      neighborhoods: [
        "Toulouse Blagnac et Colomiers",
        "Labège et Innopole",
        "Toulouse Métropole Centre",
        "Montauban, Tarbes, Albi",
        "Castres, Muret",
        "Toute la région Occitanie",
      ],
      faq: [
        {
          q: "Comment sécuriser les données de conception Airbus dans le cloud ?",
          a: "Les données de conception aéronautique nécessitent une architecture cloud souveraine ou une stratégie de chiffrement end-to-end. Nous évaluons les options (cloud souverain français, HSM, accès conditionnel géographique) adaptées aux exigences de vos clients grands comptes.",
        },
        {
          q: "AWS GovCloud est-il adapté aux entreprises de défense toulousaines ?",
          a: "AWS GovCloud US est adapté aux exigences américaines ITAR/EAR, mais pour les entreprises françaises de défense, des solutions comme AWS Paris avec chiffrement souverain ou des clouds souverains certifiés SecNumCloud (OVHcloud, S3NS) sont souvent préférables.",
        },
        {
          q: "Intervenez-vous à Toulouse pour des audits cloud ?",
          a: "Oui. Nous intervenons à Toulouse, Blagnac, Labège et dans toute la région Occitanie. Nos missions cloud se déroulent majoritairement à distance, avec des ateliers sur site si nécessaire.",
        },
        {
          q: "Proposez-vous des missions DevSecOps pour les startups toulousaines ?",
          a: "Oui. Nous accompagnons les startups toulousaines dans la mise en place du DevSecOps : sécurité des pipelines CI/CD (GitLab, GitHub Actions), scanning d'images Docker, gestion des secrets (Vault, AWS Secrets Manager) et monitoring de sécurité cloud-native.",
        },
      ],
    }}
  />
);

export default SecuriteCloudToulouse;
