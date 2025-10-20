import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Users, Cog, Award, ArrowRight } from "lucide-react";

const Workshops = () => {
  return (
    <div className="min-h-screen"
      style={{ marginTop: "9%" }}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Manufacturing Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Step inside Welcot's state-of-the-art facilities where tradition meets innovation.
              Our workshops are equipped with modern machinery and operated by skilled craftspeople
              dedicated to creating the finest towels.
            </p>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Production Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From raw material to finished product, every step is carefully monitored to ensure excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Cog className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Machinery</h3>
                <p className="text-sm text-muted-foreground">
                  High-speed rapier looms and advanced dyeing equipment
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Skilled Workforce</h3>
                <p className="text-sm text-muted-foreground">
                  Trained professionals ensuring quality at every stage
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Control</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous inspection process at multiple checkpoints
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Large Capacity</h3>
                <p className="text-sm text-muted-foreground">
                  500+ tons of towel production annually
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">See Our Workshop in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our production process and meet the team behind Welcot's exceptional quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-none shadow-premium">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_WORKSHOP_VIDEO_ID"
                      title="Welcot Workshop Tour"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Complete Workshop Tour</h3>
                    <p className="text-muted-foreground">
                      A comprehensive look at our manufacturing facilities and production capabilities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Videos */}
            <Card className="overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_WEAVING_VIDEO_ID"
                    title="Weaving Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Weaving Process</h3>
                  <p className="text-sm text-muted-foreground">
                    See our advanced rapier looms in action
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_DYEING_VIDEO_ID"
                    title="Dyeing Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dyeing & Finishing</h3>
                  <p className="text-sm text-muted-foreground">
                    Our state-of-the-art dyeing facilities
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_QUALITY_VIDEO_ID"
                    title="Quality Control"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Our rigorous inspection process
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_PACKAGING_VIDEO_ID"
                    title="Packaging Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Packaging & Export</h3>
                  <p className="text-sm text-muted-foreground">
                    From factory to global destinations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Workshop Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-resolution photos of our manufacturing facilities and equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="overflow-hidden border-none shadow-medium hover:shadow-premium transition-smooth group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <Factory size={48} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
                      <p className="text-sm font-medium">Workshop Photo {index}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 italic">
            * Replace placeholder video IDs and add actual workshop photos for production use
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Interested in Visiting Our Workshop?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We welcome business partners and clients to visit our facilities.
            Schedule a visit to experience Welcot's manufacturing excellence firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/products">
                View Our Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
