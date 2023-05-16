import react from '@vitejs/plugin-react';
import path from 'path';
// import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      // visualizer({
      //   template: 'treemap',
      //   gzipSize: true,
      //   open: true,
      //   brotliSize: true,
      //   title: 'Bundle Network Visualization',
      //   filename: 'build/client/bundle-info.html',
      // }),
    ],
    define: {
      NODE_ENV: env.APP_ENV,
      // PROJECT_ID: env.PROJECT_ID,
      // CLIENT_EMAIL: env.CLIENT_EMAIL,
      // PRIVATE_KEY: env.PRIVATE_KEY,
      // API_KEY: env.API_KEY,
      // AUTH_DOMAIN: env.AUTH_DOMAIN,
      // STORAGE_BUCKET: env.STORAGE_BUCKET,
      // MESSAGING_SENDER_ID: env.MESSAGING_SENDER_ID,
      // APP_ID: env.APP_ID,
      // MEASUREMENT_ID: env.MEASUREMENT_ID,
    },
    server: {
      port: parseInt(env.PORT),
      hmr: {
        overlay: false,
      },
      proxy: {},
      fs: {
        strict: false,
        allow: [path.resolve(__dirname, './build/client')],
      },
    },
    build: {
      outDir: 'build/client',
      rollupOptions: {
        output: {
          entryFileNames: 'main.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
      sourcemap: true,
      minify: 'esbuild',
    },
    preview: {
      port: parseInt(env.PORT),
    },
  };
});
