import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SecuriteCloudBruxelles from "./pages/cities/SecuriteCloudBruxelles.tsx";
import SecuriteCloudLiege from "./pages/cities/SecuriteCloudLiege.tsx";
import SecuriteCloudNamur from "./pages/cities/SecuriteCloudNamur.tsx";
import SecuriteCloudCharleroi from "./pages/cities/SecuriteCloudCharleroi.tsx";
import SecuriteCloudMons from "./pages/cities/SecuriteCloudMons.tsx";
import SecuriteCloudGeneve from "./pages/cities/SecuriteCloudGeneve.tsx";
import SecuriteCloudLausanne from "./pages/cities/SecuriteCloudLausanne.tsx";
import SecuriteCloudFribourg from "./pages/cities/SecuriteCloudFribourg.tsx";
import SecuriteCloudNeuchatel from "./pages/cities/SecuriteCloudNeuchatel.tsx";
import SecuriteCloudLuxembourg from "./pages/cities/SecuriteCloudLuxembourg.tsx";
import SecuriteCloudEschSurAlzette from "./pages/cities/SecuriteCloudEschSurAlzette.tsx";
import SecuriteCloudMontreal from "./pages/cities/SecuriteCloudMontreal.tsx";
import SecuriteCloudQuebec from "./pages/cities/SecuriteCloudQuebec.tsx";
import SecuriteCloudGatineau from "./pages/cities/SecuriteCloudGatineau.tsx";
import SecuriteCloudSherbrooke from "./pages/cities/SecuriteCloudSherbrooke.tsx";
import SecuriteCloudMonaco from "./pages/cities/SecuriteCloudMonaco.tsx";
import SecuriteCloudMulhouse from "./pages/cities/SecuriteCloudMulhouse.tsx";
import SecuriteCloudChambery from "./pages/cities/SecuriteCloudChambery.tsx";
import SecuriteCloudNiort from "./pages/cities/SecuriteCloudNiort.tsx";
import SecuriteCloudQuimper from "./pages/cities/SecuriteCloudQuimper.tsx";
import SecuriteCloudLorient from "./pages/cities/SecuriteCloudLorient.tsx";
import SecuriteCloudVannes from "./pages/cities/SecuriteCloudVannes.tsx";
import SecuriteCloudSaintNazaire from "./pages/cities/SecuriteCloudSaintNazaire.tsx";
import SecuriteCloudCalais from "./pages/cities/SecuriteCloudCalais.tsx";
import SecuriteCloudValenciennes from "./pages/cities/SecuriteCloudValenciennes.tsx";
import SecuriteCloudArras from "./pages/cities/SecuriteCloudArras.tsx";
import SecuriteCloudBourges from "./pages/cities/SecuriteCloudBourges.tsx";
import SecuriteCloudChartres from "./pages/cities/SecuriteCloudChartres.tsx";
import SecuriteCloudCherbourg from "./pages/cities/SecuriteCloudCherbourg.tsx";
import SecuriteCloudLaval from "./pages/cities/SecuriteCloudLaval.tsx";
import SecuriteCloudCholet from "./pages/cities/SecuriteCloudCholet.tsx";
import SecuriteCloudAngouleme from "./pages/cities/SecuriteCloudAngouleme.tsx";
import SecuriteCloudPerigueux from "./pages/cities/SecuriteCloudPerigueux.tsx";
import SecuriteCloudTarbes from "./pages/cities/SecuriteCloudTarbes.tsx";
import SecuriteCloudAlbi from "./pages/cities/SecuriteCloudAlbi.tsx";
import SecuriteCloudBeziers from "./pages/cities/SecuriteCloudBeziers.tsx";
import SecuriteCloudCarcassonne from "./pages/cities/SecuriteCloudCarcassonne.tsx";
import SecuriteCloudNarbonne from "./pages/cities/SecuriteCloudNarbonne.tsx";
import SecuriteCloudAntibes from "./pages/cities/SecuriteCloudAntibes.tsx";
import SecuriteCloudCannes from "./pages/cities/SecuriteCloudCannes.tsx";
import SecuriteCloudFrejus from "./pages/cities/SecuriteCloudFrejus.tsx";
import SecuriteCloudAjaccio from "./pages/cities/SecuriteCloudAjaccio.tsx";
import SecuriteCloudBastia from "./pages/cities/SecuriteCloudBastia.tsx";
import SecuriteCloudBelfort from "./pages/cities/SecuriteCloudBelfort.tsx";
import SecuriteCloudAuxerre from "./pages/cities/SecuriteCloudAuxerre.tsx";
import SecuriteCloudThionville from "./pages/cities/SecuriteCloudThionville.tsx";
import SecuriteCloudEvreux from "./pages/cities/SecuriteCloudEvreux.tsx";
import SecuriteCloudVersailles from "./pages/cities/SecuriteCloudVersailles.tsx";
import SecuriteCloudCreteil from "./pages/cities/SecuriteCloudCreteil.tsx";
import SecuriteCloudNanterre from "./pages/cities/SecuriteCloudNanterre.tsx";
import SecuriteCloudToulon from "./pages/cities/SecuriteCloudToulon.tsx";
import SecuriteCloudAixEnProvence from "./pages/cities/SecuriteCloudAixEnProvence.tsx";
import SecuriteCloudBrest from "./pages/cities/SecuriteCloudBrest.tsx";
import SecuriteCloudDijon from "./pages/cities/SecuriteCloudDijon.tsx";
import SecuriteCloudAngers from "./pages/cities/SecuriteCloudAngers.tsx";
import SecuriteCloudSaintEtienne from "./pages/cities/SecuriteCloudSaintEtienne.tsx";
import SecuriteCloudLeMans from "./pages/cities/SecuriteCloudLeMans.tsx";
import SecuriteCloudAmiens from "./pages/cities/SecuriteCloudAmiens.tsx";
import SecuriteCloudTours from "./pages/cities/SecuriteCloudTours.tsx";
import SecuriteCloudLimoges from "./pages/cities/SecuriteCloudLimoges.tsx";
import SecuriteCloudMetz from "./pages/cities/SecuriteCloudMetz.tsx";
import SecuriteCloudNancy from "./pages/cities/SecuriteCloudNancy.tsx";
import SecuriteCloudCaen from "./pages/cities/SecuriteCloudCaen.tsx";
import SecuriteCloudOrleans from "./pages/cities/SecuriteCloudOrleans.tsx";
import SecuriteCloudReims from "./pages/cities/SecuriteCloudReims.tsx";
import SecuriteCloudPau from "./pages/cities/SecuriteCloudPau.tsx";
import SecuriteCloudPerpignan from "./pages/cities/SecuriteCloudPerpignan.tsx";
import SecuriteCloudBesancon from "./pages/cities/SecuriteCloudBesancon.tsx";
import SecuriteCloudAvignon from "./pages/cities/SecuriteCloudAvignon.tsx";
import SecuriteCloudLaRochelle from "./pages/cities/SecuriteCloudLaRochelle.tsx";
import SecuriteCloudNimes from "./pages/cities/SecuriteCloudNimes.tsx";
import SecuriteCloudAnnecy from "./pages/cities/SecuriteCloudAnnecy.tsx";
import SecuriteCloudColmar from "./pages/cities/SecuriteCloudColmar.tsx";
import SecuriteCloudBordeaux from "./pages/cities/SecuriteCloudBordeaux.tsx";
import SecuriteCloudMontpellier from "./pages/cities/SecuriteCloudMontpellier.tsx";
import SecuriteCloudBayonne from "./pages/cities/SecuriteCloudBayonne.tsx";
import SecuriteCloudValence from "./pages/cities/SecuriteCloudValence.tsx";
import SecuriteCloudPoitiers from "./pages/cities/SecuriteCloudPoitiers.tsx";
import SecuriteCloudDunkerque from "./pages/cities/SecuriteCloudDunkerque.tsx";
import SecuriteCloudTroyes from "./pages/cities/SecuriteCloudTroyes.tsx";
import SecuriteCloudParis from "./pages/cities/SecuriteCloudParis.tsx";
import SecuriteCloudLyon from "./pages/cities/SecuriteCloudLyon.tsx";
import SecuriteCloudMarseille from "./pages/cities/SecuriteCloudMarseille.tsx";
import SecuriteCloudToulouse from "./pages/cities/SecuriteCloudToulouse.tsx";
import SecuriteCloudNantes from "./pages/cities/SecuriteCloudNantes.tsx";
import SecuriteCloudLille from "./pages/cities/SecuriteCloudLille.tsx";
import SecuriteCloudNice from "./pages/cities/SecuriteCloudNice.tsx";
import SecuriteCloudRennes from "./pages/cities/SecuriteCloudRennes.tsx";
import SecuriteCloudStrasbourg from "./pages/cities/SecuriteCloudStrasbourg.tsx";
import SecuriteCloudGrenoble from "./pages/cities/SecuriteCloudGrenoble.tsx";
import SecuriteCloudRouen from "./pages/cities/SecuriteCloudRouen.tsx";
import SecuriteCloudClermontFerrand from "./pages/cities/SecuriteCloudClermontFerrand.tsx";
import Actualites from "./pages/Actualites.tsx";
import AuditCybersecuriteGuide from "./pages/articles/AuditCybersecuriteGuide.tsx";
import PentestEntrepriseGuide from "./pages/articles/PentestEntrepriseGuide.tsx";
import ChoisirPrestataireCybersecurite from "./pages/articles/ChoisirPrestataireCybersecurite.tsx";
import CybersecuritePmeGuide from "./pages/articles/CybersecuritePmeGuide.tsx";
import SecuriteCloudGuide from "./pages/articles/SecuriteCloudGuide.tsx";
import AuditAwsGuide from "./pages/articles/AuditAwsGuide.tsx";
import SecuriteAzureStartups from "./pages/articles/SecuriteAzureStartups.tsx";
import IaCybersecuriteRisques from "./pages/articles/IaCybersecuriteRisques.tsx";
import CoutAuditAws from "./pages/articles/CoutAuditAws.tsx";
import AwsVsAzureSecurite from "./pages/articles/AwsVsAzureSecurite.tsx";
import ErreursSecuriteCloud from "./pages/articles/ErreursSecuriteCloud.tsx";
import SecuriserDonneesGoogleCloud from "./pages/articles/SecuriserDonneesGoogleCloud.tsx";
import IaGenerativeRisques from "./pages/articles/IaGenerativeRisques.tsx";
import AuditSecuriteCloudDebut from "./pages/articles/AuditSecuriteCloudDebut.tsx";
import ZeroTrustGuide from "./pages/articles/ZeroTrustGuide.tsx";
import Soc2ComplianceGuide from "./pages/articles/Soc2ComplianceGuide.tsx";
import SecuriteKubernetesGuide from "./pages/articles/SecuriteKubernetesGuide.tsx";
import ConformiteDoraGuide from "./pages/articles/ConformiteDoraGuide.tsx";
import ConformiteNis2Guide from "./pages/articles/ConformiteNis2Guide.tsx";
import DevsecopsGuide from "./pages/articles/DevsecopsGuide.tsx";
import RgpdSecuriteCloudGuide from "./pages/articles/RgpdSecuriteCloudGuide.tsx";
import Iso27001CloudGuide from "./pages/articles/Iso27001CloudGuide.tsx";
import ReponseIncidentsGuide from "./pages/articles/ReponseIncidentsGuide.tsx";
import SecuriteMultiCloudGuide from "./pages/articles/SecuriteMultiCloudGuide.tsx";
import SecuriteServerlessGuide from "./pages/articles/SecuriteServerlessGuide.tsx";
import GestionSecretsVaultGuide from "./pages/articles/GestionSecretsVaultGuide.tsx";
import CasbSecuriteSaasGuide from "./pages/articles/CasbSecuriteSaasGuide.tsx";
import SecuriteApiOwaspGuide from "./pages/articles/SecuriteApiOwaspGuide.tsx";
import RansomwareProtectionGuide from "./pages/articles/RansomwareProtectionGuide.tsx";
import EdrXdrComparatifGuide from "./pages/articles/EdrXdrComparatifGuide.tsx";
import SocSiemManageGuide from "./pages/articles/SocSiemManageGuide.tsx";
import MfaIamCloudGuide from "./pages/articles/MfaIamCloudGuide.tsx";
import PhishingEmailSecurityGuide from "./pages/articles/PhishingEmailSecurityGuide.tsx";
import SecuriteInfrastructureCode from "./pages/articles/SecuriteInfrastructureCode.tsx";
import AwsWellArchitectedSecurite from "./pages/articles/AwsWellArchitectedSecurite.tsx";
import SecuriteAzureEntraId from "./pages/articles/SecuriteAzureEntraId.tsx";
import CspmGuide from "./pages/articles/CspmGuide.tsx";
import PentestCloudGuide from "./pages/articles/PentestCloudGuide.tsx";
import FAQ from "./pages/FAQ.tsx";
import Tarifs from "./pages/Tarifs.tsx";
import Contact from "./pages/Contact.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
