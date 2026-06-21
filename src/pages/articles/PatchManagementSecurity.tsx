import BlogLayout from "@/components/BlogLayout";

const PatchManagementSecurity = () => {
  return (
    <BlogLayout
      title="Patch management : prioriser avec CVSS 3.1, EPSS et le catalogue KEV CISA"
      description="Stratégie de patch management pour PME : priorités CVSS 3.1 et EPSS, catalogue KEV CISA, SLA par criticité, outils d'automatisation et conformité NIS2."
      date="18 juin 2026"
      readTime="12 min"
      category="Opérations"
    >
      <p className="lead">
        En 2025, plus de <strong>29 000 CVE ont été publiées</strong>, soit environ 80 nouvelles
        vulnérabilités par jour. Il est impossible de tout patcher immédiatement. La clé est
        de prioriser intelligemment grâce au <strong>CVSS 3.1</strong>, au score <strong>EPSS</strong>
        et au catalogue <strong>KEV de la CISA</strong>. Voici la méthode.
      </p>

      <h2>1. Comprendre les systèmes de scoring</h2>

      <h3>CVSS 3.1 (Common Vulnerability Scoring System)</h3>
      <p>
        Le CVSS est le standard industriel pour noter la sévérité d'une vulnérabilité de 0 à 10 :
      </p>
      <ul>
        <li><strong>Critique (9.0–10.0)</strong> : exploitation distante sans authentification, impact total.</li>
        <li><strong>Élevé (7.0–8.9)</strong> : compromission significative mais avec contraintes.</li>
        <li><strong>Moyen (4.0–6.9)</strong> : conditions d'exploitation difficiles ou impact limité.</li>
        <li><strong>Faible (0.1–3.9)</strong> : impact minimal, exploitation très contrainte.</li>
      </ul>
      <p>
        <strong>Limite du CVSS</strong> : il mesure la sévérité théorique, pas la probabilité d'exploitation réelle.
        Une CVE critique peut ne jamais être exploitée ; une CVE moyenne peut être activement utilisée par des groupes APT.
      </p>

      <h3>EPSS (Exploit Prediction Scoring System)</h3>
      <p>
        L'EPSS, développé par FIRST.org, prédit la <strong>probabilité qu'une vulnérabilité soit exploitée
        dans les 30 prochains jours</strong>. C'est un score de 0 à 1 (ex : 0,95 = 95 % de probabilité).
      </p>
      <p>
        Selon FIRST, <strong>seulement 4 % des CVE</strong> ont un EPSS supérieur à 0,1. Combiner
        CVSS + EPSS permet de réduire de 87 % le volume de patches prioritaires à traiter immédiatement.
      </p>

      <h3>KEV CISA (Known Exploited Vulnerabilities)</h3>
      <p>
        Le catalogue KEV de la CISA (agence fédérale américaine) liste les vulnérabilités
        <strong>activement exploitées dans la nature</strong>. Il compte plus de 1 200 entrées.
        Toute CVE présente dans le KEV doit être patchée en urgence, indépendamment du score CVSS.
        En 2025, des agences françaises recommandent d'aligner les SLA de patch sur ce catalogue.
      </p>

      <h2>2. Définir des SLA de patch par criticité</h2>
      <p>
        Voici un modèle de SLA recommandé pour une PME/ETI, conforme aux exigences NIS2 :
      </p>
      <ul>
        <li><strong>KEV CISA ou CVSS ≥ 9.0</strong> : patch sous <strong>24 à 72 heures</strong> (ou mesure compensatoire immédiate).</li>
        <li><strong>CVSS 7.0–8.9 + EPSS &gt; 0.1</strong> : patch sous <strong>7 jours</strong>.</li>
        <li><strong>CVSS 7.0–8.9 + EPSS &lt; 0.1</strong> : patch sous <strong>30 jours</strong>.</li>
        <li><strong>CVSS 4.0–6.9</strong> : patch sous <strong>90 jours</strong> (cycle mensuel).</li>
        <li><strong>CVSS &lt; 4.0</strong> : best effort, intégré au cycle trimestriel ou annuel.</li>
      </ul>
      <p>
        <strong>NIS2 exige</strong> que les entités essentielles et importantes documentent leurs
        politiques de gestion des vulnérabilités et démontrent des délais de correction maîtrisés
        (art. 21 de la directive). Ces SLA servent de preuve de conformité.
      </p>

      <h2>3. Les outils du patch management moderne</h2>

      <h3>Inventaire et découverte</h3>
      <ul>
        <li><strong>Tenable.io / Nessus</strong> : scanner de vulnérabilités avec score EPSS intégré.</li>
        <li><strong>Qualys VMDR</strong> : priorisation automatique, intégration ITSM.</li>
        <li><strong>Wiz / Orca</strong> : pour les environnements cloud (AWS, Azure, GCP).</li>
        <li><strong>Trivy</strong> : scan d'images Docker et de dépendances open source (gratuit).</li>
      </ul>

      <h3>Déploiement des patchs</h3>
      <ul>
        <li><strong>Microsoft Endpoint Configuration Manager (MECM)</strong> / <strong>Intune</strong> : pour les postes Windows.</li>
        <li><strong>Ansible / Puppet</strong> : automatisation sur serveurs Linux et multi-OS.</li>
        <li><strong>AWS Systems Manager Patch Manager</strong> : gestion centralisée des instances EC2.</li>
        <li><strong>JetPatch / Ivanti</strong> : solutions dédiées au patch management avec reporting de conformité.</li>
      </ul>

      <h3>Mesure et reporting</h3>
      <ul>
        <li><strong>Mean Time to Patch (MTTP)</strong> : KPI principal de performance patch management.</li>
        <li><strong>Patch compliance rate</strong> : % de systèmes patchés dans le SLA défini.</li>
        <li><strong>Vulnérabilités résiduelles critiques</strong> : nombre de CVE critiques non patchées à J+30.</li>
      </ul>

      <h2>4. Gérer les systèmes non patchables</h2>
      <p>
        Certains systèmes ne peuvent pas être patchés immédiatement : serveurs de production
        critiques nécessitant une fenêtre de maintenance, OT/IoT non maintenables, applications
        legacy. Dans ce cas, appliquez des <strong>mesures compensatoires</strong> :
      </p>
      <ul>
        <li>Segmentation réseau et micro-segmentation pour isoler les actifs vulnérables.</li>
        <li>Virtual patching via WAF ou IPS pour bloquer l'exploitation de la vulnérabilité.</li>
        <li>Monitoring renforcé et alertes SIEM sur les tentatives d'exploitation.</li>
        <li>Revue mensuelle du risque résiduel et document d'acception de risque formalisé.</li>
      </ul>

      <h2>5. Intégrer le patch management dans la conformité NIS2</h2>
      <p>
        L'article 21 de la directive NIS2 impose la mise en place de politiques de gestion
        des vulnérabilités. Pour les entités concernées (essentielles ou importantes), cela implique :
      </p>
      <ul>
        <li>Une politique documentée de patch management avec SLA formalisés.</li>
        <li>Un registre des vulnérabilités actives et de leur état de remédiation.</li>
        <li>Des rapports de conformité fournis au RSSI et à la direction trimestriellement.</li>
        <li>Des tests de vulnérabilités réguliers (scan mensuel a minima, pentest annuel).</li>
        <li>Des preuves d'application des patchs dans les délais pour les inspections ANSSI.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Un patch management efficace ne consiste pas à tout patcher — c'est impossible.
        C'est une discipline de <strong>priorisation basée sur la data</strong> : CVSS pour la sévérité,
        EPSS pour la probabilité d'exploitation, KEV pour les urgences confirmées.
        Avec des SLA clairs, des outils adaptés et une traçabilité rigoureuse, vous réduisez
        votre surface d'attaque de façon mesurable tout en satisfaisant aux exigences NIS2.
      </p>
    </BlogLayout>
  );
};

export default PatchManagementSecurity;
