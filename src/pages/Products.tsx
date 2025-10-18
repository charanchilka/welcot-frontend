import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import bathTowels from "@/assets/products/bath-towels.jpg";
import handTowels from "@/assets/products/hand-towels.jpg";
import faceTowels from "@/assets/products/face-towels.jpg";
import towelSets from "@/assets/products/towel-sets.jpg";
import beachTowels from "@/assets/products/beach-towels.jpg";
import poolTowels from "@/assets/products/pool-towels.jpg";
import kitchenTowels from "@/assets/products/kitchen-towels.jpg";
import bathMats from "@/assets/products/bath-mats.jpg";
import bathrobes from "@/assets/products/bathrobes.jpg";
import jacquardTowels from "@/assets/products/jacquard-towels.jpg";
import velourTowels from "@/assets/products/velour-towels.jpg";
import hotelWhiteTowels from "@/assets/products/hotel-white-towels.jpg";
import teaTowels from "@/assets/products/tea-towels.jpg";
import gymTowels from "@/assets/products/gym-towels.jpg";
import monogrammedTowels from "@/assets/products/monogrammed-towels.jpg";
import embroideryTowels from "@/assets/products/embroidery-towels.jpg";
import promotionalTowels from "@/assets/products/promotional-towels.jpg";
import customDesignTowels from "@/assets/products/custom-design-towels.jpg";
import turkishTowels from "@/assets/products/turkish-towels.jpg";
import honeycombTowels from "@/assets/products/honeycomb-towels.jpg";

const Products = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    { 
      name: "Bath Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Full-body coverage with exceptional absorbency and softness. From ultra-soft luxury options for 5-star resorts to durable standard variants.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: bathTowels
    },
    { 
      name: "Hand Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Designed for guest rooms and bathrooms, delivering a soft, quick-drying experience. Available in every quality tier.",
      sizes: "18x30\", 16x24\", 14x21\"",
      image: handTowels
    },
    { 
      name: "Face Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Gentle on skin and ideal for spa, skincare, and hotel use. Crafted to provide comfort, hygiene, and durability.",
      sizes: "13x13\", 12x12\"",
      image: faceTowels
    },
    { 
      name: "Towel Sets", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Curated sets combining bath, hand, and face towels in coordinated styles. Ideal for hotels and gifting programs.",
      sizes: "Bath 30x60\", Hand 16x24\", Face 12x12\"",
      image: towelSets
    },
    { 
      name: "Beach Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Vibrant, oversized, and fast-drying. Perfect for resorts, waterparks, and leisure brands.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: beachTowels
    },
    { 
      name: "Pool Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Built for performance in humid environments. Durable, highly absorbent, and fast-drying for hotels, spas, and health clubs.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: poolTowels
    },
    { 
      name: "Kitchen Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Absorbent and lint-free terry towels for drying dishes and cleaning surfaces. Used in hospitality kitchens and restaurants.",
      sizes: "18x32\", 16x24\", 13x13\"",
      image: kitchenTowels
    },
    { 
      name: "Bath Mats", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Soft and sturdy mats to absorb moisture and prevent slips. Available in plush luxury or high-function options.",
      sizes: "20x30\", 18x32\"",
      image: bathMats
    },
    { 
      name: "Bathrobes", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Wrap-around robes made from towel fabric for post-bath relaxation. Perfect for hotels, spas, and wellness resorts.",
      sizes: "S, M, L, XL",
      image: bathrobes
    },
    { 
      name: "Jacquard Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Woven with intricate patterns to elevate your brand. Suitable for premium gifting, luxury hotels, and custom collections.",
      sizes: "36x72\", 30x60\", 27x54\"",
      image: jacquardTowels
    },
    { 
      name: "Velour Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Velvet-like finish combining softness and style. Used for promotional events, spas, or retail with elegant texture.",
      sizes: "36x72\", 30x60\", 27x54\", 24x48\"",
      image: velourTowels
    },
    { 
      name: "Hotel White Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Crisp white towels for hotels and resorts. From ultra-luxury to cost-effective hygiene-treated versions for heavy laundering.",
      sizes: "36x72\", 30x60\", 27x54\", 16x24\"",
      image: hotelWhiteTowels
    },
    { 
      name: "Tea Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Lightweight and versatile for drying crockery and glassware. Used in hotels, cafes, and institutional kitchens.",
      sizes: "18x32\", 16x24\", 14x21\"",
      image: teaTowels
    },
    { 
      name: "Gym/Sports Towels", 
      categories: ["premium", "standard", "hygenie"], 
      description: "Compact high-performance towels for gyms and fitness studios. Quick-drying and odor-resistant.",
      sizes: "18x32\", 16x24\", 14x21\"",
      image: gymTowels
    },
    { 
      name: "Monogrammed Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Add personal or brand touch with custom monogramming. Perfect for hotels, resorts, spas, and premium gifting.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: monogrammedTowels
    },
    { 
      name: "Embroidery Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "High-definition embroidery craftsmanship with intricate multi-color motifs. From elegant monograms to artistic borders.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: embroideryTowels
    },
    { 
      name: "Promotional Towels", 
      categories: ["luxury", "premium", "standard", "hygenie"], 
      description: "Custom-branded towels for impactful giveaways, events, and brand campaigns. Logo jacquards, embroidery, or printed designs.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: promotionalTowels
    },
    { 
      name: "Custom Design Towels", 
      categories: ["luxury", "premium", "standard"], 
      description: "Bring your creative vision to life. From concept sketch to final packaging, we transform your ideas into beautiful products.",
      sizes: "Customizable",
      image: customDesignTowels
    },
    { 
      name: "Turkish Towels (Pestemal)", 
      categories: ["premium", "standard"], 
      description: "Lightweight flat-weave towels with decorative fringes. Quick-drying, travel-friendly, and perfect for beach resorts and spas.",
      sizes: "30x60\", 35x70\", 40x80\"",
      image: turkishTowels
    },
    { 
      name: "Honeycomb/Waffle Towels", 
      categories: ["premium", "standard"], 
      description: "Unique honeycomb weave for faster drying and high absorbency. Lightweight, elegant, and ideal for spa aesthetics.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: honeycombTowels
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "luxury", label: "Welcot Luxury" },
    { id: "premium", label: "Welcot Premium" },
    { id: "standard", label: "Welcot Standard" },
    { id: "hygenie", label: "Welcot Hygenie" },
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.categories.includes(filter));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Premium Towel Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Explore our comprehensive range of premium towels crafted for every need - from luxury hotels to wellness centers
          </p>
          <p className="text-sm text-muted-foreground">
            Lead time: 3-7 weeks depending on order size and customization
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {product.categories.slice(0, 2).map((cat) => (
                      <Badge key={cat} variant="secondary" className="capitalize text-xs">
                        {cat}
                      </Badge>
                    ))}
                    {product.categories.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{product.categories.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Sizes:</span> {product.sizes}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link to="/contact">Samples</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 px-6 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer custom towel designs and specifications tailored to your requirements. OEM manufacturing with custom branding, labeling, and packaging available.
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

export default Products;
