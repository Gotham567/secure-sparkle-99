import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudHautsDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Hauts-de-France",
      citySlug: "hauts-de-france",
      region: "Hauts-de-France",
      postalCode: "59 / 62",
      intro: "CyberSecure est votre expert en sécurité cloud Hauts-de-France : audit cloud AWS/Azure/GCP, conformité NIS2 et DORA, migration sécurisée vers le cloud pour les PME, ETI, startups tech et industries de la région Nord–Pas-de-Calais.",
      localContext: "La région Hauts-de-France connaît une transformation numérique accélérée : les PME industrielles (automobile, agroalimentaire, logistique) migrent leurs systèmes ERP et MES vers le cloud, les startups de la French Tech Lille développent des applications SaaS natives cloud, et les grands groupes régionaux (Auchan, Leroy Merlin, Kiloutou) opèrent des architectures cloud hybrides complexes. Cette adoption massive du cloud crée des risques spécifiques : mauvaises configurations S3/Blob Storage, comptes cloud non sécurisés, intégration OT/cloud insuffisamment protégée. CyberSecure accompagne les organisations des Hauts-de-France dans la sécurisation de leurs environnements cloud AWS, Microsoft Azure et Google Cloud Platform.",
      sectors: [
        "Startups et scale-ups tech (French Tech Lille, EuraTechnologies)",
        "Grande distribution et retail (Auchan, Leroy Merlin, Kiloutou)",
        "Industrie et sous-traitance automobile (migration ERP/MES cloud)",
        "Logistique et supply chain (WMS cloud, IoT)",
        "Agroalimentaire (traçabilité cloud, ERP SaaS)",
        "Santé et e-santé (HDS, hébergement données de santé cloud)",
        "Collectivités et services publics (cloud souverain)",
        "Fintechs et services financiers (DORA, cloud bancaire)",
      ],
      neighborhoods: [
        "Lille Métropole — EuraTechnologies, Euratechnologies2",
        "Lens – Liévin (industrie, sous-traitance)",
        "Béthune – Bruay (chimie, agroalimentaire)",
        "Arras (PME, administrations)",
        "Valenciennes (automobile, industrie)",
        "Dunkerque (énergie, port, industrie lourde)",
        "Calais – Boulogne-sur-Mer (logistique transmanche)",
        "Amiens (agro-industrie, e-commerce)",
      ],
      faq: [
        {
          q: "Intervenez-vous sur AWS, Azure et GCP dans les Hauts-de-France ?",
          a: "Oui, CyberSecure est cloud-agnostique. Nos experts interviennent sur les 3 grands hyperscalers (AWS, Microsoft Azure, Google Cloud Platform) ainsi que sur les clouds souverains comme OVHcloud, utilisé par les collectivités et administrations des Hauts-de-France soucieuses de localisation des données en France. Nous réalisons des audits de configuration cloud, des tests de pénétration cloud et des missions de mise en conformité NIS2 sur tous ces environnements.",
        },
        {
          q: "Mon entreprise industrielle des Hauts-de-France migre vers le cloud : comment sécuriser cette migration ?",
          a: "La migration cloud des entreprises industrielles du Nord est un sujet que nous traitons régulièrement. Les risques clés sont : la sécurisation des accès (IAM, MFA), la gestion des données sensibles de production (plans, recettes, brevets), l'intégration sécurisée entre les systèmes OT (SCADA, MES) et le cloud, et la conformité RGPD pour les données traitées sur des serveurs hors de France. Nous réalisons un audit cloud pré-migration et accompagnons la sécurisation post-migration. Devis gratuit sous 48h.",
        },
        {
          q: "La French Tech Lille m'intéresse — avez-vous de l'expérience avec les startups SaaS ?",
          a: "Oui, nous accompagnons régulièrement les startups tech de l'écosystème lillois (EuraTechnologies, incubateurs régionaux). Les besoins typiques : sécuriser une architecture AWS/GCP native cloud, préparer une due diligence sécurité avant levée de fonds (les VC vérifient systématiquement la sécurité cloud), obtenir SOC 2 Type II ou ISO 27001, implémenter DevSecOps dans le pipeline CI/CD. Nous proposons des packages startup adaptés aux budgets de pre-seed et seed.",
        },
        {
          q: "Quels financements pour un audit cloud dans les Hauts-de-France ?",
          a: "Plusieurs dispositifs sont accessibles : Mon Aide Cyber (ANSSI) pour les PME de moins de 250 salariés — diagnostic gratuit. Les CCI Hauts-de-France (CCI Nord de France, CCI Artois, CCI Grand Lille) proposent des diagnostics numériques co-financés. La Région Hauts-de-France soutient les projets de transformation numérique sécurisée via ses fonds FEDER et ses programmes PME Hauts-de-France. BPI France propose des prêts numériques. Nous vous guidons vers le bon dispositif selon votre taille et secteur.",
        },
        {
          q: "Pouvez-vous nous aider à obtenir la certification HDS (Hébergement Données de Santé) pour notre projet cloud santé ?",
          a: "Oui. La certification HDS est obligatoire pour tout hébergement de données de santé en France (e-santé, télémedecine, logiciels médicaux). Nous accompagnons les porteurs de projets santé dans les Hauts-de-France : audit de conformité HDS, sélection d'hébergeurs certifiés (AWS, Azure, OVHcloud HDS), mise en place des politiques de sécurité requises et préparation à la certification. Le secteur santé est très présent dans la région (CHU Lille, cliniques, Eurasanté).",
        },
      ],
    }}
  />
);

export default SecuriteCloudHautsDeFrance;
