import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from outside the container
    port: 5173,      // Set the port (you can change this if needed)
    strictPort: true // Fail if the port is already in use
  },
})