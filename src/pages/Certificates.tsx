import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

// Import certification logos
import certDgft from "@/assets/about-us/certificates/cert-dgft.jpg";
import certMsme from "@/assets/about-us/certificates/cert-msme.png";
import certIcegate from "@/assets/about-us/certificates/cert-icegate.png";
import certGst from "@/assets/about-us/certificates/cert-gst.png";

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const certificationLogos = [
    { name: "DGFT Registered", image: certDgft },
    { name: "MSME Registered", image: certMsme },
    { name: "ICEGATE", image: certIcegate },
    { name: "GST Registered", image: certGst },
    { name: "Placeholder 1", image: null },
    { name: "Placeholder 2", image: null },
    { name: "Placeholder 3", image: null },
    { name: "Placeholder 4", image: null },
  ];

  const testReports = [
    {
      title: "Complete Plain Dyed Towel Test Report",
      description: "Comprehensive test report covering all quality parameters for plain dyed towels including colorfastness, absorbency, tensile strength, and dimensional stability.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "/public/reports/plain-dyed-towel-report.pdf",
    },
    {
      title: "Complete Yarn Dyed Towel Test Report",
      description: "Detailed test report for yarn dyed towels covering pattern consistency, color retention, fabric strength, and durability metrics.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "/public/reports/Yarn-Dyed-Towel-Test-Report.png",
    },
    {
      title: "Lint Test Report of Yarn Dyed Towel",
      description: "Detailed lint test report for yarn dyed towels covering pattern consistency, color retention, fabric strength, and durability metrics.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "/public/reports/Lint-Dyed-Towel-Test-Report.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-background" style={{ marginTop: "9%" }}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-26 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Our Certifications & Test Reports
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Welcot is committed to global standards. Our products meet the world's strictest safety, quality, and ethical benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted p-1 rounded-full">
                <TabsTrigger
                  value="certifications"
                  className="rounded-full px-8 py-3 data-[state=active]:bg-background data-[state=active]:shadow-soft"
                >
                  Certifications
                </TabsTrigger>
                <TabsTrigger
                  value="test-reports"
                  className="rounded-full px-8 py-3 data-[state=active]:bg-background data-[state=active]:shadow-soft"
                >
                  Test Reports
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Certifications Tab - Logo Grid */}
            <TabsContent value="certifications" className="mt-0">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Certifications</h2>
                  <p className="text-lg text-muted-foreground">
                    Trusted certifications that validate our commitment to quality and compliance
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                  {certificationLogos.map((cert, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-2 border-border hover:border-primary/30 transition-smooth shadow-soft hover:shadow-premium animate-fade-in aspect-square"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 h-full flex flex-col items-center justify-center">
                        {cert.image ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <img
                              src={cert.image}
                              alt={cert.name}
                              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-smooth"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30 rounded-lg">
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3">
                              <span className="text-2xl text-muted-foreground">?</span>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">Logo Coming Soon</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Test Reports Tab */}
            <TabsContent value="test-reports" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Test Reports</h2>
                  <p className="text-lg text-muted-foreground">
                    Download our comprehensive test reports for complete quality assurance
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testReports.map((report, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-2 border-border hover:border-primary/30 transition-smooth shadow-soft hover:shadow-premium animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center space-y-6">
                          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-smooth">
                            {report.icon}
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-foreground">{report.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {report.description}
                          </p>
                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                            asChild
                          >
                            <a href={report.downloadUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              Download Report
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to answer any questions about our certifications, test reports, or product specifications.
            </p>
            <Button size="lg" asChild className="shadow-premium">
              <a href="/contact">
                Contact Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;