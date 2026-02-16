import Navbar from "@/components/anvora/Navbar";
import HeroSection from "@/components/anvora/HeroSection";
import FounderSection from "@/components/anvora/FounderSection";
import ProcessSection from "@/components/anvora/ProcessSection";
import ServicesSection from "@/components/anvora/ServicesSection";
import PortfolioSection from "@/components/anvora/PortfolioSection";
import CommunitySection from "@/components/anvora/CommunitySection";
import TestimonialsSection from "@/components/anvora/TestimonialsSection";
import CTASection from "@/components/anvora/CTASection";
import Footer from "@/components/anvora/Footer";
import ScrollProgress from "@/components/anvora/ScrollProgress";
import StickyWhatsApp from "@/components/anvora/StickyWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <FounderSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
