import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./shafnaa.github.io",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
