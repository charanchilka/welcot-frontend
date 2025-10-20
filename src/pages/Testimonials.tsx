import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Absolutely the best towels we've ever used.",
      description: "Our hotel guests frequently compliment the luxurious texture and softness. Welcot Luxury towels have set a new standard for our rooms.",
      author: "Amit Sharma",
      role: "General Manager",
      company: "Oasis Grand Hotel",
      initial: "AS"
    },
    {
      rating: 5,
      text: "Soft, stylish, and built to last.",
      description: "We've been using Welcot Premium towels for our spa for over a year — the feel is still incredible, even after countless washes.",
      author: "Priyanka S.",
      role: "Owner",
      company: "Pure Bliss Spa",
      initial: "PS"
    },
    {
      rating: 4,
      text: "Impressive quality at great value.",
      description: "The Standard range has been perfect for our gym operations — quick-drying, durable, and comfortable for everyday use.",
      author: "Ravi Mehta",
      role: "Operations Head",
      company: "FitZone Gyms",
      initial: "RM"
    },
    {
      rating: 5,
      text: "Excellent hygiene features.",
      description: "The Hygiene collection is perfect for our clinic — soft to touch, easy to clean, and fresh after every use.",
      author: "Dr. Kavya Nair",
      role: "Chief Physician",
      company: "Harmony Wellness Center",
      initial: "KN"
    },
    {
      rating: 5,
      text: "Service and samples were outstanding.",
      description: "Welcot's team quickly provided samples and helped us choose the right product lines for our needs. Excellent customer support experience.",
      author: "Suresh Patel",
      role: "Procurement Manager",
      company: "Lotus Suites",
      initial: "SP"
    },
    {
      rating: 5,
      text: "Exceptional quality and consistency.",
      description: "We've been sourcing towels from Welcot for our chain of boutique hotels. The quality is consistent across all orders, and our guests love them.",
      author: "Meera Reddy",
      role: "Director of Procurement",
      company: "Heritage Hotels Group",
      initial: "MR"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={index < rating ? "fill-accent text-accent" : "text-muted-foreground/30"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ marginTop: "9%" }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
          }} />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real voices from our customers who trust Welcot for quality, comfort, and lasting satisfaction
            </p>
            <div className="inline-block px-6 py-3 bg-primary/5 rounded-full">
              <p className="text-lg font-semibold text-primary">
                Join thousands who trust Welcot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-medium hover:shadow-premium transition-smooth overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-smooth">
                    <Quote size={48} className="text-primary" />
                  </div>

                  {/* Rating */}
                  {renderStars(testimonial.rating)}

                  {/* Testimonial Text */}
                  <h3 className="text-xl font-bold mb-3 relative z-10">
                    "{testimonial.text}"
                  </h3>
                  <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                    {testimonial.description}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Towels Delivered</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From luxury hotels to wellness centers, businesses worldwide choose Welcot
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Hotels", "Spas", "Gyms", "Hospitals", "Retailers"].map((industry, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold text-foreground">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our satisfied customers and discover why Welcot is the preferred choice for quality towels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request Free Samples <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/products">Browse Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
