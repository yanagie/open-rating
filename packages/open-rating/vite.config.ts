import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "MyLibrary",
      fileName: (format) => `open-rating.${format}.js`,
    },
  },
});
