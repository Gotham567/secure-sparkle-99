import BlogLayout from "@/components/BlogLayout";
import { Link } from "react-router-dom";

const ReponseIncidentsGuide = () => {
  return (
    <BlogLayout
      title="Plan de réponse aux incidents cybersécurité : guide complet 2026"
      description="Construisez un plan de réponse aux incidents efficace : phases NIST, équipe CSIRT, playbooks ransomware, communication de crise et exercices de simulation."
      date="27 mars 2026"
      readTime="17 min"
      category="Gestion de crise"
    >
      <p className="lead">
        Face à une attaque, ce n'est pas la question du <em>si</em> mais du{" "}
        <em>quand</em> qui se pose. Selon l'ANSSI, plus de{" "}
        <strong>80% des entreprises françaises</strong> ont subi au moins une
        cyberattaque en 2024. Disposer d'un <strong>plan de réponse aux
        incidents (IRP)</strong> testé et opérationnel est aujourd'hui une
        exigence à la fois réglementaire (NIS2, DORA, RGPD) et commerciale. Ce
        guide vous donne la méthode complète pour construire le vôtre.
      </p>

      <h2>1. Qu'est-ce qu'un plan de réponse aux incidents ?</h2>
      <p>
        Un plan de réponse aux incidents (<em>Incident Response Plan</em>) est
        un <strong>document opérationnel</strong> qui définit qui fait quoi,
        comment et avec quels outils, en cas d'incident de sécurité. Il
        s'inscrit dans une démarche plus large de <em>cyber-résilience</em>{" "}
        couvrant prévention, détection, réponse et récupération.
      </p>
      <p>
        Le référentiel le plus utilisé est le{" "}
        <strong>NIST SP 800-61 r2</strong>, qui structure la réponse en{" "}
        <strong>4 phases</strong> : préparation, détection &amp; analyse,
        confinement &amp; éradication &amp; récupération, et post-incident.
      </p>

      <h2>2. Pourquoi c'est devenu incontournable en 2026</h2>
      <ul>
        <li>
          <strong>Coût moyen d'une violation</strong> : 4,88 M$ en 2024 (rapport
          IBM Cost of a Data Breach), avec une réduction d'environ 30% pour les
          organisations disposant d'un plan testé.
        </li>
        <li>
          <strong>Exigences réglementaires</strong> : la{" "}
          <Link to="/actualites/conformite-nis2-guide">directive NIS2</Link>{" "}
          impose une notification sous 24h, le RGPD sous 72h, et{" "}
          <Link to="/actualites/conformite-dora-guide">DORA</Link> exige des
          tests réguliers.
        </li>
        <li>
          <strong>Exigence assurantielle</strong> : les cyber-assureurs
          conditionnent désormais leurs garanties à l'existence d'un IRP
          documenté.
        </li>
        <li>
          <strong>Pression clients</strong> : audits sécurité de plus en plus
          fréquents dans les RFP.
        </li>
      </ul>

      <h2>3. Phase 1 — Préparation : la moitié du travail</h2>
      <p>
        Une réponse réussie se joue avant l'incident. Cette phase couvre :
      </p>

      <h3>3.1 Constituer l'équipe de réponse (CSIRT/CERT interne)</h3>
      <ul>
        <li><strong>Incident commander</strong> : décisionnaire global</li>
        <li><strong>Lead technique</strong> : analyse forensic et confinement</li>
        <li><strong>Communications</strong> : interne, clients, presse</li>
        <li><strong>Juridique &amp; DPO</strong> : notifications CNIL, ANSSI</li>
        <li><strong>Direction métier</strong> : arbitrages business</li>
        <li>
          <strong>Prestataires externes</strong> : un{" "}
          <strong>contrat de réponse à incident</strong> pré-négocié avec un
          PRIS (Prestataire de Réponse aux Incidents de Sécurité) qualifié
          ANSSI est fortement recommandé.
        </li>
      </ul>

      <h3>3.2 Outillage technique</h3>
      <ul>
        <li>EDR / XDR sur l'ensemble du parc</li>
        <li>SIEM avec rétention min. 12 mois</li>
        <li>Solution de forensic (mémoire, disque, cloud)</li>
        <li>Vault de credentials de break-glass</li>
        <li>Sauvegardes immuables et hors-ligne</li>
        <li>Canal de communication out-of-band (Signal, ligne dédiée)</li>
      </ul>

      <h3>3.3 Documentation</h3>
      <ul>
        <li>Cartographie SI à jour</li>
        <li>Inventaire des actifs critiques (couronne)</li>
        <li>Annuaire de crise avec contacts 24/7</li>
        <li>Playbooks par scénario (ransomware, phishing, fuite, DDoS…)</li>
      </ul>

      <h2>4. Phase 2 — Détection &amp; Analyse</h2>
      <p>L'objectif : qualifier l'événement et déterminer la portée réelle.</p>
      <ul>
        <li>
          <strong>Sources de détection</strong> : SIEM, EDR, alertes utilisateurs,
          notifications providers cloud, threat intelligence.
        </li>
        <li>
          <strong>Triage</strong> : faux positif ? incident mineur ? incident
          majeur ? Crise ?
        </li>
        <li>
          <strong>Classification de sévérité</strong> : P1 (critique) à P4
          (faible) avec délais de réponse associés.
        </li>
        <li>
          <strong>Forensic initial</strong> : préservation des preuves
          (snapshot, image disque, capture mémoire) <strong>avant</strong> toute
          action de remédiation.
        </li>
      </ul>

      <h2>5. Phase 3 — Confinement, éradication, récupération</h2>

      <h3>5.1 Confinement</h3>
      <p>
        Court terme : isoler les machines compromises, révoquer les
        credentials, bloquer les IP malveillantes. Long terme : durcir les
        accès, segmenter le réseau (lien fort avec une approche{" "}
        <Link to="/actualites/zero-trust-architecture-guide">
          Zero Trust
        </Link>
        ).
      </p>

      <h3>5.2 Éradication</h3>
      <p>
        Suppression des malwares, fermeture des comptes orphelins, patch des
        vulnérabilités exploitées, rotation complète des secrets.
      </p>

      <h3>5.3 Récupération</h3>
      <p>
        Restauration depuis sauvegardes <em>vérifiées saines</em>, remise en
        production progressive avec monitoring renforcé pendant minimum 30
        jours.
      </p>

      <h2>6. Phase 4 — Post-incident : le RETEX</h2>
      <p>Souvent négligée, c'est pourtant elle qui transforme un incident en progrès.</p>
      <ul>
        <li>Réunion RETEX dans les 15 jours suivant la clôture</li>
        <li>
          Analyse <em>blameless</em> : on cherche les causes systémiques, pas un coupable
        </li>
        <li>Plan d'action priorisé avec dates et responsables</li>
        <li>Mise à jour des playbooks et de l'analyse de risque</li>
        <li>Communication transparente à la direction et au CODIR sécurité</li>
      </ul>

      <h2>7. Playbook ransomware : le scénario le plus critique</h2>
      <ol>
        <li><strong>Isoler immédiatement</strong> les systèmes infectés du réseau</li>
        <li><strong>Couper les connexions VPN</strong> et accès à privilèges</li>
        <li><strong>Préserver les preuves</strong> (logs, mémoire, échantillons malware)</li>
        <li><strong>Notifier</strong> : direction, ANSSI (cybermalveillance.gouv.fr), CNIL si données personnelles</li>
        <li><strong>Déposer plainte</strong> auprès de la BL2C / police judiciaire</li>
        <li><strong>Ne pas payer la rançon</strong> (position officielle ANSSI)</li>
        <li><strong>Reconstruire</strong> à partir de sauvegardes saines, jamais sur l'existant</li>
        <li><strong>Communiquer</strong> en interne et auprès des clients impactés</li>
      </ol>

      <h2>8. Communication de crise : éviter les pièges classiques</h2>
      <ul>
        <li>Préparer en amont 3 messages types : interne, clients, presse</li>
        <li>Centraliser la parole : un seul porte-parole</li>
        <li>Privilégier la transparence factuelle à la communication corporate creuse</li>
        <li>Mettre à jour régulièrement (toutes les 4h en phase aiguë)</li>
        <li>Prévoir une page de statut dédiée</li>
      </ul>

      <h2>9. Tester son plan : exercices et simulations</h2>
      <ul>
        <li>
          <strong>Tabletop exercises</strong> : simulation sur table, 2 à 4 fois par an
        </li>
        <li>
          <strong>Red team</strong> : attaque réaliste menée par des pentesters
          (voir notre guide{" "}
          <Link to="/actualites/pentest-entreprise-guide">pentest</Link>)
        </li>
        <li>
          <strong>Purple team</strong> : exercice collaboratif attaquants/défenseurs
        </li>
        <li>
          <strong>TLPT (DORA)</strong> : Threat-Led Penetration Testing,
          obligatoire pour les entités financières critiques
        </li>
      </ul>

      <h2>10. Spécificités cloud : ce qui change</h2>
      <ul>
        <li>
          <strong>Forensic cloud</strong> : snapshots EBS, captures Azure Disk,
          export logs CloudTrail/Azure Monitor avant suppression
        </li>
        <li>
          <strong>Coordination provider</strong> : numéros support
          enterprise/premium activés
        </li>
        <li>
          <strong>Compromission de credentials cloud</strong> : rotation
          immédiate des access keys, révocation des sessions IAM, audit complet
          des activités via{" "}
          <Link to="/actualites/audit-aws-guide">CloudTrail</Link>
        </li>
        <li>
          <strong>Compromission Kubernetes</strong> : voir notre{" "}
          <Link to="/actualites/securite-kubernetes-guide">
            guide sécurité Kubernetes
          </Link>
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Un plan de réponse aux incidents n'est utile que s'il est connu, testé
        et tenu à jour. Investissez dans la préparation, pré-négociez vos
        contrats PRIS, formez vos équipes via des exercices réguliers : c'est
        ce qui fera la différence le jour J. Notre cabinet accompagne la
        construction et le test de plans de réponse aux incidents adaptés aux
        environnements cloud et hybrides.
      </p>
    </BlogLayout>
  );
};

export default ReponseIncidentsGuide;
