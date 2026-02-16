import Navbar from "@/components/anvora/Navbar";
import HeroSection from "@/components/anvora/HeroSection";
import ServicesSection from "@/components/anvora/ServicesSection";
import CommunitySection from "@/components/anvora/CommunitySection";
import TestimonialsSection from "@/components/anvora/TestimonialsSection";
import CTASection from "@/components/anvora/CTASection";
import Footer from "@/components/anvora/Footer";
import ScrollProgress from "@/components/anvora/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
