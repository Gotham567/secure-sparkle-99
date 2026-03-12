import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CertificationsSection from "@/components/CertificationsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <CertificationsSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
