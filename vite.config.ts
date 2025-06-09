import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.js"),
      // formats: ["es"],
      name: "tamtam-new",
      // the proper extensions will be added
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
