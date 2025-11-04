/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

<<<<<<< HEAD
export default defineConfig({
  plugins: [react(), tailwindcss()],
=======
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "production" ? "/Gaming-City/" : "/",
>>>>>>> 8b3490d5531221dda83215ecf90f08f788bf7f95
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
