import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAjaccio = () => (
  <CityLandingPage
    data={{
      city: "Ajaccio",
      citySlug: "ajaccio",
      region: "Corse-du-Sud",
      postalCode: "20000",
      intro: "Collectivités corses, offices de tourisme et administrations d'Ajaccio : CloudSecure sécurise vos infrastructures cloud Azure et AWS avec des audits conformes aux exigences de cloud souverain et NIS2. Expert en sécurité cloud pour les PME et entités publiques de Corse-du-Sud, avec interventions en présentiel à Ajaccio et en distanciel.",
      localContext: "Ajaccio, capital de la Corse-du-Sud, concentre les administrations régionales et les collectivités territoriales corses qui migrent vers des plateformes cloud — souvent Azure Government ou des offres souveraines (OVHcloud) — pour respecter les exigences de localisation des données publiques. Le secteur touristique, pilier de l'économie ajaccienne, utilise des plateformes cloud de réservation (Booking, Airbnb API) et des systèmes CRM SaaS dont la sécurité est insuffisamment auditée. Les PME et artisans du BTP numérisent leurs devis et plans via des outils cloud (SharePoint, Dropbox Business) sans politique de sécurité claire. Les risques de phishing ciblant les agents publics corses et les ransomwares sur les PME locales sont en forte augmentation.",
      sectors: [
        "Collectivités territoriales et Collectivité de Corse (cloud souverain)",
        "Offices de tourisme et hébergements (cloud réservation SaaS)",
        "PME du BTP et construction numérique (GED cloud, plans)",
        "Administrations préfectorales et services de l'État",
        "Santé et cliniques (cloud HDS, dossiers patients)",
        "Commerce et distribution locale (e-commerce, ERP cloud)",
      ],
      neighborhoods: [
        "Centre-ville d'Ajaccio – Cours Napoléon",
        "Zone industrielle de Mezzavia",
        "Quartier des Cannes – port commercial",
        "Les Milelli et périphérie ouest",
        "Communauté d'agglomération du Pays Ajaccien (CAPA)",
        "Corse-du-Sud et Haute-Corse (interventions île entière)",
      ],
      faq: [
        {
          q: "Quel est le coût d'un audit cloud pour une collectivité territoriale à Ajaccio ?",
          a: "Un audit cloud pour une collectivité ajaccienne (commune, intercommunalité, office de tourisme) est facturé entre 3 500 et 8 000 € HT selon la taille du périmètre cloud (Azure, Microsoft 365, GCP). CloudSecure analyse les droits d'accès des agents, les politiques de sauvegarde des données publiques, la conformité RGPD et les flux vers des prestataires SaaS tiers. Nous livrons un rapport priorisé avec des recommandations applicables immédiatement. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un cloud de réservation touristique à Ajaccio avec les exigences de protection des données ?",
          a: "Les plateformes de réservation utilisées par les hôtels et offices de tourisme d'Ajaccio collectent des données personnelles (RGPD) et des informations bancaires. CloudSecure audite la configuration des APIs cloud (Booking.com API, Stripe, SaaS CRM) pour détecter les expositions, contrôle le chiffrement des données au repos et en transit, et vérifie les clauses contractuelles DPA avec les hébergeurs cloud. Nous recommandons des solutions d'authentification forte (MFA) et de monitoring des accès pour protéger les données clients. Un pentest cloud ciblé sur vos interfaces web est proposé à partir de 6 000 € HT.",
        },
        {
          q: "Les administrations corses doivent-elles utiliser un cloud souverain certifié SecNumCloud ?",
          a: "Les organismes publics corses traitant des données sensibles ou des informations relevant de la sécurité nationale sont incités à utiliser des offres de cloud souverain qualifiées SecNumCloud par l'ANSSI (OVHcloud, Outscale/S3NS). CloudSecure accompagne la Collectivité de Corse et les administrations ajacciennes dans l'évaluation de leur éligibilité à SecNumCloud, la migration vers des offres souveraines et la rédaction des PSSI (Politique de Sécurité des Systèmes d'Information). Nous intervenons en présentiel à Ajaccio pour les ateliers de qualification.",
        },
        {
          q: "Comment mettre en place une PSSI cloud conforme NIS2 pour une PME d'Ajaccio ?",
          a: "La directive NIS2 s'applique aux PME de plus de 50 salariés ou 10 M€ de CA dans les secteurs critiques — ce qui inclut certaines PME ajacciennes du BTP, de la santé et des transports. CloudSecure réalise un diagnostic NIS2 gratuit pour déterminer votre éligibilité, puis rédige votre PSSI cloud (politique de gestion des accès, plan de continuité, procédures d'incident). Nos RSSI cloud externalisés assurent ensuite le suivi mensuel à partir de 2 000 € HT/mois, entièrement en distanciel ou avec des déplacements réguliers à Ajaccio.",
        },
        {
          q: "CloudSecure peut-il intervenir en présentiel à Ajaccio malgré l'insularité de la Corse ?",
          a: "Oui, CloudSecure intervient régulièrement en Corse pour des missions d'audit et de conseil en sécurité cloud. Nos consultants se déplacent à Ajaccio pour les phases nécessitant une présence physique (ateliers RSSI, audits d'architecture réseau, formations sécurité). Les phases techniques (tests cloud, revue de code, DevSecOps) sont réalisées en distanciel via des accès sécurisés. Nous proposons un forfait déplacement Ajaccio intégré pour les missions supérieures à 5 000 € HT. Un premier entretien de cadrage est toujours proposé en visioconférence avant tout déplacement.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAjaccio;
