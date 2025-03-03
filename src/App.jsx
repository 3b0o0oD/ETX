import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ServicesCard from "./ServicesCard.jsx";
import FeatureCard from "./FeatureCard.jsx";
import HeroSection from "./HeroSection.jsx";

export default function HomePage() {
  const features = [
    { title: "AI-Powered Automation", img: "./Smart-Keypad.jpg" },
    { title: "Smart Home Integration", img: "./Smart-Keypad.jpg" },
    { title: "Industrial Control", img: "./Smart-Keypad.jpg" },
  ];

  const services = [
    { title: "AI-Driven Security", img: "./CCTV.jpg" },
    { title: "Energy Management", img: "./CCTV.jpg" },
  ];

  return (
    <div className="relative w-full min-h-screen ">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="./public/video-bg.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <motion.section
        id="features"
        className="relative py-20 px-8 md:px-16 text-white text-center bg-gradient-to-b from-black via-gray-900 to-black "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black via-gray-900 to-black">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl opacity-75 mb-10 max-w-3xl mx-auto bg-gradient-to-b from-black via-gray-900 to-black">
          We provide cutting-edge automation solutions, AI-driven control
          systems, and reliable engineering for a seamless future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} img={feature.img} />
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="relative py-20 px-8 md:px-16 text-white text-center bg-gradient-to-b from-black via-gray-900 to-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
        <p className="text-lg md:text-xl opacity-75 mb-10 max-w-3xl mx-auto">
          We specialize in automation, AI-driven control systems, and industrial
          smart solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard key={index} title={service.title} img={service.img} />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
