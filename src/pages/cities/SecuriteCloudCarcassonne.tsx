import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCarcassonne = () => (
  <CityLandingPage
    data={{
      city: "Carcassonne",
      citySlug: "carcassonne",
      region: "Occitanie",
      postalCode: "11000",
      intro: "Carcassonne, site UNESCO et hub touristique languedocien, concentre des plateformes de réservation cloud, des coopératives viticoles de l'Aude et des PME en pleine numérisation : CloudSecure sécurise vos infrastructures cloud tourisme et viticulture contre les cybermenaces méditerranéennes. Audit cloud tourisme Carcassonne, sécurité AWS PME Aude et conformité RGPD pour les entreprises d'Occitanie.",
      localContext: "Carcassonne attire plus de 3 millions de visiteurs par an sur son site UNESCO, générant des flux massifs de réservations cloud via des PMS hôteliers, des plateformes OTA (Booking, Airbnb) et des applications de visite qui collectent des données personnelles de touristes du monde entier soumises au RGPD. Le vignoble de l'Aude (Corbières, Minervois, Blanquette de Limoux) compte de nombreuses coopératives qui numérisent la traçabilité de leurs vins via des plateformes cloud IoT et des logiciels de gestion de cave, avec des besoins croissants en sécurité des données de production. Les PME carccassonnaises du commerce et de l'artisanat migrent vers des outils cloud (Microsoft 365, ERP SaaS) sans politique de sécurité documentée. Les collectivités de l'Aude adoptent des services cloud pour la dématérialisation administrative avec des enjeux de conformité RGPD.",
      sectors: [
        "Tourisme et site UNESCO (réservations cloud, PMS hôteliers, apps visite)",
        "Viticulture et coopératives Aude (traçabilité cloud IoT, Corbières, Minervois)",
        "PME commerce et artisanat (Microsoft 365, ERP cloud, e-commerce)",
        "Collectivités et Aude Agglo (dématérialisation cloud, RGPD public)",
        "Restauration et gastronomie (logiciels caisse cloud, réservation SaaS)",
        "BTP et construction (GED cloud, devis SaaS, gestion de chantier)",
      ],
      neighborhoods: [
        "Cité médiévale de Carcassonne – site UNESCO",
        "Bastide Saint-Louis – centre-ville commerçant",
        "Zone industrielle de la Bouriette",
        "Salvaza et zone aéroportuaire",
        "Aude Agglo (agglomération carcassonnaise)",
        "Aude (11) – Corbières, Minervois",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud pour une structure touristique ou un hôtel à Carcassonne ?",
          a: "Un audit de sécurité cloud pour un hôtel ou une structure touristique de Carcassonne est facturé entre 3 500 et 7 000 € HT selon le périmètre (PMS cloud, plateformes OTA connectées, CRM clients, site web de réservation). CloudSecure analyse la sécurité des APIs OTA (Booking, Airbnb), les droits d'accès du personnel aux systèmes de réservation cloud, le chiffrement des données clients, la conformité RGPD et la protection contre les fraudes aux paiements. Rapport de vulnérabilités priorisées sous 7 jours. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser la traçabilité cloud d'une coopérative viticole de l'Aude (Corbières, Minervois) ?",
          a: "Les coopératives viticoles de l'Aude utilisent des plateformes cloud de traçabilité AOC et des logiciels de gestion de cave hébergés en SaaS (Vinistory, Winemaker, ODG cloud). CloudSecure audite la sécurité des accès à ces plateformes, les droits des œnologues et des commerciaux, le chiffrement des données de production (volumes, analyses, stocks) et les politiques de partage avec les organismes interprofessionnels (CIVL). Nous configurons également des sauvegardes cloud sécurisées pour les données de stocks et de commandes. Forfait audit cloud vitivinicole à partir de 4 000 € HT.",
        },
        {
          q: "La gestion des données personnelles des touristes du monde entier à Carcassonne impose-t-elle des obligations spéciales ?",
          a: "Oui, les structures touristiques de Carcassonne accueillent des visiteurs de l'UE (soumis au RGPD), du Royaume-Uni (UK GDPR), des États-Unis et d'Asie. Les plateformes de réservation et les applications mobiles du site UNESCO doivent se conformer au RGPD pour les ressortissants européens, avec des politiques de conservation des données, des clauses DPA avec les prestataires cloud et des procédures de notification de violation. CloudSecure réalise des audits RGPD cloud pour les opérateurs touristiques carcassonnais et accompagne la mise en conformité. Diagnostic RGPD gratuit.",
        },
        {
          q: "Comment protéger les PME carccassonnaises de l'artisanat et du commerce contre le phishing et les ransomwares cloud ?",
          a: "Les PME de Carcassonne utilisant Microsoft 365 ou des ERP SaaS cloud sont exposées aux campagnes de phishing ciblant les comptes de messagerie et aux ransomwares propagés via des emails frauduleux. CloudSecure audite la sécurité de votre Microsoft 365 : activation du MFA, filtrage anti-phishing avancé (Defender for Office 365), politique de partage SharePoint/OneDrive, revue des règles de transfert automatique de courriers. Nous formons également vos équipes à la détection des emails frauduleux. Forfait audit Microsoft 365 PME à partir de 2 500 € HT.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Carcassonne pour les audits de sécurité cloud ?",
          a: "Oui, CloudSecure intervient à Carcassonne et dans l'Aude en présentiel pour les missions nécessitant une présence physique : revue des réseaux hôteliers et touristiques, interviews des équipes IT, ateliers de sensibilisation des personnels en contact avec des données clients. Les tests cloud et la revue de configuration AWS/Azure/Microsoft 365 sont réalisés à distance. Déplacement inclus pour les forfaits supérieurs à 5 000 € HT. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCarcassonne;
