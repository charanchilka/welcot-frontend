import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import bathTowels from "@/assets/products/bath-towels/bath-towel-1.png";
import handTowels from "@/assets/products/hand-towels/hand-towel-1.png";
import faceTowels from "@/assets/products/face-towels/face-towel-2.png";
import towelSets from "@/assets/products/towel-sets/towel-sets-2.png";
import beachTowels from "@/assets/products/beach-towels/beach-towel-1.png";
import poolTowels from "@/assets/products/pool-towels/pool-towel-1.png";
import kitchenTowels from "@/assets/products/kitchen-towels/kitchen-towels-1.png";
import bathMats from "@/assets/products/bath-mats/bath-mat-1.png";
import bathrobes from "@/assets/products/bath-robes/bath-robe-1.png";
import jacquardTowels from "@/assets/products/jacquard-towels/jacquard-towel-1.png";
import velourTowels from "@/assets/products/velour-towels/velour-towel-3.png";
import hotelWhiteTowels from "@/assets/products/white-towels/white-towel-1.png";
import teaTowels from "@/assets/products/tea-towels/tea-towel-1.png";
import gymTowels from "@/assets/products/gym-towels/gym-towel-1.png";
import monogrammedTowels from "@/assets/products/monogrammed-towels/monogrammed-towel-1.png";
import embroideryTowels from "@/assets/products/embroidery-towels/embroidery-towel-1.png";
import promotionalTowels from "@/assets/products/promotional-towels/promotional-towel-1.png";
import customDesignTowels from "@/assets/products/custom-design-towels/custom-design-towel-1.png";
import turkishTowels from "@/assets/products/turkish-towels/turkish-towel-1.png";
import honeycombTowels from "@/assets/products/honeycomb-towels/honeycomb-towel-1.png";

const Products = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      name: "Bath Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Our bath towels offer full-body coverage with exceptional absorbency and softness. From ultra-soft luxury options for 5-star resorts to durable standard variants for high-volume needs, we offer a complete range suitable for every level of hospitality and wellness.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: bathTowels
    },
    {
      name: "Hand Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Designed for guest rooms, bathrooms, and hospitality areas, our hand towels deliver a soft, quick-drying experience. They complement bath towels in coordinated sets and are available in every quality tier to suit your brand.",
      sizes: "18x30\", 16x24\", 14x21\"",
      image: handTowels
    },
    {
      name: "Face Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Gentle on skin and ideal for spa, skincare, and hotel use, our face towels are crafted to provide comfort, hygiene, and durability. Choose from soft, high-end options or practical variants for daily operations.",
      sizes: "10x10\", 12x12\", 13x13\"",
      image: faceTowels
    },
    {
      name: "Towel Sets",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Curated towel sets that combine bath, hand, and face towels in coordinated styles. Ideal for hotels, gifting programs, and retail packaging — available across all quality segments to match your target audience.",
      sizes: "Bath 30x60\", Hand 16x24\", Face 12x12\" or any other sizes",
      image: towelSets
    },
    {
      name: "Beach Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Vibrant, oversized, and fast-drying, our beach towels are perfect for resorts, waterparks, and leisure brands. Offered in premium softness, practical standard builds, or hygiene-focused finishes for shared-use settings.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: beachTowels
    },
    {
      name: "Pool Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Built for performance in humid environments, these towels are durable, highly absorbent, and fast-drying. A must-have for hotels, spas, and health clubs with pools.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: poolTowels
    },
    {
      name: "Kitchen Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Absorbent and lint-free, our kitchen towels are designed for drying dishes, cleaning surfaces, or handling hot items. Used in hospitality kitchens and restaurants, they balance utility with quality.",
      sizes: "18x32\", 16x24\", 13x13\"",
      image: kitchenTowels
    },
    {
      name: "Bath Mats",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Soft and sturdy, bath mats are placed at the base of bathtubs or showers to absorb moisture and prevent slips. Available in plush luxury versions or high-function options for institutional use.",
      sizes: "20x30\", 18x32\"",
      image: bathMats
    },
    {
      name: "Bathrobes",
      categories: ["premium", "standard", "hygenie"],
      description: "Wrap-around robes made from towel fabric for post-bath relaxation. Perfect for hotels, spas, and wellness resorts. Offered in comfort-first premium quality or hygiene-treated styles for public use.",
      sizes: "S, M, L, XL",
      image: bathrobes
    },
    {
      name: "Jacquard Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Woven with intricate patterns, jacquard towels elevate your brand image. Suitable for premium gifting, luxury hotels, and custom collections. Available across all four segments.",
      sizes: "36x72\", 30x60\", 27x54\"",
      image: jacquardTowels
    },
    {
      name: "Velour Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "With a velvet-like finish, velour towels combine softness and style. Used for promotional events, spas, or retail — offering elegant texture across practical segments.",
      sizes: "36x72\", 30x60\", 27x54\", 24x48\", 16x24\", 14x21\", 13x13\"",
      image: velourTowels
    },
    {
      name: "Hotel White Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Crisp white towels widely used in hotels and resorts for a clean, professional look. Available from ultra-luxury to cost-effective hygiene-treated versions for heavy laundering cycles.",
      sizes: "36x72\", 30x60\", 27x54\", 16x24\", 13x13\"",
      image: hotelWhiteTowels
    },
    {
      name: "Tea Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Ideal for drying crockery and glassware, tea towels are lightweight and versatile. Used in hotels, cafes, and institutional kitchens. Available in various absorbency and durability levels.",
      sizes: "18x32\", 16x24\", 14x21\",13x13\"",
      image: teaTowels
    },
    {
      name: "Gym/Sports Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Compact and high-performance towels for gyms, fitness studios, and sports facilities. Quick-drying and odor-resistant, with options for hygiene-focused environments.",
      sizes: "18x32\", 16x24\", 14x21\", 13x13\"",
      image: gymTowels
    },
    {
      name: "Monogrammed Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Add a personal or brand touch to every towel with our custom monogramming and embroidery options. Perfect for hotels, resorts, spas, and premium gifting, our monogrammed towels combine luxury with identity — available in elegant single-letter initials, intricate logos, or detailed woven patterns. Each towel is crafted to maintain softness and absorbency while showcasing refined craftsmanship.",
      sizes: "30x60\", 27x54\", 24x48\" or as customized",
      image: monogrammedTowels
    },
    {
      name: "Embroidery Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Transform simple towels into statement pieces with our high-definition embroidery craftsmanship. From elegant monograms to intricate multi-color motifs, each design is brought to life using precision embroidery machines capable of up to 6 or more thread combinations.",
      sizes: "30x60\", 27x54\", 24x48\" or as customized",
      image: embroideryTowels
    },
    {
      name: "Promotional Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Practical, versatile, and designed for high-volume use, promotional towels are made to deliver everyday functionality with strong branding visibility. Crafted from quality terry fabric, they are suitable for events, corporate promotions, giveaways, and large-scale distributions. These towels offer dependable absorbency and durability while providing an effective surface for logos and custom designs.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: promotionalTowels
    },
    {
      name: "Custom Design Towels",
      categories: ["luxury", "premium", "standard"],
      description: "Bring your creative vision to life with Custom Design Towels — crafted exactly the way you imagine them. From concept sketch to final packaging, we transform your ideas into beautiful, functional textile products that reflect your brand’s identity and story.",
      sizes: "Customizable",
      image: customDesignTowels
    },
    {
      name: "Turkish Towels (Pestemal)",
      categories: ["premium", "standard"],
      description: "Lightweight, elegant, and beautifully crafted — Turkish Towels, also known as Pestemal Towels, redefine comfort and versatility. Made using traditional flat-weave techniques, these towels feature a smooth texture without terry loops, offering a quick-drying and soft-touch experience.",
      sizes: "30x60\", 35x70\", 40x80\" (customizable as per request)",
      image: turkishTowels
    },
    {
      name: "Honeycomb/Waffle Towels",
      categories: ["premium", "standard"],
      description: "Soft, lightweight, and naturally textured — Welcot Honeycomb Towels, also known as Waffle Towels, are designed for exceptional absorbency and fast drying. Their signature honeycomb weave creates a gentle texture that feels soft against the skin while offering superior airflow and quick moisture release.",
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
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        style={{ paddingTop: "12rem", paddingBottom: "5rem" }}>
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
        {/* <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="whitespace-nowrap"
            >
              {cat.label}
            </Button>
          ))}
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, index) => {
            const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth group">
                <Link to={`/products/${slug}`}>
                  <div className="aspect-video overflow-hidden cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link to={`/products/${slug}`}>
                      <CardTitle className="text-xl hover:text-primary transition-smooth cursor-pointer">
                        {product.name}
                      </CardTitle>
                    </Link>
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
                    <Button variant="default" className="flex-1" asChild>
                      <Link to={`/products/${slug}`}>View Details</Link>
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
