import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        additionalData: `@import "./src/assets/css/antd-mobile.less";`,
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // target: "http://124.70.152.179:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
