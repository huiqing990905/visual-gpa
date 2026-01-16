import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Prerender from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Prerender({
      // Path to compiled files
      staticDir: path.join(__dirname, 'dist'),
      // List of routes to prerender
      routes: ['/', '/utar', '/tarumt', '/sunway', '/custom'],
      // Optional: Post-process the HTML
      postProcess(renderedRoute) {
        // We can dynamically update meta tags here if needed, 
        // but react-helmet-async handles it once rendered in Headless Chrome
        return renderedRoute;
      },
    }),
  ],
})
