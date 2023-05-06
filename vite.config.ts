import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      NODE_ENV: env.APP_ENV,
    },
    server: {
      hmr: {
        overlay: false,
      },
      proxy: {},
      fs: {
        strict: false,
        allow: [path.resolve(__dirname, "./build/client")],
      },
    },
    build: {
      outDir: "build/client",
      assetsDir: "./",
      rollupOptions: {
        output: {
          entryFileNames: "main.js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
      sourcemap: false,
      minify: "esbuild",
    },
  };
});
