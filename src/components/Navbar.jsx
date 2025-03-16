import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const { t, i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  // Ensure language is set correctly on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(storedLang).then(() => {
      setCurrentLang(storedLang);
    });
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
        setScrollDirection("down");
      } else {
        setIsScrolled(false);
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageDropdownRef]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng);
      setCurrentLang(lng);
      setIsLanguageDropdownOpen(false);
    });
  };

  return (
    <nav
      className={`fixed text-white top-10 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled && scrollDirection === "down"
          ? "-translate-y-full hidden"
          : `translate-y-0 ${
              isScrolled
                ? "bg-black/80 backdrop-blur-lg shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                : "bg-gradient-to-r from-[#f6d66b85] via-[#fac53f85] to-[#ffee85] backdrop-blur-lg shadow-[0_4px_15px_rgba(255,215,0,0.4)] "
            }`
      }`}
    >
      <div className="h-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img
          src="./etx-logo-grey.svg"
          alt="Electrotech X Logo"
          className="h-32 object-contain select-none transition-all duration-300"
        />
        <div className="hidden md:flex space-x-8 text-lg">
          {["home", "about", "services", "features", "contactUs"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="bg-clip-text text-white relative hover:underline hover:underline-offset-8 transition-all duration-300"
              >
                {t(item)}
              </a>
            )
          )}
        </div>
        <div ref={languageDropdownRef} className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center gap-1"
            aria-label="Toggle Language Dropdown"
          >
            {currentLang === "en" ? "English" : "العربية"}
            <ChevronDown />
          </button>
          <AnimatePresence>
            {isLanguageDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 bg-gray-500 rounded-md shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => changeLanguage("en")}
                  className={`block w-full text-left px-4 py-2 transition-all duration-200 ${
                    currentLang === "en"
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-gray-500 text-white hover:bg-gray-700"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className={`block w-full text-left px-4 py-2 transition-all duration-200 ${
                    currentLang === "ar"
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-gray-500 text-white hover:bg-gray-700"
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
          className="md:hidden focus:outline-none text-black hover:text-gray-400"
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
              {["home", "about", "services", "features", "contactUs"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="text-white text-lg hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item)}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
