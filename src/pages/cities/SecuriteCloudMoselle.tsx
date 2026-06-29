import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMoselle = () => (
  <CityLandingPage
    data={{
      city: "Moselle",
      citySlug: "moselle",
      region: "Grand Est",
      postalCode: "57",
      intro: "CyberSecure est votre prestataire sécurité cloud Moselle (57) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Metz, Thionville, Forbach, Sarreguemines, Sarrebourg et tout le département.",
      localContext: "La Moselle est un département transfrontalier au cœur du triangle France-Luxembourg-Allemagne. Cette position unique génère des flux économiques et de données spécifiques : de nombreuses entreprises mosellanes ont des branches au Luxembourg (secteur financier, assurance, tech) et travaillent avec des partenaires allemands (industrie automobile, chimie). Le datacenter OVHcloud de Strasbourg est accessible en très faible latence depuis Metz. La sidérurgie (ArcelorMittal) adopte progressivement des outils cloud industriels pour la maintenance prédictive. La Technopole de Metz héberge des ESN et startups cloud.",
      sectors: [
        "Transfrontalier cloud (entreprises front. Luxembourg — Office 365, Azure multi-pays)",
        "Sidérurgie cloud (ArcelorMittal — IIoT Azure, maintenance prédictive, analytics OT)",
        "Numérique cloud (Technopole Metz, ESN locales — managed cloud services)",
        "Santé cloud (CHR Metz-Thionville — HDS, télémédecine transfrontalière)",
        "Finance cloud (Crédit Mutuel Metz, assureurs — DORA, cloud financier)",
        "Logistique cloud (entrepôts axe A31, Amazon — WMS cloud, automatisation)",
        "Collectivités cloud (Metz Métropole, Thionville — smart city, cloud souverain)",
        "PME industrielles (secteur automobile, sous-traitance — ERP cloud, SAP)",
      ],
      neighborhoods: [
        "Metz – Technopole – Magny (57000)",
        "Thionville – Terville – Yutz (57100/57970)",
        "Forbach – Freyming (57600/57800)",
        "Sarreguemines – Sarrebourg (57200/57400)",
        "Amnéville – Hagondange (57360/57300)",
        "Florange – Uckange – Fameck (57700/57290)",
        "Montigny-lès-Metz – Woippy (57158/57140)",
        "Saint-Avold – Creutzwald (57500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Moselle (57) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans toute la Moselle : Metz Métropole, Pays de Thionville-Fensch, Bassin Houiller, et zones frontalières. Nous avons une expertise dans les architectures cloud multi-pays (France/Luxembourg/Allemagne) et les contraintes réglementaires transfrontalières. CERT cloud 24/7.",
        },
        {
          q: "Les entreprises mosellanes qui utilisent Office 365/Azure dans un contexte transfrontalier (Luxembourg) : quels risques ?",
          a: "Une entreprise mosellane avec des salariés frontaliers au Luxembourg utilisant Office 365 doit configurer correctement son tenant Azure : localisation des données (choix de la région EU, pas US par défaut), politiques de Conditional Access pour les accès depuis des appareils luxembourgeois, DLP (Data Loss Prevention) pour éviter les fuites de données entre entités françaises et luxembourgeoises, et gestion des licences (frontière fiscale UE). CyberSecure audite les tenants Microsoft 365 des entreprises transfrontalières et vérifie la conformité RGPD des configurations.",
        },
        {
          q: "ArcelorMittal Florange adopte l'IIoT : comment sécuriser la remontée des données capteurs vers Azure IoT ?",
          a: "ArcelorMittal a déployé des solutions de maintenance prédictive basées sur Azure IoT Hub et Azure Machine Learning pour ses sites européens. Pour Florange, les données des capteurs (vibrations, températures, courants moteur) transitent via des passerelles IoT Edge (Azure IoT Edge, AWS Greengrass) avant d'être envoyées dans le cloud. La sécurisation passe par : authentification des devices IoT (certificats X.509), chiffrement TLS des flux, segmentation réseau entre OT et passerelles IoT, et alertes sur les anomalies de comportement des équipements. CyberSecure audite ces architectures IIoT cloud.",
        },
        {
          q: "Un datacenter OVHcloud est accessible depuis Metz en très faible latence : est-ce pertinent pour la souveraineté des données ?",
          a: "OVHcloud Strasbourg (SBG1-SBG5) est à moins de 50km de Metz, offrant des latences réseau inférieures à 1ms. OVHcloud propose des offres qualifiées SecNumCloud (qualification ANSSI) pour les données sensibles des administrations et des entreprises réglementées. Pour les entreprises mosellanes qui traitent des données soumises à la réglementation française (données de santé, données judiciaires, données des collectivités), OVHcloud SecNumCloud permet de rester en dehors du champ d'application du CLOUD Act américain. CyberSecure accompagne les migrations vers OVHcloud souverain.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Moselle ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Moselle — diagnostics numériques. Metz Métropole — programmes innovation. BPI France Grand Est — prêts innovation. La Région Grand Est (FEDER numérique) co-finance des projets cloud sécurisés. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMoselle;
