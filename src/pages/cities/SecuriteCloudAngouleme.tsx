import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAngouleme = () => (
  <CityLandingPage
    data={{
      city: "Angoulême",
      citySlug: "angouleme",
      region: "Nouvelle-Aquitaine",
      postalCode: "16000",
      intro: "CloudSecure accompagne les entreprises et startups de Angoulême dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Nouvelle-Aquitaine.",
      localContext: "Angoulême (Charente) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Nouvelle-Aquitaine à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Angoulême avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Angoulême",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Angoulême",
        "Département Charente",
        "Nouvelle-Aquitaine",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Angoulême ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Angoulême et dans toute la région Nouvelle-Aquitaine. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Angoulême ?",
          a: "Un audit cloud pour une entreprise de Angoulême démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Angoulême en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Angoulême en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Angoulême ?",
          a: "Les entreprises de Angoulême dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAngouleme;
