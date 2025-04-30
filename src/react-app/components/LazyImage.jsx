import React, { useEffect, useRef, useState } from 'react';
import '../styles/lazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  placeholderColor = '#f0f0f0',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Create low quality placeholder if needed
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 1} ${height || 1}'%3E%3Crect width='100%25' height='100%25' fill='${placeholderColor.replace('#', '%23')}'/%3E%3C/svg%3E`;

  useEffect(() => {
    // Use Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px', // Load images when they're within 200px of viewport
          threshold: 0.01,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.disconnect();
        }
      };
    } else {
      // Fallback for browsers without Intersection Observer
      setIsInView(true);
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsError(true);
    setIsLoaded(true); // Consider it "loaded" to remove loading state
  };

  // Add srcset support for responsive images
  const generateSrcSet = () => {
    if (!src || isError) return undefined;
    
    // If the src includes a file extension like .jpg or .png
    const fileExtMatch = src.match(/\.(jpe?g|png|webp|avif|gif)$/i);
    if (!fileExtMatch) return undefined;
    
    const fileExt = fileExtMatch[0];
    const baseSrc = src.substring(0, src.length - fileExt.length);
    
    return `
      ${baseSrc}-small${fileExt} 400w,
      ${baseSrc}-medium${fileExt} 800w,
      ${src} 1200w
    `;
  };

  return (
    <div 
      className={`lazy-image-container ${className || ''} ${!isLoaded ? 'loading' : ''}`}
      ref={containerRef}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : 'auto',
        backgroundColor: placeholderColor
      }}
      {...props}
    >
      {isInView && (
        <>
          <img
            ref={imgRef}
            src={isError ? placeholder : src}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            srcSet={generateSrcSet()}
            sizes="(max-width: 500px) 400px, (max-width: 900px) 800px, 1200px"
          />
          {!isLoaded && (
            <div className="lazy-image-loader">
              <div className="lazy-image-spinner"></div>
            </div>
          )}
        </>
      )}
      {isError && (
        <div className="lazy-image-error">
          <span>Image could not be loaded</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage; 