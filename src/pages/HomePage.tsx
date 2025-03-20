import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";
import TopDealsSection from "../components/TopDealsSection";
import Menu from "../components/Menu";
import TestimonialSection from "../components/TestimonialSection";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden bg-[#06487C]">
      <Hero />
      <AboutUsSection />
      <TopDealsSection />
      <Menu />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
