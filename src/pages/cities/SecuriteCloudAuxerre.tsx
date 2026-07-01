import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAuxerre = () => (
  <CityLandingPage
    data={{
      city: "Auxerre",
      citySlug: "auxerre",
      region: "Bourgogne-Franche-Comté",
      postalCode: "89000",
      intro: "Auxerre et l'Yonne concentrent des PME cloud ERP, des coopératives viticoles Chablis utilisant la traçabilité IoT et des industries agroalimentaires en pleine migration cloud : CloudSecure sécurise vos infrastructures AWS et Azure avec des audits adaptés au tissu économique bourguignon. Audit cloud AWS Auxerre PME, conformité RGPD et NIS2 pour les entreprises de l'Yonne.",
      localContext: "Les PME industrielles et agroalimentaires de l'Yonne migrent vers des ERP SaaS cloud (Sage Business Cloud, Cegid, Odoo) et des solutions de gestion documentaire cloud, créant des besoins urgents en sécurité des accès et en conformité. Le vignoble Chablis et les coopératives viticoles de l'Yonne numérisent la traçabilité de leurs vins via des capteurs IoT et des plateformes cloud (traçabilité AOC, export douanier), exposées aux attaques sur les APIs. Les collectivités de l'Yonne (Auxerre, Sens, Avallon) adoptent des outils cloud pour la dématérialisation administrative, avec des enjeux de protection des données des administrés. Les attaques par ransomware sur les PME bourgognonnes sont en augmentation, ciblant en priorité les sauvegardes cloud mal configurées.",
      sectors: [
        "PME industrielles et ERP SaaS cloud (Sage, Cegid, Odoo cloud)",
        "Viticulture et coopératives Chablis (traçabilité IoT, cloud AOC)",
        "Agroalimentaire et industries alimentaires (cloud ERP, traçabilité)",
        "Collectivités de l'Yonne (dématérialisation cloud, RGPD)",
        "Commerce et négoce (e-commerce, CRM SaaS, logistique cloud)",
        "Santé et cliniques (cloud HDS, logiciels médicaux SaaS)",
      ],
      neighborhoods: [
        "Centre-ville d'Auxerre – quartier historique",
        "Zone industrielle de Monéteau",
        "Parc d'activités de Branches",
        "Auxerre-Appoigny et périphérie nord",
        "Grand Auxerrois (communauté d'agglomération)",
        "Yonne (89) – Chablis, Sens, Tonnerre",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité cloud AWS pour une PME de l'Yonne à Auxerre ?",
          a: "Un audit de sécurité cloud AWS pour une PME auxerroise est facturé entre 3 500 et 8 000 € HT selon le nombre de services cloud exposés (EC2, S3, RDS), la complexité des droits IAM et le nombre d'environnements (dev, staging, prod). CloudSecure inclut une analyse des politiques de sauvegarde, une revue des accès administrateurs et un rapport de vulnérabilités priorisées livré sous 7 jours. Pour les PME utilisant un ERP SaaS cloud (Sage, Cegid), nous auditons aussi les intégrations API et les flux de données inter-applicatifs. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un système de traçabilité cloud IoT pour une coopérative Chablis ou un vignoble de l'Yonne ?",
          a: "Les coopératives viticoles de l'Yonne utilisent des capteurs IoT (temperature, hygrométrie, pesée) et des plateformes cloud de traçabilité AOC dont les données remontent vers des APIs SaaS. CloudSecure audite la sécurité des passerelles IoT-cloud, les droits d'accès aux APIs de collecte de données vitivinicoles, le chiffrement des données de production et les politiques de partage avec les organismes interprofessionnels (BIVB). Nous configurons des alertes de détection d'anomalies sur les flux de données et sécurisons les exports vers les douanes (e-viticulture). Forfait audit IoT viti-vinicole à partir de 4 500 € HT.",
        },
        {
          q: "Les collectivités de l'Yonne doivent-elles se conformer à des exigences cloud spécifiques (RGPD, ANSSI) ?",
          a: "Les collectivités territoriales de l'Yonne sont soumises au RGPD pour les données des administrés et aux recommandations ANSSI pour la sécurisation des systèmes d'information publics. CloudSecure réalise des audits cloud pour les mairies et intercommunalités : contrôle des accès aux outils de dématérialisation (e-Actes, Pastell), sécurisation de la messagerie cloud (Microsoft 365), politique de MFA pour les agents, et conformité aux guides ANSSI pour les collectivités. Un diagnostic de maturité cybersécurité est proposé gratuitement.",
        },
        {
          q: "Comment protéger les données de production agroalimentaire d'une PME de l'Yonne hébergées dans le cloud ?",
          a: "Les industries agroalimentaires de l'Yonne (conserveries, laiteries, boulangeries industrielles) utilisent des ERP cloud et des logiciels de gestion de production dont les données (recettes, processus, données clients) constituent des actifs stratégiques. CloudSecure audite les accès à ces systèmes cloud, contrôle les droits par profil métier, vérifie le chiffrement des exports de données et met en place des politiques de sauvegarde immuables (protection contre les ransomwares). Nous formons également vos équipes production aux bonnes pratiques de sécurité cloud.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Auxerre et dans l'Yonne pour les missions cloud ?",
          a: "Oui, CloudSecure intervient à Auxerre et dans tout le département de l'Yonne en présentiel pour les phases d'audit nécessitant une présence physique : revue d'architecture réseau, interviews RSSI, ateliers de sensibilisation des équipes. Les tests d'intrusion cloud et la revue de configuration AWS/Azure sont réalisés à distance via accès sécurisés. Déplacement inclus pour les forfaits supérieurs à 5 000 € HT. Premier entretien de cadrage gratuit en visioconférence sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAuxerre;
