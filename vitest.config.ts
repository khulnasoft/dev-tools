import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', 'build', '.next', '.nuxt', '.vite'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.*',
        'src/test/',
        '**/__tests__/',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    testTimeout: 10000,
    hookTimeout: 10000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/core': resolve(__dirname, './core'),
      '@/types': resolve(__dirname, './types'),
      '@/cli': resolve(__dirname, './cli'),
      '@/figma': resolve(__dirname, './figma'),
      '@/next': resolve(__dirname, './next'),
      '@/remix': resolve(__dirname, './remix'),
      '@/vite': resolve(__dirname, './vite'),
      '@/webpack': resolve(__dirname, './webpack'),
      '@/angular': resolve(__dirname, './angular'),
      '@/server': resolve(__dirname, './server'),
      '@/node': resolve(__dirname, './node'),
    },
  },
});
