import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBasRhin = () => (
  <CityLandingPage
    data={{
      city: "Bas-Rhin",
      citySlug: "bas-rhin",
      region: "Grand Est",
      postalCode: "67",
      intro: "CyberSecure est votre prestataire sécurité cloud Bas-Rhin (67) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau, Saverne et tout le département.",
      localContext: "Le Bas-Rhin est un département stratégique pour le cloud en Europe. OVHcloud a ses plus grands datacenters à Strasbourg (SBG1 à SBG5), représentant l'un des plus importants clusters de serveurs d'Europe. Cette infrastructure permet aux entreprises alsaciennes de bénéficier de services cloud souverains français avec des latences excellentes. Les institutions européennes de Strasbourg (PE, Conseil de l'Europe) utilisent des solutions cloud hautement sécurisées. Le secteur pharmaceutique (Lilly, Sanofi) a massivement adopté le cloud pour sa R&D et ses processus de fabrication. La frontière avec l'Allemagne génère des flux de données transfrontaliers UE/UE.",
      sectors: [
        "Cloud souverain (OVHcloud SBG — SecNumCloud, datacenters alsaciens)",
        "Institutions européennes cloud (PE, Conseil Europe — cloud ultra-sécurisé)",
        "Pharma cloud (Lilly Strasbourg, BASF Health — GxP cloud, Azure pharma)",
        "Automobile cloud (Hager Group, équipementiers — PLM cloud, IoT production)",
        "Transfrontalier cloud (entreprises alsaciennes/allemandes — cloud multi-pays)",
        "ESN cloud (Kaliop, alsaciennes — managed cloud services, MSP)",
        "Santé cloud (HUS Strasbourg — HDS, recherche médicale, téléradiologie)",
        "Collectivités (Eurométropole Strasbourg — Numspot, cloud souverain alsacien)",
      ],
      neighborhoods: [
        "Strasbourg – Neustadt – Port du Rhin (67000)",
        "Schiltigheim – Bischheim (67300)",
        "Illkirch-Graffenstaden (67400)",
        "Haguenau – Bischwiller (67500)",
        "Saverne – Molsheim (67700/67120)",
        "Sélestat (67600)",
        "Obernai (67210)",
        "Wissembourg (67160)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Bas-Rhin (67) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le Bas-Rhin : Eurométropole de Strasbourg, Haguenau-Wissembourg, Saverne-Alsace Bossue, Sélestat-Erstein. Nos spécialistes cloud ont une expertise dans les offres OVHcloud SecNumCloud et les architectures cloud des secteurs pharma et institutions européennes. CERT cloud 24/7.",
        },
        {
          q: "OVHcloud Strasbourg (SBG) : pourquoi choisir ce datacenter pour une entreprise alsacienne sensible ?",
          a: "OVHcloud Strasbourg offre plusieurs avantages uniques : latence sub-milliseconde depuis Strasbourg, certification SecNumCloud (qualification ANSSI niveau le plus élevé) pour les workloads souverains, certifications ISO 27001/ISO 50001, et le fait qu'OVHcloud est une entreprise française non soumise au CLOUD Act américain ou au NSA. Pour les entreprises alsaciennes sensibles (pharma, secteur public, défense), c'est le choix naturel. OVHcloud SBG5 est le datacenter le plus récent avec les certifications les plus à jour. CyberSecure audite et configure les environnements OVHcloud.",
        },
        {
          q: "Lilly France (Strasbourg) : comment gérer la conformité cloud entre les exigences FDA et européennes (ANSSI) ?",
          a: "Lilly utilise des clouds globaux (Microsoft Azure, AWS) pour ses opérations mondiales, tout en devant respecter les réglementations FDA (21 CFR Part 11, GAMP 5) pour les marchés américains et les exigences européennes (Eudralex Annex 11, RGPD, NIS2). La réconciliation passe par : choisir des régions cloud européennes pour les données européennes, implémenter un SMSI (ISO 27001) comme cadre commun, utiliser des contrôles cloud conformes à la fois à FDA et ANSSI (logs d'audit, intégrité des données, ségrégation des accès). CyberSecure accompagne les filiales françaises de groupes pharma américains.",
        },
        {
          q: "Les institutions européennes à Strasbourg utilisent-elles des clouds souverains européens ?",
          a: "Le Parlement Européen et les autres institutions de Strasbourg utilisent une combinaison de datacenters propres (Luxembourg) et de solutions cloud vérifiées par CERT-EU. Depuis 2022, les institutions européennes favorisent les fournisseurs cloud qui ne sont pas soumis aux législations de pays tiers (CLOUD Act, FISA 702). En pratique, certains workloads migrent vers des offres qualifiées européennes (OVHcloud, T-Systems Open Telekom Cloud, Ionos). CyberSecure accompagne les prestataires des institutions européennes dans leur qualification cloud.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Bas-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Bas-Rhin — chèques cyber et diagnostics numériques. Eurométropole de Strasbourg — programmes innovation. BPI France Grand Est — prêts innovation. Alsace Digitale et le pôle BioValley accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBasRhin;
