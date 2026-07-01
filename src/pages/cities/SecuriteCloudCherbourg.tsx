import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCherbourg = () => (
  <CityLandingPage
    data={{
      city: "Cherbourg-en-Cotentin",
      citySlug: "cherbourg",
      region: "Normandie",
      postalCode: "50100",
      intro: "Cherbourg-en-Cotentin abrite Orano (nucléaire) et la Marine nationale : les données sensibles nucléaires et de défense maritime nécessitent un cloud souverain SecNumCloud certifié ANSSI. CloudSecure accompagne les industriels du nucléaire et leurs sous-traitants cherbourgeois dans la sécurisation de leurs infrastructures cloud souverain, conformité SecNumCloud et protection des données nucléaires classifiées.",
      localContext: "Orano (anciennement Areva) à Cherbourg traite des données nucléaires sensibles liées au retraitement du combustible et au démantèlement qui exigent un hébergement dans des environnements cloud qualifiés SecNumCloud ou des systèmes d'information industriels déconnectés d'Internet, conformément aux exigences de l'Autorité de Sûreté Nucléaire (ASN) et du Secrétariat Général de la Défense et de la Sécurité Nationale (SGDSN). La Marine nationale à Cherbourg (arsenal, base navale) manipule des données de défense classifiées pour lesquelles des solutions cloud souveraines homologuées sont requises. Le développement des parcs éoliens offshore en Manche (parc Éoliennes en Mer de Normandie) génère des données opérationnelles cloud hébergées sur des plateformes spécialisées. Les sous-traitants locaux (chaudronnerie, câblage, ingénierie) doivent sécuriser leurs accès aux plateformes cloud partagées avec Orano et la Marine.",
      sectors: [
        "Industrie nucléaire Orano (cloud souverain SecNumCloud, données ASN)",
        "Marine nationale et défense (données classifiées, cloud homologué)",
        "Sous-traitants nucléaires et naval (accès cloud sécurisé donneurs d'ordre)",
        "Éolien offshore (cloud opérationnel, maintenance prédictive IIoT Manche)",
        "Collectivités et Cotentin (dématérialisation cloud, données publiques)",
        "PME de l'industrie navale (CAO cloud, GED sécurisée, ERP)",
      ],
      neighborhoods: [
        "Centre-ville de Cherbourg – Ville Close",
        "Arsenal et port militaire de Cherbourg",
        "La Chaîne – zone industrielle navale",
        "Tourlaville et La Glacerie (industrie)",
        "Communauté d'agglomération du Cotentin",
        "Manche (50) – Normandie",
      ],
      faq: [
        {
          q: "Quel est le prix d'une mise en conformité cloud souverain SecNumCloud pour un sous-traitant nucléaire à Cherbourg ?",
          a: "Une mise en conformité cloud souverain SecNumCloud pour un sous-traitant nucléaire cherbourgeois est facturée entre 10 000 et 25 000 € HT selon l'étendue des systèmes cloud à qualifier (nombre d'applications, volume de données sensibles, niveau de classification). CloudSecure accompagne l'évaluation des architectures existantes, la sélection des offres SecNumCloud (OVHcloud Hosted Private Cloud, Outscale/S3NS), la migration sécurisée des données et la rédaction de la PSSI conforme aux exigences nucléaires (référentiel ASN, IGI 1300 pour les données DIV). Diagnostic initial gratuit.",
        },
        {
          q: "Comment sécuriser les données nucléaires sensibles d'un sous-traitant d'Orano à Cherbourg hébergées dans le cloud ?",
          a: "Les sous-traitants d'Orano à Cherbourg échangent des données techniques sensibles (plans de démantèlement, données de radioprotection, procédés de retraitement) via des plateformes cloud qui doivent répondre aux exigences de l'ASN et du SGDSN. CloudSecure audite les droits d'accès aux plateformes cloud partagées avec Orano, la sécurité des connexions (chiffrement de bout en bout, VPN sécurisés), la traçabilité des accès aux documents nucléaires sensibles et la conformité aux chartes cybersécurité fournisseurs d'Orano. Nous recommandons systématiquement le passage vers des solutions souveraines certifiées SecNumCloud pour les données les plus sensibles.",
        },
        {
          q: "Quelles sont les obligations cloud souverain pour les opérateurs nucléaires et leurs sous-traitants à Cherbourg ?",
          a: "Les opérateurs d'installations nucléaires de base (INB) comme Orano La Hague sont soumis aux exigences de cybersécurité de l'ASN et doivent utiliser des systèmes d'information sécurisés pour les données liées aux INB. Les données relevant du secret de la défense nationale ou des informations sensibles doivent être hébergées dans des environnements homologués SecNumCloud ou dans des systèmes d'information dédiés conformes à l'IGI 1300. CloudSecure réalise une analyse des obligations cloud applicables à votre situation et accompagne la mise en conformité avec les référentiels ASN et SGDSN. Consultation initiale confidentielle.",
        },
        {
          q: "Comment sécuriser l'infrastructure cloud des parcs éoliens offshore en Manche contre les cybermenaces ?",
          a: "Les parcs éoliens offshore en Manche utilisent des plateformes cloud de supervision (SCADA offshore, maintenance prédictive IoT, gestion de production) qui sont des infrastructures critiques d'énergie au sens de NIS2. CloudSecure audite la sécurité des architectures cloud de supervision offshore : sécurisation des communications satellite/4G des éoliennes vers le cloud, authentification des passerelles SCADA, segmentation des réseaux OT/IT, protection des données opérationnelles et conformité NIS2 énergie. Nous gérons les spécificités des environnements offshore (contraintes de connectivité, interventions à distance).",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Cherbourg pour les audits cloud nucléaire et défense ?",
          a: "Oui, CloudSecure intervient en présentiel à Cherbourg pour les missions de sécurité cloud nucléaire et défense, avec des consultants respectant les protocoles de sécurité physique des sites sensibles. Nos déplacements sont planifiés selon vos contraintes de sécurité (habilitation, zones réglementées). Les phases techniques de revue de configuration cloud sont réalisées selon les protocoles de sécurité adaptés. Entretien de cadrage confidentiel sous 48h. Habilitation et respect de la réglementation nucléaire garantis.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCherbourg;
