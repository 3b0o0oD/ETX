import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for smooth animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`w-full max-w-4xl mx-auto rounded-lg py-10 px-4 sm:px-6 md:px-10 bg-[#333] dark:bg-gray-900 text-white flex justify-center transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-lg font-medium tracking-wide">{t("contactUs")}</h2>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          24/7 Available
        </h3>
        <p className="mb-8 text-base sm:text-lg opacity-80 leading-relaxed">
          {t("contactMessage")}
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:automation@electrotechx.co"
            className="group flex items-center gap-4 bg-[#333] dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-black dark:hover:bg-gray-700 transition-colors duration-300 w-full max-w-lg"
          >
            <div className="bg-white dark:bg-gray-700 rounded-full p-3 border dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
              <MdEmail className="text-gray-600 dark:text-black text-xl" />
            </div>
            <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80 text-sm sm:text-base">
              automation@electrotechx.co
            </span>
          </a>
          <a
            href="https://wa.me/971564117713"
            className="group flex items-center gap-4 bg-[#333] dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-black dark:hover:bg-gray-700 transition-colors duration-300 w-full max-w-lg"
          >
            <div className="bg-white dark:bg-gray-700 rounded-full p-3 border dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
              <MdPhone className="text-gray-600 dark:text-black text-xl" />
            </div>
            <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80 text-sm sm:text-base">
              WhatsApp: +971-5641-17713
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
