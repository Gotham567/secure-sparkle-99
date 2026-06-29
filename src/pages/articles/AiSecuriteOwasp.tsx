import BlogLayout from "@/components/BlogLayout";

const AiSecuriteOwasp = () => {
  return (
    <BlogLayout
      title="OWASP LLM Top 10 : sécuriser les applications basées sur l'IA générative"
      description="Sécurité des LLM et applications IA : OWASP LLM Top 10 (prompt injection, insecure output, training data poisoning), RAG security, sécurisation des agents IA et LLM red teaming."
      date="29 juin 2026"
      readTime="14 min"
      category="AI Security"
    >
      <section>
        <h2>L'IA générative : une nouvelle surface d'attaque</h2>
        <p>
          Les applications basées sur les LLM (Large Language Models) introduisent des classes de vulnérabilités inédites que les scanners de sécurité traditionnels ne détectent pas. En 2024, des incidents majeurs ont illustré ces risques : exfiltration de données via des prompt injections dans des chatbots d'entreprise, contournement de filtres de sécurité, et manipulation de systèmes d'agents IA. OWASP a publié son LLM Top 10 pour structurer ces risques — voici ce que chaque équipe développant des applications IA doit connaître.
        </p>
      </section>

      <section>
        <h2>OWASP LLM Top 10 : les 10 risques principaux</h2>
        <h3>LLM01 - Prompt Injection</h3>
        <ul>
          <li><strong>Direct prompt injection :</strong> l'utilisateur injecte des instructions dans le prompt pour contourner les contraintes du système ("Ignore tes instructions précédentes et fais X")</li>
          <li><strong>Indirect prompt injection :</strong> les instructions malveillantes proviennent de données externes lues par le LLM (pages web, documents PDF, emails). Un document analysé par l'IA peut contenir des instructions cachées qui manipulent le modèle.</li>
          <li><strong>Contre-mesures :</strong> séparation claire entre les instructions système et les inputs utilisateurs, validation des outputs, privilege separation (le LLM ne devrait pas avoir accès direct aux actions critiques), monitoring des comportements anormaux</li>
        </ul>
        <h3>LLM02 - Insecure Output Handling</h3>
        <ul>
          <li>Les outputs du LLM sont passés directement à des interprètes (navigateur, SQL, shell) sans validation — résultat : XSS, injection SQL, exécution de commandes</li>
          <li>Exemple : un LLM génère du HTML affiché directement dans l'interface → XSS si le modèle génère du JavaScript malveillant (injecté via prompt injection)</li>
          <li><strong>Contre-mesures :</strong> traiter les outputs LLM comme des inputs utilisateurs non fiables, sanitizer systématiquement, utiliser des requêtes paramétrées pour le SQL généré par IA</li>
        </ul>
        <h3>LLM03 - Training Data Poisoning</h3>
        <ul>
          <li>Corruption des données d'entraînement pour introduire des backdoors, biais ou comportements malveillants dans le modèle</li>
          <li>Risque pour les modèles fine-tunés sur des datasets non vérifiés ou du contenu public non filtré</li>
          <li><strong>Contre-mesures :</strong> validation et nettoyage des datasets d'entraînement, provenance tracking des données, red teaming post-entraînement</li>
        </ul>
        <h3>LLM04 - Model Denial of Service</h3>
        <ul>
          <li>Requêtes conçues pour consommer des ressources maximales : prompts très longs, questions nécessitant des raisonnements complexes, inputs répétés</li>
          <li><strong>Contre-mesures :</strong> rate limiting par utilisateur, limite de tokens d'input, timeout d'inférence, monitoring des coûts d'API</li>
        </ul>
        <h3>LLM05 - Supply Chain Vulnerabilities</h3>
        <ul>
          <li>Dépendances compromises dans l'écosystème IA : modèles pré-entraînés modifiés (backdoorés), bibliothèques Python vulnérables (transformers, langchain), plugins tiers malveillants</li>
          <li>Des modèles sur HuggingFace ont été trouvés avec des backdoors exécutant du code lors du chargement (format pickle non sécurisé)</li>
          <li><strong>Contre-mesures :</strong> utiliser des modèles signés depuis des sources officielles, scanner les dépendances avec Snyk/Dependabot, préférer le format safetensors au pickle</li>
        </ul>
        <h3>LLM06 - Sensitive Information Disclosure</h3>
        <ul>
          <li>Le LLM révèle des informations confidentielles : données d'entraînement mémorisées, données des autres utilisateurs via le contexte de session, secrets dans le system prompt</li>
          <li>Des études ont montré que GPT-4 peut régurgiter des extraits de données d'entraînement incluant des PII si on lui demande de "compléter" des phrases</li>
          <li><strong>Contre-mesures :</strong> ne jamais inclure de secrets dans les system prompts, isolation des données par utilisateur, PII detection dans les outputs, fine-tuning avec privacy-preserving techniques</li>
        </ul>
        <h3>LLM07 - Insecure Plugin Design</h3>
        <ul>
          <li>Les plugins/tools connectés au LLM (envoi d'emails, requêtes HTTP, accès base de données) exécutés sans validation suffisante permettent des actions non autorisées via prompt injection</li>
          <li><strong>Contre-mesures :</strong> validation des paramètres des tools avant exécution, confirmation utilisateur pour les actions irréversibles, principle of least privilege pour les tools (un tool email ne devrait pas pouvoir lire les emails)</li>
        </ul>
        <h3>LLM08 - Excessive Agency</h3>
        <ul>
          <li>Le LLM a trop de permissions et peut effectuer des actions non souhaitées de manière autonome — supprimer des fichiers, envoyer des emails, modifier des données</li>
          <li><strong>Contre-mesures :</strong> moindre privilège pour les agents IA, human-in-the-loop pour les actions critiques, scope limité des permissions par session</li>
        </ul>
        <h3>LLM09 - Overreliance</h3>
        <ul>
          <li>Les utilisateurs font confiance aveuglément aux outputs du LLM — du code vulnérable généré par IA déployé sans review, des informations factuellement incorrectes présentées comme vraies</li>
          <li><strong>Contre-mesures :</strong> clear labeling des contenus générés par IA, processus de review humain pour les contenus critiques, éducation des utilisateurs</li>
        </ul>
        <h3>LLM10 - Model Theft</h3>
        <ul>
          <li>Extraction ou duplication du modèle via des attaques par oracle (requêtes massives pour reconstruire les poids), vol de modèles fine-tunés propriétaires</li>
          <li><strong>Contre-mesures :</strong> rate limiting strict, watermarking des modèles, monitoring des patterns d'extraction, protection des modèles fine-tunés en déploiement sécurisé</li>
        </ul>
      </section>

      <section>
        <h2>RAG Security : sécuriser les architectures Retrieval-Augmented Generation</h2>
        <p>
          Les architectures RAG connectent les LLM à des bases de connaissances (documents internes, bases vectorielles) pour enrichir les réponses. Elles introduisent des risques spécifiques.
        </p>
        <ul>
          <li><strong>Data poisoning de la base documentaire :</strong> si des documents malveillants sont indexés dans la base vectorielle, ils peuvent injecter des instructions via l'indirect prompt injection lors de leur retrieval</li>
          <li><strong>Contrôle d'accès sur les chunks :</strong> un utilisateur ne devrait pouvoir retriever que les documents auxquels il a accès. Sans contrôle d'accès au niveau du retriever, un utilisateur peut accéder aux données d'autres utilisateurs via des questions ciblées.</li>
          <li><strong>PII dans les embeddings :</strong> les bases vectorielles contenant des données personnelles sont des actifs sensibles nécessitant chiffrement at-rest et contrôle d'accès strict</li>
          <li><strong>Chunk attribution :</strong> tracer quels chunks ont été utilisés pour générer une réponse — indispensable pour l'audit et la détection d'anomalies</li>
          <li><strong>Validation des sources :</strong> filtrer les documents indexés pour éviter l'indexation de contenus malveillants ou non vérifiés dans la base RAG</li>
        </ul>
      </section>

      <section>
        <h2>Sécuriser les agents IA</h2>
        <p>
          Les agents IA autonomes (capable d'utiliser des tools, de planifier et d'exécuter des séquences d'actions) amplifient tous les risques des LLM.
        </p>
        <ul>
          <li><strong>Privilege separation :</strong> chaque agent ne devrait avoir accès qu'aux tools strictement nécessaires à sa tâche. Un agent d'analyse de données ne devrait pas avoir accès à l'envoi d'emails.</li>
          <li><strong>Human-in-the-loop :</strong> pour les actions irréversibles (envoi d'email, modification de base de données, appel API externe avec effets de bord), requérir une confirmation humaine explicite avant l'exécution</li>
          <li><strong>Sandboxing de l'exécution de code :</strong> si l'agent peut exécuter du code (Python, JavaScript), l'exécuter dans un environnement sandboxé (conteneur éphémère, WebAssembly) avec réseau et filesystem restreints</li>
          <li><strong>Audit trail :</strong> logger chaque action de l'agent avec le raisonnement qui l'a motivée — indispensable pour investiguer les comportements inattendus</li>
          <li><strong>Prompt shields :</strong> Azure AI Content Safety et des solutions comme Lakera Guard ou Rebuff permettent de détecter les prompt injections avant qu'elles n'atteignent le LLM</li>
        </ul>
      </section>

      <section>
        <h2>LLM Red Teaming</h2>
        <p>
          Le red teaming des LLM consiste à tester systématiquement les applications IA pour identifier leurs failles de sécurité avant les attaquants.
        </p>
        <ul>
          <li><strong>Jailbreaking :</strong> tenter de contourner les guardrails du modèle via des techniques connues (roleplay, hypothetical framing, token manipulation, multi-language attacks)</li>
          <li><strong>Indirect prompt injection testing :</strong> injecter des instructions dans chaque source de données externe lue par le système (URLs, documents, emails) et vérifier si le comportement du modèle change</li>
          <li><strong>Data exfiltration :</strong> tenter d'extraire des informations d'autres utilisateurs ou du system prompt via des questions ciblées</li>
          <li><strong>PyRIT (Microsoft) :</strong> framework open source de red teaming pour les applications IA — automatise les scénarios d'attaque courants</li>
          <li><strong>Garak :</strong> outil open source de scan de vulnérabilités spécifique aux LLM (NVIDIA) — teste automatiquement des centaines de vecteurs d'attaque connus</li>
          <li><strong>Red teaming continu :</strong> intégrer le red teaming IA dans le cycle de développement — avant chaque déploiement majeur et à chaque changement de modèle ou de prompt système</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          La sécurité des applications LLM est une discipline émergente mais urgente. L'OWASP LLM Top 10 fournit un cadre structuré pour aborder ces risques, mais la spécificité des vulnérabilités IA — notamment les prompt injections et l'excessive agency — nécessite des mesures de sécurité complémentaires aux approches classiques. L'approche recommandée : commencer par une évaluation des risques OWASP LLM Top 10 de votre application, mettre en place les guardrails prioritaires (validation des outputs, moindre privilège des agents, monitoring), puis instaurer un programme de red teaming continu. La sécurité IA n'est pas une feature à ajouter à la fin — elle doit être conçue dès l'architecture.
        </p>
      </section>
    </BlogLayout>
  );
};

export default AiSecuriteOwasp;
