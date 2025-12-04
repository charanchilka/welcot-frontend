import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Ruler, 
  Palette, 
  Package, 
  Sparkles, 
  ShoppingCart,
  Scissors,
  Weight,
  Brush,
  Grid3x3,
  Eye,
  Tag
} from "lucide-react";
import ImageGalleryScroll from "@/components/ImageGalleryScroll";
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
import luxuryIcon from "@/assets/luxury-towel.jpg";
import premiumIcon from "@/assets/premium-towel.jpg";
import standardIcon from "@/assets/standard-towel.jpg";
import hygieneIcon from "@/assets/hygiene-towel.jpg";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const products = [
    {
      slug: "bath-towels",
      name: "Bath Towels",
      tagline: "Softness. Absorbency. Excellence.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Our bath towels offer full-body coverage with exceptional absorbency and softness. From ultra-soft luxury options for 5-star resorts to durable standard variants for high-volume needs, we offer a complete range suitable for every level of hospitality and wellness.",
      sizes: '30x60", 27x54", 24x48"',
      images: [bathTowels, handTowels, faceTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "hand-towels",
      name: "Hand Towels",
      tagline: "Soft Touch. Quick Dry. Perfect Hospitality.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Designed for guest rooms and bathrooms, delivering a soft, quick-drying experience. Available in every quality tier, our hand towels combine functionality with elegance for the discerning hospitality professional.",
      sizes: '18x30", 16x24", 14x21"',
      images: [handTowels, bathTowels, faceTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "face-towels",
      name: "Face Towels",
      tagline: "Gentle Care. Pure Comfort. Spa Quality.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Gentle on skin and ideal for spa, skincare, and hotel use. Crafted to provide comfort, hygiene, and durability with ultra-soft fibers perfect for delicate facial care.",
      sizes: '13x13", 12x12"',
      images: [faceTowels, handTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "towel-sets",
      name: "Towel Sets",
      tagline: "Complete Collection. Coordinated Elegance.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Curated sets combining bath, hand, and face towels in coordinated styles. Ideal for hotels, corporate gifting programs, and premium retail. Available in all quality tiers with custom packaging options.",
      sizes: 'Bath 30x60", Hand 16x24", Face 12x12"',
      images: [towelSets, bathTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "beach-towels",
      name: "Beach Towels",
      tagline: "Vibrant Colors. Oversized Comfort. Fast Drying.",
      categories: ["premium", "standard", "hygiene"],
      description: "Vibrant, oversized, and fast-drying. Perfect for resorts, waterparks, and leisure brands. Our beach towels combine bold designs with practical performance for high-traffic coastal locations.",
      sizes: '40x72", 36x72", 30x60"',
      images: [beachTowels, poolTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Design"],
    },
    {
      slug: "pool-towels",
      name: "Pool Towels",
      tagline: "Chlorine Resistant. High Performance. Hotel Grade.",
      categories: ["premium", "standard", "hygiene"],
      description: "Built for performance in humid environments. Durable, highly absorbent, and fast-drying for hotels, spas, and health clubs. Engineered to withstand frequent commercial laundering.",
      sizes: '40x72", 36x72", 30x60"',
      images: [poolTowels, beachTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "kitchen-towels",
      name: "Kitchen Towels",
      tagline: "Lint-Free. Absorbent. Professional Grade.",
      categories: ["premium", "standard", "hygiene"],
      description: "Absorbent and lint-free terry towels for drying dishes and cleaning surfaces. Used in hospitality kitchens and restaurants where hygiene and performance matter.",
      sizes: '18x32", 16x24", 13x13"',
      images: [kitchenTowels, teaTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "bath-mats",
      name: "Bath Mats",
      tagline: "Plush Comfort. Safety First. Luxury Feel.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Soft and sturdy mats to absorb moisture and prevent slips. Available in plush luxury or high-function options with slip-resistant backing for maximum safety.",
      sizes: '20x30", 18x32"',
      images: [bathMats, bathTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Weave"],
    },
    {
      slug: "bathrobes",
      name: "Bathrobes",
      tagline: "Wrap in Luxury. Supreme Comfort. Spa Experience.",
      categories: ["premium", "standard", "hygiene"],
      description: "Wrap-around robes made from towel fabric for post-bath relaxation. Perfect for hotels, spas, and wellness resorts. Available with custom embroidery and logo placement.",
      sizes: "S, M, L, XL",
      images: [bathrobes, bathTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Embroidery"],
    },
    {
      slug: "jacquard-towels",
      name: "Jacquard Towels",
      tagline: "Woven Elegance. Intricate Patterns. Premium Art.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Woven with intricate patterns to elevate your brand. Suitable for premium gifting, luxury hotels, and custom collections. Our jacquard designs create lasting impressions.",
      sizes: '36x72", 30x60", 27x54"',
      images: [jacquardTowels, velourTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Pattern"],
    },
    {
      slug: "velour-towels",
      name: "Velour Towels",
      tagline: "Velvet Touch. Elegant Finish. Promotional Perfect.",
      categories: ["premium", "standard", "hygiene"],
      description: "Velvet-like finish combining softness and style. Used for promotional events, spas, or retail with elegant texture. Perfect for printing and branding applications.",
      sizes: '36x72", 30x60", 27x54", 24x48"',
      images: [velourTowels, jacquardTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Printing"],
    },
    {
      slug: "hotel-white-towels",
      name: "Hotel White Towels",
      tagline: "Crisp White. Professional Grade. Built to Last.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Crisp white towels for hotels and resorts. From ultra-luxury to cost-effective hygiene-treated versions for heavy laundering. The foundation of professional hospitality.",
      sizes: '36x72", 30x60", 27x54", 16x24"',
      images: [hotelWhiteTowels, bathTowels, handTowels],
      customization: ["Size", "GSM", "Bleach Treatment"],
    },
    {
      slug: "tea-towels",
      name: "Tea Towels",
      tagline: "Classic Design. Highly Absorbent. Kitchen Essential.",
      categories: ["premium", "standard", "hygiene"],
      description: "Lightweight and versatile for drying crockery and glassware. Used in hotels, cafes, and institutional kitchens. Lint-free performance for delicate items.",
      sizes: '18x32", 16x24", 14x21"',
      images: [teaTowels, kitchenTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Design"],
    },
    {
      slug: "gym-sports-towels",
      name: "Gym/Sports Towels",
      tagline: "Quick Dry. Compact. Performance Ready.",
      categories: ["premium", "standard", "hygiene"],
      description: "Compact high-performance towels for gyms and fitness studios. Quick-drying and odor-resistant. Engineered for active lifestyles with antimicrobial options.",
      sizes: '18x32", 16x24", 14x21"',
      images: [gymTowels, handTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Treatment"],
    },
    {
      slug: "monogrammed-towels",
      name: "Monogrammed Towels",
      tagline: "Personal Touch. Brand Identity. Elegant Detail.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Add personal or brand touch with custom monogramming. Perfect for hotels, resorts, spas, and premium gifting. Multiple font options and thread colors available.",
      sizes: '30x60", 27x54", 24x48"',
      images: [monogrammedTowels, embroideryTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Monogram"],
    },
    {
      slug: "embroidery-towels",
      name: "Embroidery Towels",
      tagline: "Artistic Excellence. Multi-Color Detail. Luxury Craft.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "High-definition embroidery craftsmanship with intricate multi-color motifs. From elegant monograms to artistic borders. Perfect for luxury hotels and premium branding.",
      sizes: '30x60", 27x54", 24x48"',
      images: [embroideryTowels, monogrammedTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Embroidery"],
    },
    {
      slug: "promotional-towels",
      name: "Promotional Towels",
      tagline: "Brand Visibility. Event Ready. Marketing Power.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Custom-branded towels for impactful giveaways, events, and brand campaigns. Logo jacquards, embroidery, or printed designs. Make lasting impressions with quality.",
      sizes: '30x60", 27x54", 24x48"',
      images: [promotionalTowels, velourTowels, bathTowels],
      customization: ["Size", "GSM", "Color", "Branding"],
    },
    {
      slug: "custom-design-towels",
      name: "Custom Design Towels",
      tagline: "Your Vision. Our Expertise. Unlimited Possibilities.",
      categories: ["luxury", "premium", "standard"],
      description: "Bring your creative vision to life. From concept sketch to final packaging, we transform your ideas into beautiful products. Full design consultation and prototype development.",
      sizes: "Customizable",
      images: [customDesignTowels, jacquardTowels, embroideryTowels],
      customization: ["All Aspects Customizable"],
    },
    {
      slug: "turkish-towels",
      name: "Turkish Towels (Pestemal)",
      tagline: "Lightweight Luxury. Travel Friendly. Beach Perfect.",
      categories: ["premium", "standard"],
      description: "Lightweight flat-weave towels with decorative fringes. Quick-drying, travel-friendly, and perfect for beach resorts and spas. Authentic Turkish craftsmanship.",
      sizes: '30x60", 35x70", 40x80"',
      images: [turkishTowels, beachTowels, poolTowels],
      customization: ["Size", "Color", "Fringe Style"],
    },
    {
      slug: "honeycomb-waffle-towels",
      name: "Honeycomb/Waffle Towels",
      tagline: "Unique Weave. Fast Drying. Modern Aesthetic.",
      categories: ["premium", "standard"],
      description: "Unique honeycomb weave for faster drying and high absorbency. Lightweight, elegant, and ideal for spa aesthetics. Contemporary design meets practical function.",
      sizes: '30x60", 27x54", 24x48"',
      images: [honeycombTowels, bathTowels, handTowels],
      customization: ["Size", "GSM", "Color", "Pattern"],
    },
  ];

  const product = products.find(p => p.slug === slug);

  // Get 4 random related products (excluding current)
  const getRelatedProducts = () => {
    const otherProducts = products.filter(p => p.slug !== slug);
    return otherProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay */}
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${product.images[0]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {product.tagline}
          </p>
          
          {/* Quality Tier Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {product.categories.includes("luxury") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/20 hover:bg-accent/30 border border-accent/40">
                <img src={luxuryIcon} alt="Luxury" className="w-5 h-5 mr-2 inline-block" />
                Welcot Luxury
              </Badge>
            )}
            {product.categories.includes("premium") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/20 hover:bg-accent/30 border border-accent/40">
                <img src={premiumIcon} alt="Premium" className="w-5 h-5 mr-2 inline-block" />
                Welcot Premium
              </Badge>
            )}
            {product.categories.includes("standard") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/20 hover:bg-accent/30 border border-accent/40">
                <img src={standardIcon} alt="Standard" className="w-5 h-5 mr-2 inline-block" />
                Welcot Standard
              </Badge>
            )}
            {product.categories.includes("hygiene") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/20 hover:bg-accent/30 border border-accent/40">
                <img src={hygieneIcon} alt="Hygiene" className="w-5 h-5 mr-2 inline-block" />
                Welcot Hygiene
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Description Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">{product.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-square">
            <ImageGalleryScroll 
              images={product.images} 
              alt={product.name}
              className="w-full h-full"
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
            {/* Quality Tiers Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Quality Tiers</h3>
              </div>
              <p className="text-muted-foreground">
                {product.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
              </p>
            </Card>

            {/* General Sizes Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">General Sizes</h3>
              </div>
              <p className="text-muted-foreground">
                {product.sizes}
              </p>
            </Card>

            {/* Customization Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Customization</h3>
              </div>
              <p className="text-muted-foreground">
                {product.customization.join(", ")}
              </p>
            </Card>

            {/* OEM & Branding Card */}
            <Card className="p-6 shadow-soft hover:shadow-premium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Package className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">OEM & Branding</h3>
              </div>
              <p className="text-muted-foreground">
                Custom branding & packaging
              </p>
            </Card>
          </div>

          {/* Full Customization Options */}
          <Card className="p-8 md:p-12 shadow-premium bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <h3 className="text-3xl font-bold mb-8 text-center">Full Customization Options</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <Scissors className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Size</h4>
                  <p className="text-muted-foreground">Any dimension to suit your needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Weight className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">GSM</h4>
                  <p className="text-muted-foreground">Custom weight specifications</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Palette className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Color</h4>
                  <p className="text-muted-foreground">Match any Pantone shade</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Grid3x3 className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Weave Pattern</h4>
                  <p className="text-muted-foreground">Terry, jacquard, waffle & more</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Eye className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Border Design</h4>
                  <p className="text-muted-foreground">Custom borders and edges</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Brush className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Custom Design</h4>
                  <p className="text-muted-foreground">Embroidery, printing, jacquard</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-center">
                <strong>OEM Manufacturing:</strong> We offer complete OEM manufacturing services with custom branding, labeling, and packaging tailored to your brand identity.
              </p>
            </div>
          </Card>

          {/* MOQ Section */}
          <Card className="p-8 mt-6 shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <ShoppingCart className="text-accent mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-bold mb-3">Minimum Order Quantity</h3>
                <p className="text-lg mb-2">
                  <strong>MOQ:</strong> Minimum order starts from <span className="text-accent font-semibold">300 kg per color</span>.
                </p>
                <p className="text-muted-foreground">
                  Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link to="/contact">Contact Us to Know Your MOQ in Pieces</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
            <Link to="/contact">Need Free Samples? Contact Us</Link>
          </Button>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore More Towels</h2>
            <p className="text-xl text-muted-foreground">Discover our complete collection</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.slug} 
                to={`/products/${relatedProduct.slug}`}
                className="group"
              >
                <Card className="overflow-hidden shadow-soft hover:shadow-premium transition-smooth">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
