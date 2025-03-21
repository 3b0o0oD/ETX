import React, { useEffect, useState, Suspense, lazy } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { ArrowDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const Contact = lazy(() => import("./components/Contact"));
const FeatureCard = lazy(() => import("./components/FeatureCard"));
const ServicesCard = lazy(() => import("./components/ServicesCard"));
const OurBrands = lazy(() => import("./components/OurBrands")); // Added OurBrands
const Navbar = lazy(() => import("./components/Navbar")); // Lazy load Navbar
const Footer = lazy(() => import("./components/Footer")); // Lazy load Footer

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState([]);
  const [services, setServices] = useState([]);

  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [brandsRef, brandsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

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
        img: "./industrialControl.png",
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
        moreContent: t("energyManagementMore"),
      },
      {
        title: t("lightingControl"), // New service
        img: "./lighting.png", // Replace with appropriate image
        description: t("lightingControlDescription"), // Add translation
        relatedBrands: ["Philips Dynalite", "Clipsal", "Legrand MyHome"], // Brands related
         moreContent: t("lightingControlMore"), // Add translation
      },
      {
        title: t("advancedControlSystems"), // New service
        img: "./control-system.jpg", // Replace with appropriate image
        description: t("advancedControlDescription"), // Add translation
        relatedBrands: ["AMX", "Global Cache", "DigitalStrom"], // Brands related
         moreContent: t("advancedControlMore"), // Add translation
      },
      {
        title: t("homeEntertainment"), // New service
        img: "./home-entertainment.jpg", // Replace with appropriate image
        description: t("homeEntertainmentDescription"), // Add translation
        relatedBrands: ["Denon", "Nuvo", "BlueSound"], // Brands related
         moreContent: t("homeEntertainmentMore"), // Add translation
      },
      {
        title: t("videoSurveillance"), // New service
        img: "./videoSurveillance.jpg", // Replace with appropriate image
        description: t("videoSurveillanceDescription"), // Add translation
        relatedBrands: ["HIKvision", "Tiandy"], // Brands related
         moreContent: t("videoSurveillanceMore"), // Add translation

      },
      {
        title: t("dataStorageSolutions"), // New service
        img: "./data-storage.jpg", // Replace with appropriate image
        description: t("dataStorageDescription"), // Add translation
        relatedBrands: ["Synology"], // Brands related
         moreContent: t("dataStorageMore"), // Add translation
      },
      {
        title: t("securitySystems"), // New service
        img: "./security-systems.jpg", // Replace with appropriate image
        description: t("securitySystemsDescription"), // Add translation
        relatedBrands: ["Paradox"], // Brands related
         moreContent: t("securitySystemsMore"), // Add translation
      },
      {
        title: t("doorEntrySystems"), // New service
        img: "./door-entry.jpg", // Replace with appropriate image
        description: t("doorEntryDescription"), // Add translation
        relatedBrands: ["DoorBird"], // Brands related
         moreContent: t("doorEntryMore"), // Add translation
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

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

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
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
        <main>
          <Suspense fallback={<div>Loading Hero Section...</div>}>
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
              ref={featuresRef}
              id="features"
              className="relative py-20 px-8 md:px-16 text-white text-center"
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
                    className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                  >
                    <Suspense fallback={<div>Loading Feature...</div>}>
                      <FeatureCard {...feature} />
                    </Suspense>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              ref={servicesRef}
              id="services"
              className="relative py-20 px-8 md:px-16 text-white text-center"
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
                    className="p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-300"
                  >
                    <Suspense fallback={<div>Loading Service...</div>}>
                      <ServicesCard {...service} />
                    </Suspense>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Our Brands Section */}
            <motion.section
              ref={brandsRef}
              id="ourBrands"
              className="relative py-20 px-8 md:px-16 text-white text-center"
              viewport={{ once: true }}
            >
              <Suspense fallback={<div>Loading Brands...</div>}>
                <OurBrands />
              </Suspense>
            </motion.section>
          </div>

          {/* Contact Section */}
          <motion.section
            ref={contactRef}
            id="contactUs"
            className="z-10  relative flex flex-col items-center justify-center py-20 px-8 md:px-16 text-white text-center"
            viewport={{ once: true }}
          >
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </motion.section>
        </main>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </I18nextProvider>
  );
}
