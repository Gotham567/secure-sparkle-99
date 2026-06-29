import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBethune = () => (
  <CityLandingPage
    data={{
      city: "Béthune",
      citySlug: "bethune",
      region: "Hauts-de-France",
      postalCode: "62400",
      intro: "CloudSecure accompagne les entreprises de Béthune, Bruay-la-Buissière et de l'arrondissement Béthune-Bruay dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Audit cloud, DevSecOps et conformité NIS2 pour les PME du Pas-de-Calais.",
      localContext: "L'arrondissement de Béthune est un bassin économique diversifié en pleine transformation numérique. Les entreprises béthunaises migrent massivement vers le cloud (Microsoft 365, AWS, Azure) pour leurs applications métier et leurs données. Cette transformation crée de nouvelles surfaces d'attaque : comptes cloud mal configurés, données exposées, accès non sécurisés. CloudSecure intervient sur Béthune et dans tout le Pas-de-Calais pour auditer et sécuriser vos environnements cloud, qu'il s'agisse d'une PME de 10 personnes ou d'une ETI de 500 salariés.",
      sectors: [
        "Industrie agroalimentaire et cloud ERP",
        "Logistique et traçabilité cloud",
        "Commerce et e-commerce",
        "Services professionnels et SaaS",
        "Santé et données médicales cloud",
        "Startups et scale-ups du territoire",
        "PME en transformation numérique",
        "Collectivités locales",
      ],
      neighborhoods: [
        "Béthune centre",
        "Bruay-la-Buissière",
        "Noeux-les-Mines",
        "Barlin",
        "Auchel",
        "Arrondissement Béthune-Bruay",
        "Pas-de-Calais (62)",
        "Hauts-de-France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits de sécurité cloud à Béthune ?",
          a: "Oui. Nous réalisons des audits cloud complets (AWS, Azure, GCP, Microsoft 365) à Béthune et dans tout l'arrondissement. Nos consultants interviennent en présentiel ou à distance. Devis gratuit sous 24h.",
        },
        {
          q: "Combien coûte un audit Microsoft 365 pour une PME béthunoise ?",
          a: "Un audit de sécurité Microsoft 365 pour une PME de 20 à 100 utilisateurs varie entre 2 500 et 6 000 € HT. Il couvre la configuration des boîtes mail, les droits d'accès, les partages SharePoint/OneDrive, la protection contre le phishing et la conformité RGPD. Devis personnalisé sous 24h.",
        },
        {
          q: "Mon entreprise de Béthune utilise AWS : par où commencer pour le sécuriser ?",
          a: "Commencez par un audit de configuration AWS (IAM, S3, EC2, VPC). Nos experts identifient en 2 à 5 jours les accès excessifs, les buckets S3 publics, les groupes de sécurité trop permissifs et les vulnérabilités courantes. Un rapport priorisé vous guide dans la remédiation.",
        },
        {
          q: "Vous déplacez-vous à Béthune pour les missions cloud ?",
          a: "La plupart des audits cloud peuvent se réaliser à distance (accès read-only à votre console AWS/Azure). Pour les missions de sensibilisation et de conseil stratégique, nous nous déplaçons à Béthune et dans tout le Pas-de-Calais.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBethune;
