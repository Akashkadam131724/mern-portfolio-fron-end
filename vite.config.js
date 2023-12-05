import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Akashkadam131724/mern-portfolio-fron-end",
  plugins: [react()],
});
