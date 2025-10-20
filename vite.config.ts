import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@taskList": path.resolve(__dirname, "./src/projects/taskList"),
      "@weather": path.resolve(__dirname, "./src/projects/weather"),
    },
  },
  base: process.env.VITE_BASE_PATH || "/sandbox",
});
