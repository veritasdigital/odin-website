import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // DISABLED FOR DEBUGGING

// https://vitejs.dev/config/
// Force fresh build to regenerate vendor chunks
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // ViteImageOptimizer DISABLED FOR DEBUGGING
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Ensure a single React instance is used across all dependencies
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split vendor code into smaller chunks
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'form-vendor';
            }
            if (id.includes('recharts')) {
              return 'chart-vendor';
            }
            if (id.includes('react-helmet')) {
              return 'helmet-vendor';
            }
            if (id.includes('sonner') || id.includes('lucide')) {
              return 'util-vendor';
            }
            return 'vendor';
          }
          // Split large page components
          if (id.includes('src/pages/blog/')) {
            return 'blog-pages';
          }
          if (id.includes('src/pages/services/')) {
            return 'service-pages';
          }
          if (id.includes('src/pages/industries/')) {
            return 'industry-pages';
          }
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          let extType = name.split('.').at(1) || 'misc';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    target: 'es2015',
    cssMinify: true,
    assetsInlineLimit: 2048,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@tanstack/react-query-devtools'],
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
  },
}));
