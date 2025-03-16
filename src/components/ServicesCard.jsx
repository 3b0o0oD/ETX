import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, img, description, moreContent }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {moreContent}
    </div>
  );
};

export default ServicesCard;