import { motion } from "framer-motion";

const FeatureCard = ({ title, img }) => {
  return (
    <motion.div
      className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      <img src={img} alt={title} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">
        High-performance solutions tailored for efficiency and control.
      </p>
    </motion.div>
  );
};

export default FeatureCard;
