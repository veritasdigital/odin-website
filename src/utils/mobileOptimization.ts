/**
 * Mobile optimization utilities for performance and UX
 */

/**
 * Preload critical resources for faster page loads
 */
export const preloadCriticalAssets = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

/**
 * Optimize images for mobile by detecting viewport size
 */
export const getOptimizedImageSrc = (src: string, isMobile: boolean): string => {
  if (!src || !isMobile) return src;
  
  // Add query params for image optimization services if applicable
  const url = new URL(src, window.location.origin);
  url.searchParams.set('w', '800'); // Mobile max width
  url.searchParams.set('q', '75'); // Quality
  return url.toString();
};

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = (): boolean => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore - legacy support
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Add touch-friendly spacing to elements
 */
export const getTouchTargetClasses = (baseClasses: string): string => {
  return `${baseClasses} min-h-[44px] min-w-[44px] touch-manipulation`;
};

/**
 * Detect slow network connection
 */
export const isSlowConnection = (): boolean => {
  // @ts-ignore - experimental API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection) return false;
  
  return (
    connection.saveData ||
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g'
  );
};

/**
 * Defer non-critical resources
 */
export const deferNonCriticalResources = () => {
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer="true"]');
  scripts.forEach((script) => {
    if (script instanceof HTMLScriptElement) {
      script.defer = true;
    }
  });
};

/**
 * Enable hardware acceleration for smoother animations
 */
export const enableHardwareAcceleration = (element: HTMLElement) => {
  element.style.transform = 'translateZ(0)';
  element.style.willChange = 'transform';
};

/**
 * Viewport meta tag verification
 */
export const verifyViewportMeta = (): boolean => {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  return viewportMeta !== null;
};

/**
 * Calculate optimal lazy load threshold based on connection
 */
export const getLazyLoadThreshold = (): number => {
  return isSlowConnection() ? 0.01 : 0.1;
};

/**
 * Format file size for display
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Detect if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
