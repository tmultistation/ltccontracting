import React, { useState, useEffect, useCallback, TouchEvent } from 'react';
import './ImageCarousel.css';
import { FaChevronLeft, FaChevronRight, FaHandPointer } from 'react-icons/fa';

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: '/images/projects/renovation.jpg',
    alt: 'Custom Home Renovation',
    caption: 'Complete Home Renovation & Addition in Providence'
  },
  {
    src: '/images/projects/kitchen-remodel.jpg',
    alt: 'Kitchen Remodeling',
    caption: 'Modern Kitchen Transformation in Warwick'
  },
  {
    src: '/images/projects/bathroom.jpg',
    alt: 'Bathroom Remodel',
    caption: 'Luxury Bathroom Renovation in Newport'
  },
  {
    src: '/images/projects/deck.jpg',
    alt: 'Outdoor Living',
    caption: 'Custom Deck & Outdoor Living Space in East Providence'
  },
  {
    src: '/images/projects/landscape.jpg',
    alt: 'Professional Landscaping',
    caption: 'Complete Landscape Design & Installation'
  },
  {
    src: '/images/projects/painting.jpg',
    alt: 'Professional Painting',
    caption: 'Interior & Exterior Painting Services'
  }
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setShowSwipeHint(false); // Hide hint after user's first touch
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious]);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    
    // Preload next image
    const nextIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
    preloadImage(carouselImages[nextIndex].src);
    
    // Preload previous image
    const prevIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
    preloadImage(carouselImages[prevIndex].src);
  }, [currentIndex]);

  return (
    <div 
      className="carousel-container"
      role="region"
      aria-label="Project image carousel"
    >
      <div 
        className="carousel-content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className="carousel-button prev" 
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
        <div className={`carousel-image-container ${!imagesLoaded[currentIndex] ? 'loading' : ''}`}>
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className="carousel-image"
            loading="lazy"
            onLoad={() => handleImageLoad(currentIndex)}
          />
          <div className="carousel-caption">
            {carouselImages[currentIndex].caption}
          </div>
        </div>
        <button 
          className="carousel-button next" 
          onClick={handleNext}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
      
      {isMobile && showSwipeHint && (
        <div className="swipe-indicator">
          <FaHandPointer />
          <span>Swipe to navigate</span>
        </div>
      )}
      
      <div className="carousel-dots" role="tablist">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 