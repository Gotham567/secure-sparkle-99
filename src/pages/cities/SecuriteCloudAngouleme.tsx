import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAngouleme = () => (
  <CityLandingPage
    data={{
      city: "Angoulême",
      citySlug: "angouleme",
      region: "Nouvelle-Aquitaine",
      postalCode: "16000",
      intro: "Angoulême, capitale mondiale de la BD et hub du cloud gaming AWS GameTech, concentre des studios cloud-native dont la propriété intellectuelle est une cible prioritaire des cybercriminels : CloudSecure sécurise vos infrastructures AWS, pipelines CI/CD et assets numériques. Audit sécurité cloud gaming Angoulême, conformité RGPD et DevSecOps pour les studios de jeux vidéo et l'industrie créative de Charente.",
      localContext: "La scène jeux vidéo angoumoisine utilise massivement AWS GameTech (GameLift pour les serveurs de jeu, EC2 GPU pour le cloud gaming, CloudFront pour la distribution), créant des surfaces d'attaque étendues sur les builds, les APIs de matchmaking et les bases de données joueurs. Les studios de BD numérique et les agences créatives stockent scripts, illustrations haute résolution et modèles 3D dans des buckets S3 ou Azure Blob souvent mal configurés en accès public. Le pôle Magelis, dédié à l'image et au numérique, héberge des producteurs audiovisuels dont les archives cloud contiennent des données confidentielles de production. L'industrie charentaise (papier, agroalimentaire, défense) numérise ses ERP sur des plateformes cloud hybrides exposées aux ransomwares ciblant les données de production.",
      sectors: [
        "Studios de jeux vidéo et cloud gaming (AWS GameTech, GameLift, EC2 GPU)",
        "Éditeurs BD numérique et animation 3D (assets S3, Azure Blob, render farm cloud)",
        "Pôle Magelis – production audiovisuelle et numérique (archives cloud)",
        "Industrie papetière et agroalimentaire (ERP cloud hybride, MES)",
        "Défense et sous-traitance industrielle (données sensibles cloud)",
        "PME tech et agences créatives (SaaS B2B, marketplace numérique)",
      ],
      neighborhoods: [
        "Plateau d'Angoulême – centre-ville",
        "Magelis – Pôle image et numérique",
        "Zone d'activités de Ma Campagne",
        "Zone industrielle de Gond-Pontouvre",
        "Grand Angoulême (agglomération)",
        "Charente (16) – Nouvelle-Aquitaine",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit de sécurité cloud AWS pour un studio de jeux vidéo à Angoulême ?",
          a: "Un audit de sécurité AWS pour un studio de jeux vidéo angoumoisin est facturé entre 4 000 et 10 000 € HT selon la taille de l'infrastructure cloud (serveurs de jeu GameLift, bases de données joueurs RDS, CDN CloudFront, pipelines de build). CloudSecure analyse les droits IAM des développeurs, la sécurité des buckets S3 contenant builds et assets, les configurations des Security Groups, les politiques de gestion des secrets (API keys, tokens) et les accès aux comptes de distribution (Steam, Epic). Rapport de vulnérabilités priorisées sous 7 jours, devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser une infrastructure AWS GameTech et protéger le code source d'un studio angoumoisin ?",
          a: "La protection du code source et des assets cloud gaming passe par un chiffrement côté client des buckets S3 avec des clés KMS dédiées, un contrôle IAM granulaire par développeur, l'intégration de GitGuardian pour détecter les secrets commis dans le code, et des alertes CloudWatch pour toute exfiltration anormale. CloudSecure implémente aussi une architecture Zero Trust pour les environnements GameTech : segmentation des comptes AWS dev/build/prod, protection DDoS AWS Shield Advanced, WAF sur les APIs de matchmaking et chiffrement des sauvegardes de progression joueurs. Nos ingénieurs interviennent en régie à 700-900 €/jour.",
        },
        {
          q: "Un studio de jeux vidéo angoumoisin doit-il se conformer au RGPD et à NIS2 pour ses données joueurs cloud ?",
          a: "Les studios de jeux vidéo collectent des données personnelles de joueurs (emails, pseudonymes, données de jeu, achats in-app) soumises au RGPD. Si le studio compte plus de 50 salariés et opère une plateforme considérée comme infrastructure numérique critique, NIS2 peut s'appliquer. CloudSecure réalise un diagnostic RGPD cloud et NIS2 pour les studios angoumoisins : audit des bases de données joueurs (RDS, DynamoDB), contrôle des politiques de conservation des données, cartographie des flux vers des partenaires tiers et procédures de notification de violation. Diagnostic d'éligibilité gratuit.",
        },
        {
          q: "Comment mettre en place un pipeline DevSecOps sécurisé pour un studio de jeux vidéo ou une startup créative d'Angoulême ?",
          a: "CloudSecure intègre la sécurité dans les pipelines CI/CD des studios angoumoisins : analyse SAST du code de jeu (C++, C#, Lua), scan des images Docker des serveurs dédiés avec Trivy, audit des configurations Terraform/CDK déployant l'infrastructure GameTech avec Checkov, et détection de secrets avec GitGuardian. Nos ingénieurs DevSecOps interviennent en régie à Angoulême à 700-900 €/jour ou en mode forfait pour bootstrapper votre pipeline GitHub Actions ou GitLab CI. Un atelier de formation sécurité cloud pour les équipes développement est disponible en demi-journée.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Angoulême pour les studios de jeux vidéo et l'industrie créative ?",
          a: "Oui, CloudSecure intervient à Angoulême en présentiel au pôle Magelis, dans les zones d'activités et dans les locaux des studios pour les phases d'audit nécessitant une présence physique : revue d'architecture, interviews des équipes techniques, ateliers de sensibilisation à la cybersécurité cloud. Les tests d'intrusion cloud, la revue de configuration AWS et les phases DevSecOps sont réalisés en distanciel via accès sécurisés. Déplacement inclus dans les forfaits supérieurs à 5 000 € HT. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAngouleme;
