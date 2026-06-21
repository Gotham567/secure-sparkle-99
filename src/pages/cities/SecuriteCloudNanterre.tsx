import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNanterre = () => (
  <CityLandingPage
    data={{
      city: "Nanterre",
      citySlug: "nanterre",
      region: "Île-de-France",
      postalCode: "92000",
      intro: "CloudSecure accompagne les entreprises et startups de Nanterre dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Île-de-France.",
      localContext: "Nanterre (Hauts-de-Seine) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Île-de-France à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Nanterre avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Nanterre",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Nanterre",
        "Département Hauts-de-Seine",
        "Île-de-France",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Nanterre ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Nanterre et dans toute la région Île-de-France. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Nanterre ?",
          a: "Un audit cloud pour une entreprise de Nanterre démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Nanterre en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Nanterre en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Nanterre ?",
          a: "Les entreprises de Nanterre dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNanterre;
