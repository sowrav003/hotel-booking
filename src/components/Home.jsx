import ExclusiveOffer from "./ExclusiveOffer";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import FeaturesCard from "./FeaturesCard";
import Testimonial from "./Testimonial";
import AboutSection from "./About";
import Feature from "./Features";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesCard />
      <Feature />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
