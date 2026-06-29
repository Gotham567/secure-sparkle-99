import BlogLayout from "@/components/BlogLayout";

const SecuriteGoogleCloudGuide = () => {
  return (
    <BlogLayout
      title="Sécurité Google Cloud Platform (GCP) : guide complet 2026 pour les PME et startups"
      description="Sécuriser Google Cloud Platform : IAM, Cloud Armor, Security Command Center, VPC, Secret Manager, Cloud KMS, Asset Inventory et conformité NIS2 et RGPD sur GCP."
      date="28 juin 2026"
      readTime="14 min"
      category="Sécurité Cloud"
      slug="securite-google-cloud-platform-guide-pme"
    >
      <p>
        Google Cloud Platform (GCP) est le 3e hyperscaler mondial et la plateforme privilégiée de nombreuses startups tech, entreprises analytics (BigQuery) et organisations utilisant les services IA/ML de Google. Si GCP offre des capacités de sécurité natives puissantes, elles ne sont activées et configurées par défaut que partiellement. Ce guide vous donne les clés pour sécuriser votre environnement GCP en 2026.
      </p>

      <h2>L'organisation GCP : la fondation de la sécurité</h2>
      <p>
        GCP est organisé hiérarchiquement : Organisation → Dossiers → Projets → Ressources. Cette hiérarchie est cruciale pour la sécurité car les politiques IAM et les constraints s'héritent du niveau supérieur. Une mauvaise organisation dès le début crée des problèmes de sécurité difficiles à corriger.
      </p>
      <ul>
        <li><strong>Organisation :</strong> Le nœud racine, lié à votre domaine Google Workspace ou Cloud Identity. Les admins d'organisation ont un pouvoir total — les comptes Organization Administrator doivent être ultra-protégés (MFA matériel FIDO2, monitoring renforcé).</li>
        <li><strong>Dossiers :</strong> Permettent de séparer les environnements (prod, staging, dev) et les équipes (BU A, BU B). Appliquer des contraintes org policy différentes par dossier.</li>
        <li><strong>Projets :</strong> L'unité de base pour l'isolation des ressources et la facturation. Chaque application ou workload devrait avoir son propre projet pour une isolation maximale.</li>
      </ul>

      <h2>IAM GCP : le contrôle d'accès</h2>

      <h3>Principes IAM GCP</h3>
      <p>
        IAM GCP (Identity and Access Management) permet de contrôler qui (identité) peut faire quoi (rôle) sur quelle ressource. Les identités peuvent être des comptes Google, des groupes Google, des comptes de service (Service Accounts), ou des identités fédérées (Workload Identity Federation).
      </p>
      <ul>
        <li><strong>Moindre privilège :</strong> Ne jamais utiliser les rôles primitifs (Owner, Editor, Viewer) en production — ils sont trop larges. Utiliser les rôles prédéfinis (roles/storage.objectViewer, roles/compute.instanceAdmin.v1) ou des rôles personnalisés.</li>
        <li><strong>Pas de Owner en production :</strong> Le rôle Owner donne un accès total, y compris la facturation. Limiter ce rôle à 1-2 administrateurs, uniquement sur des comptes dédiés (pas des comptes Gmail personnels).</li>
        <li><strong>Service Accounts avec Workload Identity :</strong> Pour les applications GKE accédant aux APIs GCP, utiliser Workload Identity Federation plutôt que des clés de service account (JSON keys) — les clés sont des secrets à longue durée de vie très risqués.</li>
        <li><strong>IAM Conditions :</strong> Ajouter des conditions temporelles ou contextuelles aux bindings IAM (ex : accès valide uniquement pendant les heures ouvrées, uniquement depuis une IP spécifique).</li>
        <li><strong>Policy Intelligence :</strong> Utiliser IAM Recommender pour identifier les permissions excessives accordées mais non utilisées.</li>
      </ul>

      <h3>Cloud Identity et MFA sur GCP</h3>
      <ul>
        <li>Activer MFA pour tous les comptes Cloud Identity, en particulier les administrateurs</li>
        <li>Imposer le 2FA résistant au phishing (clés FIDO2/passkeys) pour les admins d'organisation</li>
        <li>Désactiver la connexion par mot de passe seul — forcer Google SSO</li>
        <li>Activer Context-Aware Access pour conditionner l'accès à la conformité de l'appareil</li>
      </ul>

      <h2>Organisation Policy : les guardrails GCP</h2>
      <p>
        Les Organization Policies (anciennement constraints) permettent d'imposer des règles à toute l'organisation GCP, indépendamment des droits IAM. Ce sont des "guardrails" que même un projet Owner ne peut contourner.
      </p>
      <ul>
        <li><strong>constraints/iam.disableServiceAccountKeyCreation :</strong> Interdire la création de clés JSON de service account — force l'utilisation de Workload Identity</li>
        <li><strong>constraints/compute.skipDefaultNetworkCreation :</strong> Ne pas créer le VPC "default" automatiquement dans les nouveaux projets (le VPC default est trop permissif)</li>
        <li><strong>constraints/gcp.resourceLocations :</strong> Restreindre la création de ressources à des régions spécifiques (France = europe-west9 Paris, europe-west1 Belgique)</li>
        <li><strong>constraints/compute.requireOsLogin :</strong> Forcer l'authentification via OS Login pour les VMs Compute Engine (plus sécurisé que les clés SSH)</li>
        <li><strong>constraints/iam.allowedPolicyMemberDomains :</strong> Limiter les membres des bindings IAM aux domaines de votre organisation (empêche le partage à des comptes Gmail externes)</li>
        <li><strong>constraints/storage.publicAccessPrevention :</strong> Interdire l'accès public aux buckets Cloud Storage au niveau organisation</li>
      </ul>

      <h2>VPC et sécurité réseau GCP</h2>

      <h3>VPC Design sécurisé</h3>
      <ul>
        <li><strong>Supprimer le VPC default :</strong> Le VPC default créé automatiquement dans chaque projet a des règles de pare-feu permissives (allow-icmp, allow-ssh, allow-rdp depuis 0.0.0.0/0). Supprimer ce VPC dans tous les projets et créer des VPC customs avec des règles minimales.</li>
        <li><strong>Shared VPC :</strong> Utiliser Shared VPC pour partager un réseau entre plusieurs projets GCP, avec une gestion centralisée des règles de pare-feu et du routage.</li>
        <li><strong>Private Google Access :</strong> Activer Private Google Access sur les sous-réseaux pour permettre aux VMs sans IP publique d'accéder aux APIs GCP via le réseau interne Google (sans transiter par Internet).</li>
        <li><strong>Cloud NAT :</strong> Pour les VMs qui doivent accéder à Internet en sortie sans avoir d'IP publique, Cloud NAT gère la translation d'adresses de manière centralisée et contrôlable.</li>
      </ul>

      <h3>Firewall Rules GCP</h3>
      <ul>
        <li>Commencer par des règles "deny all" implicites (GCP les applique par défaut) et ajouter des exceptions explicites</li>
        <li>Éviter les règles autorisant 0.0.0.0/0 (tout Internet) — sauf pour les services publics (HTTP/HTTPS via Load Balancer)</li>
        <li>Utiliser des network tags ou service accounts comme sources/destinations plutôt que des plages IP — plus maintenable et précis</li>
        <li>Activer les logs pour toutes les règles de pare-feu (Firewall Rules Logging) — crucial pour la détection et la conformité</li>
        <li>Utiliser Firewall Insights pour identifier les règles inutilisées ou trop permissives</li>
      </ul>

      <h2>Security Command Center (SCC)</h2>
      <p>
        Le Security Command Center est la plateforme de gestion de la posture de sécurité native de GCP. Il centralise les alertes de sécurité, les findings des services de détection et la conformité avec les benchmarks.
      </p>
      <ul>
        <li><strong>SCC Standard (gratuit) :</strong> Vue des assets, détection basique des mauvaises configurations, intégration avec les services Google natifs</li>
        <li><strong>SCC Enterprise (payant) :</strong> Threat Detection avancée, Security Health Analytics complet, Event Threat Detection (ETD), Container Threat Detection, Virtual Machine Threat Detection, Web Security Scanner</li>
      </ul>
      <p>
        Les fonctionnalités clés à utiliser :
      </p>
      <ul>
        <li><strong>Security Health Analytics :</strong> Détecte les mauvaises configurations (buckets publics, service accounts avec trop de droits, clés API sans restrictions, VMs avec des disques non chiffrés)</li>
        <li><strong>Event Threat Detection (ETD) :</strong> Analyse les logs Cloud Audit pour détecter les comportements malveillants (compromission de compte, mining de crypto, exfiltration de données)</li>
        <li><strong>Container Threat Detection :</strong> Runtime security pour GKE (comportements anormaux dans les conteneurs)</li>
        <li><strong>Compliance Reports :</strong> Rapports de conformité CIS Benchmark, ISO 27001, PCI DSS, RGPD</li>
      </ul>

      <h2>Protection des données : Cloud KMS et Secret Manager</h2>

      <h3>Cloud KMS — Chiffrement des données</h3>
      <ul>
        <li><strong>Customer-Managed Encryption Keys (CMEK) :</strong> Pour les données sensibles, utiliser vos propres clés de chiffrement gérées dans Cloud KMS plutôt que les clés Google par défaut. Disponible pour BigQuery, Cloud Storage, Compute Engine, Cloud SQL.</li>
        <li><strong>Key Rotation :</strong> Configurer la rotation automatique des clés (tous les 90 jours recommandé pour les données très sensibles)</li>
        <li><strong>Cloud EKM (External Key Manager) :</strong> Pour les données ultra-sensibles (secteur financier, santé), gérer les clés dans un HSM externe (Thales, Entrust) tout en chiffrant sur GCP</li>
      </ul>

      <h3>Secret Manager</h3>
      <ul>
        <li>Stocker tous les secrets (API keys, passwords, certificats, tokens) dans Secret Manager plutôt que dans les variables d'environnement ou les ConfigMaps</li>
        <li>Activer la rotation automatique des secrets via des fonctions Cloud Functions ou Workflows</li>
        <li>Audit des accès aux secrets via Cloud Audit Logs</li>
        <li>Contrôle d'accès granulaire : qui peut lire quel secret, sur quelle version</li>
      </ul>

      <h2>Cloud Logging et monitoring de sécurité</h2>
      <ul>
        <li><strong>Cloud Audit Logs :</strong> Activer les Data Access Audit Logs pour les services critiques (BigQuery, Cloud Storage, Cloud SQL) — par défaut seuls les Admin Activity Logs sont activés</li>
        <li><strong>Log Sink vers BigQuery/Cloud Storage :</strong> Exporter les logs vers BigQuery pour des analyses long terme ou vers Cloud Storage pour l'archivage conformité (RGPD, NIS2)</li>
        <li><strong>Log-based Metrics et Alerting :</strong> Créer des alertes Cloud Monitoring sur les patterns suspects dans les logs (accès non autorisé, modification des org policies, création de service account keys)</li>
        <li><strong>Chronicle SIEM :</strong> La solution SIEM de Google Cloud pour une analyse avancée des logs de sécurité avec corrélation et règles de détection YARA-L</li>
      </ul>

      <h2>Conformité RGPD et NIS2 sur GCP</h2>
      <p>
        GCP propose plusieurs fonctionnalités pour faciliter la conformité réglementaire :
      </p>
      <ul>
        <li><strong>Résidence des données :</strong> Utiliser les régions europe-west9 (Paris) ou europe-west1 (Belgique) pour les données soumises au RGPD. Activer la contrainte org policy resourceLocations pour forcer la création en Europe.</li>
        <li><strong>DPA avec Google :</strong> Google propose un Data Processing Agreement (DPA) RGPD en ligne. Signer ce DPA est obligatoire si vous traitez des données personnelles d'européens sur GCP.</li>
        <li><strong>Sovereign Controls :</strong> Pour les secteurs les plus sensibles (défense, gouvernement), Google propose Sovereign Controls, avec chiffrement géré localement et accès administrateur restreint aux ingénieurs Google basés dans le pays.</li>
        <li><strong>NIS2 — Notification incidents :</strong> Configurer des alertes SCC + Cloud Monitoring pour détecter les incidents et alimenter votre procédure de notification ANSSI en 24/72h.</li>
        <li><strong>Compliance Manager / SCC Compliance :</strong> Les rapports de conformité SCC Enterprise couvrent NIS2, ISO 27001, RGPD — utilisables pour documenter votre posture de sécurité.</li>
      </ul>

      <h2>Checklist sécurité GCP en 15 points</h2>
      <ul>
        <li>MFA FIDO2 activé pour tous les admins GCP (Cloud Identity)</li>
        <li>Org policy: publicAccessPrevention sur Cloud Storage</li>
        <li>Org policy: resourceLocations restreint à l'Europe</li>
        <li>Org policy: disableServiceAccountKeyCreation activée</li>
        <li>VPC default supprimé dans tous les projets</li>
        <li>Firewall Rules Logging activé</li>
        <li>Security Command Center activé (au moins Standard)</li>
        <li>Cloud Audit Logs (Data Access) activés pour les services critiques</li>
        <li>CMEK configurées pour les données sensibles (BigQuery, Cloud SQL, GCS)</li>
        <li>Secret Manager utilisé pour tous les secrets applicatifs</li>
        <li>IAM Recommender passé et permissions excessives supprimées</li>
        <li>Workload Identity Federation configuré pour les workloads GKE</li>
        <li>VPC Service Controls activés pour les projets avec des données très sensibles</li>
        <li>Cloud Armor configuré pour les applications web exposées</li>
        <li>DPA RGPD signé avec Google et documentation de la localisation des données</li>
      </ul>

      <div className="info-box">
        <h4>Audit sécurité GCP par nos experts certifiés</h4>
        <p>CyberSecure réalise des audits de sécurité Google Cloud Platform complets : revue IAM, org policies, VPC, Security Command Center, conformité NIS2 et RGPD, rapport de conformité CIS GCP Benchmark. Nos experts sont certifiés Google Cloud Professional Cloud Security Engineer. Devis gratuit sous 48h.</p>
      </div>
    </BlogLayout>
  );
};

export default SecuriteGoogleCloudGuide;
