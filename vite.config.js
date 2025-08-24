import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/portfolio2/', // important for GitHub Pages deployment
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      lib: path.resolve(__dirname, './lib'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './utils'),
    },
  },
});
build: {
    rollupOptions: {
      // force Vite not to inject its default favicon
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
