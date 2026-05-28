import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="bg-[#f8f8f8] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 flex justify-center">

            {/* Blur Background */}
            <div
              className="
              absolute
              -z-10
              w-[350px]
              h-[350px]
              bg-[#b59567]/20
              blur-3xl
              rounded-full"
            ></div>

            {/* Main Image */}
            <img
              src={assets.hotelLobby}
              alt="Reception"
              className="
              w-full
              max-w-[500px]
              h-[600px]
              object-cover
              rounded-xl
              shadow-2xl
              hover:scale-[1.02]
              transition
              duration-700"
            />

            {/* Experience Badge */}
            <div
              className="
              absolute
              top-0
              left-
              md:right-10
              bg-[#b59567]
              text-white
              px-4
              py-4
              rounded-b-3xl
              shadow-2xl"
            >

              <div className="flex flex-col items-center gap-2">

                <h2 className="text-4xl font-bold">
                  16
                </h2>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Years
                  </h3>

                  <p className="text-sm ">
                    of Services
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full lg:w-1/2">

            {/* Background Text */}
            <h1
              className="
              absolute
              top-0
              right-0
              text-[120px]
              md:text-[180px]
              font-bold
              text-black/[0.03]
              leading-none
              select-none"
            >
              ABOUT
            </h1>

            {/* Small Title */}
            <div className="relative z-10">

              <p
                className="
                uppercase
                tracking-[6px]
                text-[#b59567]
                text-sm"
              >
                About Us
              </p>

              {/* Main Heading */}
              <h2
                className="
                text-4xl
                md:text-6xl
                font-playfair
                text-gray-800
                leading-tight
                mt-5"
              >
                Luxurious Comfort,
                <br />
                Timeless Elegance Awaits
              </h2>

              {/* Description */}
              <p
                className="
                mt-8
                text-gray-500
                leading-8
                text-base"
              >
                Experience premium hospitality designed around
                comfort, elegance, and unforgettable moments.
                At QuickStay, every detail is crafted to deliver
                exceptional stays and personalized experiences
                for every guest.
              </p>

              {/* Stats */}
              <div
                className="
                grid
                grid-cols-3
                mt-12
                border-y
                border-gray-200"
              >

                <div className="py-6 border-r border-gray-200">
                  <h3
                    className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-[#2F5D62]"
                  >
                    50+
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Luxury Rooms
                  </p>
                </div>

                <div className="py-6 border-r border-gray-200 pl-6">
                  <h3
                    className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-[#2F5D62]"
                  >
                    60K+
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Happy Guests
                  </p>
                </div>

                <div className="py-6 pl-6">
                  <h3
                    className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-[#2F5D62]"
                  >
                    99%
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Satisfaction
                  </p>
                </div>

              </div>

              {/* Footer */}
              <div className="mt-12">

                <h3
                  className="
                  text-4xl
                  font-playfair
                  italic
                  text-gray-800"
                >
                  QuickStay Hospitality
                </h3>

                <p className="text-gray-500 mt-3">
                  Luxury Hotel & Resort
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default About;