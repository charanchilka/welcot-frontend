import { useEffect, useState } from "react";
import {
  Percent,
  Package,
  MapPin,
  Sparkles,
  Palette,
  Warehouse,
  DollarSign,
  Truck,
  UserCheck,
  Users,
  ShieldCheck,
  FileText,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Images
import dealershipHero from "@/assets/dealership/dealership-hero.jpg";
import dealershipPartnership from "@/assets/about-us/delearship/dealership.jpg";

const Dealership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    location: "",
    phone: "",
    email: "",
    businessBackground: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Percent,
      title: "Annual Discount Opportunities",
      description: "We reward consistent performance and long-term partnerships through annual discount programs. Dealers achieving predefined sales targets are eligible for year-end discounts, special rebates, and loyalty incentives, helping improve overall profitability and business growth.",
    },
    {
      icon: Package,
      title: "Free Sample Development Charges",
      description: "To support your sales efforts, we offer free sample development for selected products. This allows dealers to confidently showcase quality, designs, and finishes to customers without any additional development cost, making client conversion easier and faster.",
    },
    {
      icon: MapPin,
      title: "Exclusive Territory Rights",
      description: "We provide exclusive territory rights to our dealers, ensuring no internal competition within the allotted region. This helps you build a strong local presence, protect your market, and grow your business with complete confidence.",
    },
    {
      icon: Sparkles,
      title: "Early Access to New Products",
      description: "Our dealers receive priority and early access to newly developed designs, collections, and product upgrades. This allows you to stay ahead of competitors and offer latest trends to your customers before the general market launch.",
    },
    {
      icon: Palette,
      title: "Custom Branding Support",
      description: "Boost your dealership's visibility with our personalized branding support. We assist our partners with custom stationery, promotional materials, and branded gifts, all thoughtfully designed to reinforce your brand identity and create a strong, lasting impression with customers across your local market.",
    },
    {
      icon: Warehouse,
      title: "Godown Rent Paid by Us",
      description: "To reduce your operational burden, we support our partners by bearing godown/warehouse rental costs (as per agreed terms). This enables you to focus on sales and expansion without worrying about storage expenses.",
    },
    {
      icon: DollarSign,
      title: "Profit-Driven Pricing",
      description: "Our pricing structure is designed to be highly competitive and profit-oriented. Dealers benefit from healthy margins, transparent pricing, and scalable profitability.",
    },
    {
      icon: Truck,
      title: "Expedited Order Fulfillment",
      description: "We ensure fast and priority order processing for our dealership partners. With streamlined production planning and logistics support, your orders are fulfilled quickly, helping you maintain stock availability and meet customer deadlines efficiently.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Management",
      description: "Each dealer is assigned a dedicated account manager to provide personalized support. From order coordination and pricing assistance to issue resolution and market guidance, you will always have a single point of contact for smooth operations.",
    },
    {
      icon: Users,
      title: "Local Workforce Support",
      description: "We assist our dealers in building a local sales and support workforce by offering guidance, training, and operational support. This helps strengthen on-ground presence and improves customer reach and service quality.",
    },
    {
      icon: ShieldCheck,
      title: "No Advance Deposit Required",
      description: "We believe in building partnerships based on trust and performance. Therefore, no advance deposit or security money is required to become a Welcot dealer, making it easier and risk-free to start your dealership journey with us.",
    },
  ];

  const applicationSteps = [
    {
      icon: FileText,
      step: "Step 1",
      title: "Submit the Application",
      description: "Interested partners can submit their dealership enquiry by sharing basic business and contact details for initial evaluation.",
    },
    {
      icon: CheckCircle2,
      step: "Step 2",
      title: "Review & Approval",
      description: "Our team reviews the application, evaluates territory availability, and discusses mutual business expectations before approval.",
    },
    {
      icon: GraduationCap,
      step: "Step 3",
      title: "Onboarding & Training",
      description: "Once approved, dealers receive onboarding guidance, product knowledge, and operational support to ensure a smooth business launch.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `*Dealership Enquiry*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Company:* ${encodeURIComponent(formData.companyName)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Business Background:* ${encodeURIComponent(formData.businessBackground)}`;

    window.open(`https://wa.me/919825841234?text=${message}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your dealership enquiry is being sent via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dealershipHero}
            alt="Business Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/60 to-graphite/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Become a Welcot Dealer & Expand Your Business
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Partnership
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner with Welcot
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Welcot Towels LLP is a trusted name in towel manufacturing and supply, known for delivering premium quality products to markets across the globe. With decades of experience and state-of-the-art production facilities, we have established ourselves as a reliable partner for businesses seeking consistent quality and scalable solutions.
                </p>
                <p>
                  Our focus extends beyond just products—we believe in building long-term partnerships based on trust, ethical business practices, and mutual growth. We understand the challenges dealers face and have designed our dealership program to ensure your success with comprehensive support and competitive advantages.
                </p>
                <p>
                  From strong product quality and scalable production capabilities to dealer-friendly policies and dedicated support, partnering with Welcot means joining a network that prioritizes your business growth as much as our own.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img
                  src={dealershipPartnership}
                  alt="Business Partnership"
                  className="w-full h-auto rounded-2xl shadow-premium"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Dealer Benefits
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of Partnering With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              At Welcot Towels LLP our goal is to ensure the fast success of our dealers while fostering a lifelong business relationship. Here's how we support you:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Dealership Application Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {applicationSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                {/* Connector Line */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Dealership Enquiry
              </h2>
              <p className="text-white/80 text-xl">
                What are you waiting for?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-premium">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-foreground font-medium">Company Name *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your company name"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-foreground font-medium">City / State / Country *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Mumbai, Maharashtra, India"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98XXX XXXXX"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="businessBackground" className="text-foreground font-medium">Business Background</Label>
                  <Textarea
                    id="businessBackground"
                    name="businessBackground"
                    value={formData.businessBackground}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business experience, current operations, and why you're interested in becoming a Welcot dealer..."
                    rows={4}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg py-6"
              >
                Apply for Dealership
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dealership;
