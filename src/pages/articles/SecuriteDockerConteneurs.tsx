import BlogLayout from "@/components/BlogLayout";

const SecuriteDockerConteneurs = () => {
  return (
    <BlogLayout
      title="Sécurité Docker et conteneurs en 2026 : Trivy, Falco et CIS Docker Benchmark"
      description="Hardening des conteneurs Docker et Kubernetes : CIS Benchmark, scan de vulnérabilités avec Trivy, détection runtime avec Falco, images minimales, secrets et RBAC."
      date="16 juin 2026"
      readTime="13 min"
      category="DevSecOps"
    >
      <p className="lead">
        Les conteneurs représentent aujourd'hui plus de <strong>90 % des nouveaux déploiements
        applicatifs</strong> en entreprise. Pourtant, selon le rapport Sysdig 2025, <strong>87 % des
        images Docker</strong> contiennent des vulnérabilités à risque élevé ou critique,
        et seulement 15 % des organisations ont mis en place une détection runtime.
        Voici comment sécuriser vos conteneurs de bout en bout.
      </p>

      <h2>1. Les risques spécifiques aux environnements conteneurisés</h2>
      <ul>
        <li><strong>Images vulnérables</strong> : dépendances OS et applicatives non à jour dans les layers Docker.</li>
        <li><strong>Exécution en root</strong> : 75 % des conteneurs tournent avec les privilèges root (Sysdig 2025).</li>
        <li><strong>Secrets hardcodés</strong> : mots de passe, tokens API ou clés privées dans les Dockerfiles ou variables d'environnement.</li>
        <li><strong>Escape de conteneur</strong> : exploitation de CVE dans le runtime (runc, containerd) pour accéder à l'hôte.</li>
        <li><strong>Registres non sécurisés</strong> : images publiques non vérifiées téléchargées depuis Docker Hub.</li>
        <li><strong>Configurations réseau permissives</strong> : absence de Network Policies dans Kubernetes.</li>
      </ul>

      <h2>2. Sécuriser les images Docker : CIS Benchmark et images minimales</h2>

      <h3>Adopter des images de base minimales</h3>
      <ul>
        <li><strong>distroless</strong> (Google) : images sans shell, sans gestionnaire de paquets — réduisent la surface d'attaque de 90 %.</li>
        <li><strong>Alpine Linux</strong> : image minimaliste &lt;10 Mo, musl libc, audit de sécurité régulier.</li>
        <li><strong>Chainguard Images</strong> : images hardened par défaut, mises à jour quotidiennes, CVE proches de zéro.</li>
      </ul>

      <h3>CIS Docker Benchmark v1.6</h3>
      <p>
        Le CIS Docker Benchmark définit les bonnes pratiques de configuration pour l'hôte Docker,
        le daemon, les images et les conteneurs. Points clés :
      </p>
      <ul>
        <li>Exécuter les conteneurs avec un utilisateur non-root (<code>USER 1001</code> dans le Dockerfile).</li>
        <li>Utiliser un système de fichiers en lecture seule (<code>--read-only</code>).</li>
        <li>Limiter les capabilities Linux (<code>--cap-drop ALL --cap-add NET_BIND_SERVICE</code>).</li>
        <li>Activer les profils Seccomp et AppArmor/SELinux.</li>
        <li>Ne jamais utiliser <code>--privileged</code> en production.</li>
        <li>Isoler les conteneurs sur des réseaux dédiés, pas sur le réseau bridge par défaut.</li>
      </ul>

      <h2>3. Scan de vulnérabilités avec Trivy</h2>
      <p>
        <strong>Trivy</strong> (Aqua Security, open source) est le scanner de vulnérabilités
        de référence pour les conteneurs. Il détecte les CVE dans les packages OS, les dépendances
        applicatives (npm, pip, Maven, Go modules), les fichiers de configuration et les secrets.
      </p>
      <p>Intégration CI/CD GitHub Actions :</p>
      <ul>
        <li>Scanner chaque image avant push vers le registre.</li>
        <li>Bloquer le pipeline si une CVE critique est détectée (<code>--exit-code 1 --severity CRITICAL</code>).</li>
        <li>Générer des rapports SARIF intégrés dans GitHub Security tab.</li>
        <li>Utiliser <code>trivy repo</code> pour scanner les dépendances du code source.</li>
      </ul>
      <p>
        Compléments : <strong>Grype</strong> (Anchore), <strong>Snyk Container</strong>,
        <strong>Docker Scout</strong> (intégré à Docker Desktop depuis 2024).
      </p>

      <h2>4. Signature et intégrité des images : Cosign et Notation</h2>
      <p>
        Suite à l'attaque de la supply chain SolarWinds et à XZ Utils (2024), la signature
        des images est devenue incontournable. L'écosystème <strong>Sigstore</strong> propose :
      </p>
      <ul>
        <li><strong>Cosign</strong> : signe les images OCI avec des clés ou des certificats éphémères (keyless signing).</li>
        <li><strong>Rekor</strong> : journalisation transparente des signatures (append-only log public).</li>
        <li><strong>Notation</strong> (CNCF) : standard de signature pour les registres compatibles OCI.</li>
      </ul>
      <p>
        En production, configurez votre cluster Kubernetes pour n'accepter que des images
        signées via un <strong>Admission Webhook</strong> (Kyverno, OPA Gatekeeper).
      </p>

      <h2>5. Détection runtime avec Falco</h2>
      <p>
        <strong>Falco</strong> (CNCF) monitore en temps réel les appels système des conteneurs
        et déclenche des alertes sur les comportements anormaux :
      </p>
      <ul>
        <li>Exécution de shell dans un conteneur en production (<code>container.id != host AND proc.name = bash</code>).</li>
        <li>Lecture de fichiers sensibles (<code>/etc/shadow</code>, clés privées).</li>
        <li>Connexion réseau vers une IP externe depuis un conteneur de base de données.</li>
        <li>Escalade de privilèges ou modification des capabilities.</li>
        <li>Accès au socket Docker depuis un conteneur (risque d'escape).</li>
      </ul>
      <p>
        Les alertes Falco peuvent être envoyées vers Slack, un SIEM (Splunk, Elastic),
        ou un SOAR pour réponse automatisée (isolation du conteneur compromis).
      </p>

      <h2>6. Gestion des secrets dans les conteneurs</h2>
      <p>
        Les variables d'environnement en clair sont <strong>accessibles à tous les processus</strong>
        du conteneur et peuvent apparaître dans les logs. Les bonnes pratiques :
      </p>
      <ul>
        <li><strong>HashiCorp Vault</strong> : injection dynamique de secrets au démarrage via l'agent Vault sidecar.</li>
        <li><strong>AWS Secrets Manager / Azure Key Vault</strong> : récupération des secrets via SDK, avec rotation automatique.</li>
        <li><strong>Kubernetes Secrets</strong> : chiffrer les secrets etcd au repos (<code>EncryptionConfiguration</code>) ; utiliser External Secrets Operator pour synchroniser depuis Vault.</li>
        <li>Scanner les Dockerfiles avec <strong>detect-secrets</strong> ou <strong>truffleHog</strong> dans la CI pour éviter les commits accidentels.</li>
      </ul>

      <h2>7. Sécurité Kubernetes : RBAC, Network Policies et PSA</h2>
      <ul>
        <li><strong>RBAC</strong> : principe de moindre privilège pour tous les ServiceAccounts ; auditer les ClusterRoleBindings régulièrement.</li>
        <li><strong>Network Policies</strong> : bloquer tout le trafic par défaut et n'autoriser que les flux nécessaires (deny-all ingress/egress).</li>
        <li><strong>Pod Security Admission (PSA)</strong> : remplace PodSecurityPolicies depuis K8s 1.25 ; utiliser le profil <code>restricted</code> en production.</li>
        <li><strong>Admission controllers</strong> : Kyverno pour imposer les règles de conformité (no latest tag, no root, resource limits obligatoires).</li>
        <li><strong>Audit logs API server</strong> : activer et centraliser vers un SIEM.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Sécuriser les conteneurs est un travail continu qui s'intègre à chaque étape du
        cycle DevSecOps : build (Trivy, signature Cosign), deploy (RBAC, PSA, Kyverno),
        runtime (Falco, Network Policies). En appliquant le CIS Docker Benchmark et en
        automatisant les contrôles en CI/CD, vous réduisez drastiquement votre surface d'attaque
        sans ralentir la vélocité de vos équipes de développement.
      </p>
    </BlogLayout>
  );
};

export default SecuriteDockerConteneurs;
