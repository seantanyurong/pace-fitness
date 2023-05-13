import Banner from "../components/layout/General/Banner";
import Header from "../components/layout/General/Header";
import HeroBanner from "../components/layout/HomePage/HeroBanner";
import Introduction from "../components/layout/HomePage/Introduction";
import Features from "../components/layout/HomePage/Features";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Header />
      <HeroBanner />
      <Introduction />
      <Features />
    </div>
  );
};

export default HomePage;
