import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: "/",

  build: {
    outDir: "dist",
  },

  server: {
    proxy: {
      "/api": {
        target: "https://gamingcity-production-48e1.up.railway.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
