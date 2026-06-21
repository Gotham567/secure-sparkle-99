import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudArras = () => (
  <CityLandingPage
    data={{
      city: "Arras",
      citySlug: "arras",
      region: "Hauts-de-France",
      postalCode: "62000",
      intro: "CloudSecure accompagne les entreprises et startups de Arras dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Hauts-de-France.",
      localContext: "Arras (Pas-de-Calais) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Hauts-de-France à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Arras avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Arras",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Arras",
        "Département Pas-de-Calais",
        "Hauts-de-France",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Arras ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Arras et dans toute la région Hauts-de-France. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Arras ?",
          a: "Un audit cloud pour une entreprise de Arras démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Arras en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Arras en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Arras ?",
          a: "Les entreprises de Arras dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudArras;
