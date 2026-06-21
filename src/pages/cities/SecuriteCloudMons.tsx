import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMons = () => (
  <CityLandingPage
    data={{
      city: "Mons",
      citySlug: "mons",
      region: "Belgique — Wallonie",
      postalCode: "7000",
      intro: "CloudSecure accompagne les entreprises et organisations de Mons dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Wallonie.",
      localContext: "Mons est un pôle économique majeur de Wallonie. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : NIS2 (directive européenne transposée en droit belge). CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Mons en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Mons",
        "Province de Hainaut",
        "Wallonie",
        "Belgique francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Mons pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Mons et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Wallonie. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Mons ?",
          a: "À Mons, les principales obligations sont : NIS2 (directive européenne transposée en droit belge). CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Belgique, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Mons ?",
          a: "Un audit cloud pour une entreprise de Mons démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMons;
