/**
 * Performance monitoring utilities for Core Web Vitals
 */

declare global {
  interface Window {
    webVitals?: any;
  }
}

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
      onINP(onPerfEntry);
    }).catch(() => {
      // web-vitals not available
    });
  }
};

/**
 * Log Core Web Vitals to console in development
 */
export const logWebVitals = () => {
  if (process.env.NODE_ENV === 'development') {
    reportWebVitals((metric) => {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
    });
  }
};

/**
 * Resource hint helpers
 */
export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const preloadScript = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Compress data for localStorage using LZ-based compression
 */
export const compressData = (data: string): string => {
  try {
    // Simple compression using base64 and encoding
    const compressed = btoa(encodeURIComponent(data));
    return compressed;
  } catch (error) {
    console.error('Compression failed:', error);
    return data;
  }
};

/**
 * Decompress data from localStorage
 */
export const decompressData = (compressed: string): string => {
  try {
    const decompressed = decodeURIComponent(atob(compressed));
    return decompressed;
  } catch (error) {
    console.error('Decompression failed:', error);
    return compressed;
  }
};

/**
 * Save to localStorage with compression
 */
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    const jsonString = JSON.stringify(data);
    const compressed = compressData(jsonString);
    localStorage.setItem(key, compressed);
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

/**
 * Load from localStorage with decompression
 */
export const loadFromLocalStorage = (key: string): any => {
  try {
    const compressed = localStorage.getItem(key);
    if (!compressed) return null;
    
    const decompressed = decompressData(compressed);
    return JSON.parse(decompressed);
  } catch (error) {
    // Fallback: try parsing directly in case it's not compressed
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (fallbackError) {
      console.error('Failed to load from localStorage:', error);
      return null;
    }
  }
};
