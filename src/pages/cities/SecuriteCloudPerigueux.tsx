import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPerigueux = () => (
  <CityLandingPage
    data={{
      city: "Périgueux",
      citySlug: "perigueux",
      region: "Nouvelle-Aquitaine",
      postalCode: "24000",
      intro: "CloudSecure sécurise les ERP SaaS cloud des PME artisanales, des producteurs de foie gras et de truffes et des acteurs du tourisme Périgord de Périgueux contre les cybermenaces ciblant les secrets de fabrication et les données de réservation. Audit cloud AWS/Azure PME, conformité RGPD et RSSI cloud externalisé pour les entreprises agroalimentaires et touristiques de Dordogne et de Nouvelle-Aquitaine.",
      localContext: "Périgueux et la Dordogne constituent un territoire économique original dominé par l'artisanat agroalimentaire de haute valeur (foie gras, truffes, noix, conserves du Périgord), le tourisme de patrimoine (Lascaux, Sarlat, Périgord Noir) et un tissu de PME familiales qui entament leur transformation numérique. Ces entreprises migrent progressivement leurs systèmes de gestion (facturation, traçabilité, e-commerce) vers des ERP SaaS cloud, sans toujours disposer des ressources internes pour sécuriser ces nouveaux environnements. Les recettes traditionnelles, les fichiers clients des boutiques en ligne et les données de réservation des gîtes et hôtels représentent une propriété commerciale précieuse exposée aux ransomwares et aux fuites de données. Les collectivités de Dordogne (Périgueux, agglomération) accélèrent leur dématérialisation avec des services cloud citoyens qui nécessitent un haut niveau de protection. CloudSecure accompagne ces acteurs avec une approche adaptée aux PME et ETI de taille modeste, combinant accessibilité tarifaire et expertise cloud de haut niveau.",
      sectors: [
        "Agroalimentaire cloud (foie gras, truffes, conserves, ERP SaaS)",
        "Tourisme Périgord booking (gîtes, hôtels, sites culturels cloud)",
        "PME artisanales en migration ERP cloud",
        "Collectivités et services publics Dordogne",
        "BTP numérique et rénovation du patrimoine",
        "Commerce de détail et e-commerce local",
      ],
      neighborhoods: [
        "Vésone et centre historique de Périgueux",
        "ZA de Périgueux (Les Bories, Cité) et parcs d'activités",
        "Coulounieix-Chamiers et Trélissac",
        "Dordogne (24) et Périgord Blanc",
        "Bergerac et Périgord Pourpre",
        "Axe Périgueux–Bordeaux–Brive (Nouvelle-Aquitaine)",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud pour une PME agroalimentaire de Périgueux spécialisée foie gras ou truffes ?",
          a: "Un audit cloud adapté aux PME agroalimentaires de Périgueux (producteurs de foie gras, truffes, conserves) est proposé à partir de 3 000 € HT pour un périmètre ERP SaaS ou e-commerce. Pour les entreprises de taille intermédiaire avec des clients grands comptes ou une forte présence export, le forfait monte entre 5 000 et 8 000 € HT. CloudSecure adapte systématiquement ses recommandations aux contraintes budgétaires et opérationnelles des PME familiales du Périgord. Nous proposons un devis gratuit en 24h et un accompagnement post-audit pour la mise en œuvre des corrections.",
        },
        {
          q: "Comment sécuriser un ERP SaaS cloud pour une entreprise agroalimentaire du Périgord ?",
          a: "La sécurisation d'un ERP SaaS (Sage 100cloud, Cegid, Copilote agro) pour une PME agroalimentaire de Périgueux passe par l'audit des droits d'accès utilisateurs (principe du moindre privilège), la vérification du chiffrement des données de production et des fichiers clients, la revue des contrats de sous-traitance cloud (DPA) avec l'éditeur SaaS, et la mise en place d'une sauvegarde externalisée indépendante. CloudSecure forme également les équipes aux gestes d'hygiène numérique essentiels (phishing, mots de passe, double authentification) pour réduire le risque d'intrusion par compromission de compte. Forfait PME agroalimentaire cloud sécurité à partir de 3 500 € HT.",
        },
        {
          q: "Comment sécuriser un site de réservation et e-commerce pour le tourisme Périgord ?",
          a: "Les sites de réservation de gîtes, hôtels et activités touristiques en Périgord collectent des données personnelles et bancaires de clients du monde entier. CloudSecure audite la conformité PCI DSS de votre plateforme e-commerce (sécurité des paiements Stripe, PayPal, CB), teste la sécurité des formulaires de réservation et des APIs, et vérifie la conformité RGPD pour la collecte et le stockage des données clients. Nous recommandons également l'activation du WAF cloud (Web Application Firewall) pour bloquer les tentatives d'injection et les attaques automatisées. Audit e-commerce tourisme à partir de 2 500 € HT.",
        },
        {
          q: "Proposez-vous un accompagnement cloud pour les collectivités de Dordogne ?",
          a: "Oui. CloudSecure accompagne les collectivités de Dordogne (Périgueux, communautés de communes, conseils départementaux) dans la sécurisation de leurs services cloud : portails citoyens, e-administration, systèmes financiers dématérialisés. Nous réalisons des audits de conformité NIS2 pour les collectivités concernées, évaluons les risques des solutions SaaS utilisées (éditeurs municipaux, suites Microsoft 365 gouvernementales) et mettons en place des politiques de sécurité adaptées aux contraintes des administrations locales. Devis sur mesure selon la taille et le profil de la collectivité.",
        },
        {
          q: "Qu'est-ce qu'un RSSI cloud externalisé et est-ce adapté aux PME de Périgueux ?",
          a: "Un RSSI cloud externalisé (vCISO) est un expert en sécurité cloud qui assume les responsabilités d'un Responsable de la Sécurité des Systèmes d'Information à temps partiel pour votre entreprise, sans le coût d'un recrutement à temps plein (60 000-90 000 € HT/an). Pour une PME de Périgueux, CloudSecure propose ce service à partir de 1 500 € HT/mois pour un accompagnement mensuel couvrant la politique de sécurité cloud, la veille réglementaire (NIS2, RGPD), la gestion des incidents et la sensibilisation des équipes. Ce format est idéal pour les PME de 10 à 100 salariés qui veulent professionnaliser leur sécurité cloud sans sur-investir.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPerigueux;
