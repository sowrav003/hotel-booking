"use client";

import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";


const faqs = [
  {
    question: "What makes QuickStay different?",
    answer:
      "QuickStay combines luxury accommodations, personalized hospitality, and premium amenities to create memorable guest experiences."
  },
  {
    question: "How long has QuickStay been serving guests?",
    answer:
      "For over 16 years, QuickStay has been delivering exceptional hospitality and welcoming thousands of guests from around the world."
  },
  {
    question: "What facilities are available?",
    answer:
      "We offer luxury rooms, fine dining, high-speed WiFi, concierge services, event spaces, and wellness facilities."
  },
  {
    question: "Do you offer family-friendly accommodations?",
    answer:
      "Yes, we provide spacious family rooms and services designed to ensure a comfortable stay for guests of all ages."
  },
  {
    question: "Are special events and celebrations supported?",
    answer:
      "Absolutely. We host weddings, corporate events, private gatherings, and special celebrations with dedicated event planning support."
  }
];

const About = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="bg-[#f8f8f8] overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 ">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="relative w-full lg:w-1/2 flex justify-center items-center group">
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
              shadow-2xl"
            />


            <div
              className="
              absolute
              top-0
              md:right-10
              bg-[#b59567]
              text-white
              px-4
              py-4
              rounded-b-3xl
              shadow-2xl"
              
            >
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-bold">16</h2>

                <div>
                  <h3 className="text-2xl font-semibold">Years</h3>

                  <p className="text-sm ">of Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10">
              <Title
                title="About Us"
                subTitle="Experience premium hospitality designed around comfort,
                elegance, and unforgettable moments. At QuickStay, every detail
                is crafted to deliver exceptional stays and personalized
                experiences for every guest."
                align="left"
              />

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
                    text-[#b59567]"
                  >
                    50+
                  </h3>

                  <p className="mt-2 text-gray-500">Luxury Rooms</p>
                </div>

                <div className="py-6 border-r border-gray-200 pl-6">
                  <h3
                    className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-[#b59567]"
                  >
                    60K+
                  </h3>

                  <p className="mt-2 text-gray-500">Happy Guests</p>
                </div>

                <div className="py-6 pl-6">
                  <h3
                    className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-[#b59567]"
                  >
                    99%
                  </h3>

                  <p className="mt-2 text-gray-500">Satisfaction</p>
                </div>
              </div>

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

                <p className="text-gray-500 mt-3">Luxury Hotel & Resort</p>
              </div>
            </div>
          </div>
        </div>
         <div className="bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <Title
          title="FAQS"
          subTitle="Questions? Look Here."
        />

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 mt-14">

          {/* FAQ Left */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  rounded-2xl
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "bg-[#b59567] text-white"
                      : "bg-white"
                  }
                `}
              >

                <button
                  onClick={() =>
                    setActive(
                      active === index ? null : index
                    )
                  }
                  className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  cursor-pointer"
                >

                  <span
                    className="
                    text-lg
                    md:text-xl"
                  >
                    {faq.question}
                  </span>

                  <span className="text-2xl">
                    {active === index ? "−" : "+"}
                  </span>

                </button>

                {active === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>


          <div className="space-y-6">

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm"
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#2F5D62]/10
                  flex
                  items-center
                  justify-center"
                >
                  <img
                    src={assets.messageIcon}
                    alt=" Message Icon"
                    className="w-5 "
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Have questions? We're here to help.
                  </p>

                  <h4
                    className="
                    text-2xl
                    font-semibold
                    text-[#b59567]"
                  >
                    Contact Us
                  </h4>
                </div>

              </div>

              <div className="mt-5 text-gray-500">
                <p>Your Happiness is Our Priority</p>
                <p>We want to hear from you! Get in touch with our team anytime.</p>
              </div>

            </div>
            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm"
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#2F5D62]/10
                  flex
                  items-center
                  justify-center"
                >
                  <img
                    src={assets.phoneIcon}
                    alt=" Phone Icon"
                    className="w-5"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Your Comfort, Our Priority
                  </p>

                  <h4
                    className="
                    text-2xl
                    font-semibold
                    text-[#b59567]"
                  >
                    24/7 Service
                  </h4>
                </div>

              </div>

              <div className="mt-5 text-gray-500">
                <p>+880 1234 567890</p>
                <p>support@quickstay.com</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
      </div>
    </div>
  );
};

export default About;
