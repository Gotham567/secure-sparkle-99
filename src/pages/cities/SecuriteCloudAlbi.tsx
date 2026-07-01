import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAlbi = () => (
  <CityLandingPage
    data={{
      city: "Albi",
      citySlug: "albi",
      region: "Occitanie",
      postalCode: "81000",
      intro: "CloudSecure accompagne les PME et collectivités du Tarn dans la sécurisation de leurs environnements cloud AWS et Azure : audit sécurité cloud Albi, conformité NIS2 et RSSI externalisé pour les entreprises d'Occitanie. Protégez vos ERP SaaS, données agroalimentaires et systèmes cloud des collectivités du Tarn contre les cybermenaces.",
      localContext: "Albi, préfecture du Tarn, compte un tissu de PME industrielles et agroalimentaires qui migrent vers des ERP SaaS (SAP Business One cloud, Sage cloud) et des systèmes de gestion documentaire cloud, créant des besoins urgents en sécurité des accès et en conformité RGPD. Le secteur agroalimentaire tarnais (viandes, conserveries, produits du terroir) digitalise ses processus de traçabilité via des plateformes cloud IoT, exposées aux attaques sur les APIs et aux ransomwares ciblant les chaînes logistiques. Les collectivités du Tarn (Albi Métropole, communes rurales) adoptent des services cloud pour la dématérialisation administrative, avec des enjeux de souveraineté des données publiques. Les attaques par phishing ciblant les TPE/PME albioises se multiplient, avec des pertes financières liées aux faux virements (FOVI) et aux détournements de comptes SaaS.",
      sectors: [
        "PME industrielles et ERP SaaS cloud (SAP, Sage Business Cloud)",
        "Agroalimentaire et traçabilité cloud IoT (Tarn)",
        "Collectivités et Albi Métropole (dématérialisation cloud)",
        "Commerce et négoce (e-commerce, CRM SaaS)",
        "Santé et cabinets médicaux (cloud HDS, logiciels SaaS)",
        "Artisanat et BTP (GED cloud, devis SaaS)",
      ],
      neighborhoods: [
        "Centre-ville d'Albi – Place du Vigan",
        "Zone industrielle de Cantepau",
        "Parc d'activités de Séquestre",
        "Albi Métropole (communes périphériques)",
        "Grand Albigeois – Lavaur, Gaillac",
        "Département du Tarn (81) – interventions toute zone",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité cloud AWS pour une PME alboise ?",
          a: "Un audit de sécurité cloud AWS pour une PME du Tarn est facturé entre 3 500 et 8 000 € HT selon le nombre de services cloud exposés (EC2, S3, RDS), la complexité des droits IAM et le nombre d'environnements (dev, staging, prod). CloudSecure inclut une analyse des politiques de sauvegarde, une revue des accès administrateurs et un rapport de vulnérabilités priorisées livré sous 7 jours. Pour les PME avec un ERP SaaS cloud (SAP Business One, Sage), nous auditons aussi les intégrations API et les flux de données inter-applicatifs.",
        },
        {
          q: "Comment sécuriser un ERP SaaS cloud pour une PME industrielle à Albi ?",
          a: "Les PME industrielles albioses qui utilisent des ERP SaaS cloud (SAP Business One cloud, Cegid, Odoo cloud) doivent sécuriser les accès utilisateurs (MFA obligatoire), contrôler les droits par profil métier et chiffrer les exports de données sensibles (fichiers de paie, données clients, plans industriels). CloudSecure audite votre configuration ERP cloud, détecte les comptes à privilèges excessifs, vérifie les logs d'accès et recommande des politiques de mot de passe conformes. Nous proposons également un accompagnement NIS2 si votre ERP gère des processus de production critiques.",
        },
        {
          q: "Les collectivités du Tarn doivent-elles se conformer à des exigences cloud spécifiques ?",
          a: "Les collectivités territoriales du Tarn (Albi Métropole, communes, départements) sont soumises à la circulaire interministérielle sur la sécurisation des systèmes d'information de l'État et au RGPD pour les données des administrés. CloudSecure réalise des audits cloud pour les mairies et EPCI : contrôle des accès aux outils de dématérialisation (Pastell, e-Actes), sécurisation des messageries cloud (Microsoft 365), et conformité aux recommandations ANSSI pour les collectivités. Un diagnostic de maturité cybersécurité est proposé gratuitement.",
        },
        {
          q: "Comment protéger une chaîne de traçabilité agroalimentaire cloud contre les cyberattaques dans le Tarn ?",
          a: "Les producteurs et transformateurs agroalimentaires tarnais utilisent des plateformes cloud de traçabilité (IoT, ERP, EDI) qui constituent des cibles de choix pour les ransomwares ciblant la supply chain. CloudSecure audite les accès aux plateformes cloud de traçabilité, contrôle les intégrations EDI avec les distributeurs, chiffre les flux de données IoT (capteurs température, humidité) et met en place des alertes de détection d'anomalies. Un test de pénétration cloud ciblé sur vos APIs de traçabilité est proposé à partir de 6 000 € HT.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Albi ou uniquement à distance ?",
          a: "CloudSecure intervient à Albi aussi bien en présentiel qu'en distanciel. Nos consultants se déplacent dans les zones industrielles de Cantepau et de Séquestre pour les phases d'audit nécessitant une présence sur site (interviews de direction, revue d'architecture réseau physique, ateliers de sensibilisation). Les tests d'intrusion cloud et la revue de configuration sont réalisés entièrement à distance via accès sécurisés. Déplacement inclus dans les forfaits supérieurs à 5 000 € HT. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAlbi;
