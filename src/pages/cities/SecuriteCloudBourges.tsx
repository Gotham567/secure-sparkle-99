import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBourges = () => (
  <CityLandingPage
    data={{
      city: "Bourges",
      citySlug: "bourges",
      region: "Centre-Val de Loire",
      postalCode: "18000",
      intro: "Bourges abrite Thales et ArianeGroup, leaders de la défense et de l'aérospatiale : les sous-traitants locaux hébergeant des données techniques sensibles nécessitent un cloud souverain SecNumCloud certifié ANSSI. CloudSecure accompagne les industriels de défense et leurs fournisseurs berruyers dans la sécurisation de leurs infrastructures cloud souverain, conformité SecNumCloud et protection des données classifiées.",
      localContext: "Thales et ArianeGroup à Bourges traitent des données sensibles de défense et d'aérospatiale qui exigent un hébergement dans des clouds souverains qualifiés SecNumCloud (OVHcloud, Outscale/S3NS) ou dans des environnements à accès restreint conformes aux exigences des marchés publics de défense. Les sous-traitants et fournisseurs locaux (PME, ETI de mécanique de précision, électronique) doivent eux aussi se conformer aux chartes cybersécurité imposées par leurs donneurs d'ordre défense, incluant des exigences sur la sécurité des plateformes cloud utilisées pour échanger des données techniques. Les collectivités du Cher utilisent des plateformes cloud de dématérialisation dont la sécurité doit répondre aux recommandations ANSSI. Le tissu des PME berruières en dehors de la défense adopte des ERP et CRM cloud sans expertise de sécurité suffisante.",
      sectors: [
        "Industrie de défense (Thales, ArianeGroup) – cloud souverain SecNumCloud",
        "Sous-traitants défense et aérospatiale (données techniques, PLM cloud sécurisé)",
        "PME mécanique de précision et électronique (cloud ERP, charte fournisseurs)",
        "Collectivités du Cher (dématérialisation cloud, données publiques ANSSI)",
        "Enseignement supérieur et recherche (INSA CVL, données sensibles cloud)",
        "Commerce et services (ERP cloud, Microsoft 365, RGPD PME)",
      ],
      neighborhoods: [
        "Centre-ville de Bourges – Hôtel de Ville",
        "Zone industrielle de Bourges-Aéroport",
        "Parc industriel de La Chapelle-Saint-Ursin",
        "Subdray et Marmagne (industries défense)",
        "Communauté d'agglomération Bourges Plus",
        "Cher (18) – Centre-Val de Loire",
      ],
      faq: [
        {
          q: "Quel est le prix d'une mise en conformité cloud souverain SecNumCloud pour un sous-traitant défense de Bourges ?",
          a: "Une mise en conformité cloud souverain SecNumCloud pour un sous-traitant défense berruyer est facturée entre 8 000 et 20 000 € HT selon l'étendue de la transformation cloud (nombre d'applications à migrer, volume de données sensibles, niveau de classification des informations traitées). CloudSecure accompagne l'évaluation des architectures existantes, la sélection des offres SecNumCloud adaptées (OVHcloud Hosted Private Cloud, Outscale), la migration sécurisée des données techniques et la rédaction de la PSSI conforme aux exigences des marchés de défense. Diagnostic initial gratuit.",
        },
        {
          q: "Comment sécuriser les données techniques de défense hébergées dans le cloud pour les fournisseurs de Thales à Bourges ?",
          a: "Les fournisseurs de Thales et ArianeGroup à Bourges échangent des données techniques sensibles (plans, spécifications, résultats de tests) via des plateformes PLM cloud et des espaces de partage sécurisés. CloudSecure audite les droits d'accès de vos équipes aux plateformes partagées avec les donneurs d'ordre, la sécurité des connexions (chiffrement E2E, authentification forte), la traçabilité des téléchargements de documents sensibles et la conformité aux chartes cybersécurité fournisseurs (charte Thales, réglementation IGI 1300). Nous recommandons le passage vers des solutions souveraines certifiées pour les données les plus sensibles.",
        },
        {
          q: "Les sous-traitants défense de Bourges doivent-ils adopter SecNumCloud et quel est l'impact sur leurs systèmes cloud actuels ?",
          a: "Les sous-traitants traitant des informations relevant du secret de la défense nationale ou des informations sensibles de marchés de défense (IGI 1300, II 901) sont tenus d'utiliser des solutions homologuées et potentiellement SecNumCloud pour certains usages cloud. CloudSecure réalise une analyse d'impact cloud souverain pour vos systèmes actuels (AWS, Azure, Microsoft 365), identifie les données nécessitant une migration vers une offre souveraine qualifiée (OVHcloud, Outscale/S3NS) et accompagne la transition sans rupture de service. Le calendrier et le coût de migration sont estimés lors d'un audit initial.",
        },
        {
          q: "Comment mettre en place un RSSI cloud externalisé adapté à l'industrie de défense de Bourges ?",
          a: "Les PME et sous-traitants de défense de Bourges ont besoin d'un RSSI cloud qui comprend les contraintes réglementaires spécifiques à la défense (IGI 1300, NIST SP 800-171, exigences CMMC pour l'export vers les USA). CloudSecure propose un service de RSSI cloud externalisé spécialisé défense à partir de 2 500 € HT/mois : suivi de la conformité cloud souverain, veille réglementaire défense-cybersécurité, gestion des incidents, formation des équipes et représentation lors des audits clients. Service disponible entièrement à distance ou avec des déplacements mensuels à Bourges.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Bourges pour les audits de sécurité cloud défense ?",
          a: "Oui, CloudSecure intervient en présentiel à Bourges pour les missions de sécurité cloud liées à la défense, avec des consultants habilités à la manipulation de dossiers sensibles. Nos déplacements dans les zones industrielles de Bourges-Aéroport et de La Chapelle-Saint-Ursin sont planifiés selon vos contraintes de sécurité physique. Les phases de test cloud et de revue de configuration sont réalisées selon les protocoles de sécurité adaptés aux environnements défense. Entretien de cadrage confidentiel sous 48h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBourges;
