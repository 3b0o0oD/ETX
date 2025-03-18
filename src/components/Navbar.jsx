import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const { t, i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeoutRef = useRef(null);

  const navItems = ["home", "about", "services", "features", "contactUs"];

  // Handle scroll behavior using React
  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;

    // Determine scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 100);

    // Show navbar while scrolling up or at the top
    if (scrollDirection === "up" || currentScrollY <= 100) {
      setIsNavbarVisible(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsNavbarVisible(false);
      }, 2000); // Hide navbar after 2 seconds of no scrolling up
    } else {
      setIsNavbarVisible(false);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  // Handle clicks outside the dropdown using React
  const handleBodyClick = (event) => {
    if (
      isLanguageDropdownOpen &&
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng);
      setCurrentLang(lng);
      setIsLanguageDropdownOpen(false);
    });
  };

  return (
    <div onMouseDown={handleBodyClick}>
      <nav
        className={`fixed ${
          isScrolled ? "top-0" : "top-10"
        } left-0 w-full z-50 transition-transform duration-300 ${
          !isNavbarVisible
            ? "-translate-y-full"
            : isScrolled && scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-r from-[#f6d66b85] via-[#fac53f85] to-[#ffee85] backdrop-blur-lg shadow-[0_4px_15px_rgba(255,215,0,0.4)]"
        }`}
      >
        <div className="h-8 max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="focus:outline-none">
            {" "}
            {/* Make logo clickable */}
            <img
              src="./etx-logo-grey.svg"
              alt="Electrotech X Logo"
              className={`object-contain select-none transition-all duration-300 ${
                isScrolled ? "h-10" : "h-20"
              }`}
            />
          </a>
          <div className="hidden md:flex space-x-8 text-lg">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="bg-clip-text text-white relative hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {t(item)}
              </a>
            ))}
          </div>
          <div ref={languageDropdownRef} className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center gap-1 focus:outline-none"
              aria-label="Toggle Language Dropdown"
            >
              <span className="text-white">
                {currentLang === "en" ? "English" : "العربية"}
              </span>
              <ChevronDown className="text-white" />
            </button>
            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-gray-700 rounded-md shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`block w-full text-left px-4 py-2 transition-all duration-200 focus:outline-none ${
                      currentLang === "en"
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className={`block w-full text-left px-4 py-2 transition-all duration-200 focus:outline-none ${
                      currentLang === "ar"
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`}
                  >
                    العربية
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden focus:outline-none text-white hover:text-gray-400"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/80 backdrop-blur-lg shadow-lg absolute top-0 left-0 w-full p-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="text-white text-lg hover:underline focus:outline-none"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
