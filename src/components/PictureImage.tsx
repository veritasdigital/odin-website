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

  // Convert fetchPriority to lowercase for the DOM attribute
  const imgProps = {
    src,
    alt,
    width,
    height,
    loading,
    decoding: 'async' as const,
    className,
    ...props,
    ...(fetchPriority !== 'auto' && { fetchpriority: fetchPriority as any })
  };

  if (!shouldUseWebP) {
    // In development, just use the original image
    return <img {...imgProps} />;
  }

  // In production, use picture element with WebP source
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img {...imgProps} />
    </picture>
  );
};
