import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBastia = () => (
  <CityLandingPage
    data={{
      city: "Bastia",
      citySlug: "bastia",
      region: "Haute-Corse",
      postalCode: "20200",
      intro: "Bastia, capital économique de la Haute-Corse, concentre des PME corses, un port numérique actif et des structures touristiques cloud : CloudSecure sécurise vos infrastructures Azure et AWS avec des audits conformes aux exigences de souveraineté des données corses. Expert sécurité cloud Bastia PME, audit Azure Corse du Nord et conformité RGPD pour les entreprises de Haute-Corse.",
      localContext: "Bastia et la Haute-Corse comptent de nombreuses PME corses qui migrent vers des ERP SaaS cloud et des outils collaboratifs Microsoft 365 sans politique de sécurité documentée, exposant leurs données commerciales et financières aux compromissions de comptes. Le port de Bastia, hub logistique majeur pour les flux transméditerranéens, utilise des plateformes de gestion portuaire cloud dont la sécurité est insuffisamment auditée face aux menaces de perturbation des opérations. Le secteur touristique dominant (locations saisonnières, hôtels, agences) utilise des SaaS de réservation (Booking, Airbnb API, logiciels PMS cloud) collectant des données personnelles de voyageurs soumises au RGPD. Les attaques par phishing ciblant les PME et commerçants bastiais sont en forte croissance.",
      sectors: [
        "PME corses et commerce (ERP cloud, Microsoft 365, CRM SaaS)",
        "Port de Bastia et logistique maritime (gestion portuaire cloud)",
        "Tourisme et hôtellerie (PMS cloud, plateformes réservation SaaS)",
        "BTP et construction (GED cloud, plans numériques, devis SaaS)",
        "Collectivités de Haute-Corse (dématérialisation cloud, RGPD)",
        "Santé et cabinets médicaux (logiciels SaaS médicaux, cloud HDS)",
      ],
      neighborhoods: [
        "Centre-ville de Bastia – place Saint-Nicolas",
        "Port de Bastia – Vieux-Port et port commercial",
        "Zone industrielle de Furiani",
        "Lupino et quartiers sud",
        "Cap Corse et Castagniccia (interventions)",
        "Haute-Corse (2B) – interventions toute l'île",
      ],
      faq: [
        {
          q: "Quel est le coût d'un audit de sécurité cloud Azure pour une PME bastiaiseou de Haute-Corse ?",
          a: "Un audit de sécurité cloud Azure pour une PME bastiaïse est facturé entre 3 500 et 8 000 € HT selon la taille du périmètre (nombre d'utilisateurs Microsoft 365, ressources Azure, applications SaaS connectées). CloudSecure analyse les droits d'accès Entra ID, les partages SharePoint/OneDrive, la protection anti-phishing Exchange Online, les politiques de MFA et les connexions à des applications tierces. Nous livrons un rapport de vulnérabilités priorisées sous 7 jours. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser les données touristiques cloud d'un hôtel ou d'une agence de location saisonnière à Bastia ?",
          a: "Les hôtels et agences touristiques de Bastia collectent des données personnelles de voyageurs (RGPD) et des coordonnées bancaires via des SaaS de réservation (PMS cloud, Booking.com, Airbnb API). CloudSecure audite la configuration des APIs de réservation, contrôle le chiffrement des données clients, vérifie les clauses DPA avec les hébergeurs cloud et les plateformes OTA, et recommande une authentification forte (MFA) pour tous les accès administrateurs. Nous formons également le personnel de réception aux risques de phishing et aux bonnes pratiques cloud. Forfait audit tourisme cloud à partir de 3 500 € HT.",
        },
        {
          q: "Les PME de Haute-Corse doivent-elles utiliser un cloud souverain pour leurs données sensibles ?",
          a: "Les PME corses traitant des données sensibles (données de santé, données personnelles massives, données financières) sont fortement encouragées à utiliser des hébergeurs certifiés HDS ou des offres de cloud souverain (OVHcloud, Outscale) pour garantir la localisation des données en France. CloudSecure évalue vos besoins en souveraineté des données, identifie les données requérant une protection renforcée et accompagne la migration vers des offres conformes RGPD avec garantie de localisation française. Diagnostic cloud souverain gratuit.",
        },
        {
          q: "Comment protéger la plateforme de gestion portuaire cloud du port de Bastia contre les cyberattaques ?",
          a: "Les systèmes de gestion portuaire cloud (planification des escales, gestion des marchandises, manifestes douaniers) constituent des infrastructures critiques dont la compromission peut paralyser les opérations maritimes. CloudSecure audite la sécurité des accès à ces plateformes, contrôle la segmentation réseau entre les systèmes opérationnels et les bureaux, teste les APIs de communication avec les compagnies de navigation, et évalue la conformité aux recommandations NIS2 pour les infrastructures portuaires. Pentest cloud portuaire à partir de 6 000 € HT.",
        },
        {
          q: "CloudSecure peut-il intervenir en présentiel à Bastia pour des missions d'audit cloud ?",
          a: "Oui, CloudSecure intervient régulièrement en Corse pour des missions d'audit et de conseil en sécurité cloud. Nos consultants se déplacent à Bastia pour les phases nécessitant une présence physique (ateliers RSSI, revues d'architecture réseau, formations sécurité). Les phases techniques (tests cloud, revue de configuration, DevSecOps) sont réalisées en distanciel via des accès sécurisés. Nous proposons un forfait déplacement Corse intégré pour les missions supérieures à 5 000 € HT. Premier entretien de cadrage offert en visioconférence sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBastia;
