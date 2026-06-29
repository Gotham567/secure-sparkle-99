import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudPaca = () => (
  <CityLandingPage
    data={{
      city: "PACA",
      citySlug: "paca",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "04 / 05 / 06 / 13 / 83 / 84",
      intro: "CyberSecure est votre prestataire sécurité cloud PACA : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Marseille, Nice, Toulon, Aix-en-Provence, Avignon, Cannes et toute la région.",
      localContext: "Provence-Alpes-Côte d'Azur est une région économiquement diversifiée avec un tissu numérique en forte croissance. Sophia Antipolis (Alpes-Maritimes) est la plus grande technopole d'Europe avec plus de 2 300 entreprises tech (SAP, TotalEnergies Digital Factory, Amadeus IT, 3M, Orange). Marseille Aix est un pôle industriel et logistique majeur avec le Grand Port Maritime de Marseille (1er port français). La Côte d'Azur concentre des technologies de défense et aérospatiales (Thales Sophia-Antipolis, Airbus Defence & Space). Nice est un hub international avec de nombreuses entreprises de services numériques. La région accueille de nombreux datacenters européens grâce à sa connexion aux câbles sous-marins méditerranéens.",
      sectors: [
        "Tech et Sophia Antipolis (SAP, Amadeus IT, Orange Labs, Thales Research)",
        "Défense et aérospatial (Thales, Airbus Defence, Naval Group Toulon)",
        "Logistique et ports (Grand Port Marseille, Port de Toulon, logistique PACA)",
        "Tourisme et hospitality (hôtellerie Côte d'Azur, Cannes, plateformes booking)",
        "Chimie et pétrochimie (Fos-sur-Mer, Lavéra, complexe pétrochimique Bouches-du-Rhône)",
        "Santé (AP-HM Marseille, CHU Nice, Assistance Publique Hôpitaux Marseille)",
        "Énergie (EDF Méditerranée, projets ENR alpins, solaire PACA)",
        "Collectivités (Aix-Marseille-Provence, Métropole Nice, Région PACA)",
      ],
      neighborhoods: [
        "Aix-Marseille-Provence – Plan-de-Campagne (13)",
        "Nice Côte d'Azur – Sophia Antipolis – Valbonne (06)",
        "Toulon Provence Méditerranée – La Seyne-sur-Mer (83)",
        "Avignon – Orange – Carpentras (84)",
        "Cannes – Antibes – Grasse (06)",
        "Fos-sur-Mer – Martigues – Istres (13)",
        "Gap – Briançon – Embrun (05)",
        "Digne-les-Bains – Manosque (04)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 6 départements de PACA ?",
          a: "Oui, CyberSecure intervient dans les six départements : Alpes-de-Haute-Provence (04), Hautes-Alpes (05), Alpes-Maritimes (06), Bouches-du-Rhône (13), Var (83) et Vaucluse (84). Nos spécialistes cloud AWS, Azure, GCP se déplacent partout en PACA. Sophia Antipolis et Marseille sont nos deux hubs régionaux. CERT d'urgence 24/7.",
        },
        {
          q: "Sophia Antipolis : comment sécuriser les architectures multi-cloud des grandes entreprises tech ?",
          a: "Les entreprises de Sophia Antipolis (SAP, Amadeus, Orange Labs) opèrent des architectures multi-cloud complexes. Amadeus IT, par exemple, gère des systèmes de réservation critiques sur AWS et Azure. Les enjeux : sécurité des API inter-cloud, Zero Trust architecture, gestion centralisée des identités (CIAM, Entra ID, Okta), et conformité PCI DSS pour les systèmes de paiement. CyberSecure propose des audits multi-cloud approfondis avec des consultants certifiés AWS Security Specialty et Azure Security Engineer.",
        },
        {
          q: "Le Grand Port Maritime de Marseille a-t-il des risques cloud spécifiques ?",
          a: "Oui. Le Grand Port Maritime de Marseille utilise des systèmes cloud pour sa gestion des escales, des marchandises et de la logistique (Soget A-SWIS, Port Community System). Ces plateformes connectent des armateurs, des douanes, des transitaires et des terminaux. Les risques incluent des cyberattaques sur les systèmes de gestion des conteneurs (ransomware NotPetya 2017 à Maersk a coûté 300 M$), des accès non autorisés aux manifestes de cargaison. CyberSecure audite ces environnements portuaires.",
        },
        {
          q: "Thales à Sophia Antipolis utilise-t-il le cloud public ? Quelles contraintes ?",
          a: "Thales (défense, cybersécurité, aérospatial) distingue strictement ses données selon leur niveau de sensibilité. Les projets défense utilisent des clouds privés et souverains (Cloud Temple, Numspot). Les activités commerciales et la R&D non classifiée utilisent des clouds hyperscalers avec des protections renforcées (BYOK, Private Link, Confidential Computing). Thales développe aussi ses propres solutions cloud sécurisées (Cipher Trust, Luna HSM). CyberSecure accompagne les sous-traitants et fournisseurs de Thales dans leurs mises en conformité.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en PACA ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région PACA via ses fonds FEDER et le programme Provence Alpes Côte d'Azur Numérique. Les CCI régionales (CCI Marseille Provence, CCI Nice Côte d'Azur, CCI Var). BPI France PACA — prêts innovation. La SCS (Solutions Communicantes Sécurisées) et le cluster PASS Sophia accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudPaca;
