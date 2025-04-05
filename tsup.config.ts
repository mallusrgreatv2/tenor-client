import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  bundle: false,
  clean: true,
  format: ["cjs", "esm"],
  silent: true,
  outDir: "dist",
  dts: true,
});
