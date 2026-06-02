import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/codex/" : "/",
  define: {
    "import.meta.env.VITE_SITE_ORIGIN": JSON.stringify(
      process.env.VITE_SITE_ORIGIN ?? "https://dg-create.com",
    ),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});