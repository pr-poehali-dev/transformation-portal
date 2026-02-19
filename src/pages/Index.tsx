import HeroSection from "@/components/HeroSection";
import ForWhomSection from "@/components/ForWhomSection";
import ResultsSection from "@/components/ResultsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProgramSection from "@/components/ProgramSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import FinalSection from "@/components/FinalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ForWhomSection />
      <ResultsSection />
      <ReviewsSection />
      <HowItWorksSection />
      <ProgramSection />
      <TeamSection />
      <PricingSection />
      <FinalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
