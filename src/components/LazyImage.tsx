import { useEffect, useRef } from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
}

export const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  threshold = 0.01,
  rootMargin = '50px',
  className,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use native lazy loading if supported
    if ('loading' in HTMLImageElement.prototype) {
      img.src = src;
      return;
    }

    // Fallback to Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src, threshold, rootMargin]);

  return (
    <OptimizedImage 
      ref={imgRef}
      src={placeholder}
      alt={alt}
      sizes="(max-width: 768px) 100vw, 50vw"
      loading={loading}
      decoding={decoding}
      className={className}
      {...props} />
  );
};
