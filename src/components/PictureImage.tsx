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
 * Picture component with optional fetchPriority support.
 * It intentionally does NOT rewrite URLs to .webp to avoid 404s in production.
 * Any WebP usage should be done via explicit imports.
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
  // Build image props and map React's camelCase fetchPriority to a lowercase
  // DOM attribute when explicitly set (avoids React unknown-prop warnings).
  const imgProps = {
    src,
    alt,
    width,
    height,
    loading,
    decoding: 'async' as const,
    className,
    ...props,
    ...(fetchPriority !== 'auto' && { fetchpriority: fetchPriority as any }),
  };

  return <img {...imgProps} />;
};
