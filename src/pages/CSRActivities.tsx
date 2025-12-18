import { useEffect } from "react";
import { Heart, Leaf, Users, Recycle } from "lucide-react";

// CSR Images
import csrHero from "@/assets/csr/csr-hero-new.jpg";
import csrCommitment from "@/assets/csr/csr-commitment.jpg";
import communityWelfare from "@/assets/csr/community-welfare.jpg";
import environmentalResponsibility from "@/assets/csr/environmental-responsibility.jpg";
import employeeWellbeing from "@/assets/csr/employee-wellbeing.jpg";
import sustainableProducts from "@/assets/csr/sustainable-products.jpg";
import galleryCommunity from "@/assets/csr/gallery-community.jpg";
import galleryEnvironment from "@/assets/csr/gallery-environment.jpg";
import galleryWorkers from "@/assets/csr/gallery-workers.jpg";
import gallerySustainability from "@/assets/csr/gallery-sustainability.jpg";

const CSRActivities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const focusAreas = [
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Supporting local communities through health, hygiene, and education-related initiatives.",
      image: communityWelfare,
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Promoting sustainable manufacturing, eco-friendly materials, and environmental care activities.",
      image: environmentalResponsibility,
    },
    {
      icon: Users,
      title: "Employee Wellbeing",
      description: "Ensuring safe working conditions, skill development, and support for our workforce.",
      image: employeeWellbeing,
    },
    {
      icon: Recycle,
      title: "Sustainable Products",
      description: "Encouraging the use of recycled cotton, bamboo fibers, and responsible dyeing processes.",
      image: sustainableProducts,
    },
  ];

  const galleryItems = [
    {
      image: galleryCommunity,
      caption: "Community Support Programs",
    },
    {
      image: galleryEnvironment,
      caption: "Environmental Clean-Up Initiatives",
    },
    {
      image: galleryWorkers,
      caption: "Worker Welfare & Skill Development",
    },
    {
      image: gallerySustainability,
      caption: "Sustainability & Green Practices",
    },
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={csrHero}
            alt="Corporate Social Responsibility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/60 to-graphite/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Corporate Social Responsibility
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                At Welcot Towels LLP, we believe in giving back to society through responsible practices, community support, and sustainable initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment to Society
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Welcot Towels LLP, CSR is an integral part of our values. We strive to create a positive impact through ethical manufacturing, environmental responsibility, and meaningful community initiatives that support people and the planet.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img
                  src={csrCommitment}
                  alt="Our commitment to society"
                  className="w-full h-auto rounded-2xl shadow-premium"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Focus Areas */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Focus Areas
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              CSR Focus Areas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Activities Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Initiatives
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              CSR Activities Gallery
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.caption}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-premium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium text-sm text-center">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Responsibility Beyond Business
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              At Welcot Towels LLP, our CSR efforts reflect our belief that long-term success is built on responsibility, transparency, and positive contribution to society.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRActivities;
