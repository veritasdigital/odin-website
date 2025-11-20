/**
 * Image optimization utilities
 */

interface SrcSetEntry {
  width: number;
  path: string;
}

/**
 * Generate srcset string from image path
 */
export const getImageSrcSet = (imagePath: string, sizes: number[] = [320, 640, 768, 1024, 1280, 1920]): string => {
  const ext = imagePath.split('.').pop() || '';
  const basePath = imagePath.replace(`.${ext}`, '');
  
  return sizes
    .map(size => `${basePath}-${size}w.webp ${size}w`)
    .join(', ');
};

/**
 * Get optimal image size based on viewport and network
 */
export const getOptimalSize = (availableSizes: number[] = [320, 640, 768, 1024, 1280, 1920]): number => {
  const viewportWidth = window.innerWidth;
  const dpr = window.devicePixelRatio || 1;
  const targetWidth = viewportWidth * dpr;

  // Find the smallest size that's larger than target
  const optimalSize = availableSizes.find(size => size >= targetWidth) || availableSizes[availableSizes.length - 1];

  // Adjust for network speed
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (connection) {
    const effectiveType = connection.effectiveType;
    
    // Use smaller images on slow connections
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      const sizeIndex = availableSizes.indexOf(optimalSize);
      return availableSizes[Math.max(0, sizeIndex - 2)] || optimalSize;
    } else if (effectiveType === '3g') {
      const sizeIndex = availableSizes.indexOf(optimalSize);
      return availableSizes[Math.max(0, sizeIndex - 1)] || optimalSize;
    }
  }

  return optimalSize;
};

/**
 * Preload critical images with srcset
 */
export const preloadCriticalImages = (images: Array<{ src: string; sizes?: string; priority?: boolean }>) => {
  images.forEach(({ src, sizes = '100vw', priority = false }) => {
    if (!priority) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    // Add srcset if available
    const srcset = getImageSrcSet(src);
    if (srcset) {
      link.setAttribute('imagesrcset', srcset);
      link.setAttribute('imagesizes', sizes);
    }

    document.head.appendChild(link);
  });
};

/**
 * Get WebP path from original image path
 */
export const getWebPPath = (imagePath: string): string => {
  const ext = imagePath.split('.').pop() || '';
  return imagePath.replace(`.${ext}`, '.webp');
};

/**
 * Check if browser supports WebP
 */
export const supportsWebP = (): boolean => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Generate sizes attribute based on context
 */
export const generateSizesAttribute = (context: 'hero' | 'logo' | 'content' | 'thumbnail'): string => {
  switch (context) {
    case 'hero':
      return '100vw';
    case 'logo':
      return '(max-width: 768px) 100px, 200px';
    case 'content':
      return '(max-width: 768px) 100vw, 50vw';
    case 'thumbnail':
      return '(max-width: 768px) 150px, 300px';
    default:
      return '100vw';
  }
};
