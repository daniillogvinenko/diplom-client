import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
    define: {
        _API_: JSON.stringify("http://localhost:8000"),
    },
});
