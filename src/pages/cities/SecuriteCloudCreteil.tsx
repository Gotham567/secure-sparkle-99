import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCreteil = () => (
  <CityLandingPage
    data={{
      city: "Créteil",
      citySlug: "creteil",
      region: "Île-de-France",
      postalCode: "94000",
      intro: "Créteil abrite le CHU Henri-Mondor, l'un des plus grands hôpitaux universitaires d'Île-de-France, dont les données de santé cloud nécessitent une conformité HDS stricte : CloudSecure sécurise vos infrastructures cloud santé, administration numérique et e-commerce du Val-de-Marne. Audit cloud HDS CHU Créteil, sécurité Azure santé Val-de-Marne et conformité NIS2 pour les établissements de santé et collectivités du 94.",
      localContext: "Le CHU Henri-Mondor de Créteil est l'un des hôpitaux universitaires les plus importants d'Île-de-France, hébergeant des données de santé dans des environnements cloud HDS (Dossiers Patients Informatisés, imagerie médicale, résultats biologiques) soumis aux exigences strictes de l'ASIP Santé et aux référentiels de sécurité de l'ANSSI. Le Val-de-Marne compte de nombreux établissements de santé (cliniques privées, EHPAD, SSR) qui migrent vers des logiciels SaaS cloud médicaux sans expertise de sécurité HDS suffisante. L'administration du Val-de-Marne (Conseil Départemental, communes) adopte des services cloud de dématérialisation avec des enjeux de protection des données des administrés. Les PME et commerçants de Créteil et des communes voisines développent des activités e-commerce cloud sans politique de sécurité adéquate.",
      sectors: [
        "CHU Henri-Mondor et hôpitaux publics (cloud HDS, imagerie, DPI, biologie)",
        "Cliniques privées et EHPAD (SaaS médical cloud, données patients HDS)",
        "Administration Val-de-Marne et communes (cloud public, RGPD administrés)",
        "Universités et UPEC (cloud éducation, données de recherche)",
        "PME et e-commerce (boutiques en ligne, ERP cloud, RGPD clients)",
        "Services de santé libéraux (logiciels de cabinet SaaS, partage données cloud)",
      ],
      neighborhoods: [
        "Créteil centre – Place Salvador Allende",
        "CHU Henri-Mondor – quartier hospitalier",
        "Les Coteaux et Palais de Justice",
        "Maisons-Alfort et Saint-Maur-des-Fossés",
        "Communauté d'agglomération Paris-Est Marne & Bois",
        "Val-de-Marne (94) – Île-de-France",
      ],
      faq: [
        {
          q: "Combien coûte une mise en conformité HDS cloud pour le CHU Henri-Mondor ou une clinique du Val-de-Marne ?",
          a: "Une mise en conformité HDS (Hébergeur de Données de Santé) cloud pour un établissement de santé créteilois est facturée entre 10 000 et 25 000 € HT selon la taille de l'infrastructure cloud (imagerie médicale, DPI, biologie, téléconsultation) et les écarts par rapport aux exigences HDS v2. CloudSecure réalise un audit HDS complet : contrôle des habilitations d'accès, chiffrement des données de santé au repos et en transit, sauvegardes géo-redondées en France, traçabilité des accès aux dossiers patients et plan de continuité des systèmes critiques. Rapport d'écarts avec plan de remédiation priorisé. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un DPI (Dossier Patient Informatisé) cloud au CHU de Créteil conformément à HDS et NIS2 ?",
          a: "Le DPI cloud du CHU Henri-Mondor contient des données de santé ultra-sensibles (diagnostics, prescriptions, comptes-rendus opératoires, imagerie) dont la compromission peut mettre en danger la vie des patients. CloudSecure audite la sécurité du DPI cloud : droits d'accès des praticiens (RBAC strict), authentification forte via carte CPS, chiffrement des données médicales, traçabilité des consultations de dossiers (NAS), politique de sauvegarde immuable et conformité aux exigences NIS2 pour les établissements de santé. Nous accompagnons également la préparation aux audits HDS des hébergeurs certifiés.",
        },
        {
          q: "Les cliniques privées et EHPAD du Val-de-Marne sont-ils obligés de certifier HDS leurs logiciels SaaS médicaux ?",
          a: "Oui, tout hébergeur cloud traitant des données de santé à caractère personnel pour le compte d'un professionnel ou d'un établissement de santé doit être certifié HDS (loi de modernisation du système de santé). CloudSecure accompagne les cliniques et EHPAD du Val-de-Marne dans la vérification de la certification HDS de leurs prestataires SaaS (logiciels de cabinet, DPI, téléconsultation), l'audit de leur propre sécurité cloud et la mise en place des politiques de sécurité requises. Nous intervenons également en cas d'incident de sécurité sur des données de santé. Diagnostic HDS gratuit.",
        },
        {
          q: "Comment le Conseil Départemental du Val-de-Marne peut-il sécuriser ses services cloud de dématérialisation ?",
          a: "Le Conseil Départemental du Val-de-Marne utilise des services cloud de dématérialisation (Portail famille, aide sociale, RSA, marchés publics) qui collectent des données personnelles sensibles d'administrés soumises au RGPD et à la réglementation sur les systèmes d'information des administrations. CloudSecure audite la sécurité des portails numériques, les droits d'accès des agents, la conformité des transferts de données vers des prestataires cloud et les politiques de sécurité des messageries (Microsoft 365 gouvernement). Nous accompagnons également la conformité NIS2 pour les administrations publiques locales. Diagnostic cybersécurité collectivité gratuit.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Créteil pour les audits cloud santé et administration ?",
          a: "Oui, CloudSecure intervient à Créteil et dans le Val-de-Marne en présentiel pour les audits cloud santé et administration : visites du CHU Henri-Mondor et des cliniques pour les revues d'architecture HDS, interviews des RSSI et DSI hospitaliers, ateliers de sensibilisation des équipes soignantes. Nos consultants sont formés aux contraintes des environnements de santé réglementés. Les tests cloud et la revue de configuration sont réalisés à distance. Déplacement inclus pour les missions supérieures à 8 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCreteil;
