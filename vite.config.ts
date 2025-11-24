import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { visualizer } from "rollup-plugin-visualizer";

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
    mode === "production" && ViteImageOptimizer({
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      webp: {
        lossless: false,
        quality: 85,
        effort: 4,
      },
    }),
    // Bundle analyzer - generates stats.html after build
    mode === "production" && visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // 'sunburst', 'treemap', 'network'
      title: 'Odin Digital Bundle Analysis',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // CRITICAL: Ensure a single React instance across all chunks to prevent scheduler conflicts
    dedupe: ["react", "react-dom", "react/jsx-runtime", "scheduler"],
  },
  build: {
    rollupOptions: {
      output: {
        // Strategic code splitting to reduce unused JavaScript
        manualChunks: (id) => {
          // CRITICAL: Prevent React duplication which causes scheduler errors
          if (id.includes('node_modules')) {
            // React MUST be in one chunk - including jsx-runtime and scheduler
            if (id.includes('react') || id.includes('react-dom') || 
                id.includes('scheduler') || id.includes('jsx-runtime') ||
                id.includes('jsx-dev-runtime')) {
              return 'react-core';
            }
            // Router in separate chunk
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // UI libraries (Radix) - heavy but used extensively
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            // Query libraries
            if (id.includes('@tanstack/react-query')) {
              return 'query-vendor';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'forms-vendor';
            }
            // Utilities - separate chunk for better caching
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils-vendor';
            }
            // Everything else
            return 'vendor';
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
