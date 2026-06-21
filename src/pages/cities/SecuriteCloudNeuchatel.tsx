import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNeuchatel = () => (
  <CityLandingPage
    data={{
      city: "Neuchâtel",
      citySlug: "neuchatel",
      region: "Suisse — Suisse romande",
      postalCode: "2000",
      intro: "CloudSecure accompagne les entreprises et organisations de Neuchâtel dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Suisse romande.",
      localContext: "Neuchâtel est un pôle économique majeur de Suisse romande. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : LPD révisée et recommandations OFCS. CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Neuchâtel en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Neuchâtel",
        "Canton de Neuchâtel",
        "Suisse romande",
        "Suisse francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Neuchâtel pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Neuchâtel et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Suisse romande. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Neuchâtel ?",
          a: "À Neuchâtel, les principales obligations sont : LPD révisée et recommandations OFCS. CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Suisse, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Neuchâtel ?",
          a: "Un audit cloud pour une entreprise de Neuchâtel démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNeuchatel;
