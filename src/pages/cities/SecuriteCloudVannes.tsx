import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudVannes = () => (
  <CityLandingPage
    data={{
      city: "Vannes",
      citySlug: "vannes",
      region: "Bretagne",
      postalCode: "56000",
      intro: "CloudSecure sécurise les plateformes SaaS cloud des PME et TPE de Vannes, les applications de réservation touristique du Golfe du Morbihan et les solutions agritech IoT bretonne contre les cybermenaces ciblant les données clients et les API cloud. Audit cloud AWS/Azure PME, conformité RGPD cloud Bretagne et DevSecOps pour les start-ups et éditeurs SaaS du Morbihan.",
      localContext: "Vannes est en train de s'imposer comme l'un des pôles numériques les plus dynamiques de Bretagne, avec un écosystème de PME, TPE et start-ups SaaS en forte croissance qui développent des solutions cloud pour des secteurs variés : tourisme du Golfe du Morbihan, agriculture et agritech, e-commerce breton, santé et services à la personne. L'attractivité touristique exceptionnelle du Golfe du Morbihan génère d'importants flux de réservations en ligne et de données clients touristiques stockés sur des plateformes cloud, exposés aux attaques de ransomware et aux fuites de données en période estivale. L'agritech bretonne (capteurs IoT dans les élevages porcins et bovins, plateformes de gestion des cultures) crée de nouvelles surfaces d'attaque IoT cloud. Le Centre Hospitalier Bretagne Atlantique (CHBA) de Vannes et les établissements de santé morbihannais hébergent des données médicales sensibles nécessitant une conformité HDS stricte. CloudSecure accompagne ces acteurs bretons avec une approche pragmatique adaptée aux PME et TPE.",
      sectors: [
        "SaaS PME/TPE cloud (éditeurs logiciels bretons, startups Golfe du Morbihan)",
        "Tourisme numérique et booking cloud (Golfe du Morbihan, réservations en ligne)",
        "E-commerce breton et vente en ligne (artisanat, produits régionaux)",
        "Agritech IoT (capteurs élevage, plateformes gestion parcelles Bretagne)",
        "Collectivités et Vannes Agglomération (e-administration cloud)",
        "Santé cloud (CHBA Vannes, cliniques Morbihan, données HDS)",
      ],
      neighborhoods: [
        "Intramuros de Vannes et centre historique",
        "ZA Porte de Bretagne et parc d'activités Kerlann",
        "Séné et presqu'île de Conleau",
        "Morbihan (56) et Golfe du Morbihan",
        "Lorient (60 km) et axe Vannes–Lorient–Quimper",
        "Auray, Pontivy et bassin morbihannais",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS pour une PME ou start-up SaaS de Vannes ?",
          a: "Un audit cloud AWS ou Azure pour une PME ou start-up SaaS de Vannes est proposé entre 3 000 et 6 000 € HT selon la taille et la complexité de l'architecture cloud. Pour les TPE (moins de 10 salariés) avec un périmètre limité (un ou deux services AWS), CloudSecure propose un audit flash à partir de 1 500 € HT livré sous 5 jours. Pour les PME SaaS avec une architecture multi-services (EC2, RDS, S3, Lambda, API Gateway), le forfait standard à 4 500 € HT couvre un audit complet avec rapport détaillé et restitution orale. Devis gratuit en 24h.",
        },
        {
          q: "Comment sécuriser une plateforme de réservation touristique cloud pour le Golfe du Morbihan ?",
          a: "Les plateformes de réservation en ligne pour les activités nautiques, les gîtes et les excursions dans le Golfe du Morbihan collectent des données clients et des paiements en ligne tout au long de l'année, avec des pics d'activité en été. CloudSecure audite la conformité PCI DSS (sécurité des paiements), la protection des données clients (RGPD), la sécurité des APIs de réservation (injection, authentification) et la résistance aux attaques DDoS en haute saison. Nous recommandons également la mise en place d'un WAF cloud et de sauvegardes immuables pour protéger vos données touristiques. Audit cloud tourisme breton à partir de 3 500 € HT.",
        },
        {
          q: "Quelles obligations RGPD cloud s'appliquent aux PME et TPE du Morbihan ?",
          a: "Toute PME ou TPE de Vannes qui collecte des données personnelles de clients, prospects ou salariés dans le cloud (CRM, newsletter, e-commerce, plateformes RH) est soumise au RGPD. Les obligations pratiques incluent la tenue d'un registre des traitements, la rédaction de contrats de sous-traitance cloud (DPA avec AWS, Azure, GCP), la mise en place de procédures de gestion des violations de données, et la capacité à répondre aux droits des personnes. CloudSecure réalise des audits de conformité RGPD cloud pour les PME morbihannaises à partir de 2 000 € HT, avec livraison d'un plan d'action priorisé.",
        },
        {
          q: "Comment sécuriser des capteurs IoT agritech bretonne connectés au cloud ?",
          a: "Les exploitations agricoles et PME agritech du Morbihan qui déploient des capteurs IoT (suivi des troupeaux, stations météo connectées, capteurs de sol) transmettant des données vers des plateformes cloud AWS IoT Core ou Azure IoT Hub font face à des risques spécifiques : compromission des passerelles IoT via des firmwares non mis à jour, interception des données de capteurs en transit, et accès non autorisé aux plateformes de gestion des élevages. CloudSecure audite ces architectures IoT cloud et déploie des protections adaptées (TLS, authentification des objets, segmentation réseau). Audit IoT agritech cloud à partir de 3 000 € HT.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les start-ups bretonnes de Vannes et du Morbihan ?",
          a: "Oui. CloudSecure accompagne les start-ups bretonnes de Vannes dans la mise en place de pratiques DevSecOps pour sécuriser leurs applications cloud dès la phase de développement. Nos consultants intègrent les tests de sécurité automatisés (SAST, DAST, dependency scanning) dans les pipelines CI/CD GitLab ou GitHub Actions, mettent en place la gestion sécurisée des secrets (AWS Secrets Manager, HashiCorp Vault) et forment les développeurs aux failles OWASP Top 10. Intervention en régie à partir de 700 € HT/jour ou en forfait mensuel adapté aux contraintes budgétaires des start-ups. Nous proposons également des revues de code sécurité ponctuelles avant les levées de fonds ou les lancements produit.",
        },
      ],
    }}
  />
);

export default SecuriteCloudVannes;
