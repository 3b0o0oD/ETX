import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    if (videoRef.current) videoRef.current.play();
  }, []);

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}

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
            <Button className="cursor-pointer bg-gradient-to-b from-amber-200 via-amber-200 to-amber-300 text-black shadow-[0_4px_15px_rgba(255,215,0,0.6)] hover:brightness-125 transition-all duration-300 ease-in-out transform hover:scale-105">
              Read More
            </Button>
          </a>
          <a href="https://electrotechx.co">
            <Button className="cursor-pointer bg-gradient-to-b from-amber-200 via-amber-200 to-amber-300 text-black shadow-[0_4px_15px_rgba(255,215,0,0.6)] hover:brightness-125 transition-all duration-300 ease-in-out transform hover:scale-105">
              Visit Shop
            </Button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
