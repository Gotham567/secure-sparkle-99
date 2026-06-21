import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCalais = () => (
  <CityLandingPage
    data={{
      city: "Calais",
      citySlug: "calais",
      region: "Hauts-de-France",
      postalCode: "62100",
      intro: "CloudSecure accompagne les entreprises et startups de Calais dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Hauts-de-France.",
      localContext: "Calais (Pas-de-Calais) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Hauts-de-France à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Calais avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Calais",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Calais",
        "Département Pas-de-Calais",
        "Hauts-de-France",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Calais ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Calais et dans toute la région Hauts-de-France. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Calais ?",
          a: "Un audit cloud pour une entreprise de Calais démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Calais en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Calais en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Calais ?",
          a: "Les entreprises de Calais dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCalais;
