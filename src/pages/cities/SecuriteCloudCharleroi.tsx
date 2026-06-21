import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCharleroi = () => (
  <CityLandingPage
    data={{
      city: "Charleroi",
      citySlug: "charleroi",
      region: "Belgique — Wallonie",
      postalCode: "6000",
      intro: "CloudSecure accompagne les entreprises et organisations de Charleroi dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Wallonie.",
      localContext: "Charleroi est un pôle économique majeur de Wallonie. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : NIS2 (directive européenne transposée en droit belge). CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Charleroi en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Charleroi",
        "Province de Hainaut",
        "Wallonie",
        "Belgique francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Charleroi pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Charleroi et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Wallonie. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Charleroi ?",
          a: "À Charleroi, les principales obligations sont : NIS2 (directive européenne transposée en droit belge). CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Belgique, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Charleroi ?",
          a: "Un audit cloud pour une entreprise de Charleroi démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCharleroi;
