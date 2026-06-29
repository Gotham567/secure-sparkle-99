import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBourgogneFrancheComte = () => (
  <CityLandingPage
    data={{
      city: "Bourgogne-Franche-Comté",
      citySlug: "bourgogne-franche-comte",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21 / 25 / 39 / 58 / 70 / 71 / 89 / 90",
      intro: "CyberSecure est votre prestataire sécurité cloud Bourgogne-Franche-Comté : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Dijon, Besançon, Belfort-Montbéliard, Chalon-sur-Saône, Mâcon, Auxerre et toute la région.",
      localContext: "Bourgogne-Franche-Comté est une région industrielle avec des secteurs d'excellence reconnus mondialement. Le bassin de Montbéliard-Belfort (Stellantis, Alstom, General Electric) est en pleine transformation numérique avec des projets Industrie 4.0 et cloud industriel. La filière horlogère comtoise (Besançon, Morteau) protège une propriété intellectuelle exceptionnelle et migre progressivement vers des outils de conception cloud (CAO). Les domaines viticoles bourguignons (Côte de Nuits, Côte de Beaune) développent leurs plateformes DTC cloud pour l'export mondial. Dijon accueille des éditeurs de logiciels spécialisés dans l'agroalimentaire. La région est bien desservie par les datacenters (Ikoula Dijon, hébergeurs régionaux).",
      sectors: [
        "Industrie 4.0 (Stellantis Sochaux, Alstom Belfort — cloud industriel, OT/IT)",
        "Horlogerie et micromécanique (Besançon, Morteau — CAO cloud, propriété intellectuelle)",
        "Viticulture (Côte de Nuits, Côte de Beaune — DTC cloud, e-commerce export)",
        "Agroalimentaire (Bresse, Charolais, Comté — traçabilité cloud, ERP)",
        "Éditeurs logiciels (Dijon, Besançon — éditeurs SaaS agroalimentaire et industrie)",
        "Énergie (EDF BFC, centrales nucléaires — infrastructure critique cloud hybride)",
        "Santé (CHU Dijon, CHRU Besançon — cloud santé HDS, e-santé)",
        "Collectivités (Dijon Métropole, Grand Besançon Métropole — cloud souverain)",
      ],
      neighborhoods: [
        "Dijon Métropole – Chenôve – Quetigny – Longvic (21)",
        "Grand Besançon Métropole – Pontarlier (25)",
        "Belfort – Montbéliard – Héricourt (90/25)",
        "Auxerre – Sens – Joigny (89)",
        "Chalon-sur-Saône – Mâcon – Le Creusot (71)",
        "Nevers – Cosne-sur-Loire (58)",
        "Vesoul – Lure (70)",
        "Lons-le-Saunier – Dole (39)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 8 départements de Bourgogne-Franche-Comté ?",
          a: "Oui, CyberSecure intervient dans les huit départements : Côte-d'Or (21), Doubs (25), Jura (39), Nièvre (58), Haute-Saône (70), Saône-et-Loire (71), Yonne (89) et Territoire de Belfort (90). Nos spécialistes cloud se déplacent partout dans la région. CERT d'urgence 24/7. Délai d'intervention pour audits planifiés : 5-10 jours ouvrés.",
        },
        {
          q: "Stellantis Sochaux migre vers le cloud industriel (Industrie 4.0) — quels risques ?",
          a: "Stellantis (Sochaux, Doubs) déploie des projets Industrie 4.0 avec des plateformes cloud hybrides (Microsoft Azure Industrial IoT, AWS IoT Greengrass) pour la supervision des lignes de production. Ces architectures créent des risques nouveaux : convergence IT/OT, accès distants des sous-traitants aux systèmes de production, fuites de données de process. CyberSecure propose des audits cloud industriel spécialisés : segmentation OT/IT, sécurité des passerelles industrielles, et gestion des accès fournisseurs.",
        },
        {
          q: "Les horlogers comtois peuvent-ils utiliser des outils de CAO cloud (Onshape, Fusion 360) ?",
          a: "Les outils de CAO cloud (Onshape, Autodesk Fusion 360, PTC Creo) sont de plus en plus adoptés par les horlogers et microtechniciens comtois. Ces outils stockent des plans de fabrication ultra-précis dans le cloud américain. Les risques : cyberespionnage industriel (Chine cible les métiers de précision), exfiltration de fichiers de conception, et problèmes de résilience. CyberSecure recommande des configurations spécifiques : mode offline, watermarking numérique des fichiers CAO, et politiques DLP sur les outils cloud.",
        },
        {
          q: "Les domaines viticoles bourguignons peuvent-ils vendre en direct via le cloud (DTC) ?",
          a: "Oui. Les domaines de Côte de Nuits, Côte de Beaune et Chablis développent leurs ventes directes (DTC — Direct to Consumer) via des plateformes cloud (Shopify, WooCommerce, Salesforce Commerce). Ces plateformes traitent des données de paiement (PCI DSS) et des données clients internationaux (RGPD, CCPA pour les clients US). CyberSecure audite ces boutiques en ligne : sécurité des passerelles de paiement, configuration WAF/CDN, et conformité multi-réglementations.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Bourgogne-Franche-Comté ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Bourgogne-Franche-Comté via ses fonds FEDER et le programme BFC Numérique. Les CCI de BFC (CCI Côte-d'Or, CCI du Doubs, CCI de Saône-et-Loire). BPI France Bourgogne — prêts numériques. Le Pôle Véhicule du Futur et la BFCA (Bourgogne Franche-Comté Alliance) accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBourgogneFrancheComte;
