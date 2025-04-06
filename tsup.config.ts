import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  bundle: true,
  clean: true,
  format: ["cjs", "esm"],
  silent: true,
  outDir: "dist",
  dts: true,
  splitting: false,
});
