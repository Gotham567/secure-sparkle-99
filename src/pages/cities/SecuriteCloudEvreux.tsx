import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudEvreux = () => (
  <CityLandingPage
    data={{
      city: "Évreux",
      citySlug: "evreux",
      region: "Normandie",
      postalCode: "27000",
      intro: "Évreux concentre des industries pharmaceutiques GxP (Famar, laboratoires normands) et des plateformes logistiques e-commerce AWS en Normandie : CloudSecure sécurise vos infrastructures cloud pharma GxP et supply chain contre les cybermenaces. Audit cloud GxP pharma Évreux, sécurité AWS logistique Normandie et conformité 21 CFR Part 11 pour les industriels de l'Eure.",
      localContext: "Évreux et l'Eure abritent plusieurs sites de fabrication et de conditionnement pharmaceutique (Famar, sous-traitants CMO) dont les systèmes de production cloud sont soumis aux exigences GxP (Good Practice), EU Annex 11 et 21 CFR Part 11 pour la validation des systèmes informatisés dans la fabrication de médicaments. La proximité d'Évreux avec Paris et les autoroutes (A13, A154) en fait un hub logistique e-commerce avec des entrepôts qui utilisent des WMS cloud AWS pour la distribution nationale, exposés aux ransomwares ciblant la supply chain. Les PME normandes du tertiaire et de l'industrie migrent vers des ERP et CRM cloud sans expertise de sécurité suffisante. Les collectivités de l'Eure adoptent des services cloud pour la dématérialisation administrative.",
      sectors: [
        "Industrie pharmaceutique GxP (Famar, CMO cloud AWS, 21 CFR Part 11)",
        "Logistique e-commerce (WMS cloud AWS, entrepôts Normandie, fulfillment)",
        "PME normandes industrie et services (ERP cloud, Microsoft 365)",
        "Agroalimentaire et IAA (traçabilité cloud, ERP production, RGPD)",
        "Collectivités de l'Eure (dématérialisation cloud, données publiques)",
        "BTP et construction normande (GED cloud, gestion chantiers SaaS)",
      ],
      neighborhoods: [
        "Centre-ville d'Évreux – Cathédrale Notre-Dame",
        "Zone industrielle de la Madeleine",
        "Parc d'activités de Saint-Sébastien-de-Morsent",
        "Le Vieil-Évreux et Val d'Iton (industries)",
        "Évreux Portes de Normandie (CAPEN)",
        "Eure (27) – Normandie",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud GxP pour un site pharmaceutique ou un CMO à Évreux ?",
          a: "Un audit cloud GxP pour un site pharmaceutique ébroïcien est facturé entre 6 000 et 15 000 € HT selon la taille de l'infrastructure cloud (AWS, Azure), le nombre de systèmes informatisés soumis à la validation GxP (MES, LIMS, ERP pharma, systèmes de pesée connectés) et les réglementations applicables (EU Annex 11, 21 CFR Part 11 FDA pour l'export US). CloudSecure analyse la conformité des architectures cloud aux exigences de validation (intégrité des données ALCOA+, audit trail, contrôle des accès, gestion des changements). Rapport d'écarts avec plan de remédiation priorisé. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un environnement cloud AWS conforme GxP et EU Annex 11 pour Famar ou un CMO de l'Eure ?",
          a: "La conformité GxP cloud EU Annex 11 impose des exigences sur l'intégrité des données de production pharmaceutique (ALCOA+ : attributable, lisible, contemporain, original, précis), le contrôle des accès par rôle, la traçabilité des actions dans les systèmes et la qualification des environnements cloud. CloudSecure audite votre configuration AWS ou Azure par rapport aux exigences GxP : IAM et RBAC des utilisateurs qualifiés, chiffrement des données de fabrication, immuabilité des logs CloudTrail, qualification de l'hébergeur AWS GxP et procédures de validation des changements cloud (change control). Nous rédigeons également la documentation de qualification (IQ, OQ, PQ).",
        },
        {
          q: "Comment protéger une plateforme logistique e-commerce AWS à Évreux contre les ransomwares ?",
          a: "Les entrepôts logistiques ébroïciens utilisant des WMS cloud AWS sont ciblés par des ransomwares qui chiffrent les bases de données de commandes et bloquent les expéditions pendant des jours. CloudSecure déploie une stratégie anti-ransomware cloud complète : sauvegardes immuables (S3 Object Lock), MFA sur tous les accès administrateurs WMS, segmentation des réseaux d'entrepôt, détection comportementale AWS GuardDuty, plan de reprise d'activité cloud testé et formation des équipes de picking aux risques de phishing. Un test de pénétration cloud sur votre infrastructure WMS est disponible à partir de 6 000 € HT.",
        },
        {
          q: "Les PME de l'Eure doivent-elles se conformer à NIS2 et quelles sont les implications pour leur cloud ?",
          a: "La directive NIS2 s'applique aux PME de plus de 50 salariés ou 10 M€ de CA dans des secteurs critiques comme la pharmacie, la logistique, l'agroalimentaire et la chimie. Plusieurs PME normandes de l'Eure dans ces secteurs peuvent être éligibles. CloudSecure réalise un diagnostic NIS2 gratuit pour les PME ébroïciennes, puis accompagne la mise en conformité cloud : analyse des risques, PSSI, plan de continuité, procédures de notification des incidents à l'ANSSI et RSSI cloud externalisé à partir de 2 000 € HT/mois.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Évreux pour les audits cloud pharma et logistique ?",
          a: "Oui, CloudSecure intervient à Évreux et dans l'Eure en présentiel pour les audits pharmaceutiques et logistiques : visites des sites de production pour inspection des architectures cloud GxP, interviews des équipes qualité et informatique, ateliers de remédiation. Nos consultants sont formés aux environnements pharmaceutiques réglementés. Les tests d'intrusion cloud et la revue de configuration sont réalisés à distance. Déplacement inclus pour les missions supérieures à 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudEvreux;
