import BlogLayout from "@/components/BlogLayout";

const AwsWellArchitectedSecurite = () => {
  return (
    <BlogLayout
      title="AWS Well-Architected Framework : le pilier sécurité expliqué"
      description="Guide complet du pilier Sécurité du AWS Well-Architected Framework : IAM, détection, protection des données, réponse aux incidents et les 7 principes de conception."
      date="16 juin 2026"
      readTime="14 min"
      category="AWS"
    >
      <p>
        Le AWS Well-Architected Framework est le guide de référence d'Amazon pour concevoir des architectures cloud robustes. Il repose sur 6 piliers : Excellence opérationnelle, Sécurité, Fiabilité, Efficacité des performances, Optimisation des coûts et Durabilité. Le pilier Sécurité est souvent le plus complexe à maîtriser car il recouvre des domaines variés — identités, réseau, données, journalisation, réponse aux incidents — chacun avec ses propres bonnes pratiques et services AWS. Ce guide détaille les 7 domaines du pilier Sécurité et les questions clés du Well-Architected Review.
      </p>

      <h2>Les 7 principes de conception sécurité</h2>
      <p>
        Avant de détailler les domaines, les 7 principes fondamentaux du pilier Sécurité AWS : mettre en œuvre une base de sécurité solide (identités, accès, chiffrement dès le départ), activer la traçabilité (logs, alertes, audits), appliquer la sécurité à toutes les couches (réseau, compute, application, données), automatiser les bonnes pratiques (Infrastructure as Code, configurations automatisées), protéger les données en transit et au repos, réduire l'accès direct aux données de production, se préparer aux événements de sécurité (plans de réponse aux incidents testés régulièrement).
      </p>

      <h2>Domaine 1 : Gestion des identités et des accès (IAM)</h2>

      <h3>Les questions clés</h3>
      <p>
        Le Well-Architected Review pose les questions suivantes sur l'IAM : Comment gérez-vous les identités humaines ? Comment gérez-vous les identités des machines ? Comment gérez-vous les autorisations ? Les réponses attendues incluent : MFA activé pour tous les comptes (en particulier le compte root), utilisation des rôles IAM plutôt que des utilisateurs avec clés d'accès, politique de moindre privilège appliquée, AWS Organizations pour la gouvernance multi-comptes, AWS IAM Identity Center (SSO) pour la gestion centralisée des accès.
      </p>

      <h3>Les bonnes pratiques IAM</h3>
      <p>
        Verrouillez le compte root (pas de clés d'accès, MFA activé, utilisation minimale). Utilisez AWS Organizations avec des Service Control Policies (SCP) pour limiter ce que chaque compte peut faire. Adoptez le modèle de gouvernance multi-comptes avec des comptes dédiés par environnement (dev, staging, production) et par fonction (sécurité, log archive, shared services). Activez IAM Access Analyzer pour détecter les ressources partagées avec l'extérieur. Utilisez AWS CloudShell pour les opérations admin plutôt que des accès programmatiques permanents.
      </p>

      <h2>Domaine 2 : Détection</h2>
      <p>
        Comment détectez-vous et investiguez-vous les événements de sécurité ? Les services AWS clés pour la détection : <strong>AWS GuardDuty</strong> (détection des menaces managée, analyse CloudTrail + VPC Flow Logs + DNS), <strong>AWS Security Hub</strong> (agrégation des findings de sécurité de GuardDuty, Inspector, Macie, Config), <strong>AWS Config</strong> (conformité continue des configurations), <strong>AWS CloudTrail</strong> (journalisation de toutes les actions API), et <strong>Amazon Detective</strong> (investigation forensique des incidents).
      </p>
      <p>
        La Well-Architected Review vérifie que CloudTrail est activé dans toutes les régions avec une rétention d'au moins 90 jours, que GuardDuty est activé dans tous les comptes et toutes les régions, et que Security Hub centralise les findings avec des règles d'alerting définies.
      </p>

      <h2>Domaine 3 : Protection de l'infrastructure</h2>
      <p>
        Comment protégez-vous vos ressources réseau et compute ? Points clés : VPC avec segmentation réseau appropriée (sous-réseaux publics/privés/isolés), Security Groups avec règles restrictives (whitelist par défaut), AWS WAF devant les API Gateway et CloudFront, AWS Shield Standard/Advanced pour la protection DDoS, AWS Systems Manager Session Manager pour remplacer les accès SSH/RDP directs, et patch management automatisé via Systems Manager Patch Manager.
      </p>

      <h2>Domaine 4 : Protection des données</h2>

      <h3>Données en transit</h3>
      <p>
        Tout le trafic doit être chiffré : HTTPS/TLS pour les API et les interfaces web, TLS pour les communications inter-services (Application Load Balancer, ECS, RDS), AWS Certificate Manager pour la gestion des certificats TLS. Activez la politique de sécurité TLS 1.2 minimum sur tous vos listeners ALB/CloudFront.
      </p>

      <h3>Données au repos</h3>
      <p>
        Chiffrement par défaut sur tous les services de stockage : S3 (SSE-S3 ou SSE-KMS), EBS (volumes chiffrés), RDS (chiffrement au niveau du storage), DynamoDB, ElastiCache. Utilisez AWS KMS pour la gestion des clés avec rotation automatique annuelle. Pour les données très sensibles, envisagez AWS CloudHSM pour un contrôle total des clés. Amazon Macie pour la découverte et la classification automatique des données sensibles dans S3.
      </p>

      <h2>Domaine 5 : Gestion des incidents</h2>
      <p>
        Comment vous préparez-vous aux événements de sécurité ? Le Well-Architected Framework insiste sur la préparation : runbooks documentés pour les scénarios d'incidents courants (compromission IAM, bucket S3 exposé, instance compromise), simulations régulières (Game Days), automatisation de la réponse via AWS Lambda et Step Functions, isolation des ressources compromises via des modifications de Security Groups automatisées, et accès pré-configuré aux outils forensiques.
      </p>
      <p>
        AWS propose des outils dédiés à la réponse aux incidents : AWS Systems Manager Automation pour les playbooks automatisés, Amazon EventBridge pour déclencher des actions en réponse à des findings GuardDuty, et AWS Security Hub Custom Actions pour les workflows d'escalade.
      </p>

      <h2>Réaliser un Well-Architected Review</h2>
      <p>
        AWS propose le Well-Architected Tool, accessible gratuitement dans la console AWS. Il permet de répondre à l'ensemble des questions du framework et génère un rapport de findings priorisés avec des recommandations d'amélioration. La review peut être réalisée en autonomie ou avec un AWS Partner qualifié Well-Architected. Un audit de sécurité cloud réalisé par un prestataire qualifié PASSI comme CloudSecure va plus loin en testant concrètement l'exploitabilité des configurations identifiées comme défaillantes.
      </p>
      <p>
        Pour une PME utilisant AWS, une review Well-Architected annuelle permet de maintenir un niveau de sécurité aligné sur les meilleures pratiques du secteur. Elle est souvent exigée par les clients grands comptes ou lors de due diligences d'investissement.
      </p>
    </BlogLayout>
  );
};

export default AwsWellArchitectedSecurite;
