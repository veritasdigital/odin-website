import { useState, useEffect } from 'react';
import { LazyImage } from './LazyImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { getOptimizedImageSrc, getLazyLoadThreshold } from '@/utils/mobileOptimization';

interface MobileOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  mobileSrc?: string;
  priority?: boolean;
}

/**
 * Mobile-optimized image component with automatic optimization
 */
export const MobileOptimizedImage = ({
  src,
  alt,
  mobileSrc,
  priority = false,
  className,
  ...props
}: MobileOptimizedImageProps) => {
  const isMobile = useIsMobile();
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Use mobile-specific source if provided, otherwise optimize desktop source
    const optimizedSrc = isMobile
      ? mobileSrc || getOptimizedImageSrc(src, true)
      : src;
    setImageSrc(optimizedSrc);
  }, [src, mobileSrc, isMobile]);

  // For priority images, load immediately without lazy loading
  if (priority) {
    return (
      <OptimizedImage src={imageSrc} alt="Image" sizes="(max-width: 768px) 100vw, 50vw" priority alt={alt}
        className={className}
        
        decoding="async"
        fetchPriority="high"
        {...props} />
    );
  }

  // Use lazy loading for non-priority images
  return (
    <LazyImage
      src={imageSrc}
      alt={alt}
      className={className}
      threshold={getLazyLoadThreshold()}
      {...props}
    />
  );
};
