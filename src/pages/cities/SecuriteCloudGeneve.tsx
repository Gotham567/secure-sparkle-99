import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudGeneve = () => (
  <CityLandingPage
    data={{
      city: "Genève",
      citySlug: "geneve",
      region: "Suisse — Suisse romande",
      postalCode: "1200",
      intro: "CloudSecure accompagne les entreprises et organisations de Genève dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Suisse romande.",
      localContext: "Genève est un pôle économique majeur de Suisse romande. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : LPD (Loi sur la Protection des Données) révisée et recommandations OFCS. CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Genève en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Genève",
        "Canton de Genève",
        "Suisse romande",
        "Suisse francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Genève pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Genève et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Suisse romande. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Genève ?",
          a: "À Genève, les principales obligations sont : LPD (Loi sur la Protection des Données) révisée et recommandations OFCS. CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Suisse, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Genève ?",
          a: "Un audit cloud pour une entreprise de Genève démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudGeneve;
