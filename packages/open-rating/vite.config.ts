import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "OpenRating",
      fileName: (format) => `index.${format}.js`,
    },
    outDir: "out/dist",
  },
});
