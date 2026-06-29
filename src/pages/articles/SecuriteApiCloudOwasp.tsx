import BlogLayout from "@/components/BlogLayout";

const SecuriteApiCloudOwasp = () => (
  <BlogLayout
    title="Sécurité des API cloud : OWASP API Top 10 et bonnes pratiques AWS, Azure, GCP"
    description="Guide complet sécurité API cloud : OWASP API Security Top 10 2023, authentification OAuth2/OIDC, rate limiting, API Gateway AWS/Azure/Kong, tests de sécurité et monitoring des API en production."
    date="28 juin 2026"
    readTime="13 min"
    category="Architecture Sécurisée"
  >
    <p>
      Les API sont le système nerveux des architectures cloud modernes. Chaque microservice, chaque intégration SaaS, chaque application mobile communique via des API REST ou GraphQL. Et les attaquants le savent : selon l'OWASP, les vulnérabilités API représentent aujourd'hui le vecteur d'attaque le plus exploité dans les environnements cloud. Ce guide vous donne les bases pour sécuriser vos API dans AWS, Azure et GCP.
    </p>

    <h2>OWASP API Security Top 10 2023 : les vulnérabilités à connaître</h2>
    <p>
      L'OWASP a publié en 2023 sa liste des 10 risques de sécurité API les plus critiques. Pour les architectures cloud, ces vulnérabilités ont des implications spécifiques.
    </p>

    <h3>API1:2023 — Broken Object Level Authorization (BOLA)</h3>
    <p>
      La vulnérabilité la plus répandue et la plus impactante. Un endpoint comme <code>GET /api/orders/{'{orderId}'}</code> renvoie des données sans vérifier que l'utilisateur authentifié est bien propriétaire de cette commande. Un attaquant incrémente <code>orderId</code> et accède aux commandes de tous les autres utilisateurs.
    </p>
    <p>
      <strong>Dans le cloud :</strong> Cette vulnérabilité est particulièrement dangereuse avec les Serverless (Lambda, Azure Functions, Cloud Functions) car chaque fonction tend à être développée indépendamment, sans framework d'autorisation cohérent. <strong>Solution :</strong> Vérifiez systématiquement dans chaque endpoint que l'objet demandé appartient à l'utilisateur connecté. Ne faites jamais confiance au paramètre d'URL seul.
    </p>

    <h3>API2:2023 — Broken Authentication</h3>
    <p>
      Mécanismes d'authentification défaillants : tokens JWT mal vérifiés (algorithme "none", secret faible), sessions sans expiration, endpoints d'authentification sans rate limiting (brute force), tokens stockés côté client sans protection.
    </p>
    <p>
      <strong>Dans le cloud :</strong> Utilisez les services d'identité managés (AWS Cognito, Azure AD B2C, Google Identity Platform) plutôt que d'implémenter votre propre authentification. Configurez une durée d'expiration courte des tokens (15 min pour les access tokens, refresh token rotatif). Activez le rate limiting sur les endpoints d'authentification via API Gateway.
    </p>

    <h3>API3:2023 — Broken Object Property Level Authorization</h3>
    <p>
      L'API renvoie ou accepte plus de propriétés que nécessaire. Exemple : <code>GET /api/users/{'{id}'}</code> renvoie l'objet complet incluant le hash du mot de passe ou le numéro de carte bancaire. Ou : <code>PUT /api/users/{'{id}'}</code> accepte une propriété <code>isAdmin: true</code> dans le corps.
    </p>
    <p>
      <strong>Solution :</strong> Implémentez des DTOs (Data Transfer Objects) stricts en entrée et en sortie. Ne sérialisez jamais directement vos objets de base de données. Utilisez des bibliothèques de validation (Joi, Zod, Pydantic) avec des schémas explicites pour chaque endpoint.
    </p>

    <h3>API5:2023 — Broken Function Level Authorization (BFLA)</h3>
    <p>
      Des endpoints d'administration (DELETE /api/users/bulk, GET /api/admin/logs) sont accessibles par des utilisateurs non administrateurs. Souvent lié à une confiance dans l'obscurité ("l'interface utilisateur n'affiche pas ce bouton, donc c'est sécurisé").
    </p>
    <p>
      <strong>Dans le cloud :</strong> Chaque route d'API doit avoir une vérification d'autorisation explicite basée sur des rôles (RBAC) ou des permissions. Utilisez des middlewares d'autorisation centralisés. Dans AWS API Gateway, configurez des Authorizers Lambda pour chaque route sensible.
    </p>

    <h2>Sécuriser les API avec les services cloud natifs</h2>

    <h3>AWS API Gateway</h3>
    <p>
      AWS API Gateway offre plusieurs mécanismes de sécurité natifs à activer :
    </p>
    <ul>
      <li><strong>Authorizer Lambda :</strong> Fonction Lambda qui valide chaque token JWT avant de router la requête vers le backend. Permet une logique d'autorisation centralisée et réutilisable</li>
      <li><strong>Cognito User Pools Authorizer :</strong> Validation automatique des tokens JWT Cognito sans code supplémentaire</li>
      <li><strong>WAF (Web Application Firewall) :</strong> Règles de filtrage OWASP, rate limiting par IP, protection contre les injections SQL et XSS</li>
      <li><strong>Throttling :</strong> Rate limiting par clé API ou par endpoint (évite les attaques DDoS et le brute force)</li>
      <li><strong>Mutual TLS (mTLS) :</strong> Pour les API B2B, impose aux clients de présenter un certificat client valide</li>
      <li><strong>Resource Policies :</strong> Restrictions d'accès par VPC, par IP source, par compte AWS</li>
    </ul>

    <h3>Azure API Management (APIM)</h3>
    <p>
      APIM est la solution de gateway API d'Azure, avec des fonctionnalités de sécurité intégrées :
    </p>
    <ul>
      <li><strong>Politiques d'authentification :</strong> Validation JWT, clés d'abonnement (Ocp-Apim-Subscription-Key), OAuth2 avec Azure AD</li>
      <li><strong>Rate limiting par politiques :</strong> <code>rate-limit-by-key</code> et <code>quota-by-key</code> pour limiter les appels par client</li>
      <li><strong>Azure Defender for APIs :</strong> Détection des anomalies comportementales sur les APIs (appels inhabituels, tentatives d'exploration)</li>
      <li><strong>IP filtering :</strong> Listes blanches/noires d'adresses IP en entrée</li>
    </ul>

    <h3>GCP Cloud Endpoints / Apigee</h3>
    <p>
      Google propose deux solutions API gateway selon la complexité : Cloud Endpoints (plus simple, intégré à GKE) et Apigee (enterprise, avec analytics avancés). Les deux supportent la validation OpenAPI, l'authentification Google Identity et le rate limiting.
    </p>

    <h2>Authentification OAuth2 et OIDC : bonnes pratiques cloud</h2>
    <p>
      OAuth2/OIDC sont les standards d'authentification API en environnement cloud. Les erreurs de configuration les plus fréquentes :
    </p>
    <ul>
      <li><strong>Clés JWT avec algorithme "none" ou HS256 avec secret faible :</strong> Utilisez RS256 (asymétrique) avec des clés de 2048 bits minimum. Validez toujours l'algorithme côté serveur.</li>
      <li><strong>Durée de vie trop longue des access tokens :</strong> 15 minutes pour les access tokens, 30 jours pour les refresh tokens. Implémentez la rotation des refresh tokens (un refresh token ne s'utilise qu'une seule fois).</li>
      <li><strong>Manque de validation des claims :</strong> Vérifiez toujours <code>iss</code> (émetteur), <code>aud</code> (audience), <code>exp</code> (expiration) et <code>sub</code> (sujet) côté serveur.</li>
      <li><strong>Tokens stockés en localStorage :</strong> Utilisez httpOnly cookies pour les tokens côté navigateur. Le localStorage est accessible par JavaScript et donc vulnérable aux attaques XSS.</li>
    </ul>

    <h2>Monitoring et détection des attaques API</h2>
    <p>
      Un SOC API doit surveiller les signaux suivants :
    </p>
    <ul>
      <li><strong>Exploration de ressources :</strong> Un utilisateur qui incrémente des IDs (orderId=1, 2, 3, …) cherche probablement des vulnérabilités BOLA</li>
      <li><strong>Volume d'appels anormal :</strong> Un client qui appelle 1 000 fois par minute un endpoint d'authentification fait du brute force</li>
      <li><strong>Erreurs 4xx massives :</strong> Beaucoup d'erreurs 403 ou 404 sur des endpoints inhabituels indiquent une phase de reconnaissance</li>
      <li><strong>Taux d'erreur sur des endpoints spécifiques :</strong> Des pics d'erreurs sur un endpoint précis peuvent indiquer un test de vulnérabilité</li>
    </ul>
    <p>
      Les outils de monitoring API cloud : AWS X-Ray + CloudWatch Logs Insights, Azure Monitor + Application Insights, Datadog APM, Elastic APM. Pour la détection des attaques spécifiques aux API, des solutions spécialisées comme Salt Security, Noname Security ou Traceable AI sont disponibles.
    </p>

    <h2>Tests de sécurité des API : DAST et fuzzing</h2>
    <p>
      Intégrez les tests de sécurité API dans votre pipeline CI/CD :
    </p>
    <ul>
      <li><strong>OWASP ZAP :</strong> Scanner automatique open source, intégrable dans GitHub Actions ou GitLab CI. Teste automatiquement les vulnérabilités OWASP API Top 10 sur votre spec OpenAPI</li>
      <li><strong>Burp Suite :</strong> Solution professionnelle pour les pentests manuels et semi-automatiques des API</li>
      <li><strong>RESTler :</strong> Outil de fuzzing intelligent de Microsoft Research, génère automatiquement des séquences d'appels API valides et cherche des comportements inattendus</li>
      <li><strong>Postman + Newman :</strong> Automatisez vos tests de sécurité fonctionnels (collections Postman exécutées dans CI avec Newman)</li>
    </ul>

    <div className="info-box">
      <h4>Audit de sécurité de vos API cloud</h4>
      <p>CloudSecure réalise des audits de sécurité des API REST et GraphQL dans les environnements AWS, Azure et GCP : revue de l'architecture d'authentification (OAuth2/JWT), tests OWASP API Top 10, configuration API Gateway, monitoring et détection des attaques. Devis gratuit sous 24h.</p>
    </div>
  </BlogLayout>
);

export default SecuriteApiCloudOwasp;
