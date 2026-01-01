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
import HorizontalCarousel from "@/components/HorizontalCarousel";


const AccessoryDetail = () => {
  const { slug } = useParams();

  const bagImages = Object.values(
    import.meta.glob("@/assets/accessories/bags/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const pouchesImages = Object.values(
    import.meta.glob("@/assets/accessories/pouches/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const hatsImages = Object.values(
    import.meta.glob("@/assets/accessories/hats/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const beachPonchoImage = Object.values(
    import.meta.glob("@/assets/accessories/beach-ponchos/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const babyTowelImages = Object.values(
    import.meta.glob("@/assets/accessories/baby-towels/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const hairTowelImages = Object.values(
    import.meta.glob("@/assets/accessories/hair-towels/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const dishScrubberImages = Object.values(
    import.meta.glob("@/assets/accessories/dish-scrubbers/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const babyBibsImages = Object.values(
    import.meta.glob("@/assets/accessories/baby-bibs/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const babyBathRobeImages = Object.values(
    import.meta.glob("@/assets/accessories/baby-bath-robes/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const terryApparelImages = Object.values(
    import.meta.glob("@/assets/accessories/terry-apparels/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  // Accessory data with all details
  const accessoryData: Record<string, any> = {
    "bags": {
      name: "Terry Bags",
      tagline: "Function meets fashion in premium terry toweling",
      description: "Designed using terry-woven fabric, these bags combine functionality with distinctive woven aesthetics. The toweling construction allows attractive designs and patterns to be woven directly into the fabric, creating a unique textured look while maintaining softness and durability.\nThey are developed for full customization, offering flexibility in weave pattern, design, colors, size, and overall style to match specific brand or collection requirements. \nFor customized woven designs, a defined MOQ applies, which can be comfortably achieved by combining bags with other toweling accessories such as hats, pouches, hair towels, or towels within the same production order. \nAdditionally, a selection of ready-to-use designs and patterns is available, offered with very low MOQ, making them ideal for quick launches or smaller programs.",
      images: bagImages,
      sizes: ["Small (30x20 cm)", "Medium (40x30 cm)", "Large (50x40 cm)"],
      moq: "300 kg per color/design (approximately 150-200 pieces depending on size)",
      relatedProducts: ["pouches", "beach-ponchos", 'terry-apparel-solapur-chaddar-apparel', 'hats-caps']
    },
    "pouches": {
      name: "Terry Pouches",
      tagline: "Luxury storage solutions for every need",
      description: "Crafted from terry-woven toweling fabric, these pouches offer a balance of softness, durability, and refined visual appeal. The woven structure allows patterns and textures to be integrated directly into the fabric, resulting in a premium look while remaining highly functional.\n\nThey are designed for complete customization, with flexibility in woven patterns, design layouts, color options, size, and styling to suit specific branding or collection needs.\n\nA curated range of ready-to-use designs is also available with low MOQ, making them suitable for fast-moving retail programs or smaller quantity requirements.",
      images: pouchesImages,
      sizes: ["Small (15x10 cm)", "Medium (20x15 cm)"],
      moq: "300 kg per color/design (approximately 200-300 pieces depending on size)",
      relatedProducts: ["bags", "beach-ponchos", "hats-caps", "dish-scrubbers"]
    },
    "hats-caps": {
      name: "Terry Hats & Caps",
      tagline: "Cool comfort for sunny days",
      description: "Made from terry-woven toweling fabric, these hats are designed to offer comfort, breathability, and a distinctive textured look. The toweling weave allows attractive patterns and designs to be woven directly into the fabric, enhancing both visual appeal and functionality.\n\nThey are suitable for full customization, with flexibility in woven patterns, colors, sizing, and overall style — making them ideal for beachwear, resort collections, and casual lifestyle use.\n\nAlongside customized options, a selection of ready-to-use designs and styles is available with low MOQ, allowing easy entry for seasonal programs or quick product launches.",
      images: hatsImages,
      sizes: ["One Size", "Adjustable"],
      moq: "300 kg per color/design (approximately 200-250 pieces)",
      relatedProducts: ["beach-ponchos", "bags", "hair-towels", "pouches"]
    },
    "beach-ponchos": {
      name: "Beach Ponchos",
      tagline: "Easy on, easy off beach essential",
      description: "Made from toweling fabric, these beach ponchos are designed for easy drying and relaxed comfort after swimming. The absorbent structure provides warmth and coverage while remaining lightweight and breathable, making them ideal for beach, pool, and resort use.\n\nThey are available in ready-to-use designs for quick programs as well as fully customized options, with flexibility in size, colors, patterns, and styling to meet specific collection or branding requirements.",
      images: beachPonchoImage,
      sizes: ["Adult (One Size)", "Kids (8-12 years)"],
      moq: "300 kg per color/design (approximately 100-150 pieces)",
      relatedProducts: ["baby-bibs-burp-cloths", "bags", "hats-caps", "terry-apparel-solapur-chaddar-apparel"]
    },
    "hair-towels": {
      name: "Hair Towels",
      tagline: "Quick-dry protection for your hair",
      description: "Made from terry-woven toweling fabric, these hair towels are designed for efficient moisture absorption while remaining gentle on hair. The toweling structure allows functional and decorative patterns to be woven into the fabric, enhancing both performance and appearance.\n\nThey are suitable for full customization, with flexibility in weave patterns, colors, sizes, and fastening styles to meet specific branding or collection requirements.\n\nIn addition to customized designs, a range of ready-to-use styles is available with low MOQ, making them ideal for salons, spas, retail collections, and quick-launch programs.",
      images: hairTowelImages,
      sizes: ["One Size"],
      moq: "300 kg per color/design (approximately 400-500 pieces)",
      relatedProducts: ["bags", "pouches", "dish-scrubbers", "bags"]
    },
    "dish-scrubbers": {
      name: "Terry Dish Scrubbers",
      tagline: "Effective cleaning with gentle care",
      description: "Developed using toweling fabric, these dish scrubbers are designed to offer effective cleaning while remaining gentle on cookware. The textured toweling surface supports both functionality and design flexibility, allowing shapes and patterns to be tailored as per specific requirements.\n\nCustomization extends beyond product design to include packaging, labeling, and branding, making these scrubbers suitable for private label, retail, and promotional programs.",
      images: dishScrubberImages,
      sizes: ["Standard"],
      moq: "300 kg per color/design (approximately 600-800 pieces)",
      relatedProducts: ["pouches", "bags", "hair-towels", "baby-bibs-burp-cloths"]
    },
    "baby-bibs-burp-cloths": {
      name: "Baby Bibs & Burp Cloths",
      tagline: "Soft protection for little ones",
      description: "Made from soft and absorbent toweling fabric, baby bibs and burp cloths are designed for everyday feeding and care routines. Their gentle texture helps absorb spills, drool, and milk while remaining comfortable against delicate skin.\n\nAvailable in ready-to-use designs as well as customized options, they can be developed in various shapes, sizes, colors, edging styles, and fastening options to suit baby care and private label programs.",
      images: babyBibsImages,
      sizes: ["Standard"],
      moq: "300 kg per color/design (approximately 500-700 pieces)",
      relatedProducts: ["baby-bath-robes", "pouches", "bags", "dish-scrubbers"]
    },
    "baby-bath-robes": {
      name: "Baby Bath Robes",
      tagline: "Adorable comfort after bath time",
      description: "Made from soft toweling fabric, baby bathrobes are designed to provide gentle warmth, comfort, and absorbency for delicate skin. The toweling structure ensures effective drying after bath time while remaining lightweight, breathable, and cozy for infants and toddlers.\n\nAvailable in ready-to-use designs as well as fully customized options, these bathrobes can be tailored in size, colors, patterns, hood styles, and detailing to suit baby care collections or private label programs.",
      images: babyBathRobeImages,
      sizes: ["0-12 months", "1-3 years", "3-5 years"],
      moq: "300 kg per color/design (approximately 150-200 pieces)",
      relatedProducts: ["baby-bibs-burp-cloths", "baby-bath-robes", "pouches", "bags"]
    },
    "terry-apparel-solapur-chaddar-apparel": {
      name: "Terry Apparel & Solapur Chaddar Apparel",
      tagline: "Fashion-forward comfort in terry",
      description: "Terry apparel represents an innovative extension of toweling fabric into wearable design. These garments are developed by combining unique woven patterns and existing design elements to create visually distinctive and comfortable apparel. Each piece is thoughtfully constructed to balance absorbency, softness, and wearability.\nAlongside toweling-based apparel, selected styles such as jackets developed from Solapur chaddars are also offered. Solapur chaddars are a GI-tagged (Geographical Indication) textile, recognized for their origin-specific weaving techniques, distinct texture, and long-standing reputation. This GI status, protected under India’s Geographical Indications of Goods (Registration and Protection) Act, 1999, ensures authenticity and preserves the unique characteristics linked to their place of origin.",
      images: terryApparelImages,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      moq: "300 kg per color/design (approximately 100-200 pieces depending on item)",
      relatedProducts: ["beach-ponchos", "pouches", "hair-towels", "bags"]
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
          backgroundImage: `url(${accessory.images[0]})`,
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
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {accessory.description}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-rectangle">
            <HorizontalCarousel
              images={accessory.images}
              alt={accessory.name}
              className="w-[41rem] h-[30rem]"
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
                      src={related.images[0]}
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
