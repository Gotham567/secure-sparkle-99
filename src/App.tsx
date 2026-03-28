import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
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
import FAQ from "./pages/FAQ.tsx";
import Tarifs from "./pages/Tarifs.tsx";
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tarifs" element={<Tarifs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
