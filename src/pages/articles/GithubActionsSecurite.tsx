import BlogLayout from "@/components/BlogLayout";

const GithubActionsSecurite = () => {
  return (
    <BlogLayout
      title="GitHub Actions security : OIDC, permissions et protection de la supply chain CI/CD"
      description="Sécuriser vos GitHub Actions : OIDC pour les credentials cloud sans secrets statiques, permissions minimales, protection supply chain (SLSA), scanning des actions tierces et branch protection."
      date="29 juin 2026"
      readTime="13 min"
      category="CI/CD Security"
    >
      <section>
        <h2>Pourquoi GitHub Actions est une cible privilégiée</h2>
        <p>
          GitHub Actions est devenu l'outil CI/CD dominant, mais sa popularité en fait une cible de choix. Depuis 2022, les incidents de sécurité liés aux pipelines CI/CD se sont multipliés : actions tierces malveillantes, secrets volés dans les logs, injections de commandes via des inputs non sanitisés. L'affaire CodeCov (2021) a montré comment un script de couverture de code compromis pouvait voler les secrets CI/CD de 29 000 entreprises, dont HashiCorp, Twilio et GitHub lui-même.
        </p>
        <h3>Les vecteurs d'attaque sur GitHub Actions</h3>
        <ul>
          <li><strong>Secrets exposés dans les logs :</strong> afficher accidentellement `echo $AWS_SECRET_KEY` dans les logs du workflow, visibles publiquement dans les repos publics</li>
          <li><strong>Injection via `${{ github.event.pull_request.head.ref }}` :</strong> inputs non sanitisés dans les expressions GitHub permettant l'injection de commandes shell</li>
          <li><strong>Actions tierces compromises :</strong> une action `uses: some-org/some-action@v2` exécute du code tiers avec accès à tous vos secrets et tokens</li>
          <li><strong>Permissions GITHUB_TOKEN excessives :</strong> le token GitHub par défaut peut avoir les droits d'écriture sur le repo, permettant l'injection de code malveillant</li>
          <li><strong>Workflow déclenchés par des PRs de forks :</strong> des contributeurs malveillants peuvent tenter d'exfiltrer des secrets via des workflows `pull_request`</li>
        </ul>
      </section>

      <section>
        <h2>OIDC : éliminer les secrets statiques AWS/Azure/GCP</h2>
        <p>
          OpenID Connect (OIDC) permet à GitHub Actions de s'authentifier auprès des providers cloud (AWS, Azure, GCP) sans stocker de credentials long-lived. C'est la pratique recommandée pour tout déploiement cloud depuis une CI/CD.
        </p>
        <h3>Comment fonctionne OIDC pour GitHub Actions</h3>
        <p>
          Lors de l'exécution d'un workflow, GitHub génère un JWT signé contenant des claims sur le workflow (repo, branch, environment, actor). AWS, Azure ou GCP vérifient ce token auprès de GitHub et accordent un accès temporaire (15 minutes) via un rôle IAM configuré.
        </p>
        <ul>
          <li><strong>AWS :</strong> configurer un Identity Provider OIDC dans IAM pointant vers token.actions.githubusercontent.com, puis créer un rôle IAM avec la condition sur le repo/branch/environment</li>
          <li><strong>Azure :</strong> créer une Federated Credential sur l'App Registration Azure AD avec la configuration du repo GitHub</li>
          <li><strong>GCP :</strong> configurer Workload Identity Federation avec le provider GitHub OIDC</li>
          <li><strong>Avantage clé :</strong> les credentials expirent après 15 minutes, ne sont jamais stockés dans GitHub Secrets, et sont auditables via CloudTrail/Azure Monitor</li>
        </ul>
        <h3>Workflow GitHub Actions avec OIDC (AWS)</h3>
        <ul>
          <li>Permission `id-token: write` requise dans le workflow pour demander le JWT OIDC</li>
          <li>Action `aws-actions/configure-aws-credentials` avec `role-to-assume` et `aws-region`</li>
          <li>La condition IAM peut être restreinte au repo, à la branch, ou à un GitHub Environment (ex. `production`)</li>
          <li>Combiner avec des GitHub Environments pour avoir des approbations manuelles avant les déploiements en production</li>
        </ul>
      </section>

      <section>
        <h2>Permissions minimales : GITHUB_TOKEN et permissions: block</h2>
        <p>
          Par défaut, `GITHUB_TOKEN` a des permissions de lecture sur le repo et d'écriture sur les packages. En 2022, GitHub a changé le défaut à `read-all` pour les nouvelles organisations — mais il faut vérifier et configurer explicitement les permissions.
        </p>
        <ul>
          <li><strong>Principe du moindre privilège :</strong> déclarer `permissions: {}` au niveau du job (lève toutes les permissions) et ne ré-accorder que ce qui est nécessaire</li>
          <li><strong>Lecture seule par défaut :</strong> au niveau de l'organisation, définir le GITHUB_TOKEN à `read` par défaut dans les settings</li>
          <li><strong>Permissions granulaires :</strong> `contents: read`, `pull-requests: write`, `id-token: write` — ne jamais mettre `permissions: write-all`</li>
          <li><strong>Séparer les jobs :</strong> un job de build (permissions read) et un job de deploy (permissions write) évite de donner des permissions write au code de build</li>
        </ul>
      </section>

      <section>
        <h2>Sécuriser les actions tierces : pin sur SHA</h2>
        <p>
          `uses: actions/checkout@v4` fait confiance au tag `v4` qui peut pointer vers n'importe quel commit. Un attaquant contrôlant le repo de l'action peut modifier le code sans changer le tag. La solution : pin les actions sur leur SHA de commit exact.
        </p>
        <ul>
          <li><strong>Pin sur SHA :</strong> `uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683` (SHA immuable)</li>
          <li><strong>Outil Ratchet (Sethvargo) :</strong> automatise la conversion des tags vers des SHA dans les workflows YAML</li>
          <li><strong>Dependabot pour Actions :</strong> activer Dependabot dans `.github/dependabot.yml` avec `package-ecosystem: github-actions` pour des mises à jour automatiques des SHA</li>
          <li><strong>Audit des actions autorisées :</strong> dans les settings d'organisation, limiter les actions aux actions GitHub officielles et aux actions de confiance listées</li>
          <li><strong>Policy : pas d'actions non vérifiées :</strong> interdire l'utilisation d'actions provenant de repos publics non vérifiés dans les workflows sensibles (déploiement en production)</li>
        </ul>
      </section>

      <section>
        <h2>SLSA : sécurité de la supply chain logicielle</h2>
        <p>
          SLSA (Supply Chain Levels for Software Artifacts) est un framework Google définissant des niveaux de sécurité pour la chaîne d'approvisionnement logicielle. GitHub Actions peut aider à atteindre SLSA niveau 3 :
        </p>
        <ul>
          <li><strong>SLSA niveau 1 :</strong> provenance documentée (quel code a produit quel artefact) — GitHub Actions génère automatiquement les attestations SLSA</li>
          <li><strong>SLSA niveau 2 :</strong> hébergé CI/CD (GitHub Actions est un CI/CD hébergé) + provenance signée</li>
          <li><strong>SLSA niveau 3 :</strong> builder sécurisé avec isolation des jobs, provenance non altérable. GitHub Artifact Attestations permet de signer les artefacts produits par les workflows</li>
          <li><strong>Sigstore / Cosign :</strong> signer les images Docker et les binaires produits par la CI/CD pour permettre leur vérification cryptographique lors du déploiement</li>
          <li><strong>SBOM automatique :</strong> générer un Software Bill of Materials à chaque build pour tracer toutes les dépendances</li>
        </ul>
      </section>

      <section>
        <h2>Branch protection et environments</h2>
        <p>
          Les règles de protection des branches et les environments GitHub ajoutent des contrôles de gouvernance sur les déploiements :
        </p>
        <ul>
          <li><strong>Branch protection rules :</strong> requérir des reviews sur les PRs avant merge sur `main`, interdire les force push, requérir des status checks (CI verte)</li>
          <li><strong>GitHub Environments :</strong> créer des environments (`staging`, `production`) avec des secrets spécifiques à chaque environment et des règles d'approbation</li>
          <li><strong>Required reviewers :</strong> déploiement en production nécessitant l'approbation manuelle d'un ou plusieurs reviewers désignés</li>
          <li><strong>Deployment branches :</strong> limiter quelles branches peuvent déployer dans quel environment (seule `main` peut déployer en production)</li>
          <li><strong>Wait timer :</strong> ajouter un délai avant le déploiement en production pour permettre l'annulation en cas d'erreur détectée post-merge</li>
        </ul>
      </section>

      <section>
        <h2>Scanning de sécurité dans les workflows</h2>
        <ul>
          <li><strong>Secrets scanning :</strong> activer GitHub Advanced Security pour détecter automatiquement les secrets commités (clés API, tokens, mots de passe)</li>
          <li><strong>Code scanning (CodeQL) :</strong> analyse statique du code source dans chaque PR pour détecter les vulnérabilités SAST</li>
          <li><strong>Dependency scanning :</strong> Dependabot Alerts pour les dépendances vulnérables (CVE dans package.json, requirements.txt, pom.xml)</li>
          <li><strong>Container scanning :</strong> Trivy ou Grype pour scanner les images Docker produites par la CI/CD avant le push vers le registry</li>
          <li><strong>IaC scanning :</strong> Checkov ou tfsec pour scanner les fichiers Terraform/CloudFormation dans les workflows de déploiement</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          GitHub Actions est un vecteur d'attaque de plus en plus ciblé. L'adoption de l'OIDC pour éliminer les secrets statiques, le pin des actions sur SHA, et la configuration des permissions minimales constituent les mesures prioritaires. Les GitHub Environments avec des approbations manuelles ajoutent une couche de gouvernance sur les déploiements en production. Mis ensemble, ces contrôles permettent d'atteindre un niveau SLSA 2-3 et de réduire significativement le risque d'attaque supply chain via votre CI/CD.
        </p>
      </section>
    </BlogLayout>
  );
};

export default GithubActionsSecurite;
