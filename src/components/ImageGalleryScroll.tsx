import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryScrollProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageGalleryScroll = ({ images, alt, className = "" }: ImageGalleryScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleCount = 3;
  const maxIndex = Math.max(0, images.length - visibleCount);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling || images.length <= visibleCount) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, images.length, maxIndex]);

  // Pause auto-scroll on interaction, resume after delay
  const handleInteraction = () => {
    setIsAutoScrolling(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollPrev = () => {
    handleInteraction();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const scrollNext = () => {
    handleInteraction();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex);
    handleInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const diff = startX - x;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
    handleInteraction();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX;
    const diff = startX - x;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
      setStartX(x);
    }
  };

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const imageWidth = images.length < visibleCount 
    ? `${100 / images.length}%` 
    : `${100 / visibleCount}%`;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group cursor-grab active:cursor-grabbing ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Images Container - Horizontal Strip */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ 
          transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          width: `${(images.length / visibleCount) * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative h-full flex-shrink-0 px-1"
            style={{ width: imageWidth }}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
              style={{
                opacity: index >= currentIndex && index < currentIndex + visibleCount ? 1 : 0.6
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show if more images than visible */}
      {images.length > visibleCount && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background shadow-soft"
            aria-label="Previous images"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background shadow-soft"
            aria-label="Next images"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator - Horizontal at bottom */}
      {images.length > visibleCount && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleInteraction();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex 
                  ? "bg-primary scale-125" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryScroll;
