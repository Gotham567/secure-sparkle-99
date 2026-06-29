import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudAuvergneRhoneAlpes = () => (
  <CityLandingPage
    data={{
      city: "Auvergne-Rhône-Alpes",
      citySlug: "auvergne-rhone-alpes",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "01 / 03 / 07 / 15 / 26 / 38 / 42 / 43 / 63 / 69 / 73 / 74",
      intro: "CyberSecure est votre prestataire sécurité cloud Auvergne-Rhône-Alpes : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Lyon, Grenoble, Clermont-Ferrand, Annecy, Chambéry, Saint-Étienne et toute la région.",
      localContext: "Auvergne-Rhône-Alpes est la 2e région économique de France. Lyon est la 2e place financière et tech française, avec une French Tech dynamique (Axeleo, ChangeNOW) et un écosystème startup robuste. Grenoble est un pôle mondial de la microélectronique (STMicroelectronics, Soitec, Lynred) avec le CEA-Leti, ce qui en fait une zone de très haute valeur pour la cybersécurité cloud. La région est la 1ère destination de datacenter hors Paris (SFR Business Team, Kyndryl, Equinix). L'industrie biopharmaceutique (Sanofi, Ipsen) et la chimie (Arkema, Solvay) génèrent des données très sensibles en cloud. Les stations de ski alpines évoluent vers des plateformes numériques cloud.",
      sectors: [
        "Microélectronique et semiconducteurs (STMicroelectronics Grenoble, Soitec, CEA-Leti)",
        "Biopharmaceutique et chimie (Sanofi Marcy-l'Étoile, Arkema, industries chimiques)",
        "Numérique et tech (French Tech Lyon, Axeleo, Grenoble INP, startups AuRA)",
        "Datacenters et hébergeurs (Equinix Lyon, SFR Business Team, Kyndryl Lyon)",
        "Automobile et équipementiers (Michelin Clermont, Plastic Omnium, filière 69)",
        "Énergie (EDF Isère, ENR alpines, Smart grids régionaux)",
        "Tourisme et montagne (domaines skiables connectés Savoie-Haute-Savoie)",
        "Collectivités (Métropole de Lyon, Grenoble-Alpes Métropole, Région AuRA)",
      ],
      neighborhoods: [
        "Métropole de Lyon – Villeurbanne – Bron – Vénissieux (69)",
        "Grenoble-Alpes Métropole – Meylan – Crolles (38)",
        "Clermont Auvergne Métropole (63)",
        "Saint-Étienne Métropole (42)",
        "Annecy – Cran-Gevrier – Seynod (74)",
        "Chambéry – Aix-les-Bains (73)",
        "Valence – Romans-sur-Isère (26)",
        "Bourg-en-Bresse – Ambérieu-en-Bugey (01)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 12 départements d'Auvergne-Rhône-Alpes ?",
          a: "Oui, CyberSecure intervient dans les douze départements : Ain (01), Allier (03), Ardèche (07), Cantal (15), Drôme (26), Isère (38), Loire (42), Haute-Loire (43), Puy-de-Dôme (63), Rhône (69), Savoie (73) et Haute-Savoie (74). Nos spécialistes cloud (AWS, Azure, GCP) se déplacent partout dans la région. CERT d'urgence 24/7.",
        },
        {
          q: "Le CEA-Leti de Grenoble développe des systèmes cloud — comment les sécuriser ?",
          a: "Le CEA-Leti (Centre d'Électronique et de Technologie de l'Information) développe des technologies de pointe (semiconducteurs, IA embarquée, quantum). Ses projets collaboratifs avec l'industrie utilisent des environnements cloud hybrides avec des exigences de confidentialité très élevées (données de R&D, brevets). CyberSecure propose des audits cloud adaptés aux organismes de recherche : ségrégation des données sensibles, chiffrement des données de recherche, gestion des identités multi-partenaires (IAM fédéré).",
        },
        {
          q: "Les startups lyonnaises (Axeleo) ont-elles besoin de certifications cloud spécifiques avant levée de fonds ?",
          a: "Oui. Les investisseurs et fonds de VC demandent systématiquement un audit de sécurité cloud avant les séries A et B. Les startups SaaS B2B doivent viser SOC 2 Type II (pour les clients US et grands comptes), ISO 27001 (pour les entreprises européennes) et être conformes RGPD. CyberSecure propose un package startup spécialement conçu pour les scale-ups lyonnaises et grenobloises : gap analysis, roadmap, et préparation aux audits de certification.",
        },
        {
          q: "Les domaines skiables alpins (Savoie, Haute-Savoie) migrent-ils vers le cloud ?",
          a: "Oui. Les grandes stations alpines (Tarentaise, Maurienne, Aravis) opèrent des plateformes de billetterie cloud, des applications mobile skieurs et des systèmes de supervision des remontées mécaniques connectés. Ces systèmes traitent des millions de données clients et des données de sécurité des installations. CyberSecure audite les architectures cloud des opérateurs de domaines skiables : sécurité des apps mobile, API de billetterie, systèmes SCADA des remontées.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Auvergne-Rhône-Alpes ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région AuRA via ses fonds FEDER et le programme Auvergne-Rhône-Alpes Entreprises Numériques. Les CCI régionales (CCI Lyon Métropole, CCI Grenoble, CCI Clermont). BPI France AuRA — prêts innovation. Axeleo, Minalogic (Grenoble), Bioaster (Lyon) accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudAuvergneRhoneAlpes;
