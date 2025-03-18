import React, { useEffect, useState, Suspense, lazy } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowDown } from "lucide-react";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const Contact = lazy(() => import("./components/Contact"));
const FeatureCard = lazy(() => import("./components/FeatureCard"));
const ServicesCard = lazy(() => import("./components/ServicesCard"));

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState([]);
  const [services, setServices] = useState([]);

  // Update features & services when language changes
  useEffect(() => {
    setFeatures([
      {
        title: t("aiPoweredAutomation"),
        img: "./Smart-Keypad.jpg",
        description: t("aiAutomationDescription"),
        moreContent: t("aiAutomationMore"),
      },
      {
        title: t("smartHomeIntegration"),
        img: "./ipad.jpg",
        description: t("smartHomeDescription"),
      },
      {
        title: t("industrialControl"),
        img: "./Smart-Keypad.jpg",
        description: t("industrialDescription"),
      },
    ]);

    setServices([
      {
        title: t("aiDrivenSecurity"),
        img: "./CCTV.jpg",
        description: t("aiSecurityDescription"),
        moreContent: t("aiSecurityMore"),
      },
      {
        title: t("energyManagement"),
        img: "./energy-management.png",
        description: t("energyDescription"),
      },
    ]);
  }, [i18n.language]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate a delay to ensure all assets are loaded before removing the loading state
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay as needed

    return () => {
      lenis.destroy();
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center w-screen h-screen bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-amber-500"></div>
      </motion.div>
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
          <source src="./g.mp4" type="video/mp4" />
        </motion.video>
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
          </Suspense>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <a href="#features" className="text-white">
              <ArrowDown className="w-8 h-8" />
            </a>
          </div>
          <div>
            {/* Features Section */}
            <motion.section
              id="features"
              className="relative py-20 px-8 md:px-16 text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.2, // Staggered delay for each item
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                    className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <FeatureCard {...feature} />
                    </Suspense>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              id="services"
              className="relative py-20 px-8 md:px-16 text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2, // Staggered delay for each item
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                    className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <ServicesCard {...service} />
                    </Suspense>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
          {/* Contact Section */}
          <motion.section
            id="contactUs"
            className="z-10 relative flex flex-col items-center justify-center py-20 px-8 md:px-16 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          </motion.section>
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}
