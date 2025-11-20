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
 * Automatically tries to load WebP version if available
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
  // Generate WebP source path
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const hasWebPVersion = webpSrc !== src; // Only use WebP if extension was changed

  return (
    <picture>
      {hasWebPVersion && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
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
