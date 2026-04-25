import BlogLayout from "@/components/BlogLayout";
import { Link } from "react-router-dom";

const SecuriteApiOwaspGuide = () => {
  return (
    <BlogLayout
      title="Sécurité des API REST : guide OWASP API Top 10 pour 2026"
      description="Guide complet pour sécuriser vos API REST et GraphQL : OWASP API Security Top 10 2023, authentification OAuth2/JWT, rate limiting, gestion des autorisations, monitoring et bonnes pratiques DevSecOps."
      date="5 avril 2026"
      readTime="19 min"
      category="Sécurité Applicative"
    >
      <p className="lead">
        Les API représentent aujourd'hui <strong>plus de 83% du trafic web mondial</strong>{" "}
        selon Akamai (2024) et constituent la cible n°1 des cyberattaques.
        En 2023, Gartner estimait que les attaques d'API deviendraient le
        vecteur d'attaque le plus fréquent, devant le phishing. Voici le guide
        définitif pour sécuriser vos API REST et GraphQL en 2026.
      </p>

      <h2>1. Pourquoi les API sont devenues la cible n°1</h2>
      <p>
        Avec la généralisation des architectures microservices, du{" "}
        <Link to="/actualites/securite-serverless-guide" className="text-primary hover:underline">
          serverless
        </Link>{" "}
        et du mobile-first, les API exposent désormais directement la logique
        métier et les données sensibles. Les brèches récentes (T-Mobile 37M
        clients, Optus 9.8M, Twitter 5.4M comptes) ont toutes pour origine une
        API mal sécurisée.
      </p>
      <ul>
        <li><strong>Surface d'attaque massive</strong> : une entreprise gère en moyenne 15 000 API actives (Salt Security 2024).</li>
        <li><strong>Shadow API</strong> : 30% des API ne sont pas documentées et échappent aux contrôles.</li>
        <li><strong>Logique métier exposée</strong> : authentification, paiement, données personnelles directement accessibles.</li>
        <li><strong>Outils d'attaque automatisés</strong> : Postman, Burp Suite, scripts Python rendent l'exploitation triviale.</li>
      </ul>

      <h2>2. OWASP API Security Top 10 (édition 2023)</h2>
      <p>
        L'OWASP a publié en 2023 une nouvelle édition de son Top 10 spécifique
        aux API. Voici les 10 vulnérabilités à connaître absolument.
      </p>

      <h3>API1:2023 — Broken Object Level Authorization (BOLA)</h3>
      <p>
        N°1 du Top 10. Un utilisateur peut accéder aux objets d'un autre
        simplement en modifiant l'identifiant dans l'URL :
        <code>/api/orders/12345</code> → <code>/api/orders/12346</code>.
        Solution : vérifier systématiquement la propriété de l'objet côté
        serveur, jamais se fier à des IDs côté client.
      </p>

      <h3>API2:2023 — Broken Authentication</h3>
      <p>
        Tokens JWT mal validés, secrets faibles, absence de rotation, brute
        force possible. Imposer OAuth 2.0 + PKCE, JWT signés RS256, MFA
        obligatoire pour les API admin.
      </p>

      <h3>API3:2023 — Broken Object Property Level Authorization</h3>
      <p>
        Un utilisateur peut modifier des champs sensibles non autorisés
        (ex: <code>"role": "admin"</code> dans un PATCH). Utiliser des DTO
        explicites et le mass-assignment protection (Rails, Laravel, Spring).
      </p>

      <h3>API4:2023 — Unrestricted Resource Consumption</h3>
      <p>
        Pas de rate limiting → DDoS, scraping, explosion des coûts cloud.
        Mettre en place : rate limiting (100 req/min par IP), quotas par token,
        timeout, payload max 1MB.
      </p>

      <h3>API5:2023 — Broken Function Level Authorization</h3>
      <p>
        Endpoints admin (<code>/api/admin/users</code>) accessibles aux
        utilisateurs standards. Implémenter du RBAC strict, tester chaque
        endpoint avec différents rôles.
      </p>

      <h3>API6:2023 — Unrestricted Access to Sensitive Business Flows</h3>
      <p>
        Nouveau dans le Top 10. Exemple : achat illimité de billets de concert
        par bot. Mettre en place CAPTCHA, device fingerprinting, détection
        comportementale.
      </p>

      <h3>API7:2023 — Server Side Request Forgery (SSRF)</h3>
      <p>
        L'API accepte une URL fournie par l'utilisateur et la requête côté
        serveur (ex: import d'image distante) → accès au métadonnées EC2,
        scan réseau interne. Whitelister les domaines, bloquer les IP
        privées (169.254.169.254, 10.0.0.0/8).
      </p>

      <h3>API8:2023 — Security Misconfiguration</h3>
      <p>
        CORS trop permissif (<code>Access-Control-Allow-Origin: *</code>),
        headers de sécurité absents, debug activé en prod. Utiliser Helmet.js,
        scanner Nikto, configuration as code.
      </p>

      <h3>API9:2023 — Improper Inventory Management</h3>
      <p>
        Anciennes versions d'API (v1, v2 dépréciées) toujours en ligne et non
        patchées. Maintenir un inventaire (Postman, Swagger Hub), déprécier
        proprement avec sunset header.
      </p>

      <h3>API10:2023 — Unsafe Consumption of APIs</h3>
      <p>
        Confiance aveugle dans les API tierces (paiement, géoloc). Valider
        toutes les réponses, gérer les timeouts, ne jamais exposer
        directement les données externes.
      </p>

      <h2>3. Architecture sécurisée d'une API moderne</h2>
      <h3>3.1 Authentification : OAuth 2.0 + OIDC</h3>
      <p>
        Standard de facto. Flow recommandé :
      </p>
      <ul>
        <li><strong>Authorization Code + PKCE</strong> pour les apps web et mobiles.</li>
        <li><strong>Client Credentials</strong> pour la communication service-to-service.</li>
        <li><strong>Tokens JWT courts</strong> (15 min) + refresh tokens (7 jours).</li>
        <li>Providers recommandés : Auth0, Okta, AWS Cognito, Keycloak (open source).</li>
      </ul>

      <h3>3.2 API Gateway : la première ligne de défense</h3>
      <p>
        Toute API publique DOIT passer par une gateway centralisée :
      </p>
      <ul>
        <li><strong>AWS API Gateway / WAF</strong> : intégré, scalable.</li>
        <li><strong>Kong</strong> : open source, plugins riches.</li>
        <li><strong>Apigee (Google)</strong> : enterprise, analytics avancé.</li>
        <li><strong>Cloudflare API Shield</strong> : edge, anti-DDoS, ML.</li>
      </ul>
      <p>
        Fonctions clés : authentification, rate limiting, transformation,
        logging, schema validation OpenAPI.
      </p>

      <h3>3.3 Validation des entrées</h3>
      <p>
        Utiliser des schémas <strong>OpenAPI 3.1</strong> ou <strong>JSON
        Schema</strong> validés au runtime (Ajv, Zod, Pydantic). Refuser tout
        champ inattendu (<code>additionalProperties: false</code>).
      </p>

      <h2>4. Sécurité des API GraphQL</h2>
      <p>
        GraphQL apporte ses propres défis :
      </p>
      <ul>
        <li><strong>Query depth limiting</strong> : bloquer les requêtes trop profondes (max 10 niveaux).</li>
        <li><strong>Query complexity analysis</strong> : pondérer chaque champ pour éviter les requêtes coûteuses.</li>
        <li><strong>Désactiver l'introspection en production</strong> (révèle tout le schéma).</li>
        <li><strong>Persisted queries</strong> : seules les requêtes pré-approuvées sont autorisées.</li>
      </ul>

      <h2>5. Tests de sécurité d'API : la stack 2026</h2>
      <h3>5.1 SAST / DAST</h3>
      <ul>
        <li><strong>42Crunch</strong> : audit OpenAPI, scan continu.</li>
        <li><strong>StackHawk</strong> : DAST orienté API, intégration CI/CD.</li>
        <li><strong>Burp Suite Pro</strong> : référence pour les pentests manuels.</li>
        <li><strong>OWASP ZAP</strong> : open source, automatisable.</li>
      </ul>

      <h3>5.2 API Security Testing en CI/CD</h3>
      <p>
        Intégrer dans le pipeline (cf.{" "}
        <Link to="/actualites/devsecops-guide" className="text-primary hover:underline">
          guide DevSecOps
        </Link>{" "}
        ) :
      </p>
      <ul>
        <li>Validation du contrat OpenAPI à chaque PR.</li>
        <li>Tests d'autorisation automatisés (différents rôles).</li>
        <li>Fuzzing API avec RESTler ou Schemathesis.</li>
        <li>Scan secrets dans les specs (clés API hardcodées).</li>
      </ul>

      <h2>6. Monitoring et détection runtime</h2>
      <p>
        Une API sécurisée à la conception ne suffit pas. Il faut détecter les
        attaques en temps réel :
      </p>
      <ul>
        <li><strong>WAF nouvelle génération</strong> : Cloudflare, AWS WAF, F5 avec règles OWASP CRS.</li>
        <li><strong>API Security Platforms</strong> : Salt Security, Noname Security, Traceable AI.</li>
        <li><strong>Anomaly detection</strong> : ML pour détecter usages anormaux (volume, géoloc, séquences).</li>
        <li><strong>Logging structuré</strong> : tous les appels avec user_id, IP, latence dans un SIEM.</li>
      </ul>

      <h2>7. Checklist : 12 mesures prioritaires</h2>
      <ol>
        <li>Inventaire complet des API (Swagger/OpenAPI à jour).</li>
        <li>Authentification OAuth 2.0 + MFA pour les endpoints sensibles.</li>
        <li>Rate limiting global et par utilisateur.</li>
        <li>Validation stricte des inputs (schema OpenAPI au runtime).</li>
        <li>HTTPS obligatoire (TLS 1.3), HSTS activé.</li>
        <li>Headers de sécurité (CORS strict, CSP, X-Content-Type-Options).</li>
        <li>Logging exhaustif vers SIEM avec corrélation.</li>
        <li>Tests d'autorisation automatisés en CI/CD.</li>
        <li>Pentest API annuel par un cabinet certifié.</li>
        <li>Plan de rotation des clés API et tokens (max 90 jours).</li>
        <li>Monitoring des Shadow API via discovery automatique.</li>
        <li>Formation des développeurs au Secure Coding API.</li>
      </ol>

      <h2>8. Conclusion</h2>
      <p>
        La sécurité des API n'est plus une option : elle conditionne la
        survie business. Une approche structurée — OAuth, gateway, validation,
        monitoring — combinée à la culture DevSecOps réduit drastiquement le
        risque. Chez CloudSecure, nous auditons votre exposition API,
        détectons le Shadow IT et formons vos équipes aux bonnes pratiques
        OWASP. Articles complémentaires :{" "}
        <Link to="/actualites/devsecops-guide" className="text-primary hover:underline">DevSecOps</Link>,{" "}
        <Link to="/actualites/zero-trust-architecture-guide" className="text-primary hover:underline">Zero Trust</Link>,{" "}
        <Link to="/actualites/pentest-entreprise-guide" className="text-primary hover:underline">Pentest entreprise</Link>.
      </p>
    </BlogLayout>
  );
};

export default SecuriteApiOwaspGuide;
