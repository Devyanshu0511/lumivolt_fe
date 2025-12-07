import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import WhyChooseUsPreview from "../components/WhyChooseUsPreview";
import { useDarkMode } from "../components/Layout";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <HeroSection darkMode={darkMode} />
      <StatsSection darkMode={darkMode} />
      <WhyChooseUsPreview darkMode={darkMode} />
    </>
  );
};

export default Home;
