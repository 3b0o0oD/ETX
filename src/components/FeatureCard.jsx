import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FeatureCard = ({ title, img, description, moreContent, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-lg shadow-md"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {/* {moreContent && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-md"
        >
          Read More
        </motion.button>
      )} */}
    </motion.div>
  );
};

export default FeatureCard;
