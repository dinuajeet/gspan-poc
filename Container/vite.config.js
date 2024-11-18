import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [react(),
    federation({
      name: "app",
      remotes: {
        remoteApp1: 'http://localhost:5002/assets/remoteEntry.js',
        remoteApp2: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
