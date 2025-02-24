import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; // Import Footer component
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    const video = videoRef.current;
    if (!video) return;

    const reversePlayback = () => {
      video.pause();
      const reverseInterval = setInterval(() => {
        if (video.currentTime <= 0) {
          setIsReversing(false);
          clearInterval(reverseInterval);
          video.play();
        } else {
          video.currentTime -= 0.033; // Step back frame by frame
        }
      }, 33);
    };

    const handleVideoEnd = () => {
      if (!isReversing) {
        setIsReversing(true);
        reversePlayback();
      }
    };

    video.play();
    video.addEventListener("ended", handleVideoEnd);

    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [isReversing]);

  return (
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
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="../src/assets/video-bg2.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img
          src="./src/assets/etx-logo-grey.svg"
          alt="Electrotech X Logo"
          className="h-20 md:h-25 object-contain"
        />
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 4 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg unselectable">
          Welcome to Electrotech X
        </h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl opacity-80 unselectable"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          Smart Automation & Control Solutions for a Smarter Future
        </motion.p>
        <div className="flex w-max gap-4">
          <a href="#buttons-with-link">
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

      {/* Footer */}
      <motion.div className="relative w-screen min-h-screen overflow-hidden">
        <Footer />
      </motion.div>
    </motion.div>
  );
}
