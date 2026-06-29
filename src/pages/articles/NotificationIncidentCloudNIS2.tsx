import BlogLayout from "@/components/BlogLayout";

const NotificationIncidentCloudNIS2 = () => (
  <BlogLayout
    title="Cyberattaque cloud : délais de notification ANSSI et CNIL pour les entreprises"
    description="Guide complet sur les obligations de notification après un incident cyber cloud : délais NIS2 (24h/72h/1 mois), notification CNIL 72h, procédure pour les entreprises cloud et sanctions en cas de non-déclaration."
    date="28 juin 2026"
    readTime="10 min"
    category="Incidents & Conformité"
  >
    <p>
      Un accès non autorisé à votre bucket S3, une fuite de données depuis votre base cloud, un ransomware qui chiffre vos instances AWS : dans tous ces cas, vous avez des obligations légales de notification. Méconnaître ces délais est une erreur qui peut s'avérer très coûteuse. Ce guide fait le point pour les entreprises cloud-first.
    </p>

    <h2>Les deux obligations de notification : NIS2 et RGPD</h2>
    <p>
      La directive NIS2 et le RGPD créent deux obligations de notification distinctes qui peuvent s'appliquer simultanément au même incident cloud. La confusion est fréquente, et l'erreur coûteuse.
    </p>

    <h3>Notification NIS2 à l'ANSSI</h3>
    <p>
      Si votre entreprise est une entité essentielle ou importante sous NIS2, tout incident significatif touchant vos systèmes cloud doit être notifié à l'ANSSI selon un calendrier en 3 étapes :
    </p>
    <ul>
      <li><strong>Dans les 24 heures :</strong> alerte préliminaire indiquant que vous avez connaissance d'un incident et s'il est potentiellement malveillant</li>
      <li><strong>Dans les 72 heures :</strong> notification complète avec évaluation initiale de la nature, la gravité et les indicateurs de compromission</li>
      <li><strong>Dans le mois :</strong> rapport final avec cause racine, mesures correctives et impact réel</li>
    </ul>
    <p>
      Un incident cloud "significatif" selon NIS2 est un incident ayant un impact important sur la fourniture de vos services, notamment : une interruption de service significative, une compromission de données confidentielles, ou un accès non autorisé persistant à vos systèmes.
    </p>

    <h3>Notification RGPD à la CNIL</h3>
    <p>
      Si l'incident cloud implique des données personnelles (données clients, salariés, utilisateurs), le RGPD impose une notification à la CNIL dans les <strong>72 heures après avoir pris connaissance</strong> de la violation. Ce délai court à partir du moment où vous avez connaissance de l'incident, pas à partir du moment où il s'est produit.
    </p>
    <p>
      Pour un incident cloud, "prendre connaissance" peut signifier : réception d'une alerte de votre CSPM ou AWS GuardDuty, découverte d'un accès non autorisé dans vos logs CloudTrail, notification d'un chercheur en sécurité, ou détection par votre équipe de développement.
    </p>

    <h2>Les incidents cloud les plus fréquents et leurs obligations de notification</h2>

    <h3>Bucket S3 public ou Azure Blob exposé</h3>
    <p>
      Si des données personnelles étaient dans le bucket exposé, vous devez notifier la CNIL dans les 72 heures. Si l'exposition a duré plus de quelques heures et que les données sont sensibles (données de santé, financières, identifiants), vous devrez probablement aussi notifier les personnes concernées. Sous NIS2 : notification ANSSI obligatoire si vous êtes entité NIS2 et que l'incident a eu un impact significatif.
    </p>

    <h3>API key compromise (accès admin AWS/Azure)</h3>
    <p>
      Un accès non autorisé admin à votre infrastructure cloud est un incident grave. Si l'attaquant a pu accéder à des données personnelles, la notification CNIL s'impose. Même sans accès confirmé aux données, si l'accès a duré plusieurs heures, il faut partir du principe que des données ont potentiellement été exfiltrées et notifier par précaution. Sous NIS2 : l'accès non autorisé persistant est un incident significatif à déclarer.
    </p>

    <h3>Ransomware sur infrastructure cloud</h3>
    <p>
      Un ransomware ciblant vos instances cloud déclenche automatiquement les deux obligations. La plupart des ransomwares exfiltrent les données avant de les chiffrer (double extorsion) : présumez que des données personnelles ont été volées et notifiez la CNIL dans les 72 heures. La notification ANSSI est également requise sous NIS2.
    </p>

    <h3>Injection de code malveillant dans un dépôt Git cloud</h3>
    <p>
      Si des secrets (API keys, mots de passe, credentials) étaient exposés dans un commit public ou accessible, il s'agit d'une violation de données. Si ces secrets donnaient accès à des données personnelles, la CNIL doit être notifiée. Changez immédiatement tous les credentials exposés et lancez une investigation pour déterminer si des données ont été accédées.
    </p>

    <h2>Préparer sa procédure de notification avant l'incident</h2>
    <p>
      Voici les 5 actions à mener maintenant, avant tout incident :
    </p>
    <ul>
      <li><strong>Créer un compte sur notifications.cnil.fr :</strong> la création de compte prend du temps — faites-le maintenant. Vous ne voulez pas découvrir le portail CNIL en pleine crise à 2h du matin</li>
      <li><strong>Activer la journalisation cloud :</strong> AWS CloudTrail, Azure Monitor, GCP Cloud Audit Logs doivent être activés et configurés pour conserver les logs 90 jours minimum. Sans logs, il est impossible de déterminer ce qui a été accédé et par qui</li>
      <li><strong>Configurer les alertes GuardDuty/Defender :</strong> AWS GuardDuty et Microsoft Defender for Cloud détectent automatiquement les comportements suspects. Configurez des alertes PagerDuty, Slack ou email pour être notifié immédiatement</li>
      <li><strong>Désigner un DPO ou responsable notification :</strong> qui appelle la CNIL ? Qui prend la décision de notifier ? Cette personne doit être connue et joignable 24/7</li>
      <li><strong>Rédiger une procédure de réponse à incident cloud :</strong> qui fait quoi, dans quel ordre, avec quels outils (isolation d'instance, révocation de credentials, sauvegarde des logs). La notification aux autorités est une étape de cette procédure</li>
    </ul>

    <h2>Les sanctions pour non-notification</h2>
    <p>
      La CNIL n'hésite plus à sanctionner les non-notifications. Pour les incidents cloud spécifiquement : une entreprise SaaS a été condamnée à 400 000 € pour avoir tardé à notifier une violation de données dans son infrastructure AWS (données clients exposées pendant 72 heures avant notification). Sous NIS2, les amendes pour non-notification peuvent atteindre 10 M€ ou 2 % du CA mondial pour les entités essentielles.
    </p>
    <p>
      La notification n'est pas une aveu de faiblesse : elle est vue positivement par les régulateurs comme preuve de votre transparence et de la maturité de votre gestion des incidents. Les entreprises qui notifient proactivement et rapidement reçoivent généralement des sanctions moindres que celles qui tentent de cacher l'incident.
    </p>
    <div className="info-box">
      <h4>Réponse à incident cloud 24/7</h4>
      <p>CloudSecure propose une assistance immédiate en cas d'incident cloud : investigation forensique, containment, notification aux autorités et communication de crise. Notre CERT intervient sous 4 heures. Ligne d'urgence disponible 24/7.</p>
    </div>
  </BlogLayout>
);

export default NotificationIncidentCloudNIS2;
