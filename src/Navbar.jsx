import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="absolute top-4 right-4 md:top-8 md:right-8 z-[50] text-white text-lg font-medium tracking-wide pointer-events-auto">
      {/* Menu Button - Works for All Screens */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents immediate closure when clicking the button
          setMenuOpen((prev) => !prev);
        }}
        className="relative z-50 menu-button"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              className="fixed top-0 right-0 bg-black/90 backdrop-blur-md p-6 flex flex-col items-end space-y-4 text-white z-50 mobile-menu shadow-lg rounded-lg"
            >
              {/* Close Button */}
              <button onClick={() => setMenuOpen(false)} className="text-white self-end mb-4">
                <X size={32} />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-2 p-4">
                {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg hover:text-gray-300 transition-all duration-300 ease-in-out"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="https://electrotechx.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-400 hover:text-blue-300 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Visit Shop
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
