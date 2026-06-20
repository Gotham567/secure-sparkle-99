import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CloudSecure accompagne les entreprises strasbourgeoises et alsaciennes dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP. Pharma, automobile, institutions européennes et transfrontalier : nos experts protègent vos workloads cloud à Strasbourg et dans le Grand Est.",
      localContext: "Strasbourg, capitale européenne, concentre des enjeux cloud uniques : institutions internationales qui imposent des standards de sécurité élevés, entreprises transfrontalières franco-allemandes soumises à deux régimes réglementaires, industrie pharmaceutique (Lilly, Sanofi) avec des données R&D ultra-sensibles et un tissu de PME alsaciennes en digitalisation.",
      sectors: [
        "Institutions européennes (cloud sécurisé)",
        "Pharmacie et R&D (données sensibles)",
        "Automobile (Stellantis cloud hybride)",
        "Banque transfrontalière franco-allemande",
        "Santé et HDS (CHU de Strasbourg)",
        "PME alsaciennes en transformation cloud",
      ],
      neighborhoods: [
        "Strasbourg Centre et Robertsau",
        "Schiltigheim et Illkirch",
        "Mulhouse, Colmar, Haguenau",
        "Metz, Nancy, Reims",
        "Zone franco-allemande (Kehl)",
        "Toute la région Grand Est",
      ],
      faq: [
        {
          q: "Quelles contraintes cloud pour les fournisseurs des institutions européennes ?",
          a: "Les prestataires des institutions européennes doivent respecter les exigences ENISA Cloud Security et NIS2. La localisation des données en Europe est obligatoire. Nous auditons votre conformité cloud et vous aidons à répondre aux appels d'offres européens.",
        },
        {
          q: "Comment gérer la conformité cloud franco-allemande ?",
          a: "Les entreprises transfrontalières doivent aligner leur cloud sur le RGPD (France/UE) et le BSI IT-Grundschutz (Allemagne). Nous réalisons des audits de conformité double et recommandons des architectures cloud adaptées (régions EU, chiffrement, sovereignty).",
        },
        {
          q: "Intervenez-vous à Strasbourg et dans le Grand Est ?",
          a: "Oui. Nous couvrons Strasbourg, Mulhouse, Colmar, Metz, Nancy, Reims et toute la région Grand Est, ainsi que les entreprises côté allemand (Kehl, Freiburg) pour les missions transfrontalières.",
        },
        {
          q: "Sanofi et les pharmas strasbourgeoises peuvent-elles utiliser AWS pour leur R&D ?",
          a: "Oui, avec des précautions importantes : segmentation des environnements R&D, chiffrement des données de recherche, contrôle strict des accès (Zero Trust), journalisation complète et conformité GxP pour les données réglementées. Nous accompagnons les pharmas dans cette mise en conformité.",
        },
      ],
    }}
  />
);

export default SecuriteCloudStrasbourg;
