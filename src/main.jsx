import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* Footer */}
    <motion.div >
      <Footer />
    </motion.div>
  </StrictMode>
);
