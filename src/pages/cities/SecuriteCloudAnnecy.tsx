import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAnnecy = () => (
  <CityLandingPage
    data={{
      city: "Annecy",
      citySlug: "annecy",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "74000",
      intro: "CloudSecure accompagne les industriels de précision, acteurs du tourisme alpin numérique et ETI mecatroniques d'Annecy dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Annecy, sécurité cloud Azure Annecy et DevSecOps Annecy pour l'industrie de précision haut-savoyarde et le tourisme alpin connecté. Nos experts en sécurisation infrastructure cloud Annecy protègent les données industrielles et touristiques des entreprises du lac d'Annecy.",
      localContext: "Annecy est un pôle industriel d'excellence avec une concentration unique d'entreprises de décolletage, de mécatronique et de précision (Schneider Electric, Sopra Steria, ENS) qui déploient des ERP cloud (SAP RISE on Azure, Microsoft Dynamics) et des MES cloud pour piloter des processus de fabrication à très haute précision — des architectures hybrides nécessitant une expertise spécifique en sécurité OT/IT cloud. Le tourisme numérique alpin annécien (Station de ski, booking lac d'Annecy, événements) génère des plateformes cloud à fort trafic saisonnier avec des données bancaires et clients à protéger. Les ETI innovantes de Haute-Savoie dans la mécatronique, les matériaux avancés et l'électronique développent des solutions cloud-native pour les marchés automobiles, médicaux et de l'énergie. La double frontière franco-suisse crée des enjeux de conformité RGPD et LPD (loi suisse sur la protection des données).",
      sectors: [
        "Industrie de précision et décolletage (ERP cloud Azure, MES cloud)",
        "Mécatronique et électronique (cloud hybride, données de conception)",
        "Tourisme alpin et booking numérique (PCI DSS cloud, RGPD)",
        "Santé et CH (HDS cloud, données patients Haute-Savoie)",
        "ETI innovantes (cloud-native, données propriétaires)",
        "Entreprises frontalières franco-suisses (RGPD/LPD)",
      ],
      neighborhoods: [
        "Annecy Centre et Bonlieu — sièges et services",
        "Cran-Gevrier — industrie de précision et tech",
        "Seynod — parcs d'entreprises et PME",
        "Pringy et Meythet — zones d'activités industrielles",
        "Thônes et Saint-Jorioz — décolletage et mécanique",
        "Annemasse et Archamps — frontalier Genève-Haute-Savoie",
      ],
      faq: [
        {
          q: "Combien coûte un audit Azure pour une ETI de décolletage haut-savoyarde à Annecy ?",
          a: "Un audit Azure pour une ETI de décolletage ou de mécatronique annécienne (couvrant Azure AD, NSG, Microsoft Defender for Cloud, intégrations MES-ERP Azure, protection des données de conception et des procédures de fabrication, conformité CIS Benchmark) est facturé entre 4 500 et 10 000 euros HT selon la complexité de l'architecture hybride et le nombre de sites connectés. CloudSecure inclut une revue spécifique des accès clients et partenaires aux données de conception (OEM automobiles, industriels suisses) — vecteur d'attaque majeur dans l'industrie de précision. Livraison sous 7 jours.",
        },
        {
          q: "Comment sécuriser une plateforme de booking de stations de ski alpines sur le cloud ?",
          a: "La sécurisation d'une plateforme de booking de ski alpin annécienne sur le cloud couvre : la conformité PCI DSS pour les paiements (tokenisation, WAF CloudFront ou Azure Front Door), la protection des données personnelles des skieurs (RGPD, minimisation, droit à l'oubli), la résilience face aux pics de trafic hivernaux et estivaux (auto-scaling, CDN sécurisé), et la protection contre les fraudes à la réservation (anti-bot, détection de fraude IA). CloudSecure réalise des audits cloud tourisme alpin Annecy pour les opérateurs de stations et de booking.",
        },
        {
          q: "DevSecOps Annecy : accompagnez-vous les ETI innovantes haut-savoyardes ?",
          a: "Oui, CloudSecure accompagne les ETI innovantes annéciennes dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD des développements d'applications industrielles (SAST, scan de conteneurs, gestion des secrets via HashiCorp Vault), formons les équipes aux pratiques secure by design et accompagnons la sécurisation des architectures cloud hybride multi-sites. Pour les entreprises frontalières franco-suisses, nous intégrons les exigences LPD suisses dans notre approche.",
        },
        {
          q: "Conformité NIS2 cloud et RGPD/LPD pour les entreprises frontalières d'Annecy ?",
          a: "Les entreprises annéciennes ayant des activités transfrontalières avec la Suisse doivent concilier le RGPD (droit européen) et la nLPD suisse (nouvelle loi fédérale sur la protection des données, en vigueur depuis 2023) pour leurs usages cloud. CloudSecure accompagne ces entreprises dans la mise en conformité dual-framework : politique de protection des données cloud alignée RGPD/nLPD, localisation des données selon les exigences des deux systèmes, et notification des incidents aux autorités compétentes (CNIL côté français, PFPDT côté suisse). Nous réalisons également les audits NIS2 cloud Annecy pour les industriels haut-savoyards.",
        },
        {
          q: "CloudSecure intervient-il à Annecy et dans la Haute-Savoie ?",
          a: "CloudSecure intervient à Annecy, Cran-Gevrier, Seynod, Meythet et dans toute la Haute-Savoie incluant Annemasse, Thonon-les-Bains, Évian-les-Bains et Cluses. Nous couvrons également les départements voisins (Savoie, Ain) et les entreprises frontalières de la région lémanique suisse (Genève, Lausanne). Les audits cloud techniques se déroulent à distance, avec des interventions sur site à Annecy pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Annecy. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAnnecy;
