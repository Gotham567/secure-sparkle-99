import BlogLayout from "@/components/BlogLayout";

const SecuriteInfrastructureCode = () => {
  return (
    <BlogLayout
      title="Sécurité Infrastructure as Code (IaC) : sécuriser Terraform, Ansible et CloudFormation"
      description="Guide complet pour sécuriser votre Infrastructure as Code : scanning Terraform avec Checkov et Trivy, secrets management, pipelines CI/CD sécurisés et conformité cloud."
      date="18 juin 2026"
      readTime="14 min"
      category="DevSecOps"
    >
      <p>
        L'Infrastructure as Code (IaC) a transformé la façon dont les équipes cloud provisionnent et gèrent leurs ressources. Terraform, Ansible, Pulumi, CloudFormation : ces outils permettent de définir toute une infrastructure en quelques lignes de code, d'automatiser le déploiement et d'assurer la reproductibilité des environnements. Mais cette puissance a une contrepartie : une mauvaise configuration dans un fichier Terraform peut déployer des ressources cloud exposées, des groupes de sécurité trop permissifs ou des buckets S3 publics à grande échelle. La sécurité IaC — parfois appelée "Shift Left Security" — consiste à détecter ces erreurs avant le déploiement, dans le pipeline CI/CD.
      </p>

      <h2>Pourquoi l'IaC crée-t-elle des risques de sécurité ?</h2>

      <h3>Les erreurs de configuration à grande échelle</h3>
      <p>
        Le risque principal de l'IaC est l'amplification des erreurs. Une mauvaise configuration d'un Security Group dans un module Terraform réutilisé peut se propager à des dizaines d'environnements simultanément. Un bucket S3 configuré avec <code>acl = "public-read"</code> dans un template déploie automatiquement des données publiquement accessibles dans toutes les régions où il est utilisé. La rapidité de l'IaC amplifie autant les bonnes pratiques que les erreurs.
      </p>

      <h3>Les secrets dans le code</h3>
      <p>
        L'un des problèmes les plus fréquents : des secrets (clés API, mots de passe, tokens) codés en dur dans les fichiers IaC et commités dans des dépôts Git. Même si le dépôt est privé, ces secrets sont souvent exposés dans les logs CI/CD, les plans Terraform, les artifacts de build. Un scan de l'historique Git avec des outils comme truffleHog ou git-secrets révèle systématiquement des secrets dans les dépôts de la plupart des organisations.
      </p>

      <h2>Les outils de scanning IaC de sécurité</h2>

      <h3>Checkov : l'outil de référence</h3>
      <p>
        Checkov est un scanner IaC open source développé par Prisma Cloud (Palo Alto Networks). Il analyse les fichiers Terraform, CloudFormation, Kubernetes, Dockerfile et ARM Templates pour détecter les misconfigurations de sécurité. Il dispose de plus de 1 000 règles prêtes à l'emploi couvrant AWS, Azure et GCP. Son intégration dans les pipelines CI/CD (GitHub Actions, GitLab CI, Jenkins) est simple et sa sortie peut bloquer un merge en cas de failles critiques.
      </p>
      <p>
        Exemple de règles Checkov pour Terraform AWS : <code>CKV_AWS_18</code> vérifie que le logging S3 est activé, <code>CKV_AWS_20</code> vérifie que les buckets S3 ne sont pas publics, <code>CKV_AWS_23</code> vérifie que les Security Groups n'autorisent pas le trafic SSH entrant depuis 0.0.0.0/0.
      </p>

      <h3>Trivy : scanner polyvalent</h3>
      <p>
        Trivy (Aqua Security) est un scanner de sécurité polyvalent qui couvre non seulement l'IaC (Terraform, CloudFormation, Kubernetes) mais aussi les images Docker, les packages applicatifs (CVE) et les fichiers de configuration. Sa facilité d'installation (<code>brew install trivy</code> ou image Docker) en fait un outil très populaire dans les équipes DevSecOps. Il peut être exécuté localement avant chaque commit.
      </p>

      <h3>tfsec et KICS</h3>
      <p>
        tfsec est un scanner dédié à Terraform avec une excellente couverture AWS, Azure et GCP. KICS (Keeping Infrastructure as Code Secure) de Checkmarx est un scanner multi-framework open source qui supporte plus de 24 frameworks IaC. Ces deux outils complètent Checkov selon les besoins spécifiques.
      </p>

      <h2>Intégrer le scanning IaC dans le pipeline CI/CD</h2>

      <h3>Architecture recommandée</h3>
      <p>
        La stratégie "Shift Left" consiste à exécuter les scans à plusieurs niveaux : dans l'IDE du développeur (plugins VS Code, IntelliJ) pour un feedback immédiat, dans le pre-commit hook pour bloquer les commits avec des secrets, dans la pull request CI pour bloquer le merge en cas de violations critiques, et dans le pipeline de déploiement avant le <code>terraform apply</code>.
      </p>
      <p>
        Exemple de configuration GitHub Actions avec Checkov :
      </p>
      <p>
        Dans votre workflow YAML, ajoutez une étape qui installe Checkov via pip, puis exécute <code>checkov -d . --framework terraform --soft-fail-on MEDIUM --hard-fail-on HIGH,CRITICAL</code>. Cette configuration bloque le pipeline si une vulnérabilité HIGH ou CRITICAL est détectée, mais autorise les MEDIUM pour éviter de bloquer les équipes sur des faux positifs mineurs.
      </p>

      <h3>Gestion des faux positifs</h3>
      <p>
        Les scanners IaC génèrent des faux positifs. Configurez des suppressions ciblées avec des commentaires inline dans votre Terraform : <code>#checkov:skip=CKV_AWS_18:Logging géré par CloudTrail central</code>. Ces suppressions doivent être révisées périodiquement et documentées avec la justification.
      </p>

      <h2>Gérer les secrets dans l'IaC</h2>

      <h3>Ne jamais stocker de secrets dans l'IaC</h3>
      <p>
        La règle absolue : aucun secret ne doit être stocké dans les fichiers IaC ou commité dans Git. Utilisez des références à des services de secrets management : <code>data "aws_secretsmanager_secret_version"</code> pour AWS Secrets Manager, <code>data "vault_generic_secret"</code> pour HashiCorp Vault, <code>var.database_password</code> passé via des variables d'environnement CI/CD. Les valeurs sensibles dans les outputs Terraform doivent être marquées <code>sensitive = true</code> pour être masquées dans les logs.
      </p>

      <h3>HashiCorp Vault pour la gestion des secrets</h3>
      <p>
        HashiCorp Vault est la solution de référence pour la gestion des secrets dans les environnements cloud et IaC. Il offre la rotation automatique des secrets, des politiques d'accès granulaires, un audit log complet et une intégration native avec Terraform via le provider Vault. Pour les équipes cloud, Vault est souvent complémentaire aux services natifs (AWS Secrets Manager, Azure Key Vault).
      </p>

      <h2>Sécurité des pipelines Terraform eux-mêmes</h2>
      <p>
        Le pipeline qui exécute <code>terraform apply</code> dispose généralement de permissions très élevées sur le cloud cible. Sa compromission est un risque majeur. Les bonnes pratiques : utiliser des rôles IAM dédiés avec le principe de moindre privilège, activer le MFA sur les comptes de service CI/CD, stocker le state Terraform dans un backend distant sécurisé (S3 + DynamoDB pour le locking, avec chiffrement et versioning activés), restreindre l'accès en écriture au state, et auditer régulièrement les permissions du pipeline.
      </p>
      <p>
        L'utilisation de solutions dédiées comme Spacelift, Atlantis ou Terraform Cloud améliore la gouvernance des runs Terraform : reviews obligatoires avant apply, historique des plans, RBAC sur les workspaces et intégration native des scanners de sécurité.
      </p>
    </BlogLayout>
  );
};

export default SecuriteInfrastructureCode;
