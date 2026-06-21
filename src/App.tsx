import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Actualites = lazy(() => import("./pages/Actualites.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const Tarifs = lazy(() => import("./pages/Tarifs.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite.tsx"));

// Articles
const AuditCybersecuriteGuide = lazy(() => import("./pages/articles/AuditCybersecuriteGuide.tsx"));
const PentestEntrepriseGuide = lazy(() => import("./pages/articles/PentestEntrepriseGuide.tsx"));
const ChoisirPrestataireCybersecurite = lazy(() => import("./pages/articles/ChoisirPrestataireCybersecurite.tsx"));
const CybersecuritePmeGuide = lazy(() => import("./pages/articles/CybersecuritePmeGuide.tsx"));
const SecuriteCloudGuide = lazy(() => import("./pages/articles/SecuriteCloudGuide.tsx"));
const AuditAwsGuide = lazy(() => import("./pages/articles/AuditAwsGuide.tsx"));
const SecuriteAzureStartups = lazy(() => import("./pages/articles/SecuriteAzureStartups.tsx"));
const IaCybersecuriteRisques = lazy(() => import("./pages/articles/IaCybersecuriteRisques.tsx"));
const CoutAuditAws = lazy(() => import("./pages/articles/CoutAuditAws.tsx"));
const AwsVsAzureSecurite = lazy(() => import("./pages/articles/AwsVsAzureSecurite.tsx"));
const ErreursSecuriteCloud = lazy(() => import("./pages/articles/ErreursSecuriteCloud.tsx"));
const SecuriserDonneesGoogleCloud = lazy(() => import("./pages/articles/SecuriserDonneesGoogleCloud.tsx"));
const IaGenerativeRisques = lazy(() => import("./pages/articles/IaGenerativeRisques.tsx"));
const AuditSecuriteCloudDebut = lazy(() => import("./pages/articles/AuditSecuriteCloudDebut.tsx"));
const ZeroTrustGuide = lazy(() => import("./pages/articles/ZeroTrustGuide.tsx"));
const Soc2ComplianceGuide = lazy(() => import("./pages/articles/Soc2ComplianceGuide.tsx"));
const SecuriteKubernetesGuide = lazy(() => import("./pages/articles/SecuriteKubernetesGuide.tsx"));
const ConformiteDoraGuide = lazy(() => import("./pages/articles/ConformiteDoraGuide.tsx"));
const ConformiteNis2Guide = lazy(() => import("./pages/articles/ConformiteNis2Guide.tsx"));
const DevsecopsGuide = lazy(() => import("./pages/articles/DevsecopsGuide.tsx"));
const RgpdSecuriteCloudGuide = lazy(() => import("./pages/articles/RgpdSecuriteCloudGuide.tsx"));
const Iso27001CloudGuide = lazy(() => import("./pages/articles/Iso27001CloudGuide.tsx"));
const ReponseIncidentsGuide = lazy(() => import("./pages/articles/ReponseIncidentsGuide.tsx"));
const SecuriteMultiCloudGuide = lazy(() => import("./pages/articles/SecuriteMultiCloudGuide.tsx"));
const SecuriteServerlessGuide = lazy(() => import("./pages/articles/SecuriteServerlessGuide.tsx"));
const GestionSecretsVaultGuide = lazy(() => import("./pages/articles/GestionSecretsVaultGuide.tsx"));
const CasbSecuriteSaasGuide = lazy(() => import("./pages/articles/CasbSecuriteSaasGuide.tsx"));
const SecuriteApiOwaspGuide = lazy(() => import("./pages/articles/SecuriteApiOwaspGuide.tsx"));
const RansomwareProtectionGuide = lazy(() => import("./pages/articles/RansomwareProtectionGuide.tsx"));
const EdrXdrComparatifGuide = lazy(() => import("./pages/articles/EdrXdrComparatifGuide.tsx"));
const SocSiemManageGuide = lazy(() => import("./pages/articles/SocSiemManageGuide.tsx"));
const MfaIamCloudGuide = lazy(() => import("./pages/articles/MfaIamCloudGuide.tsx"));
const PhishingEmailSecurityGuide = lazy(() => import("./pages/articles/PhishingEmailSecurityGuide.tsx"));
const SecuriteInfrastructureCode = lazy(() => import("./pages/articles/SecuriteInfrastructureCode.tsx"));
const AwsWellArchitectedSecurite = lazy(() => import("./pages/articles/AwsWellArchitectedSecurite.tsx"));
const SecuriteAzureEntraId = lazy(() => import("./pages/articles/SecuriteAzureEntraId.tsx"));
const CspmGuide = lazy(() => import("./pages/articles/CspmGuide.tsx"));
const PentestCloudGuide = lazy(() => import("./pages/articles/PentestCloudGuide.tsx"));
const CoutCyberattaqueEntreprise = lazy(() => import("./pages/articles/CoutCyberattaqueEntreprise.tsx"));
const PatchManagementSecurity = lazy(() => import("./pages/articles/PatchManagementSecurity.tsx"));
const SecuriteDockerConteneurs = lazy(() => import("./pages/articles/SecuriteDockerConteneurs.tsx"));
const ThreatModelingSTRIDE = lazy(() => import("./pages/articles/ThreatModelingSTRIDE.tsx"));
const RansomwareAsService = lazy(() => import("./pages/articles/RansomwareAsService.tsx"));
const SbomSupplyChainSecurity = lazy(() => import("./pages/articles/SbomSupplyChainSecurity.tsx"));
const SecuriteActiveDirectoryEntreprise = lazy(() => import("./pages/articles/SecuriteActiveDirectoryEntreprise.tsx"));

// Cities
const SecuriteCloudParis = lazy(() => import("./pages/cities/SecuriteCloudParis.tsx"));
const SecuriteCloudLyon = lazy(() => import("./pages/cities/SecuriteCloudLyon.tsx"));
const SecuriteCloudMarseille = lazy(() => import("./pages/cities/SecuriteCloudMarseille.tsx"));
const SecuriteCloudToulouse = lazy(() => import("./pages/cities/SecuriteCloudToulouse.tsx"));
const SecuriteCloudNantes = lazy(() => import("./pages/cities/SecuriteCloudNantes.tsx"));
const SecuriteCloudLille = lazy(() => import("./pages/cities/SecuriteCloudLille.tsx"));
const SecuriteCloudNice = lazy(() => import("./pages/cities/SecuriteCloudNice.tsx"));
const SecuriteCloudRennes = lazy(() => import("./pages/cities/SecuriteCloudRennes.tsx"));
const SecuriteCloudStrasbourg = lazy(() => import("./pages/cities/SecuriteCloudStrasbourg.tsx"));
const SecuriteCloudGrenoble = lazy(() => import("./pages/cities/SecuriteCloudGrenoble.tsx"));
const SecuriteCloudRouen = lazy(() => import("./pages/cities/SecuriteCloudRouen.tsx"));
const SecuriteCloudClermontFerrand = lazy(() => import("./pages/cities/SecuriteCloudClermontFerrand.tsx"));
const SecuriteCloudToulon = lazy(() => import("./pages/cities/SecuriteCloudToulon.tsx"));
const SecuriteCloudAixEnProvence = lazy(() => import("./pages/cities/SecuriteCloudAixEnProvence.tsx"));
const SecuriteCloudBrest = lazy(() => import("./pages/cities/SecuriteCloudBrest.tsx"));
const SecuriteCloudDijon = lazy(() => import("./pages/cities/SecuriteCloudDijon.tsx"));
const SecuriteCloudAngers = lazy(() => import("./pages/cities/SecuriteCloudAngers.tsx"));
const SecuriteCloudSaintEtienne = lazy(() => import("./pages/cities/SecuriteCloudSaintEtienne.tsx"));
const SecuriteCloudLeMans = lazy(() => import("./pages/cities/SecuriteCloudLeMans.tsx"));
const SecuriteCloudAmiens = lazy(() => import("./pages/cities/SecuriteCloudAmiens.tsx"));
const SecuriteCloudTours = lazy(() => import("./pages/cities/SecuriteCloudTours.tsx"));
const SecuriteCloudLimoges = lazy(() => import("./pages/cities/SecuriteCloudLimoges.tsx"));
const SecuriteCloudMetz = lazy(() => import("./pages/cities/SecuriteCloudMetz.tsx"));
const SecuriteCloudNancy = lazy(() => import("./pages/cities/SecuriteCloudNancy.tsx"));
const SecuriteCloudCaen = lazy(() => import("./pages/cities/SecuriteCloudCaen.tsx"));
const SecuriteCloudOrleans = lazy(() => import("./pages/cities/SecuriteCloudOrleans.tsx"));
const SecuriteCloudReims = lazy(() => import("./pages/cities/SecuriteCloudReims.tsx"));
const SecuriteCloudPau = lazy(() => import("./pages/cities/SecuriteCloudPau.tsx"));
const SecuriteCloudPerpignan = lazy(() => import("./pages/cities/SecuriteCloudPerpignan.tsx"));
const SecuriteCloudBesancon = lazy(() => import("./pages/cities/SecuriteCloudBesancon.tsx"));
const SecuriteCloudAvignon = lazy(() => import("./pages/cities/SecuriteCloudAvignon.tsx"));
const SecuriteCloudLaRochelle = lazy(() => import("./pages/cities/SecuriteCloudLaRochelle.tsx"));
const SecuriteCloudNimes = lazy(() => import("./pages/cities/SecuriteCloudNimes.tsx"));
const SecuriteCloudAnnecy = lazy(() => import("./pages/cities/SecuriteCloudAnnecy.tsx"));
const SecuriteCloudColmar = lazy(() => import("./pages/cities/SecuriteCloudColmar.tsx"));
const SecuriteCloudBordeaux = lazy(() => import("./pages/cities/SecuriteCloudBordeaux.tsx"));
const SecuriteCloudMontpellier = lazy(() => import("./pages/cities/SecuriteCloudMontpellier.tsx"));
const SecuriteCloudBayonne = lazy(() => import("./pages/cities/SecuriteCloudBayonne.tsx"));
const SecuriteCloudValence = lazy(() => import("./pages/cities/SecuriteCloudValence.tsx"));
const SecuriteCloudPoitiers = lazy(() => import("./pages/cities/SecuriteCloudPoitiers.tsx"));
const SecuriteCloudDunkerque = lazy(() => import("./pages/cities/SecuriteCloudDunkerque.tsx"));
const SecuriteCloudTroyes = lazy(() => import("./pages/cities/SecuriteCloudTroyes.tsx"));
const SecuriteCloudMulhouse = lazy(() => import("./pages/cities/SecuriteCloudMulhouse.tsx"));
const SecuriteCloudChambery = lazy(() => import("./pages/cities/SecuriteCloudChambery.tsx"));
const SecuriteCloudNiort = lazy(() => import("./pages/cities/SecuriteCloudNiort.tsx"));
const SecuriteCloudQuimper = lazy(() => import("./pages/cities/SecuriteCloudQuimper.tsx"));
const SecuriteCloudLorient = lazy(() => import("./pages/cities/SecuriteCloudLorient.tsx"));
const SecuriteCloudVannes = lazy(() => import("./pages/cities/SecuriteCloudVannes.tsx"));
const SecuriteCloudSaintNazaire = lazy(() => import("./pages/cities/SecuriteCloudSaintNazaire.tsx"));
const SecuriteCloudCalais = lazy(() => import("./pages/cities/SecuriteCloudCalais.tsx"));
const SecuriteCloudValenciennes = lazy(() => import("./pages/cities/SecuriteCloudValenciennes.tsx"));
const SecuriteCloudArras = lazy(() => import("./pages/cities/SecuriteCloudArras.tsx"));
const SecuriteCloudBourges = lazy(() => import("./pages/cities/SecuriteCloudBourges.tsx"));
const SecuriteCloudChartres = lazy(() => import("./pages/cities/SecuriteCloudChartres.tsx"));
const SecuriteCloudCherbourg = lazy(() => import("./pages/cities/SecuriteCloudCherbourg.tsx"));
const SecuriteCloudLaval = lazy(() => import("./pages/cities/SecuriteCloudLaval.tsx"));
const SecuriteCloudCholet = lazy(() => import("./pages/cities/SecuriteCloudCholet.tsx"));
const SecuriteCloudAngouleme = lazy(() => import("./pages/cities/SecuriteCloudAngouleme.tsx"));
const SecuriteCloudPerigueux = lazy(() => import("./pages/cities/SecuriteCloudPerigueux.tsx"));
const SecuriteCloudTarbes = lazy(() => import("./pages/cities/SecuriteCloudTarbes.tsx"));
const SecuriteCloudAlbi = lazy(() => import("./pages/cities/SecuriteCloudAlbi.tsx"));
const SecuriteCloudBeziers = lazy(() => import("./pages/cities/SecuriteCloudBeziers.tsx"));
const SecuriteCloudCarcassonne = lazy(() => import("./pages/cities/SecuriteCloudCarcassonne.tsx"));
const SecuriteCloudNarbonne = lazy(() => import("./pages/cities/SecuriteCloudNarbonne.tsx"));
const SecuriteCloudAntibes = lazy(() => import("./pages/cities/SecuriteCloudAntibes.tsx"));
const SecuriteCloudCannes = lazy(() => import("./pages/cities/SecuriteCloudCannes.tsx"));
const SecuriteCloudFrejus = lazy(() => import("./pages/cities/SecuriteCloudFrejus.tsx"));
const SecuriteCloudAjaccio = lazy(() => import("./pages/cities/SecuriteCloudAjaccio.tsx"));
const SecuriteCloudBastia = lazy(() => import("./pages/cities/SecuriteCloudBastia.tsx"));
const SecuriteCloudBelfort = lazy(() => import("./pages/cities/SecuriteCloudBelfort.tsx"));
const SecuriteCloudAuxerre = lazy(() => import("./pages/cities/SecuriteCloudAuxerre.tsx"));
const SecuriteCloudThionville = lazy(() => import("./pages/cities/SecuriteCloudThionville.tsx"));
const SecuriteCloudEvreux = lazy(() => import("./pages/cities/SecuriteCloudEvreux.tsx"));
const SecuriteCloudVersailles = lazy(() => import("./pages/cities/SecuriteCloudVersailles.tsx"));
const SecuriteCloudCreteil = lazy(() => import("./pages/cities/SecuriteCloudCreteil.tsx"));
const SecuriteCloudNanterre = lazy(() => import("./pages/cities/SecuriteCloudNanterre.tsx"));
const SecuriteCloudBruxelles = lazy(() => import("./pages/cities/SecuriteCloudBruxelles.tsx"));
const SecuriteCloudLiege = lazy(() => import("./pages/cities/SecuriteCloudLiege.tsx"));
const SecuriteCloudNamur = lazy(() => import("./pages/cities/SecuriteCloudNamur.tsx"));
const SecuriteCloudCharleroi = lazy(() => import("./pages/cities/SecuriteCloudCharleroi.tsx"));
const SecuriteCloudMons = lazy(() => import("./pages/cities/SecuriteCloudMons.tsx"));
const SecuriteCloudGeneve = lazy(() => import("./pages/cities/SecuriteCloudGeneve.tsx"));
const SecuriteCloudLausanne = lazy(() => import("./pages/cities/SecuriteCloudLausanne.tsx"));
const SecuriteCloudFribourg = lazy(() => import("./pages/cities/SecuriteCloudFribourg.tsx"));
const SecuriteCloudNeuchatel = lazy(() => import("./pages/cities/SecuriteCloudNeuchatel.tsx"));
const SecuriteCloudLuxembourg = lazy(() => import("./pages/cities/SecuriteCloudLuxembourg.tsx"));
const SecuriteCloudEschSurAlzette = lazy(() => import("./pages/cities/SecuriteCloudEschSurAlzette.tsx"));
const SecuriteCloudMontreal = lazy(() => import("./pages/cities/SecuriteCloudMontreal.tsx"));
const SecuriteCloudQuebec = lazy(() => import("./pages/cities/SecuriteCloudQuebec.tsx"));
const SecuriteCloudGatineau = lazy(() => import("./pages/cities/SecuriteCloudGatineau.tsx"));
const SecuriteCloudSherbrooke = lazy(() => import("./pages/cities/SecuriteCloudSherbrooke.tsx"));
const SecuriteCloudMonaco = lazy(() => import("./pages/cities/SecuriteCloudMonaco.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/actualites/audit-cybersecurite-guide" element={<AuditCybersecuriteGuide />} />
            <Route path="/actualites/pentest-entreprise-guide" element={<PentestEntrepriseGuide />} />
            <Route path="/actualites/choisir-prestataire-cybersecurite" element={<ChoisirPrestataireCybersecurite />} />
            <Route path="/actualites/cybersecurite-pme-guide" element={<CybersecuritePmeGuide />} />
            <Route path="/actualites/securite-cloud-guide" element={<SecuriteCloudGuide />} />
            <Route path="/actualites/audit-aws-guide" element={<AuditAwsGuide />} />
            <Route path="/actualites/securite-azure-startups" element={<SecuriteAzureStartups />} />
            <Route path="/actualites/ia-cybersecurite-risques" element={<IaCybersecuriteRisques />} />
            <Route path="/actualites/cout-audit-aws-2025" element={<CoutAuditAws />} />
            <Route path="/actualites/aws-vs-azure-securite" element={<AwsVsAzureSecurite />} />
            <Route path="/actualites/erreurs-securite-cloud" element={<ErreursSecuriteCloud />} />
            <Route path="/actualites/securiser-donnees-google-cloud" element={<SecuriserDonneesGoogleCloud />} />
            <Route path="/actualites/ia-generative-risques-securite" element={<IaGenerativeRisques />} />
            <Route path="/actualites/audit-securite-cloud-debut" element={<AuditSecuriteCloudDebut />} />
            <Route path="/actualites/zero-trust-architecture-guide" element={<ZeroTrustGuide />} />
            <Route path="/actualites/soc2-compliance-guide" element={<Soc2ComplianceGuide />} />
            <Route path="/actualites/securite-kubernetes-guide" element={<SecuriteKubernetesGuide />} />
            <Route path="/actualites/conformite-dora-guide" element={<ConformiteDoraGuide />} />
            <Route path="/actualites/conformite-nis2-guide" element={<ConformiteNis2Guide />} />
            <Route path="/actualites/devsecops-guide" element={<DevsecopsGuide />} />
            <Route path="/actualites/rgpd-securite-cloud-guide" element={<RgpdSecuriteCloudGuide />} />
            <Route path="/actualites/iso-27001-cloud-guide" element={<Iso27001CloudGuide />} />
            <Route path="/actualites/reponse-incidents-cybersecurite-guide" element={<ReponseIncidentsGuide />} />
            <Route path="/actualites/securite-multi-cloud-guide" element={<SecuriteMultiCloudGuide />} />
            <Route path="/actualites/securite-serverless-guide" element={<SecuriteServerlessGuide />} />
            <Route path="/actualites/gestion-secrets-vault-guide" element={<GestionSecretsVaultGuide />} />
            <Route path="/actualites/casb-securite-saas-guide" element={<CasbSecuriteSaasGuide />} />
            <Route path="/actualites/securite-api-owasp-guide" element={<SecuriteApiOwaspGuide />} />
            <Route path="/actualites/protection-ransomware-entreprise-guide" element={<RansomwareProtectionGuide />} />
            <Route path="/actualites/edr-vs-xdr-comparatif-guide" element={<EdrXdrComparatifGuide />} />
            <Route path="/actualites/soc-siem-manage-guide" element={<SocSiemManageGuide />} />
            <Route path="/actualites/mfa-iam-cloud-guide" element={<MfaIamCloudGuide />} />
            <Route path="/actualites/phishing-email-securite-guide" element={<PhishingEmailSecurityGuide />} />
            <Route path="/actualites/securite-infrastructure-as-code-terraform-guide" element={<SecuriteInfrastructureCode />} />
            <Route path="/actualites/aws-well-architected-framework-securite" element={<AwsWellArchitectedSecurite />} />
            <Route path="/actualites/securite-azure-active-directory" element={<SecuriteAzureEntraId />} />
            <Route path="/actualites/cspm-cloud-security-posture-management-guide" element={<CspmGuide />} />
            <Route path="/actualites/pentest-cloud-aws-azure-guide" element={<PentestCloudGuide />} />
            <Route path="/actualites/cout-cyberattaque-entreprise-2026" element={<CoutCyberattaqueEntreprise />} />
            <Route path="/actualites/patch-management-cvss-nis2" element={<PatchManagementSecurity />} />
            <Route path="/actualites/securite-docker-conteneurs-guide" element={<SecuriteDockerConteneurs />} />
            <Route path="/actualites/threat-modeling-stride-guide" element={<ThreatModelingSTRIDE />} />
            <Route path="/actualites/ransomware-as-a-service-protection-2026" element={<RansomwareAsService />} />
            <Route path="/actualites/sbom-supply-chain-securite-logicielle" element={<SbomSupplyChainSecurity />} />
            <Route path="/actualites/securite-active-directory-enterprise-guide" element={<SecuriteActiveDirectoryEntreprise />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Cities */}
            <Route path="/securite-cloud-paris" element={<SecuriteCloudParis />} />
            <Route path="/securite-cloud-lyon" element={<SecuriteCloudLyon />} />
            <Route path="/securite-cloud-marseille" element={<SecuriteCloudMarseille />} />
            <Route path="/securite-cloud-toulouse" element={<SecuriteCloudToulouse />} />
            <Route path="/securite-cloud-nantes" element={<SecuriteCloudNantes />} />
            <Route path="/securite-cloud-lille" element={<SecuriteCloudLille />} />
            <Route path="/securite-cloud-nice" element={<SecuriteCloudNice />} />
            <Route path="/securite-cloud-rennes" element={<SecuriteCloudRennes />} />
            <Route path="/securite-cloud-strasbourg" element={<SecuriteCloudStrasbourg />} />
            <Route path="/securite-cloud-grenoble" element={<SecuriteCloudGrenoble />} />
            <Route path="/securite-cloud-rouen" element={<SecuriteCloudRouen />} />
            <Route path="/securite-cloud-clermont-ferrand" element={<SecuriteCloudClermontFerrand />} />
            <Route path="/securite-cloud-toulon" element={<SecuriteCloudToulon />} />
            <Route path="/securite-cloud-aix-en-provence" element={<SecuriteCloudAixEnProvence />} />
            <Route path="/securite-cloud-brest" element={<SecuriteCloudBrest />} />
            <Route path="/securite-cloud-dijon" element={<SecuriteCloudDijon />} />
            <Route path="/securite-cloud-angers" element={<SecuriteCloudAngers />} />
            <Route path="/securite-cloud-saint-etienne" element={<SecuriteCloudSaintEtienne />} />
            <Route path="/securite-cloud-le-mans" element={<SecuriteCloudLeMans />} />
            <Route path="/securite-cloud-amiens" element={<SecuriteCloudAmiens />} />
            <Route path="/securite-cloud-tours" element={<SecuriteCloudTours />} />
            <Route path="/securite-cloud-limoges" element={<SecuriteCloudLimoges />} />
            <Route path="/securite-cloud-metz" element={<SecuriteCloudMetz />} />
            <Route path="/securite-cloud-nancy" element={<SecuriteCloudNancy />} />
            <Route path="/securite-cloud-caen" element={<SecuriteCloudCaen />} />
            <Route path="/securite-cloud-orleans" element={<SecuriteCloudOrleans />} />
            <Route path="/securite-cloud-reims" element={<SecuriteCloudReims />} />
            <Route path="/securite-cloud-pau" element={<SecuriteCloudPau />} />
            <Route path="/securite-cloud-perpignan" element={<SecuriteCloudPerpignan />} />
            <Route path="/securite-cloud-besancon" element={<SecuriteCloudBesancon />} />
            <Route path="/securite-cloud-avignon" element={<SecuriteCloudAvignon />} />
            <Route path="/securite-cloud-la-rochelle" element={<SecuriteCloudLaRochelle />} />
            <Route path="/securite-cloud-nimes" element={<SecuriteCloudNimes />} />
            <Route path="/securite-cloud-annecy" element={<SecuriteCloudAnnecy />} />
            <Route path="/securite-cloud-colmar" element={<SecuriteCloudColmar />} />
            <Route path="/securite-cloud-bordeaux" element={<SecuriteCloudBordeaux />} />
            <Route path="/securite-cloud-montpellier" element={<SecuriteCloudMontpellier />} />
            <Route path="/securite-cloud-bayonne" element={<SecuriteCloudBayonne />} />
            <Route path="/securite-cloud-valence" element={<SecuriteCloudValence />} />
            <Route path="/securite-cloud-poitiers" element={<SecuriteCloudPoitiers />} />
            <Route path="/securite-cloud-dunkerque" element={<SecuriteCloudDunkerque />} />
            <Route path="/securite-cloud-troyes" element={<SecuriteCloudTroyes />} />
            <Route path="/securite-cloud-mulhouse" element={<SecuriteCloudMulhouse />} />
            <Route path="/securite-cloud-chambery" element={<SecuriteCloudChambery />} />
            <Route path="/securite-cloud-niort" element={<SecuriteCloudNiort />} />
            <Route path="/securite-cloud-quimper" element={<SecuriteCloudQuimper />} />
            <Route path="/securite-cloud-lorient" element={<SecuriteCloudLorient />} />
            <Route path="/securite-cloud-vannes" element={<SecuriteCloudVannes />} />
            <Route path="/securite-cloud-saint-nazaire" element={<SecuriteCloudSaintNazaire />} />
            <Route path="/securite-cloud-calais" element={<SecuriteCloudCalais />} />
            <Route path="/securite-cloud-valenciennes" element={<SecuriteCloudValenciennes />} />
            <Route path="/securite-cloud-arras" element={<SecuriteCloudArras />} />
            <Route path="/securite-cloud-bourges" element={<SecuriteCloudBourges />} />
            <Route path="/securite-cloud-chartres" element={<SecuriteCloudChartres />} />
            <Route path="/securite-cloud-cherbourg" element={<SecuriteCloudCherbourg />} />
            <Route path="/securite-cloud-laval" element={<SecuriteCloudLaval />} />
            <Route path="/securite-cloud-cholet" element={<SecuriteCloudCholet />} />
            <Route path="/securite-cloud-angouleme" element={<SecuriteCloudAngouleme />} />
            <Route path="/securite-cloud-perigueux" element={<SecuriteCloudPerigueux />} />
            <Route path="/securite-cloud-tarbes" element={<SecuriteCloudTarbes />} />
            <Route path="/securite-cloud-albi" element={<SecuriteCloudAlbi />} />
            <Route path="/securite-cloud-beziers" element={<SecuriteCloudBeziers />} />
            <Route path="/securite-cloud-carcassonne" element={<SecuriteCloudCarcassonne />} />
            <Route path="/securite-cloud-narbonne" element={<SecuriteCloudNarbonne />} />
            <Route path="/securite-cloud-antibes" element={<SecuriteCloudAntibes />} />
            <Route path="/securite-cloud-cannes" element={<SecuriteCloudCannes />} />
            <Route path="/securite-cloud-frejus" element={<SecuriteCloudFrejus />} />
            <Route path="/securite-cloud-ajaccio" element={<SecuriteCloudAjaccio />} />
            <Route path="/securite-cloud-bastia" element={<SecuriteCloudBastia />} />
            <Route path="/securite-cloud-belfort" element={<SecuriteCloudBelfort />} />
            <Route path="/securite-cloud-auxerre" element={<SecuriteCloudAuxerre />} />
            <Route path="/securite-cloud-thionville" element={<SecuriteCloudThionville />} />
            <Route path="/securite-cloud-evreux" element={<SecuriteCloudEvreux />} />
            <Route path="/securite-cloud-versailles" element={<SecuriteCloudVersailles />} />
            <Route path="/securite-cloud-creteil" element={<SecuriteCloudCreteil />} />
            <Route path="/securite-cloud-nanterre" element={<SecuriteCloudNanterre />} />
            <Route path="/securite-cloud-bruxelles" element={<SecuriteCloudBruxelles />} />
            <Route path="/securite-cloud-liege" element={<SecuriteCloudLiege />} />
            <Route path="/securite-cloud-namur" element={<SecuriteCloudNamur />} />
            <Route path="/securite-cloud-charleroi" element={<SecuriteCloudCharleroi />} />
            <Route path="/securite-cloud-mons" element={<SecuriteCloudMons />} />
            <Route path="/securite-cloud-geneve" element={<SecuriteCloudGeneve />} />
            <Route path="/securite-cloud-lausanne" element={<SecuriteCloudLausanne />} />
            <Route path="/securite-cloud-fribourg" element={<SecuriteCloudFribourg />} />
            <Route path="/securite-cloud-neuchatel" element={<SecuriteCloudNeuchatel />} />
            <Route path="/securite-cloud-luxembourg" element={<SecuriteCloudLuxembourg />} />
            <Route path="/securite-cloud-esch-sur-alzette" element={<SecuriteCloudEschSurAlzette />} />
            <Route path="/securite-cloud-montreal" element={<SecuriteCloudMontreal />} />
            <Route path="/securite-cloud-quebec" element={<SecuriteCloudQuebec />} />
            <Route path="/securite-cloud-gatineau" element={<SecuriteCloudGatineau />} />
            <Route path="/securite-cloud-sherbrooke" element={<SecuriteCloudSherbrooke />} />
            <Route path="/securite-cloud-monaco" element={<SecuriteCloudMonaco />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
