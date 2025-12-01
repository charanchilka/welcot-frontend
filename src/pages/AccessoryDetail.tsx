import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Ruler, 
  Palette, 
  Package, 
  ShoppingCart,
  Scissors,
  Tag,
  Box,
  Sparkles
} from "lucide-react";

const AccessoryDetail = () => {
  const { slug } = useParams();

  // Accessory data with all details
  const accessoryData: Record<string, any> = {
    "bags": {
      name: "Terry Bags",
      tagline: "Function meets fashion in premium terry toweling",
      description: "Stylish and functional bags made from premium terry fabric. Perfect for beach trips, gym sessions, or everyday use. Our terry bags combine the absorbent properties of towel fabric with durable construction and stylish designs. Available in various sizes and colors with custom branding options.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop",
      sizes: ["Small (30x20 cm)", "Medium (40x30 cm)", "Large (50x40 cm)"],
      moq: "300 kg per color/design (approximately 150-200 pieces depending on size)",
      relatedProducts: ["pouches", "beach-ponchos", "slippers"]
    },
    "pouches": {
      name: "Terry Pouches",
      tagline: "Luxury storage solutions for every need",
      description: "Elegant terry pouches for organizing essentials. Ideal for toiletries, accessories, or travel items. Soft, absorbent, and beautifully crafted with custom branding options. Perfect for hotel amenity kits, spa packages, and promotional gifts.",
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=600&fit=crop",
      sizes: ["Small (15x10 cm)", "Medium (20x15 cm)"],
      moq: "300 kg per color/design (approximately 200-300 pieces depending on size)",
      relatedProducts: ["bags", "headbands", "eye-masks"]
    },
    "hats-caps": {
      name: "Terry Hats & Caps",
      tagline: "Cool comfort for sunny days",
      description: "Terry-lined hats and caps that provide sun protection with style. Absorbent inner lining keeps you cool and comfortable during outdoor activities. Perfect for beach resorts, sports clubs, and promotional events.",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop",
      sizes: ["One Size", "Adjustable"],
      moq: "300 kg per color/design (approximately 200-250 pieces)",
      relatedProducts: ["beach-ponchos", "bags", "slippers"]
    },
    "beach-ponchos": {
      name: "Beach Ponchos",
      tagline: "Easy on, easy off beach essential",
      description: "Convenient terry ponchos for quick changes at the beach or pool. Soft, absorbent, and perfect for resorts and beach clubs. Available in adult and kids sizes with custom designs and branding options.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      sizes: ["Adult (One Size)", "Kids (8-12 years)"],
      moq: "300 kg per color/design (approximately 100-150 pieces)",
      relatedProducts: ["baby-hooded-towels", "bags", "hats-caps"]
    },
    "baby-hooded-towels": {
      name: "Baby Hooded Towels",
      tagline: "Soft comfort for little ones",
      description: "Adorable hooded towels designed especially for babies and toddlers. Ultra-soft, gentle on delicate skin, and featuring cute designs. Perfect for bath time and pool fun. Made with premium terry fabric and available with custom embroidery.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop",
      sizes: ["0-12 months", "1-3 years"],
      moq: "300 kg per color/design (approximately 150-200 pieces)",
      relatedProducts: ["beach-ponchos", "pouches", "slippers"]
    },
    "slippers": {
      name: "Terry Slippers",
      tagline: "Plush comfort for your feet",
      description: "Luxurious terry slippers for hotels, spas, and home use. Soft, comfortable, and available with custom embroidery. Disposable or reusable options available. Perfect for hospitality amenities and promotional gifts.",
      image: "https://images.unsplash.com/photo-1585897258642-682d4c57b2ff?w=800&h=600&fit=crop",
      sizes: ["S (36-37)", "M (38-39)", "L (40-41)", "XL (42-43)"],
      moq: "300 kg per color/design (approximately 200-300 pairs)",
      relatedProducts: ["bathrobes", "pouches", "bags"]
    },
    "headbands": {
      name: "Terry Headbands",
      tagline: "Spa-style comfort and convenience",
      description: "Terry headbands perfect for spa treatments, skincare routines, and beauty applications. Soft, absorbent, and keeps hair securely in place. Available in various colors with custom branding options.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      sizes: ["One Size"],
      moq: "300 kg per color/design (approximately 400-500 pieces)",
      relatedProducts: ["eye-masks", "pouches", "slippers"]
    },
    "eye-masks": {
      name: "Terry Eye Masks",
      tagline: "Soothing relaxation essentials",
      description: "Soft terry eye masks for spa treatments and relaxation. Can be used with hot or cold therapy. Perfect for wellness centers and luxury spa packages. Available with custom branding.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      sizes: ["One Size"],
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
      {/* Hero Section with Overlay - Matching ProductDetail */}
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${accessory.image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            {accessory.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {accessory.tagline}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Description Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">{accessory.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {accessory.description}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img 
              src={accessory.image} 
              alt={`${accessory.name} detail`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Specifications & Options Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Specifications & Options</h2>
            <p className="text-xl text-muted-foreground">Customized to your exact requirements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Quality Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Quality</h3>
              </div>
              <p className="text-muted-foreground">
                Premium terry fabric construction with superior craftsmanship
              </p>
            </Card>

            {/* Material Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Material</h3>
              </div>
              <p className="text-muted-foreground">
                {accessory.sizes.join(", ")}
              </p>
            </Card>

            {/* Customization Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Customization</h3>
              </div>
              <p className="text-muted-foreground">
                Custom colors, sizes, and design options available
              </p>
            </Card>

            {/* Branding Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Package className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Branding</h3>
              </div>
              <p className="text-muted-foreground">
                Logo embroidery, printing, and custom packaging
              </p>
            </Card>
          </div>
        </div>

        {/* Full Customization Options */}
        <Card className="p-8 shadow-premium mb-12">
          <h3 className="text-3xl font-bold mb-8">Full Customization Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Scissors className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Size</h4>
                <p className="text-muted-foreground">Any dimension per your requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Colour</h4>
                <p className="text-muted-foreground">Any color from Pantone chart</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Tag className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Logo Branding</h4>
                <p className="text-muted-foreground">Embroidery, printing, or jacquard logos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Box className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Packaging</h4>
                <p className="text-muted-foreground">Custom boxes, bags, and wrapping options</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Design</h4>
                <p className="text-muted-foreground">Unique patterns, borders, and finishing touches</p>
              </div>
            </div>
          </div>
        </Card>

        {/* MOQ Section */}
        <Card className="p-8 mb-12 bg-accent/5 border-accent/20">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-xl bg-accent/10">
              <ShoppingCart className="w-8 h-8 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Minimum Order Quantity (MOQ)</h3>
              <p className="text-lg text-muted-foreground mb-4">
                {accessory.moq}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Final quantity in pieces depends on the specific size and weight. We work with you to determine the exact piece count based on your requirements.
              </p>
            </div>
          </div>
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

        {/* Explore More Accessories */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Explore More Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
