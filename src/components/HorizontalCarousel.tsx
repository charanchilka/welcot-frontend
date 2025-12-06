import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface HorizontalCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const HorizontalCarousel = ({ images, alt, className = "" }: HorizontalCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Autoplay plugin with pauseOnHover
  const autoplayPlugin = Autoplay({
    delay: 2200,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: false,
      containScroll: "trimSnaps",
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 1 },
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [autoplayPlugin]
  );

  // Track current slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Calculate slides per view based on screen size and image count
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return Math.min(2, images.length);
    return Math.min(3, images.length);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      role="region"
      aria-label="Image carousel"
      tabIndex={0}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {images.map((image, index) => {
            // Calculate opacity for fade effect
            const isVisible = index >= currentIndex && index < currentIndex + 3;
            
            return (
              <div
                key={index}
                className="flex-shrink-0 min-w-0 h-full px-1 transition-opacity duration-500 ease-out"
                style={{
                  flex: `0 0 ${100 / Math.min(3, images.length)}%`,
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${images.length}`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${alt} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                    style={{
                      opacity: 1,
                    }}
                  />
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optional dots indicator - subtle and matching theme */}
      {images.length > 3 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-4" 
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalCarousel;
