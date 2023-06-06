import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const fileNames = {
  es: 'index.mjs',
  cjs: 'index.cjs',
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isPkg = mode === 'pkg';
  if (isPkg) {
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
    build: {
      outDir: 'docs-dist'
    }
  };
});
