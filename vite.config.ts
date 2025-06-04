import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.js"),
      name: "tamtam-new",
      // the proper extensions will be added
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
