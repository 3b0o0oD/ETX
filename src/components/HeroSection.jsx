import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="home"
      className="relative w-screen h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-[#fac53fb8] text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg select-none">
          {t("welcome")}
        </h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl opacity-90 select-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("revolutionizing")}
        </motion.p>

        {/* Scroll Down Animation */}
        {showScrollDown && (
          <motion.div
            className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <a href="#features" aria-label="Scroll Down">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-8 h-8 flex items-center justify-center"
                  animate={{
                    y: [0, 30, 0], // Bounce effect
                    scale: [1, 1.5, 1], // Pulsing effect
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Downward arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
