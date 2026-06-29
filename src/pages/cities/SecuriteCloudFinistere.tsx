import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudFinistere = () => (
  <CityLandingPage
    data={{
      city: "Finistère",
      citySlug: "finistere",
      region: "Bretagne",
      postalCode: "29",
      intro: "CyberSecure est votre prestataire sécurité cloud Finistère (29) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Brest, Quimper, Morlaix, Quimperlé, Landerneau et tout le département.",
      localContext: "Le Finistère adopte le cloud à grande vitesse. Brest Métropole déploie une stratégie smart city basée sur des plateformes cloud (données urbaines, open data). Le Pôle Mer Bretagne-Atlantique fédère des startups maritime-tech qui développent des solutions cloud pour la surveillance des océans, la maintenance prédictive des navires, et la logistique portuaire. La filière agroalimentaire finistérienne (pêche, conserveries) utilise des ERP cloud pour la traçabilité et l'export. Le CHRU de Brest est en migration vers une infrastructure cloud HDS pour ses données médicales.",
      sectors: [
        "Maritime cloud (startups Pôle Mer, IFREMER — surveillance oceans, AIS cloud)",
        "Défense cloud (Naval Group — PLM cloud non classifié, collaboration sécurisée)",
        "Agroalimentaire cloud (Bigard, Hénaff, conserveries — ERP cloud, traçabilité)",
        "Smart city (Brest Métropole — IoT AWS, open data, mobilité numérique)",
        "Santé cloud (CHRU Brest, hôpitaux 29 — HDS cloud, télémédecine)",
        "Numérique (Digital Bretagne, startups Brest — cloud-native, SaaS B2B)",
        "Port cloud (Port de Brest — gestion cloud fret, douane numérique)",
        "Collectivités (Brest Métropole, CD29 — Numspot, e-services citoyens)",
      ],
      neighborhoods: [
        "Brest – Recouvrance – Plouzané (29200/29280)",
        "Guipavas – Landerneau (29490/29400)",
        "Quimper (29000)",
        "Morlaix (29600)",
        "Concarneau – Quimperlé (29900/29300)",
        "Lesneven – Saint-Pol-de-Léon (29260/29250)",
        "Douarnenez (29100)",
        "Châteaulin (29150)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Finistère (29) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le Finistère : Brest Métropole, Quimper Bretagne Occidentale, Pays de Morlaix, Pays de Cornouaille. Nos spécialistes cloud ont une expertise dans les architectures cloud des startups maritime-tech et des acteurs agroalimentaires finistériens. CERT cloud 24/7.",
        },
        {
          q: "Les startups maritime-tech du Pôle Mer Bretagne-Atlantique : quelle architecture cloud pour surveiller les océans ?",
          a: "Les startups maritime-tech développent des solutions de surveillance des océans (drones sous-marins, bouées connectées, satellites) qui génèrent des volumes massifs de données. L'architecture cloud typique : AWS IoT Core ou Azure IoT Hub pour l'ingestion des données des capteurs, AWS S3 / Azure Blob Storage pour le stockage des données brutes (petabytes de données acoustiques ou bathymétriques), SageMaker ou Azure ML pour le traitement IA (détection d'espèces marines, prévision météo marine), et API sécurisées pour la diffusion aux clients. CyberSecure audite ces architectures cloud IoT/IA marines.",
        },
        {
          q: "L'Ifremer (Plouzané) héberge des données scientifiques sensibles : OVHcloud SecNumCloud ou AWS ?",
          a: "L'Ifremer, en tant qu'organisme de recherche public français, doit privilégier des offres cloud souveraines pour ses données sensibles (données bathymétriques confidentielles, données des programmes de surveillance). OVHcloud SecNumCloud (qualifié ANSSI) est le premier choix pour les données souveraines. Pour les projets collaboratifs européens (Horizon Europe, Copernicus), AWS (région eu-west-3 Paris) ou Azure (France Centre) sont acceptables avec des configurations BYOK. CyberSecure conseille les organismes de recherche publics dans leur stratégie cloud souverain.",
        },
        {
          q: "Bigard (Quimperlé) exporte vers 100 pays : comment sécuriser une chaîne d'approvisionnement cloud mondiale ?",
          a: "Bigard utilise un ERP SAP S/4HANA cloud pour gérer sa chaîne d'approvisionnement mondiale (achats matières premières, production, export). La sécurité de la supply chain cloud passe par : sécurisation des intégrations EDI avec les clients et fournisseurs internationaux (échanges de données de commandes, factures, certificats sanitaires), monitoring des accès partenaires via Azure B2B, protection contre les attaques BEC (Business Email Compromise) qui ciblent les transactions d'export, et conformité aux exigences douanières numériques (dématérialisation des certificats sanitaires export). CyberSecure audite les architectures ERP cloud des IAA exportatrices.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud dans le Finistère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Finistère — diagnostics numériques. Brest Métropole — programmes innovation. BPI France Bretagne — prêts innovation. Le Pôle Mer Bretagne-Atlantique et Digital Bretagne accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudFinistere;
