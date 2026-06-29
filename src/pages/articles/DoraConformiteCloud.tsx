import BlogLayout from "@/components/BlogLayout";

const DoraConformiteCloud = () => (
  <BlogLayout
    title="DORA et le cloud : obligations de conformité pour les entreprises financières cloud-native"
    description="Guide DORA pour les fintechs et entreprises financières cloud-native : obligations spécifiques AWS/Azure/GCP, clauses contractuelles obligatoires, tests TLPT et gestion du risque de concentration cloud."
    date="28 juin 2026"
    readTime="11 min"
    category="Conformité Cloud"
  >
    <p>
      Le règlement DORA (Digital Operational Resilience Act), applicable depuis janvier 2025, a des implications particulièrement significatives pour les entreprises financières cloud-native — fintechs, néobanques, plateformes d'investissement, gestionnaires d'actifs numériques. Leur dépendance quasi-totale à des infrastructures cloud tierces (AWS, Azure, GCP) crée des obligations spécifiques en matière de gestion des risques TIC.
    </p>

    <h2>DORA et le cloud : une relation centrale</h2>
    <p>
      DORA place la gestion des risques liés aux tiers prestataires TIC au cœur de son dispositif (Pilier 4). Pour une fintech 100 % cloud, cela signifie que votre principal fournisseur de cloud — AWS, Azure ou GCP — est votre prestataire TIC le plus critique. DORA impose de gérer ce risque avec une rigueur accrue.
    </p>
    <p>
      Les grands hyperscalers (AWS, Azure, GCP) ont été désignés "prestataires TIC critiques" par les Autorités Européennes de Supervision (AES) en 2025. Cette désignation leur impose des obligations directes envers les régulateurs, mais ne vous dispense pas de vos propres obligations de gestion des risques cloud.
    </p>

    <h2>Les obligations cloud spécifiques sous DORA</h2>

    <h3>1. Cartographie et concentration du risque cloud</h3>
    <p>
      DORA exige une cartographie complète de vos prestataires TIC, en identifiant les fonctions critiques ou importantes (FCI) qui reposent sur le cloud. Pour une fintech, cela inclut typiquement : infrastructure d'hébergement de l'application principale, traitement des paiements et transactions, stockage des données clients et KYC, systèmes d'authentification et IAM, environnements de développement/test qui touchent à des données réelles.
    </p>
    <p>
      DORA s'inquiète particulièrement du <strong>risque de concentration</strong> : si toute votre infrastructure critique repose sur un seul hyperscaler, une panne majeure de celui-ci peut menacer la stabilité financière. Les régulateurs peuvent imposer une stratégie multi-cloud ou des plans de continuité alternatifs.
    </p>

    <h3>2. Clauses contractuelles obligatoires avec les fournisseurs cloud</h3>
    <p>
      L'article 30 de DORA impose des clauses contractuelles précises dans vos contrats avec les prestataires TIC critiques. Pour vos contrats AWS, Azure ou GCP, les clauses suivantes doivent figurer :
    </p>
    <ul>
      <li><strong>Description précise des services :</strong> périmètre exact, SLA garantis (disponibilité, RPO/RTO), niveaux de service minimaux</li>
      <li><strong>Localisation des données :</strong> régions de stockage et de traitement, conditions de transfert hors UE</li>
      <li><strong>Droit d'audit :</strong> droit pour l'entité financière ou un auditeur désigné d'auditer le prestataire cloud</li>
      <li><strong>Obligations de notification :</strong> délais de notification des incidents affectant vos services</li>
      <li><strong>Stratégie de sortie :</strong> conditions de portabilité des données, assistance lors de la migration vers un autre prestataire, durée de la phase de transition</li>
      <li><strong>Sous-traitance en chaîne :</strong> liste des sous-prestataires critiques du fournisseur cloud (datacenters tiers, etc.)</li>
    </ul>
    <p>
      Attention : les contrats standards des hyperscalers (AWS Business Associate Agreement, Azure Service Agreement) ne couvrent pas toutes ces exigences DORA. Vous devrez négocier des addendums spécifiques ou souscrire des niveaux de service supérieurs (Enterprise Support).
    </p>

    <h3>3. Tests de résilience cloud (TLPT)</h3>
    <p>
      DORA impose des tests de résilience opérationnelle numérique. Pour les entités financières d'importance systémique, les TLPT (Threat-Led Penetration Tests) doivent couvrir l'infrastructure cloud :
    </p>
    <ul>
      <li><strong>Tests de base annuels :</strong> scan de vulnérabilités de l'infrastructure cloud, tests de reprise après sinistre (DR drills), vérification des sauvegardes et RTO/RPO, tests des procédures de basculement</li>
      <li><strong>TLPT triennaux :</strong> pentests sophistiqués simulant des attaques réelles sur votre infrastructure cloud, réalisés par des prestataires qualifiés sous coordination des autorités</li>
    </ul>
    <p>
      Pour les TLPT, les testeurs doivent pouvoir accéder à votre environnement cloud de production (ou un miroir fidèle). Cela nécessite une préparation contractuelle avec votre fournisseur cloud pour autoriser ces tests (clause d'autorisation de pentest dans le contrat AWS/Azure/GCP).
    </p>

    <h3>4. Plan de continuité et reprise cloud</h3>
    <p>
      DORA exige des plans de continuité d'activité (PCA) et de reprise après sinistre (PRA) couvrant les scénarios de défaillance cloud. Pour une fintech cloud-native, ces scénarios incluent : indisponibilité d'une zone de disponibilité (AZ), panne régionale AWS/Azure/GCP, corruption massive de données dans le stockage cloud, compromission des credentials IAM cloud, déni de service sur l'API cloud.
    </p>
    <p>
      Vos RTO (Recovery Time Objective) et RPO (Recovery Point Objective) doivent être définis, documentés, et testés régulièrement. La plupart des régulateurs s'attendent à un RTO inférieur à 4 heures pour les fonctions critiques des entités financières.
    </p>

    <h2>Gestion du risque IAM cloud sous DORA</h2>
    <p>
      DORA (article 9) impose une gestion stricte des identités et des accès. Pour le cloud, cela se traduit par :
    </p>
    <ul>
      <li>Principe du moindre privilège strict sur tous les comptes AWS/Azure/GCP (IAM roles, pas de comptes root/owner utilisés en opération)</li>
      <li>MFA obligatoire sur tous les comptes cloud, notamment les comptes d'administration</li>
      <li>Rotation régulière des credentials et clés d'accès (rotation automatisée avec AWS Secrets Manager, Azure Key Vault, GCP Secret Manager)</li>
      <li>Journalisation complète de toutes les actions IAM (AWS CloudTrail, Azure Activity Log, GCP Cloud Audit Logs) avec rétention minimale de 3 ans</li>
      <li>Revue régulière des droits d'accès (access reviews trimestriels pour les comptes à privilèges)</li>
    </ul>

    <h2>Notification des incidents cloud à l'ACPR/AMF</h2>
    <p>
      DORA impose des délais de notification très courts pour les incidents TIC majeurs : rapport initial à l'autorité compétente dans les 4 heures après classification, rapport intermédiaire dans les 72 heures, rapport final dans un mois.
    </p>
    <p>
      Pour les entreprises cloud-native, la chaîne de détection doit être entièrement automatisée. Vous ne pouvez pas vous permettre de découvrir un incident majeur 12 heures après qu'il se soit produit. Les outils recommandés : AWS GuardDuty + Security Hub, Microsoft Defender for Cloud, Google Security Command Center, couplés à des alertes PagerDuty ou Opsgenie avec escalade 24/7.
    </p>

    <h2>Plan de conformité DORA cloud en 5 étapes</h2>
    <p>
      Pour une fintech cloud-native, voici le chemin critique vers la conformité DORA :
    </p>
    <ul>
      <li><strong>Étape 1 — Cartographie TIC :</strong> Listez tous vos prestataires cloud et SaaS avec les fonctions qu'ils supportent. Identifiez ceux qui supportent des FCI (fonctions critiques ou importantes). Évaluez la concentration du risque par fournisseur.</li>
      <li><strong>Étape 2 — Revue contractuelle :</strong> Auditez vos contrats AWS/Azure/GCP et autres SaaS critiques (Stripe, Twilio, etc.) au regard des clauses DORA obligatoires. Engagez les négociations pour les addendums manquants.</li>
      <li><strong>Étape 3 — Gouvernance et IAM :</strong> Renforcez votre gouvernance IAM cloud (MFA, least privilege, rotation de credentials, audit logs). Documentez votre framework de risque TIC approuvé par le board.</li>
      <li><strong>Étape 4 — Chaîne de détection et notification :</strong> Déployez des outils de détection cloud (GuardDuty, Defender for Cloud) et configurez une chaîne d'alerte qui respecte le délai de 4 heures. Rédigez des procédures de notification à l'ACPR/AMF.</li>
      <li><strong>Étape 5 — Tests et PCA :</strong> Planifiez vos tests de résilience cloud annuels (DR drills, tests de basculement, scan de vulnérabilités cloud). Documentez et testez vos PCA/PRA avec les RTO/RPO ciblés.</li>
    </ul>

    <div className="info-box">
      <h4>Audit de conformité DORA pour fintechs cloud</h4>
      <p>CloudSecure réalise des audits de conformité DORA adaptés aux entreprises financières cloud-native : cartographie TIC, revue contractuelle AWS/Azure/GCP, évaluation IAM et chaîne de notification. Rapport de gap analysis avec feuille de route priorisée. Devis gratuit sous 24h.</p>
    </div>
  </BlogLayout>
);

export default DoraConformiteCloud;
