import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Award, Globe, Shield, CheckCircle, Factory, Lightbulb, Users, TrendingUp, Sparkles, Heart, DollarSign, Clock } from "lucide-react";
import heroImage from "@/assets/hero-towels.jpg";
import luxuryImage from "@/assets/luxury-towel.jpg";
import premiumImage from "@/assets/premium-towel.jpg";
import standardImage from "@/assets/standard-towel.jpg";
import hygieneImage from "@/assets/hygiene-towel.jpg";
import sustainableHero from "@/assets/sustainable-hero.jpg";
import whyUsQuality from "@/assets/why-us-quality.jpg";
import whyUsVariety from "@/assets/why-us-variety.jpg";
import whyUsManufacturing from "@/assets/why-us-manufacturing.jpg";
import whyUsInnovation from "@/assets/why-us-innovation.jpg";
import whyUsPartnership from "@/assets/why-us-partnership.jpg";

const Home = () => {
  const categories = [
    {
      name: "Welcot Luxury",
      description: "Zero-twist, ultra-soft towels for premium comfort",
      image: luxuryImage,
      link: "/products?category=luxury",
    },
    {
      name: "Welcot Premium",
      description: "Ring-spun and combed cotton towels with elegance",
      image: premiumImage,
      link: "/products?category=premium",
    },
    {
      name: "Welcot Standard",
      description: "Durable, everyday towels made from open-end and recycled cotton",
      image: standardImage,
      link: "/products?category=standard",
    },
    {
      name: "Welcot Hygenie",
      description: "Antibacterial, bamboo, and bleach-free eco towels for a cleaner future",
      image: hygieneImage,
      link: "/products?category=hygenie",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Crafted with finest cotton for lasting softness",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Export",
      description: "Trusted by hotels and resorts worldwide",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable",
      description: "Eco-friendly practices in every weave",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "Meeting international quality standards",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Softness You Can Feel.<br />
              <span className="text-primary">Quality You Can Trust.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-foreground/80">
              WELCOT Towels – Manufacturer & Exporter of Premium Terry Towels from India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Welcot Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose WELCOT?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just a towel manufacturer — we're your long-term partner in quality, reliability, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Reason 1: Quality & Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Reliable Quality with Responsible Support</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Every Welcot towel goes through a carefully supervised inspection process, ensuring top-tier quality at every stage. However, as with all hand-finished products, occasional human errors are a reality in textile production.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    What sets us apart is how we respond.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-2">
                      If you ever receive a product with defects — no matter how minor:
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      We'll replace it or refund it, no questions asked.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    We don't just promise quality. We protect it.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 group">
                <img
                  src={whyUsQuality}
                  alt="Quality control inspection"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </div>

            {/* Reason 2: Wide Product Collection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="group">
                <img
                  src={whyUsVariety}
                  alt="Wide variety of towel products"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Widest Product Collection, Tailored for Every Need</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At Welcot, we understand that different markets require different towel solutions — in material, price point, design, and purpose. That's why we've built one of the most versatile and scalable towel collections in the industry.
                  </p>
                  <p className="text-muted-foreground">
                    From ultra-luxury zero-twist bath towels to value-based recycled yarn products, our range is designed to meet the unique needs of:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Importers & wholesalers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Private label brands</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Retail chains & hypermarkets</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Hotels, salons & institutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Excellence with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="group">
              <img
                src={whyUsManufacturing}
                alt="Modern manufacturing facility"
                className="rounded-2xl shadow-premium w-full group-hover:scale-[1.02] transition-smooth"
              />
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Large-Scale, Modern Towel Manufacturing</h3>
                  <p className="text-muted-foreground mb-4">
                    Welcot operates with the strength of multiple integrated units equipped for high-volume, high-efficiency towel production — built to support both domestic and global demands.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  Production Highlights
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">500+ tons of towels annually</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Modern high-speed rapier looms for precision weaving</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Continuous dyeing machines for consistent color finish</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Soft flow dyeing units for delicate handling of fine yarns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">High-efficiency tumble dryers & hydro extractors for faster drying</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Automatic shearing and hemming machines for clean, durable finishes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Embroidery & logo weaving machines for private label customization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm">Precision cutting, folding & packaging lines for retail-ready output</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm font-semibold mb-2">With this advanced infrastructure, Welcot ensures:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Bulk order execution without compromising on quality</li>
                  <li>• Smooth lead times even during peak seasons</li>
                  <li>• Capability to scale with growing client needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* 1. Reliable Quality with Responsible Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Reliable Quality with Responsible Support</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Every Welcot towel goes through a carefully supervised inspection process, ensuring top-tier quality at every stage. However, as with all hand-finished products, occasional human errors are a reality in textile production.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    What sets us apart is how we respond.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-2">
                      If you ever receive a product with defects — no matter how minor:
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      We'll replace it or refund it, no questions asked.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    We don't just promise quality. We protect it.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 group">
                <img
                  src={whyUsQuality}
                  alt="Quality control inspection"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </div>

            {/* 2. Widest Product Collection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="group">
                <img
                  src={whyUsVariety}
                  alt="Wide variety of towel products"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Widest Product Collection, Tailored for Every Need</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At Welcot, we understand that different markets require different towel solutions — in material, price point, design, and purpose. That's why we've built one of the most versatile and scalable towel collections in the industry.
                  </p>
                  <p className="text-muted-foreground">
                    From ultra-luxury zero-twist bath towels to value-based recycled yarn products, our range is designed to meet the unique needs of:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Importers & wholesalers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Private label brands</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Retail chains & hypermarkets</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Hotels, salons & institutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Large-Scale Manufacturing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Factory className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Large-Scale, Modern Towel Manufacturing</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Welcot operates with the strength of multiple integrated units equipped for high-volume, high-efficiency towel production — built to support both domestic and global demands.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Award className="text-primary" size={20} />
                      Production Highlights
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">500+ tons of towels annually</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Modern high-speed rapier looms for precision weaving</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Continuous dyeing machines for consistent color finish</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Soft flow dyeing units for delicate handling of fine yarns</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">High-efficiency tumble dryers & hydro extractors</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Automatic shearing and hemming machines</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Embroidery & logo weaving machines</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">Precision cutting, folding & packaging lines</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-semibold mb-2">With this advanced infrastructure, Welcot ensures:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Bulk order execution without compromising on quality</li>
                      <li>• Smooth lead times even during peak seasons</li>
                      <li>• Capability to scale with growing client needs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 group">
                <img
                  src={whyUsManufacturing}
                  alt="Modern manufacturing facility"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </div>

            {/* 4. Sample Development Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="group">
                <img
                  src={whyUsInnovation}
                  alt="Sample development and innovation"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Sample Development Solutions</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At Welcot, innovation is woven into everything we do. We actively work with brands and importers to develop new towel collections, product categories, and seasonal lines based on market trends and client needs.
                  </p>
                  <p className="text-muted-foreground">
                    From new yarn types and weaving patterns to special finishes, embroidery, and packaging concepts, our team supports clients through:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span>Trend research & material sourcing</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span>Sampling & prototyping</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span>Custom size, GSM, and finish development</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span>Design consultation and CAD mockups</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span>Low-cost sampling before bulk production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Long-Term Business Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Long-Term Business Vision, Not Short-Term Gains</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At Welcot, we don't chase quick profits or prioritize one-time bulk deals over the long-term value of a client relationship. Our approach is simple but rare in today's market:
                  </p>
                  <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-sm font-semibold mb-2">We build partnerships, not transactions.</p>
                  </div>
                  <p className="text-muted-foreground">
                    This means we invest time in understanding your brand, helping you find the right product fit, offering flexible MOQs (Minimum Order Quantities) when needed, and supporting your growth — even if it starts small.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>We are open to supporting new brands with lower MOQs</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>We provide upfront guidance on pricing, specs, and market feasibility</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>We grow with you — as your volume scales, so does our support</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Because we believe:</strong> The strongest partnerships are built on shared success, not short-term profit.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 group">
                <img
                  src={whyUsPartnership}
                  alt="Long-term business partnership"
                  className="rounded-2xl shadow-premium w-full h-[400px] object-cover group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Segments Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Discover Our Signature Collections</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each towel range is designed with a unique purpose — combining comfort, performance, and quality craftsmanship for every need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Welcot Luxury */}
            <Card className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={luxuryImage}
                      alt="Welcot Luxury Towels"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-2xl font-bold">Welcot Luxury</h3>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-4">
                      Exceptional softness. Exclusive quality.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Welcot Luxury towels deliver a truly elevated experience — from hotel suites to high-end spas. 
                      They are luxuriously soft, richly textured, and instantly make an impression.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Incredibly soft and plush for a spa-like feel</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Rich color tones with elegant finishing</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Built to impress in premium hospitality spaces</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Durable and dependable for luxury environments</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild className="w-full">
                      <Link to="/contact">Request Free Samples</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Welcot Premium */}
            <Card className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={premiumImage}
                      alt="Welcot Premium Towels"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="text-primary" size={24} />
                      <h3 className="text-2xl font-bold">Welcot Premium</h3>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-4">
                      Signature softness, timeless style.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Welcot Premium towels bring together everyday functionality with a touch of sophistication — ideal for boutique hotels and upscale home retailers.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Smooth softness for everyday luxury</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Elegant textures and contemporary designs</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Reliable performance for guests and family use</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Perfectly suited for stylish living spaces</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild className="w-full">
                      <Link to="/contact">Request Free Samples</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Welcot Standard */}
            <Card className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={standardImage}
                      alt="Welcot Standard Towels"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="text-primary" size={24} />
                      <h3 className="text-2xl font-bold">Welcot Standard</h3>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-4">
                      Essential comfort, trusted quality.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Designed for reliability without compromise, Welcot Standard towels are dependable, cost-efficient, and perfect for everyday use in large operations.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-sm">
                        <Sparkles className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Comfortable and functional for daily use</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Clock className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Quick-drying and easy to maintain</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <DollarSign className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Smart pricing without cutting quality</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Factory className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Trusted by gyms, budget hotels, and institutions</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild className="w-full">
                      <Link to="/contact">Request Free Samples</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Welcot Hygiene */}
            <Card className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={hygieneImage}
                      alt="Welcot Hygiene Towels"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="text-primary" size={24} />
                      <h3 className="text-2xl font-bold">Welcot Hygiene</h3>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-4">
                      Advanced protection. Everyday confidence.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Hygiene meets comfort in the Welcot Hygiene range. Engineered for freshness protection and long-term cleanliness — ideal for shared-use environments.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-sm">
                        <Shield className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Helps resist odor and bacterial growth</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Shield className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Safe for frequent skin contact and public use</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Leaf className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Adds hygiene benefits without losing softness</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Heart className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Suited for wellness, fitness, and healthcare sectors</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild className="w-full">
                      <Link to="/contact">Request Free Samples</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Watch Our Company Video</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience Welcot's manufacturing excellence and commitment to quality
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-video">
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

      {/* Visit Workshop CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                See Where the Magic Happens
              </h2>
              <p className="text-lg text-white/90">
                Take a virtual tour of our state-of-the-art manufacturing facilities
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild className="flex-shrink-0">
              <Link to="/workshops">
                Visit Our Workshop <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Collections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect towel for every need, from luxury comfort to sustainable innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth cursor-pointer"
              >
                <Link to={category.link}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{category.description}</p>
                      <span className="inline-flex items-center text-sm font-medium">
                        Explore More <ArrowRight className="ml-2" size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Sustainable Innovations
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our commitment to the environment drives us to create eco-friendly towels using
                recycled cotton, bamboo fiber, and antibacterial technologies. Experience luxury
                that's kind to the planet.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Leaf className="text-accent flex-shrink-0" size={20} />
                  <span>Recycled Cotton Towels</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="text-accent flex-shrink-0" size={20} />
                  <span>Bamboo Fiber Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="text-accent flex-shrink-0" size={20} />
                  <span>Antibacterial & Hygienic</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="text-accent flex-shrink-0" size={20} />
                  <span>Vat Dyed & Bleach-Free</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/sustainable">
                  View Sustainable Collection <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={sustainableHero}
                alt="Sustainable towels"
                className="rounded-2xl shadow-premium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience WELCOT Quality?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us for premium towels that elevate your brand. Request a catalog or
            sample today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request Catalog</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
