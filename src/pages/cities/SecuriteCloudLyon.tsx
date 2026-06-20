import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLyon = () => (
  <CityLandingPage
    data={{
      city: "Lyon",
      citySlug: "lyon",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69000",
      intro: "CloudSecure accompagne les entreprises lyonnaises dans la sécurisation de leurs infrastructures cloud. Industrie, santé, finance et numérique : nos experts auditent vos environnements AWS, Azure et GCP à Lyon et dans toute la région Auvergne-Rhône-Alpes.",
      localContext: "Lyon est le deuxième hub économique français avec un tissu industriel qui migre massivement vers le cloud hybride (industrie 4.0, ERP cloud, OT connecté). Les ETI pharmaceutiques, financières et industrielles lyonnaises cherchent à sécuriser leurs données dans le cloud tout en respectant les exigences de souveraineté numérique.",
      sectors: [
        "Industrie et ETI (cloud hybride)",
        "Pharmacie et biosciences",
        "Finance et banque (Crédit Agricole)",
        "Santé et HDS (CHU, cliniques)",
        "ESN et intégrateurs cloud",
        "Startups deeptech",
      ],
      neighborhoods: [
        "Lyon Part-Dieu et Confluence",
        "Villeurbanne et Vaulx-en-Velin",
        "Bron, Caluire, Ecully",
        "Grenoble, Chambéry, Valence",
        "Saint-Étienne et Loire",
        "Toute la région Auvergne-Rhône-Alpes",
      ],
      faq: [
        {
          q: "Comment sécuriser Azure AD pour une ETI lyonnaise en hybride ?",
          a: "La sécurisation d'Azure AD hybride passe par l'activation du MFA, la revue des permissions privilégiées (PIM), la configuration des politiques d'accès conditionnel et la synchronisation sécurisée avec l'AD on-premise. Nous réalisons cet audit en 2 à 3 jours.",
        },
        {
          q: "Les données de santé lyonnaises peuvent-elles être hébergées sur AWS ?",
          a: "Oui, sous conditions. AWS est certifié HDS (Hébergeur de Données de Santé) en France. Nous vérifions la configuration correcte des régions, du chiffrement, des logs d'accès et de la conformité RGPD pour vos workloads santé sur AWS.",
        },
        {
          q: "Intervenez-vous à Lyon pour des audits cloud ?",
          a: "Oui. Nos consultants interviennent à Lyon, Villeurbanne, Grenoble, Chambéry et dans toute la région Auvergne-Rhône-Alpes. Les audits cloud peuvent être réalisés entièrement à distance ou en combinant présentiel et remote.",
        },
        {
          q: "Quel budget pour sécuriser le cloud d'une PME lyonnaise ?",
          a: "Un audit cloud complet (AWS ou Azure) pour une PME de 20 à 100 salariés coûte entre 2 500 et 6 000 euros HT. La mise en place des mesures correctives est facturée séparément selon le périmètre d'intervention.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLyon;
