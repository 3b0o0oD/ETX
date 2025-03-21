import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
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

const BrandCard = ({ brand }) => {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative w-64 h-40 cursor-pointer perspective md:w-80 md:h-52 lg:w-96 lg:h-48"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="w-full h-full rounded-2xl shadow-lg absolute"
        initial={false}
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
            className="h-16 max-w-full max-h-full object-contain md:h-20 lg:h-24"
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
          <p className="text-center">
            {t(brand.descriptionKey) || t("descriptionNotAvailable")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function OurBrands() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const { t } = useTranslation();

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center p-6"
    >
      <h2 className="text-center text-5xl font-bold mb-6">
        {t("ourBrandsTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mx-auto"
          >
            <BrandCard brand={brand} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
