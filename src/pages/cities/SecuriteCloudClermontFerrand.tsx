import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CloudSecure accompagne les entreprises clermontoises dans la sécurisation de leurs environnements cloud. Michelin, équipementiers automobiles et PME auvergnates : nos experts sécurisent vos workloads AWS, Azure et GCP à Clermont-Ferrand et en Auvergne.",
      localContext: "Clermont-Ferrand, dominée par Michelin et son écosystème, intègre progressivement le cloud dans ses processus industriels (simulations, collaboration, ERP cloud, IoT de production). Les PME auvergnates adoptent des solutions SaaS et cloud hybride sans toujours maîtriser les risques associés, créant des vulnérabilités dans la chaîne d'approvisionnement de Michelin.",
      sectors: [
        "Industrie pneumatique (IoT cloud Michelin)",
        "Équipementiers automobiles (ERP cloud)",
        "Santé et thermalisme (HDS cloud)",
        "Agroalimentaire auvergnat",
        "PME en digitalisation",
        "Startups et innovation",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre",
        "Cournon-d'Auvergne, Aubière",
        "Vichy, Thiers, Issoire",
        "Riom, Ambert",
        "Le Puy-en-Velay, Aurillac",
        "Toute la région Auvergne",
      ],
      faq: [
        {
          q: "Comment sécuriser les données Michelin dans le cloud ?",
          a: "Michelin utilise des plateformes cloud pour la simulation, la collaboration et l'IoT industriel. Ses fournisseurs qui accèdent à ces plateformes doivent respecter des exigences de sécurité strictes. Nous auditons votre configuration cloud et votre conformité aux standards Michelin.",
        },
        {
          q: "Quels risques cloud pour une PME auvergnate qui adopte le SaaS ?",
          a: "Les PME auvergnates qui adoptent des SaaS (ERP, CRM, compta cloud) exposent leurs données sans toujours configurer correctement les accès, l'authentification et le chiffrement. Un audit SaaS Security Posture Management (SSPM) identifie ces risques rapidement.",
        },
        {
          q: "Intervenez-vous à Clermont-Ferrand et en Auvergne ?",
          a: "Oui. Nous couvrons Clermont-Ferrand, Vichy, Thiers, Riom et toute la région Auvergne. Nos missions cloud sont réalisées à distance ou sur site selon vos besoins.",
        },
        {
          q: "Les établissements thermaux auvergnats peuvent-ils utiliser le cloud HDS ?",
          a: "Oui. Les établissements thermaux traitent des données de santé qui nécessitent un hébergement HDS (Hébergeur de Données de Santé). Nous vérifions que vos solutions SaaS santé et vos hébergeurs sont bien certifiés HDS et configurés conformément au RGPD.",
        },
      ],
    }}
  />
);

export default SecuriteCloudClermontFerrand;
