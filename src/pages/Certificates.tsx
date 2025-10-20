import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Award, Shield, CheckCircle, FileText, Hotel, Heart, Home, Building2 } from "lucide-react";

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "International standard for quality management systems, ensuring consistent quality in manufacturing and service delivery.",
      icon: <Award className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "OEKO-TEX Standard 100",
      subtitle: "Safety for Textiles",
      description: "Certification ensuring our textiles are free from harmful substances and safe for human use.",
      icon: <Shield className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "GOTS Certified",
      subtitle: "Global Organic Textile Standard",
      description: "Leading textile processing standard for organic fibers, including ecological and social criteria.",
      icon: <CheckCircle className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "International standard for environmental management systems, demonstrating our commitment to sustainability.",
      icon: <Award className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "BSCI Compliance",
      subtitle: "Business Social Compliance Initiative",
      description: "Certification ensuring ethical business practices and social responsibility throughout our supply chain.",
      icon: <Shield className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "GRS Certified",
      subtitle: "Global Recycled Standard",
      description: "Verification of recycled content in products and responsible social, environmental, and chemical practices.",
      icon: <CheckCircle className="w-12 h-12" />,
      downloadUrl: "#",
    },
  ];

  const testReports = [
    {
      title: "Cotton Quality Test Report",
      subtitle: "Q4 2024",
      description: "Comprehensive analysis of cotton fiber strength, length, and micronaire values meeting international standards.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "Colorfastness Test Report",
      subtitle: "December 2024",
      description: "Testing results for color retention after washing, rubbing, and exposure to light.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "Absorption & Drying Test",
      subtitle: "November 2024",
      description: "Performance analysis of water absorption capacity and drying time for all product categories.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "Durability Test Report",
      subtitle: "Q4 2024",
      description: "Comprehensive durability testing including tensile strength, tear resistance, and wash cycle performance.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "Antibacterial Efficacy Test",
      subtitle: "December 2024",
      description: "Laboratory testing confirming antibacterial properties and hygienic performance standards.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
    {
      title: "Dimensional Stability Test",
      subtitle: "November 2024",
      description: "Testing results for shrinkage control and dimensional stability after repeated washing.",
      icon: <FileText className="w-12 h-12" />,
      downloadUrl: "#",
    },
  ];

  const industries = [
    { name: "Hotels", icon: <Hotel className="w-8 h-8" /> },
    { name: "Healthcare", icon: <Heart className="w-8 h-8" /> },
    { name: "Hospitality", icon: <Building2 className="w-8 h-8" /> },
    { name: "Home", icon: <Home className="w-8 h-8" /> },
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
            <div className="flex items-center justify-center gap-8 flex-wrap animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* {industries.map((industry, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    {industry.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{industry.name}</span>
                </div>
              ))} */}
            </div>
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

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-2 border-border hover:border-primary/30 transition-smooth shadow-soft hover:shadow-premium animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-smooth">
                          {cert.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-foreground">{cert.title}</h3>
                          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                            {cert.subtitle}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                          {cert.description}
                        </p>
                        {/* <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                          asChild
                        >
                          <a href={cert.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                          </a>
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Test Reports Tab */}
            <TabsContent value="test-reports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testReports.map((report, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-2 border-border hover:border-primary/30 transition-smooth shadow-soft hover:shadow-premium animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/5 text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-smooth">
                          {report.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-foreground">{report.title}</h3>
                          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                            {report.subtitle}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                          {report.description}
                        </p>
                        {/* <Button
                          variant="outline"
                          className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth"
                          asChild
                        >
                          <a href={report.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </a>
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
