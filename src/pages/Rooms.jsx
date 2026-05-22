import { useNavigate } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
import Rating from "../components/Rating";

const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">
            Hotels Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Discover our luxurious rooms designed for your comfort and
            relaxation.
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start gap-6 py-10 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/hotels/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt={room.name}
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <Rating rating={room.rating} />
                <p className="ml-2">200+ Reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Rooms;
