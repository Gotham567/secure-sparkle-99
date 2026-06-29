import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCentreValDeLoire = () => (
  <CityLandingPage
    data={{
      city: "Centre-Val de Loire",
      citySlug: "centre-val-de-loire",
      region: "Centre-Val de Loire",
      postalCode: "18 / 28 / 36 / 37 / 41 / 45",
      intro: "CyberSecure est votre prestataire sécurité cloud Centre-Val de Loire : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises d'Orléans, Tours, Chartres, Bourges, Blois, Châteauroux et toute la région.",
      localContext: "Le Centre-Val de Loire est une région industrielle positionnée entre Paris et les grandes régions économiques de l'ouest et du sud. Sa proximité avec l'Île-de-France en fait une zone d'extension naturelle pour les DSI franciliens cherchant des datacenters de proximité (Equinix Orléans, Interxion Tours). Orléans concentre des industries pharmaceutiques (Servier) et chimiques avec des besoins élevés en sécurité des données de R&D. Tours abrite STMicroelectronics et une filière microélectronique avec des enjeux de protection de propriété intellectuelle. La région est traversée par l'axe A10/A11, hub logistique national avec des entrepôts automatisés utilisant des WMS cloud. Les centrales nucléaires (Saint-Laurent-des-Eaux, Belleville-sur-Loire) génèrent des infrastructures informatiques critiques.",
      sectors: [
        "Pharmaceutique (Servier Gidy-Orléans, laboratoires Chartres — cloud R&D sécurisé)",
        "Microélectronique (STMicroelectronics Tours — cloud conception, EDA tools)",
        "Logistique et e-commerce (Amazon, SEGRO Orléans — WMS cloud, automatisation)",
        "Énergie nucléaire (EDF Saint-Laurent-des-Eaux, Belleville — systèmes OT/IT)",
        "Aéronautique (Safran, Zodiac Aero — cloud PLM, bureau d'études)",
        "Cosmétique (Cosmetic Valley Chartres, Clarins — cloud data marketing)",
        "Tourisme (châteaux de la Loire — plateformes réservation cloud)",
        "Collectivités (Orléans Métropole, Tours Métropole — cloud public souverain)",
      ],
      neighborhoods: [
        "Orléans Métropole – Saint-Jean-de-Braye – Gidy (45)",
        "Tours Métropole Val de Loire – Saint-Cyr-sur-Loire (37)",
        "Chartres – Dreux (28)",
        "Bourges – Vierzon (18)",
        "Blois – Vendôme (41)",
        "Châteauroux – Issoudun (36)",
        "Montargis – Gien – Pithiviers (45)",
        "Amboise – Chinon (37)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 6 départements du Centre-Val de Loire ?",
          a: "Oui, CyberSecure intervient dans les six départements : Cher (18), Eure-et-Loir (28), Indre (36), Indre-et-Loire (37), Loir-et-Cher (41) et Loiret (45). La proximité avec Paris (moins de 2h) permet des délais d'intervention très courts. Nos spécialistes cloud se déplacent partout dans la région. CERT d'urgence 24/7.",
        },
        {
          q: "Servier à Orléans stocke des données de R&D pharmaceutique dans le cloud — quelles précautions ?",
          a: "Les données de R&D pharmaceutique (résultats d'essais cliniques, formules, brevets) sont parmi les données les plus sensibles qui soient. Servier utilise des environnements cloud hybrides avec des protections renforcées : chiffrement BYOK (Bring Your Own Key), stockage dans des régions cloud France Only, DLP (Data Loss Prevention), et accès conditionnel (Zero Trust). CyberSecure audite ces architectures : configuration du chiffrement au repos et en transit, gestion des clés, et contrôle des accès tiers.",
        },
        {
          q: "Les entrepôts logistiques automatisés (Amazon Orléans) utilisent-ils des clouds industriels ?",
          a: "Oui. Les entrepôts Amazon et SEGRO du Loiret utilisent AWS pour leurs WMS (Warehouse Management Systems), les systèmes de gestion des AGV (robots de picking) et les plateformes IoT de supervision. Ces architectures cloud industrielles mélangent IT et OT avec des risques de mouvement latéral. CyberSecure propose des audits de sécurité cloud pour les entrepôts automatisés : segmentation IT/OT, sécurité des API AWS IoT, et monitoring des accès aux systèmes de contrôle.",
        },
        {
          q: "Les collectivités du Centre-Val de Loire migrent-elles leurs SI vers le cloud ? Quelles règles ?",
          a: "Orléans Métropole, Tours Métropole et le Conseil Régional Centre-Val de Loire migrent progressivement leurs services numériques vers le cloud. Le référentiel Cloud de Confiance (ANSSI) impose aux collectivités traitant des données sensibles d'utiliser des offres qualifiées SecNumCloud (OVHcloud, Outscale/Dassault). CyberSecure accompagne les collectivités locales dans leur stratégie cloud souverain, les audits de configuration, et la conformité avec les recommandations CNIL/ANSSI.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Centre-Val de Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Centre-Val de Loire via ses fonds FEDER et les programmes d'aide à la numérisation. Les CCI régionales (CCI Loiret, CCI Indre-et-Loire, CCI Eure-et-Loir). BPI France Centre — prêts innovation numériques. Cosmetic Valley, S2E2 et InovValley accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCentreValDeLoire;
