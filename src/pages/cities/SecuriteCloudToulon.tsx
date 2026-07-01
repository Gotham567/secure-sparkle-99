import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudToulon = () => (
  <CityLandingPage
    data={{
      city: "Toulon",
      citySlug: "toulon",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83000",
      intro: "CloudSecure accompagne la Marine Nationale, les industries de défense, les acteurs du tourisme numérique et les établissements de santé de Toulon dans la sécurisation de leurs infrastructures cloud souverain, AWS, Azure et GCP — audit sécurité AWS Toulon, RSSI cloud externalisé Toulon et conformité cloud souverain Toulon pour les entreprises de défense et les PME varoise. Nos experts en sécurisation infrastructure cloud Toulon maîtrisent les exigences SecNumCloud pour le secteur naval et défense.",
      localContext: "Toulon abrite la plus grande base navale militaire de France et de Méditerranée — la Marine Nationale et ses sous-traitants industriels opèrent des systèmes d'information sensibles qui exigent un cloud souverain qualifié SecNumCloud (OVHcloud, Outscale), un domaine d'expertise principal de CloudSecure. La défense toulonnaise (Naval Group, Thales Naval France, DCNS) développe des applications cloud pour la maintenance des navires et la logistique militaire avec des exigences de confidentialité et de souveraineté des données très strictes. Le secteur touristique varois (plus de 10 millions de touristes/an) génère des plateformes de booking et de gestion hôtelière sur cloud avec des données bancaires et clients nécessitant une conformité PCI DSS et RGPD rigoureuse. Le CHU Sainte-Musse de Toulon opère des systèmes hospitaliers sur cloud avec des exigences HDS.",
      sectors: [
        "Marine Nationale et défense navale (cloud souverain SecNumCloud)",
        "Industries de défense (Naval Group, Thales Naval — données classifiées)",
        "Tourisme, hôtellerie et booking (PCI DSS cloud, RGPD)",
        "Santé et CHU (HDS cloud, données patients)",
        "PME varoises en transformation numérique (SaaS, ERP cloud)",
        "Port de Toulon et logistique maritime (cloud hybride)",
      ],
      neighborhoods: [
        "Toulon Centre et La Seyne-sur-Mer — sièges et défense",
        "La Garde et Solliès-Pont — parcs d'entreprises",
        "Six-Fours-les-Plages — tourisme et PME",
        "Hyères et Presqu'île de Giens — tourisme balnéaire",
        "Brignoles — PME varoise intérieure",
        "Fréjus et Draguignan — tourisme et militaire",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud souverain pour un sous-traitant de la Marine Nationale à Toulon ?",
          a: "Un audit cloud souverain pour un sous-traitant de la Marine Nationale à Toulon (couvrant la qualification SecNumCloud des hébergeurs, la configuration des contrôles d'accès, la segmentation des données par niveau de classification et la conformité aux exigences ANSSI) est facturé entre 6 000 et 15 000 euros HT selon la complexité du SI et le nombre de systèmes connectés au cloud souverain. CloudSecure évalue également la conformité aux exigences du référentiel PSSI-Cloud de la DGA et accompagne la qualification des architectures cloud défense. Livraison du rapport sous 7 jours.",
        },
        {
          q: "Quelles solutions cloud souveraines pour les industries de défense navale à Toulon ?",
          a: "Les industries de défense navale toulonnaise (Naval Group, Thales Naval) traitant des données de défusion restreinte ou classifiées doivent recourir à des clouds souverains qualifiés SecNumCloud : OVHcloud Trusted Zone, Outscale (filiale Dassault Systèmes) ou NumSpot (consortium opérateurs français). CloudSecure accompagne le choix de l'architecture cloud souverain adaptée à chaque niveau de classification, la configuration des contrôles d'accès (habilitations, accès conditionnel géographique), et le maintien en condition de sécurité de ces environnements sensibles.",
        },
        {
          q: "DevSecOps Toulon : comment sécuriser les développements cloud pour les entreprises de défense ?",
          a: "CloudSecure accompagne les équipes de développement des sous-traitants de défense toulonnais dans la mise en place d'un DevSecOps adapté aux contextes sécurisés, à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD opérant sur cloud souverain, déployons des outils SAST adaptés aux contextes défense, et accompagnons la sécurisation des environnements de développement isolés. Nous formons les équipes aux exigences spécifiques de sécurité logicielle du secteur défense (ANSSI, DGA, DO-178C pour les systèmes embarqués).",
        },
        {
          q: "Hébergement données de santé HDS pour le CHU de Toulon : quelles exigences cloud ?",
          a: "Le CHU Sainte-Musse de Toulon et les cliniques varoises hébergeant des données patients sur le cloud doivent utiliser un hébergeur certifié HDS (AWS Paris, Azure France Central, OVHcloud), restreindre les données aux régions françaises, assurer le chiffrement complet au repos et en transit, et maintenir un journal d'accès complet aux dossiers patients. CloudSecure réalise des audits HDS cloud Toulon pour les établissements de santé varois, accompagne la mise en conformité et forme les équipes DSI hospitalières aux bonnes pratiques de sécurité cloud santé.",
        },
        {
          q: "CloudSecure intervient-il à Toulon et dans tout le Var ?",
          a: "CloudSecure intervient à Toulon, La Seyne-sur-Mer, La Garde, Six-Fours-les-Plages, Hyères et dans tout le département du Var incluant Fréjus, Draguignan, Brignoles et Saint-Raphaël. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Toulon pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Toulon. Nous sommes habilités à intervenir dans des environnements nécessitant des autorisations spécifiques pour les missions défense.",
        },
      ],
    }}
  />
);

export default SecuriteCloudToulon;
