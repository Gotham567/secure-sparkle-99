import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudArras = () => (
  <CityLandingPage
    data={{
      city: "Arras",
      citySlug: "arras",
      region: "Hauts-de-France",
      postalCode: "62000",
      intro: "Arras et l'Artois concentrent des plateformes logistiques e-commerce et des exploitations AgriTech cloud : CloudSecure sécurise vos infrastructures AWS et Azure contre les ransomwares ciblant la supply chain des Hauts-de-France. Audit cloud AWS logistique Arras, conformité NIS2 et DevSecOps pour les PME, entrepôts connectés et coopératives agricoles du Pas-de-Calais.",
      localContext: "La région arragoise est un nœud logistique majeur des Hauts-de-France avec des entrepôts e-commerce et des plateformes de distribution utilisant des WMS cloud AWS et Azure, exposés aux attaques sur les APIs EDI et aux compromissions de comptes prestataires. L'agriculture numérique (AgriTech) se développe dans les plaines du Pas-de-Calais avec des capteurs IoT cloud (météo, sol, drones agricoles) dont les données sont hébergées sur des plateformes SaaS insuffisamment sécurisées. Les PME arrageoises du tertiaire et de l'industrie adoptent massivement des outils cloud (Microsoft 365, ERP SaaS) sans politique de sécurité documentée. Les campagnes de phishing et les attaques BEC ciblant les PME des Hauts-de-France sont en forte croissance, causant des pertes financières importantes liées aux faux virements.",
      sectors: [
        "Logistique e-commerce et entrepôts connectés (WMS cloud AWS, Azure)",
        "AgriTech et agriculture numérique (IoT cloud, drones, traçabilité)",
        "PME industrielles et distribution (ERP cloud, Microsoft 365)",
        "Collectivités du Pas-de-Calais (dématérialisation cloud, RGPD)",
        "Transport et supply chain (TMS cloud, EDI sécurisé)",
        "Commerce et retail (POS cloud, CRM SaaS, e-commerce)",
      ],
      neighborhoods: [
        "Centre-ville d'Arras – Grand-Place",
        "Zone d'activités des Bonnettes",
        "Parc d'activités de l'Aérodrome",
        "Saint-Laurent-Blangy et périphérie est",
        "Communauté urbaine d'Arras (CUA)",
        "Pas-de-Calais (62) – Artois et plaines céréalières",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS pour une plateforme logistique e-commerce à Arras ?",
          a: "Un audit de sécurité cloud AWS pour un entrepôt ou une plateforme logistique du Pas-de-Calais est facturé entre 4 000 et 10 000 € HT selon le nombre de services exposés (EC2, RDS, API Gateway, Lambda, S3), les intégrations EDI et les flux vers les marketplaces (Amazon Vendor Central, Cdiscount). CloudSecure analyse les droits IAM des équipes WMS, la sécurité des APIs de commande et d'expédition, les configurations EDI chiffrées et les politiques de sauvegarde. Rapport sous 7 jours avec plan de remédiation priorisé.",
        },
        {
          q: "Comment sécuriser un WMS cloud AWS pour une plateforme logistique arrageoise face aux cyberattaques sur la supply chain ?",
          a: "Les opérateurs logistiques arragois interopèrent avec des partenaires via des APIs cloud et des flux EDI qui traversent plusieurs réseaux. CloudSecure audite les intégrations EDI avec les donneurs d'ordre, les accès des prestataires logistiques tiers à vos systèmes cloud, la conformité RGPD des flux de données et la segmentation réseau entre les zones WMS. Nous déployons un monitoring temps réel des accès cloud (SIEM) et des alertes sur les comportements anormaux (exfiltrations, connexions inhabituelles hors des horaires d'exploitation). Pentest cloud supply chain à partir de 6 000 € HT.",
        },
        {
          q: "Comment protéger les données IoT d'une exploitation AgriTech dans les plaines du Pas-de-Calais ?",
          a: "Les exploitations agricoles et coopératives du Pas-de-Calais utilisent des capteurs IoT dont les données remontent vers des plateformes cloud SaaS (Climate FieldView, Agremo, Precision Hawk). CloudSecure audite la sécurité des passerelles IoT-cloud, les droits d'accès aux APIs de collecte, le chiffrement des données de sol et de production, et les politiques de partage avec les coopératives. Nous identifions et corrigeons les configurations par défaut non sécurisées des appareils IoT connectés au cloud. Forfait audit IoT AgriTech à partir de 4 500 € HT.",
        },
        {
          q: "Les PME du Pas-de-Calais sont-elles concernées par NIS2 et quelles obligations cloud cela impose-t-il ?",
          a: "La directive NIS2 s'applique aux PME de plus de 50 salariés ou 10 M€ de CA dans des secteurs critiques comme le transport, la logistique, l'alimentation et le commerce numérique. Plusieurs PME arrageoises dans ces secteurs peuvent être éligibles. CloudSecure réalise un diagnostic NIS2 gratuit, puis accompagne la mise en conformité cloud : gestion des risques fournisseurs SaaS, plan de continuité des opérations cloud, politique de notification des incidents et RSSI externalisé cloud à partir de 2 000 € HT/mois.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Arras pour des audits de sécurité cloud ?",
          a: "Oui, CloudSecure intervient à Arras et dans le Pas-de-Calais en présentiel pour les phases d'audit nécessitant une présence physique : revue des réseaux industriels connectés au cloud, interviews des équipes IT et métiers, ateliers de sensibilisation à la cybersécurité cloud. Les tests d'intrusion cloud et la revue de configuration AWS/Azure sont réalisés à distance via accès sécurisés. Nous assurons un déplacement rapide depuis notre réseau national de consultants. Devis gratuit et entretien de cadrage en visioconférence sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudArras;
