import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMarseille = () => (
  <CityLandingPage
    data={{
      city: "Marseille",
      citySlug: "marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13000",
      intro: "CloudSecure accompagne les entreprises marseillaises dans la sécurisation de leurs environnements cloud AWS, Azure et GCP. Logistique, tourisme, santé et tech : nos experts protègent les données de vos workloads cloud à Marseille et en PACA.",
      localContext: "Marseille et la région PACA accélèrent leur transformation numérique avec la migration vers le cloud des acteurs portuaires, logistiques, touristiques et sanitaires. L'Euroméditerranée et le French Tech Aix-Marseille concentrent des startups en forte croissance qui misent sur le cloud-native pour leur infrastructure.",
      sectors: [
        "Logistique et port (cloud hybride)",
        "Tourisme et hôtellerie",
        "Santé et HDS (AP-HM)",
        "Startups French Tech Aix-Marseille",
        "Agroalimentaire et industrie",
        "Services publics et collectivités",
      ],
      neighborhoods: [
        "Marseille Centre et Euroméditerranée",
        "Aix-en-Provence et technopôle",
        "Vitrolles et Marignane",
        "Toulon, Avignon",
        "Nice, Cannes (PACA Est)",
        "Toute la région PACA",
      ],
      faq: [
        {
          q: "Quels sont les risques cloud pour les entreprises logistiques à Marseille ?",
          a: "Les entreprises logistiques exposent leurs WMS, TMS et plateformes EDI sur le cloud, créant des risques d'interruption et de vol de données. Nous auditons ces architectures cloud et renforçons leur résilience face aux cyberattaques.",
        },
        {
          q: "Comment protéger les données clients d'un hôtel sur le cloud ?",
          a: "Les hôtels stockent des données bancaires (PCI DSS) et personnelles dans leurs PMS cloud. Nous auditons la configuration de votre hébergeur cloud (AWS, Azure) et vérifions la conformité PCI DSS et RGPD de vos systèmes hôteliers.",
        },
        {
          q: "Intervenez-vous à Marseille et en PACA pour des missions cloud ?",
          a: "Oui. Nous couvrons Marseille, Aix-en-Provence, Toulon, Avignon, Nice et toute la région PACA. La plupart de nos missions cloud se déroulent à distance, mais nous pouvons intervenir sur site pour les ateliers et formations.",
        },
        {
          q: "Que couvre un audit cloud pour une startup marseillaise ?",
          a: "Notre audit cloud startup couvre : inventaire des ressources cloud, review de la configuration IAM, audit des buckets S3/Blob Storage, analyse des réseaux (VPC/VNet), revue des secrets et clés API, et conformité RGPD. Livraison sous 5 jours.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMarseille;
