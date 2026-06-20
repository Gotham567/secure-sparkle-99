import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CloudSecure accompagne les entreprises nantaises dans la sécurisation de leurs environnements cloud AWS, Azure et GCP. Industrie, numérique, santé et agroalimentaire : nos experts protègent les workloads cloud des ETI et startups de Nantes et des Pays de la Loire.",
      localContext: "Nantes est l'une des métropoles françaises les plus dynamiques avec un French Tech actif, des ETI industrielles en pleine digitalisation et un secteur agroalimentaire qui intègre les solutions cloud pour sa supply chain. La métropole nantaise concentre des entreprises aux profils variés qui ont migré vers AWS, Azure ou OVH sans toujours avoir sécurisé leurs configurations.",
      sectors: [
        "Numérique et SaaS (French Tech Nantes)",
        "Industrie et manufacturing (cloud hybride)",
        "Agroalimentaire et supply chain",
        "Santé et HDS",
        "Naval et défense",
        "E-commerce et retail",
      ],
      neighborhoods: [
        "Nantes Centre et Île de Nantes",
        "Saint-Nazaire et estuaire",
        "Rezé, Carquefou, Saint-Herblain",
        "La Roche-sur-Yon, Le Mans",
        "Angers, Cholet",
        "Toute la région Pays de la Loire",
      ],
      faq: [
        {
          q: "Quels sont les risques cloud pour une startup SaaS nantaise ?",
          a: "Les startups SaaS exposent leurs APIs, bases de données et données clients sur le cloud. Les risques principaux sont : mauvaise configuration IAM, buckets S3 ouverts, secrets en clair, absence de WAF. Notre audit cloud startup identifie ces risques en 48h.",
        },
        {
          q: "Comment sécuriser Microsoft Azure pour une ETI industrielle nantaise ?",
          a: "La sécurisation Azure pour une ETI industrielle inclut : audit Azure AD, revue du Network Security Groups, activation de Microsoft Defender for Cloud, configuration du monitoring (Azure Sentinel) et mise en conformité NIS2. Budget : 4 000 à 8 000 euros HT.",
        },
        {
          q: "Intervenez-vous à Nantes et dans les Pays de la Loire ?",
          a: "Oui. Nous couvrons Nantes, Saint-Nazaire, Angers, La Roche-sur-Yon, Le Mans et toute la région Pays de la Loire. Nos missions cloud sont principalement réalisées à distance.",
        },
        {
          q: "Avez-vous une expertise GCP pour les startups nantaises ?",
          a: "Oui. Nous sommes experts en sécurité Google Cloud Platform : audit des organisations GCP, revue des IAM policies, sécurité GKE (Kubernetes), configuration Cloud Armor et conformité PCI DSS / RGPD pour les startups natives GCP.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNantes;
