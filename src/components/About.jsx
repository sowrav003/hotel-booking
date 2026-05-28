import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-12 py-20 gap-10 md:gap-20 bg-white">
      <div className="relative w-full lg:w-1/2 flex items-start justify-center gap-6 md:gap-10">
        <div className="w-full lg:w-[420px]">
          <img
            src={assets.luxuryRoomImg}
            alt="Luxury Room"
            className="
              w-full
              h-[250px] sm:h-[320px] md:h-[400px]
              object-cover
              rounded
              shadow-xl
            "
          />
        </div>

        <div className="w-full pt-8 md:pt-14">
          <img
            src={assets.hotelInteriorImg}
            alt="Hotel Interior"
            className="
              w-full
              h-[250px] sm:h-[320px] md:h-[400px]
              object-cover
              rounded
              shadow-2xl
            "
          />
        </div>
      </div>

      {/* Right */}
      <div className="  w-full lg:w-1/2 p-2 md:p-6 lg:p-12">
        <p className="text-[#b59567] uppercase tracking-widest text-sm">
          Welcome To
        </p>

        <h1 className="text-4xl md:text-5xl font-playfair text-gray-800 mt-3">
          Luxury Hotel
        </h1>

        <p className="text-gray-500 mt-6 leading-7 ">
          Experience unparalleled luxury and comfort at our hotel, where every
          detail is designed to create an unforgettable stay. Discover elegant
          rooms, world-class amenities, and exceptional service.At our hotel, we
          redefine hospitality, ensuring your stay is nothing short of
          extraordinary.
        </p>

        <button
          className="
            bg-[#b59567]
            hover:bg-[#9d8056]
            text-white
            px-8
            py-3
            mt-8
            rounded
            transition-all
            duration-300
            flex items-center gap-2
          "
          onClick={() => navigate("/about")}
        >
          Read More
          <img
            src={assets.arrowIcon}
            alt=" Arrow Icon"
            className="w-4 h-4 invert"
          />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
