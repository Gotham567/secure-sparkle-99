import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNarbonne = () => (
  <CityLandingPage
    data={{
      city: "Narbonne",
      citySlug: "narbonne",
      region: "Occitanie",
      postalCode: "11100",
      intro: "CloudSecure sécurise les plateformes cloud de traçabilité des vins AOC, les systèmes de réservation touristique et les ERP agroalimentaires des coopératives viticoles de Narbonne et du Languedoc-Roussillon contre les cybermenaces. Audit cloud AWS/Azure viticulture, conformité RGPD agroalimentaire et protection des données de certification AOC pour les entreprises de l'Aude et d'Occitanie.",
      localContext: "Narbonne est au cœur du premier vignoble français en volume, le Languedoc-Roussillon, où des centaines de coopératives viticoles, de négociants et de domaines utilisent des plateformes cloud pour la traçabilité de leurs appellations d'origine contrôlée (AOC, IGP), la gestion de leurs millésimes et la commercialisation en ligne de leurs vins. Ces données de traçabilité, de certification et de stocks constituent une propriété intellectuelle commerciale précieuse que les cybercriminels cherchent à voler ou à corrompre (manipulation des certifications, fraude à l'appellation). Le port fluvial de La Robine et la logistique agroalimentaire associée génèrent également des flux de données cloud sensibles sur les mouvements de marchandises. L'essor du tourisme balnéaire (Narbonne-Plage, Gruissan, Sigean) a poussé les acteurs de l'hébergement et des loisirs à adopter des plateformes cloud de réservation exposées aux attaques par ransomware et aux fuites de données clients. CloudSecure accompagne les coopératives, PME et collectivités de Narbonne et de l'Aude dans la sécurisation de leurs systèmes cloud.",
      sectors: [
        "Viticulture cloud et traçabilité AOC (coopératives, négociants, domaines)",
        "Tourisme balnéaire et booking cloud (Narbonne-Plage, Gruissan, Sigean)",
        "Logistique et port fluvial (La Robine, flux agroalimentaires cloud)",
        "Agroalimentaire et coopératives (ERP cloud, certifications)",
        "PME commerce et artisanat en migration cloud",
        "Collectivités et services publics de l'Aude",
      ],
      neighborhoods: [
        "Centre historique de Narbonne et Bourg",
        "Canal de La Robine et zone portuaire",
        "ZI Narbonne et parcs d'activités",
        "Sigean et Gruissan (Narbonne-Plage)",
        "Béziers et ouest Hérault",
        "Aude (11) et Occitanie littorale",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS pour une coopérative viticole ou un négociant à Narbonne ?",
          a: "Un audit cloud AWS pour une coopérative viticole ou un négociant en vins de Narbonne est proposé à partir de 3 500 € HT pour un périmètre standard couvrant les systèmes de gestion de cave (ERP viticole cloud), les plateformes de traçabilité AOC et les boutiques en ligne. Nous analysons la sécurité des bases de données de certification, la conformité RGPD pour les données clients et abonnés, et la protection des secrets de fabrication hébergés dans le cloud. Le rapport avec plan de remédiation est livré sous 7 jours. Devis gratuit en 24h.",
        },
        {
          q: "Comment sécuriser la traçabilité des vins AOC hébergée dans le cloud à Narbonne ?",
          a: "La traçabilité des vins AOC du Languedoc implique des données certifiées (analyses, déclarations de récolte, titres de mouvement) qui doivent être protégées contre toute altération frauduleuse. CloudSecure audite l'intégrité des bases de données cloud hébergeant ces données, déploie des mécanismes de signature cryptographique pour les enregistrements de traçabilité et vérifie la conformité aux exigences de l'INAO (Institut National de l'Origine et de la Qualité). Nous évaluons également la sécurité des APIs d'échange avec les douanes (CIEL, Rosa) et les organismes de contrôle. Forfait traçabilité viticulture cloud à partir de 4 000 € HT.",
        },
        {
          q: "Comment protéger une plateforme de réservation touristique cloud pour le tourisme du Languedoc ?",
          a: "Les plateformes de réservation en ligne pour les campings, hôtels et activités touristiques de Narbonne et du littoral audois collectent des données bancaires et personnelles de milliers de clients chaque saison. CloudSecure audite la conformité PCI DSS de ces plateformes (sécurité des paiements en ligne), teste la résistance des APIs de réservation aux injections et aux attaques par force brute, et vérifie le chiffrement des données de paiement. Nous recommandons également la mise en place de sauvegardes cloud immuables pour résister aux ransomwares en haute saison. Audit cloud tourisme à partir de 3 500 € HT.",
        },
        {
          q: "Quelles obligations RGPD cloud s'appliquent aux coopératives et entreprises agroalimentaires de Narbonne ?",
          a: "Les coopératives viticoles et entreprises agroalimentaires de Narbonne qui collectent des données clients (boutiques en ligne, abonnements, CRM) ou des données fournisseurs et salariés dans le cloud sont soumises au RGPD. Les obligations incluent la tenue d'un registre des traitements, la nomination d'un DPO si le volume de données le justifie, la mise en place de contrats de sous-traitance cloud conformes (DPA avec AWS, Azure, GCP), et la capacité à répondre aux droits des personnes (accès, rectification, effacement). CloudSecure réalise des audits de conformité RGPD cloud pour les PME agroalimentaires à partir de 2 500 € HT.",
        },
        {
          q: "Intervenez-vous pour les collectivités et mairies de l'Aude et de Narbonne en sécurité cloud ?",
          a: "Oui. CloudSecure accompagne les collectivités territoriales de l'Aude (Narbonne, agglomération Grand Narbonne, communes rurales) dans la sécurisation de leurs systèmes d'information cloud. Nous réalisons des audits NIS2 pour les collectivités de plus de 30 000 habitants, évaluons la conformité des solutions SaaS utilisées (e-administration, portails citoyens) et aidons à la mise en place de plans de continuité d'activité cloud. CloudSecure propose également des formations à la cybersécurité pour les agents des collectivités audoises. Devis sur mesure selon le profil de la collectivité.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNarbonne;
