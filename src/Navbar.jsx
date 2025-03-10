import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50 && currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      style={{
        boxShadow: "0 5px 15px rgba(255, 215, 0, 0.4)", // Softer golden glow
        backdropFilter: "blur(2px)", // Glass effect for a premium look
        borderBottom: "1px solid rgba(255, 215, 0, 0.3)", // Subtle gold border
      }}
      className={`fixed top-10 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "-translate-y-full hidden" // Hides when scrolling down
          : "translate-y-0 bg-gradient-to-r from-[#f6d66b85] via-[#fac53f85] to-[#ffee85] backdrop-blur-lg shadow-[0_4px_15px_rgba(255,215,0,0.4)]"
      }`}
    >
      <div className="h-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img
          src="./etx-logo-grey.svg"
          alt="Electrotech X Logo"
          className="h-36 object-contain select-none transition-all duration-300"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Services", "Features", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="bg-clip-text text-[#000a49]  hover:brightness-125 transition-all duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none text-black hover:text-gray-400"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/95 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-In Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-4/5 sm:w-1/3 h-full bg-black/95 backdrop-blur-lg p-6 flex flex-col items-end text-white z-50 shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white self-end mb-6"
              >
                <X size={32} />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-6 w-full text-right">
                {["Home", "About", "Services", "Features", "Contact"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] drop-shadow-md hover:brightness-125 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
