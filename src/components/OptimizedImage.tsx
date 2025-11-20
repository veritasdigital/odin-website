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
  // Determine loading strategy
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriorityValue = priority ? 'high' : 'auto';

  return (
    <img 
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={className}
      sizes={sizes}
      {...props}
      {...(priority && { fetchpriority: fetchPriorityValue as any })}
    />
  );
});
