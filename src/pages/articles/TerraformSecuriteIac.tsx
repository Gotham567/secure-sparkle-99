import BlogLayout from "@/components/BlogLayout";

const TerraformSecuriteIac = () => {
  return (
    <BlogLayout
      title="Terraform security : sécuriser votre IaC avec Checkov, tfsec et Terrascan"
      description="Sécuriser votre code Terraform : scanner avec Checkov, tfsec et Terrascan, mauvaises configurations fréquentes (S3 public, SG permissif, IAM *), intégration CI/CD et GitOps security."
      date="29 juin 2026"
      readTime="14 min"
      category="IaC Security"
    >
      <section>
        <h2>Pourquoi sécuriser votre code Terraform</h2>
        <p>
          L'Infrastructure as Code (IaC) a révolutionné le déploiement cloud : les configurations sont versionnées, reproductibles et auditables. Mais cette même automatisation peut déployer des mauvaises configurations à grande échelle, en production, en quelques secondes. Une règle de groupe de sécurité AWS trop permissive ou un bucket S3 public dans un fichier Terraform peut exposer des milliers de ressources d'un seul coup.
        </p>
        <p>
          Le "shift left" de la sécurité IaC consiste à scanner le code Terraform avant qu'il soit appliqué — dans la PR, dans la CI/CD — plutôt que d'auditer l'infrastructure après déploiement. C'est 10 fois moins cher à corriger, et cela évite les incidents.
        </p>
        <h3>Les mauvaises configurations IaC les plus fréquentes</h3>
        <ul>
          <li><strong>Buckets S3 publics :</strong> `acl = "public-read"` ou absence de `block_public_acls = true` dans la configuration S3</li>
          <li><strong>Security Groups trop permissifs :</strong> règles `0.0.0.0/0` en ingress sur SSH (22), RDP (3389) ou base de données (3306, 5432)</li>
          <li><strong>IAM trop large :</strong> politiques IAM avec `"Action": "*"` ou `"Resource": "*"` sans conditions restrictives</li>
          <li><strong>Secrets hardcodés :</strong> clés API, passwords, tokens écrits en clair dans les fichiers `.tf` ou dans les `user_data`</li>
          <li><strong>Chiffrement désactivé :</strong> volumes EBS, bases RDS, buckets S3, secrets Manager sans chiffrement KMS</li>
          <li><strong>Logging désactivé :</strong> CloudTrail, VPC Flow Logs, S3 access logs non activés</li>
          <li><strong>MFA delete désactivé :</strong> sur les buckets S3 contenant des données critiques</li>
        </ul>
      </section>

      <section>
        <h2>Checkov : le scanner IaC open source le plus complet</h2>
        <p>
          Checkov (Bridgecrew/Prisma Cloud) est l'outil de référence pour scanner Terraform, CloudFormation, Kubernetes, Dockerfile et Helm charts. Il propose plus de 1 000 règles prédéfinies et supporte le format de politique personnalisée.
        </p>
        <h3>Installation et premier scan</h3>
        <p>
          Checkov s'installe en Python (`pip install checkov`) et scanne un répertoire Terraform en une commande :
        </p>
        <ul>
          <li>Scan d'un répertoire complet avec rapport JSON et SARIF</li>
          <li>Filtrage par provider (AWS, Azure, GCP) et par sévérité (CRITICAL, HIGH, MEDIUM)</li>
          <li>Suppression des faux positifs avec `# checkov:skip=CKV_AWS_XX:raison`</li>
          <li>Intégration native avec GitHub Actions, GitLab CI et Azure DevOps</li>
        </ul>
        <h3>Règles Checkov clés pour AWS</h3>
        <ul>
          <li><strong>CKV_AWS_18 :</strong> S3 bucket access logging activé</li>
          <li><strong>CKV_AWS_21 :</strong> S3 versioning activé</li>
          <li><strong>CKV_AWS_116 :</strong> Lambda dead letter queue configurée</li>
          <li><strong>CKV_AWS_25 :</strong> Security Group sans 0.0.0.0/0 sur SSH</li>
          <li><strong>CKV_AWS_57 :</strong> S3 public access block activé</li>
          <li><strong>CKV2_AWS_6 :</strong> S3 bucket level public access block</li>
        </ul>
      </section>

      <section>
        <h2>tfsec et Terrascan : complémentaires à Checkov</h2>
        <h3>tfsec (Aqua Security)</h3>
        <p>
          tfsec est spécialisé Terraform avec une vitesse d'exécution très rapide. Ses points forts :
        </p>
        <ul>
          <li>Analyse statique des fichiers `.tf` sans state file ni provider credentials</li>
          <li>Détection des modules Terraform avec leurs variables pour réduire les faux positifs</li>
          <li>Règles personnalisées en REGO (OPA) ou en format natif tfsec</li>
          <li>Output SARIF compatible avec GitHub Advanced Security pour les annotations dans les PRs</li>
        </ul>
        <h3>Terrascan (Tenable)</h3>
        <p>
          Terrascan supporte Terraform, Helm, Kubernetes, Dockerfile et CloudFormation avec 500+ règles. Sa particularité est sa gestion avancée des politiques OPA/Rego :
        </p>
        <ul>
          <li>Policy as Code en Rego pour des règles d'entreprise personnalisées</li>
          <li>Intégration avec les registres OCI pour scanner les charts Helm</li>
          <li>Mode serveur pour une intégration dans les pipelines CI/CD via API</li>
        </ul>
        <h3>Recommandation : utiliser plusieurs outils</h3>
        <p>
          Checkov, tfsec et Terrascan ne détectent pas exactement les mêmes problèmes. La combinaison Checkov + tfsec dans la CI/CD offre le meilleur rapport couverture/performance.
        </p>
      </section>

      <section>
        <h2>Intégration dans la CI/CD GitHub Actions</h2>
        <p>
          L'intégration des scanners IaC dans GitHub Actions permet de bloquer les PRs contenant des mauvaises configurations avant merge. Un workflow typique :
        </p>
        <ul>
          <li><strong>Trigger :</strong> sur chaque PR modifiant des fichiers `.tf`</li>
          <li><strong>Checkov :</strong> scan avec `bridgecrewio/checkov-action@master`, seuil de sévérité configurable</li>
          <li><strong>tfsec :</strong> `aquasecurity/tfsec-action@v1.0.0` avec output SARIF vers GitHub Security</li>
          <li><strong>Terraform plan :</strong> génération du plan et commentaire automatique dans la PR avec les changements d'infrastructure</li>
          <li><strong>Infracost :</strong> estimation du coût des changements d'infrastructure (optionnel)</li>
          <li><strong>Blocage :</strong> statut de check GitHub bloquant le merge si des violations CRITICAL sont trouvées</li>
        </ul>
      </section>

      <section>
        <h2>Sécurité du state file Terraform</h2>
        <p>
          Le state file Terraform (`terraform.tfstate`) contient des secrets en clair (mots de passe RDS, clés de chiffrement, outputs sensibles). Sa sécurisation est critique :
        </p>
        <ul>
          <li><strong>Remote state uniquement :</strong> ne jamais commiter le state file dans Git. Utiliser S3 + DynamoDB (AWS), GCS (GCP) ou Azure Blob avec state locking</li>
          <li><strong>Chiffrement côté serveur :</strong> activer SSE-KMS sur le bucket S3 contenant le state</li>
          <li><strong>Accès limité :</strong> restreindre l'accès au state bucket aux seules pipelines CI/CD et aux administrateurs via des politiques IAM strictes</li>
          <li><strong>Audit des accès :</strong> activer CloudTrail sur le bucket state pour tracer tous les accès</li>
          <li><strong>Sensitive outputs :</strong> marquer les outputs contenant des secrets avec `sensitive = true` dans Terraform 0.14+</li>
        </ul>
      </section>

      <section>
        <h2>Gestion des secrets dans Terraform</h2>
        <p>
          Ne jamais mettre de secrets en clair dans le code Terraform. Les bonnes pratiques :
        </p>
        <ul>
          <li><strong>AWS Secrets Manager / Parameter Store :</strong> référencer les secrets via `data "aws_secretsmanager_secret_version"` plutôt que de les écrire en dur</li>
          <li><strong>HashiCorp Vault :</strong> provider Vault pour Terraform permettant de récupérer dynamiquement les secrets à l'apply</li>
          <li><strong>Variables d'environnement :</strong> passer les secrets via `TF_VAR_nom_variable` dans la CI/CD (jamais dans le code)</li>
          <li><strong>OIDC authentication :</strong> utiliser OIDC pour authentifier la CI/CD auprès d'AWS/Azure/GCP sans secrets statiques — voir l'article GitHub Actions security</li>
          <li><strong>detect-secrets / gitleaks :</strong> scanner le code Terraform pour détecter les secrets accidentellement commités avant le push</li>
        </ul>
      </section>

      <section>
        <h2>Policy as Code avec OPA/Rego</h2>
        <p>
          Pour les organisations avec des règles de sécurité spécifiques (ex. "tous les buckets S3 doivent avoir un tag `data-classification`", "aucune instance EC2 ne peut avoir une IP publique"), Open Policy Agent (OPA) avec Rego permet de coder ces politiques :
        </p>
        <ul>
          <li><strong>Conftest :</strong> outil CLI pour tester les plans Terraform contre des politiques Rego avant l'apply</li>
          <li><strong>Sentinel (Terraform Enterprise/Cloud) :</strong> framework de policy as code natif de HashiCorp pour Terraform</li>
          <li><strong>Checkov custom checks :</strong> écrire des règles Checkov en Python ou YAML pour des politiques d'entreprise</li>
          <li><strong>Guardrails :</strong> les politiques OPA peuvent être centralisées dans un dépôt "policy" et référencées par tous les projets Terraform</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          La sécurité IaC est indispensable pour maintenir une posture cloud sécurisée à l'échelle. En intégrant Checkov et tfsec dans votre CI/CD, vous détectez les mauvaises configurations avant qu'elles atteignent la production. La prochaine étape est d'ajouter un CSPM (Cloud Security Posture Management) pour surveiller en continu l'état de conformité de votre infrastructure déployée, en complément des contrôles préventifs IaC.
        </p>
      </section>
    </BlogLayout>
  );
};

export default TerraformSecuriteIac;
