import BlogLayout from "@/components/BlogLayout";

const SecuriteActiveDirectoryEntreprise = () => {
  return (
    <BlogLayout
      title="Sécuriser Active Directory : BloodHound, PingCastle et modèle de Tiering"
      description="Guide complet de hardening Active Directory : modèle Tier 0/1/2, détection avec BloodHound, audit PingCastle, Kerberoasting, délégations dangereuses et Protected Users."
      date="8 juin 2026"
      readTime="14 min"
      category="Infrastructure"
    >
      <p className="lead">
        Active Directory (AD) est le <strong>cœur névralgique</strong> de 90 % des entreprises
        utilisant des environnements Windows. C'est aussi la cible n°1 des attaquants :
        une fois l'AD compromis, l'ensemble du Système d'Information est sous contrôle.
        Selon l'ANSSI, <strong>75 % des incidents traités par le CERT-FR impliquent Active Directory</strong>.
        Voici la méthode complète pour durcir votre AD.
      </p>

      <h2>1. Le modèle de Tiering Active Directory</h2>
      <p>
        Le modèle en 3 tiers (Tier 0, 1, 2) isole les systèmes selon leur criticité et
        empêche la propagation latérale des attaques :
      </p>
      <ul>
        <li>
          <strong>Tier 0 — Contrôleurs de domaine et accès équivalents</strong> :
          Domain Controllers, systèmes de sauvegarde de l'AD, serveurs PKI internes, outils
          de gestion de l'AD (ADUC, ADSI Edit). C'est le niveau le plus sensible.
          Accès strictement limité aux administrateurs de domaine via des Privileged Access Workstations (PAW).
        </li>
        <li>
          <strong>Tier 1 — Serveurs applicatifs et d'infrastructure</strong> :
          serveurs de fichiers, messagerie, ERP, SQL, serveurs de virtualisation.
          Les comptes Tier 1 ne doivent jamais se connecter à des postes utilisateurs.
        </li>
        <li>
          <strong>Tier 2 — Postes de travail et utilisateurs finaux</strong> :
          postes Windows, laptops, utilisateurs standards. Isolation complète des accès Tier 0 et Tier 1.
        </li>
      </ul>
      <p>
        <strong>Règle absolue</strong> : un compte administrateur de Tier 0 ne doit JAMAIS
        s'authentifier sur un système de Tier 1 ou 2 — cela exposerait ses hash NTLM ou tickets Kerberos
        à des outils comme Mimikatz.
      </p>

      <h2>2. Les 10 vulnérabilités AD les plus fréquentes</h2>

      <h3>Kerberoasting</h3>
      <p>
        Tout utilisateur AD peut demander un ticket de service (TGS) pour un compte avec SPN,
        puis le cracker hors-ligne. Solution : utiliser des mots de passe de 25+ caractères
        aléatoires pour les comptes de service, ou adopter les gMSA (Group Managed Service Accounts).
      </p>

      <h3>AS-REP Roasting</h3>
      <p>
        Les comptes avec l'option "Ne pas exiger de pré-authentification Kerberos" exposent
        leurs hash de mot de passe sans authentification préalable. Auditer et désactiver
        cette option sur tous les comptes utilisateurs.
      </p>

      <h3>Pass-the-Hash / Pass-the-Ticket</h3>
      <p>
        Après extraction du hash NTLM ou d'un ticket Kerberos via Mimikatz, un attaquant
        peut s'authentifier sans connaître le mot de passe. Solutions : Protected Users security group,
        Credential Guard, suppression de NTLM sur les comptes sensibles.
      </p>

      <h3>DCSync</h3>
      <p>
        Un compte avec les droits de réplication de l'annuaire peut simuler un DC secondaire
        et extraire tous les hash de l'AD (y compris krbtgt et DSRM). Auditer les ACLs
        de réplication sur le partitionnement de domaine.
      </p>

      <h3>Délégations Kerberos non contraintes</h3>
      <p>
        La délégation non contrainte (Unconstrained Delegation) permet à un serveur de s'authentifier
        comme n'importe quel utilisateur auprès de n'importe quel service. Identifier et éliminer
        toutes les délégations non contraintes hors des DCs.
      </p>

      <h3>Autres vulnérabilités courantes</h3>
      <ul>
        <li>GPO trop permissives ou non vérifiées depuis des années.</li>
        <li>Membres excessifs dans Domain Admins (parfois des dizaines de comptes).</li>
        <li>Comptes de service avec droits admin de domaine.</li>
        <li>Mots de passe dans les attributs LDAP ou les descriptions de comptes.</li>
        <li>LDAP signing non forcé — permet l'attaque de relay NTLM.</li>
      </ul>

      <h2>3. Audit avec PingCastle</h2>
      <p>
        <strong>PingCastle</strong> (gratuit pour usage non commercial) génère un score de
        maturité AD de 0 à 100 et liste les vulnérabilités par ordre de criticité.
        À lancer sur un compte utilisateur standard (pas besoin de droits admin) :
        <code>PingCastle.exe --healthcheck --server ldap://dc01.domaine.local</code>
      </p>
      <p>Il identifie notamment : Kerberoastable accounts, délégations dangereuses, GPO orphelines,
        comptes sans mot de passe, durée de vie des tickets krbtgt.</p>
      <p>
        Compléments : <strong>Purple Knight</strong> (Semperis, gratuit), <strong>ORADAD</strong> (ANSSI, open source).
      </p>

      <h2>4. Cartographie des chemins d'attaque avec BloodHound</h2>
      <p>
        <strong>BloodHound</strong> (SpecterOps) collecte les relations AD (membres de groupes,
        délégations, ACLs, GPOs) et les visualise sous forme de graphe. Il identifie les
        <strong>chemins d'escalade de privilèges</strong> : depuis un compte compromis de Tier 2,
        combien de sauts pour atteindre Domain Admin ?
      </p>
      <p>
        À utiliser en mode défensif (BloodHound Community Edition) pour comprendre les risques
        avant qu'un attaquant ne le fasse offensivement (avec SharpHound, le collecteur).
      </p>

      <h2>5. Mesures de durcissement prioritaires</h2>
      <ul>
        <li>Réduire Domain Admins à 3-5 comptes maximum avec MFA (Windows Hello for Business ou smart card).</li>
        <li>Activer Protected Users pour tous les comptes privilegiés.</li>
        <li>Déployer Credential Guard sur tous les serveurs et postes sensibles.</li>
        <li>Mettre en place LAPS (Local Administrator Password Solution) pour les mots de passe locaux.</li>
        <li>Forcer LDAP Signing et Channel Binding.</li>
        <li>Désactiver NTLMv1, restreindre NTLMv2 progressivement.</li>
        <li>Activer l'audit Kerberos et NTLM dans les GPOs et centraliser les logs AD dans le SIEM.</li>
        <li>Isoler les DCs sur un VLAN dédié avec des ACLs réseau strictes.</li>
        <li>Changer le mot de passe krbtgt tous les 6 mois (double rotation pour invalider tous les Golden Tickets).</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        La sécurité d'Active Directory n'est pas un projet one-shot mais un programme continu.
        Commencez par un audit PingCastle pour identifier les priorités, implémentez le modèle
        de Tiering pour contenir la propagation, et utilisez BloodHound régulièrement pour
        identifier les nouveaux chemins d'attaque. L'investissement est substantiel mais le
        retour en termes de résilience est considérable : un AD durci stoppe la majorité des
        ransomwares et des APT avant qu'ils n'atteignent leurs objectifs.
      </p>
    </BlogLayout>
  );
};

export default SecuriteActiveDirectoryEntreprise;
