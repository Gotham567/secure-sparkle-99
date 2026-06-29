import BlogLayout from "@/components/BlogLayout";

const AzureSentinelSiemGuide = () => {
  return (
    <BlogLayout
      title="Microsoft Sentinel (Azure SIEM) : guide de déploiement et de configuration 2026"
      description="Déployer Microsoft Sentinel comme SIEM cloud-native : connecteurs de données, règles analytics KQL, SOAR playbooks, UEBA, threat intelligence, et intégration Microsoft 365 Defender."
      date="28 juin 2026"
      readTime="15 min"
      category="SIEM Cloud"
      slug="azure-sentinel-microsoft-defender-siem-guide"
    >
      <p>
        Microsoft Sentinel est le SIEM (Security Information and Event Management) cloud-native de Microsoft Azure. Contrairement aux SIEM on-premise traditionnels (Splunk, IBM QRadar), Sentinel est entièrement opéré dans Azure et s'intègre nativement avec Microsoft 365, Azure AD (Entra ID), et l'ensemble de l'écosystème Microsoft. Pour les entreprises utilisant M365 ou Azure, Sentinel est souvent le choix naturel. Voici comment le déployer et le configurer efficacement.
      </p>

      <h2>Architecture de Microsoft Sentinel</h2>
      <p>
        Sentinel est construit sur Azure Log Analytics (Workspace). Tous les logs ingérés sont stockés dans un workspace Log Analytics, sur lequel Sentinel ajoute ses capacités d'analyse, de détection et de réponse.
      </p>
      <ul>
        <li><strong>Log Analytics Workspace :</strong> La fondation de Sentinel. Stocke tous les logs, permet les requêtes KQL (Kusto Query Language). La rétention est configurable (30 jours à 2 ans, avec archivage long terme).</li>
        <li><strong>Connecteurs de données :</strong> 200+ connecteurs disponibles pour ingérer des données de sources Microsoft (M365, Entra ID, Azure) et tierces (AWS CloudTrail, Palo Alto, Cisco).</li>
        <li><strong>Règles analytiques :</strong> Règles de détection (Scheduled, NRT, Fusion, Anomaly) qui créent des incidents à partir d'événements ou de patterns suspects.</li>
        <li><strong>SOAR Playbooks :</strong> Automatisations de réponse basées sur Azure Logic Apps, déclenchées automatiquement ou manuellement sur les incidents.</li>
        <li><strong>UEBA :</strong> User Entity Behavior Analytics — baseline comportemental des utilisateurs pour détecter les anomalies.</li>
        <li><strong>Threat Intelligence :</strong> Intégration des IOC (Indicators of Compromise) — Microsoft Defender TI, STIX/TAXII feeds externes.</li>
      </ul>

      <h2>Connecteurs prioritaires à configurer</h2>

      <h3>Sources Microsoft (connecteurs natifs)</h3>
      <ul>
        <li><strong>Microsoft 365 Defender :</strong> Alertes et incidents de l'ensemble de la suite Defender (Defender for Endpoint, Defender for Office 365, Defender for Identity, Defender for Cloud Apps). Le connecteur M365D est bi-directionnel : les incidents Sentinel apparaissent dans la console M365D.</li>
        <li><strong>Microsoft Entra ID (Azure AD) :</strong> Logs de connexion (SignInLogs), logs d'audit (AuditLogs), activité de provisioning (ProvisioningLogs). Essentiel pour la détection des compromissions de compte (impossible travel, connexions depuis Tor, brute force).</li>
        <li><strong>Azure Activity :</strong> Toutes les opérations sur les ressources Azure (création/suppression VM, modification NSG, accès Key Vault). Détection des abus de permissions cloud.</li>
        <li><strong>Microsoft Defender for Cloud :</strong> Alertes de sécurité sur les ressources Azure (VM vulnérables, mauvaises configurations).</li>
        <li><strong>Office 365 :</strong> Logs d'audit Exchange Online, SharePoint, Teams. Détection des règles de transfert malveillantes, téléchargements massifs SharePoint.</li>
      </ul>

      <h3>Sources tierces importantes</h3>
      <ul>
        <li><strong>AWS CloudTrail :</strong> Connecteur natif pour ingérer les logs CloudTrail. Permet une vision multi-cloud dans Sentinel.</li>
        <li><strong>Pare-feu réseau :</strong> Palo Alto (via CEF), Cisco ASA, Fortinet, Check Point — via le connecteur Common Event Format (CEF/Syslog).</li>
        <li><strong>Linux/Windows servers :</strong> Via l'agent AMA (Azure Monitor Agent) qui remplace MMA/OMS.</li>
        <li><strong>GitHub/Azure DevOps :</strong> Pour la détection des menaces dans les pipelines CI/CD.</li>
      </ul>

      <h2>KQL (Kusto Query Language) : les requêtes essentielles</h2>
      <p>
        KQL est le langage de requête de Sentinel et Log Analytics. Voici quelques requêtes de détection essentielles :
      </p>
      <h3>Détection des connexions suspectes Entra ID</h3>
      <ul>
        <li>Connexions depuis des pays inhabituels pour l'organisation</li>
        <li>Impossible travel (connexion depuis Paris puis Tokyo en 30 minutes)</li>
        <li>Connexions depuis des adresses IP dans les listes de menaces (Microsoft TI)</li>
        <li>MFA bypassed or downgraded (connexions sans MFA sur des comptes qui l'ont activé)</li>
      </ul>
      <h3>Détection des abus de privilèges Azure</h3>
      <ul>
        <li>Élévation de privilèges inattendues (nouveau rôle Owner assigné)</li>
        <li>Création de comptes de service avec des permissions larges</li>
        <li>Accès au Key Vault par des entités non habituelles</li>
        <li>Bulk deletion d'objets Azure (préparation d'un ransomware cloud)</li>
      </ul>
      <h3>Détection des anomalies M365</h3>
      <ul>
        <li>Règles de forwarding d'emails vers des domaines externes créées récemment</li>
        <li>Téléchargement massif depuis SharePoint/OneDrive (exfiltration)</li>
        <li>Accès à des boîtes mail par un compte admin non autorisé (e-discovery abuse)</li>
        <li>Envoi d'emails en masse depuis un compte interne (compromission BEC)</li>
      </ul>

      <h2>Règles analytiques : scheduled vs. NRT vs. Fusion</h2>
      <p>
        Sentinel propose plusieurs types de règles analytiques avec des caractéristiques différentes :
      </p>
      <ul>
        <li><strong>Scheduled (planifiées) :</strong> Requêtes KQL exécutées à intervalles réguliers (toutes les 5 minutes à 24 heures). La plupart des règles de détection sont de ce type. Elles permettent une logique de corrélation complexe.</li>
        <li><strong>NRT (Near Real-Time) :</strong> Exécutées en quasi-temps réel (délai ~1 minute). Idéales pour les détections critiques nécessitant une réponse rapide (détection d'un Golden Ticket Kerberos, compromission d'un compte admin).</li>
        <li><strong>Fusion :</strong> Détection par IA multiétape — corrèle automatiquement des signaux de faible fidélité provenant de sources multiples pour détecter des attaques complexes. Exemples : détection de mouvements latéraux, attaques APT multi-étapes.</li>
        <li><strong>Anomaly :</strong> Détection basée sur le machine learning (UEBA) — identifie les comportements déviants par rapport au baseline de l'entité (utilisateur, machine, IP).</li>
        <li><strong>Threat Intelligence :</strong> Comparaison automatique des indicateurs de menace (IOC) avec les logs ingérés — détecte les connexions vers des IPs malveillantes, les domaines de C2, etc.</li>
      </ul>

      <h2>SOAR : automatiser la réponse aux incidents</h2>
      <p>
        Les playbooks Sentinel (basés sur Azure Logic Apps) permettent d'automatiser les actions de réponse. Exemples de playbooks utiles :
      </p>
      <ul>
        <li><strong>Auto-blocage compte compromis :</strong> Détection d'un compte Entra ID compromis → désactivation automatique du compte + révocation des sessions + notification Teams/Slack</li>
        <li><strong>Enrichissement automatique des incidents :</strong> Ajout automatique d'informations de threat intelligence (VirusTotal, Shodan, MaxMind GeoIP) aux incidents</li>
        <li><strong>Isolation de machine infectée :</strong> Détection de malware sur endpoint via Defender for Endpoint → isolation automatique de la machine du réseau</li>
        <li><strong>Notification et escalade :</strong> Création automatique de tickets ITSM (ServiceNow, Jira) pour les incidents de haute sévérité + notification on-call via PagerDuty</li>
        <li><strong>Blocage IP malveillante :</strong> Détection d'une IP dans la TI feed → ajout automatique à la Named Location Entra ID pour bloquer les connexions</li>
      </ul>

      <h2>Coûts et optimisation</h2>
      <p>
        Sentinel est facturé à l'ingestion de données (Go/jour) et à la rétention. Les coûts peuvent surprendre si mal configurés :
      </p>
      <ul>
        <li><strong>Sources gratuites :</strong> Microsoft 365 Defender, Azure Activity, Entra ID (Audit + SignIn), Microsoft Defender for Cloud — aucun coût d'ingestion Sentinel</li>
        <li><strong>Sources payantes :</strong> Logs serveurs, pare-feu, sources tierces — facturés au Go ingéré (tarification par palier)</li>
        <li><strong>Commitment tiers :</strong> Engagement de volume journalier (100 Go/j, 200 Go/j...) pour réduire les coûts de 30-65% vs. pay-as-you-go</li>
        <li><strong>Filtrage des logs :</strong> Ne pas tout ingérer — filtrer les logs volumineux et peu utiles (logs debug, logs de navigation web sauf si nécessaires) via les DCR (Data Collection Rules)</li>
        <li><strong>Basic Logs :</strong> Pour les logs à fort volume et faible valeur investigative, utiliser le niveau de log "Basic" (moins cher, requêtes limitées)</li>
      </ul>

      <h2>Intégration avec Microsoft Defender XDR</h2>
      <p>
        Microsoft a unifié Sentinel et Defender XDR dans une console unifiée (Microsoft Unified SOC Platform). En activant l'intégration :
      </p>
      <ul>
        <li>Les incidents de Defender XDR apparaissent automatiquement dans Sentinel</li>
        <li>Les analystes travaillent dans une seule interface pour les incidents cross-workload</li>
        <li>Les capacités de chasse aux menaces (Threat Hunting) de Defender sont disponibles dans Sentinel via les tables Advanced Hunting</li>
        <li>Les playbooks SOAR Sentinel peuvent déclencher des actions Defender (isoler un endpoint, bloquer un fichier)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Microsoft Sentinel est un SIEM cloud-native puissant, particulièrement adapté aux organisations ayant déjà investi dans l'écosystème Microsoft. Son intégration native avec M365, Azure et la suite Defender en fait un choix naturel pour les PME françaises. CyberSecure accompagne le déploiement de Sentinel : architecture, connecteurs, règles de détection KQL personnalisées, playbooks SOAR, et formation des équipes SOC.
      </p>
    </BlogLayout>
  );
};

export default AzureSentinelSiemGuide;
