import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub Pages sub-path
  base: '/PrincePatelPortfolio/',

  // Treat PDFs as static asset imports (returns URL string)
  assetsInclude: ['**/*.pdf'],

  // Allow JSX syntax inside plain .js files (CRA did this automatically)
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})
