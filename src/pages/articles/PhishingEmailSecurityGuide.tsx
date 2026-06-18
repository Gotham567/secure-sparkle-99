import BlogLayout from "@/components/BlogLayout";
import { Link } from "react-router-dom";

const PhishingEmailSecurityGuide = () => {
  return (
    <BlogLayout
      title="Sécurité email et anti-phishing : guide complet pour les entreprises 2026"
      description="Guide expert anti-phishing : SPF, DKIM, DMARC, BIMI, MTA-STS, protection contre le BEC, AiTM et QR phishing. Comparatif Proofpoint, Mimecast, Microsoft Defender et bonnes pratiques."
      date="6 avril 2026"
      readTime="18 min"
      category="Cybersécurité"
    >
      <p className="lead">
        L'email reste <strong>le vecteur n°1 des cyberattaques en 2026</strong> :
        plus de 90% des intrusions débutent par un message piégé (Verizon
        DBIR). Phishing, BEC (Business Email Compromise), QR phishing,
        attaques AiTM contournant la MFA… Les techniques évoluent vite. Ce
        guide complet vous donne la méthode et les outils pour sécuriser
        durablement votre messagerie.
      </p>

      <h2>1. Panorama des menaces email en 2026</h2>
      <ul>
        <li><strong>Phishing classique</strong> : usurpation de marque, vol d'identifiants.</li>
        <li><strong>Spear phishing</strong> : ciblé, basé sur OSINT et LinkedIn.</li>
        <li><strong>BEC / fraude au président</strong> : 2,9 Md$ de pertes en 2023 (FBI IC3).</li>
        <li><strong>AiTM (Adversary-in-the-Middle)</strong> : kits Evilginx, Tycoon, contournent la MFA TOTP/push.</li>
        <li><strong>Quishing</strong> : phishing par QR code, contourne les filtres URL.</li>
        <li><strong>Vendor Email Compromise</strong> : compromission d'un fournisseur pour piéger sa base clients.</li>
        <li><strong>Phishing assisté par IA générative</strong> : copies parfaites en français, sans faute.</li>
      </ul>

      <h2>2. Les protocoles d'authentification email à activer</h2>
      <h3>2.1 SPF (Sender Policy Framework)</h3>
      <p>
        Définit dans le DNS la liste des serveurs autorisés à envoyer pour
        votre domaine. À configurer en <code>-all</code> (hard fail) une fois
        l'inventaire stabilisé.
      </p>

      <h3>2.2 DKIM (DomainKeys Identified Mail)</h3>
      <p>
        Signature cryptographique des emails. Clé minimale 2048 bits, rotation
        annuelle, sélecteurs distincts par expéditeur (marketing,
        transactionnel, RH).
      </p>

      <h3>2.3 DMARC (Domain-based Message Authentication, Reporting &amp; Conformance)</h3>
      <p>
        Politique qui aligne SPF/DKIM avec le domaine visible. Trajectoire à
        suivre : <code>p=none</code> (observation) →{" "}
        <code>p=quarantine</code> → <code>p=reject</code>. Les rapports RUA
        permettent de détecter les usages non autorisés.
      </p>
      <p>
        <strong>Important 2026</strong> : Google et Yahoo imposent DMARC pour
        tout expéditeur de masse depuis 2024. Microsoft suit la même
        trajectoire.
      </p>

      <h3>2.4 BIMI et VMC</h3>
      <p>
        BIMI affiche votre logo dans la boîte de réception (Gmail, Apple
        Mail). Nécessite DMARC en <code>quarantine</code> ou <code>reject</code>{" "}
        et un certificat VMC (Verified Mark Certificate). Booste la confiance
        et la délivrabilité.
      </p>

      <h3>2.5 MTA-STS et TLS-RPT</h3>
      <p>
        MTA-STS force le chiffrement TLS entre serveurs de messagerie et
        empêche les attaques de downgrade. TLS-RPT remonte les rapports
        d'échecs.
      </p>

      <h2>3. Solutions de sécurité email (SEG &amp; ICES)</h2>
      <h3>3.1 SEG traditionnels</h3>
      <ul>
        <li><strong>Proofpoint</strong> : leader, très fort sur la threat intel et la détection BEC.</li>
        <li><strong>Mimecast</strong> : suite complète (email security, archivage, awareness).</li>
        <li><strong>Barracuda Email Protection</strong> : bon rapport qualité/prix PME.</li>
        <li><strong>Cisco Secure Email</strong> : large parc, intégration SecureX.</li>
      </ul>

      <h3>3.2 ICES (Integrated Cloud Email Security) – API-based</h3>
      <ul>
        <li><strong>Microsoft Defender for Office 365 Plan 2</strong> : natif M365, Safe Links/Attachments, attack simulation.</li>
        <li><strong>Abnormal Security</strong> : ML comportemental, excellent contre BEC et VEC.</li>
        <li><strong>Avanan (Check Point)</strong> : déploiement API, multi-plateforme (M365, Google Workspace).</li>
        <li><strong>Tessian / Proofpoint Adaptive</strong> : prévention DLP et BEC par ML.</li>
      </ul>

      <h3>3.3 Tendance 2026 : ICES en complément du SEG natif</h3>
      <p>
        Beaucoup d'organisations gardent Microsoft Defender comme première
        ligne et ajoutent un ICES API-based pour la détection BEC avancée et
        la post-delivery remediation.
      </p>

      <h2>4. Lutter contre l'AiTM et le contournement de MFA</h2>
      <ul>
        <li>
          Passer à des facteurs <strong>phishing resistant</strong> : passkeys,
          FIDO2 — voir notre{" "}
          <Link to="/actualites/zero-trust-architecture-guide" className="text-primary hover:underline">
            guide Zero Trust
          </Link>.
        </li>
        <li>Conditional Access : exiger un device compliant et un emplacement de confiance.</li>
        <li>Token binding et continuous access evaluation (CAE) Entra ID.</li>
        <li>Détection de session hijacking via les signaux de risque (impossible travel, anomalies ASN).</li>
      </ul>

      <h2>5. Sensibilisation et simulation de phishing</h2>
      <p>
        80% des incidents commencent par un clic humain. La sensibilisation
        continue est <strong>obligatoire</strong> et exigée par NIS2.
      </p>
      <ul>
        <li>Plateformes : KnowBe4, Proofpoint Security Awareness, Hoxhunt, Cofense, Riot.</li>
        <li>Campagnes mensuelles, scénarios réalistes, modules &lt; 5 min.</li>
        <li>Mesurer le <strong>taux de signalement</strong> (bouton « Report Phish ») plus que le taux de clic.</li>
        <li>Onboarding sécurité dans les 7 premiers jours d'un nouvel arrivant.</li>
      </ul>

      <h2>6. Réponse à incident phishing : playbook en 6 étapes</h2>
      <ol>
        <li><strong>Détection</strong> : signalement utilisateur, alerte SEG/ICES, télémétrie EDR.</li>
        <li><strong>Confinement</strong> : suppression du message dans toutes les boîtes (clawback), blocage des URL/IOC.</li>
        <li><strong>Investigation</strong> : qui a cliqué, qui a saisi des identifiants, sessions actives.</li>
        <li><strong>Remédiation identité</strong> : reset MDP, révocation des tokens (Entra ID <em>revokeSignInSessions</em>), recheck MFA.</li>
        <li><strong>Threat hunting</strong> : recherche d'autres victimes et de pivots latéraux dans le{" "}
          <Link to="/actualites/casb-securite-saas-guide" className="text-primary hover:underline">SaaS</Link>.
        </li>
        <li>
          <strong>Retour d'expérience</strong> aligné avec votre{" "}
          <Link to="/actualites/reponse-incidents-cybersecurite-guide" className="text-primary hover:underline">
            plan de réponse aux incidents
          </Link>.
        </li>
      </ol>

      <h2>7. Sécuriser les expéditions sortantes (DLP &amp; chiffrement)</h2>
      <ul>
        <li><strong>DLP email</strong> : détecter les fuites de données (IBAN, NIR, secrets) avant envoi externe.</li>
        <li><strong>Chiffrement de bout en bout</strong> : S/MIME pour les échanges sensibles, ou solutions type Microsoft Purview Message Encryption.</li>
        <li><strong>Tagging de classification</strong> : Public, Interne, Confidentiel, Secret.</li>
        <li><strong>Alertes sur envoi atypique</strong> (gros volume, destinataire externe inhabituel).</li>
      </ul>

      <h2>8. Conformité réglementaire</h2>
      <ul>
        <li>
          <Link to="/actualites/conformite-nis2-guide" className="text-primary hover:underline">NIS2</Link>{" "}
          : sensibilisation cyber obligatoire, mesures contre le phishing.
        </li>
        <li>
          <Link to="/actualites/rgpd-securite-cloud-guide" className="text-primary hover:underline">RGPD</Link>{" "}
          : protection des données personnelles transitant par email.
        </li>
        <li>
          <Link to="/actualites/iso-27001-cloud-guide" className="text-primary hover:underline">ISO 27001</Link>{" "}
          A.6.3 (sensibilisation), A.8.23 (web filtering).
        </li>
        <li><strong>PCI-DSS</strong> : interdiction d'envoyer un PAN en clair par email.</li>
      </ul>

      <h2>9. Checklist anti-phishing en 10 points</h2>
      <ol>
        <li>DMARC <code>p=reject</code> sur tous les domaines actifs et parqués.</li>
        <li>SPF, DKIM, MTA-STS, TLS-RPT, BIMI activés et monitorés.</li>
        <li>SEG ou ICES avec sandboxing d'URL et de pièces jointes.</li>
        <li>MFA phishing-resistant (passkeys, FIDO2) pour tous les comptes.</li>
        <li>Conditional Access avec device compliance et risk-based.</li>
        <li>Bouton « Report Phish » dans Outlook et Gmail.</li>
        <li>Campagnes de simulation mensuelles + formation continue.</li>
        <li>Playbook IR phishing testé deux fois par an.</li>
        <li>DLP sortant + chiffrement disponible à la demande.</li>
        <li>Revue trimestrielle des rapports DMARC RUA/RUF.</li>
      </ol>

      <h2>10. Conclusion</h2>
      <p>
        Sécuriser l'email en 2026 ne se résume plus à un antispam : c'est un
        écosystème combinant authentification (SPF/DKIM/DMARC), filtrage
        avancé (SEG + ICES), identité forte (passkeys, Conditional Access),
        sensibilisation et réponse outillée. Chez CloudSecure, nous auditons
        votre posture email et déployons une protection alignée NIS2 et ISO
        27001. À lire ensuite :{" "}
        <Link to="/actualites/protection-ransomware-entreprise-guide" className="text-primary hover:underline">Protection ransomware</Link>,{" "}
        <Link to="/actualites/edr-vs-xdr-comparatif-guide" className="text-primary hover:underline">EDR vs XDR</Link>,{" "}
        <Link to="/actualites/casb-securite-saas-guide" className="text-primary hover:underline">CASB &amp; Shadow IT</Link>.
      </p>
    </BlogLayout>
  );
};

export default PhishingEmailSecurityGuide;
