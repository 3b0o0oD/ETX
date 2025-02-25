import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
        {/* <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./video-bg.mp4" type="video/mp4" />
        </video> */}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* AI Floating Orbs - Supercharged Effects */}
        <motion.div
          className="absolute top-20 left-1/4 w-10 h-10 bg-amber-500 rounded-full opacity-50 blur-lg"
          style={{
            boxShadow: "0 0 15px rgba(255, 165, 0, 0.6)",
            backdropFilter: "blur(10px)", // Glass effect
          }}
          animate={{
            y: [10, -20, 10],
            scale: [1, 1.3, 1],
            rotate: [0, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Color-Shifting Orb */}
        <motion.div
          className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full opacity-40 blur-xl"
          style={{
            background: "linear-gradient(45deg, #ffcc00, #ff6600, #ff0000)",
            boxShadow: "0 0 30px rgba(255, 180, 0, 0.8)",
          }}
          animate={{
            background: [
              "linear-gradient(45deg, #ffcc00, #ff6600, #ff0000)",
              "linear-gradient(45deg, #ff0000, #6600ff, #00ccff)",
              "linear-gradient(45deg, #00ccff, #00ff99, #ffcc00)",
            ],
            y: [0, 25, 0],
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
            x: [10, -10, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Vortex Swirl Orb */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full opacity-50 blur-2xl"
          style={{ boxShadow: "0 0 20px rgba(255, 140, 0, 0.7)" }}
          animate={{
            y: [-10, 20, -10],
            x: [-10, 10, -10],
            scale: [1, 1.3, 1],
            rotate: [0, 360], // Circular motion
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        {/* Meteor Streaks */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-8 bg-yellow-300 rounded-full opacity-70 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "rotate(45deg)",
              boxShadow: "0 0 12px rgba(255, 255, 100, 0.9)",
            }}
            animate={{
              y: [0, 100],
              x: [0, 100],
              opacity: [0.8, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              ease: "linear",
            }}
          />
        ))}

        {/* Electric Sparks */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-70 blur-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255, 255, 50, 1)",
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 1.5 + 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Dust Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -5, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              ease: "easeInOut",
            }}
          />
        ))}

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
          <h1 className=" text-amber-200 text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg select-none">
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
              <Button className="rounded-full bg-gradient-to-b from-amber-200 via-amber-200 to-amber-300 text-black shadow-[0_4px_15px_rgba(255,215,0,0.6)] hover:brightness-125 transition-all duration-300 ease-in-out transform hover:scale-105">
                Read More
              </Button>
            </a>
            <a href="https://electrotechx.co">
            <Button variant="outlined" className="rounded-full bg-gradient-to-b from-amber-200 via-amber-200 to-amber-300 text-black shadow-[0_4px_15px_rgba(255,215,0,0.6)] hover:brightness-125 transition-all duration-300 ease-in-out transform hover:scale-105">
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
              img: "./Smart-Keypad.jpg",
            },
            {
              title: "Smart Home Integration",
              img: "./Smart-Keypad.jpg",
            },
            {
              title: "Industrial Control",
              img: "./Smart-Keypad.jpg",
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
              img: "./CCTV.jpg",
            },
            {
              title: "Energy Management",
              img: "./CCTV.jpg",
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
