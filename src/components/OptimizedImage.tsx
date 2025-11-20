import { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  className?: string;
}

/**
 * OptimizedImage component with automatic WebP support and fallback
 * Automatically converts PNG/JPG sources to WebP when available
 * Falls back to original format if WebP is not supported or doesn't exist
 */
export const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  loading = 'lazy',
  fetchpriority = 'auto',
  className,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [webpSupported, setWebpSupported] = useState(true);

  // Generate WebP version of the image path
  const getWebPSrc = (originalSrc: string): string => {
    // Check if already WebP
    if (originalSrc.endsWith('.webp')) return originalSrc;
    
    // Replace extension with .webp
    return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  };

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const elem = document.createElement('canvas');
      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setWebpSupported(checkWebPSupport());
  }, []);

  const webpSrc = getWebPSrc(src);
  const shouldUseWebP = webpSupported && webpSrc !== src;

  return (
    <picture>
      {shouldUseWebP && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
          onError={() => setImageSrc(src)}
        />
      )}
      <source srcSet={src} type={`image/${src.split('.').pop()}`} />
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchpriority}
        className={className}
        onError={() => {
          if (fallbackSrc) {
            setImageSrc(fallbackSrc);
          }
        }}
        {...props}
      />
    </picture>
  );
};
