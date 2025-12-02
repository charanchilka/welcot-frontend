import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPartners from "@/assets/about-partners.jpg";
import teamRohan from "@/assets/team-rohan.jpg";
import teamNikhil from "@/assets/team-nikhil.jpg";
import teamSiddharth from "@/assets/team-siddharth.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import valueQuality from "@/assets/value-quality.jpg";
import valueCollection from "@/assets/value-collection.jpg";
import valueManufacturing from "@/assets/value-manufacturing.jpg";
import valuePartnership from "@/assets/value-partnership.jpg";
import valueInnovation from "@/assets/value-innovation.jpg";
import valueSustainability from "@/assets/value-sustainability.jpg";

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
      role: "Marketing & Client Relations",
      image: teamRohan,
      linkedin: "#"
    },
    {
      name: "Nikhil Maheshwar",
      role: "Marketing & Operations",
      image: teamNikhil,
      linkedin: "#"
    },
    {
      name: "Siddharth Kavaddevi",
      role: "Finance & Administration",
      image: teamSiddharth,
      linkedin: "#"
    }
  ];

  const coreValues = [
    {
      title: "Reliable Quality with Responsible Support",
      content: `Every Welcot towel goes through a carefully supervised inspection process, ensuring top-tier quality at every stage. However, as with all hand-finished products, occasional human errors are a reality in textile production.

What sets us apart is how we respond:

• Replace it immediately or issue a full refund
• Handle all return shipping and coordination at our cost
• Ensure you're never left with a problem — only a solution

We don't just promise quality. We protect it.`,
      image: valueQuality
    },
    {
      title: "Widest Product Collection, Tailored for Every Need",
      content: `At Welcot, we understand that different markets require different towel solutions — in material, price point, design, and purpose. That's why we've built one of the most versatile and scalable towel collections in the industry.

From ultra-luxury zero-twist bath towels to value-based recycled yarn products, our range is designed to meet the unique needs of:

• Importers & wholesalers
• Private label brands
• Retail chains & hypermarkets
• Hotels, salons, and institutions`,
      image: valueCollection
    },
    {
      title: "Large-Scale, Modern Towel Manufacturing",
      content: `Our manufacturing facilities are equipped with state-of-the-art machinery and operated by experienced professionals who understand the nuances of terry towel production.

We combine traditional craftsmanship with modern technology to deliver:

• Consistent quality across large production runs
• Fast turnaround times without compromising standards
• Scalable capacity to meet growing demand
• Advanced quality control at every production stage`,
      image: valueManufacturing
    },
    {
      title: "True Partnership, Not Just Transactions",
      content: `At Welcot, we believe in building lasting relationships with our clients. We're not just another supplier — we're your manufacturing partner invested in your success.

Our partnership approach includes:

• Transparent pricing with no hidden costs
• Flexible MOQs to support your business growth
• Dedicated account management
• Proactive communication throughout production
• Solutions-focused problem solving`,
      image: valuePartnership
    },
    {
      title: "Innovation in Every Thread",
      content: `We continuously invest in research, development, and technology to stay ahead of industry trends and deliver innovative products that give our clients a competitive edge.

Our innovation focus includes:

• New fabric technologies and weaving techniques
• Sustainable and eco-friendly manufacturing methods
• Custom design capabilities and pattern development
• Advanced dyeing and finishing processes
• Smart packaging and branding solutions`,
      image: valueInnovation
    },
    {
      title: "Commitment to Sustainability",
      content: `We recognize our responsibility to the environment and are committed to sustainable manufacturing practices that protect our planet for future generations.

Our sustainability initiatives include:

• Use of organic and recycled cotton materials
• Water-efficient production processes
• Energy-saving manufacturing equipment
• Eco-friendly dyes and chemicals
• Waste reduction and recycling programs
• Ethical labor practices and fair wages`,
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
            Manufacturing Quality Towels for Global Markets with Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 animate-fade-in max-w-3xl mx-auto">
            Softness, reliability, and craftsmanship woven into every product we deliver.
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

      {/* Our Team */}
      <div className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
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
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Counters Section */}
      <div ref={counterRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Delivering Quality Worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-10 text-center hover:shadow-premium transition-smooth">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                {counts.countries}+
              </div>
              <p className="text-xl text-muted-foreground">Countries Served</p>
            </Card>
            <Card className="p-10 text-center hover:shadow-premium transition-smooth">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                {counts.years}+
              </div>
              <p className="text-xl text-muted-foreground">Years of Manufacturing Experience</p>
            </Card>
            <Card className="p-10 text-center hover:shadow-premium transition-smooth">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                {counts.quality}%
              </div>
              <p className="text-xl text-muted-foreground">Quality Assured</p>
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
                  To be a globally trusted towel manufacturing partner known for quality, customization, and reliability — empowering brands to thrive in their markets with confidence.
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
                  Our goal is to help clients grow by offering not just great products, but also dependable service, transparency, and flexibility.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              What drives the way we work, produce, support, and grow with our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values - Full Width Sections */}
      {coreValues.map((value, index) => (
        <div 
          key={index}
          ref={(el) => (valueSectionsRef.current[index] = el)}
          className="relative min-h-screen flex items-center"
        >
          <div className="absolute inset-0">
            <img 
              src={value.image} 
              alt={value.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
            <div className="max-w-2xl text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {value.title}
              </h3>
              <div className="text-lg md:text-xl leading-relaxed space-y-4 whitespace-pre-line">
                {value.content}
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Partner With Excellence
                </h2>
                <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
                  Whether you're outfitting a luxury hotel, building your retail brand, or expanding your product line, WELCOT Towels LLP delivers quality towels backed by decades of expertise, transparent service, and a true commitment to your success.
                </p>
                <div className="inline-block bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl md:text-2xl shadow-lg">
                  Your Growth is Our Mission
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;