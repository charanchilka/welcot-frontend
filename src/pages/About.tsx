import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, MessageCircle, CheckCircle, Package, Factory, Lightbulb, Target, Award } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPartners from "@/assets/about-us/partners.png";
import visionary1 from "@/assets/about-us/visionary-1.png";
import visionary2 from "@/assets/about-us/visionary-21.png";
import teamRohan from "@/assets/about-us/about-us-rohan.png";
import teamNikhil from "@/assets/about-us/about-us-nikhil.png";
import teamSiddharth from "@/assets/about-us/sidha.png";
import aboutVision from "@/assets/about-us/vision.png";
import aboutMission from "@/assets/about-us/mission.png";
import valueQuality from "@/assets/about-us/about-us-core-value-1.png";
import valueCollection from "@/assets/about-us/about-us-core-value-2.png";
import valueManufacturing from "@/assets/about-us/about-us-core-value-3.png";
import valueInnovation from "@/assets/about-us/about-us-core-value-4.png";
import valuePartnership from "@/assets/about-us/about-us-core-value-5.png";
import valueSustainability from "@/assets/about-us/about-us-core-value-6.png";
import whyUsManufacturing from "@/assets/why-us-manufacturing.jpg";
import whyUsQuality from "@/assets/why-us-quality.jpg";

const About = () => {
  const [counts, setCounts] = useState({ countries: 0, years: 0, quality: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const valueSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate countries counter
            let countriesCount = 0;
            const countriesInterval = setInterval(() => {
              countriesCount += 1;
              setCounts((prev) => ({ ...prev, countries: countriesCount }));
              if (countriesCount >= 25) clearInterval(countriesInterval);
            }, 50);

            // Animate years counter
            let yearsCount = 0;
            const yearsInterval = setInterval(() => {
              yearsCount += 1;
              setCounts((prev) => ({ ...prev, years: yearsCount }));
              if (yearsCount >= 20) clearInterval(yearsInterval);
            }, 50);

            // Animate quality counter
            let qualityCount = 0;
            const qualityInterval = setInterval(() => {
              qualityCount += 5;
              setCounts((prev) => ({ ...prev, quality: qualityCount }));
              if (qualityCount >= 100) clearInterval(qualityInterval);
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Navigation bar hide/show on core values sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nav = document.querySelector('nav');
          if (entry.isIntersecting) {
            nav?.classList.add('opacity-0', 'pointer-events-none');
          } else {
            nav?.classList.remove('opacity-0', 'pointer-events-none');
          }
        });
      },
      { threshold: 0.3 }
    );

    valueSectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Rohan Chilka",
      role: "Marketing & Client Relations [ North America & Europe]",
      image: teamRohan,
      linkedin: "#",
      email: "rohan@welcot.com",
      whatsapp: "+91-9404947907"
    },
    {
      name: "Nikhil Maheshwar",
      role: "Marketing & Operations [Asia-Pacific, Africa & Middle East]",
      image: teamNikhil,
      linkedin: "#",
      email: "nikhil@welcot.com",
      whatsapp: "+91-7350485599"
    },
    {
      name: "Siddharth Kavaddevi",
      role: "Finance & Administration",
      image: teamSiddharth,
      linkedin: "#",
      email: "siddharth@welcot.com",
      whatsapp: "+91-9209915556"
    }
  ];

  const coreValues = [
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Reliable Quality with Responsible Support",
      content: `Every Welcot towel goes through a carefully supervised inspection process, ensuring top-tier quality at every stage. However, as with all hand-finished products, occasional human errors are a reality in textile production.

          What sets us apart is how we respond.

          If you ever receive a product with major or uncurable defects we will-

          • Replace it immediately or issue a full refund.
          • Handle all return shipping and coordination at our cost.
          • Ensure you're never left with a problem, only a solution.

          We don't just promise quality. We protect it.`,
      image: valueQuality
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Widest Product Collection, Tailored for Every Need",
      content: `At Welcot, we understand that different markets require different towel solutions — in material, price point, design, and purpose. That's why we've built one of the most versatile and scalable towel collections in the industry..

From ultra-luxury zero-twist bath towels to value-based recycled yarn products, our range is designed to meet the unique needs of:

• Importers & wholesalers
• Private label brands
• Retail chains & hypermarkets
• Hotels, salons, and institutions`,
      image: valueCollection
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Large-Scale, Modern Towel Manufacturing",
      content: `Welcot operates with multiple integrated manufacturing units designed for high-volume, high-efficiency towel production, supporting both domestic and global market demands..

Production Highlights:

• 500+ tons annual production capacity
• High-speed rapier looms for precision weaving
• Continuous and soft flow dyeing for consistent color and fabric care
• High-efficiency dryers and hydro extractors
• Automatic shearing and hemming for clean, durable finishes
• Embroidery and logo weaving for private label customization
• Precision cutting, folding, and retail-ready packaging lines`,
      image: valueManufacturing
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Sampling Solutions for Custom Towels & Accessories",
      content: `At Welcot, innovation is at the core of everything we develop. We work closely with brands and importers to create custom towel and terry-based accessory collections aligned with market trends, functional needs, and brand positioning.

From yarn selection and fabric construction to finishes, embroidery, and packaging concepts, our team supports you through:

• Trend research and material sourcing
• Sampling and prototyping for towels and accessories
• Custom sizes, GSM, shapes, and finishes
• Design consultation and CAD mockups
• Cost-effective sampling before bulk production`,
      image: valueInnovation
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Long-Term Business Vision",
      content: `At Welcot, we believe great business is built on trust, transparency, and time. 

Our long-term vision is centered around creating reliable, lasting partnerships that offer more than just products. We aim to be a dependable manufacturing backbone for your brand, supporting your goals today and scaling with you tomorrow.
We insure -

• Stable, consistent supply chain — No last-minute sourcing stress
• Reliable pricing and forecast planning — Ideal for long-term import strategies
• Priority production & sampling support for loyal clients
• Flexible terms & custom arrangements as our relationship grows

We're here to grow with you.`,
      image: valuePartnership
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Tested and Proven Quality",
      content: `Every Welcot product undergoes thorough testing and quality checks to ensure it meets international buyer requirements before dispatch. Our quality assurance process includes:

Final inspection before shipment to ensure compliance with approved standards

• Third-party lab testing for colorfastness, absorbency, and durability
• Strict adherence to buyer-specified standards and test parameters
• In-house quality control at every stage of production
• Detailed test reports provided upon request
• Consistent quality maintained across all production batches
`,
      image: valueSustainability
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 mb-6 animate-fade-in">
            <p className="text-sm font-medium tracking-wide">About Us</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Manufacturing Towels for Global Brands
          </h1>
          <p className="text-lg md:text-xl text-white/90 animate-fade-in max-w-3xl mx-auto">
            Reliable production, consistent quality, and export-ready standards across every Welcot collection
          </p>
        </div>
      </div>

      {/* About Us + Partners Image */}
      <div className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Manufacturing Quality Towels for Global Markets with Excellence
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Welcot Towels is a manufacturer and exporter of terry towels, Turkish towels, and terry toweling accessories and apparel, founded by three second-generation entrepreneurs with a strong family legacy of over two decades in the towel manufacturing industry.
                </p>
                <p>
                  Built on years of local expertise and domestic supply experience, Welcot was established with a shared vision — to bring together resources, craftsmanship, and innovation under one brand focused on the global market.
                </p>
                <p>
                  We collaborate closely with our trusted manufacturing partners to oversee production, ensure superior quality, and deliver innovative product solutions. At Welcot, we are committed to serving international clients with quality towels, toweling accessories, and apparel backed by reliable service and professional excellence.
                </p>
                <p className="font-semibold text-foreground">
                  With Welcot, you get more than great towels — you get a manufacturing partner focused on your growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={aboutPartners}
                  alt="Welcot Partners"
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Visionaries */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The legacy behind Welcot
            </p>
          </div>
          <div className="flex justify-center gap-8 max-w-4xl mx-auto">
            {[
              { name: "Rajesham Chilka", role: "Founder / Visionary", image: visionary1 },
              { name: "Anand Maheswar", role: "Founder / Visionary", image: visionary2 }
            ].map((visionary, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-premium transition-smooth w-full max-w-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={visionary.image}
                    alt={visionary.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{visionary.name}</h3>
                  <p className="text-muted-foreground">{visionary.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the leaders driving Welcot's vision forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-premium transition-smooth">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in WELCOT Towels products.")}`}
                      target="_blank"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors hover:scale-110"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Counters Section with Background */}
      <div ref={counterRef} className="relative py-20 md:py-32 overflow-hidden">
        {/* Static Background Image */}
        <div className="absolute inset-0">
          <img
            src={valueManufacturing}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-graphite/65" />

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Delivering Quality Worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-10 text-center hover:shadow-premium transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-6xl md:text-7xl font-bold text-secondary mb-4">
                {counts.countries}+
              </div>
              <p className="text-xl text-white">Countries Served</p>
            </Card>
            <Card className="p-10 text-center hover:shadow-premium transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-6xl md:text-7xl font-bold text-secondary mb-4">
                {counts.years}+
              </div>
              <p className="text-xl text-white">Years of Manufacturing Experience</p>
            </Card>
            <Card className="p-10 text-center hover:shadow-premium transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-6xl md:text-7xl font-bold text-secondary mb-4">
                {counts.quality}%
              </div>
              <p className="text-xl text-white">Quality Assured</p>
            </Card>
          </div>
        </div>
      </div>

      {/* What Defines Us */}
      <div className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Defines Us</h2>
            <p className="text-xl text-muted-foreground">
              Our vision, mission, and the principles that guide our craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Vision + Mission */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-premium transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={aboutVision}
                  alt="Our Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a globally trusted towel manufacturing partner known for quality, customization, and reliability empowering brands to thrive in their markets with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-premium transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={aboutMission}
                  alt="Our Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our mission is to help clients grow by offering not just great products, but also dependable service, transparency, and flexibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Core Values - Heading */}
      <div className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
              The Welcot Difference
            </h2>

            <p className="text-xl text-muted-foreground">
              What global buyers expect. What we consistently deliver.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values - Split Layout Sections */}
      {coreValues.map((value, index) => (
        <div
          key={index}
          ref={(el) => (valueSectionsRef.current[index] = el)}
          className="relative min-h-screen flex items-center"
        >
          <div className="w-full grid lg:grid-cols-2 min-h-screen">
            {/* Image Side - Always Left */}
            <div className="relative h-[50vh] lg:h-auto lg:min-h-screen order-1">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side - Always Right */}
            <div className="relative flex items-center bg-background order-2">
              <div className="p-8 lg:p-16 xl:p-20 max-w-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
                  {value.icon}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 leading-tight text-foreground">
                  {value.title}
                </h3>
                <div className="text-lg md:text-xl leading-relaxed space-y-4 text-muted-foreground whitespace-pre-line">
                  {value.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Partner With Excellence */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="bg-gradient-to-br from-primary via-primary to-secondary p-12 md:p-16 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Excellence</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                  Ready to elevate your towel collection? Let's work together to bring your vision to life.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-primary hover:bg-white/90 transition-smooth shadow-premium"
                >
                  Contact Us Today
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;