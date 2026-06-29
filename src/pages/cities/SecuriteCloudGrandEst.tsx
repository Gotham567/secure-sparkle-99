import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudGrandEst = () => (
  <CityLandingPage
    data={{
      city: "Grand Est",
      citySlug: "grand-est",
      region: "Grand Est",
      postalCode: "08 / 10 / 51 / 52 / 54 / 55 / 57 / 67 / 68 / 88",
      intro: "CyberSecure est votre prestataire sécurité cloud Grand Est : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Strasbourg, Metz, Nancy, Reims, Mulhouse, Colmar et toute la région.",
      localContext: "Le Grand Est est une région frontalière stratégique, carrefour européen entre la France, l'Allemagne, la Suisse, le Luxembourg et la Belgique. Strasbourg héberge le Parlement européen et des institutions européennes avec des besoins exceptionnels en cybersécurité. La région est un hub de connectivité : data centers à Strasbourg (OVHcloud), Nancy, Metz et Reims bénéficient d'une connectivité excellence avec les points d'échange internet européens. L'industrie chimique, automobile (Mercedes Hambach, Stellantis), et pharmaceutique sont très présentes. La filière Champagne (Reims, Épernay) génère des enjeux cloud e-commerce et DTC importants. Le Grand Est est aussi un acteur majeur du cloud souverain français (OVHcloud à Strasbourg).",
      sectors: [
        "Institutions européennes (Parlement européen, Conseil de l'Europe Strasbourg)",
        "Cloud et datacenters (OVHcloud Strasbourg, Encoretis Nancy, hébergeurs régionaux)",
        "Automobile (Mercedes Hambach, Stellantis Trémery, filière équipementiers)",
        "Chimie et pharmacie (Strasbourg, Mulhouse, industries rhénanes transfrontalières)",
        "Champagne (LVMH, Lanson, Taittinger, Rémy Cointreau — e-commerce export)",
        "Sidérurgie (ArcelorMittal Florange, industries lorraines reconverties)",
        "Santé (CHRU Strasbourg, CHU Nancy, hôpitaux universitaires)",
        "Collectivités (Eurométropole Strasbourg, Metz Métropole, Région Grand Est)",
      ],
      neighborhoods: [
        "Eurométropole Strasbourg – Schiltigheim – Illkirch (67)",
        "Metz Métropole – Thionville – Forbach (57)",
        "Nancy Métropole – Vandœuvre-lès-Nancy (54)",
        "Reims – Châlons-en-Champagne – Épernay (51)",
        "Mulhouse – Colmar – Saint-Louis (68)",
        "Troyes – Bar-sur-Aube (10)",
        "Charleville-Mézières – Sedan (08)",
        "Épinal – Saint-Dié-des-Vosges (88)",
      ],
      faq: [
        {
          q: "OVHcloud est basé à Strasbourg — est-ce pertinent pour la souveraineté des données ?",
          a: "OVHcloud à Strasbourg est l'un des plus grands opérateurs cloud européens. Ses datacenters français sont éligibles à la qualification SecNumCloud (ANSSI) pour certaines offres, ce qui est requis pour les données les plus sensibles. Pour les entreprises du Grand Est souhaitant garder leurs données en France avec un opérateur européen, OVHcloud est une alternative pertinente aux hyperscalers américains. CyberSecure audite les configurations OVHcloud, AWS, Azure et GCP sans discrimination.",
        },
        {
          q: "Comment les entreprises transfrontalières (France-Allemagne-Suisse) gèrent-elles leur sécurité cloud ?",
          a: "Les entreprises du Rhin Supérieur avec des entités en Allemagne (DSGVO = RGPD allemand) et en Suisse (LPD = loi sur la protection des données) doivent gérer des exigences de conformité multiples. Le cloud facilite une gestion centralisée mais crée des enjeux de résidence des données. CyberSecure accompagne les groupes transfrontaliers : cartographie des flux de données, choix des régions cloud conformes, politique RGPD/DSGVO unifiée, et audits de configuration multi-régions.",
        },
        {
          q: "Les maisons de Champagne vendent en ligne — comment sécuriser leur e-commerce cloud ?",
          a: "Les maisons de Champagne (LVMH, Pernod Ricard, maisons indépendantes) développent leurs ventes directes en ligne (DTC). Ces plateformes e-commerce cloud (Shopify Plus, Magento cloud, Salesforce Commerce Cloud) traitent des données de paiement (PCI DSS) et des données clients internationaux (RGPD). CyberSecure audite ces plateformes : sécurité des API, configuration CDN/WAF (Cloudflare, AWS CloudFront), secrets management, et conformité PCI DSS niveau 1-4.",
        },
        {
          q: "Le Parlement européen à Strasbourg a-t-il des exigences cloud spécifiques pour ses prestataires ?",
          a: "Oui. Les prestataires IT du Parlement européen doivent respecter des exigences strictes : hébergement dans des datacenters certifiés ISO 27001/SOC 2, conformité avec les règlements EU sur la protection des données, accréditations de sécurité spécifiques pour les systèmes traitant des données EU RESTRICTED. CyberSecure accompagne les entreprises strasbourgeoisses travaillant avec les institutions européennes dans leurs audits de conformité cloud.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Grand Est ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Grand Est via ses fonds FEDER et le programme Alsace Numérique. Les CCI régionales (CCI Alsace Eurométropole, CCI Grand Nancy, CCI de la Marne). BPI France Grand Est — prêts innovation. Le cluster Alsace Digitale et Grand Est Numérique accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudGrandEst;
