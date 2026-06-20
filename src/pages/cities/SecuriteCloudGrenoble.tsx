import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudGrenoble = () => (
  <CityLandingPage
    data={{
      city: "Grenoble",
      citySlug: "grenoble",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38000",
      intro: "CloudSecure accompagne les industriels, laboratoires et startups deeptech grenoblois dans la sécurisation de leurs environnements cloud. Microélectronique, énergie, nucléaire et R&D : nos experts protègent la propriété intellectuelle de Grenoble dans le cloud.",
      localContext: "Grenoble est un cas unique : ses entreprises de microélectronique, d'énergie et de recherche génèrent des données d'une valeur extraordinaire (IP semi-conducteurs, formules chimiques, données nucléaires) qui commencent à migrer vers des architectures cloud hybride. Cette migration crée des risques de cyberespionnage que nous aidons à maîtriser.",
      sectors: [
        "Microélectronique et semi-conducteurs",
        "Énergie et smart grid (cloud OT)",
        "Recherche et HPC cloud (CEA, CNRS)",
        "Medtech et HDS (bioMérieux, CHU)",
        "Startups deeptech",
        "Sous-traitants industriels",
      ],
      neighborhoods: [
        "Presqu'île et Polygone Scientifique",
        "Meylan, Montbonnot, Crolles",
        "Échirolles, Grenoble Sud",
        "Voiron, Bourgoin-Jallieu",
        "Chambéry, Annecy",
        "Toute la région Isère",
      ],
      faq: [
        {
          q: "Comment protéger les données de R&D STMicroelectronics dans le cloud ?",
          a: "Les données de conception de semi-conducteurs nécessitent une architecture cloud à haute assurance : chiffrement souverain (BYOK/HYOK), accès conditionnel géographique, DLP (Data Loss Prevention) et journalisation forensique. Nous concevons ces architectures et auditons leur implémentation.",
        },
        {
          q: "Le CEA-Leti peut-il utiliser AWS pour ses simulations scientifiques ?",
          a: "Le CEA utilise AWS pour certains workloads HPC non classifiés. La sécurisation de ces environnements inclut : comptes AWS dédiés, VPC isolé, chiffrement S3, contrôle d'accès IAM strict et conformité aux référentiels de sécurité ANSSI. Nous accompagnons ces configurations.",
        },
        {
          q: "Intervenez-vous à Grenoble et dans le bassin grenoblois ?",
          a: "Oui. Nous couvrons Grenoble, Meylan, Crolles, Échirolles, Voiron et tout le département de l'Isère, ainsi que Chambéry et Annecy.",
        },
        {
          q: "Quel est le coût d'un audit cloud pour une startup deeptech grenobloise ?",
          a: "Un audit cloud startup (AWS ou GCP) pour une deeptech de moins de 30 personnes coûte entre 2 000 et 4 500 euros HT. Nous proposons des tarifs adaptés aux startups avec rapport de synthèse et session de restitution inclus.",
        },
      ],
    }}
  />
);

export default SecuriteCloudGrenoble;
