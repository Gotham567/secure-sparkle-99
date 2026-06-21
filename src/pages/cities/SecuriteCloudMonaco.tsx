import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMonaco = () => (
  <CityLandingPage
    data={{
      city: "Monaco",
      citySlug: "monaco",
      region: "Monaco — Principauté de Monaco",
      postalCode: "98000",
      intro: "CloudSecure accompagne les entreprises et organisations de Monaco dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Principauté de Monaco.",
      localContext: "Monaco est un pôle économique majeur de Principauté de Monaco. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Monaco en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Monaco",
        "Monaco",
        "Principauté de Monaco",
        "Monaco francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Monaco pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Monaco et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Principauté de Monaco. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Monaco ?",
          a: "À Monaco, les principales obligations sont : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Monaco, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Monaco ?",
          a: "Un audit cloud pour une entreprise de Monaco démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMonaco;
