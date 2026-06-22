import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import Rating from "../components/Rating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room.id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);
  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>{" "}
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% off
          </p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <Rating />
          <p className="ml-2">200+ reviews</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="Location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex flex-col lg:flex-row mt-3 gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt={room.name}
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImage === image && "outline-3 outline-orange-500"} `}
                  key={index}
                  src={image}
                  alt="room image"
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience the Luxury That Never Ends
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Select Check-In Date"
                className="w-full  border border-gray-300 rounded px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className=" w-px h-15 bg-gray-300/70 max-md:hidden " />
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Select Check-Out Date"
                className="w-full  border border-gray-300 rounded px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className=" w-px h-15 bg-gray-300/70 max-md:hidden " />
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20  border border-gray-300 rounded px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4  text-base cursor-pointer hover:bg-primary-dull active:scale-95 transition-all"
          >
            Check
          </button>
        </form>

        <div className="mt-25 flex items-center gap-4 px-4 py-6">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="bg-gray-100 flex items-start gap-2 border border-gray-300 p-4 rounded-lg">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="  py-10 text-gray-500">
          <p>
            Get ready to immerse yourself in a world of unparalleled luxury and
            comfort at our exquisite hotel. From the moment you step into our
            elegant lobby, you'll be greeted with warm hospitality and a serene
            ambiance that sets the tone for an unforgettable stay. Our
            meticulously designed rooms and suites offer a perfect blend of
            sophistication and coziness, featuring plush furnishings, modern
            amenities, and breathtaking views of the city skyline. Indulge in a
            culinary journey at our renowned restaurants, where our talented
            chefs craft delectable dishes using the finest ingredients. Whether
            you're seeking relaxation by our rooftop pool, rejuvenation at our
            spa, or vibrant nightlife at our exclusive bar, our hotel promises
            an extraordinary experience that will leave you longing to return.
          </p>
        </div>

      </div>
    )
  );
};

export default RoomDetails;
