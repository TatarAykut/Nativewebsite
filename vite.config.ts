import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      // Client build only. In the SSG build (scripts/ssg.mjs) React and the
      // router are external — Node loads them from node_modules — and Rollup
      // refuses to place an external module into a manual chunk.
      output: isSsrBuild
        ? {}
        : {
            // Split the rarely-changing vendor code out of the app chunk so a
            // copy tweak does not force every returning visitor to re-download
            // React and the router.
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router'],
            },
          },
    },
  },
}))
