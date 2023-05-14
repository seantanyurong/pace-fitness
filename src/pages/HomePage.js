import HeroBanner from "../components/layout/HomePage/HeroBanner";
import Introduction from "../components/layout/HomePage/Introduction";
import Features from "../components/layout/HomePage/Features";
import GamesGallery from "../components/layout/HomePage/GamesGallery";
import Progress from "../components/layout/HomePage/Progress";
import CTA from "../components/layout/HomePage/CTA";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Introduction />
      <Features />
      <GamesGallery />
      <Progress />
      <CTA />
    </div>
  );
};

export default HomePage;
