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
import HeroCarousel from "@/components/HeroCarousel";
import hero_image_1 from "@/assets/home-page/hero-banner/hero-image-1.png";
import hero_image_2 from "@/assets/home-page/hero-banner/hero-image-2.png";
import hero_image_3 from "@/assets/home-page/hero-banner/hero-image-3.jpg";
import aboutUsHome from "@/assets/home-page/about-us/home-page-about-us.jpg";
import luxuryImage from "@/assets/home-page/our-collection/WELCOT-LUXURY.png";
import premiumImage from "@/assets/home-page/our-collection/WELCOT-PREMIUM.png";
import standardImage from "@/assets/home-page/our-collection/WELCOT-STANDARD.png";
import hygieneImage from "@/assets/home-page/our-collection/WELCOT-HYGINE.png";
import sustainableHero from "@/assets/home-page/sustainable/sustainable-1.png";
import whyChoose1 from "@/assets/home-page/why-choose/why-choose-1.jpg";
import whyChoose2 from "@/assets/home-page/why-choose/why-choose-2.jpg";
import whyChoose3 from "@/assets/home-page/why-choose/why-choose-3.png";
import whyChoose4 from "@/assets/home-page/why-choose/why-choose-4.jpg";
import whyChoose5 from "@/assets/home-page/why-choose/why-choose-5.jpg";
import whyChoose6 from "@/assets/home-page/why-choose/why-choose-6.png";
import whyChoose7 from "@/assets/home-page/why-choose/why-choose-7.png";
import whyUsQuality from "@/assets/home-page/why-choose/why-choose-6.png";
import whyUsVariety from "@/assets/home-page/why-choose/why-choose-7.png";
import whyUsManufacturing from "@/assets/home-page/why-choose/why-choose-4.jpg";
import whyUsPartnership from "@/assets/home-page/why-choose/why-choose-7.png";

import certDgft from "@/assets/about-us/certificates/cert-dgft.jpg";
import certMsme from "@/assets/about-us/certificates/cert-msme.png";
import certIcegate from "@/assets/about-us/certificates/cert-icegate.png";
import certGst from "@/assets/about-us/certificates/cert-gst.png";

const Home = () => {
  const heroSlides = [
    {
      image: hero_image_1,
      title: "Towels For Every Need.\nCrafted With Quality, Woven With Care.",
      subtitle: "Manufacturer and Exporter of Bath Towels, Hand Towels, Beach Towels, Hotel Towels & Custom Made Terry Textiles - Trusted by Importers and Brands Worldwide",
      cta1Text: "Explore Our Products",
      cta1Link: "/products",
      cta2Text: "Explore Sustainability",
      cta2Link: "/sustainable",
    },
    {
      image: hero_image_2,
      title: "Towel To Fashion Accessories.\nRedfined for Modern Living.",
      subtitle: "Explore our collection of towelling bags, pouches, hats, ponchos, and Terry apparel — crafted with style and functionality for global retail and lifestyle brands.",
      cta1Text: "Discover Accessories",
      cta1Link: "/accessories",
      cta2Text: "Explore Creative Range",
      cta2Link: "/accessories/terry-apparel",
    },
    {
      image: hero_image_3,
      title: "World-Class Towel Manufacturing Infrastructure in India.",
      subtitle: "Equipped with advanced looms, skilled craftsmanship, and modern finishing units — Welcot Towels delivers consistent quality and capacity for large-scale global exports.",
      cta1Text: "Explore Our Workshop",
      cta1Link: "/workshops",
      cta2Text: "Contact Our Team",
      cta2Link: "/contact",
    },
  ];
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
      link: "/sustainable",
    },
  ];

  const whyChooseHighlights = [
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Reliable Quality with Responsible Support",
      description: "Dependable service from sampling to delivery.",
      backgroundImage: whyChoose1,
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Widest Product Collection",
      description: "From luxury to standard, we craft to every category.",
      backgroundImage: whyChoose2,
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Tailored for Every Need",
      description: "Custom materials and pattern solutions.",
      backgroundImage: whyChoose3,
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Large-Scale, Modern Manufacturing",
      description: "Advanced automation with sustainable techniques.",
      backgroundImage: whyChoose4,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Tested and Proven Quality",
      description: "Certified excellence with industry benchmarks.",
      backgroundImage: whyChoose5,
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Sampling Solutions for Custom Towels",
      description: "Flexibility and creative support for new designs.",
      backgroundImage: whyChoose6,
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Long-Term Business Vision",
      description: "Building partnerships that last beyond products.",
      backgroundImage: whyChoose7,
    },
  ];

  const certifications = [
    { name: "DGFT Registered", image: certDgft },
    { name: "MSME Registered", image: certMsme },
    { name: "ICEGATE", image: certIcegate },
    { name: "GST Registered", image: certGst },
  ];

  const workshopImages = Object.values(
    import.meta.glob("@/assets/home-page/workshop/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel - Apple-inspired */}
      <HeroCarousel slides={heroSlides} autoPlayInterval={4000} />

      {/* About Us Highlight - Luxurious */}
      <section className="relative py-32 overflow-hidden bg-muted/30">
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={aboutUsHome}
                alt="Towel Manufacturing"
                className="rounded-2xl shadow-premium w-full hover:scale-[1.02] transition-smooth"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                Redefining Towel Craftsmanship for the Global Market
              </h2>
              <p className="text-xl lg:text-1xl leading-relaxed text-muted-foreground font-light">
                Welcot brings together tradition, innovation, and precision weaving to create premium towels trusted by international importers, hotels, and retail brands. From Solapur, India — to homes and stores worldwide.
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group hover:scale-105 transition-smooth shadow-soft border-2 hover:border-secondary"
              >
                <Link to="/about">
                  Read More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Video Section - Sleek */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">How Welcot Towels Are Manufactured</h2>
            <p className="text-xl lg:text-1xl text-muted-foreground max-w-3xl mx-auto font-light">
              From yarn processing to finished towels, explore the key stages carried out at our partner manufacturing unit.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-video bg-muted/20 animate-fade-in hover:scale-[1.02] transition-slow" style={{ animationDelay: "0.2s" }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nMd7omfDDCg"
                title="Welcot Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Welcot - Premium Carousel */}
      <section className="relative py-32 overflow-hidden bg-primary/5">
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Welcot — <span className="text-gradient-gold">Discover the Welcot Difference</span>
            </h2>
            <p className="text-xl lg:text-1xl text-muted-foreground max-w-3xl mx-auto font-light">
              Your trusted partner in excellence, innovation, and lasting relationships
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
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
                    <Card className="relative overflow-hidden border border-primary/10 shadow-soft hover:shadow-premium hover:border-secondary/50 transition-slow group cursor-pointer h-full bg-card/80 backdrop-blur">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-20 transition-slow group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                      />
                      <CardContent className="relative p-10 text-center flex flex-col items-center h-full">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10 text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary/20 transition-smooth shadow-soft">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                        <p className="flex-grow text-lg font-light">{item.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="relative static translate-y-0 bg-secondary text-secondary-foreground hover:bg-secondary/90" />
                <CarouselNext className="relative static translate-y-0 bg-secondary text-secondary-foreground hover:bg-secondary/90" />
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button
              size="lg"
              asChild
              className="shadow-premium hover:scale-105 transition-smooth bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-glow text-lg px-10 py-6"
            >
              <Link to="/about">
                Discover More <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Collection Section - Elegant Grid */}
      <section id="collection" className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">Our Collection</h2>
            <p className="text-xl lg:text-1xl text-muted-foreground max-w-3xl mx-auto font-light">
              Discover towel excellence across four distinctive segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-slow cursor-pointer animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={category.link}>
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-slow group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                      <h3 className="text-4xl font-bold mb-4">{category.name}</h3>
                      <p className="text-lg opacity-90 mb-8 font-light">{category.description}</p>
                      <span className="inline-flex items-center text-base font-semibold bg-secondary text-secondary-foreground px-8 py-4 rounded-full group-hover:scale-105 transition-smooth shadow-glow">
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
              <Button size="lg" asChild className="shadow-medium hover:scale-105 animate-fade-in transition-smooth">
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
                    <div className="inline-flex items-center justify-center w-32 h-32 mb-4 group-hover:scale-110 transition-smooth">
                      <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" />
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
