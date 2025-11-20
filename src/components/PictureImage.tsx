interface PictureImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
}

/**
 * Picture component with WebP support and PNG/JPG fallback
 * In development: serves original images
 * In production: vite-plugin-image-optimizer automatically converts to WebP
 */
export const PictureImage = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className,
  ...props
}: PictureImageProps) => {
  // In production builds, the vite-plugin-image-optimizer will automatically
  // generate WebP versions and optimize all images
  const isProduction = import.meta.env.PROD;
  
  // Only attempt WebP in production or if the source is already WebP
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const shouldUseWebP = isProduction && webpSrc !== src;

  if (!shouldUseWebP) {
    // In development, just use the original image
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        {...props}
      />
    );
  }

  // In production, use picture element with WebP source
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
};
