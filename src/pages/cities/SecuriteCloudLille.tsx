import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLille = () => (
  <CityLandingPage
    data={{
      city: "Lille",
      citySlug: "lille",
      region: "Hauts-de-France",
      postalCode: "59000",
      intro: "CloudSecure accompagne les entreprises lilloises dans la sécurisation de leurs infrastructures cloud. Retail, logistique, e-commerce et industrie : nos experts auditent vos environnements AWS, Azure et GCP à Lille et dans les Hauts-de-France.",
      localContext: "Lille et les Hauts-de-France abritent les leaders mondiaux du retail (Auchan, Decathlon, Leroy Merlin, La Redoute) et de la logistique. Ces acteurs gèrent des millions de données clients et des chaînes logistiques complexes entièrement dans le cloud. La sécurité du cloud retail et e-commerce est un enjeu majeur pour la région.",
      sectors: [
        "Retail et grande distribution (AWS/Azure)",
        "E-commerce et logistique cloud",
        "Industrie et manufacturin 4.0",
        "Finance et assurance",
        "Santé et HDS (CHU de Lille)",
        "Collectivités et administrations",
      ],
      neighborhoods: [
        "Lille Centre et Euralille",
        "Villeneuve-d'Ascq et Lezennes",
        "Roubaix, Tourcoing, Croix",
        "Valenciennes, Douai, Arras",
        "Dunkerque, Calais",
        "Toute la région Hauts-de-France",
      ],
      faq: [
        {
          q: "Comment sécuriser AWS pour une enseigne retail lilloise ?",
          a: "Les enseignes retail stockent des données clients et des transactions sur AWS. Notre audit retail cloud couvre : sécurité S3 (données clients), conformité PCI DSS (paiements), sécurité des APIs (catalogue, commandes) et protection contre les fraudes. Budget : 5 000 à 12 000 euros HT.",
        },
        {
          q: "La Redoute et les acteurs e-commerce lillois ont-ils des besoins spécifiques ?",
          a: "Les plateformes e-commerce à fort trafic nécessitent une architecture cloud scalable et sécurisée : CDN sécurisé (WAF, DDoS protection), sécurité des bases de données clients, conformité PCI DSS et monitoring en temps réel. Nous accompagnons ces acteurs dans leurs audits annuels.",
        },
        {
          q: "Intervenez-vous à Lille et dans les Hauts-de-France ?",
          a: "Oui. Nous couvrons Lille, Roubaix, Tourcoing, Valenciennes, Dunkerque et toute la région Hauts-de-France. Nous pouvons aussi intervenir en Belgique pour les entreprises transfrontalières.",
        },
        {
          q: "Quel accompagnement DevSecOps pour les équipes tech lilloises ?",
          a: "Nous proposons des missions DevSecOps en régie à Lille et à distance : revue de code sécurisée, intégration outils SAST/DAST (SonarQube, Snyk, Trivy), formation des équipes et mise en place du shift-left security dans vos pipelines.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLille;
