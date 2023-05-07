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
