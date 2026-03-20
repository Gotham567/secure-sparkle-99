import BlogLayout from "@/components/BlogLayout";

const ConformiteDoraGuide = () => (
  <BlogLayout title="Conformité DORA : ce que les entreprises tech doivent savoir en 2026" description="Guide complet sur le règlement DORA (Digital Operational Resilience Act) : obligations, calendrier, piliers de conformité et plan d'action pour les entreprises technologiques et financières." date="14 mars 2026" readTime="15 min" category="Conformité">
    <p>Le règlement DORA (Digital Operational Resilience Act) est entré en application le 17 janvier 2025 et bouleverse les exigences de résilience numérique pour le secteur financier européen — et par extension, pour tous les prestataires technologiques qui les servent. Si votre entreprise tech fournit des services cloud, SaaS ou IT à des acteurs financiers, vous êtes directement concerné. Ce guide vous explique les obligations, les risques et comment vous mettre en conformité.</p>

    <h2>Qu'est-ce que le règlement DORA ?</h2>
    <p>DORA est un règlement européen (2022/2554) qui harmonise les exigences de résilience opérationnelle numérique dans le secteur financier à travers l'Union européenne. Contrairement à une directive, un règlement est directement applicable dans tous les États membres sans transposition nationale. DORA remplace le patchwork de réglementations nationales par un cadre unique et contraignant.</p>
    <p>L'objectif de DORA est clair : s'assurer que le secteur financier européen peut résister, répondre et se remettre de tout type de perturbation ou menace liée aux TIC (Technologies de l'Information et de la Communication). Cela inclut les cyberattaques, les pannes de systèmes, les défaillances de prestataires cloud et tout incident susceptible de perturber la continuité des services financiers.</p>

    <h3>Qui est concerné par DORA ?</h3>
    <p>DORA s'applique à un large éventail d'entités financières : banques, compagnies d'assurance, entreprises d'investissement, établissements de paiement, plateformes de financement participatif, sociétés de gestion d'actifs, et bien d'autres. Au total, plus de 22 000 entités financières sont directement soumises au règlement.</p>
    <p>Mais DORA va plus loin : il s'applique également aux prestataires tiers de services TIC qui fournissent des services à ces entités financières. Cela signifie que si votre entreprise SaaS, votre plateforme cloud ou votre service IT est utilisé par une banque, un assureur ou un gestionnaire d'actifs, vous êtes indirectement — et parfois directement — soumis aux exigences de DORA. Les prestataires TIC « critiques » désignés par les autorités européennes sont soumis à une supervision directe par les régulateurs.</p>

    <h2>Les 5 piliers de DORA</h2>

    <h3>Pilier 1 : Gestion des risques TIC</h3>
    <p>Les entités financières doivent mettre en place un cadre complet de gestion des risques TIC. Ce cadre inclut l'identification et la classification de tous les actifs TIC, l'évaluation continue des risques, la définition de mesures de protection (chiffrement, contrôle d'accès, segmentation réseau), et des procédures de détection des anomalies et incidents.</p>
    <p>Pour les prestataires tech, cela signifie être capable de démontrer que vos systèmes sont protégés par des contrôles de sécurité robustes, que vous avez un inventaire à jour de vos actifs, et que vous surveillez en continu votre infrastructure. L'organe de direction de l'entité financière (et par extension, de ses prestataires critiques) porte la responsabilité ultime de la gestion des risques TIC.</p>

    <h3>Pilier 2 : Gestion et notification des incidents TIC</h3>
    <p>DORA impose un processus structuré de gestion des incidents TIC avec des obligations de notification aux autorités de supervision. Les incidents majeurs doivent être classifiés selon des critères précis (nombre de clients affectés, impact financier, durée de l'indisponibilité, étendue géographique) et notifiés dans des délais stricts.</p>
    <p>Le calendrier de notification est exigeant : une notification initiale dans les 4 heures suivant la classification de l'incident comme majeur, un rapport intermédiaire dans les 72 heures, et un rapport final dans le mois suivant la résolution. Pour les prestataires tech, cela implique d'avoir des processus de détection et de classification des incidents suffisamment matures pour respecter ces délais, et des canaux de communication établis avec vos clients financiers pour les informer en temps réel.</p>

    <h3>Pilier 3 : Tests de résilience opérationnelle numérique</h3>
    <p>DORA exige des tests réguliers de la résilience numérique, incluant des tests de vulnérabilité, des tests de pénétration, des revues de code source, des tests de compatibilité et des tests de performance. Les entités financières significatives doivent en outre réaliser des tests de pénétration basés sur les menaces (TLPT — Threat-Led Penetration Testing) au moins tous les trois ans.</p>
    <p>Les TLPT sont des exercices sophistiqués qui simulent des attaques réalistes menées par des Red Teams qualifiées, ciblant les fonctions critiques en production. Les prestataires TIC peuvent être intégrés dans le périmètre des TLPT de leurs clients financiers, ce qui signifie que vos systèmes peuvent être testés directement par les Red Teams mandatées par les régulateurs. Il est impératif d'être préparé à ces tests et de démontrer votre résilience.</p>

    <h3>Pilier 4 : Gestion des risques liés aux prestataires tiers TIC</h3>
    <p>Ce pilier est le plus impactant pour les entreprises tech. DORA impose aux entités financières de cartographier, évaluer et surveiller en continu les risques liés à leurs prestataires TIC. Les contrats avec les prestataires doivent inclure des clauses spécifiques sur les niveaux de service, les droits d'audit, les obligations de notification d'incidents, les plans de sortie et les localisations de traitement des données.</p>
    <p>Concrètement, vos clients financiers vont exiger de vous : des droits d'audit et d'inspection de votre infrastructure, des SLA détaillés avec des pénalités, des plans de continuité d'activité testés, des rapports réguliers sur votre posture de sécurité, et la capacité de localiser et de contrôler les données qu'ils vous confient. Si votre sous-traitez à des tiers (hébergeurs cloud, sous-traitants), vous devez maintenir une chaîne de conformité complète.</p>

    <h3>Pilier 5 : Partage d'informations</h3>
    <p>DORA encourage le partage d'informations sur les cybermenaces entre entités financières et avec les autorités. Ce pilier vise à créer un écosystème de partage qui renforce la résilience collective du secteur. Les entités peuvent participer à des arrangements de partage de renseignements sur les menaces (threat intelligence sharing), partager des indicateurs de compromission (IoC) et des tactiques, techniques et procédures (TTP) des attaquants.</p>

    <h2>DORA vs NIS2 : quelles différences ?</h2>
    <p>DORA et la directive NIS2 sont complémentaires mais distinctes. NIS2 s'applique de manière transversale à tous les secteurs d'activité essentiels et importants, tandis que DORA est spécifique au secteur financier. DORA est un règlement (directement applicable), NIS2 est une directive (nécessite une transposition nationale). Les exigences de DORA sont généralement plus détaillées et plus exigeantes que celles de NIS2 pour le secteur financier.</p>
    <p>Pour les entreprises tech qui servent à la fois des clients financiers et non financiers, la bonne approche est de se conformer à DORA (le cadre le plus exigeant) et de vérifier que cette conformité couvre également les exigences de NIS2 applicables à leur secteur. Dans la plupart des cas, la conformité DORA implique une conformité NIS2 de facto.</p>

    <h2>Plan d'action pour les prestataires tech</h2>

    <h3>Phase 1 : Évaluation de l'exposition (1-2 mois)</h3>
    <p>Identifiez quels clients financiers vous servez et dans quelle mesure vos services sont critiques pour leurs opérations. Cartographiez vos propres dépendances TIC (fournisseurs cloud, sous-traitants, outils SaaS). Évaluez votre maturité actuelle par rapport aux exigences DORA. Cette phase est cruciale car elle détermine l'ampleur de l'effort de mise en conformité.</p>

    <h3>Phase 2 : Renforcement du cadre de gestion des risques (2-4 mois)</h3>
    <p>Formalisez votre cadre de gestion des risques TIC avec des politiques documentées, des processus d'évaluation des risques et des contrôles de sécurité alignés sur les exigences DORA. Renforcez votre processus de gestion des incidents pour respecter les délais de notification. Mettez en place une gouvernance claire avec un responsable identifié de la résilience numérique.</p>

    <h3>Phase 3 : Tests et validation (3-6 mois)</h3>
    <p>Réalisez des tests de pénétration complets de votre infrastructure et de vos applications. Testez vos plans de continuité d'activité et de reprise après sinistre. Préparez-vous aux TLPT en vérifiant que votre infrastructure peut être testée sans perturber les services de vos clients. Documentez tous les résultats et les actions correctives.</p>

    <h3>Phase 4 : Contractualisation et documentation (2-3 mois)</h3>
    <p>Mettez à jour vos contrats avec vos clients financiers pour inclure les clauses exigées par DORA (droits d'audit, SLA, notification d'incidents, plan de sortie, localisation des données). Préparez un dossier de conformité complet que vous pourrez fournir à vos clients et aux régulateurs : politiques de sécurité, résultats de tests, plans de continuité, rapports d'incidents.</p>

    <h3>Phase 5 : Amélioration continue (en continu)</h3>
    <p>DORA n'est pas un exercice ponctuel. Les entités financières vont auditer régulièrement leurs prestataires TIC. Maintenez votre cadre de gestion des risques à jour, réalisez des tests réguliers, surveillez en continu votre posture de sécurité et adaptez vos contrôles aux nouvelles menaces. Investissez dans l'automatisation du reporting et de la collecte de preuves de conformité.</p>

    <h2>Les sanctions en cas de non-conformité</h2>
    <p>Les sanctions prévues par DORA sont significatives. Les autorités de supervision peuvent imposer des amendes administratives, des injonctions de cesser certaines pratiques, des publications nominatives (naming and shaming), et dans les cas les plus graves, la suspension de certaines activités. Pour les prestataires TIC critiques, la supervision directe par les autorités européennes (EBA, ESMA, EIOPA) peut conduire à des restrictions d'activité si les lacunes identifiées ne sont pas corrigées.</p>
    <p>Au-delà des sanctions réglementaires, la non-conformité DORA représente un risque commercial majeur. Les entités financières vont progressivement abandonner les prestataires incapables de démontrer leur conformité au profit de concurrents mieux préparés. La conformité DORA devient ainsi un avantage concurrentiel pour les prestataires tech qui servent le secteur financier.</p>

    <div className="info-box">
      <h4>📋 Préparez votre conformité DORA avec CloudSecure</h4>
      <p>Nos consultants spécialisés en réglementation financière et en cybersécurité cloud vous accompagnent dans votre mise en conformité DORA. De l'évaluation initiale à la contractualisation, en passant par les tests de résilience, nous couvrons l'ensemble du périmètre. Contactez-nous pour un diagnostic de votre exposition DORA.</p>
    </div>

    <h2>Conclusion</h2>
    <p>DORA marque un tournant dans la régulation de la résilience numérique en Europe. Pour les entreprises tech qui servent le secteur financier, c'est à la fois un défi et une opportunité. Le défi est réel : les exigences sont détaillées, les délais sont stricts, et la supervision est renforcée. L'opportunité l'est tout autant : les prestataires conformes DORA se différencient sur un marché où la confiance est le premier critère de sélection. Commencez dès maintenant par évaluer votre exposition et votre maturité — chaque mois de retard rend la mise en conformité plus complexe et plus coûteuse.</p>
  </BlogLayout>
);

export default ConformiteDoraGuide;