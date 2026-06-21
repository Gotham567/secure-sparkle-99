import BlogLayout from "@/components/BlogLayout";

const SbomSupplyChainSecurity = () => {
  return (
    <BlogLayout
      title="SBOM et sécurité de la chaîne logicielle : protéger contre les attaques supply chain"
      description="Software Bill of Materials (SBOM), formats SPDX et CycloneDX, attaques XZ Utils et SolarWinds, outils Syft/Grype, conformité Cyber Resilience Act et NIS2."
      date="10 juin 2026"
      readTime="11 min"
      category="DevSecOps"
    >
      <p className="lead">
        L'attaque XZ Utils de mars 2024 a démontré que même les composants open source les
        plus utilisés peuvent être compromis par un acteur malveillant infiltré en tant que
        mainteneur. Le <strong>Software Bill of Materials (SBOM)</strong> est devenu la réponse
        réglementaire et technique à ce défi. Rendu obligatoire pour les logiciels vendus aux
        administrations américaines depuis l'Executive Order de 2021, il arrive en Europe
        avec le <strong>Cyber Resilience Act</strong>.
      </p>

      <h2>1. Qu'est-ce qu'un SBOM ?</h2>
      <p>
        Un SBOM (Software Bill of Materials) est un <strong>inventaire formel et structuré
        de tous les composants logiciels</strong> d'une application : dépendances directes,
        dépendances transitives, bibliothèques open source, composants commerciaux, versions,
        licences et origines.
      </p>
      <p>
        Analogie : le SBOM est à un logiciel ce que la liste d'ingrédients est à un produit
        alimentaire. Il permet de savoir exactement ce que contient votre application et de
        réagir immédiatement quand une dépendance est compromise.
      </p>

      <h2>2. Les formats standards : SPDX et CycloneDX</h2>
      <ul>
        <li>
          <strong>SPDX</strong> (Software Package Data Exchange, Linux Foundation) : format le plus ancien et le plus utilisé pour les aspects de licence. Formats : JSON, XML, RDF, tag-value.
          Adopté par l'NTIA (США) comme format de référence.
        </li>
        <li>
          <strong>CycloneDX</strong> (OWASP) : format orienté sécurité, supporte la notion de VEX (Vulnerability Exploitability eXchange) pour indiquer si une CVE est exploitable dans le contexte de l'application.
          Plus adapté pour les workflows DevSecOps.
        </li>
      </ul>
      <p>
        Le <strong>Cyber Resilience Act européen</strong> (CRA, entré en vigueur en 2025)
        exigera un SBOM pour tous les produits connectés vendus en Europe d'ici 2027.
      </p>

      <h2>3. Attaques supply chain majeures : leçons apprises</h2>

      <h3>SolarWinds (2020)</h3>
      <p>
        Le groupe APT29 (Cozy Bear) a compromis le processus de build de SolarWinds Orion,
        injectant un backdoor dans les mises à jour signées numériquement. 18 000 organisations,
        dont des agences gouvernementales américaines, ont été compromises. Un SBOM n'aurait pas
        empêché l'attaque mais aurait accéléré la détection et la réponse.
      </p>

      <h3>Log4Shell (CVE-2021-44228)</h3>
      <p>
        La vulnérabilité dans Log4j 2, présente dans des milliers d'applications Java,
        a mis des mois à être identifiée et patchée car les entreprises ne savaient pas si
        elles utilisaient Log4j. Avec un SBOM à jour, la réponse aurait été réduite de semaines à heures.
      </p>

      <h3>XZ Utils (CVE-2024-3094)</h3>
      <p>
        Un attaquant a passé deux ans à gagner la confiance de la communauté open source
        avant d'injecter une backdoor dans XZ Utils, un outil de compression présent dans
        la plupart des distributions Linux. Découvert par hasard avant déploiement massif.
        Illustre le risque des dépendances maintenues par des volontaires individuels.
      </p>

      <h2>4. Générer et maintenir un SBOM</h2>

      <h3>Outils de génération</h3>
      <ul>
        <li><strong>Syft</strong> (Anchore, open source) : génère des SBOMs SPDX ou CycloneDX à partir d'images Docker, de systèmes de fichiers, de code source.</li>
        <li><strong>Trivy</strong> : génère des SBOMs en plus des scans de vulnérabilités.</li>
        <li><strong>CycloneDX CLI</strong> : outil officiel OWASP pour créer et valider des SBOMs CycloneDX.</li>
        <li><strong>cdxgen</strong> : supporte 20+ langages (npm, Maven, pip, Gradle, cargo, Go modules).</li>
      </ul>

      <h3>Analyse de vulnérabilités sur SBOM</h3>
      <ul>
        <li><strong>Grype</strong> (Anchore) : analyse un SBOM SPDX/CycloneDX et corrèle avec les bases de données CVE (NVD, GitHub Advisory, OSV).</li>
        <li><strong>OWASP Dependency-Check</strong> : pour les projets Java, .NET, Node.js.</li>
        <li><strong>OSV-Scanner</strong> (Google) : intégration avec OSV.dev, base de données ouverte des vulnérabilités.</li>
      </ul>

      <h3>Intégration CI/CD</h3>
      <p>
        Générer le SBOM à chaque build, le stocker dans le registre d'artefacts (avec l'image Docker
        ou le package), et déclencher automatiquement une alerte si une nouvelle CVE critique
        est publiée affectant un composant listé dans les SBOMs de production.
      </p>

      <h2>5. VEX : Vulnerability Exploitability eXchange</h2>
      <p>
        Le VEX est un complément au SBOM qui permet à un éditeur d'indiquer l'exploitabilité
        réelle d'une CVE dans son produit :
      </p>
      <ul>
        <li><strong>Not Affected</strong> : la CVE existe dans la dépendance mais le code vulnérable n'est pas appelé.</li>
        <li><strong>Affected</strong> : la CVE est exploitable dans ce produit — patch nécessaire.</li>
        <li><strong>Fixed</strong> : la CVE a été corrigée dans cette version.</li>
        <li><strong>Under Investigation</strong> : analyse en cours.</li>
      </ul>
      <p>
        Le VEX réduit drastiquement les faux positifs dans les scans de vulnérabilités
        et permet aux équipes de sécurité de se concentrer sur les risques réels.
      </p>

      <h2>6. Conformité réglementaire</h2>
      <ul>
        <li><strong>Cyber Resilience Act (CRA)</strong> : SBOM obligatoire pour les produits connectés vendus dans l'UE. Entrée en vigueur progressive jusqu'en 2027.</li>
        <li><strong>NIS2</strong> : gestion des risques de la chaîne d'approvisionnement (art. 21) — le SBOM est un outil clé pour démontrer la maîtrise des dépendances.</li>
        <li><strong>DORA</strong> : pour les entités financières, cartographie des dépendances tier-1 et tier-2 avec évaluation des risques.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Le SBOM n'est pas une contrainte bureaucratique mais un <strong>outil de visibilité
        indispensable</strong> dans un monde où 80 % du code d'une application moderne provient
        de sources externes. Intégré dans votre pipeline DevSecOps, il vous permet de répondre
        en quelques heures à la prochaine Log4Shell plutôt qu'en plusieurs semaines.
        Avec le CRA et NIS2, c'est aussi une obligation réglementaire inéluctable.
      </p>
    </BlogLayout>
  );
};

export default SbomSupplyChainSecurity;
