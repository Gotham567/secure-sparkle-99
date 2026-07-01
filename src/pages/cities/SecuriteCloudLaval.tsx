import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLaval = () => (
  <CityLandingPage
    data={{
      city: "Laval",
      citySlug: "laval",
      region: "Pays de la Loire",
      postalCode: "53000",
      intro: "CloudSecure sécurise les infrastructures cloud des sous-traitants agroalimentaires de Lactalis et des PME industrielles de Laval contre les cyberattaques ciblant les données de production et les ERP cloud en Mayenne. Audit AWS, Azure, conformité NIS2 et DevSecOps pour l'industrie agroalimentaire, la logistique WMS et la santé cloud en Pays de la Loire.",
      localContext: "Laval est le quartier général mondial du groupe Lactalis, numéro un mondial des produits laitiers, dont l'écosystème de sous-traitants et de fournisseurs locaux génère d'importants flux de données cloud sensibles : recettes, certifications qualité, données logistiques et EDI avec les grandes surfaces. La présence de groupes agroalimentaires d'envergure (Lactalis, ISIGNY, coopératives mayennaises) impose des exigences de sécurité cloud élevées à leurs partenaires qui migrent leurs ERP (SAP, Sage) sur AWS ou Azure. Le secteur de la santé (cliniques, EHPAD) et la logistique e-commerce avec gestion WMS cloud représentent également des cibles prioritaires pour les cybercriminels. CloudSecure accompagne les dirigeants de PME lavaloises et les DSI de la région Mayenne dans la sécurisation de leurs données cloud, la conformité HDS pour les acteurs de santé et la mise en place de pipelines DevSecOps pour les éditeurs SaaS locaux.",
      sectors: [
        "Agroalimentaire cloud (Lactalis, ISIGNY, coopératives laitières)",
        "E-commerce et logistique WMS cloud",
        "Industrie manufacturière et ERP cloud",
        "Santé cloud et HDS (cliniques, EHPAD, biologie)",
        "Collectivités et services publics numériques",
        "PME et TPE en migration cloud (Mayenne)",
      ],
      neighborhoods: [
        "Centre-ville de Laval et quartier Pompadour",
        "Zone industrielle de Laval (ZI Sud, ZI Nord)",
        "Changé et agglomération lavalloise",
        "Mayenne (53) et Nord-Mayenne",
        "Pays de la Loire (axe Le Mans–Rennes)",
        "Bassin agroalimentaire Laval–Vitré–Fougères",
      ],
      faq: [
        {
          q: "Comment auditer la sécurité cloud d'un sous-traitant de Lactalis à Laval ?",
          a: "Les sous-traitants de Lactalis hébergent des données de production, des certificats qualité et des flux EDI sur des environnements AWS ou Azure qui doivent respecter les exigences de sécurité du groupe. CloudSecure réalise un audit cloud complet couvrant la configuration IAM, les buckets S3 ou Azure Blob, la sécurité des APIs d'échange de données et la conformité aux référentiels ISO 27001 et NIS2. Le forfait démarre à 3 500 € HT avec livraison du rapport sous 7 jours ouvrés. Nous proposons également un accompagnement annuel en RSSI cloud externalisé pour les PME mayennaises.",
        },
        {
          q: "Comment sécuriser un ERP agroalimentaire SaaS hébergé sur AWS ou Azure à Laval ?",
          a: "La sécurisation d'un ERP SaaS agroalimentaire (SAP S/4HANA Cloud, Sage 100cloud, Copilote) nécessite d'abord un audit des droits d'accès et des connexions API avec les partenaires (distributeurs, transporteurs), puis une revue de la configuration réseau (VPC, NSG) et des politiques de chiffrement des données de recette et de traçabilité. CloudSecure teste également la résistance aux attaques par injection SQL et aux compromissions de compte administrateur. Forfait audit ERP cloud agroalimentaire à Laval à partir de 4 000 € HT, avec option DevSecOps CI/CD pour les mises à jour applicatives.",
        },
        {
          q: "Quelles sont les obligations cloud HDS pour les établissements de santé de Laval et de la Mayenne ?",
          a: "Les cliniques, EHPAD, laboratoires de biologie médicale et établissements de santé de Laval qui hébergent des données de santé (DMP, résultats d'analyses, prescriptions) dans le cloud doivent utiliser un hébergeur certifié HDS (Hébergeur de Données de Santé). CloudSecure audite la conformité HDS de votre infrastructure cloud, identifie les écarts avec le référentiel ANSSI et vous accompagne dans la certification ou le choix d'un cloud souverain HDS agréé. Diagnostic de conformité HDS gratuit pour les établissements de santé mayennais.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les PME e-commerce et WMS cloud à Laval ?",
          a: "Oui. CloudSecure déploie des pipelines DevSecOps (GitLab CI/CD, GitHub Actions, AWS CodePipeline) intégrant des scans de sécurité automatisés (SAST, DAST, analyse des dépendances) pour les éditeurs SaaS et les PME e-commerce de Laval qui gèrent des entrepôts logistiques connectés. Nos consultants DevSecOps interviennent en régie ou en forfait à partir de 700 € HT/jour. L'objectif est d'automatiser la détection des vulnérabilités avant chaque mise en production pour éviter les incidents sur les plateformes WMS cloud.",
        },
        {
          q: "Quel est le coût d'un audit cloud pour une PME industrielle de la Mayenne ?",
          a: "Un audit cloud pour une PME industrielle de Laval ou de la Mayenne (10 à 200 salariés) est proposé à partir de 3 000 € HT pour un périmètre AWS ou Azure standard (IAM, réseau, stockage, conformité NIS2). Pour un périmètre multi-cloud ou incluant un ERP critique, le budget se situe entre 5 000 et 8 000 € HT. CloudSecure propose un devis gratuit en 24h et une restitution orale des résultats incluse dans toutes nos missions d'audit.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLaval;
