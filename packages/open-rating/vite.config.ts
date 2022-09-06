import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "OpenRating",
      fileName: (format) => `open-rating-element.${format}.js`,
    },
  },
});
