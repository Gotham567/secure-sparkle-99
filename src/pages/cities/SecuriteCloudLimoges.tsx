import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudLimoges = () => (
  <CityLandingPage
    data={{
      city: "Limoges",
      citySlug: "limoges",
      region: "Nouvelle-Aquitaine",
      postalCode: "87000",
      intro: "CloudSecure accompagne les PME artisanales connectées, établissements de santé et acteurs du numérique émergent de Limoges dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Limoges, RSSI cloud externalisé Limoges et conformité NIS2 cloud Limoges pour les PME de la Haute-Vienne en transformation numérique. Nos experts en sécurisation infrastructure cloud Limoges accompagnent la digitalisation de l'artisanat, de la santé et des PME limousines.",
      localContext: "Limoges est une économie de PME et d'artisanat à haute valeur — porcelaine, émaillerie, cuir (Hermès, Weston) — qui amorce sa transformation numérique avec des ERP SaaS et des plateformes cloud pour la gestion de production et le commerce en ligne, sans toujours disposer d'expertise interne en sécurité cloud. Le secteur de la santé limousin (CHU de Limoges, cliniques privées) est engagé dans une modernisation de son système d'information sur cloud avec des exigences HDS strictes suite aux cyberattaques hospitalières nationales. Les PME limousines dans les services, le bâtiment et l'agroalimentaire adoptent progressivement des solutions SaaS cloud (Microsoft 365, Sage en ligne, Salesforce) sans accompagnement sécurité adapté. Un écosystème numérique émergent se développe autour du technopôle Ester avec des startups tech qui nécessitent un DevSecOps structurant.",
      sectors: [
        "Artisanat connecté et luxe (Hermès Limoges, porcelaine, cuir — ERP SaaS)",
        "PME cloud (ERP SaaS, Microsoft 365, services en ligne)",
        "Santé et CHU (HDS cloud, données patients)",
        "Agroalimentaire limousin (traçabilité cloud, ERP)",
        "Numérique émergent et startups (technopôle Ester)",
        "Collectivités et services publics (cloud souverain)",
      ],
      neighborhoods: [
        "Limoges Centre et Clos Moreau — sièges et commerce",
        "Technopôle Ester — startups et numérique",
        "Beaubreuil et Isle — industrie et PME",
        "Panazol et Feytiat — zones d'activités",
        "Brive-la-Gaillarde — PME Corrèze",
        "Guéret, Tulle — PME creusoise et corrézienne",
      ],
      faq: [
        {
          q: "Combien coûte un audit cloud pour une PME artisanale limousine utilisant des ERP SaaS ?",
          a: "Un audit cloud pour une PME artisanale limousine utilisant des ERP SaaS ou des solutions Microsoft 365 (couvrant la configuration de sécurité Microsoft 365, les accès utilisateurs, le partage de données, la conformité RGPD et la protection des données clients) est facturé entre 2 500 et 5 000 euros HT selon le périmètre. Pour les artisans du luxe (Hermès, maisons de porcelaine) traitant des données de propriété intellectuelle sensibles, CloudSecure ajoute une revue spécifique des accès partenaires et des contrôles DLP. Livraison sous 5 jours.",
        },
        {
          q: "Comment sécuriser les données de santé du CHU de Limoges sur le cloud en conformité HDS ?",
          a: "La sécurisation des données du CHU de Limoges sur le cloud exige un hébergeur certifié HDS (AWS, Azure ou OVHcloud), une architecture cloisonnée par type de données (dossiers patients, imagerie, biologie), le chiffrement AES-256 au repos et TLS 1.2+ en transit, une gestion des identités stricte (MFA pour tous les praticiens) et un plan de réponse aux incidents testé régulièrement. CloudSecure réalise des audits HDS cloud Limoges adaptés aux contraintes budgétaires des hôpitaux publics et accompagne la mise en conformité avec le référentiel HDS de l'ANS.",
        },
        {
          q: "DevSecOps Limoges : accompagnez-vous les startups du technopôle Ester ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech du technopôle Ester de Limoges dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube), gérons les secrets (AWS Secrets Manager) et formons les équipes aux pratiques secure by design. Pour les petites équipes sans RSSI, nous proposons des missions de RSSI cloud externalisé Limoges à temps partiel pour un suivi continu de la sécurité.",
        },
        {
          q: "Conformité NIS2 cloud pour les PME limousines : comment évaluer mon obligation ?",
          a: "Les PME limousines des secteurs de la fabrication, de la distribution alimentaire ou des services numériques dépassant 50 salariés ou 10 M€ de CA sont potentiellement soumises à NIS2. CloudSecure réalise un diagnostic NIS2 cloud Limoges gratuit pour qualifier votre statut (entité importante ou essentielle) et identifier les obligations applicables. Pour les PME artisanales du luxe, les enjeux portent notamment sur la protection de la propriété intellectuelle (designs, formules, procédés) contre les attaques cyber ciblées par des concurrents internationaux.",
        },
        {
          q: "CloudSecure intervient-il à Limoges et dans la région Nouvelle-Aquitaine ?",
          a: "CloudSecure intervient à Limoges, Ester, Isle, Panazol et dans toute la région Nouvelle-Aquitaine incluant Périgueux, Brive-la-Gaillarde, Angoulême, Poitiers et Bordeaux. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Limoges pour les ateliers de restitution, formations et missions de RSSI cloud externalisé Limoges. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudLimoges;
