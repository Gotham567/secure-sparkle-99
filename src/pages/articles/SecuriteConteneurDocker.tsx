import BlogLayout from "@/components/BlogLayout";

const SecuriteConteneurDocker = () => {
  return (
    <BlogLayout
      title="Sécurité des conteneurs Docker en production : Trivy, Falco et durcissement"
      description="Sécuriser vos conteneurs Docker : scan d'images avec Trivy, runtime security avec Falco, Dockerfile best practices, rootless containers, seccomp et AppArmor, et gestion des secrets."
      date="29 juin 2026"
      readTime="15 min"
      category="Conteneurs"
    >
      <section>
        <h2>Les menaces spécifiques aux conteneurs</h2>
        <p>
          Les conteneurs Docker offrent isolation et reproductibilité, mais leur sécurité présente des défis particuliers. Contrairement aux VM, les conteneurs partagent le kernel du système hôte — une vulnérabilité kernel peut permettre une évasion de conteneur vers l'hôte. En 2024, des centaines de milliers d'images Docker publiques contenaient des vulnérabilités critiques, dont des images de bases populaires non maintenues.
        </p>
        <h3>Vecteurs d'attaque courants</h3>
        <ul>
          <li><strong>Images vulnérables :</strong> des CVE critiques dans les packages de l'image de base (Alpine, Ubuntu, Debian) permettant une escalade de privilèges ou une RCE</li>
          <li><strong>Privilege escalation :</strong> conteneurs lancés en root, capabilities Linux excessives, volumes montés sans restriction permettant l'accès au filesystem hôte</li>
          <li><strong>Secrets dans les layers Docker :</strong> clés API, mots de passe dans les layers d'image — même supprimés, ils restent dans les layers précédentes et peuvent être extraits</li>
          <li><strong>Docker socket exposé :</strong> monter `/var/run/docker.sock` dans un conteneur donne un accès root complet à l'hôte Docker</li>
          <li><strong>Images non vérifiées :</strong> images `latest` sans digest SHA, images de registries non officiels pouvant être falsifiées</li>
          <li><strong>Supply chain :</strong> des dépendances dans le Dockerfile (apt packages, npm, pip) compromises lors du build</li>
        </ul>
      </section>

      <section>
        <h2>Scanner les images avec Trivy</h2>
        <p>
          Trivy (Aqua Security) est l'outil de scan de vulnérabilités pour conteneurs le plus utilisé. Il détecte les CVE dans les packages OS et les dépendances applicatives, les secrets exposés et les mauvaises configurations.
        </p>
        <h3>Types de scan Trivy</h3>
        <ul>
          <li><strong>Image scan :</strong> `trivy image nginx:latest` scanne tous les packages dans l'image et retourne les CVE par sévérité (CRITICAL, HIGH, MEDIUM, LOW)</li>
          <li><strong>Filesystem scan :</strong> `trivy fs .` scanne le répertoire courant (package.json, requirements.txt, pom.xml) pour les dépendances vulnérables</li>
          <li><strong>Repository scan :</strong> `trivy repo github.com/org/repo` scanne un repo GitHub directement</li>
          <li><strong>SBOM generation :</strong> `trivy image --format cyclonedx nginx` génère un Software Bill of Materials en CycloneDX ou SPDX</li>
          <li><strong>Secrets scan :</strong> détection de secrets dans les layers Docker (clés AWS, tokens GitHub, etc.)</li>
          <li><strong>Config scan :</strong> détection de mauvaises configurations Dockerfile et Kubernetes (ex. conteneur privileged, hostNetwork, etc.)</li>
        </ul>
        <h3>Intégration CI/CD</h3>
        <ul>
          <li>GitHub Action Aqua Security/trivy-action pour scanner automatiquement toutes les images buildées</li>
          <li>Bloquer le push vers le registry si des vulnérabilités CRITICAL sont détectées</li>
          <li>Rapport SARIF pour les annotations GitHub Advanced Security dans les PRs</li>
          <li>Scan périodique des images en production (les CVE nouvelles apparaissent continuellement)</li>
        </ul>
      </section>

      <section>
        <h2>Dockerfile best practices de sécurité</h2>
        <p>
          La sécurité commence dans le Dockerfile :
        </p>
        <h3>Images de base</h3>
        <ul>
          <li><strong>Images minimales :</strong> utiliser `scratch` (vide), `distroless` (Google) ou Alpine (3 MB) plutôt que Ubuntu/Debian complet — moins de packages = moins de CVE</li>
          <li><strong>Images officielles uniquement :</strong> utiliser des images officielles Docker Hub vérifiées (badge officiel) ou des images de registries de confiance (ECR Public, GHCR)</li>
          <li><strong>Pin par digest :</strong> `FROM alpine:3.19.1@sha256:abc123...` au lieu de `FROM alpine:latest` pour une reproductibilité et une sécurité maximale</li>
          <li><strong>Multi-stage builds :</strong> builder dans une image complète, copier uniquement les artefacts nécessaires dans l'image finale minimale</li>
        </ul>
        <h3>Utilisateur non-root</h3>
        <ul>
          <li>Ajouter `RUN useradd -r -u 1001 appuser && chown -R appuser /app` dans le Dockerfile</li>
          <li>Terminer le Dockerfile avec `USER 1001` pour lancer l'application en non-root</li>
          <li>Kubernetes : ajouter `runAsNonRoot: true` et `runAsUser: 1001` dans le SecurityContext du Pod</li>
        </ul>
        <h3>Minimiser les layers et ne pas exposer de secrets</h3>
        <ul>
          <li>Ne jamais passer de secrets en argument ARG (ils apparaissent dans `docker history`)</li>
          <li>Utiliser des build secrets Docker (`--mount=type=secret`) pour les tokens de build</li>
          <li>Ne pas inclure de fichiers `.env` ou de credentials dans l'image — utiliser `.dockerignore`</li>
          <li>Combiner les commandes RUN pour minimiser les layers et la surface d'attaque</li>
        </ul>
      </section>

      <section>
        <h2>Runtime security avec Falco</h2>
        <p>
          Falco (CNCF) est l'outil de référence pour la détection des comportements anormaux des conteneurs en temps réel. Il utilise les syscalls Linux pour détecter les activités suspectes :
        </p>
        <ul>
          <li><strong>Règles prédéfinies :</strong> détection des shells lancés dans des conteneurs (ex. `bash` dans un conteneur nginx — signe d'un attaquant), écriture dans des répertoires système, lecture de `/etc/shadow`</li>
          <li><strong>Exécution de fichiers binaires :</strong> détecter si un conteneur exécute un binaire non présent à l'origine (ex. téléchargement et exécution d'un exploit)</li>
          <li><strong>Connexions réseau inattendues :</strong> un conteneur de base de données qui initie une connexion sortante vers Internet est suspect</li>
          <li><strong>Privileges escalation :</strong> tentatives de `sudo`, `su`, ou d'exploitation de capabilities Linux</li>
          <li><strong>Alertes en temps réel :</strong> Falco peut envoyer des alertes vers Slack, Elasticsearch, Prometheus ou un SIEM via des plugins</li>
        </ul>
        <h3>Déploiement Falco</h3>
        <ul>
          <li>Déployable en DaemonSet Kubernetes (un pod Falco par nœud) ou en mode standalone sur Docker</li>
          <li>eBPF driver (recommandé sur les kernels récents) ou kernel module pour la capture des syscalls</li>
          <li>Falco Sidekick : composant companion qui route les alertes Falco vers de multiples destinations (Slack, Teams, PagerDuty, SIEM)</li>
        </ul>
      </section>

      <section>
        <h2>Seccomp et AppArmor : limiter les syscalls</h2>
        <ul>
          <li><strong>Seccomp (Secure Computing Mode) :</strong> filtre les syscalls autorisés pour un conteneur. Docker applique un profil par défaut restreignant ~44 syscalls dangereux. Créer des profils personnalisés encore plus restrictifs pour les conteneurs critiques.</li>
          <li><strong>AppArmor :</strong> système de contrôle d'accès obligatoire (MAC) limitant les fichiers, capacités et opérations réseau du conteneur. Docker applique le profil `docker-default` par défaut.</li>
          <li><strong>Linux capabilities :</strong> utiliser `--cap-drop ALL --cap-add NET_BIND_SERVICE` pour ne garder que les capabilities strictement nécessaires. Ne jamais utiliser `--privileged` en production.</li>
          <li><strong>Read-only filesystem :</strong> `docker run --read-only` ou `readOnlyRootFilesystem: true` en Kubernetes pour éviter les modifications du filesystem du conteneur (obligatoire à monter les répertoires variables en tmpfs)</li>
        </ul>
      </section>

      <section>
        <h2>Gestion des secrets en production</h2>
        <ul>
          <li><strong>HashiCorp Vault :</strong> secrets dynamiques avec rotation automatique, accès via agent sidecar ou Vault Secrets Operator pour Kubernetes</li>
          <li><strong>AWS Secrets Manager / Parameter Store :</strong> intégration native avec les pods EKS via IRSA (IAM Roles for Service Accounts)</li>
          <li><strong>Kubernetes Secrets chiffrés :</strong> activer le chiffrement des Secrets Kubernetes at rest dans etcd (chiffrement KMS provider)</li>
          <li><strong>External Secrets Operator :</strong> synchronise des secrets depuis des sources externes (Vault, AWS SM) vers des Kubernetes Secrets</li>
          <li><strong>Never en variables d'environnement :</strong> préférer les fichiers montés en volume plutôt que les variables d'environnement (visibles dans `docker inspect`, `ps` ou les logs de crash)</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          La sécurité des conteneurs en production est une discipline à part entière qui couvre le build (scan d'images, Dockerfile best practices), le déploiement (seccomp, AppArmor, capabilities) et le runtime (Falco, monitoring). L'approche progressive recommandée : commencer par le scan d'images Trivy dans la CI/CD, puis activer Falco en mode surveillance, puis progressivement durcir les Dockerfiles et les SecurityContext Kubernetes. La sécurité des conteneurs fait partie intégrante d'une démarche DevSecOps mature.
        </p>
      </section>
    </BlogLayout>
  );
};

export default SecuriteConteneurDocker;
