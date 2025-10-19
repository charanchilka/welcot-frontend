import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Award, Globe, Shield, CheckCircle, Factory, Users, Sparkles, Heart, Package, Cog, Target, Eye } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-towels.jpg";
import luxuryImage from "@/assets/luxury-towel.jpg";
import premiumImage from "@/assets/premium-towel.jpg";
import standardImage from "@/assets/standard-towel.jpg";
import hygieneImage from "@/assets/hygiene-towel.jpg";
import sustainableHero from "@/assets/sustainable-hero.jpg";
import whyUsQuality from "@/assets/why-us-quality.jpg";
import whyUsVariety from "@/assets/why-us-variety.jpg";
import whyUsManufacturing from "@/assets/why-us-manufacturing.jpg";
import whyUsPartnership from "@/assets/why-us-partnership.jpg";

const Home = () => {
  const categories = [
    {
      name: "Welcot Luxury",
      description: "Exceptional softness, exclusive quality",
      image: luxuryImage,
      link: "/products?category=luxury",
    },
    {
      name: "Welcot Premium",
      description: "Signature softness, timeless style",
      image: premiumImage,
      link: "/products?category=premium",
    },
    {
      name: "Welcot Standard",
      description: "Essential comfort, trusted quality",
      image: standardImage,
      link: "/products?category=standard",
    },
    {
      name: "Welcot Hygiene",
      description: "Advanced protection, everyday confidence",
      image: hygieneImage,
      link: "/products?category=hygenie",
    },
  ];

  const whyChooseHighlights = [
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Reliable Quality with Responsible Support",
      description: "Dependable service from sampling to delivery.",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Widest Product Collection",
      description: "From luxury to standard, we craft to every category.",
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Tailored for Every Need",
      description: "Custom materials and pattern solutions.",
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Large-Scale, Modern Manufacturing",
      description: "Advanced automation with sustainable techniques.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Tested and Proven Quality",
      description: "Certified excellence with industry benchmarks.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Sampling Solutions for Custom Towels",
      description: "Flexibility and creative support for new designs.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Long-Term Business Vision",
      description: "Building partnerships that last beyond products.",
    },
  ];

  const certifications = [
    { name: "ISO Certified", icon: <Award className="w-8 h-8" /> },
    { name: "OEKO-TEX", icon: <Leaf className="w-8 h-8" /> },
    { name: "GOTS", icon: <Shield className="w-8 h-8" /> },
    { name: "Quality Tested", icon: <CheckCircle className="w-8 h-8" /> },
  ];

  const workshopImages = [
    whyUsManufacturing,
    whyUsQuality,
    whyUsVariety,
    whyUsPartnership,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced with Motion */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            animation: "slowPan 30s ease-in-out infinite alternate"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-foreground leading-tight animate-fade-in">
              Experience Luxury.<br />
              <span className="text-primary">Crafted Through Excellence.</span>
            </h1>
            <p className="text-2xl lg:text-3xl mb-10 text-foreground/80 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Where premium quality meets everyday comfort
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild className="text-lg px-8 py-6 shadow-premium hover:scale-105 transition-smooth">
                <a href="#collection">
                  Explore Our Collections <ArrowRight className="ml-2" size={24} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 hover:scale-105 transition-smooth">
                <Link to="/about">Read More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Highlight - Visually Layered */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${premiumImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 animate-fade-in">
              <p className="text-2xl lg:text-3xl leading-relaxed text-foreground font-light">
                Welcot redefines towel craftsmanship — blending quality, care, and innovation.
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground">
                Serving the finest hotels, spas, and homes worldwide.
              </p>
            </div>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group hover:scale-105 transition-smooth shadow-soft"
            >
              <Link to="/about">
                Read More About Us 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Watch Our Company Video</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step inside our world of innovation
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-video bg-muted/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
                title="Welcot Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Welcot - Enhanced Carousel Version */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${luxuryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Why Choose Welcot — <span className="text-primary">Because Quality Is a Promise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in excellence, innovation, and lasting relationships
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {whyChooseHighlights.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-2 border-primary/10 shadow-medium hover:shadow-premium hover:border-primary/30 transition-smooth group cursor-pointer h-full">
                      <CardContent className="p-8 text-center flex flex-col items-center h-full">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-smooth">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground flex-grow">{item.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg" 
              asChild 
              className="shadow-premium hover:scale-105 transition-smooth"
            >
              <Link to="/about">
                Discover More <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Collection Section */}
      <section id="collection" className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Our Collection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover towel excellence across four distinctive segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={category.link}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                      <p className="text-lg opacity-90 mb-6">{category.description}</p>
                      <span className="inline-flex items-center text-base font-semibold bg-white/20 backdrop-blur px-6 py-3 rounded-full group-hover:bg-white/30 transition-smooth">
                        Explore Collection <ArrowRight className="ml-2" size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Innovations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Sustainable Innovations
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our commitment to the environment drives us to create eco-friendly towels using
                recycled cotton, bamboo fiber, and antibacterial technologies. Experience luxury
                that's kind to the planet.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <Leaf className="text-accent flex-shrink-0" size={24} />
                  <span>Recycled Cotton Towels</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Leaf className="text-accent flex-shrink-0" size={24} />
                  <span>Bamboo Fiber Technology</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Leaf className="text-accent flex-shrink-0" size={24} />
                  <span>Antibacterial & Hygienic</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Leaf className="text-accent flex-shrink-0" size={24} />
                  <span>Vat Dyed & Bleach-Free</span>
                </li>
              </ul>
              <Button size="lg" asChild className="shadow-medium">
                <Link to="/sustainable">
                  View Sustainable Collection <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={sustainableHero}
                alt="Sustainable towels"
                className="rounded-2xl shadow-premium w-full hover:scale-[1.02] transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Highlight - Enhanced with Parallax */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Experience Our Craftsmanship</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our workshop to see innovation in action
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto mb-12"
          >
            <CarouselContent className="-ml-4">
              {workshopImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-premium transition-smooth">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={image}
                        alt={`Workshop ${index + 1}`}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>

          <div className="text-center animate-fade-in">
            <Button size="lg" asChild className="shadow-premium hover:scale-105 transition-smooth">
              <Link to="/workshops">
                Visit Our Workshop <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certification & Test Reports - NEW SECTION */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Our Certifications & Test Reports — <span className="text-primary">Trusted Worldwide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every Welcot product is tested, verified, and certified — ensuring your confidence in every thread.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="border-2 border-primary/10 shadow-soft hover:shadow-premium hover:border-primary/30 transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-smooth">
                      {cert.icon}
                    </div>
                    <h3 className="text-base font-bold text-foreground">{cert.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="shadow-medium hover:scale-105 transition-smooth"
            >
              <Link to="/about">
                View All Certifications <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 gradient-premium text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Ready to Experience WELCOT Quality?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Partner with us for premium towels that elevate your brand. Request a catalog or sample today.
          </p>
          <p className="text-lg mb-10 opacity-80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We're Always Here to Support Your Vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="text-lg px-8 py-6 shadow-premium hover:scale-105 transition-smooth"
            >
              <Link to="/contact">Request Catalog</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 hover:scale-105 transition-smooth" 
              asChild
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
