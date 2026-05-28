import { assets } from "../assets/assets";
import Title from './Title'


const features = [
  {
    icon: assets.natural,
    title: "LIVE AMIDST NATURE",
    description:
      "Feel and experience nature in its fullest glory to refresh yourself.",
  },
  {
    icon: assets.home,
    title: "HERITAGE HOMESTAY",
    description:
      "Experience the charm of Kerala heritage preserved through generations.",
  },
  {
    icon: assets.family,
    title: "FAMILY FRIENDLY",
    description:
      "A cozy and comfortable environment for unforgettable family moments.",
  },
  {
    icon: assets.dinner,
    title: "DELECTABLE CUISINE",
    description:
      "Enjoy a delightful dining experience with our exquisite selection of local and international dishes.",
  }
];

const FeatureSection = () => {
  return (
    <section className="bg-slate-50 mx-auto px-6 lg:px-16 py-20 border-b border-gray-200">
      <Title 
      title="OUR FEATURES"
      subTitle=" Discover the unique features that set us apart and make your stay unforgettable."
      />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4  pt-10">

  {features.map((feature, index) => (
    <div
      key={index}
      className="
      flex flex-col
      items-center
      text-center
      px-2 md:px-4
      py-4
      border
      md:border-0
      md:border-r
      md:last:border-r-0
      border-gray-200
      group"
    >
      {/* Icon */}
      <img
        src={feature.icon}
        alt={feature.title}
        className="
        w-10 h-10
        md:w-14 md:h-14
        object-contain
        mb-3
        transition-transform
        duration-500
        group-hover:scale-110"
      />

      {/* Title */}
      <h3
        className="
        text-[11px]
        md:text-sm
        font-semibold
        tracking-wide
        uppercase
        text-gray-800"
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
        text-[11px]
        md:text-sm
        text-gray-500
        mt-2
        leading-5
        md:leading-7"
      >
        {feature.description}
      </p>
    </div>
  ))}

</div>
    </section>
  );
};

export default FeatureSection;