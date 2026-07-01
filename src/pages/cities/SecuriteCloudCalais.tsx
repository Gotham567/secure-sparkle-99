import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCalais = () => (
  <CityLandingPage
    data={{
      city: "Calais",
      citySlug: "calais",
      region: "Hauts-de-France",
      postalCode: "62100",
      intro: "Calais, porte d'entrée transmanche de l'Europe, gère des flux logistiques colossaux en temps réel via des plateformes cloud AWS : CloudSecure sécurise vos infrastructures logistiques cloud contre les cyberattaques ciblant la supply chain transmanche et le e-commerce cross-border. Audit cloud logistique Calais transmanche, conformité NIS2 et sécurité AWS e-commerce pour les opérateurs du port de Calais.",
      localContext: "Eurotunnel (Getlink) et les opérateurs portuaires de Calais gèrent des flux logistiques transmanche en temps réel via des plateformes cloud AWS et Azure interconnectées avec des systèmes douaniers UK et UE post-Brexit, constituant des infrastructures critiques exposées aux cyberattaques ciblant la continuité des transports. Le e-commerce cross-border explose à Calais avec des entrepôts de réexpédition qui utilisent des WMS cloud pour gérer les flux UK-UE, avec des enjeux de conformité RGPD sur les données des acheteurs britanniques et européens. Le port de Calais développe des outils cloud de gestion du trafic maritime et de la sécurité portuaire, soumis aux exigences NIS2 pour les infrastructures critiques de transport. Les PME calaisiennesdu tertiaire et du service migrent vers Microsoft 365 et des SaaS cloud sans expertise de sécurité.",
      sectors: [
        "Logistique transmanche et Eurotunnel (plateformes cloud temps réel, douanes)",
        "E-commerce cross-border UK-UE (WMS cloud, réexpédition, RGPD)",
        "Port de Calais et opérateurs maritimes (cloud portuaire sécurisé, NIS2)",
        "Transport routier et TIR (TMS cloud, traçabilité flux, EDI)",
        "Industrie dentelle et textile (ERP cloud, e-commerce, export)",
        "Collectivités et agglomération Cal'Aid (dématérialisation cloud)",
      ],
      neighborhoods: [
        "Centre-ville de Calais – Basse-Ville",
        "Port de Calais et terminal transmanche",
        "Zone industrielle des Fontinettes",
        "Coquelles – Eurotunnel et Cité Europe",
        "Calais Agglomération (Cal'Aid)",
        "Pas-de-Calais (62) – Côte d'Opale",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS pour une plateforme logistique transmanche à Calais ?",
          a: "Un audit de sécurité cloud AWS pour un opérateur logistique transmanche calaisien est facturé entre 5 000 et 12 000 € HT selon la complexité de l'infrastructure cloud (APIs douanières UK-UE, WMS multi-sites, intégrations EDI, flux temps réel). CloudSecure analyse la sécurité des APIs de communication avec les systèmes douaniers britanniques et européens, les droits d'accès des opérateurs logistiques tiers, le chiffrement des manifestes de fret et les politiques de continuité d'activité cloud. Rapport sous 7 jours avec plan de remédiation priorisé. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser une infrastructure cloud logistique transmanche post-Brexit avec des flux UK-UE ?",
          a: "Les opérateurs logistiques calaisiens doivent gérer des flux de données transmanche entre des systèmes douaniers UK (CDS) et UE (DELTA-C, ICS2) via des APIs cloud, avec des enjeux de conformité RGPD sur les données personnelles des chauffeurs et des chargeurs transitant entre deux juridictions. CloudSecure audite la sécurité des connexions inter-systèmes douaniers, la conformité RGPD des transferts de données UK-UE (mécanismes d'adéquation post-Brexit), les droits d'accès aux plateformes cloud partagées et la résilience des systèmes en cas d'interruption des APIs gouvernementales. Pentest cloud logistique transmanche à partir de 6 000 € HT.",
        },
        {
          q: "Le port de Calais est-il soumis à NIS2 et quelles sont les obligations cloud qui en découlent ?",
          a: "Les infrastructures portuaires critiques comme le port de Calais sont directement éligibles à NIS2 en tant qu'entités essentielles dans le secteur des transports, avec des obligations renforcées de sécurité des systèmes d'information (dont les systèmes cloud). CloudSecure accompagne les opérateurs portuaires calaisiens dans la conformité NIS2 cloud : analyse des risques des systèmes informatiques portuaires, PSSI spécifique au transport maritime, plan de continuité d'activité en cas de cyberattaque et procédures de notification des incidents à l'ANSSI. Diagnostic NIS2 port/logistique à partir de 5 000 € HT.",
        },
        {
          q: "Comment sécuriser une activité e-commerce cross-border UK-UE à Calais face aux cybermenaces ?",
          a: "Les entrepôts de réexpédition calaisiens gérant du e-commerce cross-border UK-UE traitent des données de commandes de clients britanniques et européens soumises au RGPD (côté UE) et au UK GDPR (côté britannique). CloudSecure audite la sécurité des plateformes cloud WMS et e-commerce (Shopify, WooCommerce, Magento cloud), la conformité RGPD des bases de données clients, les flux de paiement sécurisés (PCI-DSS) et la protection contre les fraudes en ligne. Nous auditons également les intégrations avec les marketplaces UK (Amazon.co.uk, eBay UK). Forfait audit e-commerce cloud à partir de 4 000 € HT.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Calais pour les audits de sécurité cloud logistique ?",
          a: "Oui, CloudSecure intervient à Calais en présentiel pour les audits logistiques et portuaires nécessitant une présence physique : inspection des réseaux dans les entrepôts, interviews des équipes logistiques IT et OT, revue des architectures de connectivité transmanche. Les tests cloud et la revue de configuration AWS/Azure sont réalisés à distance via accès sécurisés. Nos consultants peuvent intervenir rapidement sur le port de Calais ou dans les zones industrielles de Coquelles. Déplacement inclus pour les missions supérieures à 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCalais;
