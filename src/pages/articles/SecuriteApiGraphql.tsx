import BlogLayout from "@/components/BlogLayout";

const SecuriteApiGraphql = () => {
  return (
    <BlogLayout
      title="Sécurité des API GraphQL : introspection, injections et bonnes pratiques"
      description="Sécuriser les API GraphQL : désactiver l'introspection en production, limiter la profondeur et la complexité des requêtes, persisted queries, authentification, et prévention des injections."
      date="29 juin 2026"
      readTime="12 min"
      category="API Security"
    >
      <section>
        <h2>GraphQL : pourquoi les vulnérabilités sont différentes</h2>
        <p>
          GraphQL est fondamentalement différent des API REST du point de vue de la sécurité. Avec REST, chaque endpoint expose une ressource limitée. Avec GraphQL, un seul endpoint expose potentiellement toute votre surface de données via un langage de requête flexible. Cette flexibilité est une arme à double tranchant : elle simplifie le développement mais crée des vecteurs d'attaque absents dans les API REST classiques.
        </p>
        <h3>Attaques spécifiques à GraphQL</h3>
        <ul>
          <li><strong>Introspection pour la reconnaissance :</strong> GraphQL permet à n'importe quel client de découvrir la totalité du schéma (types, champs, mutations, relations). Exposée en production, elle donne à l'attaquant une cartographie complète de vos données.</li>
          <li><strong>Batching attacks :</strong> une seule requête GraphQL peut contenir des dizaines d'opérations (batch). Un attaquant peut faire 1000 tentatives de mot de passe en une seule requête HTTP, contournant les rate limiters basés sur le nombre de requêtes.</li>
          <li><strong>Nested queries (attaque N+1 malveillante) :</strong> une requête profondément imbriquée peut générer des milliers de requêtes SQL côté serveur, provoquant un DoS applicatif.</li>
          <li><strong>Field suggestions :</strong> GraphQL retourne des suggestions pour les champs mal orthographiés (`Did you mean: password?`) — révèle des champs sensibles même sans introspection.</li>
          <li><strong>IDOR via GraphQL :</strong> comme dans les API REST, accéder aux objets d'autres utilisateurs en changeant les arguments ID dans les requêtes.</li>
          <li><strong>Injections via les arguments :</strong> injection SQL, NoSQL ou commande via les arguments des queries/mutations si non sanitisés.</li>
        </ul>
      </section>

      <section>
        <h2>Désactiver l'introspection en production</h2>
        <p>
          L'introspection GraphQL est un outil puissant pour les développeurs — elle permet aux IDE et aux clients de découvrir le schéma. Mais en production, elle offre à un attaquant une carte détaillée de toutes vos données.
        </p>
        <h3>Désactivation par framework</h3>
        <ul>
          <li><strong>Apollo Server :</strong> configurer `introspection: false` dans les options du serveur en production (`NODE_ENV === 'production'`). Apollo Studio Sandbox reste accessible avec un endpoint dédié si nécessaire.</li>
          <li><strong>GraphQL-yoga / Pothos / Nexus :</strong> option `disableIntrospection` dans la configuration du serveur</li>
          <li><strong>Hasura :</strong> désactiver l'introspection via la variable d'environnement `HASURA_GRAPHQL_ENABLE_INTROSPECTION=false`</li>
          <li><strong>Alternative :</strong> restreindre l'introspection par IP (uniquement depuis le réseau interne ou les IPs de développement) plutôt que de la désactiver complètement</li>
        </ul>
        <h3>Field Suggestions</h3>
        <ul>
          <li>Même sans introspection, GraphQL peut révéler des champs sensibles via les suggestions. Désactiver les suggestions ou les masquer en production.</li>
          <li>Apollo Server : utiliser le plugin `@graphql-armor/remove-field-suggestion` ou configurer les options d'erreur pour masquer les suggestions</li>
          <li>Tester avec des requêtes malformées intentionnellement : {'`{ passw }`'} → si la réponse contient "Did you mean: password?", les suggestions sont actives</li>
        </ul>
      </section>

      <section>
        <h2>Limiter la profondeur et la complexité</h2>
        <p>
          Sans limites, un attaquant peut envoyer des requêtes GraphQL exponentiellement coûteuses. Un schéma avec des relations récursives peut générer des requêtes qui consomment toute la mémoire du serveur.
        </p>
        <h3>Depth limiting</h3>
        <ul>
          <li>Limiter la profondeur maximale des requêtes : une requête `user → posts → comments → author → posts → comments → ...` à 10 niveaux de profondeur peut générer des millions de requêtes SQL.</li>
          <li><strong>graphql-depth-limit :</strong> middleware pour Apollo et Express limitant la profondeur maximale des requêtes. Configurer à 5-10 niveaux selon votre schéma.</li>
          <li><strong>@graphql-armor :</strong> suite complète de protections pour Apollo/Yoga incluant depth limit, complexity limit, et protection contre les alias attacks</li>
        </ul>
        <h3>Query complexity</h3>
        <ul>
          <li>Attribuer un coût à chaque field et opération, rejeter les requêtes dépassant un budget de complexité total</li>
          <li><strong>graphql-query-complexity :</strong> calcule la complexité d'une requête avant son exécution. Configurer des poids par type de field (champs simples vs relations).</li>
          <li>La complexité est plus précise que la profondeur : une requête peu profonde mais très large (100 fields) peut être plus coûteuse qu'une requête profonde mais étroite</li>
        </ul>
        <h3>Timeout d'exécution</h3>
        <ul>
          <li>Configurer un timeout d'exécution global (ex. 5-10 secondes) pour les requêtes GraphQL — arrêter l'exécution des queries trop lentes</li>
          <li>Combiner avec une limite de payload (taille maximale du body HTTP) pour éviter les requêtes massives</li>
        </ul>
      </section>

      <section>
        <h2>Persisted Queries : whitelist de requêtes</h2>
        <p>
          Les Persisted Queries (aussi appelées Trusted Documents) permettent de n'accepter que les requêtes GraphQL pré-enregistrées par votre application. C'est l'équivalent d'une whitelist d'opérations.
        </p>
        <ul>
          <li><strong>Principe :</strong> au build de l'application cliente, hasher toutes les opérations GraphQL (SHA-256). En production, le client envoie uniquement le hash et les variables — le serveur retrouve la requête correspondante dans son store.</li>
          <li><strong>Apollo Persisted Queries :</strong> `@apollo/client` + `createPersistedQueryLink` côté client, APQ middleware côté serveur. Côté cache CDN, permet aussi de cacher les requêtes GET GraphQL.</li>
          <li><strong>Avantages sécurité :</strong> un attaquant ne peut envoyer que les requêtes déjà autorisées — impossible d'envoyer des requêtes de reconnaissance, des nested queries malveillantes ou des introspections.</li>
          <li><strong>Limitation :</strong> ne fonctionne que si vous contrôlez tous les clients. Pour les APIs publiques (third-party), les persisted queries ne peuvent pas être imposées.</li>
          <li><strong>Trusted Documents (GraphQL Yoga) :</strong> alternative aux APQ avec une liste blanche explicite des opérations autorisées — plus strict que les APQ car le fallback avec la requête complète est désactivé.</li>
        </ul>
      </section>

      <section>
        <h2>Authentification et autorisation</h2>
        <ul>
          <li><strong>Authentification au niveau HTTP :</strong> valider le JWT ou le token de session avant d'atteindre le résolveur GraphQL — ne pas confier l'authentification aux résolveurs individuels</li>
          <li><strong>Autorisation field-level :</strong> chaque field sensible doit vérifier les permissions de l'utilisateur courant. Utiliser des directives `@auth` personnalisées ou des librairies comme `graphql-shield` pour la gestion des permissions centralisée.</li>
          <li><strong>Context d'authentification :</strong> injecter l'utilisateur authentifié dans le context GraphQL au niveau du middleware — accessible dans tous les résolveurs sans requête DB supplémentaire</li>
          <li><strong>Rate limiting par opération :</strong> un rate limiter HTTP classique est contournable avec le batching GraphQL. Utiliser un rate limiter GraphQL-aware (par opération et par complexité) comme `graphql-rate-limit`</li>
          <li><strong>Logs d'audit :</strong> logger chaque opération GraphQL avec l'utilisateur, les variables (en masquant les données sensibles), et le résultat pour les investigations forensiques</li>
        </ul>
      </section>

      <section>
        <h2>Prévention des injections</h2>
        <ul>
          <li><strong>Paramètres typés :</strong> GraphQL force la déclaration des types des arguments — utiliser des scalars personnalisés (email, URL, UUID) pour valider le format dès la couche GraphQL</li>
          <li><strong>ORM et requêtes paramétrées :</strong> ne jamais construire des requêtes SQL par concaténation dans les résolveurs. Utiliser un ORM (Prisma, TypeORM) ou des requêtes préparées.</li>
          <li><strong>Validation des inputs :</strong> valider et assainir les arguments dans les résolveurs avant de les passer aux couches de données (longueur maximale, caractères autorisés, regex)</li>
          <li><strong>NoSQL Injection :</strong> si vous utilisez MongoDB, protéger contre les injections via les opérateurs MongoDB (`$where`, `$regex`) dans les arguments GraphQL</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Sécuriser une API GraphQL demande des mesures spécifiques absentes dans le toolkit REST classique. La priorité : désactiver l'introspection en production, configurer des limites de profondeur et complexité, et implémenter les persisted queries pour les clients connus. Compléter avec une autorisation field-level rigoureuse et un rate limiting GraphQL-aware. Ces mesures combinées couvrent la quasi-totalité des vecteurs d'attaque spécifiques à GraphQL.
        </p>
      </section>
    </BlogLayout>
  );
};

export default SecuriteApiGraphql;
