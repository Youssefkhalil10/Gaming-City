import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  base: mode === "production" ? "/Gaming-City/" : "/",

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
}));
