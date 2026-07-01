import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMarseille = () => (
  <CityLandingPage
    data={{
      city: "Marseille",
      citySlug: "marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13000",
      intro: "CloudSecure accompagne les acteurs portuaires, logistiques, e-commerces méditerranéens et établissements de santé de Marseille dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Marseille, pentest cloud Marseille entreprise et sécurisation infrastructure cloud Marseille pour la logistique supply chain et la santé HDS. Nos experts protègent les données critiques du Grand Port Maritime de Marseille aux startups French Tech Aix-Marseille.",
      localContext: "Marseille est le premier port de France et de Méditerranée, avec une logistique portuaire massivement appuyée sur AWS pour la gestion de la supply chain, les plateformes EDI et les systèmes de tracking des conteneurs — des architectures cloud que CloudSecure audite avec une expertise sectorielle forte. Le e-commerce méditerranéen et les marketplaces marseillaises hébergent leurs catalogues et transactions sur des infrastructures AWS S3 et RDS dont les configurations de sécurité sont souvent insuffisantes. L'Assistance Publique Hôpitaux de Marseille (AP-HM) mène depuis 2023 une migration progressive vers le cloud souverain pour ses applications de santé, créant des besoins spécifiques en audit HDS et sécurité Azure santé Marseille. L'Euroméditerranée et la French Tech Aix-Marseille concentrent des startups cloud-native dont les architectures microservices nécessitent un accompagnement DevSecOps dédié.",
      sectors: [
        "Logistique portuaire et supply chain (AWS, EDI cloud)",
        "E-commerce et marketplaces méditerranéens",
        "Santé et HDS (AP-HM, cliniques privées PACA)",
        "Tourisme, hôtellerie et booking numérique",
        "Startups French Tech Aix-Marseille",
        "Agroalimentaire et industrie (Fos-sur-Mer)",
      ],
      neighborhoods: [
        "Euroméditerranée — startups et innovation",
        "Marseille Joliette et port autonome",
        "Aix-en-Provence et technopôle de l'Arbois",
        "Vitrolles, Marignane et zone industrielle",
        "Aubagne, Cassis et Est marseillais",
        "Fos-sur-Mer et zone industrialo-portuaire",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour une entreprise logistique portuaire à Marseille ?",
          a: "Un audit AWS pour une entreprise logistique du port de Marseille (couvrant les plateformes EDI, les API d'intégration, les buckets S3 de documents, les accès IAM des partenaires externes) est facturé entre 5 000 et 10 000 euros HT selon la complexité de l'architecture et le nombre de partenaires connectés. CloudSecure inclut une revue spécifique des autorisations inter-comptes AWS et des API Gateway exposées aux transitaires et armateurs. Le rapport identifie les risques d'accès non autorisé aux données de fret et les vecteurs d'attaque sur la supply chain numérique.",
        },
        {
          q: "Comment sécuriser les données de santé AP-HM sur le cloud en conformité HDS ?",
          a: "L'hébergement des données de l'AP-HM sur le cloud nécessite un hébergeur certifié HDS, la restriction aux régions françaises, le chiffrement des données au repos (AES-256) et en transit (TLS 1.2+), un système d'IAM strict avec traçabilité des accès aux dossiers patients, et une DPA (Data Processing Agreement) conforme. CloudSecure réalise des audits HDS cloud Marseille spécialisés pour les hôpitaux et cliniques PACA, accompagne la mise en conformité et forme les équipes DSI hospitalières aux exigences du référentiel HDS de l'ANS.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les startups marseillaises de la French Tech ?",
          a: "Oui, CloudSecure intervient en régie (700 à 900 euros par jour) ou au forfait pour les startups de la French Tech Aix-Marseille et d'Euroméditerranée. Nous intégrons la sécurité dans leurs pipelines CI/CD, sécurisons leurs clusters Kubernetes hébergés sur EKS ou GKE, déployons des outils SAST/DAST et formons les équipes ingénierie aux pratiques DevSecOps. Nous pouvons intervenir en présentiel à Marseille ou Aix-en-Provence pour les ateliers de démarrage et les formations.",
        },
        {
          q: "Quelles obligations NIS2 cloud pour les opérateurs logistiques portuaires marseillais ?",
          a: "Les opérateurs logistiques du port de Marseille classés dans les secteurs des transports et de la logistique tombent potentiellement dans le champ de NIS2 dès 50 salariés ou 10 M€ de CA. CloudSecure réalise un diagnostic NIS2 cloud Marseille gratuit pour qualifier votre statut d'entité importante ou essentielle, puis un audit complet des mesures de sécurité existantes. Les exigences portent notamment sur la sécurité des API EDI, la gestion des accès partenaires, la continuité d'activité et la notification des incidents à l'ANSSI sous 24h.",
        },
        {
          q: "CloudSecure intervient-il à Marseille et dans toute la région PACA ?",
          a: "CloudSecure intervient à Marseille, Aix-en-Provence, Toulon, Avignon, Nice, Cannes, Antibes et dans toute la région Provence-Alpes-Côte d'Azur. Les audits cloud techniques (AWS, Azure, GCP) se déroulent intégralement à distance pour une réactivité maximale, avec des interventions sur site à Marseille ou en PACA pour les ateliers de restitution, les formations d'équipes et les missions de RSSI cloud externalisé Marseille. Les délais de démarrage d'un audit sont de 24 à 48 heures après signature.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMarseille;
