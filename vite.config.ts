import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { uglify } from 'rollup-plugin-uglify';

const fileNames = {
  es: 'index.es.js',
  umd: 'index.umd.js',
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  if (isBuild) {
    return {
      build: {
        minify: false,
        rollupOptions: {
          external: ['react'],
        },
        lib: {
          entry: './src/JsonNodeView/index.tsx',
          formats: ['es'],
          fileName: 'index',
        },
      },
    };
  }
  return {
    plugins: [react()],
  };
});
