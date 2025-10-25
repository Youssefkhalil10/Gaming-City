/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "production" ? "/Gaming-City/" : "/",
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
