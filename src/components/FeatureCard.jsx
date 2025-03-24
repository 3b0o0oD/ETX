import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery
import "swiper/css";
import "swiper/css/effect-cards";

const FeatureCard = ({ features = [] }) => {
  // Use media queries to determine screen size
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  // State to dynamically set the Swiper effect and re-render Swiper
  const [swiperEffect, setSwiperEffect] = useState("cards");

  useEffect(() => {
    // Dynamically update the Swiper effect based on screen size
    setSwiperEffect(isLaptop ? undefined : "cards");
  }, [isLaptop]);

  if (!features.length) {
    return <p className="text-center text-gray-500">No features available.</p>;
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 relative">
      <Swiper 
        key={swiperEffect} // Force re-render of Swiper when effect changes
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay will not stop after user interaction
        }}
        effect={swiperEffect} // Dynamically set the effect
        slidesPerView={isLaptop ? 3 : 1} // Show 3 slides side by side on laptops, 1 on mobile/tablet
        spaceBetween={isLaptop ? 30 : 20} // Adjust spacing based on screen size
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-[#333] dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 flex flex-col h-[350px] md:h-[400px] lg:h-[450px]">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-36 md:h-44 lg:h-52 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Available";
                  e.target.alt = "Fallback Image";
                }}
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              {/* <button className="mt-auto px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300">
                Learn More
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureCard;
