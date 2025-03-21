import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, img, description, moreContent }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
        onError={(e) => {
          e.target.src = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"; // Fallback placeholder
          e.target.alt = "Fallback Image";
        }}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {moreContent}
    </motion.div>
  );
};

export default ServicesCard;