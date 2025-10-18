import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Award, Globe, Shield, CheckCircle, Factory, Users, Sparkles, Heart } from "lucide-react";
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
      icon: <Sparkles className="w-10 h-10" />,
      title: "Premium Cotton Craftsmanship",
      description: "Finest cotton sourced and woven with precision for lasting softness",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Lasting Durability and Softness",
      description: "Quality that stands the test of time and frequent use",
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Manufacturing Practices",
      description: "Eco-friendly processes that protect our planet",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Trusted by Leading Hospitality Brands",
      description: "Preferred choice of hotels and resorts worldwide",
    },
  ];

  const workshopImages = [
    whyUsManufacturing,
    whyUsQuality,
    whyUsVariety,
    whyUsPartnership,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner - Enhanced */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
              Where Luxury Meets<br />
              <span className="text-primary">Everyday Comfort</span>
            </h1>
            <p className="text-2xl lg:text-3xl mb-10 text-foreground/80 font-light">
              Experience the perfect blend of exceptional quality and unmatched softness
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-lg px-8 py-6 shadow-premium hover:scale-105 transition-smooth">
                <a href="#collection">
                  Explore Our Collection <ArrowRight className="ml-2" size={24} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/contact">Request Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl leading-relaxed text-foreground/90 mb-8">
              WELCOT is a trusted manufacturer and exporter of premium terry towels, combining decades of craftsmanship with modern innovation. 
              We specialize in creating luxurious, durable, and sustainable towels that meet the highest international standards.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                Read More About Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Watch Our Company Video</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience WELCOT's manufacturing excellence and commitment to quality
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-video bg-background/50 backdrop-blur">
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

      {/* Why Choose Welcot - Simplified */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Why Choose WELCOT</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in quality, reliability, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseHighlights.map((item, index) => (
              <Card 
                key={index} 
                className="border-none shadow-soft hover:shadow-premium transition-smooth group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-smooth">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2" size={20} />
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

      {/* Workshop Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Behind the Craft: Our Workshop</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the meticulous craftsmanship and state-of-the-art facilities that bring WELCOT towels to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workshopImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-premium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image}
                    alt={`Workshop ${index + 1}`}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="shadow-medium">
              <Link to="/workshops">
                Visit Our Workshop <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 gradient-premium text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Experience WELCOT Quality?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Partner with us for premium towels that elevate your brand. Request a catalog or
            sample today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 shadow-premium">
              <Link to="/contact">Request Catalog</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6" 
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
