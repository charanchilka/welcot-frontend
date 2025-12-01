import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Accessories = () => {
  const accessories = [
    {
      name: "Bags",
      description: "Stylish and functional bags made from premium terry fabric. Perfect for beach trips, gym sessions, or everyday use.",
      sizes: "Small, Medium, Large",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop"
    },
    {
      name: "Pouches",
      description: "Elegant terry pouches for organizing essentials. Ideal for toiletries, accessories, or travel items.",
      sizes: "Small, Medium",
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=600&fit=crop"
    },
    {
      name: "Hats / Caps",
      description: "Terry-lined hats and caps that provide sun protection with style. Absorbent inner lining keeps you cool and comfortable.",
      sizes: "One Size, Adjustable",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop"
    },
    {
      name: "Beach Ponchos",
      description: "Convenient terry ponchos for quick changes at the beach or pool. Soft, absorbent, and perfect for resorts.",
      sizes: "Adult, Kids",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
    },
    {
      name: "Hair Towels",
      description: "Quick-dry hair towels with button closure for hands-free drying. Gentle on hair and prevents damage.",
      sizes: "One Size",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=600&fit=crop"
    },
    {
      name: "Dish Scrubbers",
      description: "Terry dish scrubbers with non-scratch texture for effective cleaning. Absorbent and lint-free.",
      sizes: "Standard",
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&h=600&fit=crop"
    },
    {
      name: "Baby Bibs / Burp Cloths",
      description: "Soft terry bibs and burp cloths for babies. Highly absorbent and gentle on delicate skin.",
      sizes: "Standard",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop"
    },
    {
      name: "Baby Bath Robes",
      description: "Adorable hooded bath robes for babies and toddlers. Ultra-soft terry fabric with cute designs.",
      sizes: "0-12 months, 1-3 years, 3-5 years",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&h=600&fit=crop"
    },
    {
      name: "Terry Apparel",
      description: "Fashion-forward terry cloth clothing including shorts, t-shirts, and loungewear. Comfortable and stylish.",
      sizes: "XS, S, M, L, XL, XXL",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop"
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
                  <div className="aspect-square overflow-hidden cursor-pointer">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <Link to={`/accessories/${slug}`}>
                    <CardTitle className="text-xl hover:text-primary transition-smooth cursor-pointer">
                      {accessory.name}
                    </CardTitle>
                  </Link>
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
