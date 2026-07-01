import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAntibes = () => (
  <CityLandingPage
    data={{
      city: "Antibes",
      citySlug: "antibes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06600",
      intro: "Sophia Antipolis, premier technoparc européen adjacent à Antibes, concentre des centaines de startups deeptech et SaaS B2B cloud-native : CloudSecure réalise vos audits AWS Sophia Antipolis, DevSecOps et conformité NIS2 pour les entreprises de la Côte d'Azur. Sécurité cloud SaaS, protection des données IoT yachting et conformité RGPD pour les sociétés d'Antibes et Juan-les-Pins.",
      localContext: "Sophia Antipolis héberge plus de 2 000 entreprises technologiques dont de nombreuses startups cloud-native (SaaS B2B, deeptech IA, fintech) opérant sur AWS et Azure avec des architectures microservices et des APIs exposées nécessitant des audits de sécurité réguliers. Le secteur du yachting de luxe, très présent à Antibes (Port Vauban, chantiers navals), génère des données IoT (navigation, maintenance prédictive, domotique du navire) hébergées dans le cloud sans politiques de sécurité adaptées. Les hôtels de luxe et les résidences haut de gamme de la Côte d'Azur utilisent des SaaS de gestion (PMS cloud, CRM luxe) exposés aux compromissions de comptes. Les fintechs et plateformes de paiement de la technopole doivent se conformer à PSD2 et aux exigences de sécurité cloud des régulateurs financiers européens.",
      sectors: [
        "Startups et deeptech cloud-native de Sophia Antipolis (SaaS B2B, IA, ML)",
        "Yachting et nautisme de luxe (IoT cloud navigation, maintenance prédictive)",
        "Hôtellerie et immobilier de luxe (PMS cloud, CRM SaaS Côte d'Azur)",
        "Fintech et paiement électronique (conformité PSD2, cloud sécurisé)",
        "Télécommunications et réseaux (R&D cloud, protocoles sécurisés)",
        "Santé et biotech (cloud HDS, données cliniques Sophia Antipolis)",
      ],
      neighborhoods: [
        "Sophia Antipolis – technopôle (Valbonne)",
        "Port Vauban – Antibes centre nautisme",
        "Juan-les-Pins et Cap d'Antibes",
        "Biot et Villeneuve-Loubet (tech cluster)",
        "Communauté d'agglomération de Sophia Antipolis (CASA)",
        "Alpes-Maritimes (06) – Côte d'Azur",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit AWS pour une startup SaaS cloud-native de Sophia Antipolis ?",
          a: "Un audit de sécurité AWS pour une startup SaaS de Sophia Antipolis est facturé entre 3 500 et 8 000 € HT selon la complexité de l'architecture (microservices, Kubernetes EKS, API Gateway, Lambda). CloudSecure analyse les droits IAM des équipes dev/ops, les configurations des Load Balancers, les politiques de sécurité des conteneurs et les secrets stockés dans AWS Secrets Manager. Nous livrons un rapport de vulnérabilités priorisées avec des recommandations immédiates, ainsi qu'un plan de remédiation Terraform pour corriger les dérives de configuration. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser les données IoT d'un yacht connecté hébergées dans le cloud pour des chantiers d'Antibes ?",
          a: "Les yachts de luxe d'Antibes et Port Vauban collectent des données IoT (position GPS, données moteur, systèmes domotiques) souvent hébergées dans AWS IoT Core ou Azure IoT Hub sans authentification forte. CloudSecure audite la sécurité des pipelines IoT cloud : certificats X.509 des appareils, politique IAM des topics MQTT, chiffrement des données en transit et au repos, et détection des anomalies comportementales. Nous sécurisons également les applications mobiles de gestion du navire et les portails web d'armateurs. Forfait IoT cloud yachting à partir de 5 000 € HT.",
        },
        {
          q: "Les startups de Sophia Antipolis sont-elles concernées par NIS2 et quelles sont les implications cloud ?",
          a: "Les startups deeptech de Sophia Antipolis dans les secteurs de la santé numérique, des télécommunications, de l'énergie ou des infrastructures numériques peuvent être éligibles à NIS2 dès 50 salariés ou 10 M€ de CA. CloudSecure réalise un diagnostic NIS2 gratuit pour les entreprises de la technopole, puis accompagne la mise en conformité cloud : gestion des incidents de sécurité, politique de continuité d'activité cloud, cartographie des dépendances cloud critiques et reporting aux autorités (ANSSI). Nos RSSI cloud externalisés assurent le suivi à partir de 2 000 € HT/mois.",
        },
        {
          q: "Comment mettre en place un pipeline DevSecOps sécurisé pour une startup cloud-native de Sophia Antipolis ?",
          a: "CloudSecure intègre la sécurité dans les pipelines CI/CD des startups de Sophia Antipolis : scan SAST avec SonarQube Cloud, détection de secrets avec GitGuardian, analyse des images Docker avec Trivy, validation des configurations Terraform avec Checkov et tests DAST automatisés avec OWASP ZAP. Nos ingénieurs DevSecOps interviennent en régie à Sophia Antipolis à 700-900 €/jour pour bootstrapper votre pipeline GitHub Actions ou GitLab CI. Nous proposons aussi un atelier de 2 jours pour former vos équipes développement aux pratiques DevSecOps cloud-native.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Antibes et Sophia Antipolis pour les audits de sécurité cloud ?",
          a: "Oui, CloudSecure intervient régulièrement à Sophia Antipolis et Antibes pour des missions d'audit et de conseil. Nos consultants se déplacent dans les bâtiments de la technopole pour les ateliers RSSI, revues d'architecture et sessions de remédiation. Les phases de test cloud sont réalisées en distanciel via accès sécurisés VPN. Nous proposons des formules hybrides adaptées aux startups : kickoff en présentiel à Sophia Antipolis et suivi hebdomadaire en visioconférence. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAntibes;
