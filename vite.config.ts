import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@/config", replacement: "/src/config" },
      { find: "@/mocks", replacement: "/src/mocks" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/hooks", replacement: "/src/hooks" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/apis", replacement: "/src/apis" },
      { find: "@/utils", replacement: "/src/utils" },
      { find: "@/constants", replacement: "/src/constants" },
      { find: "@/mocks", replacement: "/src/mocks" },
      { find: "@/styles", replacement: "/src/styles" },
    ],
  },
});
