import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CloudSecure accompagne les entreprises niçoises et de la Côte d'Azur dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Tourisme tech, santé, finance et Sophia Antipolis : nos experts protègent vos workloads cloud sur la Riviera.",
      localContext: "Nice et la Côte d'Azur concentrent des acteurs tech de premier plan (Sophia Antipolis est l'un des premiers parcs technologiques d'Europe), des entreprises fintech, des structures de santé innovantes et un tissu touristique numérisé. Ces entreprises adoptent massivement le cloud pour leurs applications, créant des enjeux de sécurité spécifiques à ce territoire.",
      sectors: [
        "Tech et startups (Sophia Antipolis)",
        "Tourisme et hôtellerie (cloud PMS)",
        "Santé et HDS (CHU de Nice)",
        "Finance et gestion de patrimoine",
        "Entreprises monégasques",
        "Médias et communication",
      ],
      neighborhoods: [
        "Nice Centre et Promenade",
        "Sophia Antipolis et Valbonne",
        "Cannes, Antibes, Juan-les-Pins",
        "Monaco et Menton",
        "Grasse, Cagnes-sur-Mer",
        "Toute la Côte d'Azur",
      ],
      faq: [
        {
          q: "Comment sécuriser les applications cloud des startups de Sophia Antipolis ?",
          a: "Les startups de Sophia Antipolis développent des produits SaaS, IoT et IA qui nécessitent une architecture cloud-native sécurisée. Notre audit couvre : sécurité des APIs (OWASP API Top 10), IAM, chiffrement des données, conformité RGPD et scan des vulnérabilités conteneurs.",
        },
        {
          q: "Les hôtels de luxe de la Côte d'Azur peuvent-ils utiliser le cloud en toute sécurité ?",
          a: "Oui. Les PMS cloud (Opera, Mews, Cloudbeds) peuvent être utilisés de manière sécurisée avec une configuration adaptée : MFA obligatoire, chiffrement des données clients, conformité PCI DSS pour les paiements et contrôle d'accès strict. Nous auditons ces configurations.",
        },
        {
          q: "Intervenez-vous à Nice et en Côte d'Azur ?",
          a: "Oui. Nous couvrons Nice, Cannes, Antibes, Sophia Antipolis, Monaco et toute la Côte d'Azur. Nos audits cloud sont réalisés à distance avec des ateliers on-site si nécessaire.",
        },
        {
          q: "Avez-vous une expertise pour les entreprises monégasques sur le cloud ?",
          a: "Oui. Nous accompagnons les entreprises monégasques dans leur conformité cloud : RGPD européen, réglementation CCIN monégasque et exigences de sécurité spécifiques au secteur financier princier. Nous travaillons avec des hébergeurs cloud conformes aux exigences de Monaco.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNice;
