import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Globe, Users, Award } from "lucide-react";
import heroTowels from "@/assets/hero-towels.jpg";
import missionImage from "@/assets/mission-image.png";
import visionImage from "@/assets/vision-image.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Image */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTowels})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 mb-6">
            <p className="text-sm font-medium">About Us</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <span>•</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full border border-primary/30 mb-6">
                <p className="text-sm font-medium text-primary">About Us</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Manufacturing Quality Towels for Global Markets with Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Welcot Towels LLP, we manufacture towels that truly represent your brand — from design to packaging. With a strong commitment to innovation and quality, we design products that are both durable and stylish, catering to the diverse needs of global customers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our focus on excellence drives us to consistently exceed industry standards, providing solutions that enhance everyday living. At Welcot Towels LLP, we prioritize customer satisfaction and strive to create products that enrich lives across all markets we serve.
              </p>
            </div>
            
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6">Delivering Quality Worldwide</h3>
              <p className="text-muted-foreground mb-8">
                With decades of experience in towel production, Welcot Towels LLP has mastered innovation and quality, delivering exceptional products worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">25+</div>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">150+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">2014</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Defines Us Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Defines Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are defined by our commitment to quality, innovation, and exceptional customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <Card className="overflow-hidden group hover:shadow-premium transition-smooth">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={missionImage} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to deliver innovative, high-quality towels that enhance everyday life. We are dedicated to exceeding industry standards through exceptional craftsmanship and sustainability, focusing on meeting the diverse needs of our global customers.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="overflow-hidden group hover:shadow-premium transition-smooth">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={visionImage} 
                  alt="Our Vision" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally trusted towel manufacturing partner known for quality, customization, and reliability — empowering brands to thrive in their markets with confidence and setting new benchmarks in product excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Quality & Reliability", desc: "Consistent excellence in every product we manufacture" },
              { icon: <Globe className="w-8 h-8" />, title: "Transparency", desc: "Open communication and fair pricing for all partners" },
              { icon: <Users className="w-8 h-8" />, title: "Customer-First", desc: "Your success is our top priority in every interaction" },
              { icon: <Award className="w-8 h-8" />, title: "Flexibility", desc: "Adaptable solutions tailored to your unique needs" },
              { icon: <Target className="w-8 h-8" />, title: "Innovation", desc: "Continuous improvement in products and processes" },
              { icon: <Eye className="w-8 h-8" />, title: "Service Excellence", desc: "Dependable support throughout our partnership" },
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-premium transition-smooth group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-smooth">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner CTA */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="bg-gradient-to-br from-primary via-primary to-secondary p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partner With Excellence
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Whether you're outfitting a luxury hotel, building your retail brand, or expanding your product line, WELCOT Towels LLP delivers quality towels backed by decades of expertise, transparent service, and a true commitment to your success.
              </p>
              <div className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-xl">
                Your Growth is Our Mission
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
