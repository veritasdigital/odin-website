/**
 * Browser caching and CDN utilities
 */

/**
 * Set up service worker for caching
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

/**
 * Cache API responses with TTL
 */
export const cacheWithTTL = (key: string, data: any, ttl: number = 3600000) => {
  const item = {
    data,
    expiry: Date.now() + ttl,
  };
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('Failed to cache data:', error);
  }
};

/**
 * Get cached data if not expired
 */
export const getCachedData = (key: string): any | null => {
  try {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    if (Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.data;
  } catch (error) {
    console.error('Failed to get cached data:', error);
    return null;
  }
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/src/assets/hero-person-optimized.webp',
    '/src/assets/odin-logo-gradient.png',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * CDN URL builder
 */
export const getCDNUrl = (path: string, cdnDomain?: string): string => {
  if (!cdnDomain || import.meta.env.DEV) {
    return path;
  }
  return `${cdnDomain}${path}`;
};

/**
 * Clear expired cache entries
 */
export const clearExpiredCache = () => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    try {
      const itemStr = localStorage.getItem(key);
      if (itemStr) {
        const item = JSON.parse(itemStr);
        if (item.expiry && Date.now() > item.expiry) {
          localStorage.removeItem(key);
        }
      }
    } catch (error) {
      // Skip invalid entries
    }
  });
};
