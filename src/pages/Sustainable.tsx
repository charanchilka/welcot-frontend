import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Shield, Droplets, Zap, Wind, Heart, Sprout, Palette, TreePine } from "lucide-react";
import sustainableHero from "@/assets/sustainable-hero.jpg";
import recycledCottonImg from "@/assets/sustainable/recycled-cotton.jpg";
import bambooImg from "@/assets/sustainable/bamboo-towels.jpg";
import antibacterialImg from "@/assets/sustainable/antibacterial-towels.jpg";
import vatDyedImg from "@/assets/sustainable/vat-dyed-towels.jpg";
import organicImg from "@/assets/sustainable/organic-towels.jpg";

const Sustainable = () => {
  const ecoFeatures = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Recycled Cotton",
      description: "Towels made from post-industrial recycled cotton, reducing waste and environmental impact",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bamboo Fiber",
      description: "Sustainable bamboo-based towels that are naturally antibacterial and biodegradable",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Antibacterial",
      description: "Naturally hygienic towels that resist bacteria without harmful chemicals",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Bleach-Free",
      description: "Vat-dyed towels that maintain color without harsh bleaching agents",
    },
  ];

  const sustainableProducts = [
    {
      name: "Recycled Cotton Towels",
      image: recycledCottonImg,
      description: "Made from 100% post-industrial recycled cotton, diverting textile waste from landfills",
      impacts: [
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Water Saved", benefit: "10,000 – 20,000 liters", meaning: "Huge reduction in water compared to virgin cotton (which is very water-intensive)" },
        { icon: <Leaf className="w-5 h-5" />, impactArea: "Carbon Emissions", benefit: "~1.5 – 2.5 kg CO₂-eq Reduced", meaning: "Lower greenhouse gas footprint during production" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "Fertilizer & Pesticide Use", benefit: "100% eliminated", meaning: "Recycled cotton avoids harmful agrochemicals" },
        { icon: <Recycle className="w-5 h-5" />, impactArea: "Land/Soil Saved", benefit: "~0.002 hectares per kg", meaning: "Reduces pressure on agricultural land" },
        { icon: <Recycle className="w-5 h-5" />, impactArea: "Textile Waste Diverted", benefit: "1 kg waste reused per 1 kg recycled", meaning: "Helps close the loop by reusing pre/post-consumer waste" },
        { icon: <Zap className="w-5 h-5" />, impactArea: "Energy Saved", benefit: "20–30% less energy used", meaning: "Reduces dependency on high-energy processes" },
      ],
    },
    {
      name: "Bamboo Cotton Towels",
      image: bambooImg,
      description: "Naturally silky, hypoallergenic bamboo fiber towels that grow without chemicals",
      impacts: [
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Water Efficiency", benefit: "Needs 70% less water than cotton to grow", meaning: "Naturally rain-fed crop; low irrigation needed" },
        { icon: <Leaf className="w-5 h-5" />, impactArea: "CO₂ Absorption", benefit: "Absorbs 35% more CO₂ than equivalent trees", meaning: "Helps reduce carbon in the atmosphere" },
        { icon: <Sprout className="w-5 h-5" />, impactArea: "No Pesticides or Fertilizers", benefit: "100% free of agrochemicals", meaning: "Bamboo grows without chemicals" },
        { icon: <Sprout className="w-5 h-5" />, impactArea: "Growth Speed", benefit: "Matures in 3–5 years (vs. 8–10 for cotton)", meaning: "Faster regrowth = better land use" },
        { icon: <Recycle className="w-5 h-5" />, impactArea: "Biodegradable", benefit: "100% natural & compostable", meaning: "Leaves no microplastic footprint" },
        { icon: <Heart className="w-5 h-5" />, impactArea: "Softness", benefit: "Naturally silky & hypoallergenic", meaning: "Ideal for babies, sensitive skin, spas" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "Antibacterial Properties", benefit: "Inhibits 70% bacterial growth naturally", meaning: "Doesn't need synthetic treatments" },
        { icon: <Wind className="w-5 h-5" />, impactArea: "Odor Resistant", benefit: "Stays fresh longer", meaning: "Less washing needed over time" },
      ],
    },
    {
      name: "Antibacterial & Antimicrobial Towels",
      image: antibacterialImg,
      description: "Advanced non-toxic treatments that inhibit bacteria, ideal for high-hygiene environments",
      impacts: [
        { icon: <Shield className="w-5 h-5" />, impactArea: "Bacterial Growth Reduction", benefit: "Up to 99.9% of bacteria inhibited", meaning: "Prevents odor, mold, and germs even after use" },
        { icon: <Wind className="w-5 h-5" />, impactArea: "Odor Resistance", benefit: "Remains fresher 3× longer than untreated towels", meaning: "Ideal for gyms, salons, and humid environments" },
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Extended Use Cycle", benefit: "Can be used more times before washing", meaning: "Saves water, energy, and laundry effort" },
        { icon: <Heart className="w-5 h-5" />, impactArea: "Hygiene Confidence", benefit: "Safer for skin contact in public/shared use", meaning: "Great for hospitality, hospitals, airlines" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "Reduces Cross Contamination", benefit: "Especially in high-touch areas", meaning: "Adds a layer of health protection for staff/guests" },
        { icon: <Heart className="w-5 h-5" />, impactArea: "Ideal for Sensitive Skin", benefit: "Free from bacterial buildup = less irritation", meaning: "Suitable for baby care, spa, dermatology centers" },
        { icon: <Leaf className="w-5 h-5" />, impactArea: "Non-toxic Treatments", benefit: "OEKO-TEX certified antimicrobial agents", meaning: "Safe, skin-friendly formulations used" },
      ],
    },
    {
      name: "Vat Dyed Towels",
      image: vatDyedImg,
      description: "Superior color retention and durability through advanced vat dyeing process",
      impacts: [
        { icon: <Palette className="w-5 h-5" />, impactArea: "Color Fastness", benefit: "Retains 95–98% color even after 50+ washes", meaning: "Maintains vibrant appearance over extended use" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "Fade Resistance", benefit: "Highly resistant to sunlight and chlorine", meaning: "Perfect for poolside, beach, and outdoor applications" },
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Bleach Resistance", benefit: "Withstands commercial laundering and mild bleach", meaning: "Ensures longer towel life in industrial washing cycles" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "Durability", benefit: "25–30% stronger color bonding vs reactive dyes", meaning: "Reduces replacement cost and maintains fresh look" },
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Low Color Bleeding", benefit: "Dye does not transfer to other fabrics", meaning: "Maintains cleanliness and uniformity in shared laundry" },
        { icon: <Leaf className="w-5 h-5" />, impactArea: "Eco Efficiency", benefit: "Longer lifecycle = fewer re-dyeing or replacements", meaning: "Minimizes textile waste and environmental impact" },
        { icon: <Palette className="w-5 h-5" />, impactArea: "Consistency", benefit: "Uniform shade batch-to-batch", meaning: "Ensures brand and product color consistency across supplies" },
      ],
    },
    {
      name: "Organic Cotton Towels",
      image: organicImg,
      description: "Certified organic cotton grown without pesticides, supporting sustainable farming practices",
      impacts: [
        { icon: <Droplets className="w-5 h-5" />, impactArea: "Water Saved", benefit: "~90% less water vs. conventional cotton", meaning: "Grown with rain-fed methods, reducing dependency on irrigation and water stress" },
        { icon: <Leaf className="w-5 h-5" />, impactArea: "Carbon Emissions", benefit: "~0.5 – 1.0 kg CO₂-eq per kg yarn saved", meaning: "Fewer emissions due to no synthetic fertilizers or pesticides" },
        { icon: <Shield className="w-5 h-5" />, impactArea: "No Agrochemicals", benefit: "100% free from harmful pesticides/fertilizers", meaning: "Protects soil health, biodiversity, and farm worker safety" },
        { icon: <Sprout className="w-5 h-5" />, impactArea: "Soil Health", benefit: "Improved through organic practices", meaning: "Crop rotation and natural composting enrich soil instead of depleting it" },
        { icon: <Heart className="w-5 h-5" />, impactArea: "Biodiversity", benefit: "Supported through natural farming", meaning: "Promotes pollinator and wildlife habitats, sustaining healthy ecosystems" },
        { icon: <Zap className="w-5 h-5" />, impactArea: "Energy Impact", benefit: "20–25% lower fossil fuel usage", meaning: "Manufacturing = less energy-intensive supply chain" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainableHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Sustainable <span className="text-accent">Innovations</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-foreground/80">
              Luxury towels that are kind to you and the planet
            </p>
          </div>
        </div>
      </section>

      {/* Eco Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecoFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-soft text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
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

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Commitment</h2>
            <p className="text-lg text-muted-foreground">
              At WELCOT, we believe luxury and sustainability can coexist. Our eco-friendly towels
              are crafted using innovative technologies and responsible practices that minimize
              environmental impact without compromising on quality or comfort.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-16">
            {sustainableProducts.map((product, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden shadow-medium hover:shadow-premium transition-smooth border-accent/20">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-3xl flex items-center gap-3 mb-3">
                          <Leaf className="text-accent" size={32} />
                          {product.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-lg">{product.description}</p>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-4">Environmental Impact:</h4>
                          
                          {/* Table Header */}
                          <div className="grid grid-cols-12 gap-3 pb-3 border-b border-accent/20">
                            <div className="col-span-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Impact Area
                            </div>
                            <div className="col-span-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Approximate Benefit
                            </div>
                            <div className="col-span-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              What It Means
                            </div>
                          </div>
                          
                          {/* Table Rows */}
                          <div className="space-y-3">
                            {product.impacts.map((impact, i) => (
                              <div key={i} className="grid grid-cols-12 gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                                <div className="col-span-4 flex items-start gap-2">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    {impact.icon}
                                  </div>
                                  <span className="font-semibold text-sm leading-tight pt-1">{impact.impactArea}</span>
                                </div>
                                <div className="col-span-4 flex items-center">
                                  <span className="text-accent font-bold text-sm">{impact.benefit}</span>
                                </div>
                                <div className="col-span-4 flex items-center">
                                  <p className="text-xs text-muted-foreground leading-relaxed">{impact.meaning}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Making a Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50%</div>
                <p className="text-muted-foreground">Less Water Usage</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-muted-foreground">Reduced Carbon Footprint</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Recyclable Materials</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/contact">Request Sustainable Collection Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainable;
