import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudTarbes = () => (
  <CityLandingPage
    data={{
      city: "Tarbes",
      citySlug: "tarbes",
      region: "Occitanie",
      postalCode: "65000",
      intro: "CloudSecure sécurise les données PLM cloud de Safran Landing Systems et de la filière aéronautique de Tarbes contre les cybermenaces ciblant les données de conception d'atterrisseurs Boeing et Airbus. Audit cloud AWS/Azure aéronautique, conformité NIS2 industrie aéro et DevSecOps CI/CD pour les sous-traitants aéronautiques des Hautes-Pyrénées et d'Occitanie.",
      localContext: "Tarbes abrite Safran Landing Systems, leader mondial des systèmes d'atterrissage pour Airbus A320, Boeing 737 et les avions militaires, dont les données de conception PLM ultra-sensibles sont des cibles privilégiées pour les services de renseignement étrangers et les groupes cybercriminels spécialisés dans l'espionnage industriel aérospatial. L'écosystème de sous-traitants aéronautiques des Hautes-Pyrénées (mécanique de précision, traitement de surface, avionique) partage des accès cloud avec Safran, Airbus et les grands donneurs d'ordres, créant une surface d'attaque étendue via la supply chain numérique. Le Centre Hospitalier de Tarbes, l'agritech pyrénéenne (capteurs IoT dans les élevages et cultures d'altitude) et les collectivités des Hautes-Pyrénées complètent un tissu économique varié qui migre vers le cloud avec des besoins de sécurité croissants. CloudSecure maîtrise les exigences spécifiques de la sécurité cloud aéronautique (EN 9100, CMMC pour les marchés US, TISAX pour les exigences automobiles des équipementiers) et intervient à Tarbes, Séméac, Aureilhan, ainsi qu'à Pau et Lourdes.",
      sectors: [
        "Aéronautique cloud (Safran, sous-traitants PLM/CAO, atterrisseurs Boeing/Airbus)",
        "Agriculture numérique et agritech IoT (capteurs, élevage Pyrénées)",
        "Santé cloud (CH Tarbes, données médicales HDS)",
        "Collectivités et services publics Hautes-Pyrénées",
        "PME industrielles de précision (mécanique, traitement de surface)",
        "Formation et universités numériques (IUT Tarbes, écoles d'ingénieurs)",
      ],
      neighborhoods: [
        "Zone industrielle de Séméac (Safran et sous-traitants aéro)",
        "Centre-ville de Tarbes et quartier Brauhauban",
        "Aureilhan et agglomération tarbaise",
        "Hautes-Pyrénées (65) et piémont pyrénéen",
        "Pau (60 km) et bassin Pau-Lacq-Orthez",
        "Lourdes et tourisme religieux numérique",
      ],
      faq: [
        {
          q: "Comment sécuriser les données PLM cloud d'un sous-traitant aéronautique de Safran à Tarbes ?",
          a: "Les sous-traitants de Safran Landing Systems à Tarbes manipulent des données PLM (plans, gammes de fabrication, tolérances, certifications de navigabilité) qui sont parmi les données industrielles les plus sensibles du secteur aérospatial. CloudSecure réalise des audits cloud PLM couvrant la sécurité des plateformes collaboratives (Dassault Systèmes ENOVIA, Siemens Teamcenter, PTC Windchill), les droits d'accès des ingénieurs et partenaires, le chiffrement des fichiers CAO 3D et la conformité aux exigences de sécurité Safran (CSSF — Cybersecurity Supplier Framework). Forfait audit cloud PLM aéronautique à partir de 5 000 € HT, avec option pentest ciblé des interfaces de collaboration.",
        },
        {
          q: "Quel budget prévoir pour un audit cloud d'un sous-traitant aéronautique des Hautes-Pyrénées ?",
          a: "Le coût d'un audit cloud pour un sous-traitant aéronautique de Tarbes dépend de la taille de l'entreprise et de la complexité de l'environnement cloud : pour une PME de 20 à 100 salariés avec un ERP cloud et des accès PLM, le forfait se situe entre 5 000 et 10 000 € HT. Pour une ETI disposant d'une architecture multi-cloud avec des interconnexions Safran ou Airbus, le budget monte entre 10 000 et 20 000 € HT. CloudSecure propose également un accompagnement annuel en RSSI externalisé pour les sous-traitants aéronautiques à partir de 2 500 € HT/mois.",
        },
        {
          q: "Quelles sont les obligations NIS2 pour les sous-traitants aéronautiques de Tarbes ?",
          a: "Les sous-traitants aéronautiques de Tarbes dans le périmètre des secteurs critiques NIS2 (aéronautique, défense, industrie) doivent mettre en place une gestion des risques cyber documentée, réaliser des audits de sécurité réguliers de leurs systèmes cloud, et notifier les incidents cyber majeurs à l'ANSSI sous 24h. Les exigences des donneurs d'ordres (Safran, Airbus) vont souvent au-delà de NIS2 et incluent des audits TISAX, des certifications ISO 27001 ou la conformité au CMMC (Cybersecurity Maturity Model Certification) pour les marchés américains de défense. CloudSecure accompagne les PME tarbaises dans ces démarches de conformité multi-référentiels. Diagnostic gratuit.",
        },
        {
          q: "Comment déployer une approche DevSecOps CI/CD pour les équipes de développement aéronautique à Tarbes ?",
          a: "Les équipes de développement logiciel embarqué des sous-traitants aéronautiques de Tarbes (logiciels de contrôle de vol, interfaces avionique, outils de test) doivent intégrer la sécurité dans leurs pipelines CI/CD pour détecter les vulnérabilités dès la phase de développement. CloudSecure déploie des pipelines DevSecOps (GitLab CI/CD, Jenkins, Bitbucket Pipelines) intégrant l'analyse statique du code (SAST avec Checkmarx, SonarQube), les tests de dépendances (SCA) et la gestion des secrets. Nos consultants DevSecOps aéronautique interviennent en régie à partir de 800 € HT/jour ou en forfait projet. Nous formons également les développeurs aux bonnes pratiques de codage sécurisé DO-178C pour l'avionique.",
        },
        {
          q: "CloudSecure peut-il aider à la mise en conformité cloud HDS pour le Centre Hospitalier de Tarbes ?",
          a: "Oui. Le Centre Hospitalier de Tarbes et les cliniques des Hautes-Pyrénées qui hébergent des données de santé dans le cloud (DMP, imagerie PACS, résultats de biologie) sont soumis à la certification HDS et aux exigences NIS2 pour les entités essentielles du secteur santé. CloudSecure réalise des audits de conformité HDS de votre infrastructure cloud, identifie les écarts avec le référentiel ASIP Santé, et vous accompagne dans la mise en place des mesures correctives et dans le choix d'un hébergeur cloud certifié HDS. Nous intégrons également la continuité d'activité cloud (PRA hospitalier) dans nos missions. Forfait audit HDS santé à partir de 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudTarbes;
