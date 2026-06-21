import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLuxembourg = () => (
  <CityLandingPage
    data={{
      city: "Luxembourg",
      citySlug: "luxembourg",
      region: "Luxembourg — Grand-Duché de Luxembourg",
      postalCode: "1009",
      intro: "CloudSecure accompagne les entreprises et organisations de Luxembourg dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité réglementaire pour les entreprises francophones de Grand-Duché de Luxembourg.",
      localContext: "Luxembourg est un pôle économique majeur de Grand-Duché de Luxembourg. Les entreprises locales font face à des cybermenaces croissantes et des obligations réglementaires renforcées : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CloudSecure, cabinet français expert en cybersécurité cloud, intervient à Luxembourg en présentiel et à distance pour sécuriser vos environnements cloud et vous accompagner vers la conformité.",
      sectors: [
        "Institutions financières et banques",
        "Cabinets d'avocats et fiduciaires",
        "Industrie et manufacture",
        "Santé et cliniques privées",
        "Organismes publics et administrations",
        "Startups et scale-ups tech",
      ],
      neighborhoods: [
        "Centre de Luxembourg",
        "Luxembourg-Ville",
        "Grand-Duché de Luxembourg",
        "Luxembourg francophone",
        "Intervention en présentiel et à distance",
        "Toute l'Europe et le Québec",
      ],
      faq: [
        {
          q: "Intervenez-vous à Luxembourg pour des audits cloud ?",
          a: "Oui. Nos consultants se déplacent à Luxembourg et interviennent également à distance. Nous réalisons des audits cloud AWS, Azure et GCP pour les entreprises de Grand-Duché de Luxembourg. Devis gratuit sous 24h.",
        },
        {
          q: "Quelles réglementations cybersécurité s'appliquent à Luxembourg ?",
          a: "À Luxembourg, les principales obligations sont : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CloudSecure vous accompagne dans le diagnostic d'éligibilité et la mise en conformité complète.",
        },
        {
          q: "Proposez-vous vos services en dehors de la France ?",
          a: "Oui. CloudSecure accompagne les entreprises francophones en Luxembourg, en Belgique, en Suisse, au Luxembourg et au Québec. Nos audits cloud et missions de conformité sont réalisés en français, en présentiel ou à distance.",
        },
        {
          q: "Combien coûte un audit cloud à Luxembourg ?",
          a: "Un audit cloud pour une entreprise de Luxembourg démarre à 3 500 € HT (ou équivalent en francs suisses ou dollars canadiens selon la localisation). Nous livrons un rapport complet avec plan de remédiation sous 7 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLuxembourg;
