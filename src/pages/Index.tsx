import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import AlgoLightHouseSection from "@/components/AlgoLightHouseSection";
import CertificationsSection from "@/components/CertificationsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import TawkTo from "@/components/TawkTo";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="CloudSecure – Sécurité Cloud & Audit AWS Azure | Cybersécurité IA"
        description="Cabinet expert en sécurité cloud, audit AWS et Azure, cybersécurité IA. Tests d'intrusion, conformité NIS2, RSSI externalisé pour startups et entreprises tech. Certifié PASSI & ISO 27001."
      />
      <TawkTo />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <AlgoLightHouseSection />
      <CertificationsSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
