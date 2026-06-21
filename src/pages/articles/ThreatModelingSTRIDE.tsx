import BlogLayout from "@/components/BlogLayout";

const ThreatModelingSTRIDE = () => {
  return (
    <BlogLayout
      title="Threat modeling avec STRIDE : intégrer la sécurité dès la phase de conception"
      description="Appliquer STRIDE, PASTA et LINDDUN pour identifier les menaces en amont : ateliers, data flow diagrams, arbres d'attaque et intégration dans le pipeline CI/CD DevSecOps."
      date="14 juin 2026"
      readTime="12 min"
      category="Architecture"
    >
      <p className="lead">
        Le <strong>threat modeling</strong> (modélisation des menaces) est l'art d'identifier
        les risques de sécurité avant d'écrire la moindre ligne de code. Microsoft a introduit
        STRIDE dans les années 2000 ; aujourd'hui, des entreprises comme Google, Amazon et Netflix
        l'intègrent systématiquement dans leur processus de développement. Résultat :
        <strong>un bug de sécurité détecté en phase de conception coûte 30× moins cher</strong>
        à corriger qu'en production (IBM SEIS).
      </p>

      <h2>1. Qu'est-ce que le threat modeling ?</h2>
      <p>
        Le threat modeling est un processus structuré qui répond à 4 questions fondamentales :
      </p>
      <ul>
        <li><strong>Sur quoi travaille-t-on ?</strong> — Cartographie du système (data flow diagrams, composants, flux).</li>
        <li><strong>Qu'est-ce qui peut mal tourner ?</strong> — Identification des menaces avec STRIDE ou autre cadre.</li>
        <li><strong>Que fait-on à ce sujet ?</strong> — Contre-mesures, contrôles, décisions d'acceptation du risque.</li>
        <li><strong>Avons-nous bien fait notre travail ?</strong> — Validation et documentation.</li>
      </ul>

      <h2>2. La méthode STRIDE en détail</h2>
      <p>
        STRIDE est un acronyme mnémotechnique qui couvre 6 catégories de menaces,
        chacune associée à une propriété de sécurité à protéger :
      </p>
      <ul>
        <li><strong>S — Spoofing (Usurpation d'identité)</strong> : un attaquant se fait passer pour un utilisateur légitime ou un composant. Contre-mesure : authentification forte (MFA, certificats mutuels TLS).</li>
        <li><strong>T — Tampering (Altération des données)</strong> : modification non autorisée de données en transit ou au repos. Contre-mesure : intégrité cryptographique (HMAC, signatures numériques), journalisation immuable.</li>
        <li><strong>R — Repudiation (Répudiation)</strong> : un acteur nie avoir effectué une action. Contre-mesure : journalisation sécurisée, non-répudiation via signatures électroniques.</li>
        <li><strong>I — Information Disclosure (Divulgation)</strong> : exposition de données confidentielles. Contre-mesure : chiffrement (TLS 1.3, AES-256), principe du moindre privilège.</li>
        <li><strong>D — Denial of Service (Déni de service)</strong> : rendre le système indisponible. Contre-mesure : rate limiting, circuit breakers, auto-scaling, DDoS protection.</li>
        <li><strong>E — Elevation of Privilege (Élévation de privilège)</strong> : obtenir des droits supérieurs non autorisés. Contre-mesure : RBAC strict, sandboxing, validation des entrées.</li>
      </ul>

      <h2>3. Les étapes d'un atelier de threat modeling</h2>

      <h3>Étape 1 : Définir le périmètre</h3>
      <p>
        Délimiter le scope (une feature, un microservice, une API) et identifier les parties
        prenantes : architecte, développeur, responsable sécurité, product owner.
        Un atelier cible une seule feature pour rester actionnable (2 à 4 heures).
      </p>

      <h3>Étape 2 : Créer le Data Flow Diagram (DFD)</h3>
      <p>
        Le DFD représente visuellement les composants du système et leurs interactions :
      </p>
      <ul>
        <li>Entités externes (utilisateurs, systèmes tiers) — représentées par des rectangles.</li>
        <li>Processus (serveurs applicatifs, microservices) — représentés par des cercles.</li>
        <li>Flux de données — flèches avec direction et protocole (HTTPS, gRPC, SQL).</li>
        <li>Stockages (bases de données, S3, Redis) — représentés par des doubles barres.</li>
        <li>Frontières de confiance (Trust Boundaries) — zones délimitant les domaines de sécurité.</li>
      </ul>

      <h3>Étape 3 : Appliquer STRIDE sur chaque composant et flux</h3>
      <p>
        Pour chaque élément du DFD, poser systématiquement les 6 questions STRIDE.
        Une matrice composant × menace STRIDE permet de ne rien oublier.
        Chaque menace identifiée est documentée avec : description, impact, probabilité, contre-mesure proposée.
      </p>

      <h3>Étape 4 : Prioriser et planifier les contre-mesures</h3>
      <p>
        Utiliser le score DREAD ou une matrice risque (vraisemblance × impact) pour prioriser.
        Les remédiation sont intégrées dans le backlog produit avec une priorité définie.
        Les risques acceptés sont documentés et signés par le responsable produit ou RSSI.
      </p>

      <h3>Étape 5 : Valider et mettre à jour</h3>
      <p>
        Le threat model doit être revu à chaque changement architectural significatif.
        Intégrer un gate "Threat Model Review" dans le Definition of Done pour les nouvelles features.
      </p>

      <h2>4. Outils pour automatiser le threat modeling</h2>
      <ul>
        <li><strong>Microsoft Threat Modeling Tool</strong> : gratuit, basé sur STRIDE, génère automatiquement les menaces à partir des DFDs.</li>
        <li><strong>OWASP Threat Dragon</strong> : open source, interface web, intégration Git pour versionner les modèles.</li>
        <li><strong>IriusRisk</strong> : solution enterprise avec bibliothèques de menaces (cloud, API, IoT) et intégration JIRA.</li>
        <li><strong>Tutamen Threat Modeler</strong> : automatisation des DFDs depuis le code source (analyse statique).</li>
        <li><strong>Threagile</strong> : threat modeling as code (YAML), open source, génère des rapports PDF.</li>
      </ul>

      <h2>5. STRIDE vs PASTA vs LINDDUN</h2>
      <ul>
        <li><strong>STRIDE</strong> : idéal pour les équipes de développement — pratique, orienté technique.</li>
        <li><strong>PASTA</strong> (Process for Attack Simulation and Threat Analysis) : 7 étapes orientées risque business, idéal pour les RSSI et architectes.</li>
        <li><strong>LINDDUN</strong> : spécialisé dans la protection de la vie privée (RGPD) — Linkability, Identifiability, Non-repudiation, Detectability, Disclosure, Unawareness, Non-compliance.</li>
        <li><strong>MITRE ATT&amp;CK</strong> : complément au threat modeling pour aligner les menaces sur des TTPs réelles d'attaquants.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Le threat modeling n'est pas un audit ponctuel mais une <strong>pratique continue</strong>
        intégrée au cycle de développement. En appliquant STRIDE dès la phase de conception,
        les équipes détectent les failles architecturales avant qu'elles ne deviennent des
        vulnérabilités exploitables — réduisant à la fois le coût de correction et le risque
        d'incident en production. Pour les entités NIS2, c'est aussi un levier de conformité
        (art. 21 sur la sécurité de la chaîne d'approvisionnement et la sécurité dans le développement).
      </p>
    </BlogLayout>
  );
};

export default ThreatModelingSTRIDE;
