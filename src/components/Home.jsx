import ExclusiveOffer from "./ExclusiveOffer";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import FeaturesCard from "./FeaturesCard";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesCard />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
