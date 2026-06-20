import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CloudSecure accompagne les entreprises rouennaises et normandes dans la sécurisation de leurs environnements cloud AWS, Azure et GCP. Industrie, logistique, agroalimentaire et santé : nos experts sécurisent vos workloads cloud à Rouen et en Normandie.",
      localContext: "Rouen et la Normandie accélèrent leur transformation numérique, notamment dans les secteurs industriels et logistiques. Après l'incident Lubrizol 2019, les industriels normands ont pris conscience de l'importance de sécuriser leurs systèmes connectés au cloud. Les acteurs du port du Havre migrent également leurs systèmes de gestion portuaire vers des architectures cloud hybride.",
      sectors: [
        "Industrie chimique (cloud hybride OT)",
        "Logistique et port du Havre",
        "Agroalimentaire normand",
        "Santé et HDS (CHU de Rouen)",
        "Automobile et équipementiers",
        "ETI industrielles normandes",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite",
        "Grand-Couronne et zones industrielles",
        "Le Havre et technopôle",
        "Caen, Cherbourg, Évreux",
        "Dieppe, Fécamp",
        "Toute la Normandie",
      ],
      faq: [
        {
          q: "Comment sécuriser les systèmes industriels connectés au cloud après l'incident Lubrizol ?",
          a: "La connexion des systèmes OT au cloud (SCADA connecté, maintenance prédictive cloud) doit être faite avec une architecture Zero Trust OT : passerelle sécurisée, flux unidirectionnels, micro-segmentation et monitoring continu. Nous concevons et auditons ces architectures.",
        },
        {
          q: "Les opérateurs du port du Havre peuvent-ils migrer leur TOS vers le cloud ?",
          a: "Les systèmes de gestion des terminaux portuaires (TOS) sont des systèmes critiques soumis à NIS2. Leur migration cloud doit respecter des exigences strictes de résilience, de traçabilité et de conformité. Nous accompagnons ces migrations complexes.",
        },
        {
          q: "Intervenez-vous à Rouen et en Normandie pour des missions cloud ?",
          a: "Oui. Nous couvrons Rouen, Le Havre, Caen, Cherbourg, Évreux et toute la région Normandie. Nos missions cloud sont principalement à distance avec des ateliers on-site si nécessaire.",
        },
        {
          q: "Quel budget cloud security pour une ETI industrielle normande ?",
          a: "Un audit cloud complet pour une ETI industrielle normande de 100 à 500 salariés coûte entre 5 000 et 12 000 euros HT selon le périmètre (AWS, Azure ou hybride). La mise en place des mesures correctives est estimée lors de l'audit.",
        },
      ],
    }}
  />
);

export default SecuriteCloudRouen;
