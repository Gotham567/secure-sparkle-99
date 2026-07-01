import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudMulhouse = () => (
  <CityLandingPage
    data={{
      city: "Mulhouse",
      citySlug: "mulhouse",
      region: "Grand Est",
      postalCode: "68100",
      intro: "CloudSecure sécurise les systèmes IIoT cloud de Stellantis, les data analytics SNCF et les ERP cloud des entreprises chimiques et textiles de Mulhouse contre les cybermenaces ciblant l'Industrie 4.0 alsacienne. Audit cloud Azure/AWS Industrie 4.0, conformité NIS2 transfrontalière France-Suisse-Allemagne et DevSecOps industrie pour le Grand Est.",
      localContext: "Mulhouse est un carrefour industriel européen à la confluence de la France, de l'Allemagne et de la Suisse, où Stellantis (ex-PSA) opère l'une de ses plus grandes usines d'assemblage automobile connectées à des systèmes MES et IIoT cloud Azure. La présence de la SNCF avec ses centres de maintenance et ses projets data analytics, des industries chimiques de la zone rhénane et du tissu de PME textiles en reconversion numérique fait de Mulhouse un terrain de jeu privilégié pour les cyberattaquants ciblant l'industrie 4.0. La dimension transfrontalière de l'économie mulhousienne (données hébergées dans des data centers suisses ou allemands, sous-traitants étrangers accédant aux ERP cloud) crée des complexités réglementaires uniques alliant RGPD, NIS2 et droit suisse DSG. CloudSecure maîtrise ces enjeux transfrontaliers et intervient à Mulhouse, Illzach, Bourtzwiller et dans toute l'Alsace pour sécuriser vos environnements cloud industriels.",
      sectors: [
        "Automobile cloud Industrie 4.0 (Stellantis, MES connecté, sous-traitants IIoT)",
        "SNCF data analytics et maintenance prédictive cloud",
        "Chimie industrielle et procédés cloud (zone rhénane)",
        "Textile et mode ERP cloud (héritage mulhousien en reconversion)",
        "Santé cloud et CHU de Mulhouse (données médicales sensibles)",
        "PME alsaciennes en transformation numérique",
      ],
      neighborhoods: [
        "Zone industrielle rhénane (ZI Rhenane) et Ottmarsheim",
        "Bourtzwiller et zone automobile Stellantis",
        "Illzach et parcs d'activités",
        "Haut-Rhin (68) et Alsace",
        "Colmar et bassin alsacien",
        "Bâle (Suisse) et frontière trinationale France-Suisse-Allemagne",
      ],
      faq: [
        {
          q: "Comment auditer la sécurité cloud IIoT d'une usine Stellantis ou d'un sous-traitant automobile à Mulhouse ?",
          a: "Un audit cloud IIoT pour un sous-traitant automobile de Mulhouse couvre les systèmes MES (Manufacturing Execution System) connectés au cloud Azure, les capteurs IIoT de ligne de production (OPC-UA, MQTT), les passerelles IT/OT et les accès distants des équipes maintenance. CloudSecure évalue les risques de rebond depuis le réseau bureautique vers les automates industriels, la sécurité des données de production hébergées sur Azure IoT Hub, et la conformité aux exigences TISAX (Trusted Information Security Assessment Exchange) imposées par les donneurs d'ordres automobiles. Forfait audit IIoT automobile à partir de 6 000 € HT.",
        },
        {
          q: "Comment sécuriser un ERP automobile Azure déployé chez un sous-traitant de Stellantis à Mulhouse ?",
          a: "La sécurisation d'un ERP cloud Azure (SAP S/4HANA, Microsoft Dynamics 365) chez un sous-traitant Stellantis passe par un audit des identités Azure Entra ID, la revue des politiques d'accès conditionnel, la segmentation réseau via Azure Virtual WAN, et la vérification du chiffrement des données de production sensibles (plans, gammes, tarifs). CloudSecure déploie également Microsoft Sentinel pour la détection des menaces temps réel et la corrélation des événements de sécurité. Nous accompagnons les PME alsaciennes dans la conformité TISAX et NIS2 automobile. Devis personnalisé à partir de 5 000 € HT.",
        },
        {
          q: "Quelles sont les spécificités de la conformité cloud transfrontalière France-Suisse-Allemagne pour les entreprises de Mulhouse ?",
          a: "Les entreprises de Mulhouse opérant de part et d'autre du Rhin font face à une triple réglementation : le RGPD européen (applicable à toutes les données de citoyens EU), la NIS2 pour les entités critiques françaises et allemandes, et la loi suisse sur la protection des données (DSG) pour les sous-traitants basés à Bâle ou en Suisse alémanique. CloudSecure maîtrise ces trois cadres et réalise des audits de conformité transfrontalière couvrant les transferts de données hors UE vers des data centers suisses, les clauses contractuelles types (CCT) et les mécanismes de gouvernance cloud adaptés à cette zone trinationale. Diagnostic de conformité transfrontalière à partir de 4 500 € HT.",
        },
        {
          q: "Proposez-vous du DevSecOps pour les PME industrielles et start-ups d'Alsace ?",
          a: "Oui. CloudSecure déploie des pratiques DevSecOps pour les éditeurs SaaS industriels et les PME d'Alsace qui développent des applications connectées aux systèmes de production. Nos consultants intègrent l'analyse de sécurité statique (SAST) et dynamique (DAST) dans les pipelines CI/CD, automatisent la gestion des secrets (HashiCorp Vault, AWS Secrets Manager) et forment les développeurs aux bonnes pratiques de codage sécurisé. Intervention à partir de 700 € HT/jour en régie ou forfait projet à définir selon le périmètre.",
        },
        {
          q: "Comment protéger les données médicales du CHU de Mulhouse hébergées dans le cloud ?",
          a: "Le CHU de Mulhouse et les établissements de santé alsaciens qui hébergent des données de santé dans le cloud (DMP, imagerie médicale, résultats de laboratoire) sont soumis à la certification HDS (Hébergeur de Données de Santé) et aux exigences NIS2 pour les entités essentielles du secteur santé. CloudSecure audite la conformité HDS de votre infrastructure cloud, vérifie le chiffrement des données médicales, les droits d'accès des professionnels de santé et la journalisation des accès. Nous accompagnons également la mise en place de la continuité d'activité cloud (PRA) pour les systèmes critiques hospitaliers. Forfait audit HDS santé à partir de 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudMulhouse;
