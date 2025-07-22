import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,js}"
  })],
  assetsInclude: ['**/*.glb'],
  server: {
    port: 3000,
    open: true
  }
}) 