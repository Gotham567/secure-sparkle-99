import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudSherbrooke = () => (
  <CityLandingPage
    data={{
      city: "Sherbrooke",
      citySlug: "sherbrooke",
      region: "Canada — Québec",
      postalCode: "J1H",
      intro: "CloudSecure accompagne les entreprises et organisations de Sherbrooke dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Québec.",
      localContext: "Sherbrooke est un pôle économique majeur de Québec. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Sherbrooke en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Sherbrooke",
        "Estrie",
        "Québec",
        "Canada francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Sherbrooke pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Sherbrooke et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Québec. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Sherbrooke ?",
          a: "À Sherbrooke, les principales obligations sont : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Canada, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Sherbrooke ?",
          a: "Un audit cloud pour une entreprise de Sherbrooke démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudSherbrooke;
