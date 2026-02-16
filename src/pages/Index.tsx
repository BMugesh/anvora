import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StoryScroll } from "@/components/StoryScroll";
import { WhoWeAre } from "@/components/WhoWeAre";
import { HowItWorks } from "@/components/HowItWorks";
import { Portfolio } from "@/components/Portfolio";
import { Community } from "@/components/Community";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
// Keeping Footer from before if compatible, otherwise we'd build one. Assuming a Footer exists or we omit for now.
import Footer from "@/components/anvora/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-anvora-black text-white selection:bg-anvora-gold selection:text-anvora-black">
      <Navbar />
      <Hero />
      <StoryScroll />
      <WhoWeAre />
      <HowItWorks />
      <Portfolio />
      <Community />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
