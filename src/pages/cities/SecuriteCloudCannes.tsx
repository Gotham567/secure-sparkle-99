import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCannes = () => (
  <CityLandingPage
    data={{
      city: "Cannes",
      citySlug: "cannes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06400",
      intro: "Cannes, capitale mondiale du cinéma et des grands événements MIPIM, génère des besoins cloud de streaming, gestion d'apps événementielles et hôtellerie de luxe Azure : CloudSecure sécurise vos infrastructures cloud événementielles et hôtelières contre les cybermenaces de la Côte d'Azur. Audit cloud sécurité événementiel Cannes, Azure luxe hôtellerie et conformité RGPD pour les entreprises des Alpes-Maritimes.",
      localContext: "Cannes héberge chaque année des événements mondiaux majeurs (Festival de Cannes, MIPIM, MIPCOM, ILTM) qui génèrent des besoins en streaming cloud haute disponibilité, en applications événementielles AWS et en gestion sécurisée des accréditations et données des participants soumises au RGPD. L'hôtellerie de luxe cannoise (palaces, hôtels 5 étoiles, résidences privées) utilise des PMS cloud et des CRM SaaS collectant des données ultra-sensibles de clients fortunés (célébrités, hommes d'affaires), constituant des cibles de premier choix pour les cybercriminels. L'immobilier de luxe et les proptech locales numérisent la gestion des biens via des plateformes cloud, avec des données de valorisation et d'identité des acheteurs à protéger rigoureusement. Les agences de presse et de communication présentes pendant les festivals génèrent des flux cloud massifs de médias haute définition.",
      sectors: [
        "Événementiel et festivals (streaming cloud AWS, apps événementielles, accréditations)",
        "Hôtellerie de luxe et palaces (PMS cloud Azure, CRM SaaS clients VIP)",
        "Immobilier de luxe et proptech (cloud données biens, identité acheteurs)",
        "Production cinématographique et médias (cloud stockage films, post-prod SaaS)",
        "Yachting et nautisme (IoT cloud maintenance, apps propriétaires navires)",
        "Retail luxe et boutiques (e-commerce SaaS, CRM clientèle internationale)",
      ],
      neighborhoods: [
        "La Croisette – Cannes centre",
        "Le Suquet – Vieux-Cannes",
        "Quartier des Affaires – Cannes-la-Bocca",
        "Palm Beach et pointe de la Croisette",
        "Communauté d'agglomération Cannes Pays de Lérins",
        "Alpes-Maritimes (06) – Côte d'Azur",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit de sécurité cloud pour une infrastructure événementielle à Cannes (festival, MIPIM) ?",
          a: "Un audit de sécurité cloud pour une infrastructure événementielle à Cannes est facturé entre 5 000 et 15 000 € HT selon la taille de la plateforme (streaming AWS, applications d'accréditation, gestion des médias, APIs partenaires). CloudSecure analyse la sécurité des architectures cloud de streaming (AWS Media Services, CloudFront), les droits d'accès aux bases de données des participants, la protection des données personnelles des accrédités (RGPD) et la résilience des systèmes pendant les pics de charge événementiels. Nous intervenons également en mode astreinte pendant les événements. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser les données ultra-sensibles des clients VIP d'un palace cannois hébergées dans le cloud ?",
          a: "Les palaces de Cannes hébergent des clients dont la vie privée a une valeur commerciale et personnelle exceptionnelle (célébrités, hommes politiques, chefs d'entreprise). Les PMS cloud (Opera Cloud, Protel Air) et les CRM SaaS de fidélisation collectant leurs préférences, séjours et coordonnées doivent être sécurisés avec des contrôles d'accès stricts. CloudSecure audite les droits d'accès du personnel hôtelier aux systèmes cloud, la politique de MFA, le chiffrement des profils clients, les logs d'accès aux données VIP et la conformité RGPD. Nous formons les équipes de réception aux risques d'ingénierie sociale. Forfait audit luxe hôtellerie cloud à partir de 6 000 € HT.",
        },
        {
          q: "Les organisateurs d'événements à Cannes sont-ils soumis au RGPD cloud pour les données des participants ?",
          a: "Oui, les organisateurs d'événements à Cannes (Festival, MIPIM, MIPCOM) collectent des données personnelles de participants (journalistes, acheteurs, producteurs, festivaliers) soumises au RGPD pour les ressortissants européens. Les bases de données d'accréditations cloud, les applications mobiles des festivals et les systèmes de gestion des médias doivent respecter les principes de minimisation des données, de limitation de la conservation et de sécurité. CloudSecure réalise des audits RGPD cloud pour les organisateurs cannois et accompagne la mise en conformité. Diagnostic RGPD événementiel gratuit.",
        },
        {
          q: "Comment sécuriser une infrastructure de streaming cloud haute disponibilité pendant le Festival de Cannes ?",
          a: "Le Festival de Cannes et les marchés professionnels (MIPIM, MIPCOM) génèrent des pics de charge massifs sur les infrastructures cloud de streaming et de médias. CloudSecure audite la résilience et la sécurité de vos architectures AWS ou Azure avant l'événement : tests de charge sécurisés, revue des configurations CloudFront/CDN, protection DDoS AWS Shield Advanced sur les diffusions en direct, sécurisation des APIs de médias et gestion des accès des équipes techniques pendant l'événement. Nous proposons également une astreinte cybersécurité cloud pendant les festivals. Forfait sécurisation événementielle à partir de 8 000 € HT.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Cannes pour les audits de sécurité cloud hôtellerie et événementiel ?",
          a: "Oui, CloudSecure intervient à Cannes en présentiel pour les audits hôteliers et événementiels : visites des palaces pour revue des architectures PMS/CRM cloud, interviews des Directeurs Informatiques, ateliers de sensibilisation des équipes hôtelières. Pendant les grands événements (Festival, MIPIM), nous pouvons assurer une présence sur site pour le soutien cybersécurité cloud. Les tests d'intrusion cloud et la revue de configuration sont réalisés à distance. Déplacement inclus pour les missions supérieures à 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCannes;
