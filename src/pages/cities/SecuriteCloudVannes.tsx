import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudVannes = () => (
  <CityLandingPage
    data={{
      city: "Vannes",
      citySlug: "vannes",
      region: "Bretagne",
      postalCode: "56000",
      intro: "CloudSecure accompagne les entreprises et startups de Vannes dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Bretagne.",
      localContext: "Vannes (Morbihan) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Bretagne à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Vannes avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Vannes",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Vannes",
        "Département Morbihan",
        "Bretagne",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Vannes ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Vannes et dans toute la région Bretagne. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Vannes ?",
          a: "Un audit cloud pour une entreprise de Vannes démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Vannes en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Vannes en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Vannes ?",
          a: "Les entreprises de Vannes dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudVannes;
