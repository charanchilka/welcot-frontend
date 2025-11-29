import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
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

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const products = [
    {
      slug: "bath-towels",
      name: "Bath Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Full-body coverage with exceptional absorbency and softness. From ultra-soft luxury options for 5-star resorts to durable standard variants.",
      detailedDescription: "Our bath towels are designed to provide ultimate comfort and absorbency. Made from premium cotton, they offer a luxurious feel while maintaining durability for long-term use in hotels, spas, and homes.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: bathTowels,
      features: [
        "Premium cotton construction",
        "High absorbency rate",
        "Soft and plush texture",
        "Durable for repeated washing",
        "Available in multiple quality tiers",
        "Custom colors and branding available"
      ],
      applications: ["5-star hotels", "Luxury resorts", "Spas & wellness centers", "Premium home use"],
      gsm: "400-700 GSM depending on quality tier"
    },
    {
      slug: "hand-towels",
      name: "Hand Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Designed for guest rooms and bathrooms, delivering a soft, quick-drying experience. Available in every quality tier.",
      detailedDescription: "Perfect for guest rooms and bathrooms, our hand towels combine functionality with elegance. They're designed to dry quickly while maintaining their softness wash after wash.",
      sizes: "18x30\", 16x24\", 14x21\"",
      image: handTowels,
      features: [
        "Quick-drying properties",
        "Soft and gentle on skin",
        "Compact size for convenience",
        "Fade-resistant colors",
        "Multiple quality options",
        "Ideal for hospitality use"
      ],
      applications: ["Hotels", "Guest bathrooms", "Restaurants", "Healthcare facilities"],
      gsm: "350-600 GSM depending on quality tier"
    },
    {
      slug: "face-towels",
      name: "Face Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Gentle on skin and ideal for spa, skincare, and hotel use. Crafted to provide comfort, hygiene, and durability.",
      detailedDescription: "Our face towels are specially crafted for gentle skin contact. Perfect for spas, skincare routines, and hotel amenities, they provide superior softness and hygiene.",
      sizes: "13x13\", 12x12\"",
      image: faceTowels,
      features: [
        "Ultra-soft for facial use",
        "Hypoallergenic materials",
        "Excellent water absorption",
        "Lint-free finish",
        "Compact and portable",
        "Perfect for skincare routines"
      ],
      applications: ["Spas", "Beauty salons", "Hotels", "Personal skincare"],
      gsm: "300-500 GSM depending on quality tier"
    },
    {
      slug: "towel-sets",
      name: "Towel Sets",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Curated sets combining bath, hand, and face towels in coordinated styles. Ideal for hotels and gifting programs.",
      detailedDescription: "Complete towel sets that bring harmony to any bathroom. Our coordinated sets include bath, hand, and face towels in matching colors and quality, perfect for hotels and premium gifting.",
      sizes: "Bath 30x60\", Hand 16x24\", Face 12x12\"",
      image: towelSets,
      features: [
        "Coordinated color schemes",
        "Complete bathroom solution",
        "Premium packaging options",
        "Consistent quality across all pieces",
        "Ideal for gifting",
        "Custom branding available"
      ],
      applications: ["Hotels", "Corporate gifting", "Retail", "Wedding gifts"],
      gsm: "Varies by tier and piece"
    },
    {
      slug: "beach-towels",
      name: "Beach Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Vibrant, oversized, and fast-drying. Perfect for resorts, waterparks, and leisure brands.",
      detailedDescription: "Extra-large beach towels designed for maximum coverage and quick drying. Ideal for resorts, waterparks, and beach clubs, they combine functionality with vibrant designs.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: beachTowels,
      features: [
        "Oversized for full coverage",
        "Fast-drying fabric",
        "Vibrant color options",
        "Sand-resistant",
        "Lightweight yet absorbent",
        "Custom designs available"
      ],
      applications: ["Beach resorts", "Waterparks", "Pool clubs", "Leisure brands"],
      gsm: "400-550 GSM"
    },
    {
      slug: "pool-towels",
      name: "Pool Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Built for performance in humid environments. Durable, highly absorbent, and fast-drying for hotels, spas, and health clubs.",
      detailedDescription: "Engineered for high-traffic pool areas, our pool towels withstand frequent washing while maintaining their absorbency and softness. Perfect for commercial pool facilities.",
      sizes: "40x72\", 36x72\", 30x60\"",
      image: poolTowels,
      features: [
        "Chlorine-resistant",
        "High durability",
        "Superior absorbency",
        "Fast-drying properties",
        "Industrial washing compatible",
        "Color retention"
      ],
      applications: ["Hotels", "Spas", "Health clubs", "Swimming pools"],
      gsm: "450-600 GSM"
    },
    {
      slug: "kitchen-towels",
      name: "Kitchen Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Absorbent and lint-free terry towels for drying dishes and cleaning surfaces. Used in hospitality kitchens and restaurants.",
      detailedDescription: "Professional-grade kitchen towels designed for commercial kitchens. Lint-free, highly absorbent, and durable enough for repeated use in demanding environments.",
      sizes: "18x32\", 16x24\", 13x13\"",
      image: kitchenTowels,
      features: [
        "Lint-free for glassware",
        "High absorbency",
        "Durable construction",
        "Easy to clean",
        "Heat-resistant",
        "Commercial-grade"
      ],
      applications: ["Restaurant kitchens", "Hotel kitchens", "Catering services", "Institutional use"],
      gsm: "350-500 GSM"
    },
    {
      slug: "bath-mats",
      name: "Bath Mats",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Soft and sturdy mats to absorb moisture and prevent slips. Available in plush luxury or high-function options.",
      detailedDescription: "Our bath mats combine safety with comfort. Highly absorbent and slip-resistant, they're available in various quality tiers to suit different needs and budgets.",
      sizes: "20x30\", 18x32\"",
      image: bathMats,
      features: [
        "Slip-resistant backing",
        "High moisture absorption",
        "Plush comfort",
        "Multiple sizes available",
        "Machine washable",
        "Durable construction"
      ],
      applications: ["Hotels", "Spas", "Homes", "Healthcare facilities"],
      gsm: "600-900 GSM"
    },
    {
      slug: "bathrobes",
      name: "Bathrobes",
      categories: ["premium", "standard", "hygenie"],
      description: "Wrap-around robes made from towel fabric for post-bath relaxation. Perfect for hotels, spas, and wellness resorts.",
      detailedDescription: "Luxurious bathrobes crafted from premium terry fabric. Designed for comfort and elegance, they're perfect for hotels, spas, and upscale accommodations.",
      sizes: "S, M, L, XL",
      image: bathrobes,
      features: [
        "Soft terry fabric",
        "Comfortable fit",
        "Durable stitching",
        "Absorbent material",
        "Multiple sizes",
        "Custom embroidery available"
      ],
      applications: ["Hotels", "Spas", "Wellness resorts", "Premium accommodations"],
      gsm: "300-450 GSM"
    },
    {
      slug: "jacquard-towels",
      name: "Jacquard Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Woven with intricate patterns to elevate your brand. Suitable for premium gifting, luxury hotels, and custom collections.",
      detailedDescription: "Elegant jacquard towels featuring woven patterns that add sophistication to any setting. Perfect for luxury branding and premium presentations.",
      sizes: "36x72\", 30x60\", 27x54\"",
      image: jacquardTowels,
      features: [
        "Intricate woven patterns",
        "Luxury appearance",
        "Custom design capability",
        "Premium quality",
        "Elegant texture",
        "Brand elevation"
      ],
      applications: ["Luxury hotels", "Premium gifting", "High-end retail", "Custom collections"],
      gsm: "450-650 GSM"
    },
    {
      slug: "velour-towels",
      name: "Velour Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Velvet-like finish combining softness and style. Used for promotional events, spas, or retail with elegant texture.",
      detailedDescription: "Velour towels with a smooth, velvety finish on one side. They offer a unique tactile experience and are perfect for promotional items and luxury retail.",
      sizes: "36x72\", 30x60\", 27x54\", 24x48\"",
      image: velourTowels,
      features: [
        "Velvet-like texture",
        "Soft and luxurious",
        "Excellent for printing",
        "Elegant appearance",
        "Versatile use",
        "Premium feel"
      ],
      applications: ["Promotional events", "Spas", "Retail", "Beach clubs"],
      gsm: "400-550 GSM"
    },
    {
      slug: "hotel-white-towels",
      name: "Hotel White Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Crisp white towels for hotels and resorts. From ultra-luxury to cost-effective hygiene-treated versions for heavy laundering.",
      detailedDescription: "Professional white towels designed specifically for the hospitality industry. Available in various quality tiers to suit different hotel categories and budgets.",
      sizes: "36x72\", 30x60\", 27x54\", 16x24\"",
      image: hotelWhiteTowels,
      features: [
        "Crisp white finish",
        "Industrial washing resistant",
        "Bleach-compatible options",
        "Multiple quality tiers",
        "High durability",
        "Professional grade"
      ],
      applications: ["Hotels", "Resorts", "B&Bs", "Vacation rentals"],
      gsm: "400-700 GSM depending on tier"
    },
    {
      slug: "tea-towels",
      name: "Tea Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Lightweight and versatile for drying crockery and glassware. Used in hotels, cafes, and institutional kitchens.",
      detailedDescription: "Traditional tea towels perfect for drying delicate items. Lint-free and highly absorbent, they're essential for any professional or home kitchen.",
      sizes: "18x32\", 16x24\", 14x21\"",
      image: teaTowels,
      features: [
        "Lint-free for glassware",
        "Lightweight and efficient",
        "Quick-drying",
        "Versatile use",
        "Easy maintenance",
        "Professional quality"
      ],
      applications: ["Hotels", "Cafes", "Restaurants", "Home kitchens"],
      gsm: "300-400 GSM"
    },
    {
      slug: "gym-sports-towels",
      name: "Gym/Sports Towels",
      categories: ["premium", "standard", "hygenie"],
      description: "Compact high-performance towels for gyms and fitness studios. Quick-drying and odor-resistant.",
      detailedDescription: "Designed for active lifestyles, our gym towels are compact, quick-drying, and treated to resist odors. Perfect for fitness facilities and sports enthusiasts.",
      sizes: "18x32\", 16x24\", 14x21\"",
      image: gymTowels,
      features: [
        "Quick-drying fabric",
        "Odor-resistant treatment",
        "Compact and portable",
        "High absorbency",
        "Durable for frequent use",
        "Antimicrobial options"
      ],
      applications: ["Gyms", "Fitness studios", "Sports clubs", "Personal training"],
      gsm: "350-500 GSM"
    },
    {
      slug: "monogrammed-towels",
      name: "Monogrammed Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Add personal or brand touch with custom monogramming. Perfect for hotels, resorts, spas, and premium gifting.",
      detailedDescription: "Personalized towels featuring custom monograms or logos. Add a distinctive touch to your brand or create memorable gifts with our embroidery services.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: monogrammedTowels,
      features: [
        "Custom monogramming",
        "Multiple font options",
        "Brand logo capability",
        "Premium quality base",
        "Elegant presentation",
        "Gift-ready packaging"
      ],
      applications: ["Hotels", "Resorts", "Spas", "Premium gifting"],
      gsm: "400-650 GSM depending on tier"
    },
    {
      slug: "embroidery-towels",
      name: "Embroidery Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "High-definition embroidery craftsmanship with intricate multi-color motifs. From elegant monograms to artistic borders.",
      detailedDescription: "Showcase your brand with intricate embroidery. Our skilled craftsmanship can create detailed multi-color designs, from simple monograms to elaborate artistic patterns.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: embroideryTowels,
      features: [
        "High-definition embroidery",
        "Multi-color designs",
        "Intricate patterns",
        "Custom artwork",
        "Luxury finish",
        "Artistic borders"
      ],
      applications: ["Luxury hotels", "Spas", "Premium retail", "Corporate gifting"],
      gsm: "450-700 GSM"
    },
    {
      slug: "promotional-towels",
      name: "Promotional Towels",
      categories: ["luxury", "premium", "standard", "hygenie"],
      description: "Custom-branded towels for impactful giveaways, events, and brand campaigns. Logo jacquards, embroidery, or printed designs.",
      detailedDescription: "Make a lasting impression with custom promotional towels. Available with jacquard weaving, embroidery, or printing, they're perfect for brand visibility and event marketing.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: promotionalTowels,
      features: [
        "Multiple branding options",
        "Cost-effective marketing",
        "High visibility",
        "Quality that reflects your brand",
        "Bulk order friendly",
        "Fast turnaround options"
      ],
      applications: ["Corporate events", "Trade shows", "Brand campaigns", "Customer gifts"],
      gsm: "350-600 GSM depending on tier"
    },
    {
      slug: "custom-design-towels",
      name: "Custom Design Towels",
      categories: ["luxury", "premium", "standard"],
      description: "Bring your creative vision to life. From concept sketch to final packaging, we transform your ideas into beautiful products.",
      detailedDescription: "Complete custom design services from concept to delivery. Our team works with you to create unique towels that perfectly match your vision and brand identity.",
      sizes: "Customizable",
      image: customDesignTowels,
      features: [
        "Full design consultation",
        "Custom sizes available",
        "Unique color matching",
        "Prototype development",
        "Custom packaging",
        "End-to-end project management"
      ],
      applications: ["Unique brand identities", "Special projects", "Designer collaborations", "Exclusive collections"],
      gsm: "Customizable based on requirements"
    },
    {
      slug: "turkish-towels",
      name: "Turkish Towels (Pestemal)",
      categories: ["premium", "standard"],
      description: "Lightweight flat-weave towels with decorative fringes. Quick-drying, travel-friendly, and perfect for beach resorts and spas.",
      detailedDescription: "Authentic Turkish-style flat-weave towels that are lightweight, quick-drying, and beautifully designed. Perfect for travel, beaches, and spa experiences.",
      sizes: "30x60\", 35x70\", 40x80\"",
      image: turkishTowels,
      features: [
        "Lightweight and portable",
        "Quick-drying",
        "Decorative fringes",
        "Space-saving",
        "Versatile use",
        "Traditional craftsmanship"
      ],
      applications: ["Beach resorts", "Spas", "Travel", "Yoga studios"],
      gsm: "250-400 GSM"
    },
    {
      slug: "honeycomb-waffle-towels",
      name: "Honeycomb/Waffle Towels",
      categories: ["premium", "standard"],
      description: "Unique honeycomb weave for faster drying and high absorbency. Lightweight, elegant, and ideal for spa aesthetics.",
      detailedDescription: "Distinctive waffle-weave towels that combine quick-drying properties with elegant aesthetics. The unique texture provides excellent absorbency while remaining lightweight.",
      sizes: "30x60\", 27x54\", 24x48\"",
      image: honeycombTowels,
      features: [
        "Unique honeycomb pattern",
        "Fast-drying",
        "Lightweight",
        "Elegant texture",
        "High absorbency",
        "Modern aesthetic"
      ],
      applications: ["Spas", "Modern bathrooms", "Luxury hotels", "Contemporary retail"],
      gsm: "300-450 GSM"
    },
  ];

  const product = products.find(p => p.slug === slug);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-6">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-premium">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.categories.map((cat) => (
                <Badge key={cat} variant="secondary" className="capitalize">
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {product.description}
            </p>
            <p className="text-base text-foreground mb-8">
              {product.detailedDescription}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Available Sizes</h3>
                <p className="text-muted-foreground">{product.sizes}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Weight (GSM)</h3>
                <p className="text-muted-foreground">{product.gsm}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex-1">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <Link to="/contact">Request Free Samples</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6">Applications</h2>
            <ul className="space-y-3">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{app}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center shadow-premium bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements, request samples, or place an order. We're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">View More Products</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            MOQ: Starting from 300 kg per color/design • Lead time: 3-7 weeks
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
