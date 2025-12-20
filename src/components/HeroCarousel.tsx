import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text?: string;
  cta2Link?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

const HeroCarousel = ({ slides, autoPlayInterval = 5000 }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
              transition: "transform 5s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-left max-w-7xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${index === currentSlide
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none absolute"
              }`}
          >
            <div className="max-w-4xl pt-10">
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < slide.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl lg:text-2xl mb-10 text-white/90 font-light">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-7 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-glow font-semibold shadow-premium hover:scale-105 transition-smooth"
                >
                  <a href={slide.cta1Link}>
                    {slide.cta1Text} <ArrowRight className="ml-2" size={24} />
                  </a>
                </Button>
                {slide.cta2Text && slide.cta2Link && (
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold shadow-premium hover:scale-105 transition-smooth"
                    style={{ color: "#265e62" }}
                  >
                    <Link to={slide.cta2Link}>{slide.cta2Text}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide
              ? "w-12 bg-secondary"
              : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
