import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Ruler, Palette, Package, Scissors, Weight, Grid3x3, Eye, Brush, ShoppingCart } from "lucide-react";

const AccessoryDetail = () => {
  const { slug } = useParams();

  // Accessory data with all details
  const accessoryData: Record<string, any> = {
    "bags": {
      name: "Terry Bags",
      tagline: "Function meets fashion in premium terry toweling",
      description: "Stylish and functional bags made from premium terry fabric. Perfect for beach trips, gym sessions, or everyday use. Our terry bags combine the absorbent properties of towel fabric with durable construction and stylish designs. Available in various sizes and colors with custom branding options.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop",
      categories: ["luxury", "premium", "standard"],
      sizes: ["Small (30x20 cm)", "Medium (40x30 cm)", "Large (50x40 cm)"],
      keyHighlights: [
        "Premium terry fabric construction",
        "Durable handles and reinforced stitching",
        "Water-resistant lining available",
        "Multiple compartments and pockets",
        "Custom logo embroidery or printing",
        "Various colors and patterns available"
      ],
      moq: "300 kg per color/design (approximately 150-200 pieces depending on size)",
      relatedProducts: ["pouches", "beach-ponchos", "slippers"]
    },
    "pouches": {
      name: "Terry Pouches",
      tagline: "Luxury storage solutions for every need",
      description: "Elegant terry pouches for organizing essentials. Ideal for toiletries, accessories, or travel items. Soft, absorbent, and beautifully crafted with custom branding options. Perfect for hotel amenity kits, spa packages, and promotional gifts.",
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=600&fit=crop",
      categories: ["luxury", "premium", "standard"],
      sizes: ["Small (15x10 cm)", "Medium (20x15 cm)"],
      keyHighlights: [
        "Soft terry fabric exterior",
        "Zipper or drawstring closure options",
        "Water-resistant interior lining",
        "Custom embroidery and branding",
        "Multiple color options",
        "Perfect for travel and organization"
      ],
      moq: "300 kg per color/design (approximately 200-300 pieces depending on size)",
      relatedProducts: ["bags", "headbands", "eye-masks"]
    },
    "hats-caps": {
      name: "Terry Hats & Caps",
      tagline: "Cool comfort for sunny days",
      description: "Terry-lined hats and caps that provide sun protection with style. Absorbent inner lining keeps you cool and comfortable during outdoor activities. Perfect for beach resorts, sports clubs, and promotional events.",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop",
      categories: ["premium", "standard"],
      sizes: ["One Size", "Adjustable"],
      keyHighlights: [
        "Terry fabric inner lining for comfort",
        "UV protection from sun rays",
        "Moisture-wicking properties",
        "Adjustable straps available",
        "Custom embroidery options",
        "Various styles: bucket hats, baseball caps, visors"
      ],
      moq: "300 kg per color/design (approximately 200-250 pieces)",
      relatedProducts: ["beach-ponchos", "bags", "slippers"]
    },
    "beach-ponchos": {
      name: "Beach Ponchos",
      tagline: "Easy on, easy off beach essential",
      description: "Convenient terry ponchos for quick changes at the beach or pool. Soft, absorbent, and perfect for resorts and beach clubs. Available in adult and kids sizes with custom designs and branding options.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      categories: ["premium", "standard"],
      sizes: ["Adult (One Size)", "Kids (8-12 years)"],
      keyHighlights: [
        "Full terry fabric construction",
        "Easy pullover design",
        "Hood for added coverage",
        "Quick-drying properties",
        "Custom colors and patterns",
        "Perfect for beach resorts and waterparks"
      ],
      moq: "300 kg per color/design (approximately 100-150 pieces)",
      relatedProducts: ["baby-hooded-towels", "bags", "hats-caps"]
    },
    "baby-hooded-towels": {
      name: "Baby Hooded Towels",
      tagline: "Soft comfort for little ones",
      description: "Adorable hooded towels designed especially for babies and toddlers. Ultra-soft, gentle on delicate skin, and featuring cute designs. Perfect for bath time and pool fun. Made with premium terry fabric and available with custom embroidery.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop",
      categories: ["luxury", "premium", "standard"],
      sizes: ["0-12 months", "1-3 years"],
      keyHighlights: [
        "Ultra-soft premium terry fabric",
        "Gentle on baby's delicate skin",
        "Adorable animal hood designs available",
        "Hypoallergenic and chemical-free options",
        "Custom embroidery for personalization",
        "Machine washable and durable"
      ],
      moq: "300 kg per color/design (approximately 150-200 pieces)",
      relatedProducts: ["beach-ponchos", "pouches", "slippers"]
    },
    "slippers": {
      name: "Terry Slippers",
      tagline: "Plush comfort for your feet",
      description: "Luxurious terry slippers for hotels, spas, and home use. Soft, comfortable, and available with custom embroidery. Disposable or reusable options available. Perfect for hospitality amenities and promotional gifts.",
      image: "https://images.unsplash.com/photo-1585897258642-682d4c57b2ff?w=800&h=600&fit=crop",
      categories: ["luxury", "premium", "standard"],
      sizes: ["S (36-37)", "M (38-39)", "L (40-41)", "XL (42-43)"],
      keyHighlights: [
        "Premium terry fabric upper",
        "Non-slip rubber sole",
        "Disposable and reusable options",
        "Custom embroidery available",
        "Various colors and styles",
        "Perfect for hotels, spas, and resorts"
      ],
      moq: "300 kg per color/design (approximately 200-300 pairs)",
      relatedProducts: ["bathrobes", "pouches", "bags"]
    },
    "headbands": {
      name: "Terry Headbands",
      tagline: "Spa-style comfort and convenience",
      description: "Terry headbands perfect for spa treatments, skincare routines, and beauty applications. Soft, absorbent, and keeps hair securely in place. Available in various colors with custom branding options.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      categories: ["premium", "standard"],
      sizes: ["One Size"],
      keyHighlights: [
        "Soft terry fabric construction",
        "Elastic band for secure fit",
        "Absorbs moisture during treatments",
        "Machine washable",
        "Custom colors available",
        "Perfect for spas, salons, and hotels"
      ],
      moq: "300 kg per color/design (approximately 400-500 pieces)",
      relatedProducts: ["eye-masks", "pouches", "slippers"]
    },
    "eye-masks": {
      name: "Terry Eye Masks",
      tagline: "Soothing relaxation essentials",
      description: "Soft terry eye masks for spa treatments and relaxation. Can be used with hot or cold therapy. Perfect for wellness centers and luxury spa packages. Available with custom branding.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      categories: ["premium", "standard"],
      sizes: ["One Size"],
      keyHighlights: [
        "Ultra-soft terry fabric",
        "Suitable for hot/cold therapy",
        "Adjustable elastic strap",
        "Reusable and washable",
        "Custom embroidery options",
        "Perfect for spa and wellness centers"
      ],
      moq: "300 kg per color/design (approximately 500-600 pieces)",
      relatedProducts: ["headbands", "pouches", "slippers"]
    }
  };

  const accessory = accessoryData[slug || ""];

  if (!accessory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Accessory Not Found</h1>
          <Button asChild>
            <Link to="/accessories">Back to Accessories</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related accessories for display
  const allAccessories = Object.keys(accessoryData);
  const relatedAccessories = accessory.relatedProducts
    .map((slug: string) => ({
      slug,
      ...accessoryData[slug]
    }))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${accessory.image})`,
          paddingTop: "12rem",
          paddingBottom: "8rem"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
              {accessory.name}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {accessory.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1" />
                Luxury
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Package className="w-3 h-3 mr-1" />
                Premium
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Weight className="w-3 h-3 mr-1" />
                Standard
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Description</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {accessory.description}
              </p>
              <img
                src={accessory.image}
                alt={accessory.name}
                className="rounded-lg shadow-premium w-full object-cover mb-8"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-2 mb-8">
              {accessory.keyHighlights.map((highlight: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Specifications */}
          <div className="space-y-6">
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Quality Tiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {accessory.categories.map((cat: string) => (
                    <Badge key={cat} variant="secondary" className="capitalize mr-2">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-primary" />
                  General Sizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {accessory.sizes.map((size: string, index: number) => (
                    <li key={index}>• {size}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Custom colors, embroidery, and branding available</p>
              </CardContent>
            </Card>

            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  OEM & Branding
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Custom labels, tags, and packaging options available</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Customization Options */}
        <Card className="shadow-premium mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Full Customization Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Custom Sizes</h4>
                  <p className="text-sm text-muted-foreground">Any dimension per your requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Weight className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fabric Weight</h4>
                  <p className="text-sm text-muted-foreground">Choose your preferred GSM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Color Options</h4>
                  <p className="text-sm text-muted-foreground">Any color from Pantone chart</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Grid3x3 className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Weave Patterns</h4>
                  <p className="text-sm text-muted-foreground">Jacquard, plain, or custom weaves</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Finishing</h4>
                  <p className="text-sm text-muted-foreground">Hem styles, borders, and edges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brush className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Branding</h4>
                  <p className="text-sm text-muted-foreground">Embroidery, printing, or jacquard logos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MOQ Section */}
        <Card className="shadow-premium mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <ShoppingCart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Minimum Order Quantity (MOQ)</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {accessory.moq}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Final quantity in pieces depends on the specific size and weight. We work with you to determine the exact piece count based on your requirements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/contact">Contact Us to Know Your MOQ in Pieces</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" asChild>
            <Link to="/contact">Need Free Samples? Contact Us</Link>
          </Button>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Related Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedAccessories.map((related: any) => (
              <Card key={related.slug} className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth group">
                <Link to={`/accessories/${related.slug}`}>
                  <div className="aspect-video overflow-hidden cursor-pointer">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg hover:text-primary transition-smooth">
                      {related.name}
                    </CardTitle>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryDetail;
