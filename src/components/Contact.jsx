import React from "react";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className=" rounded-lg py-16 px-6 md:px-10 bg-[#333] dark:bg-gray-900 text-white flex justify-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-lg font-medium tracking-wide">{t("contactUs")}</h2>
        <h3 className="text-3xl font-semibold tracking-tight">
          24/7 Available
        </h3>
        <p className="mb-8 text-lg opacity-80 leading-relaxed">
          {t("contactMessage")}
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:automation@electrotechx.co"
            className="group flex items-center gap-4 bg-[#333] dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-black dark:hover:bg-gray-700 transition-colors duration-300 w-full max-w-lg"
          >
            <div className="bg-white dark:bg-gray-700 rounded-full p-3 border  dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
              <MdEmail className="text-gray-600 dark:text-black text-xl" />
            </div>
            <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              automation@electrotechx.co
            </span>
          </a>
          <a
            href="https://wa.me/155544456"
            className="group flex items-center gap-4 bg-[#333] dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-black dark:hover:bg-gray-700 transition-colors duration-300 w-full max-w-lg"
          >
            <div className="bg-white dark:bg-gray-700 rounded-full p-3 border dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
              <MdPhone className="text-gray-600 dark:text-black text-xl" />
            </div>
            <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              WhatsApp: +1-555-44-456
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
