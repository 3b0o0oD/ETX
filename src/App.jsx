import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    const video = videoRef.current;
    if (video) video.play();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Hero Section */}
      <motion.div
        className="relative w-screen h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="../public/video-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* AI Floating Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-10 h-10 bg-blue-500 rounded-full opacity-50 blur-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-40 blur-lg"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {/* Logo
        <div className="absolute top-8 left-8 z-20">
          <img
            src="./public/etx-logo-grey.svg"
            alt="Electrotech X Logo"
            className="h-20 md:h-25 object-contain select-none"
          />
        </div> */}

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg select-none">
            Welcome to Electrotech X
          </h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl opacity-80 select-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Smart Automation & Control Solutions for a Smarter Future
          </motion.p>
          <div className="flex w-max gap-4">
            <a href="#features">
              <Button className="rounded-full" color="blue">
                Read More
              </Button>
            </a>
            <a href="https://electrotechx.co">
              <Button className="rounded-full" color="blue" variant="outlined">
                Visit Shop
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 px-8 md:px-16 text-white text-center bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg md:text-xl opacity-75 mb-10 max-w-3xl mx-auto">
          We provide cutting-edge automation solutions, AI-driven control
          systems, and reliable engineering for a seamless future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Automation",
              img: "/src/public/Smart-Keypad.jpg",
            },
            {
              title: "Smart Home Integration",
              img: "/src/public/Smart-Keypad.jpg",
            },
            {
              title: "Industrial Control",
              img: "/src/public/Smart-Keypad.jpg",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2">
                High-performance solutions tailored for efficiency and control.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-8 md:px-16 text-white text-center bg-gradient-to-b from-black via-gray-900 to-black"
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
          {[
            {
              title: "AI-Driven Security",
              img: "/src/public/CCTV.jpg",
            },
            {
              title: "Energy Management",
              img: "/src/public/CCTV.jpg",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">
                Tailored solutions for the modern industry.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.div
      
        className="bottom-0 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
