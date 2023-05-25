import HeroBanner from "../components/layout/HomePage/HeroBanner";
import Introduction from "../components/layout/HomePage/Introduction";
import Features from "../components/layout/HomePage/Features";
import GamesGallery from "../components/layout/HomePage/GamesGallery";
import CTA from "../components/layout/HomePage/CTA";
import Carousel from "../components/layout/HomePage/Carousel";
import Team from "../components/layout/HomePage/Team";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Introduction />
      <Features />
      <GamesGallery />
      <Carousel />
      <Team />
      <CTA />
    </div>
  );
};

export default HomePage;
