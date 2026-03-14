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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
