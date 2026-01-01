import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import bagImage from "@/assets/accessories/bags/bag-2.png";
import pouchesImage from "@/assets/accessories/pouches/pouche-1.png";
import hatsImage from "@/assets/accessories/hats/hat-1.png";
import beachPonchoImage from "@/assets/accessories/beach-ponchos/beach-ponchos-1.png";
import hairTowelImage from "@/assets/accessories/hair-towels/hair-towel-1.png";
import dishScrubberImage from "@/assets/accessories/dish-scrubbers/dish-scrubber-1.png";
import babyBibsImage from "@/assets/accessories/baby-bibs/baby-bib-1.png";
import babyBathRobeImage from "@/assets/accessories/baby-bath-robes/baby-bath-robes-1.png";
import terryApparelImage from "@/assets/accessories/terry-apparels/terry-apparel-1.png";

const Accessories = () => {
  const accessories = [
    {
      name: "Bags",
      description: "Designed using terry-woven fabric, these bags combine functionality with distinctive woven aesthetics. The toweling construction allows attractive designs and patterns to be woven directly into the fabric, creating a unique textured look while maintaining softness and durability.",
      sizes: "Small, Medium, Large",
      image: bagImage
    },
    {
      name: "Pouches",
      description: "Crafted from terry-woven toweling fabric, these pouches offer a balance of softness, durability, and refined visual appeal. The woven structure allows patterns and textures to be integrated directly into the fabric, resulting in a premium look while remaining highly functional.",
      sizes: "Small, Medium",
      image: pouchesImage
    },
    {
      name: "Hats / Caps",
      description: "Made from terry-woven toweling fabric, these hats are designed to offer comfort, breathability, and a distinctive textured look. The toweling weave allows attractive patterns and designs to be woven directly into the fabric, enhancing both visual appeal and functionality.",
      sizes: "One Size, Adjustable",
      image: hatsImage
    },
    {
      name: "Beach Ponchos",
      description: "Made from toweling fabric, these beach ponchos are designed for easy drying and relaxed comfort after swimming. The absorbent structure provides warmth and coverage while remaining lightweight and breathable, making them ideal for beach, pool, and resort use.",
      sizes: "Adult, Kids",
      image: beachPonchoImage
    },
    {
      name: "Hair Towels",
      description: "Made from terry-woven toweling fabric, these hair towels are designed for efficient moisture absorption while remaining gentle on hair. The toweling structure allows functional and decorative patterns to be woven into the fabric, enhancing both performance and appearance.",
      sizes: "One Size",
      image: hairTowelImage
    },
    {
      name: "Dish Scrubbers",
      description: "Developed using toweling fabric, these dish scrubbers are designed to offer effective cleaning while remaining gentle on cookware. The textured toweling surface supports both functionality and design flexibility, allowing shapes and patterns to be tailored as per specific requirements.",
      sizes: "Standard",
      image: dishScrubberImage
    },
    {
      name: "Baby Bibs / Burp Cloths",
      description: "Made from soft and absorbent toweling fabric, baby bibs and burp cloths are designed for everyday feeding and care routines. Their gentle texture helps absorb spills, drool, and milk while remaining comfortable against delicate skin.",
      sizes: "Standard",
      image: babyBibsImage
    },
    {
      name: "Baby Bath Robes",
      description: "Made from soft toweling fabric, baby bathrobes are designed to provide gentle warmth, comfort, and absorbency for delicate skin. The toweling structure ensures effective drying after bath time while remaining lightweight, breathable, and cozy for infants and toddlers.",
      sizes: "0-12 months, 1-3 years, 3-5 years",
      image: babyBathRobeImage
    },
    {
      name: "Terry Apparel & Solapur Chaddar Apparel",
      description: "Terry apparel represents an innovative extension of toweling fabric into wearable design. These garments are developed by combining unique woven patterns and existing design elements to create visually distinctive and comfortable apparel.",
      sizes: "XS, S, M, L, XL, XXL",
      image: terryApparelImage
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
