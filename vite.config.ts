import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { uglify } from 'rollup-plugin-uglify';

const fileNames = {
  es: 'index.mjs',
  cjs: 'index.cjs',
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
          entry: './src/ReactJsonView/index.tsx',
          formats: ['es', 'cjs'],
          fileName: (format) => {
            return fileNames[format];
          },
        },
      },
    };
  }
  return {
    plugins: [react()],
  };
});
