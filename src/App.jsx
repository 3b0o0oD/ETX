import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/Footer";
import Navbar from "@/Navbar";
import ServicesCard from "@/ServicesCard.jsx";
import FeatureCard from "@/Featurecard.jsx";
import HeroSection from "@/Herosection.jsx";
import Contact from "@/Contact.jsx";
import { useTranslation } from "react-i18next";
import Lenis from "@studio-freight/lenis";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const features = [
    {
      title: t("aiPoweredAutomation"),
      img: "./Smart-Keypad.jpg",
      description: t("aiAutomationDescription"),
      moreContent: t("aiAutomationMore"),
    },
    {
      title: t("smartHomeIntegration"),
      img: "./Smart-Keypad.jpg",
      description: t("smartHomeDescription"),
    },
    {
      title: t("industrialControl"),
      img: "./Smart-Keypad.jpg",
      description: t("industrialDescription"),
    },
  ];

  const services = [
    {
      title: t("aiDrivenSecurity"),
      img: "./CCTV.jpg",
      description: t("aiSecurityDescription"),
      moreContent: t("aiSecurityMore"),
    },
    {
      title: t("energyManagement"),
      img: "./CCTV.jpg",
      description: t("energyDescription"),
    },
  ];

  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setLoading(false);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div className="relative w-full min-h-screen font-display">
        <motion.video
          className="fixed top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <source src="./bg.mp4" type="video/mp4" />
        </motion.video>
        <Navbar />
        <main>
          <HeroSection />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <a href="#features" className="text-white">
              <ArrowDown className="w-8 h-8" />
            </a>
          </div>
          <motion.section
            id="features"
            className="relative py-20 px-8 md:px-16 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("whyChooseUs")}
            </h2>
            <p className="text-lg md:text-xl opacity-75 mb-10 max-w-3xl mx-auto">
              {t("weProvide")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#333",
                  }}
                  className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            id="services"
            className="relative py-20 px-8 md:px-16 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("ourServices")}
            </h2>
            <p className="text-lg md:text-xl opacity-75 mb-10 max-w-3xl mx-auto">
              {t("weSpecialize")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#333",
                  }}
                  className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                >
                  <ServicesCard {...service} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            id="contactUs"
            className="z-10 relative py-20 px-8 md:px-16 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}
