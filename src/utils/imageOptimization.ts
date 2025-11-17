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

/**
 * Convert image to WebP format (client-side)
 */
export const convertToWebP = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          } else {
            reject(new Error('Failed to convert image'));
          }
        },
        'image/webp',
        0.85
      );
    };
    img.onerror = reject;
    img.src = imageUrl;
  });
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = (): 'webp' | 'jpeg' => {
  const canvas = document.createElement('canvas');
  const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  return supportsWebP ? 'webp' : 'jpeg';
};

/**
 * Compress image quality based on device capabilities
 */
export const getImageQuality = (): number => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 0.85;
  
  const effectiveType = connection.effectiveType;
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 0.6;
    case '3g':
      return 0.75;
    case '4g':
    default:
      return 0.85;
  }
};
