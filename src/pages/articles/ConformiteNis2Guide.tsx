import BlogLayout from "@/components/BlogLayout";
import { Link } from "react-router-dom";

const ConformiteNis2Guide = () => {
  return (
    <BlogLayout
      title="Directive NIS2 : guide complet de mise en conformité pour les entreprises"
      description="Tout savoir sur la directive européenne NIS2 : périmètre élargi, obligations de cybersécurité, sanctions, calendrier et plan d'action concret pour vous mettre en conformité."
      date="25 mars 2026"
      readTime="18 min"
      category="Conformité"
    >
      <section>
        <h2>Qu'est-ce que la directive NIS2 ?</h2>
        <p>
          La directive NIS2 (Network and Information Security 2) est la refonte majeure du cadre réglementaire européen en matière de cybersécurité. Adoptée en janvier 2023 et devant être transposée dans chaque État membre d'ici octobre 2024, elle remplace la directive NIS originale de 2016 avec un périmètre considérablement élargi.
        </p>
        <p>
          Là où NIS1 ne concernait qu'environ 300 entités en France, <strong>NIS2 étend ses obligations à plus de 15 000 organisations</strong>, couvrant 18 secteurs d'activité jugés critiques ou importants pour l'économie européenne.
        </p>

        <h3>Pourquoi NIS2 a-t-elle été créée ?</h3>
        <p>
          La multiplication des cyberattaques ciblant les infrastructures critiques (hôpitaux, administrations, chaînes d'approvisionnement) a révélé les limites de NIS1. Les principales lacunes identifiées étaient :
        </p>
        <ul>
          <li><strong>Périmètre trop restreint</strong> : de nombreux secteurs critiques échappaient à la réglementation</li>
          <li><strong>Harmonisation insuffisante</strong> : chaque pays appliquait des règles différentes, créant des disparités de protection</li>
          <li><strong>Sanctions peu dissuasives</strong> : l'absence de sanctions significatives limitait l'incitation à la conformité</li>
          <li><strong>Gestion de la supply chain</strong> : la sécurité des sous-traitants et fournisseurs n'était pas adressée</li>
        </ul>
      </section>

      <section>
        <h2>Qui est concerné par NIS2 ?</h2>
        <p>
          NIS2 distingue deux catégories d'entités soumises à des niveaux d'exigence différents :
        </p>

        <h3>Entités essentielles (EE)</h3>
        <p>
          Les entités essentielles sont celles dont la perturbation aurait un impact systémique sur l'économie ou la société :
        </p>
        <ul>
          <li><strong>Énergie</strong> : électricité, gaz, pétrole, hydrogène, chauffage urbain</li>
          <li><strong>Transport</strong> : aérien, ferroviaire, maritime, routier</li>
          <li><strong>Banques et infrastructures financières</strong></li>
          <li><strong>Santé</strong> : hôpitaux, laboratoires, fabricants de dispositifs médicaux</li>
          <li><strong>Eau potable et eaux usées</strong></li>
          <li><strong>Infrastructures numériques</strong> : fournisseurs DNS, cloud, data centers, CDN</li>
          <li><strong>Administration publique</strong></li>
          <li><strong>Espace</strong></li>
        </ul>

        <h3>Entités importantes (EI)</h3>
        <p>
          Les entités importantes couvrent un spectre plus large de secteurs :
        </p>
        <ul>
          <li><strong>Services postaux et courrier</strong></li>
          <li><strong>Gestion des déchets</strong></li>
          <li><strong>Industrie chimique et agroalimentaire</strong></li>
          <li><strong>Fabrication de dispositifs médicaux et électroniques</strong></li>
          <li><strong>Services numériques</strong> : places de marché, moteurs de recherche, réseaux sociaux</li>
          <li><strong>Recherche</strong></li>
        </ul>

        <h3>Critères de taille</h3>
        <p>
          Sont concernées les organisations de ces secteurs dépassant les seuils suivants :
        </p>
        <ul>
          <li><strong>Moyennes entreprises</strong> : 50 à 249 employés ou CA de 10 à 50 M€</li>
          <li><strong>Grandes entreprises</strong> : 250+ employés ou CA supérieur à 50 M€</li>
        </ul>
        <p>
          Attention : certaines entités sont incluses indépendamment de leur taille (fournisseurs DNS, registres de noms de domaine, prestataires de services de confiance).
        </p>
      </section>

      <section>
        <h2>Les 10 obligations clés de NIS2</h2>

        <h3>1. Gouvernance et responsabilité de la direction</h3>
        <p>
          NIS2 impose une responsabilité directe des dirigeants en matière de cybersécurité. Les organes de direction doivent approuver les mesures de gestion des risques et peuvent être tenus personnellement responsables en cas de manquement. Ils doivent également suivre une formation en cybersécurité.
        </p>

        <h3>2. Analyse et gestion des risques</h3>
        <p>
          Chaque entité doit mettre en place une approche systématique d'analyse des risques cyber couvrant l'ensemble de ses systèmes d'information. Cette analyse doit être documentée, régulièrement actualisée et servir de base aux décisions de sécurité.
        </p>

        <h3>3. Gestion des incidents</h3>
        <p>
          NIS2 impose un processus strict de notification des incidents significatifs :
        </p>
        <ul>
          <li><strong>Alerte précoce</strong> : dans les 24 heures suivant la détection</li>
          <li><strong>Notification complète</strong> : dans les 72 heures avec évaluation d'impact</li>
          <li><strong>Rapport final</strong> : dans le mois suivant, incluant les causes et mesures correctives</li>
        </ul>

        <h3>4. Continuité d'activité</h3>
        <p>
          Les entités doivent disposer de plans de continuité et de reprise d'activité (PCA/PRA) testés régulièrement, incluant la gestion de crise cyber et les procédures de sauvegarde et restauration.
        </p>

        <h3>5. Sécurité de la chaîne d'approvisionnement</h3>
        <p>
          C'est l'une des nouveautés majeures de NIS2 : les organisations doivent évaluer et gérer les risques liés à leurs fournisseurs et sous-traitants. Cela inclut des exigences contractuelles de sécurité et des audits réguliers.
        </p>

        <h3>6. Sécurité dans l'acquisition et le développement</h3>
        <p>
          La sécurité doit être intégrée dès la conception (security by design) dans l'acquisition, le développement et la maintenance des systèmes d'information, incluant la gestion des vulnérabilités.
        </p>

        <h3>7. Évaluation de l'efficacité des mesures</h3>
        <p>
          Les entités doivent mettre en place des processus d'évaluation continue de l'efficacité de leurs mesures de cybersécurité, via des audits, des tests d'intrusion et des exercices de simulation.
        </p>

        <h3>8. Pratiques de cyberhygiène et formation</h3>
        <p>
          La directive impose des programmes de sensibilisation et de formation à la cybersécurité pour l'ensemble des collaborateurs, ainsi que des politiques d'hygiène numérique (mots de passe, mises à jour, etc.).
        </p>

        <h3>9. Chiffrement et contrôle d'accès</h3>
        <p>
          Les organisations doivent déployer des politiques de chiffrement des données sensibles et de gestion des accès basées sur le principe du moindre privilège, incluant l'authentification multi-facteurs (MFA).
        </p>

        <h3>10. Reporting et coopération</h3>
        <p>
          NIS2 renforce la coopération entre États membres via le réseau CyCLONe et impose aux entités de partager des informations sur les menaces avec les autorités compétentes (ANSSI en France).
        </p>
      </section>

      <section>
        <h2>Sanctions prévues par NIS2</h2>
        <p>
          NIS2 introduit un régime de sanctions nettement plus sévère que son prédécesseur, s'inspirant du modèle RGPD :
        </p>
        <ul>
          <li><strong>Entités essentielles</strong> : amendes jusqu'à 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial</li>
          <li><strong>Entités importantes</strong> : amendes jusqu'à 7 millions d'euros ou 1,4 % du chiffre d'affaires annuel mondial</li>
          <li><strong>Responsabilité personnelle</strong> : les dirigeants peuvent être interdits d'exercer en cas de non-conformité répétée</li>
        </ul>
        <p>
          Au-delà des amendes, les autorités nationales disposent de pouvoirs d'inspection, d'injonction et de suspension d'activité qui peuvent avoir des conséquences opérationnelles majeures.
        </p>
      </section>

      <section>
        <h2>NIS2 vs NIS1 : les différences majeures</h2>
        <p>
          La comparaison entre les deux directives révèle l'ampleur de la transformation :
        </p>
        <ul>
          <li><strong>Périmètre</strong> : de 7 à 18 secteurs couverts, de 300 à 15 000+ entités en France</li>
          <li><strong>Gouvernance</strong> : responsabilité directe des dirigeants (absente de NIS1)</li>
          <li><strong>Supply chain</strong> : gestion obligatoire des risques fournisseurs (nouveau)</li>
          <li><strong>Notification</strong> : délai réduit à 24h pour l'alerte précoce (vs 72h pour NIS1)</li>
          <li><strong>Sanctions</strong> : alignement sur le modèle RGPD avec des amendes proportionnelles au CA</li>
          <li><strong>Harmonisation</strong> : cadre plus uniforme entre les États membres</li>
        </ul>
      </section>

      <section>
        <h2>Plan d'action en 6 étapes pour se conformer à NIS2</h2>

        <h3>Étape 1 : Déterminer votre statut (Semaines 1-2)</h3>
        <p>
          Identifiez si votre organisation entre dans le périmètre NIS2, en tant qu'entité essentielle ou importante. Analysez vos activités au regard des 18 secteurs couverts et vérifiez les critères de taille applicables.
        </p>

        <h3>Étape 2 : Réaliser un état des lieux (Mois 1-2)</h3>
        <p>
          Effectuez un <Link to="/actualites/audit-cybersecurite-guide" className="text-primary hover:underline">audit de cybersécurité complet</Link> pour évaluer votre niveau de maturité actuel par rapport aux exigences NIS2. Identifiez les écarts et priorisez les actions correctives.
        </p>

        <h3>Étape 3 : Mettre en place la gouvernance (Mois 2-3)</h3>
        <p>
          Désignez un responsable cybersécurité, formez les dirigeants, créez un comité de pilotage cyber et définissez les politiques de sécurité. Documentez l'engagement de la direction.
        </p>

        <h3>Étape 4 : Déployer les mesures techniques (Mois 3-8)</h3>
        <p>
          Implémentez les mesures techniques requises : gestion des accès (MFA, moindre privilège), chiffrement, segmentation réseau, monitoring, détection d'incidents. Sécurisez votre <Link to="/actualites/securite-cloud-guide" className="text-primary hover:underline">infrastructure cloud</Link> selon les bonnes pratiques.
        </p>

        <h3>Étape 5 : Gérer la chaîne d'approvisionnement (Mois 4-9)</h3>
        <p>
          Cartographiez vos fournisseurs critiques, évaluez leurs niveaux de sécurité, intégrez des clauses contractuelles de cybersécurité et mettez en place un processus de suivi régulier.
        </p>

        <h3>Étape 6 : Tester et améliorer en continu (Permanent)</h3>
        <p>
          Réalisez des <Link to="/actualites/pentest-entreprise-guide" className="text-primary hover:underline">tests d'intrusion</Link> réguliers, simulez des incidents, auditez vos processus et adaptez votre stratégie aux nouvelles menaces. La conformité NIS2 n'est pas un projet ponctuel mais une démarche continue.
        </p>
      </section>

      <section>
        <h2>NIS2 et les environnements cloud</h2>
        <p>
          Les fournisseurs de services cloud (IaaS, PaaS, SaaS) sont directement concernés par NIS2 en tant qu'infrastructures numériques. Mais au-delà des fournisseurs, toute entité régulée utilisant le cloud doit s'assurer que ses déploiements respectent les exigences de la directive.
        </p>
        <p>
          Cela implique notamment de :
        </p>
        <ul>
          <li>Vérifier les certifications et la conformité de vos fournisseurs cloud</li>
          <li>Mettre en place une <Link to="/actualites/zero-trust-architecture-guide" className="text-primary hover:underline">architecture Zero Trust</Link> pour le contrôle d'accès</li>
          <li>Assurer le chiffrement des données au repos et en transit</li>
          <li>Maintenir une visibilité complète sur vos actifs cloud (CSPM, CWPP)</li>
          <li>Documenter le modèle de responsabilité partagée avec chaque fournisseur</li>
        </ul>
      </section>

      <section>
        <h2>FAQ sur la directive NIS2</h2>

        <h3>Quand NIS2 entre-t-elle en vigueur en France ?</h3>
        <p>
          La transposition devait être finalisée pour octobre 2024. La France travaille sur son projet de loi de transposition. Les entités concernées doivent se préparer dès maintenant car les obligations s'appliquent dès la transposition effective.
        </p>

        <h3>Mon entreprise de 30 salariés est-elle concernée ?</h3>
        <p>
          En principe, les PME de moins de 50 salariés ne sont pas directement concernées, sauf si elles opèrent dans certains secteurs spécifiques (services DNS, registres de noms de domaine, prestataires de confiance) ou si elles sont identifiées comme critiques par les autorités.
        </p>

        <h3>Quel est le lien entre NIS2 et DORA ?</h3>
        <p>
          <Link to="/actualites/conformite-dora-guide" className="text-primary hover:underline">Le règlement DORA</Link> est un texte spécifique au secteur financier qui complète NIS2. Pour les entités financières, DORA prévaut en tant que lex specialis, mais NIS2 continue de s'appliquer pour les aspects non couverts par DORA.
        </p>

        <h3>Comment CloudSecure peut m'aider ?</h3>
        <p>
          CloudSecure accompagne les entreprises dans leur mise en conformité NIS2 avec des audits de maturité, des plans de remédiation personnalisés et un suivi continu. Notre expertise en sécurité cloud et notre plateforme <strong>cloudLightHouse</strong> permettent de répondre aux exigences techniques de la directive.
        </p>
      </section>
    </BlogLayout>
  );
};

export default ConformiteNis2Guide;
