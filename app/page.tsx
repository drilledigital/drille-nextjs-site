import UnifiedPreloader from "@/components/preloader";
import HeroSection from "@/components/hero-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import Footer4Col from "@/components/ui/footer-column";
import AboutSection from "@/components/about-us";
import OurVisionSection from "@/components/our-vision";
import { Skiper16 } from "@/components/ui/skiper-ui/skiper16";
import { FeatureSteps } from "@/components/blocks/feature-section";
import OurProjects from "@/components/our-projects";
import FlowingMenu from "@/components/FlowingMenu";
import { FaqsSection } from "@/components/ui/faqs-1";
import ScrollStack from "@/components/ScrollStack";
import { Skiper54 } from "@/components/ui/skiper-ui/skiper54";
import { Skiper34 } from "@/components/ui/skiper-ui/skiper34";
export default function Home() {
  return (
    <div> 
      <UnifiedPreloader />
      <HeroSection />
      <AboutSection />
      <OurVisionSection/>
      <FlowingMenu />
      <Skiper34/>
      <FeatureSteps/>
      <OurProjects/>
      {/*<StaggerTestimonials />*/}
      <FaqsSection/>
      <Footer4Col/>

      



    </div>
  );
}
