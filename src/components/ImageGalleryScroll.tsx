import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ImageGalleryScrollProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageGalleryScroll = ({ images, alt, className = "" }: ImageGalleryScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, images.length]);

  // Pause auto-scroll on interaction, resume after delay
  const handleInteraction = () => {
    setIsAutoScrolling(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollUp = () => {
    handleInteraction();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollDown = () => {
    handleInteraction();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Handle wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (images.length <= 1) return;
    e.preventDefault();
    handleInteraction();
    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      onWheel={handleWheel}
    >
      {/* Images Container */}
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="absolute w-full h-full" style={{ top: `${index * 100}%` }}>
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollUp}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background shadow-soft"
        aria-label="Previous image"
      >
        <ChevronUp size={20} />
      </button>
      <button
        onClick={scrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background shadow-soft"
        aria-label="Next image"
      >
        <ChevronDown size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {images.map((_, index) => (
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
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryScroll;