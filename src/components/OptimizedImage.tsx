import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Optimized image component with automatic WebP support and srcset
 * Automatically generates picture elements with WebP sources and fallbacks
 */
export const OptimizedImage = ({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  width,
  height,
  className,
  ...props
}: OptimizedImageProps) => {
  // Extract base name and extension
  const ext = src.split('.').pop() || '';
  const basePath = src.replace(`.${ext}`, '');

  // Generate WebP srcset (assume standard sizes exist)
  const webpSizes = [320, 640, 768, 1024, 1280, 1920];
  const webpSrcset = webpSizes
    .map(size => `${basePath}-${size}w.webp ${size}w`)
    .join(', ');

  // Original format srcset (if needed)
  const originalSrcset = webpSizes
    .map(size => `${basePath}-${size}w.${ext} ${size}w`)
    .join(', ');

  // Determine loading strategy
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <picture>
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
      
      {/* Fallback img element */}
      <img 
        src={src} 
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={className}
        {...props}
        {...(priority && { fetchpriority: 'high' as any })} />
    </picture>
  );
};
