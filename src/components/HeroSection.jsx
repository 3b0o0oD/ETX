import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <motion.div
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
        <div className="flex flex-col sm:flex-row w-max gap-4">
          <a
            href="#features"
            className="bg-[#fac53f85] text-black py-4 px-8 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300 w-full sm:w-auto"
            aria-label={t("readMore")}
          >
            {t("readMore")}
          </a>
          {/* <a
            href="https://electrotechx.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-amber-300 text-amber-300 py-4 px-8 rounded-full font-semibold hover:bg-amber-800 hover:border-amber-400 transition-colors duration-300 w-full sm:w-auto"
            aria-label={t("visitShop")}
          >
            {t("visitShop")}
          </a> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
