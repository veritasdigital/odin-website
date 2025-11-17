/**
 * CSS Purge Configuration
 * Removes unused CSS to optimize bundle size
 */

export const purgeCSSConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Keep animation classes
    /^animate-/,
    // Keep hover/focus states
    /^hover:/,
    /^focus:/,
    // Keep responsive classes
    /^sm:/,
    /^md:/,
    /^lg:/,
    /^xl:/,
    /^2xl:/,
    // Keep dark mode classes
    /^dark:/,
  ],
};

/**
 * Critical CSS extraction
 * Extract above-the-fold CSS for inline injection
 */
export const criticalCSS = [
  // Header
  '.header',
  '.nav',
  // Hero section
  '.hero',
  '.hero-title',
  '.hero-subtitle',
  // Critical layout
  '.container',
  '.max-w-7xl',
  '.mx-auto',
  // Typography
  '.text-',
  '.font-',
];
