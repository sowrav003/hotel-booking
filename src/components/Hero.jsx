
import HotelForm from "./HotelForm";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 
      bg-[url('/src/assets/heroImage.png')] bg-cover bg-center bg-no-repeat h-screen"
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center max-w-[840px] ">
        <div className="py-20">
          <h1 className="font-playfair text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-14 drop-shadow-2xl">
            Stay Beyond Expectations
          </h1>

          <p className="mt-6 text-gray-200 text-lg md:text-xl">
            Wake up to stunning views and premium comfort. Let every journey
            become an unforgettable experience
          </p>
          <div className="pt-4 z-20 mx-auto px-4">
            <HotelForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
