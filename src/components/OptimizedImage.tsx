import { ImgHTMLAttributes, forwardRef } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * Optimized image component with automatic WebP support and srcset
 * Automatically generates picture elements with WebP sources and fallbacks
 */
export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  width,
  height,
  className,
  ...props
}, ref) => {
  // Extract base name and extension
  const ext = src.split('.').pop() || '';
  const basePath = src.replace(`.${ext}`, '');
  
  // Check if this is already a WebP file (optimization already done)
  const isAlreadyWebP = ext === 'webp';

  // Generate WebP srcset (assume standard sizes exist)
  const webpSizes = [320, 640, 768, 1024, 1280, 1920];
  
  // For already-WebP images, try to find responsive variants
  let webpSrcset = '';
  let originalSrcset = '';
  
  if (isAlreadyWebP) {
    // For WebP images, just use the source as-is (no srcset generation needed yet)
    webpSrcset = src;
  } else {
    // For non-WebP images, try to generate WebP srcset paths
    webpSrcset = webpSizes
      .map(size => `${basePath}-${size}w.webp ${size}w`)
      .join(', ');
    
    // Original format srcset
    originalSrcset = webpSizes
      .map(size => `${basePath}-${size}w.${ext} ${size}w`)
      .join(', ');
  }

  // Determine loading strategy
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriorityValue = priority ? 'high' : 'auto';

  return (
    <picture>
      {!isAlreadyWebP && (
        <>
          {/* WebP source with srcset */}
          <source
            type="image/webp"
            srcSet={`${basePath}.webp, ${webpSrcset}`}
            sizes={sizes}
          />
          
          {/* Fallback to original format */}
          <source
            type={`image/${ext === 'jpg' ? 'jpeg' : ext}`}
            srcSet={`${src}, ${originalSrcset}`}
            sizes={sizes}
          />
        </>
      )}
      
      {/* Fallback img element */}
      <img 
        ref={ref}
        src={src} 
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={className}
        {...props}
        {...(priority && { fetchpriority: fetchPriorityValue as any })} />
    </picture>
  );
});
