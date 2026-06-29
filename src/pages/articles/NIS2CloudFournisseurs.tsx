import BlogLayout from "@/components/BlogLayout";

const NIS2CloudFournisseurs = () => (
  <BlogLayout
    title="NIS2 et fournisseurs de services cloud : obligations et conformité pour les hébergeurs et SaaS"
    description="NIS2 et cloud : quels fournisseurs sont concernés (IaaS, PaaS, SaaS, CDN, DNS), obligations de sécurité, notification des incidents et conformité pour les entités 'infrastructure numérique' en 2026."
    date="28 juin 2026"
    readTime="12 min"
    category="Conformité Cloud"
  >
    <p>
      La directive NIS2, transposée en droit français, crée une nouvelle catégorie d'entités essentielles qui inclut explicitement les fournisseurs de services d'infrastructure numérique. Si vous êtes hébergeur cloud, fournisseur SaaS, opérateur de CDN, de DNS ou de data center, NIS2 vous impose des obligations de cybersécurité significatives. Ce guide détaille ce que vous devez savoir et faire.
    </p>

    <h2>Quels fournisseurs cloud sont concernés par NIS2 ?</h2>
    <p>
      NIS2 distingue les fournisseurs d'infrastructure numérique (entités essentielles) et les fournisseurs de services numériques (entités importantes). La distinction dépend du type de service et de la taille de l'entité.
    </p>

    <h3>Entités essentielles — infrastructure numérique</h3>
    <p>
      Sont classés en entités essentielles, quel que soit leur taille (les seuils standards de 250 salariés / 50 M€ CA ne s'appliquent pas) :
    </p>
    <ul>
      <li><strong>IXP (Internet Exchange Points) :</strong> points de peering Internet</li>
      <li><strong>Fournisseurs de services DNS :</strong> opérateurs de résolveurs DNS récursifs, serveurs DNS faisant autorité</li>
      <li><strong>Registres de noms de domaine TLD :</strong> opérateurs des zones .fr, .eu, .com, etc.</li>
      <li><strong>Fournisseurs de services d'informatique en nuage (cloud) :</strong> IaaS, PaaS et certains SaaS au-dessus des seuils</li>
      <li><strong>Fournisseurs de services de centres de données :</strong> opérateurs de data centers commerciaux</li>
      <li><strong>Réseaux de diffusion de contenu (CDN) :</strong> Cloudflare, Akamai et équivalents français</li>
      <li><strong>Fournisseurs de services de confiance :</strong> CA (Certificate Authorities), prestataires eIDAS</li>
    </ul>

    <h3>Entités importantes — fournisseurs de services numériques</h3>
    <p>
      Les fournisseurs de marchés en ligne, de moteurs de recherche et de plateformes de réseaux sociaux sont classés entités importantes. Les SaaS B2B qui ne sont pas de l'infrastructure peuvent être classés entités importantes selon leur taille et secteur.
    </p>

    <h2>Les obligations NIS2 pour les fournisseurs cloud</h2>

    <h3>1. Enregistrement auprès de l'ANSSI</h3>
    <p>
      Toute entité classée NIS2 doit s'enregistrer auprès de l'ANSSI via le portail dédié. L'enregistrement implique de déclarer : les services fournis, les coordonnées du contact NIS2 (joignable 24/7), le périmètre géographique des services, et les informations sur la localisation des systèmes. Pour les fournisseurs cloud transfrontaliers, l'entité s'enregistre dans l'État membre où elle est établie (siège social UE) mais peut aussi être soumise à des obligations dans d'autres États membres.
    </p>

    <h3>2. Mesures de gestion des risques (article 21 NIS2)</h3>
    <p>
      Les fournisseurs cloud doivent mettre en place des mesures proportionnées aux risques qu'ils présentent, notamment :
    </p>
    <ul>
      <li><strong>Politique de sécurité des SI :</strong> PSSI documentée, approuvée par la direction et revue régulièrement</li>
      <li><strong>Gestion des incidents :</strong> procédures de détection, réponse, notification et post-mortem</li>
      <li><strong>Continuité d'activité :</strong> PCA/PRA avec RTO/RPO définis, testés régulièrement, incluant gestion des sauvegardes</li>
      <li><strong>Sécurité de la chaîne d'approvisionnement :</strong> évaluation de la sécurité des sous-traitants et composants utilisés (hyperviseurs, OS, dépendances logicielles)</li>
      <li><strong>Sécurité du développement :</strong> pratiques DevSecOps, tests de sécurité intégrés au pipeline CI/CD, gestion des vulnérabilités</li>
      <li><strong>Politiques de contrôle d'accès et MFA :</strong> MFA sur tous les accès d'administration, principe du moindre privilège</li>
      <li><strong>Chiffrement :</strong> chiffrement des données en transit et au repos, gestion sécurisée des clés</li>
      <li><strong>Tests et audits réguliers :</strong> pentests, scans de vulnérabilités, audits de configuration</li>
    </ul>

    <h3>3. Notification des incidents en 3 temps</h3>
    <p>
      Comme pour toutes les entités NIS2, les fournisseurs cloud doivent notifier à l'ANSSI tout incident significatif selon le calendrier suivant :
    </p>
    <ul>
      <li><strong>Dans les 24 heures :</strong> alerte préliminaire (confirmation de l'incident, nature potentiellement malveillante)</li>
      <li><strong>Dans les 72 heures :</strong> notification complète (évaluation initiale, gravité, indicateurs de compromission)</li>
      <li><strong>Dans le mois :</strong> rapport final (cause racine, mesures correctives, impact réel)</li>
    </ul>
    <p>
      Un incident est "significatif" pour un fournisseur cloud si : il a causé ou peut causer une perturbation significative des services, il a affecté ou peut affecter d'autres entités (notamment des entités NIS2 clientes), il implique un accès non autorisé persistant aux systèmes.
    </p>
    <p>
      Pour les fournisseurs cloud, la notion d'impact en cascade est cruciale : une panne d'un hyperscaler peut rendre simultanément inopérantes des milliers d'entités clientes NIS2. Cela rehausse automatiquement la sévérité des incidents cloud.
    </p>

    <h2>Responsabilité partagée et clients NIS2</h2>
    <p>
      NIS2 crée une responsabilité partagée entre fournisseurs cloud et clients. Contrairement à ce que certains pensent, être client d'AWS ou Azure ne transfère pas votre responsabilité NIS2 à l'hyperscaler. Les responsabilités se répartissent selon le modèle "shared responsibility" :
    </p>
    <ul>
      <li><strong>Fournisseur IaaS (AWS, Azure, GCP) :</strong> sécurité de l'infrastructure physique, hyperviseur, réseau de base</li>
      <li><strong>Client de l'IaaS :</strong> sécurité du système d'exploitation, des applications, des données, de la configuration réseau, des accès IAM</li>
    </ul>
    <p>
      En tant que fournisseur cloud vous-même (si vous revendez de la capacité cloud ou fournissez un SaaS bâti sur AWS/Azure), votre propre périmètre de responsabilité NIS2 inclut l'ensemble de votre service, indépendamment des failles éventuelles de votre sous-traitant cloud.
    </p>

    <h2>Spécificités pour les fournisseurs SaaS B2B</h2>
    <p>
      Si vous êtes un éditeur SaaS dont les clients sont des entités NIS2, vous n'êtes pas automatiquement une entité NIS2 vous-même (sauf si vous dépassez les seuils ou êtes dans la catégorie "infrastructure numérique"). Mais :
    </p>
    <ul>
      <li>Vos clients NIS2 vous imposeront contractuellement des exigences de sécurité équivalentes à NIS2 (cascade supply chain)</li>
      <li>Si un incident sur votre SaaS impacte un client NIS2 significativement, ce client doit le notifier à l'ANSSI — et vous serez identifié comme cause racine</li>
      <li>Si vous êtes au-dessus des seuils (250 salariés OU 50 M€ CA) et dans le secteur des "fournisseurs numériques", vous serez probablement classé entité importante</li>
    </ul>

    <h2>Préparer sa conformité NIS2 en tant que fournisseur cloud</h2>
    <p>
      Les étapes prioritaires pour les fournisseurs cloud :
    </p>
    <ul>
      <li><strong>Étape 1 — Déterminer votre catégorie :</strong> infrastructure numérique (EE) ou fournisseur de services numériques (EI) ? Consultez l'ANSSI ou un expert NIS2 pour trancher si votre situation est ambiguë.</li>
      <li><strong>Étape 2 — S'enregistrer auprès de l'ANSSI :</strong> Ne pas attendre. L'absence d'enregistrement quand l'obligation existe est en elle-même un manquement sanctionnable.</li>
      <li><strong>Étape 3 — Audit de conformité NIS2 :</strong> Évaluer l'écart entre votre posture actuelle et les 10 mesures de l'article 21 NIS2. Prioriser les mesures les plus critiques (détection, notification, MFA).</li>
      <li><strong>Étape 4 — Mettre en place la chaîne de notification :</strong> La contrainte des 24h ne laisse pas de place à l'improvisation. Mettez en place un système de détection automatisé et une procédure de notification documentée et testée.</li>
      <li><strong>Étape 5 — Mettre à jour les contrats clients :</strong> Informer vos clients NIS2 de vos propres obligations et de la façon dont vous les remplissez. Intégrer des clauses de notification d'incidents dans vos CGU/contrats.</li>
    </ul>

    <div className="info-box">
      <h4>Audit NIS2 pour fournisseurs cloud et SaaS</h4>
      <p>CloudSecure accompagne les fournisseurs d'infrastructure numérique et éditeurs SaaS dans leur conformité NIS2 : diagnostic d'éligibilité, audit technique des mesures de l'article 21, mise en place de la chaîne de notification et enregistrement ANSSI. Devis gratuit sous 24h.</p>
    </div>
  </BlogLayout>
);

export default NIS2CloudFournisseurs;
