import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
