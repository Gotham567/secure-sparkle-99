import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudSaintNazaire = () => (
  <CityLandingPage
    data={{
      city: "Saint-Nazaire",
      citySlug: "saint-nazaire",
      region: "Pays de la Loire",
      postalCode: "44600",
      intro: "CloudSecure accompagne les entreprises et startups de Saint-Nazaire dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les entreprises de Pays de la Loire.",
      localContext: "Saint-Nazaire (Loire-Atlantique) est un pôle économique actif avec des PME, ETI et grands comptes dans des secteurs variés. La digitalisation accélérée et la migration cloud exposent les entreprises de Pays de la Loire à des risques croissants : phishing, ransomware, fuites de données et attaques sur les APIs cloud. CloudSecure intervient à Saint-Nazaire avec une approche adaptée à votre environnement cloud.",
      sectors: [
        "PME et ETI industrielles",
        "Services et conseil",
        "Commerce et distribution",
        "Santé et médico-social",
        "Collectivités et secteur public",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre-ville de Saint-Nazaire",
        "Zone industrielle et parcs d'activités",
        "Agglomération de Saint-Nazaire",
        "Département Loire-Atlantique",
        "Pays de la Loire",
        "Intervention sur toute la France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits cloud à Saint-Nazaire ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP) à Saint-Nazaire et dans toute la région Pays de la Loire. Nos consultants interviennent sur site ou à distance selon vos préférences. Devis gratuit en 24h.",
        },
        {
          q: "Combien coûte un audit de sécurité cloud à Saint-Nazaire ?",
          a: "Un audit cloud pour une entreprise de Saint-Nazaire démarre à 3 500 € HT selon le périmètre (AWS, Azure, multi-cloud). Nous livrons un rapport complet avec les vulnérabilités priorisées et un plan de remédiation sous 7 jours.",
        },
        {
          q: "Intervenez-vous en urgence à Saint-Nazaire en cas de cyberattaque ?",
          a: "Oui. Notre CERT intervient en moins de 4h à Saint-Nazaire en cas d'incident cyber. Nous gérons les crises ransomware, les fuites de données et les intrusions. Ligne d'urgence disponible 24/7.",
        },
        {
          q: "Quelle est l'obligation NIS2 pour les entreprises de Saint-Nazaire ?",
          a: "Les entreprises de Saint-Nazaire dépassant 50 salariés ou 10 M€ de CA dans des secteurs critiques sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit pour clarifier votre situation réglementaire.",
        },
      ],
    }}
  />
);

export default SecuriteCloudSaintNazaire;
