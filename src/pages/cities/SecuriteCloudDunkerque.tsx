import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudDunkerque = () => (
  <CityLandingPage
    data={{
      city: "Dunkerque",
      citySlug: "dunkerque",
      region: "Hauts-de-France",
      postalCode: "59140",
      intro: "Dunkerque, capitale de la sidérurgie IIoT avec ArcelorMittal Industrie 4.0 et port de premier rang en Europe du Nord : CloudSecure sécurise vos infrastructures cloud industrielles IIoT sidérurgie, logistique portuaire temps réel et énergie offshore. Audit cloud industriel Dunkerque sidérurgie, sécurité IIoT ArcelorMittal et conformité NIS2 pour les opérateurs portuaires et industriels du Nord.",
      localContext: "ArcelorMittal à Dunkerque est l'un des plus grands sites sidérurgiques d'Europe, déployant des solutions Industrie 4.0 cloud (AWS, Azure) pour la supervision des fours, la maintenance prédictive IIoT et l'optimisation de la production d'acier, créant des architectures OT/IT convergentes exposées aux cyberattaques ciblant les infrastructures industrielles critiques. Le Grand Port Maritime de Dunkerque, 3ème port français, gère des flux logistiques massifs via des plateformes cloud de gestion portuaire (terminaux, escales, marchandises) soumises aux exigences NIS2 pour les infrastructures critiques de transport. Le développement de l'éolien offshore en mer du Nord (WPO Dunkirk) génère des données opérationnelles cloud pour la supervision des parcs éoliens. La zone industrielle de Dunkerque accueille également des unités de production d'aluminium, de chimie et de cimenterie en cours de numérisation IIoT.",
      sectors: [
        "Sidérurgie IIoT ArcelorMittal (cloud Industrie 4.0, supervision fours, MES)",
        "Grand Port Maritime de Dunkerque (cloud logistique portuaire, NIS2 transport)",
        "Éolien offshore et énergie (cloud supervision parcs offshore Mer du Nord)",
        "Aluminium et chimie industrielle (SCADA cloud, OT/IT convergence)",
        "Logistique et transport maritime (WMS cloud, EDI portuaire)",
        "PME sous-traitants industriels (cloud ERP, accès plateformes partagées)",
      ],
      neighborhoods: [
        "Centre-ville de Dunkerque",
        "Grand Port Maritime – zone industrialo-portuaire",
        "Zone industrielle de Grande-Synthe (ArcelorMittal)",
        "Loon-Plage et Saint-Georges-sur-l'Aa (industries)",
        "Communauté Urbaine de Dunkerque (CUD)",
        "Nord (59) – littoral côte d'Opale",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud IIoT pour un sous-traitant d'ArcelorMittal à Dunkerque ?",
          a: "Un audit de sécurité cloud IIoT pour un sous-traitant sidérurgique dunkerquois est facturé entre 5 000 et 12 000 € HT selon la complexité de l'architecture (interfaces OPC-UA cloud, MES connecté, accès aux plateformes partagées avec ArcelorMittal, nombre de sites de production). CloudSecure analyse les droits d'accès aux plateformes cloud du donneur d'ordre, la segmentation OT/IT, la sécurité des passerelles IoT-cloud et la conformité aux chartes cybersécurité fournisseurs ArcelorMittal (standards IEC 62443). Rapport sous 10 jours. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser l'infrastructure cloud IIoT d'une aciérie Industrie 4.0 à Dunkerque ?",
          a: "Les aciéries dunkerquoises déployant l'Industrie 4.0 connectent leurs fours à arc, laminoirs et systèmes de contrôle qualité à des plateformes cloud (AWS IoT, Azure IoT Hub, Siemens MindSphere) pour la maintenance prédictive et l'optimisation de production. CloudSecure sécurise ces architectures IIoT critiques : chiffrement des flux OPC-UA vers le cloud, authentification des appareils industriels, segmentation des réseaux OT/IT (zones Purdue), protection des accès à distance (VPN industriel sécurisé), et monitoring des anomalies comportementales sur les équipements connectés. Nous auditons également la conformité NIS2 pour les opérateurs sidérurgiques.",
        },
        {
          q: "Le Grand Port Maritime de Dunkerque est-il soumis à NIS2 et quelles sont les obligations cloud ?",
          a: "Le Grand Port Maritime de Dunkerque est une infrastructure critique de transport directement éligible à NIS2 en tant qu'entité essentielle, avec des obligations de sécurité renforcées sur ses systèmes d'information cloud (gestion des escales, manifestes de fret, systèmes douaniers, sûreté portuaire). CloudSecure accompagne les opérateurs portuaires dunkerquois dans la conformité NIS2 cloud : analyse des risques portuaires, PSSI maritime, plan de continuité d'activité cloud et procédures de notification des incidents à l'ANSSI. Diagnostic NIS2 portuaire à partir de 6 000 € HT.",
        },
        {
          q: "Comment sécuriser les systèmes cloud de supervision des parcs éoliens offshore en Mer du Nord depuis Dunkerque ?",
          a: "Les parcs éoliens offshore en Mer du Nord utilisent des systèmes SCADA et des plateformes de maintenance prédictive cloud pour superviser à distance les turbines, gérer les interventions de maintenance et optimiser la production d'énergie. Ces infrastructures critiques (NIS2 énergie) échangent des données via des liaisons satellite/4G sécurisées vers des centres de contrôle cloud. CloudSecure audite la sécurité des communications offshore-cloud, les droits d'accès des équipes de maintenance, la robustesse des systèmes de contrôle et la résilience face aux cyberattaques pendant les périodes de mer agitée (inaccessibilité physique).",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Dunkerque pour les audits de sécurité cloud industriels et portuaires ?",
          a: "Oui, CloudSecure intervient à Dunkerque en présentiel pour les audits industriels et portuaires : visites des sites ArcelorMittal et des terminaux portuaires pour les revues d'architecture OT/IT, interviews des équipes automaticiens et IT, ateliers de sensibilisation à la cybersécurité industrielle cloud. Nos consultants sont formés aux environnements industriels à risques (EPI, protocoles sécurité site) et respectent les procédures d'entrée dans les zones industrielles. Les tests cloud sont réalisés à distance. Déplacement inclus pour les missions supérieures à 7 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudDunkerque;
