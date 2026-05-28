import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contact = () => {
  const contactInfo = [
    {
      icon: assets.mapIcon,
      title: "Address",
      info: "123 Main Street, City, Country",
    },
    {
      icon: assets.phoneIcon,
      title: "Phone",
      info: "+1 (123) 456-7890",
    },
    {
      icon: assets.mailIcon,
      title: "Email",
      info: "example@gmail.com",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted");
  };
  return (
    <div className="py-28 pb-8 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 ">
      <Title
        title="Contact Us"
        subTitle="Contact us for any inquiries, reservations, or assistance."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-16">
        {/* Left Form */}
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Ex. John"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#b59567]
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Ex. Doe"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#b59567]
                    transition
                  "
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#b59567]
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#b59567]
                    transition
                  "
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter here.."
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-[#b59567]
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>

              <textarea
                rows="6"
                placeholder="Enter here.."
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  resize-none
                  focus:border-[#b59567]
                  transition
                "
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="
            bg-[#b59567]
            hover:bg-[#9d8056]
                text-white
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
                shadow-md
              "
            >
              Send a Message
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex relative justify-center mb-12 ">
          <img
            src={assets.contact}
            alt="Reception"
            className="
              max-w-[650px]
              h-[500px]
              object-cover
              rounded
              shadow-lg
              transition
              cursor-pointer
            "
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-500/10
              border
              border-gray-200
              rounded-3xl
              py-6
              px-4
              flex
              flex-col
              items-center
              text-center
              hover:bg-gray-50
              transition-all
              duration-300
              group
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-full 
              bg-[#b59567]
              group-hover:bg-[#9d8056]
                flex
                items-center
                justify-center
                mb-4
                transition
              "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain "
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-playfair text-gray-800">
              {item.title}
            </h3>

            {/* Info */}
            <p className="text-gray-500 mt-3 leading-7 max-w-[220px]">
              {item.info}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <div
          className="
        relative
        overflow-hidden
        rounded-3xl
        h-[300px]
        md:h-[500px]
        group"
        >
          {/* Map Image */}
          <img
            src={assets.mapImg}
            alt="Map"
            className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Floating Pin */}
          <div
            className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2"
          >
            <div
              className="
            flex
            items-center
            justify-center
            shadow-2xl
            animate-bounce"
            >
              <img
                src={assets.mapIcon}
                alt="Location"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          <div
            className="
            hidden md:block
          absolute
          bottom-6
          left-6
          bg-white/90
          backdrop-blur-md
          px-6
          py-4
          rounded-2xl
          shadow-lg"
          >
            <p className="text-sm uppercase tracking-widest text-[#C9A46A]">
              Our Location
            </p>

            <h3 className="text-2xl font-playfair mt-1">QuickStay Hotel</h3>

            <p className="text-gray-500 text-sm mt-2">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
