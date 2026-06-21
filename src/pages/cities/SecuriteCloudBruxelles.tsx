import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBruxelles = () => (
  <CityLandingPage
    data={{
      city: "Bruxelles",
      citySlug: "bruxelles",
      region: "Belgique — Région de Bruxelles-Capitale",
      postalCode: "1000",
      intro: "CloudSecure accompagne les entreprises et organisations de Bruxelles dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Région de Bruxelles-Capitale.",
      localContext: "Bruxelles est un pôle économique majeur de Région de Bruxelles-Capitale. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : NIS2 (directive européenne transposée en droit belge). CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Bruxelles en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Bruxelles",
        "Bruxelles",
        "Région de Bruxelles-Capitale",
        "Belgique francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Bruxelles pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Bruxelles et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Région de Bruxelles-Capitale. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Bruxelles ?",
          a: "À Bruxelles, les principales obligations sont : NIS2 (directive européenne transposée en droit belge). CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Belgique, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Bruxelles ?",
          a: "Un audit cloud pour une entreprise de Bruxelles démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBruxelles;
