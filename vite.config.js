import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/portfolio2/', // important for GitHub Pages deployment
=======
  base: '/portfolio2/', // 👈 must match your repo name exactly
>>>>>>> 34e2ecaec06f8c8bdba2f6d150dcab92d2a60288
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      lib: path.resolve(__dirname, './lib'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './utils'),
    },
  },
<<<<<<< HEAD
});
build: {
=======
  build: {
>>>>>>> 34e2ecaec06f8c8bdba2f6d150dcab92d2a60288
    rollupOptions: {
      // force Vite not to inject its default favicon
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
