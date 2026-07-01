import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudCaen = () => (
  <CityLandingPage
    data={{
      city: "Caen",
      citySlug: "caen",
      region: "Normandie",
      postalCode: "14000",
      intro: "CloudSecure accompagne les équipementiers automobiles Stellantis, les établissements d'enseignement supérieur et les PME normandes de Caen dans la sécurisation de leurs infrastructures cloud AWS, Azure et GCP — audit sécurité AWS Caen, sécurité cloud Azure Caen et conformité NIS2 cloud Caen pour l'industrie automobile et le numérique éducatif normand. Nos experts en sécurisation infrastructure cloud Caen protègent les données industrielles et universitaires de la métropole caennaise.",
      localContext: "Caen abrite l'un des sites industriels automobiles les plus importants de Normandie avec PSA/Stellantis (moteurs et boîtes de vitesses) qui déploie des systèmes MES et ERP cloud hybride (Azure) pour piloter sa production connectée à l'Industrie 4.0. L'Université de Caen et les grandes écoles (ENSICAEN, école de management) opèrent des environnements cloud d'enseignement et de recherche (Microsoft 365 Education, AWS Academy) avec des milliers d'étudiants et enseignants dont les données personnelles nécessitent une protection RGPD rigoureuse. Les PME normandes du Calvados dans l'agroalimentaire, la distribution et les services migrent progressivement vers des ERP SaaS et des plateformes cloud dont les configurations de sécurité sont souvent lacunaires. Le CHU de Caen opère des systèmes d'information médicaux sur cloud nécessitant une conformité HDS stricte.",
      sectors: [
        "Automobile et équipementiers Stellantis (ERP cloud Azure, MES)",
        "Enseignement supérieur et recherche (cloud éducatif, Microsoft 365)",
        "Agroalimentaire normand (ERP cloud, traçabilité SaaS)",
        "Santé et CHU (HDS cloud, données patients)",
        "PME normandes en transformation numérique",
        "Logistique et distribution régionale (cloud hybride)",
      ],
      neighborhoods: [
        "Caen Centre et Presqu'île — entreprises et services",
        "Hérouville-Saint-Clair — industrie Stellantis",
        "Ifs et Mondeville — zones industrielles et PME",
        "Colombelles — parc d'entreprises tech",
        "Bayeux et Lisieux — PME normandes",
        "Cherbourg, Évreux — industrie normande",
      ],
      faq: [
        {
          q: "Combien coûte un audit Azure pour un site industriel Stellantis à Caen ?",
          a: "Un audit Azure pour un site industriel Stellantis ou un équipementier automobile caennais (couvrant Azure AD, NSG, Microsoft Defender for Cloud, intégrations OT/IT, conformité CIS Benchmark Azure) est facturé entre 5 000 et 11 000 euros HT selon la complexité de l'architecture hybride et le nombre de sites connectés. CloudSecure inclut une revue spécifique des connexions OT/cloud (intégrations MES-ERP cloud) et des accès fournisseurs et sous-traitants, vecteurs d'attaque majeurs dans les chaînes de production automobile. Livraison du rapport sous 7 jours.",
        },
        {
          q: "Comment sécuriser les données d'enseignement et de recherche de l'Université de Caen sur le cloud ?",
          a: "La sécurisation des environnements cloud d'enseignement pour l'Université de Caen couvre : la configuration sécurisée de Microsoft 365 Education (MFA pour étudiants et personnels, accès conditionnel, DLP), la protection des données de recherche sensibles sur AWS ou Azure (projets ANR, propriété intellectuelle), et la conformité RGPD pour les données des étudiants. CloudSecure réalise des audits cloud éducatif Caen adaptés au secteur public universitaire, avec une connaissance des contraintes budgétaires et organisationnelles des établissements d'enseignement supérieur.",
        },
        {
          q: "DevSecOps Caen : accompagnez-vous les startups et PME tech normandes ?",
          a: "Oui, CloudSecure accompagne les startups et PME tech caennaises dans la mise en place du DevSecOps à partir de 700 euros par jour. Nous intégrons la sécurité dans les pipelines CI/CD, déployons des outils SAST (Semgrep, SonarQube), gérons les secrets via HashiCorp Vault et formons les équipes ingénierie aux pratiques secure by design. Pour les PME avec des ressources limitées, nous proposons des missions de RSSI cloud externalisé Caen à temps partiel pour un suivi continu de la posture de sécurité.",
        },
        {
          q: "Conformité NIS2 cloud pour les PME agroalimentaires normandes du Calvados ?",
          a: "Les PME agroalimentaires normandes dépassant 50 salariés ou 10 M€ de CA dans la production ou la distribution alimentaire tombent dans le champ de NIS2. CloudSecure réalise un diagnostic NIS2 cloud Caen pour qualifier votre statut et identifier les obligations applicables : sécurité des ERP cloud, protection des données de traçabilité, continuité d'activité, gestion des incidents et conformité avec les exigences de la chaîne d'approvisionnement. Nous produisons un plan de mise en conformité adapté aux ressources des PME normandes.",
        },
        {
          q: "CloudSecure intervient-il à Caen et dans toute la Normandie ?",
          a: "CloudSecure intervient à Caen, Hérouville-Saint-Clair, Ifs, Mondeville et dans toute la région Normandie incluant Rouen, Le Havre, Cherbourg, Évreux et Alençon. Les audits cloud techniques se déroulent à distance pour un démarrage sous 48h, avec des interventions sur site à Caen pour les ateliers de restitution, formations DevSecOps et missions de RSSI cloud externalisé Caen. Devis gratuit sous 24h.",
        },
      ],
    }}
  />
);

export default SecuriteCloudCaen;
