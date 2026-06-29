import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudSeineMaritime = () => (
  <CityLandingPage
    data={{
      city: "Seine-Maritime",
      citySlug: "seine-maritime",
      region: "Normandie",
      postalCode: "76",
      intro: "CyberSecure est votre prestataire sécurité cloud Seine-Maritime (76) : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Rouen, Le Havre, Dieppe, Fécamp, Elbeuf et tout le département.",
      localContext: "La Seine-Maritime est une région industrielle en pleine transformation numérique. Le Havre est en train de devenir un port du futur grâce à la digitalisation de ses opérations : port community system SOGET, grues automatiques, plateforme de données Haropa. Rouen, capitale normande, développe une économie tertiaire et numérique autour de l'éco-industrie, de la pharma (Pfizer), et d'un tissu de PME/ETI innovantes. L'axe Seine concentre des industries pétrochimiques et automobiles qui adoptent les solutions IIoT cloud pour leur transformation industrielle 4.0.",
      sectors: [
        "Port cloud (Haropa Port Le Havre — SOGET, TOS, smart port, AIS/VTS cloud)",
        "Énergie et pétrochimie cloud (TotalEnergies — IIoT, maintenance prédictive cloud)",
        "Pharma cloud (Pfizer Rouen — GxP cloud, essais cliniques Azure)",
        "Automobile cloud (Renault Sandouville — PLM cloud, OT analytics)",
        "Logistique cloud (Amazon Le Havre, XPO — WMS cloud, robotique connectée)",
        "Santé cloud (CHU Rouen, GHH — HDS cloud, télémédecine)",
        "Agroalimentaire cloud (Lactalis, Savencia — ERP cloud, qualité, chaîne froid)",
        "Collectivités (Métropole Rouen Normandie, Havre Seine Métropole — Numspot)",
      ],
      neighborhoods: [
        "Rouen – Saint-Sever – Rive Gauche (76000)",
        "Le Havre – Grand Hameau (76600)",
        "Mont-Saint-Aignan – Bois-Guillaume (76130)",
        "Gonfreville-l'Orcher – Harfleur (76700)",
        "Dieppe (76200)",
        "Elbeuf (76500)",
        "Barentin – Yvetot (76360)",
        "Fécamp (76400)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Seine-Maritime (76) pour la sécurité cloud ?",
          a: "Oui, CyberSecure intervient dans tout le 76 : Métropole Rouen Normandie, Le Havre Seine Métropole, côte d'Alabâtre, Pays de Caux. Nos spécialistes cloud connaissent les architectures cloud portuaires, pharmaceutiques et industrielles normandes. CERT cloud 24/7.",
        },
        {
          q: "Haropa Port (Le Havre) digitalise ses opérations : quelles architectures cloud pour un port du futur ?",
          a: "Le projet 'port du futur' d'Haropa Port s'appuie sur plusieurs plateformes cloud : SOGET (Single Window maritime) pour la dématérialisation douanière, Navis N4 (TOS cloud) pour la gestion des terminaux, Azure IoT Hub pour le suivi temps réel des containers et des grues automatiques, et une plateforme de données ouverte pour les acteurs de la supply chain. Ces architectures cloud doivent être sécurisées : accès conditionnels pour les acteurs portuaires (douane, armateurs, transitaires), chiffrement des données de manifeste (données commerciales sensibles), et monitoring des anomalies. CyberSecure audite les plateformes cloud portuaires.",
        },
        {
          q: "Pfizer Rouen utilise Azure pour ses données de fabrication pharmaceutique : est-ce conforme GxP ?",
          a: "Microsoft Azure propose un programme 'Azure for Healthcare' avec des accords de conformité GxP, GMP (Eudralex Annex 11), et FDA 21 CFR Part 11. Pfizer utilise Azure pour certains workloads de manufacturing (analytics de production, gestion des déviations, LIMS cloud). Pour être conforme GxP, les configurations Azure doivent être qualifiées (IQ/OQ/PQ), les données doivent être protégées contre les modifications non autorisées (audit trail immuable), et les sauvegardes doivent être régulièrement testées. CyberSecure audite les configurations Azure pharma pour vérifier la conformité GxP et NIS2.",
        },
        {
          q: "TotalEnergies Gonfreville utilise AWS IoT pour sa maintenance prédictive : comment sécuriser ces flux ?",
          a: "La maintenance prédictive sur une raffinerie utilise AWS IoT Greengrass pour collecter des données de capteurs (vibrations des compresseurs, niveaux de cuves) et AWS SageMaker pour entraîner des modèles de prédiction de pannes. La sécurité de ces flux : authentification forte des appareils IoT (AWS IoT Core avec certificats X.509), chiffrement TLS des communications, politiques IAM minimales pour les appareils (principe du moindre privilège), ségrégation des réseaux OT/IoT/IT, et logging de tous les accès aux données de production. CyberSecure réalise des audits de sécurité des architectures IoT industrielles.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Seine-Maritime ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Seine-Maritime — diagnostics numériques. Métropole Rouen Normandie — programmes innovation. BPI France Normandie — prêts innovation. Normandie AeroEspace et le CRITT Normandie accompagnent leurs membres. Diagnostic cloud gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default SecuriteCloudSeineMaritime;
