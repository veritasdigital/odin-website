/**
 * Image optimization utilities for Core Web Vitals
 */

interface ImageLoadOptions {
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
}

/**
 * Get optimized image loading attributes based on position
 */
export const getImageLoadingProps = (
  isAboveFold: boolean = false
): ImageLoadOptions => {
  return {
    loading: isAboveFold ? 'eager' : 'lazy',
    fetchpriority: isAboveFold ? 'high' : 'low',
    decoding: 'async',
  };
};

/**
 * Generate responsive image srcset for different screen sizes
 */
export const generateSrcSet = (imagePath: string, widths: number[]): string => {
  return widths
    .map((width) => {
      const ext = imagePath.split('.').pop();
      const basePath = imagePath.replace(`.${ext}`, '');
      return `${basePath}-${width}w.${ext} ${width}w`;
    })
    .join(', ');
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string, type: string = 'image/webp') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.type = type;
  document.head.appendChild(link);
};
