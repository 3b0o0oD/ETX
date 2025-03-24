import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const brands = [
  {
    name: "Philips Dynalite",
    logo: "https://dynalite.com/wp-content/uploads/2024/01/Philips-Dynalite-Logo-White.svg",
    descriptionKey: "philipsDynaliteDescription",
  },
  {
    name: "AMX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/AMX_logo.svg/256px-AMX_logo.svg.png",
    descriptionKey: "amxDescription",
  },
  {
    name: "Denon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Denon_Logo.svg",
    descriptionKey: "denonDescription",
  },
  {
    name: "Global Cache",
    logo: "https://www.globalcache.com/assets/images/gclogo-stacked-web-273x117.png",
    descriptionKey: "globalCacheDescription",
  },
  {
    name: "DigitalStrom",
    logo: "https://www.digitalstrom.com/wp-content/themes/digital_strom/assets/img/dist/digitalstrom_logo.svg",
    descriptionKey: "digitalStromDescription",
  },
  {
    name: "Clipsal",
    logo: "https://www.clipsal.com/SchneiderElectric-FED/assets/images/logo-clipsal.svg",
    descriptionKey: "clipsalDescription",
  },
  {
    name: "HIKvision",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg",
    descriptionKey: "hikvisionDescription",
  },
  {
    name: "Tiandy",
    logo: "https://en.tiandy.com/Public/Home/img/logo2021.png",
    descriptionKey: "tiandyDescription",
  },
  {
    name: "Synology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Synology_Logo.svg",
    descriptionKey: "synologyDescription",
  },
  {
    name: "Paradox",
    logo: "./paradox.svg",
    descriptionKey: "paradoxDescription",
  },
  {
    name: "BlueSound",
    logo: "https://images.squarespace-cdn.com/content/v1/5aa9ec2570e8026094ed0374/1575004394540-7AZA68NR6O0ER01Y8W55/Bluesound+Logo+%5BConverted%5D.png",
    descriptionKey: "blueSoundDescription",
  },
  {
    name: "Legrand MyHome",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_Legrand_SA.svg",
    descriptionKey: "legrandMyHomeDescription",
  },
];

const BrandCard = ({ brand, flipped, onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative w-36 h-24 sm:w-48 sm:h-32 md:w-48 md:h-32 lg:w-52 lg:h-34 cursor-pointer perspective hover:scale-105 transition-transform duration-300"
      onClick={onClick} // Handle click event
    >
      <motion.div
        className="w-full h-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-[#277462b9] bg-opacity-50 p-4 rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-12 max-w-full max-h-full object-contain md:h-16 lg:h-20"
            onError={(e) => {
              e.target.src =
                "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
              e.target.alt = "Logo not available";
            }}
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-white bg-opacity-50 text-black p-4 rounded-2xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-center text-sm md:text-base">
            {t(brand.descriptionKey) || t("descriptionNotAvailable")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function OurBrands() {
  const { t } = useTranslation();

  const [flippedStates, setFlippedStates] = useState(
    Array(brands.length).fill(false)
  );
  const [invert, setInvert] = useState(false);

  const handleCardClick = (index) => {
    setFlippedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index]; // Toggle the flipped state
      return newStates;
    });
  };

  useEffect(() => {
    const sequence = [
      [true, false, false, true],
      [false, true, true, false],
      [true, false, false, true],
    ]; // Define the flipping sequence
    let currentStep = 3;

    const interval = setInterval(() => {
      setFlippedStates((prev) => {
        const newStates = [...prev];
        const row = Math.floor(currentStep / 4); // Calculate row index
        const col = currentStep % 4; // Calculate column index
        const shouldFlip = invert
          ? !sequence[row][col] // Invert the pattern
          : sequence[row][col]; // Normal pattern
        newStates[row * 4 + col] = shouldFlip; // Update the specific card
        return newStates;
      });

      currentStep++;

      if (currentStep >= brands.length) {
        currentStep = 0; // Reset to the first card
        setInvert((prev) => !prev); // Toggle the inversion
      }
    }, 3600); // Flip one card every 300ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [invert]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-black-100 to-black-800">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-18">
        {t("ourBrandsTitle")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-center items-center">
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            brand={brand}
            flipped={flippedStates[index]}
            onClick={() => handleCardClick(index)} // Pass the click handler
          />
        ))}
      </div>
    </div>
  );
}
