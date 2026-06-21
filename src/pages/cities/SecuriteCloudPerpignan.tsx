import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPerpignan = () => (
  <CityLandingPage
    data={{
      city: "Perpignan",
      citySlug: "perpignan",
      region: "Occitanie",
      postalCode: "66000",
      intro: "CloudSecure accompagne les entreprises et startups de Perpignan dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Occitanie.",
      localContext: "Perpignan (Pyrénées-Orientales) constitue un bassin économique dynamique avec des entreprises industrielles, des PME du tertiaire et un tissu de startups en développement. La migration vers le cloud accélère les besoins en sécurité des données et en conformité réglementaire. Les entreprises de Occitanie font face à des menaces croissantes : phishing, ransomware, attaques sur les API cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Perpignan",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Perpignan",
        "Département Pyrénées-Orientales",
        "Occitanie",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Perpignan ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Perpignan et dans toute la région Occitanie. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Perpignan ?",
          a: "Un audit cloud pour une entreprise de Perpignan démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Perpignan en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Perpignan en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Perpignan ?",
          a: "Les entreprises de Perpignan dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPerpignan;
