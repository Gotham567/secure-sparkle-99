import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudDunkerque = () => (
  <CityLandingPage
    data={{
      city: "Dunkerque",
      citySlug: "dunkerque",
      region: "Hauts-de-France",
      postalCode: "59140",
      intro: "CloudSecure accompagne les entreprises et startups de Dunkerque dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Hauts-de-France.",
      localContext: "Dunkerque (Nord) constitue un bassin économique dynamique avec des entreprises industrielles, des PME du tertiaire et un tissu de startups en développement. La migration vers le cloud accélère les besoins en sécurité des données et en conformité réglementaire. Les entreprises de Hauts-de-France font face à des menaces croissantes : phishing, ransomware, attaques sur les API cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Dunkerque",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Dunkerque",
        "Département Nord",
        "Hauts-de-France",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Dunkerque ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Dunkerque et dans toute la région Hauts-de-France. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Dunkerque ?",
          a: "Un audit cloud pour une entreprise de Dunkerque démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Dunkerque en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Dunkerque en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Dunkerque ?",
          a: "Les entreprises de Dunkerque dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudDunkerque;
