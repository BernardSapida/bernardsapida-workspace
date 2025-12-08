import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },
  test: {
    coverage: {
      include: ["src/**/*.ts"],
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    environment: "node",
    include: ["__tests__/**/*.test.ts"],
  },
});
