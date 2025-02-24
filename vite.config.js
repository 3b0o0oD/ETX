import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://3b0o0od.github.io/ETX/",
  plugins: [tailwindcss(), react()],
});
