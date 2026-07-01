import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBethune = () => (
  <CityLandingPage
    data={{
      city: "Béthune",
      citySlug: "bethune",
      region: "Hauts-de-France",
      postalCode: "62400",
      intro: "Béthune et l'Artois concentrent des PME cloud ERP, une industrie chimique numérisée et des plateformes logistiques en pleine migration cloud : CloudSecure sécurise vos infrastructures AWS et Azure avec des audits adaptés au tissu économique du Pas-de-Calais. Audit cloud AWS Béthune PME, conformité NIS2 et sécurité Azure industrie Artois pour les entreprises de l'arrondissement Béthune-Bruay.",
      localContext: "L'arrondissement de Béthune-Bruay compte un tissu dense de PME industrielles (chimie, plasturgie, agroalimentaire) qui migrent vers des ERP SaaS cloud et des outils MES connectés, créant des surfaces d'attaque nouvelles sur les données de production et les accès administrateurs. Les plateformes logistiques de l'Artois utilisent des WMS cloud pour gérer les flux de marchandises, exposées aux attaques sur les APIs d'intégration et les accès prestataires. Les collectivités de l'arrondissement adoptent des services cloud pour la dématérialisation administrative, avec des enjeux de protection des données des administrés. Les attaques par phishing, ransomware et BEC (Business Email Compromise) ciblant les PME béthuneoises et leurs comptes Microsoft 365 sont en forte croissance.",
      sectors: [
        "Industrie chimique et plasturgie (ERP cloud, MES connecté, données produits)",
        "Agroalimentaire et distribution (traçabilité cloud, WMS logistique)",
        "PME et commerce (Microsoft 365, CRM SaaS, e-commerce)",
        "Collectivités du Pas-de-Calais (dématérialisation cloud, RGPD)",
        "Santé et médico-social (logiciels cloud HDS, cabinets médicaux)",
        "BTP et construction (GED cloud, gestion de chantiers SaaS)",
      ],
      neighborhoods: [
        "Béthune centre – Grand-Place",
        "Bruay-la-Buissière et Noeux-les-Mines",
        "Zone industrielle de Douvrin (Billy-Berclau)",
        "Barlin et Auchel",
        "Arrondissement Béthune-Bruay",
        "Pas-de-Calais (62) – Artois",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS ou Azure pour une PME de l'arrondissement de Béthune ?",
          a: "Un audit cloud pour une PME de l'Artois est facturé entre 3 500 et 8 000 € HT selon le périmètre (AWS, Azure, Microsoft 365, multi-cloud). CloudSecure analyse les droits IAM, les configurations des services cloud exposés (EC2, S3, Azure Storage, SharePoint), les politiques de sauvegarde et la protection anti-phishing. Nous livrons un rapport de vulnérabilités priorisées sous 7 jours avec un plan de remédiation actionnable. Pour les PME avec un ERP SaaS cloud, nous auditons aussi les intégrations API et les flux de données. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser un ERP cloud ou un MES connecté pour une PME industrielle de Béthune ?",
          a: "Les PME industrielles de l'Artois utilisant des ERP SaaS cloud (SAP Business One, Sage Cloud, Cegid) ou des MES connectés doivent sécuriser les accès utilisateurs (MFA obligatoire), contrôler les droits par profil métier, chiffrer les exports de données sensibles (données de production, fiches clients, plans) et auditer les intégrations avec les prestataires externes. CloudSecure réalise un audit complet de votre configuration ERP/MES cloud, détecte les comptes à privilèges excessifs, vérifie les logs d'accès et recommande des politiques de sécurité adaptées à l'industrie.",
        },
        {
          q: "Comment protéger une PME chimique de Béthune contre les ransomwares ciblant les données cloud ?",
          a: "Les PME chimiques de l'Artois stockent des données critiques (formulations, fiches de données de sécurité, données clients) dans le cloud, ciblées par les ransomwares via des campagnes de phishing et des exploitations de vulnérabilités RDP. CloudSecure déploie une stratégie de protection anti-ransomware cloud : sauvegardes immuables (AWS S3 Object Lock, Azure Immutable Blob), détection des compromissions de comptes (Microsoft Defender for Cloud, AWS GuardDuty), segmentation des accès par profil métier et exercices de simulation de crise. Nos RSSI externalisés assurent le suivi à partir de 2 000 € HT/mois.",
        },
        {
          q: "Les entreprises de l'arrondissement de Béthune sont-elles concernées par NIS2 ?",
          a: "La directive NIS2 s'applique aux PME de plus de 50 salariés ou 10 M€ de CA dans des secteurs critiques (chimie, agroalimentaire, transport, santé). Plusieurs entreprises de l'arrondissement Béthune-Bruay peuvent être éligibles. CloudSecure réalise un diagnostic NIS2 gratuit pour déterminer votre éligibilité, puis accompagne la mise en conformité : analyse des risques cloud, PSSI, plan de continuité d'activité, procédures de notification des incidents à l'ANSSI et mise en place d'un RSSI cloud externalisé.",
        },
        {
          q: "CloudSecure se déplace-t-il à Béthune et dans l'arrondissement pour les missions cloud ?",
          a: "Oui, CloudSecure intervient à Béthune, Bruay-la-Buissière, Noeux-les-Mines et dans tout l'arrondissement en présentiel pour les phases d'audit nécessitant une présence physique : revue des infrastructures réseau, interviews des équipes IT, ateliers de sensibilisation à la cybersécurité cloud. La majorité des audits cloud peut être réalisée à distance via accès read-only sécurisé à vos consoles AWS/Azure. Déplacement inclus pour les forfaits supérieurs à 5 000 € HT. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBethune;
