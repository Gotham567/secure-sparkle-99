import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLorient = () => (
  <CityLandingPage
    data={{
      city: "Lorient",
      citySlug: "lorient",
      region: "Bretagne",
      postalCode: "56100",
      intro: "CloudSecure accompagne la Marine nationale, les industriels navals et les entreprises de pêche de Lorient dans la sécurisation de leurs infrastructures cloud souverain SecNumCloud et IoT de traçabilité contre les cybermenaces étatiques et industrielles. Audit cloud souverain, conformité NIS2 défense et sécurité IoT pêche industrielle pour les acteurs stratégiques du Morbihan et de Bretagne.",
      localContext: "Lorient abrite l'une des bases navales les plus importantes de France, ainsi qu'un tissu industriel naval et halieutique unique en Europe. La Marine nationale et ses sous-traitants de défense s'appuient sur des clouds souverains qualifiés SecNumCloud pour héberger des données classifiées et des systèmes d'information sensibles, ce qui impose des exigences de sécurité bien au-delà des standards commerciaux. Le port de pêche de Lorient (Keroman), l'un des premiers de France, adopte progressivement des technologies IoT pour la traçabilité des captures (blockchain, capteurs embarqués, plateformes cloud de certification), créant de nouvelles vulnérabilités dans la chaîne de valeur halieutique. L'industrie navale (DCNS/Naval Group sous-traitants, Constructions et chantiers de l'Atlantique) gère des données de conception PLM ultra-sensibles nécessitant une protection cloud de niveau défense. CloudSecure intervient à Lorient, Lanester, Ploemeur et dans tout le Morbihan pour sécuriser ces environnements critiques.",
      sectors: [
        "Marine nationale et défense (cloud souverain SecNumCloud)",
        "Pêche industrielle et traçabilité IoT (Keroman, halles à marée cloud)",
        "Naval numérique et industrie sous-marine (PLM, CAO cloud)",
        "Industrie et sous-traitants défense (données classifiées)",
        "Numérique breton et ESN locales",
        "Collectivités et services publics (Lorient Agglomération)",
      ],
      neighborhoods: [
        "Base navale de Lorient et arsenal",
        "Zone industrielle Keryado et Keroman",
        "Lanester et zone portuaire",
        "Ploemeur et agglomération lorientaise",
        "Morbihan sud (56) et Pays de Lorient",
        "Axe Lorient–Vannes–Quimper (Bretagne sud)",
      ],
      faq: [
        {
          q: "Qu'est-ce que le cloud souverain SecNumCloud et pourquoi est-il indispensable pour les sous-traitants de la Marine à Lorient ?",
          a: "Le label SecNumCloud de l'ANSSI qualifie les offres cloud qui garantissent la souveraineté des données hébergées sur le territoire français, avec des protections contre les lois extraterritoriales étrangères (Cloud Act américain, législation chinoise). Pour les sous-traitants de la Marine nationale à Lorient, utiliser un cloud SecNumCloud qualifié est souvent une exigence contractuelle des appels d'offres de défense. CloudSecure audite vos infrastructures cloud pour vérifier leur conformité SecNumCloud, identifie les flux de données sensibles exposés à des risques de souveraineté et vous accompagne dans la migration vers des fournisseurs qualifiés (OVHcloud, 3DS Outscale, Thales). Diagnostic gratuit sur demande.",
        },
        {
          q: "Comment auditer la traçabilité IoT de la pêche industrielle à Lorient sur cloud AWS ?",
          a: "Un audit de sécurité IoT pour la filière pêche à Lorient couvre l'intégralité de la chaîne de données : sécurité des capteurs embarqués à bord (authentification, chiffrement des transmissions satellite), sécurité des passerelles IoT AWS IoT Core, protection des bases de données de traçabilité (espèces, zones, certifications), et conformité RGPD pour les données des pêcheurs. CloudSecure propose un audit IoT cloud pêche à partir de 4 000 € HT, avec une attention particulière aux vulnérabilités des systèmes SCADA maritime et aux risques de manipulation des données de certification.",
        },
        {
          q: "Quelles sont les exigences NIS2 pour les entreprises de défense et les sous-traitants navals de Lorient ?",
          a: "Les sous-traitants de la Marine nationale et les industriels navals de Lorient entrant dans le périmètre des secteurs critiques NIS2 (défense, transport maritime, industrie) doivent implémenter des mesures de sécurité cloud renforcées : gestion des identités et accès (IAM Zero Trust), chiffrement de bout en bout des données de conception, plan de continuité d'activité cloud et déclaration des incidents sous 24h à l'ANSSI. CloudSecure réalise des audits NIS2 défense à Lorient incluant des tests d'intrusion sur les systèmes IT/OT et une revue complète des politiques de sécurité cloud. Forfait NIS2 défense à partir de 8 000 € HT.",
        },
        {
          q: "Comment protéger les données de conception navale (PLM, CAO) hébergées dans le cloud à Lorient ?",
          a: "Les données PLM et CAO des chantiers navals et de leurs sous-traitants lorientais sont parmi les données industrielles les plus convoitées par les services de renseignement étrangers. CloudSecure recommande le hébergement de ces données dans un cloud SecNumCloud qualifié ou un cloud privé on-premise, avec chiffrement AES-256, gestion des droits numériques (DRM) sur les fichiers de conception et monitoring temps réel des accès. Nous réalisons des pentests cloud ciblés sur ces environnements à partir de 6 000 € HT, en simulant les vecteurs d'attaque étatiques (APT, spear phishing ciblé ingénieurs).",
        },
        {
          q: "Proposez-vous un RSSI cloud externalisé pour les PME et ETI navales de Lorient ?",
          a: "Oui. CloudSecure propose un service de RSSI cloud externalisé (vCISO) spécialisé industrie navale et défense pour les PME et ETI de Lorient qui n'ont pas les ressources pour recruter un RSSI à temps plein. Notre RSSI externalisé pilote votre politique de sécurité cloud, assure la conformité NIS2 et SecNumCloud, représente l'entreprise auprès de l'ANSSI et anime les exercices de crise cyber. Tarif à partir de 2 500 € HT/mois pour un accompagnement mensuel dédié.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLorient;
