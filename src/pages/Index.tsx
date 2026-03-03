import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import CommunitySection from "@/components/home/CommunitySection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        <TestimonialsSection />
        <CommunitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
