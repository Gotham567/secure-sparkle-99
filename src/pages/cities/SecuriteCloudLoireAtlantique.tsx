import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLoireAtlantique = () => (
  <CityLandingPage
    data={{
      city: "Loire-Atlantique",
      citySlug: "loire-atlantique",
      region: "Pays de la Loire",
      postalCode: "44",
      intro: "CyberSecure est votre prestataire sécurité cloud Loire-Atlantique (44) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Nantes, Saint-Nazaire, Saint-Herblain, Rezé, Orvault et tout le département.",
      localContext: "La Loire-Atlantique est l'un des départements français à la plus forte croissance. Nantes est une métropole européenne avec une French Tech particulièrement active (fintech, insurtech, legaltech). Le secteur financier et assurantiel (Groupama Loire Bretagne, Caisse d'Épargne, Macif) est un consommateur majeur de services cloud réglementés (DORA, NIS2). Les Chantiers de l'Atlantique et Airbus Saint-Nazaire adoptent progressivement des plateformes cloud industrielles pour leurs outils de conception et de fabrication. OVHcloud a une présence logistique dans la région via ses centres de distribution.",
      sectors: [
        "Fintech et insurtech cloud (Groupama Loire Bretagne, LCL, Crédit Agricole 44 — DORA)",
        "Naval et aéro cloud (Chantiers de l'Atlantique, Airbus SNA — PLM cloud, IIoT)",
        "SaaS et startups (French Tech Nantes, Atlanpole — AWS/GCP, cloud-native)",
        "Santé cloud (CHU Nantes, ICO — HDS, IA médicale, recherche clinique)",
        "Agroalimentaire cloud (Lactalis, LDC — ERP cloud, traçabilité, supply chain)",
        "Port cloud (Port Nantes-Saint-Nazaire — TMS, WMS, digitalisation portuaire)",
        "ESN cloud (SII Nantes, CGI, Capgemini — managed services cloud, SOC)",
        "Collectivités (Nantes Métropole — Numspot, cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Nantes – Île de Nantes – Euronantes (44000)",
        "Saint-Herblain – Orvault (44800/44700)",
        "Rezé – Vertou – Saint-Sébastien (44400/44120)",
        "Saint-Nazaire – Trignac (44600)",
        "La Baule – Guérande (44500)",
        "Ancenis-Saint-Géréon (44150)",
        "Châteaubriant (44110)",
        "Clisson – Vallet (44190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Loire-Atlantique (44) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 44 : Nantes Métropole, Saint-Nazaire Agglomération, Pays de la Loire côtier, et Pays d'Ancenis. Nos spécialistes cloud connaissent les architectures cloud du secteur financier nantais et des industries navales de Saint-Nazaire. CERT cloud 24/7.",
        },
        {
          q: "DORA et les entités financières nantaises (Groupama, Caisse d'Épargne) : comment se conformer pour le cloud ?",
          a: "Le règlement DORA (Digital Operational Resilience Act) est applicable depuis janvier 2025 aux entités financières, y compris les compagnies d'assurance et les mutuelles comme Groupama Loire Bretagne. Pour le cloud, DORA impose : un registre des contrats cloud (Article 28), des clauses contractuelles obligatoires avec les fournisseurs cloud (AWS, Azure, OVHcloud), des tests de résilience opérationnelle numérique (TLPT — Threat Led Penetration Testing), et un reporting des incidents cloud à l'ACPR. CyberSecure accompagne les entités financières dans leur mise en conformité DORA.",
        },
        {
          q: "Les Chantiers de l'Atlantique utilisent-ils le cloud pour la conception de paquebots ?",
          a: "Les Chantiers de l'Atlantique utilisent des outils de CAO (CATIA, AutoShip) et des plateformes de gestion de projet (PLM Siemens Teamcenter) qui peuvent s'exécuter partiellement sur des infrastructures cloud privées ou hybrides. Pour les données de conception ultra-sensibles (plans secrets de paquebot de luxe), un cloud privé on-premise ou un cloud souverain SecNumCloud est préférable. Pour les workloads collaboratifs avec les sous-traitants (documentation, spécifications), des configurations Azure avec Private Link et BYOK sont possibles. CyberSecure aide à définir la politique de classification des données de conception.",
        },
        {
          q: "Le CHU de Nantes peut-il migrer ses données de santé vers AWS ou Azure ?",
          a: "Oui, à condition de choisir un hébergeur certifié HDS (Hébergeur de Données de Santé) en France. AWS (région eu-west-3 Paris) et Azure (région France Centre) proposent des offres certifiées HDS permettant d'héberger légalement des données de santé à caractère personnel. Le CHU doit également passer un contrat d'hébergement HDS avec des clauses obligatoires, et s'assurer que le sous-traitant cloud respecte les conditions de l'article 28 du RGPD. CyberSecure accompagne les CHU dans leur stratégie cloud HDS et audite les configurations de sécurité.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Loire-Atlantique ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nantes-Saint-Nazaire — chèques numériques. Nantes Métropole — programmes innovation numérique. BPI France Pays de Loire — prêts innovation. La French Tech Nantes et le pôle EMC2 accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLoireAtlantique;
