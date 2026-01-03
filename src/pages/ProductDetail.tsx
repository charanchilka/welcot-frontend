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
import HorizontalCarousel from "@/components/HorizontalCarousel";
import bathTowels1 from "@/assets/products/bath-towels/bath-towel-1.png";
import bathTowels2 from "@/assets/products/bath-towels/bath-towel-2.png";
import handTowels1 from "@/assets/products/hand-towels/hand-towel-1.png";
import handTowels2 from "@/assets/products/hand-towels/hand-towel-2.png";
import handTowels3 from "@/assets/products/hand-towels/hand-towel-3.png";
import faceTowels1 from "@/assets/products/face-towels/face-towel-1.png";
import faceTowels2 from "@/assets/products/face-towels/face-towel-2.png";
import faceTowels3 from "@/assets/products/face-towels/face-towel-3.png";
import towelSets1 from "@/assets/products/towel-sets/towel-sets-1.png";
import towelSets2 from "@/assets/products/towel-sets/towel-sets-2.png";
import beachTowels1 from "@/assets/products/beach-towels/beach-towel-1.png";
import beachTowels2 from "@/assets/products/beach-towels/beach-towel-2.png";
import beachTowels3 from "@/assets/products/beach-towels/beach-towel-3.png";
import beachTowels4 from "@/assets/products/beach-towels/beach-towel-4.png";
import poolTowels1 from "@/assets/products/pool-towels/pool-towel-1.png";
import poolTowels2 from "@/assets/products/pool-towels/pool-towel-2.png";
import kitchenTowels1 from "@/assets/products/kitchen-towels/kitchen-towels-1.png";
import kitchenTowels2 from "@/assets/products/kitchen-towels/kitchen-towels-2.png";
import bathMats1 from "@/assets/products/bath-mats/bath-mat-1.png";
import bathMats2 from "@/assets/products/bath-mats/bath-mat-2.png";
import bathMats3 from "@/assets/products/bath-mats/bath-mat-3.png";
import bathMats4 from "@/assets/products/bath-mats/bath-mat-4.png";
import bathMats5 from "@/assets/products/bath-mats/bath-mat-5.png";
import bathrobes1 from "@/assets/products/bath-robes/bath-robe-1.png";
import bathrobes2 from "@/assets/products/bath-robes/bath-robe-2.png";
import jacquardTowels1 from "@/assets/products/jacquard-towels/jacquard-towel-1.png";
import jacquardTowels2 from "@/assets/products/jacquard-towels/jacquard-towel-2.png";
import jacquardTowels3 from "@/assets/products/jacquard-towels/jacquard-towel-3.png";
import jacquardTowels4 from "@/assets/products/jacquard-towels/jacquard-towel-4.png";
import velourTowels1 from "@/assets/products/velour-towels/velour-towel-1.png";
import velourTowels2 from "@/assets/products/velour-towels/velour-towel-2.png";
import velourTowels3 from "@/assets/products/velour-towels/velour-towel-3.png";
import hotelWhiteTowels1 from "@/assets/products/white-towels/white-towel-1.png";
import hotelWhiteTowels2 from "@/assets/products/white-towels/white-towel-2.png";
import teaTowels1 from "@/assets/products/tea-towels/tea-towel-1.png";
import teaTowels2 from "@/assets/products/tea-towels/tea-towel-2.png";
import gymTowels1 from "@/assets/products/gym-towels/gym-towel-1.png";
import gymTowels2 from "@/assets/products/gym-towels/gym-towel-2.png";
import gymTowels3 from "@/assets/products/gym-towels/gym-towel-3.png";
import gymTowels4 from "@/assets/products/gym-towels/gym-towel-4.png";
import monogrammedTowels1 from "@/assets/products/monogrammed-towels/monogrammed-towel-1.png";
import monogrammedTowels2 from "@/assets/products/monogrammed-towels/monogrammed-towel-2.png";
import monogrammedTowels3 from "@/assets/products/monogrammed-towels/monogrammed-towel-3.png";
import embroideryTowels1 from "@/assets/products/embroidery-towels/embroidery-towel-1.png";
import embroideryTowels2 from "@/assets/products/embroidery-towels/embroidery-towel-2.png";
import embroideryTowels3 from "@/assets/products/embroidery-towels/embroidery-towel-3.png";
import promotionalTowels1 from "@/assets/products/promotional-towels/promotional-towel-1.png";
import promotionalTowels2 from "@/assets/products/promotional-towels/promotional-towel-2.png";
import customDesignTowels1 from "@/assets/products/custom-design-towels/custom-design-towel-1.png";
import customDesignTowels2 from "@/assets/products/custom-design-towels/custom-design-towel-2.png";
import customDesignTowels3 from "@/assets/products/custom-design-towels/custom-design-towel-3.png";
import turkishTowels1 from "@/assets/products/turkish-towels/turkish-towel-1.png";
import turkishTowels2 from "@/assets/products/turkish-towels/turkish-towel-2.png";
import honeycombTowels1 from "@/assets/products/honeycomb-towels/honeycomb-towel-1.png";
import honeycombTowels2 from "@/assets/products/honeycomb-towels/honeycomb-towel-2.png";
import premiumIcon from "@/assets/others/towel-icon-1.png";
import luxuryIcon from "@/assets/others/towel-icon-2.png";
import standardIcon from "@/assets/others/towel-icon-3.png";
import hygieneIcon from "@/assets/others/towel-icon-4.png";

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
      images: [bathTowels1, bathTowels2],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "300 kg per color",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "hand-towels",
      name: "Hand Towels",
      tagline: "Soft Touch. Quick Dry. Perfect Hospitality.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Designed for guest rooms, bathrooms, and hospitality areas, our hand towels deliver a soft, quick-drying experience. They complement bath towels in coordinated sets and are available in every quality tier to suit your brand.",
      sizes: '18x30", 16x24", 14x21"',
      images: [handTowels1, handTowels2, handTowels3],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "300 kg per color",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "face-towels",
      name: "Face Towels",
      tagline: "Gentle Care. Pure Comfort. Spa Quality.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Gentle on skin and ideal for spa, skincare, and hotel use, our face towels are crafted to provide comfort, hygiene, and durability. Choose from soft, high-end options or practical variants for daily operations.",
      sizes: '13x13", 12x12", 13x13"',
      images: [faceTowels1, faceTowels2, faceTowels3],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "300 kg per color",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "towel-sets",
      name: "Towel Sets",
      tagline: "Complete Collection. Coordinated Elegance.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Curated towel sets that combine bath, hand, and face towels in coordinated styles. Ideal for hotels, gifting programs, and retail packaging  available across all quality segments to match your target audience.",
      sizes: 'Bath 30x60", Hand 16x24", Face 12x12" or any other sizes',
      images: [towelSets1, towelSets2],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from 300 sets per color  for plain,dobby & piece dyed towels,",
      moq2: "MOQ for yarn dyed towels depends on number of colors in towel",
      moq3: "Final quantity depends on selected GSM and towel dimensions"
    },
    {
      slug: "beach-towels",
      name: "Beach Towels",
      tagline: "Vibrant Colors. Oversized Comfort. Fast Drying.",
      categories: ["premium", "standard", "hygiene"],
      description: "Vibrant, oversized, and fast-drying, our beach towels are perfect for resorts, waterparks, and leisure brands. Offered in premium softness, practical standard builds, or hygiene-focused finishes for shared-use settings.",
      sizes: '40x72", 36x72", 30x60"',
      images: [beachTowels2, beachTowels1, beachTowels3, beachTowels4],
      customization: ["Size", "GSM", "Color", "Design"],
      moq1: "Minimum order starts from ",
      moq2: "500 Kg per design",
      moq3: "Final quantity depends on selected GSM and towel dimensions"
    },
    {
      slug: "pool-towels",
      name: "Pool Towels",
      tagline: "Chlorine Resistant. High Performance. Hotel Grade.",
      categories: ["premium", "standard", "hygiene"],
      description: "Built for performance in humid environments, these towels are durable, highly absorbent, and fast-drying. A must-have for hotels, spas, and health clubs with pools.",
      sizes: '40x72", 36x72", 30x60"',
      images: [poolTowels1, poolTowels2],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "500 Kg per design",
      moq3: "Final quantity depends on selected GSM and towel dimensions"
    },
    {
      slug: "kitchen-towels",
      name: "Kitchen Towels",
      tagline: "Lint-Free. Absorbent. Professional Grade.",
      categories: ["premium", "standard", "hygiene"],
      description: "Absorbent and lint-free, our kitchen towels are designed for drying dishes, cleaning surfaces, or handling hot items. Used in hospitality kitchens and restaurants, they balance utility with quality.",
      sizes: '18x32", 16x24", 13x13"',
      images: [kitchenTowels1, kitchenTowels2],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "300 Kg  per color  for plain, dobby & piece dyed towels",
      moq3: "MOQ for yarn dyed towels depends on number of colors in towel"
    },
    {
      slug: "bath-mats",
      name: "Bath Mats",
      tagline: "Plush Comfort. Safety First. Luxury Feel.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Soft and sturdy, bath mats are placed at the base of bathtubs or showers to absorb moisture and prevent slips. Available in plush luxury versions or high-function options for institutional use.",
      sizes: '20x30", 18x32"',
      images: [bathMats4, bathMats3, bathMats5, bathMats2, bathMats1],
      customization: ["Size", "GSM", "Color", "Weave"],
      moq1: "Minimum order starts from ",
      moq2: "300 Kg  per color  for plain, dobby & piece dyed towels",
      moq3: "MOQ for yarn dyed Bath mat  depends on number of colors in towel"
    },
    {
      slug: "bathrobes",
      name: "Bathrobes",
      tagline: "Wrap in Luxury. Supreme Comfort. Spa Experience.",
      categories: ["premium", "standard", "hygiene"],
      description: "Wrap-around robes made from towel fabric for post-bath relaxation. Perfect for hotels, spas, and wellness resorts. Offered in comfort-first premium quality or hygiene-treated styles for public use.",
      sizes: "S, M, L, XL",
      images: [bathrobes1, bathrobes2],
      customization: ["Size", "GSM", "Color", "Embroidery"],
      moq1: "Minimum order starts from ",
      moq2: "50 pieces for White Color  in plain, Dobby, Waffle",
      moq3: "MOQ for yarn dyed Terry fabric robes like strips or other designs depends on number of colors"
    },
    {
      slug: "jacquard-towels",
      name: "Jacquard Towels",
      tagline: "Woven Elegance. Intricate Patterns. Premium Art.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Woven with intricate patterns, jacquard towels elevate your brand image. Suitable for premium gifting, luxury hotels, and custom collections. Available across all four segments.",
      sizes: '36x72", 30x60", 27x54"',
      images: [jacquardTowels3, jacquardTowels2, jacquardTowels1, jacquardTowels4],
      customization: ["Size", "GSM", "Color", "Pattern"],
      moq1: "Minimum order starts from ",
      moq2: "300 Kg  per color  for piece dyed Jacquard towels",
      moq3: "MOQ for yarn dyed Jacquard towels depends on number of colors in towel"
    },
    {
      slug: "velour-towels",
      name: "Velour Towels",
      tagline: "Velvet Touch. Elegant Finish. Promotional Perfect.",
      categories: ["premium", "standard", "hygiene"],
      description: "With a velvet-like finish, velour towels combine softness and style. Used for promotional events, spas, or retail  offering elegant texture across practical segments.",
      sizes: '36x72", 30x60", 27x54", 24x48", 16x24", 14x21", 13x13"',
      images: [velourTowels3, velourTowels2, velourTowels1],
      customization: ["Size", "GSM", "Color", "Printing"],
      moq1: "Minimum order starts from ",
      moq2: "300 Kg  per color  for piece dyed Velour towels",
      moq3: "MOQ for yarn dyed Velour towels depends on number of colors in towel"
    },
    {
      slug: "hotel-white-towels",
      name: "Hotel White Towels",
      tagline: "Crisp White. Professional Grade. Built to Last.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Crisp white towels widely used in hotels and resorts for a clean, professional look. Available from ultra-luxury to cost-effective hygiene-treated versions for heavy laundering cycles.",
      sizes: '36x72", 30x60", 27x54", 16x24"',
      images: [hotelWhiteTowels2, hotelWhiteTowels1],
      customization: ["Size", "GSM", "Logo Weaving"],
      moq1: "Minimum order starts from ",
      moq2: "500 kg per colour",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "tea-towels",
      name: "Tea Towels",
      tagline: "Classic Design. Highly Absorbent. Kitchen Essential.",
      categories: ["premium", "standard", "hygiene"],
      description: "Ideal for drying crockery and glassware, tea towels are lightweight and versatile. Used in hotels, cafes, and institutional kitchens. Available in various absorbency and durability levels.",
      sizes: '18x32", 16x24", 14x21"',
      images: [teaTowels1, teaTowels2],
      customization: ["Size", "GSM", "Color", "Design"],
      moq1: "Minimum order starts from ",
      moq2: "500 kg per colour",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "gym-sports-towels",
      name: "Gym/Sports Towels",
      tagline: "Quick Dry. Compact. Performance Ready.",
      categories: ["premium", "standard", "hygiene"],
      description: "Compact and high-performance towels for gyms, fitness studios, and sports facilities. Quick-drying and odor-resistant, with options for hygiene-focused environments.",
      sizes: '18x32", 16x24", 14x21", 13x13"',
      images: [gymTowels4, gymTowels2, gymTowels3, gymTowels1],
      customization: ["Size", "GSM", "Color", "Treatment"],
      moq1: "Minimum order starts from ",
      moq2: "500 kg per colour",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "monogrammed-towels",
      name: "Monogrammed Towels",
      tagline: "Personal Touch. Brand Identity. Elegant Detail.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Add a personal or brand touch to every towel with our custom monogramming and embroidery options. Perfect for hotels, resorts, spas, and premium gifting, our monogrammed towels combine luxury with identity available in elegant single-letter initials, intricate logos, or detailed woven patterns. Each towel is crafted to maintain softness and absorbency while showcasing refined craftsmanship.",
      sizes: '30x60", 27x54", 24x48"',
      images: [monogrammedTowels1, monogrammedTowels2, monogrammedTowels3],
      customization: ["Size", "GSM", "Color", "Monogram"],
      moq1: "Minimum order starts from ",
      moq2: "500 kg per colour",
      moq3: "For monogramming, embroidery, or woven logo designs, MOQ may vary depending on complexity"
    },
    {
      slug: "embroidery-towels",
      name: "Embroidery Towels",
      tagline: "Artistic Excellence. Multi-Color Detail. Luxury Craft.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Transform simple towels into statement pieces with our high-definition embroidery craftsmanship. From elegant monograms to intricate multi-color motifs, each design is brought to life using precision embroidery machines capable of up to 6 or more thread combinations.\n\nExplore creative possibilities patchwork logos, textured outlines, raised effects, and artistic borders all designed to give your brand a truly distinct look. Every stitch is carefully placed to ensure durability, softness, and long-lasting appeal even after multiple washes.",
      sizes: '30x60", 27x54", 24x48"',
      images: [embroideryTowels2, embroideryTowels3, embroideryTowels1],
      customization: ["Size", "GSM", "Color", "Embroidery"],
      moq1: "Minimum order starts from ",
      moq2: "300 kg per colour",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "promotional-towels",
      name: "Promotional Towels",
      tagline: "Brand Visibility. Event Ready. Marketing Power.",
      categories: ["luxury", "premium", "standard", "hygiene"],
      description: "Practical, versatile, and designed for high-volume use, promotional towels are made to deliver everyday functionality with strong branding visibility. Crafted from quality terry fabric, they are suitable for events, corporate promotions, giveaways, and large-scale distributions. \n\nThese towels offer dependable absorbency and durability while providing an effective surface for logos and custom designs.",
      sizes: '30x60", 27x54", 24x48"',
      images: [promotionalTowels1, promotionalTowels2],
      customization: ["Size", "GSM", "Color", "Branding"],
      moq1: "Minimum order depends on the type of ",
      moq2: "customization required",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "custom-design-towels",
      name: "Custom Design Towels",
      tagline: "Your Vision. Our Expertise. Unlimited Possibilities.",
      categories: ["luxury", "premium", "standard"],
      description: "Bring your creative vision to life with Custom Design Towels crafted exactly the way you imagine them. From concept sketch to final packaging, we transform your ideas into beautiful, functional textile products that reflect your brand’s identity and story. \n\nOur in-house design and production team supports you at every stage pattern development, yarn selection, weaving, dyeing, finishing, and branding. Whether it’s a luxury jacquard pattern, a vibrant printed towel, or a signature brand weave  we make it possible.\n\nWe can weave towels up to 3 meters in width and in any required length, allowing complete flexibility for creative and large-format designs",
      sizes: "Customizable",
      images: [customDesignTowels2, customDesignTowels3, customDesignTowels1],
      customization: ["All Aspects Customizable"],
      moq1: "Minimum order starts from ",
      moq2: "400-500kg per design or color, depending on complexity and weave structure",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "turkish-towels-pestemal",
      name: "Turkish Towels (Pestemal)",
      tagline: "Lightweight Luxury. Travel Friendly. Beach Perfect.",
      categories: ["premium", "standard"],
      description: "Lightweight, elegant, and beautifully crafted — Turkish Towels, also known as Pestemal Towels, redefine comfort and versatility. Made using traditional flat-weave techniques, these towels feature a smooth texture without terry loops, offering a quick-drying and soft-touch experience.\n\nPerfect for beach resorts, spas, hotels, and lifestyle brands, Turkish (Pestemal) towels combine refined aesthetics with modern functionality. They’re easy to carry, highly absorbent, and ideal for both indoor and outdoor use — from poolside lounging to wellness retreats and travel essentials.",
      sizes: '30x60", 35x70", 40x80"',
      images: [turkishTowels1, turkishTowels2],
      customization: ["Size", "Color", "Fringe Style"],
      moq1: "Minimum order starts from ",
      moq2: "300 kg per color or design",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
    },
    {
      slug: "honeycomb-waffle-towels",
      name: "Honeycomb/Waffle Towels",
      tagline: "Unique Weave. Fast Drying. Modern Aesthetic.",
      categories: ["premium", "standard"],
      description: "Soft, lightweight, and naturally textured — Welcot Honeycomb Towels, also known as Waffle Towels, are designed for exceptional absorbency and fast drying. Their signature honeycomb weave creates a gentle texture that feels soft against the skin while offering superior airflow and quick moisture release.\n\nPerfect for spas, boutique hotels, wellness centers, and travel collections, these towels strike the perfect balance between comfort, practicality, and design. The elegant grid pattern adds visual appeal, while the lightweight structure makes them ideal for compact storage and easy handling.",
      sizes: '30x60", 27x54", 24x48"',
      images: [honeycombTowels2, honeycombTowels1],
      customization: ["Size", "GSM", "Color", "Pattern"],
      moq1: "Minimum order starts from",
      moq2: "300 kg per color or design",
      moq3: "Final quantity in pieces depends on selected GSM and towel dimensions. Contact us for exact piece counts for your specifications"
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
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/50 hover:bg-accent/100 border border-accent/40">
                <img src={luxuryIcon} alt="Luxury" className="w-5 h-5 mr-2 inline-block" />
                Welcot Luxury
              </Badge>
            )}
            {product.categories.includes("premium") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/50 hover:bg-accent/100 border border-accent/40">
                <img src={premiumIcon} alt="Premium" className="w-5 h-5 mr-2 inline-block" />
                Welcot Premium
              </Badge>
            )}
            {product.categories.includes("standard") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/50 hover:bg-accent/100 border border-accent/40">
                <img src={standardIcon} alt="Standard" className="w-5 h-5 mr-2 inline-block" />
                Welcot Standard
              </Badge>
            )}
            {product.categories.includes("hygiene") && (
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-accent/50 hover:bg-accent/100 border border-accent/100">
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
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-rectangle">
            <HorizontalCarousel
              images={product.images}
              alt={product.name}
              className="w-[41rem] h-[28rem]"
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
                  <strong>MOQ:</strong>  {product.moq1} <span className="text-accent font-semibold"> {product.moq2}</span>.
                </p>
                <p className="text-muted-foreground">
                  {product.moq3}.
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
