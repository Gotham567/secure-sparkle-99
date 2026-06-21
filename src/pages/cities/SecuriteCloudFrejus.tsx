import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudFrejus = () => (
  <CityLandingPage
    data={{
      city: "Fréjus",
      citySlug: "frejus",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83600",
      intro: "CloudSecure accompagne les entreprises et startups de Fréjus dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Provence-Alpes-Côte d'Azur.",
      localContext: "Fréjus (Var) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Provence-Alpes-Côte d'Azur à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Fréjus avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Fréjus",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Fréjus",
        "Département Var",
        "Provence-Alpes-Côte d'Azur",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Fréjus ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Fréjus et dans toute la région Provence-Alpes-Côte d'Azur. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Fréjus ?",
          a: "Un audit cloud pour une entreprise de Fréjus démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Fréjus en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Fréjus en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Fréjus ?",
          a: "Les entreprises de Fréjus dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudFrejus;
