import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Accessories = () => {
  const accessories = [
    {
      name: "Bags",
      categories: ["luxury", "premium", "standard"],
      description: "Stylish and functional bags made from premium terry fabric. Perfect for beach trips, gym sessions, or everyday use.",
      sizes: "Small, Medium, Large",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop"
    },
    {
      name: "Pouches",
      categories: ["luxury", "premium", "standard"],
      description: "Elegant terry pouches for organizing essentials. Ideal for toiletries, accessories, or travel items.",
      sizes: "Small, Medium",
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=600&fit=crop"
    },
    {
      name: "Hats / Caps",
      categories: ["premium", "standard"],
      description: "Terry-lined hats and caps that provide sun protection with style. Absorbent inner lining keeps you cool and comfortable.",
      sizes: "One Size, Adjustable",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop"
    },
    {
      name: "Beach Ponchos",
      categories: ["premium", "standard"],
      description: "Convenient terry ponchos for quick changes at the beach or pool. Soft, absorbent, and perfect for resorts.",
      sizes: "Adult, Kids",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
    },
    {
      name: "Baby Hooded Towels",
      categories: ["luxury", "premium", "standard"],
      description: "Adorable hooded towels designed especially for babies and toddlers. Ultra-soft, gentle on delicate skin.",
      sizes: "0-12 months, 1-3 years",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop"
    },
    {
      name: "Slippers",
      categories: ["luxury", "premium", "standard"],
      description: "Luxurious terry slippers for hotels, spas, and home use. Soft, comfortable, and available with custom embroidery.",
      sizes: "S, M, L, XL",
      image: "https://images.unsplash.com/photo-1585897258642-682d4c57b2ff?w=800&h=600&fit=crop"
    },
    {
      name: "Headbands",
      categories: ["premium", "standard"],
      description: "Terry headbands perfect for spa treatments, skincare routines, and beauty applications. Soft and absorbent.",
      sizes: "One Size",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop"
    },
    {
      name: "Eye Masks",
      categories: ["premium", "standard"],
      description: "Soft terry eye masks for spa treatments and relaxation. Can be used with hot or cold therapy.",
      sizes: "One Size",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        style={{ paddingTop: "12rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Terry Accessories Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Explore our range of versatile, customizable terry-made accessories crafted for hospitality, retail, and lifestyle brands
          </p>
          <p className="text-sm text-muted-foreground">
            Lead time: 3-7 weeks depending on order size and customization
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accessories.map((accessory, index) => {
            const slug = accessory.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth group">
                <Link to={`/accessories/${slug}`}>
                  <div className="aspect-video overflow-hidden cursor-pointer">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link to={`/accessories/${slug}`}>
                      <CardTitle className="text-xl hover:text-primary transition-smooth cursor-pointer">
                        {accessory.name}
                      </CardTitle>
                    </Link>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {accessory.categories.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="secondary" className="capitalize text-xs">
                          {cat}
                        </Badge>
                      ))}
                      {accessory.categories.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{accessory.categories.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 line-clamp-2">{accessory.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold">Sizes:</span> {accessory.sizes}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1" asChild>
                      <Link to={`/accessories/${slug}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Samples</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 px-6 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer custom terry accessory designs and specifications tailored to your requirements. OEM manufacturing with custom branding, labeling, and packaging available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us for Custom Orders</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Request Free Samples</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            MOQ: Starting from 300 kg per color/design (varies by product)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
