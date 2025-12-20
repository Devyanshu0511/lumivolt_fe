import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import WhyChooseUsPreview from "../components/WhyChooseUsPreview";
import FAQSection from "../components/FAQSection";
import { useDarkMode } from "../components/Layout";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <HeroSection darkMode={darkMode} />
      <StatsSection darkMode={darkMode} />
      <WhyChooseUsPreview darkMode={darkMode} />
      <FAQSection darkMode={darkMode} />
    </>
  );
};

export default Home;
