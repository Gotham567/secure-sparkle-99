import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPerpignan = () => (
  <CityLandingPage
    data={{
      city: "Perpignan",
      citySlug: "perpignan",
      region: "Occitanie",
      postalCode: "66000",
      intro: "CloudSecure accompagne les opérateurs logistiques fruits/légumes, acteurs du tourisme numérique et e-commerçants de Perpignan dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Perpignan, sécurité cloud Azure Perpignan et conformité NIS2 cloud Perpignan pour la plateforme logistique agro-alimentaire catalane. Nos experts en sécurisation infrastructure cloud Perpignan protègent les données logistiques critiques du Marché Saint-Charles et des opérateurs touristiques des Pyrénées-Orientales.",
      localContext: "Perpignan abrite le Marché Saint-Charles, la plus grande plateforme logistique de fruits et légumes d'Europe, qui déploie des systèmes cloud AWS pour la gestion en temps réel des flux de marchandises, les API EDI avec les acheteurs GMS et la traçabilité des produits frais à l'exportation — une infrastructure logistique cloud critique dont la continuité d'activité est stratégique. Le secteur touristique des Pyrénées-Orientales (littoral catalan, Canet-en-Roussillon, côte vermeille) génère d'importants volumes de données de réservation en ligne avec des enjeux de sécurité PCI DSS et RGPD. L'e-commerce catalan et les PME du commerce transfrontalier avec l'Espagne développent des plateformes cloud bilingues. La viticulture roussillonnaise migre vers des systèmes de traçabilité cloud pour ses AOC et ses exportations.",
      sectors: [
        "Logistique fruits/légumes et Marché Saint-Charles (AWS cloud critique)",
        "Tourisme balnéaire catalan et booking numérique (PCI DSS cloud)",
        "E-commerce et commerce transfrontalier Franco-Espagnol",
        "Viticulture et AOC roussillonnaise (traçabilité cloud)",
        "Agroalimentaire et industrie alimentaire (ERP cloud)",
        "PME catalanes en transformation numérique (SaaS cloud)",
      ],
      neighborhoods: [
        "Perpignan Centre et Saint-Charles — négoce et logistique",
        "Le Moulin-à-Vent — parcs d'entreprises et PME",
        "Cabestany et Bompas — zones logistiques",
        "Canet-en-Roussillon et Le Barcarès — tourisme littoral",
        "Rivesaltes et Espira-de-l'Agly — viticulture et agroalimentaire",
        "Prades et Thuir — PME rurales roussillonnaises",
      ],
      faq: [
        {
          q: "Combien coûte un audit AWS pour un opérateur logistique du Marché Saint-Charles à Perpignan ?",
          a: "Un audit AWS pour un opérateur logistique du Marché Saint-Charles (couvrant les plateformes de gestion des flux temps réel, API EDI avec les GMS, S3 hébergeant les documents de traçabilité, conformité CIS Benchmark et résilience multi-AZ) est facturé entre 4 500 et 9 000 euros HT selon la complexité de l'architecture et le nombre de partenaires connectés. CloudSecure inclut une revue spécifique de la sécurité des APIs partenaires (acheteurs GMS, importateurs) et de la continuité d'activité cloud (RTO < 2h pour éviter les pertes de produits frais). Livraison du rapport sous 5 jours.",
        },
        {
          q: "Comment sécuriser une plateforme de booking touristique sur la Côte Catalane ?",
          a: "La sécurisation d'une plateforme de booking touristique sur la Côte Catalane couvre : la conformité PCI DSS pour les paiements en ligne (tokenisation, segmentation CDE), la protection des données personnelles des vacanciers (RGPD, minimisation), la résilience face aux pics de trafic estivaux (auto-scaling sécurisé, WAF), et la surveillance contre les fraudes à la réservation. CloudSecure réalise des audits sécurité cloud touristique Perpignan pour les opérateurs de la côte vermeil et des Pyrénées-Orientales.",
        },
        {
          q: "DevSecOps Perpignan : accompagnez-vous les startups e-commerce de l'Occitanie catalane ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech perpignanaises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, sécurisons les plateformes e-commerce bilingues (français-espagnol), déployons des outils SAST (Semgrep) et SCA (Snyk), et formons les équipes aux pratiques secure by design. Pour les PME avec des ressources limitées, nous proposons des missions de RSSI cloud externalisé Perpignan à temps partiel.",
        },
        {
          q: "Conformité NIS2 cloud pour les opérateurs logistiques perpignanais du secteur alimentaire ?",
          a: "Les opérateurs logistiques perpignanais gérant des plateformes de distribution alimentaire (Marché Saint-Charles, grossistes, importateurs) tombent dans le champ de NIS2 pour le secteur alimentaire dès 50 salariés ou 10 M€ de CA. CloudSecure réalise un diagnostic NIS2 cloud Perpignan et un audit complet des mesures de sécurité, avec une attention particulière sur la continuité d'activité des plateformes logistiques critiques, la sécurité des APIs EDI et la gestion des incidents avec notification ANSSI sous 72h.",
        },
        {
          q: "CloudSecure intervient-il à Perpignan et dans les Pyrénées-Orientales ?",
          a: "CloudSecure intervient à Perpignan, Canet-en-Roussillon, Rivesaltes et dans tout le département des Pyrénées-Orientales. Nous couvrons également le corridor Occitanie incluant Narbonne, Béziers, Montpellier et Nîmes. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Perpignan pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Perpignan. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPerpignan;
