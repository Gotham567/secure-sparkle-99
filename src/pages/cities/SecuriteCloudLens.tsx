import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLens = () => (
  <CityLandingPage
    data={{
      city: "Lens",
      citySlug: "lens",
      region: "Hauts-de-France",
      postalCode: "62300",
      intro: "CloudSecure sécurise les entrepôts cloud e-commerce, les plateformes logistiques AWS et les applications numériques des PME de Lens, Liévin et du Pas-de-Calais contre les cybermenaces ciblant la supply chain connectée. Audit cloud AWS/Azure, conformité NIS2 et DevSecOps pour la logistique e-commerce, le Louvre-Lens numérique et l'industrie des Hauts-de-France.",
      localContext: "L'agglomération Lens-Liévin est devenue un hub logistique e-commerce de premier plan dans le nord de la France, avec la présence d'entrepôts Amazon et de prestataires logistiques qui stockent et traitent des millions de commandes en ligne via des infrastructures AWS. Le Louvre-Lens et les structures culturelles associées ont adopté des outils cloud collaboratifs pour la gestion des collections numérisées et la billetterie en ligne, exposant des données patrimoniales sensibles. Les PME industrielles du bassin minier en reconversion numérique migrent progressivement leurs outils de gestion vers le cloud, créant de nouvelles surfaces d'attaque pour les ransomwares et les compromissions de compte. CloudSecure intervient à Lens, Liévin, Hénin-Beaumont et dans tout le Pas-de-Calais pour auditer vos configurations cloud, former vos équipes et assurer la conformité NIS2 de vos systèmes d'information.",
      sectors: [
        "Logistique e-commerce cloud (Amazon, prestataires 3PL, entrepôts connectés)",
        "Culture et patrimoine numérique (Louvre-Lens app, billetterie cloud)",
        "PME industrie en reconversion numérique (ERP cloud)",
        "Formation et éducation numérique (e-learning, plateformes SaaS)",
        "Commerce de détail et retail omnicanal cloud",
        "BTP numérique et smart building",
      ],
      neighborhoods: [
        "Centre-ville de Lens et zone commerciale",
        "ZA Lens-Liévin et parc d'activités logistique",
        "Liévin et Loos-en-Gohelle",
        "Hénin-Beaumont et Carvin",
        "Pas-de-Calais (62) et agglomération Artois",
        "Douai–Béthune–Arras (bassin Hauts-de-France)",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud AWS pour un entrepôt logistique e-commerce à Lens ?",
          a: "Un audit cloud AWS pour une PME ou un prestataire logistique e-commerce de Lens démarre à 3 500 € HT. Nous analysons la configuration des instances EC2 hébergeant les WMS (Warehouse Management System), la sécurité des buckets S3 contenant les données de commandes, les droits IAM des opérateurs et la segmentation réseau VPC. Le rapport livré sous 7 jours propose un plan de remédiation priorisé par criticité. Pour les entrepôts Amazon sous-traitants, nous vérifions également la conformité aux exigences de sécurité AWS Vendor.",
        },
        {
          q: "Comment sécuriser un entrepôt cloud e-commerce contre les ransomwares à Lens ?",
          a: "La protection d'un entrepôt cloud e-commerce contre les ransomwares repose sur quatre axes : segmentation réseau stricte entre les systèmes WMS, ERP et le réseau bureautique ; politique de sauvegarde immuable AWS S3 Object Lock pour protéger les données de commandes ; déploiement de détection comportementale via AWS GuardDuty et CloudTrail ; et formation des équipes logistiques aux attaques de phishing ciblant les comptes cloud. CloudSecure déploie ces protections en mode projet forfaitaire à partir de 5 000 € HT pour un entrepôt de taille intermédiaire.",
        },
        {
          q: "Quelles obligations NIS2 s'appliquent aux PME et à la logistique dans les Hauts-de-France ?",
          a: "Les opérateurs logistiques de l'agglomération Lens-Liévin classés entités importantes NIS2 (chiffre d'affaires supérieur à 10 M€ ou 50 salariés dans des secteurs critiques comme la supply chain) doivent mettre en place une gestion des risques cyber documentée, déclarer les incidents majeurs sous 24h et faire auditer leurs systèmes régulièrement. CloudSecure accompagne les PME des Hauts-de-France dans le diagnostic NIS2, la mise en conformité et la préparation à la notification ANSSI. Diagnostic d'éligibilité gratuit sur demande.",
        },
        {
          q: "Le Louvre-Lens a-t-il des obligations spécifiques en matière de sécurité cloud pour ses données patrimoniales ?",
          a: "Les données patrimoniales numérisées (collections, inventaires, dossiers d'œuvres) hébergées dans le cloud par des institutions culturelles comme le Louvre-Lens relèvent du cadre NIS2 pour les entités du secteur culturel public et peuvent être classées données sensibles par le ministère de la Culture. CloudSecure audite la sécurité des applications cloud de billetterie, des APIs de réservation en ligne et des systèmes de gestion documentaire pour garantir la confidentialité et l'intégrité des données patrimoniales. Nous intervenons également sur la conformité RGPD pour les données des visiteurs collectées en ligne.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les start-ups et PME numériques de Lens et du Pas-de-Calais ?",
          a: "Oui. CloudSecure propose des missions DevSecOps en régie (700 à 900 € HT/jour) ou en forfait pour les start-ups et PME numériques de l'agglomération lensoise qui développent des applications SaaS ou des plateformes e-commerce. Nous intégrons les tests de sécurité SAST (analyse statique du code), DAST (tests dynamiques) et la gestion des secrets dans vos pipelines CI/CD GitLab ou GitHub Actions. L'objectif est de livrer du code sécurisé dès la phase de développement pour éviter les coûteux correctifs en production.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLens;
