import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudEvreux = () => (
  <CityLandingPage
    data={{
      city: "Évreux",
      citySlug: "evreux",
      region: "Normandie",
      postalCode: "27000",
      intro: "CloudSecure accompagne les entreprises et startups de Évreux dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Normandie.",
      localContext: "Évreux (Eure) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Normandie à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Évreux avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Évreux",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Évreux",
        "Département Eure",
        "Normandie",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Évreux ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Évreux et dans toute la région Normandie. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Évreux ?",
          a: "Un audit cloud pour une entreprise de Évreux démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Évreux en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Évreux en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Évreux ?",
          a: "Les entreprises de Évreux dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudEvreux;
