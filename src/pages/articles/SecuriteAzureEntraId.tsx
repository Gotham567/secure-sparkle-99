import BlogLayout from "@/components/BlogLayout";

const SecuriteAzureEntraId = () => {
  return (
    <BlogLayout
      title="Sécurité Azure Entra ID (Active Directory) : guide complet 2026"
      description="Sécuriser Azure Entra ID : Conditional Access, PIM, Identity Protection, MFA, rôles RBAC, audit des droits et protection contre les attaques sur les identités cloud."
      date="14 juin 2026"
      readTime="14 min"
      category="Azure"
    >
      <p>
        Azure Entra ID (anciennement Azure Active Directory) est le service d'identité cloud de Microsoft, utilisé par plus de 600 millions d'utilisateurs dans le monde. Pour les entreprises utilisant Microsoft 365, Azure ou des applications SaaS modernes, Entra ID est le pivot central de l'authentification et des autorisations. C'est donc aussi une cible de choix pour les attaquants : la compromission d'un compte Entra ID peut ouvrir l'accès à toutes les ressources cloud de l'organisation. Ce guide couvre les mesures essentielles pour sécuriser votre tenant Entra ID.
      </p>

      <h2>Les attaques les plus fréquentes sur Entra ID</h2>

      <h3>Password Spray et credential stuffing</h3>
      <p>
        Les attaques par password spray consistent à tester un même mot de passe faible (Printemps2026!, Bienvenue1) contre des milliers de comptes pour éviter les politiques de verrouillage. Le credential stuffing exploite des identifiants volés lors de fuites de données de sites tiers. Ces deux techniques sont particulièrement efficaces sur les tenants sans MFA. La solution : MFA obligatoire sur tous les comptes et activation de la Smart Lockout d'Entra ID.
      </p>

      <h3>Adversary-in-the-Middle (AiTM)</h3>
      <p>
        Les attaques AiTM (comme EvilGinx) interceptent le token de session après une authentification MFA légitime, permettant à l'attaquant de rejouer ce token sans connaître le mot de passe ni disposer du second facteur. Cette technique contourne le MFA classique (SMS, TOTP). La protection : utiliser l'authentification FIDO2 (clés de sécurité physiques) ou le Compliant Device Conditional Access, qui vérifie que l'appareil est géré et conforme via Intune.
      </p>

      <h3>Abus de consentement OAuth</h3>
      <p>
        Les attaques de "consent phishing" consistent à tromper un utilisateur pour qu'il accorde des permissions OAuth à une application malveillante (souvent imitant Microsoft Teams ou OneDrive). L'attaquant obtient ainsi un accès persistant aux données de l'utilisateur sans avoir besoin de son mot de passe. La protection : configurer la politique de consentement des utilisateurs pour n'autoriser que des applications vérifiées, activer l'examen des consentements admins.
      </p>

      <h2>Conditional Access : le pilier de la sécurité Entra ID</h2>

      <h3>Principes et fonctionnement</h3>
      <p>
        Le Conditional Access (Accès conditionnel) est le système de politique zero trust d'Entra ID. Il évalue chaque tentative d'authentification en fonction de conditions multiples (utilisateur, localisation, appareil, application) et applique des contrôles (MFA, blocage, limitation de session). C'est l'outil le plus puissant pour implémenter le Zero Trust dans un environnement Microsoft.
      </p>

      <h3>Politiques recommandées</h3>
      <p>
        Les politiques Conditional Access essentielles : bloquer l'authentification héritée (protocols comme POP3, IMAP, SMTP AUTH qui ne supportent pas le MFA) — cette seule politique bloque 99 % des attaques par password spray. Exiger le MFA pour tous les utilisateurs, avec renforcement (clé FIDO2 ou Windows Hello) pour les administrateurs. Exiger un appareil Intune-compliant pour accéder aux ressources sensibles. Bloquer les connexions depuis des pays non opérationnels. Activer la Sign-in Risk Policy (avec Microsoft Entra ID Protection) pour exiger le MFA ou bloquer en cas de connexion à risque élevé.
      </p>

      <h2>Privileged Identity Management (PIM)</h2>
      <p>
        Microsoft Entra PIM (Privileged Identity Management) permet d'implémenter le principe de just-in-time pour les rôles privilégiés. Au lieu d'attribuer en permanence le rôle Global Administrator ou Privileged Role Administrator, PIM permet de les activer temporairement (1 à 8 heures) sur demande, avec approbation optionnelle et MFA obligatoire. Les droits reviennent automatiquement à leur état nominal après l'expiration. C'est la mesure qui réduit le plus efficacement la fenêtre d'exposition en cas de compromission d'un compte admin.
      </p>
      <p>
        PIM fournit également un audit complet des activations de rôles (qui a demandé quoi, quand, avec quelle justification), des alertes sur les comptes avec des rôles permanents non justifiés, et des revues d'accès périodiques pour nettoyer les droits inutiles.
      </p>

      <h2>Microsoft Entra ID Protection</h2>
      <p>
        Entra ID Protection (anciennement AADIP) utilise le machine learning de Microsoft (analysant des milliards de signaux quotidiens) pour détecter les comportements suspects : connexions depuis des IPs anonymes ou malveillantes, voyage impossible (connexion depuis Paris et New York dans la même heure), credentials leakés sur le dark web, authentification depuis des malwares connus. Ces signaux génèrent des "risques" (utilisateur ou connexion) que les politiques Conditional Access peuvent exploiter pour forcer le MFA ou bloquer l'accès.
      </p>

      <h2>Gouvernance des droits et RBAC</h2>

      <h3>Audit régulier des rôles</h3>
      <p>
        Le Role-Based Access Control (RBAC) d'Entra ID gère les accès à Azure et Microsoft 365. Problèmes fréquents : trop d'utilisateurs avec le rôle Global Administrator (idéalement moins de 5, avec PIM), droits permanents sur des abonnements Azure, comptes de service avec des permissions excessives. Réalisez une revue trimestrielle des rôles Entra et des assignments RBAC Azure via les Entra ID Access Reviews ou avec des outils comme Microsoft Entra Permissions Management.
      </p>

      <h3>Entra Workload Identity</h3>
      <p>
        Les identités de charge de travail (applications, service principals, managed identities) représentent souvent les identités les plus négligées et les plus dangereuses. Une application avec un secret qui n'expire jamais et des permissions Global Admin est une bombe à retardement. Utilisez les Managed Identities pour les ressources Azure (pas de secret à gérer), définissez des dates d'expiration sur tous les secrets d'application, et limitez les permissions au strict minimum (éviter les permissions d'application en faveur des permissions déléguées quand possible).
      </p>

      <h2>Journalisation et surveillance</h2>
      <p>
        Activez les Diagnostic Settings d'Entra ID pour envoyer les logs de connexion (Sign-in Logs) et d'audit (Audit Logs) vers un Log Analytics Workspace ou un SIEM externe. Les événements critiques à surveiller : connexions réussies depuis des IPs malveillantes, modifications de politiques Conditional Access, ajout de membres aux groupes d'administrateurs, création d'applications enterprise avec des permissions élevées, modifications des paramètres d'authentification du tenant. Microsoft Sentinel (SIEM Azure natif) propose des règles de détection prêtes à l'emploi pour Entra ID.
      </p>
    </BlogLayout>
  );
};

export default SecuriteAzureEntraId;
