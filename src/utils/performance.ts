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
