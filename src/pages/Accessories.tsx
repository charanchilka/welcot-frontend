import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Accessories = () => {
  const accessories = [
    {
      name: "Bags",
      description: "Function meets fashion in premium terry toweling",
      detailedDescription: "Stylish and functional bags made from premium terry fabric. Perfect for beach trips, gym sessions, or everyday use. Durable, washable, and available in various sizes and colors.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop"
    },
    {
      name: "Pouches",
      description: "Luxury storage solutions for every need",
      detailedDescription: "Elegant terry pouches for organizing essentials. Ideal for toiletries, accessories, or travel items. Soft, absorbent, and beautifully crafted with custom branding options.",
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=600&fit=crop"
    },
    {
      name: "Hats / Caps",
      description: "Cool comfort for sunny days",
      detailedDescription: "Terry-lined hats and caps that provide sun protection with style. Absorbent inner lining keeps you cool and comfortable during outdoor activities.",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop"
    },
    {
      name: "Beach Ponchos",
      description: "Easy on, easy off beach essential",
      detailedDescription: "Convenient terry ponchos for quick changes at the beach or pool. Soft, absorbent, and perfect for resorts and beach clubs. Available in adult and kids sizes.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
    },
    {
      name: "Baby Hooded Towels",
      description: "Soft comfort for little ones",
      detailedDescription: "Adorable hooded towels designed especially for babies and toddlers. Ultra-soft, gentle on delicate skin, and featuring cute designs. Perfect for bath time and pool fun.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop"
    },
    {
      name: "Slippers",
      description: "Plush comfort for your feet",
      detailedDescription: "Luxurious terry slippers for hotels, spas, and home use. Soft, comfortable, and available with custom embroidery. Disposable or reusable options available.",
      image: "https://images.unsplash.com/photo-1585897258642-682d4c57b2ff?w=800&h=600&fit=crop"
    },
    {
      name: "Headbands",
      description: "Spa-style comfort and convenience",
      detailedDescription: "Terry headbands perfect for spa treatments, skincare routines, and beauty applications. Soft, absorbent, and keeps hair securely in place.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop"
    },
    {
      name: "Eye Masks",
      description: "Soothing relaxation essentials",
      detailedDescription: "Soft terry eye masks for spa treatments and relaxation. Can be used with hot or cold therapy. Perfect for wellness centers and luxury spa packages.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1556227703-23771bd75144?w=1600&h=600&fit=crop)",
          paddingTop: "12rem",
          paddingBottom: "8rem"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Terry Accessories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Designed for Comfort & Style
          </p>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Explore our range of versatile, customizable terry-made accessories crafted for hospitality, retail, and lifestyle brands.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accessories.map((accessory, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{accessory.name}</CardTitle>
                <p className="text-muted-foreground">{accessory.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 line-clamp-3">
                  {accessory.detailedDescription}
                </p>
                <div className="flex gap-2">
                  <Button variant="default" className="flex-1" asChild>
                    <Link to="/contact">View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Samples</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 px-6 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Custom Terry Accessories</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Looking for something unique? We can create custom terry accessories tailored to your brand specifications. From design to production, we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Custom Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Request Samples</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Custom branding, embroidery, and packaging available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
