import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLens = () => (
  <CityLandingPage
    data={{
      city: "Lens",
      citySlug: "lens",
      region: "Hauts-de-France",
      postalCode: "62300",
      intro: "CloudSecure protège les entreprises de Lens, Liévin, Hénin-Beaumont et de l'agglomération Lens-Liévin contre les cybermenaces cloud. Audit AWS, Azure, GCP, sécurité Microsoft 365 et conformité NIS2 pour les PME et startups du Pas-de-Calais.",
      localContext: "L'agglomération Lens-Liévin est en plein essor numérique : logistique connectée, e-commerce, applications SaaS métier, données clients sur le cloud. Le Louvre-Lens et les structures culturelles ont elles aussi migré vers des outils cloud collaboratifs. Cette digitalisation expose les entreprises lensoises à des risques nouveaux : compromission de compte Microsoft 365, fuites de données S3, accès non autorisés via des API mal sécurisées. CloudSecure intervient à Lens et dans toute l'agglomération pour auditer, sécuriser et former vos équipes aux bonnes pratiques cloud.",
      sectors: [
        "Logistique et supply chain numérique",
        "E-commerce et retail",
        "Culture et tourisme (Louvre-Lens)",
        "Services financiers et assurance",
        "Startups et scale-ups tech",
        "Industrie 4.0 et IoT",
        "Santé numérique",
        "PME en migration cloud",
      ],
      neighborhoods: [
        "Lens centre",
        "Liévin",
        "Hénin-Beaumont",
        "Carvin",
        "Harnes",
        "Billy-Montigny",
        "Agglomération Lens-Liévin",
        "Pas-de-Calais (62) et Hauts-de-France",
      ],
      faq: [
        {
          q: "Proposez-vous des audits de sécurité cloud à Lens ?",
          a: "Oui. Nous réalisons des audits cloud (AWS, Azure, GCP, Microsoft 365) à Lens et dans toute l'agglomération Lens-Liévin. Nos missions sont réalisées à distance (accès read-only sécurisé) ou en présentiel selon vos préférences. Devis gratuit sous 24h.",
        },
        {
          q: "Mon entreprise de logistique à Lens utilise Azure : comment la sécuriser ?",
          a: "Nous commençons par un audit Azure Entra ID (anciennement Active Directory) pour identifier les droits excessifs, puis un audit des ressources Azure (VMs, Storage, Functions, Key Vaults). Nous vérifions aussi la conformité NIS2 si votre secteur logistique est concerné. Forfait à partir de 4 000 € HT.",
        },
        {
          q: "Quelle est la différence entre un audit cloud et un pentest cloud ?",
          a: "L'audit cloud vérifie votre configuration par rapport aux bonnes pratiques (CIS Benchmarks, AWS Well-Architected) : c'est une approche passive. Le pentest cloud teste activement si les vulnérabilités identifiées sont exploitables. Les deux sont complémentaires : commencez par l'audit, puis faites un pentest ciblé sur les zones à risque.",
        },
        {
          q: "Aidez-vous à la conformité NIS2 pour les entreprises de Lens ?",
          a: "Oui. Nous accompagnons les entités NIS2 de l'agglomération Lens-Liévin dans leur mise en conformité : diagnostic d'éligibilité, plan de remédiation, audit technique, gouvernance et préparation à la déclaration ANSSI.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLens;
