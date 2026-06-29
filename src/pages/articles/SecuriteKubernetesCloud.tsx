import BlogLayout from "@/components/BlogLayout";

const SecuriteKubernetesCloud = () => {
  return (
    <BlogLayout
      title="Sécurité Kubernetes sur AWS, Azure et GCP : guide complet 2026"
      description="Sécuriser Kubernetes en production sur le cloud : RBAC, Pod Security Admission, Network Policies, secrets management, scanning d'images, audit logs et conformité NIS2."
      date="28 juin 2026"
      readTime="15 min"
      category="Architecture Sécurisée"
      slug="securite-kubernetes-cloud-aws-azure-gcp"
    >
      <p>
        Kubernetes est devenu le standard de facto pour orchestrer les conteneurs en production. Mais sa flexibilité et sa complexité en font aussi une surface d'attaque considérable. Des clusters Kubernetes mal configurés sont régulièrement compromis : escalade de privilèges via le service account, accès à l'API server non protégé, images compromises injectées dans le pipeline CI/CD. Ce guide vous donne les clés pour sécuriser votre cluster Kubernetes, qu'il soit sur EKS (AWS), AKS (Azure) ou GKE (Google Cloud).
      </p>

      <h2>Les 5 vecteurs d'attaque Kubernetes les plus fréquents</h2>
      <ul>
        <li><strong>API server exposé publiquement :</strong> Le kube-apiserver accessible sans authentification forte est la première porte d'entrée des attaquants (bots scannent en permanence le port 6443/443). Des milliers de clusters sont accessibles publiquement sur Internet sans MFA.</li>
        <li><strong>RBAC trop permissif :</strong> Service accounts avec des permissions cluster-admin, role bindings "wildcard" (*), workloads en production avec des droits de modification des secrets ou des ConfigMaps sensibles.</li>
        <li><strong>Images conteneurs non vérifiées :</strong> Images issues de registres publics non scanées (DockerHub), utilisation de tags :latest (pas de versionnement), images avec des CVE critiques non patchées.</li>
        <li><strong>Pods en mode privilégié :</strong> Pods avec securityContext.privileged: true, capabilities Linux non restreintes (CAP_NET_ADMIN, CAP_SYS_ADMIN), accès au système de fichiers de l'hôte (hostPath).</li>
        <li><strong>Secrets mal gérés :</strong> Secrets Kubernetes stockés en base64 non chiffrés dans etcd, secrets hardcodés dans les manifestes YAML ou les variables d'environnement, pas de rotation.</li>
      </ul>

      <h2>Sécurité de l'API Server et authentification</h2>

      <h3>Authentification forte</h3>
      <p>
        L'API server Kubernetes supporte plusieurs mécanismes d'authentification. Sur les clusters managés (EKS, AKS, GKE), l'authentification est intégrée au IAM cloud provider :
      </p>
      <ul>
        <li><strong>EKS (AWS) :</strong> aws-auth ConfigMap ou EKS Access Entries pour mapper les rôles IAM aux groupes RBAC Kubernetes. Activer l'authentification EKS avec aws eks update-cluster-config --enable-access-entries.</li>
        <li><strong>AKS (Azure) :</strong> Intégration Azure Active Directory (Entra ID) pour l'authentification. Activer --enable-azure-rbac pour utiliser les rôles Azure directement dans Kubernetes.</li>
        <li><strong>GKE (Google Cloud) :</strong> Workload Identity Federation pour les service accounts applicatifs, Google Groups RBAC pour les équipes humaines. Désactiver les legacy credentials.</li>
      </ul>

      <h3>Accès à l'API server</h3>
      <ul>
        <li>Limiter les IP autorisées à accéder à l'API server via les <strong>authorized networks</strong> (toutes les offres cloud le proposent)</li>
        <li>Désactiver l'accès public à l'API server pour les clusters de production — utiliser un VPN ou un bastion pour l'administration</li>
        <li>Activer le <strong>audit logging</strong> de l'API server : logs toutes les requêtes (who, what, when) pour la détection d'anomalies</li>
        <li>Désactiver l'<strong>anonymous access</strong> : --anonymous-auth=false (désactivé par défaut sur les clusters managés modernes)</li>
      </ul>

      <h2>RBAC : le principe du moindre privilège</h2>
      <p>
        Le RBAC (Role-Based Access Control) est le mécanisme de contrôle d'accès principal de Kubernetes. Une mauvaise configuration RBAC est la première cause d'escalade de privilèges.
      </p>

      <h3>Règles fondamentales RBAC</h3>
      <ul>
        <li><strong>Pas de cluster-admin pour les applications :</strong> Les workloads applicatifs ne doivent jamais avoir le rôle cluster-admin. Créer des Roles (namespace) ou ClusterRoles avec les permissions minimales nécessaires.</li>
        <li><strong>Service accounts dédiés :</strong> Chaque application doit avoir son propre ServiceAccount avec uniquement les permissions dont elle a besoin. Ne pas utiliser le ServiceAccount default.</li>
        <li><strong>Audit régulier des RBAC :</strong> Utiliser des outils comme rbac-audit, KubiScan ou kubectl-who-can pour identifier les permissions excessives.</li>
        <li><strong>Pas de wildcards dans les verbs :</strong> Eviter verbs: ["*"]. Lister explicitement get, list, watch selon le besoin.</li>
        <li><strong>Désactiver l'auto-mount des ServiceAccount tokens :</strong> automountServiceAccountToken: false dans les pods qui n'utilisent pas l'API Kubernetes.</li>
      </ul>

      <h3>Workload Identity : l'IAM pour les applications Kubernetes</h3>
      <p>
        Pour accéder aux services cloud (S3, RDS, GCS, Azure Blob) depuis un pod Kubernetes, évitez les credentials statiques (access keys) dans les Secrets. Utilisez les mécanismes d'identité Workload :
      </p>
      <ul>
        <li><strong>AWS :</strong> IRSA (IAM Roles for Service Accounts) — associer un rôle IAM à un ServiceAccount Kubernetes via OIDC</li>
        <li><strong>Azure :</strong> Azure Workload Identity — lier un ServiceAccount Kubernetes à une Azure Managed Identity</li>
        <li><strong>GCP :</strong> Workload Identity Federation — lier un ServiceAccount Kubernetes à un Service Account Google Cloud</li>
      </ul>

      <h2>Pod Security : durcir les workloads</h2>

      <h3>Pod Security Admission (PSA)</h3>
      <p>
        Depuis Kubernetes 1.25, le Pod Security Admission Controller remplace les PodSecurityPolicies (PSP). Il enforce 3 profils de sécurité au niveau namespace :
      </p>
      <ul>
        <li><strong>privileged :</strong> Aucune restriction (réservé aux namespaces système : kube-system, monitoring)</li>
        <li><strong>baseline :</strong> Empêche les configurations les plus dangereuses (pas de privileged, pas de hostNetwork)</li>
        <li><strong>restricted :</strong> Profil le plus strict : pas de root, capabilities réduites au minimum, read-only root filesystem recommandé</li>
      </ul>
      <p>
        Labéliser les namespaces de production avec le profil restricted. Exemple : kubectl label namespace production pod-security.kubernetes.io/enforce=restricted
      </p>

      <h3>Security Context des pods</h3>
      <p>
        Configurer le securityContext à la fois au niveau du pod et du conteneur :
      </p>
      <ul>
        <li><strong>runAsNonRoot: true</strong> — Ne pas exécuter le conteneur en tant que root</li>
        <li><strong>runAsUser: 1000</strong> — Spécifier un UID non-root</li>
        <li><strong>allowPrivilegeEscalation: false</strong> — Empêcher le setuid/setgid</li>
        <li><strong>readOnlyRootFilesystem: true</strong> — Système de fichiers racine en lecture seule</li>
        <li><strong>capabilities.drop: ["ALL"]</strong> — Supprimer toutes les capabilities Linux, n'ajouter que celles nécessaires</li>
        <li><strong>seccompProfile: RuntimeDefault</strong> — Activer le profil seccomp par défaut (bloque 300+ syscalls dangereux)</li>
      </ul>

      <h2>Network Policies : segmentation réseau dans Kubernetes</h2>
      <p>
        Par défaut, tous les pods d'un cluster Kubernetes peuvent communiquer entre eux (flat network). Les Network Policies permettent de segmenter le trafic.
      </p>
      <ul>
        <li><strong>Politique par défaut deny-all :</strong> Commencer par une politique qui bloque tout le trafic entrant et sortant au sein d'un namespace, puis ajouter des exceptions explicites.</li>
        <li><strong>Egress contrôlé :</strong> Limiter les sorties réseau des pods aux services dont ils ont besoin (base de données, API externes). Bloquer l'accès Internet direct depuis les pods de production.</li>
        <li><strong>DNS autorisé :</strong> Toujours autoriser le trafic UDP/TCP port 53 vers le DNS du cluster (CoreDNS)</li>
        <li><strong>CNI compatible :</strong> Les Network Policies nécessitent un CNI qui les supporte (Calico, Cilium, Weave Net). Flannel seul ne les supporte pas.</li>
      </ul>
      <p>
        Les solutions CNI avancées comme <strong>Cilium</strong> permettent des Network Policies L7 (basées sur les DNS, les URL, les headers HTTP) et offrent des capacités d'observabilité réseau (Hubble).
      </p>

      <h2>Secrets Management : ne pas stocker les secrets dans Kubernetes</h2>
      <p>
        Les Secrets Kubernetes sont encodés en base64 mais stockés en clair dans etcd par défaut. Pour les environnements de production, utiliser des solutions de secrets management externes :
      </p>
      <ul>
        <li><strong>AWS Secrets Manager + AWS Secrets Store CSI Driver :</strong> Injecter les secrets AWS dans les pods via le CSI driver sans les stocker dans les Secrets Kubernetes</li>
        <li><strong>Azure Key Vault + CSI Driver :</strong> Même approche pour Azure, avec intégration Azure Workload Identity</li>
        <li><strong>GCP Secret Manager + Workload Identity :</strong> Accès aux secrets GCP depuis les pods via le Workload Identity sans credentials statiques</li>
        <li><strong>HashiCorp Vault :</strong> Solution multi-cloud avec Vault Agent Injector ou le Vault Secrets Operator pour injecter les secrets en tant que variables d'environnement ou fichiers</li>
        <li><strong>External Secrets Operator :</strong> Opérateur Kubernetes qui synchronise les secrets depuis AWS/Azure/GCP/Vault vers les Secrets Kubernetes, avec rotation automatique</li>
      </ul>
      <p>
        Si vous devez utiliser les Secrets Kubernetes natifs : activer le chiffrement at-rest d'etcd (EncryptionConfig avec une KMS key AWS/Azure/GCP).
      </p>

      <h2>Sécurité de la supply chain : images conteneurs</h2>
      <ul>
        <li><strong>Scanning d'images :</strong> Intégrer Trivy, Snyk ou AWS ECR scanning dans le pipeline CI/CD. Bloquer le déploiement d'images avec des CVE critiques (CVSS ≥ 9.0) non patchées.</li>
        <li><strong>Image signing :</strong> Signer les images avec Cosign (sigstore) et vérifier les signatures avec une Admission Controller (Kyverno ou OPA Gatekeeper) avant le déploiement.</li>
        <li><strong>Registre privé :</strong> Ne jamais tirer des images depuis DockerHub public en production. Utiliser ECR, ACR, GCR ou Harbor comme registre privé.</li>
        <li><strong>Images de base minimales :</strong> Utiliser des images distroless (Google), scratch, ou Alpine pour réduire la surface d'attaque. Pas d'outils inutiles (curl, wget, shell) dans les images de production.</li>
        <li><strong>Pas de tag :latest :</strong> Toujours utiliser des tags immuables (SHA256 digest ou version sémantique). :latest ne garantit pas la reproductibilité.</li>
      </ul>

      <h2>Admission Controllers : la dernière barrière</h2>
      <p>
        Les Admission Controllers interceptent toute requête à l'API server avant la persistance des ressources. Ils permettent de faire respecter des politiques de sécurité via des Webhooks.
      </p>
      <ul>
        <li><strong>Kyverno :</strong> Solution native Kubernetes (politiques en YAML) pour valider, muter et générer des ressources. Exemples : forcer les labels, bloquer les images non signées, imposer les limites de ressources.</li>
        <li><strong>OPA Gatekeeper :</strong> Moteur de politiques basé sur le langage Rego. Plus puissant mais plus complexe. Standard dans les grandes entreprises.</li>
        <li><strong>Politiques à implémenter :</strong> Bloquer privileged, bloquer hostPath, forcer les limits/requests CPU et mémoire, interdire les images sans digest, forcer le readOnlyRootFilesystem.</li>
      </ul>

      <h2>Runtime Security : détecter les attaques en temps réel</h2>
      <ul>
        <li><strong>Falco :</strong> Outil CNCF de runtime security pour Kubernetes. Détecte les comportements anormaux en temps réel : shell spawné dans un conteneur, accès à des fichiers sensibles (/etc/shadow), connexions réseau inattendues, escalade de privilèges.</li>
        <li><strong>Amazon GuardDuty pour EKS :</strong> Analyse les audit logs EKS et détecte les activités malveillantes (découverte de credentials, escalade RBAC, miners de crypto).</li>
        <li><strong>Microsoft Defender for Containers :</strong> Équivalent Azure avec analyse des images et détection runtime.</li>
        <li><strong>Google Security Command Center :</strong> Pour GKE avec détection des configurations risquées et des comportements anormaux.</li>
      </ul>

      <h2>Conformité NIS2 et Kubernetes</h2>
      <p>
        Si votre entreprise est soumise à NIS2 et utilise Kubernetes pour ses services critiques, voici comment les exigences NIS2 se traduisent :
      </p>
      <ul>
        <li><strong>Article 21.2a — Politiques d'analyse des risques :</strong> Inclure l'évaluation des risques Kubernetes dans votre analyse EBIOS RM ou ISO 27005</li>
        <li><strong>Article 21.2b — Gestion des incidents :</strong> Pipeline de détection (Falco, GuardDuty/Defender) → alerte SOC → procédure d'isolation des pods compromis</li>
        <li><strong>Article 21.2c — Continuité :</strong> Haute disponibilité du control plane (multi-AZ), PodDisruptionBudgets pour les applications critiques, etcd backups automatiques</li>
        <li><strong>Article 21.2h — Chaîne d'approvisionnement :</strong> Scanning d'images, signing Cosign, SBOM (Software Bill of Materials) pour les images de production</li>
        <li><strong>Article 21.2i — Chiffrement :</strong> Chiffrement etcd at-rest, TLS pour toutes les communications intra-cluster, mTLS avec Istio ou Linkerd (service mesh)</li>
      </ul>

      <h2>Plan d'action sécurité Kubernetes en 6 étapes</h2>
      <ol>
        <li><strong>Audit de l'existant :</strong> kube-bench (CIS Benchmark), kube-score, Kubescape (NSA/CISA Kubernetes Hardening Guide). Identifier les configurations non conformes.</li>
        <li><strong>RBAC :</strong> Auditer tous les RoleBindings et ClusterRoleBindings. Supprimer les permissions excessives. Migrer vers IRSA/Workload Identity pour les applications.</li>
        <li><strong>Pod Security :</strong> Activer Pod Security Admission en mode baseline sur tous les namespaces, restricted sur les namespaces applicatifs.</li>
        <li><strong>Secrets :</strong> Migrer les secrets sensibles vers AWS Secrets Manager/Azure Key Vault/HashiCorp Vault. Activer le chiffrement etcd si nécessaire.</li>
        <li><strong>Supply chain :</strong> Intégrer le scanning d'images dans le CI/CD. Mettre en place le signing Cosign et la vérification via Kyverno.</li>
        <li><strong>Runtime monitoring :</strong> Déployer Falco (ou l'équivalent cloud natif). Configurer les alertes vers le SOC ou un outil comme PagerDuty/OpsGenie.</li>
      </ol>

      <div className="info-box">
        <h4>Audit sécurité Kubernetes par nos experts cloud</h4>
        <p>CyberSecure réalise des audits de sécurité Kubernetes complets : revue CIS Benchmark, audit RBAC, analyse des Network Policies, sécurité de la supply chain conteneurs et conformité NIS2. Expérience sur EKS, AKS et GKE. Rapport de conformité et plan de remédiation inclus. Devis gratuit sous 48h.</p>
      </div>
    </BlogLayout>
  );
};

export default SecuriteKubernetesCloud;
