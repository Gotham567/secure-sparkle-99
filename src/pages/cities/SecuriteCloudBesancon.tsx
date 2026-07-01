import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBesancon = () => (
  <CityLandingPage
    data={{
      city: "Besançon",
      citySlug: "besancon",
      region: "Bourgogne-Franche-Comté",
      postalCode: "25000",
      intro: "Besançon, capitale des microtechniques et de la précision, accueille Bosch IoT, le CHU cloud santé et un tissu de PME microtechniques connectées : CloudSecure sécurise vos infrastructures cloud industrielles IIoT et données de santé HDS. Audit cloud sécurité Besançon industrie de précision, conformité HDS et NIS2 pour les établissements de santé et sous-traitants du Doubs.",
      localContext: "Les entreprises de microtechniques bisontines (horlogerie, optique médicale, mécanique de précision) connectent leurs outils de production à des plateformes cloud MES et IoT (Bosch IoT Suite, AWS IoT Core) pour optimiser la maintenance prédictive et la qualité, créant des besoins en sécurité de la convergence OT/IT. Le CHU de Besançon, l'un des plus importants de Franche-Comté, héberge des données de santé dans des environnements cloud HDS (Hébergeur de Données de Santé) et doit se conformer aux exigences strictes de l'ASIP Santé en matière de sécurité cloud. L'Université de Franche-Comté et les laboratoires de recherche génèrent des données de recherche sensibles hébergées dans le cloud (calcul scientifique, données cliniques). Les PME bisontines du tertiaire et de l'industrie adoptent des ERP et CRM cloud sans politique de sécurité documentée.",
      sectors: [
        "Microtechniques et industrie de précision (MES cloud, IIoT sécurisé)",
        "CHU et établissements de santé (cloud HDS, dossiers patients, imagerie)",
        "Bosch IoT et sous-traitants automobile (cloud connecté sécurisé)",
        "Université et laboratoires de recherche (cloud HPC, données cliniques)",
        "PME horlogerie et optique médicale (ERP cloud, qualité SaaS)",
        "Collectivités du Doubs (dématérialisation cloud, données publiques)",
      ],
      neighborhoods: [
        "Centre-ville de Besançon – La Boucle",
        "Temis – technopole santé et microtechniques",
        "Zone industrielle de Novillars",
        "Chalezeule et Ecole-Valentin (industries)",
        "Grand Besançon Métropole",
        "Doubs (25) – Franche-Comté",
      ],
      faq: [
        {
          q: "Combien coûte une mise en conformité HDS cloud pour le CHU de Besançon ou une clinique du Doubs ?",
          a: "Une mise en conformité HDS (Hébergeur de Données de Santé) cloud pour un établissement de santé bisontin est facturée entre 10 000 et 25 000 € HT selon la taille de l'infrastructure cloud (serveurs d'imagerie, DPI, bases de données patients) et les écarts par rapport aux exigences HDS. CloudSecure réalise un audit HDS complet : contrôle des habilitations d'accès, chiffrement des données de santé au repos et en transit, sauvegardes géo-redondées, traçabilité des accès et plan de continuité des systèmes de santé. Nous accompagnons également la rédaction des politiques de sécurité requises par le référentiel HDS.",
        },
        {
          q: "Comment sécuriser un environnement cloud IIoT pour une PME de microtechniques à Besançon ?",
          a: "Les PME bisontines de microtechniques connectent leurs machines-outils à des plateformes IoT cloud (Bosch IoT, AWS IoT Core, Azure IoT Hub) pour la maintenance prédictive et le contrôle qualité. CloudSecure audite la sécurité de ces architectures IIoT : authentification des appareils (certificats X.509, provisioning sécurisé), chiffrement des flux de données machine-cloud, segmentation des réseaux OT/IT, et droits d'accès aux tableaux de bord analytiques. Nous identifions les équipements industriels exposés sur Internet et sécurisons les accès à distance. Audit IIoT cloud à partir de 5 000 € HT.",
        },
        {
          q: "Quelles sont les obligations de sécurité cloud pour les établissements de santé de Besançon (HDS, NIS2) ?",
          a: "Les établissements de santé bisontins (CHU, cliniques privées, SSR) hébergeant des données de santé dans le cloud doivent impérativement utiliser des hébergeurs certifiés HDS et mettre en place des mesures de sécurité renforcées (pseudonymisation, chiffrement, contrôle des accès). NIS2 s'applique également aux établissements de santé de taille significative, avec des obligations de notification des incidents. CloudSecure accompagne les établissements de santé du Doubs dans la conformité HDS et NIS2 : audit de l'infrastructure cloud santé, rédaction des politiques de sécurité, plan de gestion des incidents et RSSI cloud externalisé santé à partir de 2 000 € HT/mois.",
        },
        {
          q: "Comment sécuriser les données de recherche de l'Université de Franche-Comté hébergées dans le cloud ?",
          a: "Les laboratoires de l'Université de Franche-Comté génèrent des données de recherche sensibles (données cliniques d'études, propriété intellectuelle, données RGPD de sujets) hébergées dans des environnements HPC cloud (Mésocentre, AWS, OVHcloud). CloudSecure audite les droits d'accès aux ressources cloud de calcul, la sécurisation des buckets de stockage des résultats de recherche, les politiques de partage avec les partenaires internationaux et la conformité RGPD des données de recherche impliquant des personnes. Nous réalisons également des formations sécurité cloud pour les chercheurs et doctorants.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Besançon pour les audits de sécurité cloud industriels et santé ?",
          a: "Oui, CloudSecure intervient à Besançon en présentiel pour les audits industriels et santé nécessitant une présence sur site : visite des installations OT/IT dans les usines de microtechniques de Temis, inspection des architectures cloud au CHU, ateliers de sensibilisation des équipes DSI. Les phases de test cloud et de revue de configuration sont réalisées à distance. Nous intervenons aussi en urgence à Besançon en cas d'incident cyber (ransomware, fuite de données de santé). Déplacement inclus pour les missions supérieures à 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBesancon;
