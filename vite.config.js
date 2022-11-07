import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api" : {
        ws: true,
        changeOrigin: true,
        target: "https://bxx8eewa03.execute-api.us-east-1.amazonaws.com",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

    }
  },
  plugins: [react()]
})
