import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS_BASE || undefined,
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
