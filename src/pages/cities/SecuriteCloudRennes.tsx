import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CloudSecure accompagne les entreprises rennaises et bretonnes dans la sécurisation de leurs environnements cloud. Télécoms, défense, agroalimentaire et numérique : nos experts auditent vos infrastructures AWS, Azure et GCP à Rennes et en Bretagne.",
      localContext: "Rennes est un pôle numérique breton majeur avec des acteurs télécoms (Orange Labs, Bouygues), une présence défense (DGA, Naval Group) et un secteur agroalimentaire en pleine digitalisation. Les entreprises bretonnes adoptent le cloud hybride pour leurs applications métier, avec des enjeux de souveraineté numérique particulièrement prégnants dans le secteur défense.",
      sectors: [
        "Télécommunications (Orange, Bouygues)",
        "Défense et sécurité nationale",
        "Agroalimentaire breton (cloud supply chain)",
        "Numérique et ESN",
        "Santé et HDS",
        "Collectivités bretonnes",
      ],
      neighborhoods: [
        "Rennes Centre et Villejean",
        "Cesson-Sévigné (technopôle)",
        "Saint-Malo, Dinard",
        "Brest, Lorient, Quimper",
        "Vannes, Saint-Brieuc",
        "Toute la Bretagne",
      ],
      faq: [
        {
          q: "Les solutions cloud souveraines sont-elles adaptées aux entreprises de défense rennaises ?",
          a: "Pour les entreprises travaillant avec la DGA ou Naval Group, les clouds souverains certifiés SecNumCloud (OVHcloud Trusted Zone, S3NS, Numspot) sont recommandés. Nous évaluons votre niveau d'exigence et recommandons la solution cloud adaptée à vos contraintes réglementaires.",
        },
        {
          q: "Comment sécuriser la supply chain cloud d'une coopérative agroalimentaire bretonne ?",
          a: "Les plateformes SaaS de gestion de supply chain agroalimentaire (ERP cloud, WMS cloud) doivent être auditées régulièrement. Nous évaluons la sécurité des données de traçabilité, la conformité RGPD et la résilience face aux attaques ransomware.",
        },
        {
          q: "Intervenez-vous à Rennes et dans toute la Bretagne ?",
          a: "Oui. Nous couvrons Rennes, Brest, Lorient, Quimper, Vannes, Saint-Brieuc et toute la région Bretagne. Nos missions cloud sont principalement à distance.",
        },
        {
          q: "Orange Labs Rennes a-t-il des besoins spécifiques en sécurité cloud ?",
          a: "Les opérateurs télécoms ont des obligations réglementaires spécifiques (directive NIS2 secteur télécoms, ARCEP) en plus des standards de sécurité cloud classiques. Nous avons l'expertise pour accompagner les opérateurs et leurs sous-traitants dans leur conformité.",
        },
      ],
    }}
  />
);

export default SecuriteCloudRennes;
