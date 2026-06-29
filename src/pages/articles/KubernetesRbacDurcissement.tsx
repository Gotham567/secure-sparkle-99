import BlogLayout from "@/components/BlogLayout";

const KubernetesRbacDurcissement = () => {
  return (
    <BlogLayout
      title="Kubernetes RBAC et durcissement : CIS Benchmark, Network Policies et Admission Controllers"
      description="Durcir Kubernetes en production : RBAC moindre privilège, Network Policies, Admission Controllers (OPA Gatekeeper), CIS Benchmark avec kube-bench, mTLS avec Istio, et secrets management."
      date="29 juin 2026"
      readTime="14 min"
      category="Kubernetes"
    >
      <section>
        <h2>La surface d'attaque Kubernetes</h2>
        <p>
          Kubernetes est une cible de choix pour les attaquants. En 2023, Tesla, Shopify et des centaines d'autres entreprises ont eu des clusters Kubernetes compromis, utilisés pour du cryptomining ou l'exfiltration de données. Les vecteurs d'attaque sont nombreux : API server exposé publiquement, RBAC trop permissif, images vulnérables, secrets en clair dans les manifestes YAML. Par défaut, un cluster Kubernetes fraîchement installé présente de nombreuses configurations non sécurisées.
        </p>
        <h3>Principaux vecteurs d'attaque Kubernetes</h3>
        <ul>
          <li><strong>API server non sécurisé :</strong> API server exposé sans authentification ou accessible depuis Internet — accès complet au cluster</li>
          <li><strong>RBAC trop permissif :</strong> ServiceAccounts avec des droits cluster-admin, bindings trop larges permettant l'escalade de privilèges</li>
          <li><strong>Images vulnérables :</strong> pods avec des images contenant des CVE critiques ou tournant en root</li>
          <li><strong>Secrets en clair :</strong> secrets Kubernetes stockés en base64 (non chiffrés) dans etcd sans chiffrement at-rest</li>
          <li><strong>Pods privilégiés :</strong> `privileged: true` ou `hostPID: true` donnant un accès root complet au nœud hôte</li>
          <li><strong>Metadata API :</strong> depuis un pod compromis, accès aux métadonnées cloud (IMDS) pour voler les credentials de l'instance</li>
        </ul>
      </section>

      <section>
        <h2>RBAC Kubernetes : principe du moindre privilège</h2>
        <p>
          Le contrôle d'accès basé sur les rôles (RBAC) Kubernetes est le premier mécanisme de défense. Le principe : chaque ServiceAccount, utilisateur et groupe ne doit avoir que les permissions strictement nécessaires à sa fonction.
        </p>
        <h3>Architecture RBAC</h3>
        <ul>
          <li><strong>Roles et ClusterRoles :</strong> définissent les permissions (verbes : get, list, create, update, delete) sur des resources (pods, deployments, secrets). Role est limité à un namespace, ClusterRole s'applique à tout le cluster.</li>
          <li><strong>RoleBindings et ClusterRoleBindings :</strong> associent un Role à un subject (ServiceAccount, User, Group). Préférer les RoleBindings (namespace-scoped) aux ClusterRoleBindings quand possible.</li>
          <li><strong>Audit des RBAC existants :</strong> utiliser `kubectl auth can-i --list --as system:serviceaccount:namespace:sa-name` pour lister ce qu'un ServiceAccount peut faire</li>
        </ul>
        <h3>Bonnes pratiques RBAC</h3>
        <ul>
          <li>Ne jamais utiliser le rôle `cluster-admin` sauf pour les composants de gestion du cluster (Helm, ArgoCD avec accès restreint)</li>
          <li>Créer des ServiceAccounts dédiés par workload — ne jamais utiliser le ServiceAccount `default`</li>
          <li>Audit régulier avec des outils comme `rbac-lookup` ou `rakkess` pour visualiser les permissions par sujet</li>
          <li>Nettoyer les bindings inutilisés — un ServiceAccount supprimé mais dont le binding reste peut être réutilisé par un attaquant</li>
          <li>Pour les déploiements GitOps (ArgoCD, Flux) : utiliser des ServiceAccounts avec uniquement les droits nécessaires à la réconciliation</li>
        </ul>
      </section>

      <section>
        <h2>Network Policies : microsegmentation</h2>
        <p>
          Par défaut, tous les pods d'un cluster Kubernetes peuvent communiquer entre eux librement. Les Network Policies permettent de définir des règles de pare-feu layer 3/4 entre pods et namespaces — équivalent des Security Groups AWS à l'échelle du pod.
        </p>
        <h3>Stratégie deny-all puis allow</h3>
        <ul>
          <li>Commencer par une politique deny-all ingress et egress dans chaque namespace de production : `podSelector: {}` avec `policyTypes: [Ingress, Egress]` et aucune règle</li>
          <li>Ajouter des règles allow spécifiques pour chaque flux autorisé (frontend → backend, backend → database, etc.)</li>
          <li>Autoriser explicitement le DNS egress (port 53 UDP/TCP vers kube-dns) — souvent oublié et bloque toutes les résolutions DNS</li>
          <li>Documenter l'architecture réseau avec un diagramme des flux avant d'implémenter les Network Policies</li>
        </ul>
        <h3>CNI supportant les Network Policies</h3>
        <ul>
          <li><strong>Calico :</strong> le plus utilisé, supporte des Network Policies Kubernetes standard et des GlobalNetworkPolicies étendues (layer 7 avec Calico Enterprise)</li>
          <li><strong>Cilium :</strong> basé sur eBPF, supporte des policies layer 7 (HTTP, gRPC, Kafka), DNS-based policies, et offre une observabilité réseau avancée via Hubble</li>
          <li><strong>Flannel :</strong> ne supporte pas les Network Policies nativement — utiliser Flannel + Calico pour les enforcer</li>
        </ul>
      </section>

      <section>
        <h2>Admission Controllers et OPA Gatekeeper</h2>
        <p>
          Les Admission Controllers interceptent les requêtes à l'API server avant la création/modification des ressources. Ils permettent de valider et de rejeter des manifestes non conformes aux politiques de sécurité.
        </p>
        <h3>Admission Controllers natifs essentiels</h3>
        <ul>
          <li><strong>PodSecurity Admission :</strong> remplace PodSecurityPolicy (déprécié en 1.25). Applique des profils de sécurité (Privileged, Baseline, Restricted) par namespace. Activer `restricted` pour les namespaces de production.</li>
          <li><strong>LimitRanger :</strong> impose des limites de ressources (CPU/memory requests et limits) pour éviter les pods sans contraintes qui monopolisent les nœuds</li>
          <li><strong>ResourceQuota :</strong> limite les ressources totales par namespace pour éviter qu'un namespace monopolise le cluster</li>
        </ul>
        <h3>OPA Gatekeeper : policy as code</h3>
        <ul>
          <li>Gatekeeper (CNCF) permet de définir des politiques Kubernetes personnalisées en Rego (langage OPA)</li>
          <li><strong>ConstraintTemplates :</strong> définissent le schéma et la logique d'une politique (ex. "toutes les images doivent venir de notre registry interne")</li>
          <li><strong>Constraints :</strong> instances d'une ConstraintTemplate, configurables par namespace ou cluster-wide</li>
          <li>Politiques courantes : interdire les images `latest`, exiger des labels spécifiques, bloquer les pods avec `hostNetwork: true`, imposer les resource limits</li>
          <li><strong>Kyverno :</strong> alternative à Gatekeeper avec une syntaxe YAML plus accessible que Rego, meilleure pour les équipes non familières avec OPA</li>
        </ul>
      </section>

      <section>
        <h2>CIS Benchmark avec kube-bench</h2>
        <ul>
          <li><strong>CIS Kubernetes Benchmark :</strong> référentiel de bonnes pratiques de sécurité Kubernetes publié par le Center for Internet Security. Couvre l'API server, etcd, kubelet, scheduler, et les workloads.</li>
          <li><strong>kube-bench :</strong> outil open source (Aqua Security) qui exécute automatiquement les vérifications du CIS Benchmark sur un cluster Kubernetes et produit un rapport de conformité avec les remédations.</li>
          <li>Exécuter kube-bench en pod privilégié ou directement sur les nœuds maîtres et workers : `kubectl apply -f job.yaml` (Aqua fournit des job YAML prêts à l'emploi)</li>
          <li>Points CIS souvent en échec : API server anonymous-auth activé, audit logging désactivé, etcd non chiffré, kubelet webhook mode désactivé, profils seccomp non configurés</li>
          <li>Kubernetes Hardening Guide (NSA/CISA) : guide complémentaire du gouvernement américain pour le durcissement des clusters</li>
        </ul>
      </section>

      <section>
        <h2>mTLS et secrets management</h2>
        <h3>mTLS avec un service mesh</h3>
        <ul>
          <li><strong>Istio :</strong> service mesh qui impose le mTLS entre tous les services par défaut via les PeerAuthentication policies. Chaque pod reçoit un certificat SPIFFE X.509 renouvelé automatiquement.</li>
          <li><strong>Linkerd :</strong> alternative plus légère à Istio, mTLS transparent sans configuration — idéal pour débuter avec le mTLS dans Kubernetes</li>
          <li>mTLS empêche le lateral movement depuis un pod compromis — un attaquant ne peut pas communiquer avec d'autres services sans certificat valide</li>
        </ul>
        <h3>Gestion des secrets Kubernetes</h3>
        <ul>
          <li>Activer le chiffrement des Secrets Kubernetes at rest dans etcd avec un KMS provider (AWS KMS, Azure Key Vault, GCP KMS)</li>
          <li><strong>External Secrets Operator :</strong> synchronise les secrets depuis Vault, AWS Secrets Manager, ou Azure Key Vault vers des Kubernetes Secrets — les secrets ne transitent jamais par Git</li>
          <li><strong>Sealed Secrets (Bitnami) :</strong> chiffre les secrets avec une clé asymétrique du cluster — permet de commiter les secrets chiffrés dans Git (GitOps)</li>
          <li>Ne jamais monter les secrets comme variables d'environnement si possible — préférer les volumes (moins visibles dans les processus et les logs)</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Le durcissement Kubernetes est un processus continu qui commence par le RBAC moindre privilège et les Network Policies, s'étend avec les Admission Controllers et OPA Gatekeeper, et se mesure avec kube-bench. L'approche recommandée : commencer par kube-bench pour identifier les écarts avec le CIS Benchmark, puis prioriser les corrections par risque. L'automatisation via GitOps (ArgoCD + Kyverno/Gatekeeper) garantit que les nouvelles configurations respectent systématiquement les politiques de sécurité.
        </p>
      </section>
    </BlogLayout>
  );
};

export default KubernetesRbacDurcissement;
