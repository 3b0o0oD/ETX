import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer z-999 absolute bottom-6 left-0 right-0 w-full h-6 bg-gradient-to-r from-black via-gray-900 to-black py-6 flex flex-col items-center justify-center gap-4 text-gray-400">
      <div className="flex gap-8">
        <a
          href="#"
          className="text-3xl text-white hover:text-yellow-400 transition-all duration-300 hover:scale-150 hover:drop-shadow-[0_0_5px_#FFD700]"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-3xl text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-150 hover:drop-shadow-[0_0_10px_#FFD700]"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-3xl text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-150 hover:drop-shadow-[0_0_10px_#FFD700]"
        >
          <FaXTwitter />
        </a>
      </div>
      {/* <p className="text-sm text-gray-500">&copy; 2025 ETX - The Future of Smart Living</p> */}
    </footer>
  );
};

export default Footer;
