import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [react()],
})
// config for vitest
const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})
export default mergeConfig(viteConfig, vitestConfig)


