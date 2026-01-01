import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16" style={{ marginTop: "9%" }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch for bulk orders, custom designs, or catalog requests
          </p>
        </div>

        {/* Location Map Section */}
        {/* Location Map Section */}
        <div className="mb-12">
          <Card className="shadow-soft">
            <CardContent style={{ marginTop: "2%" }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2" style={{ padding: "10px 0" }}>
                      <MapPin className="text-primary" size={24} />
                      Our Location
                    </h3>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Mail className="text-primary" size={20} />
                      Email
                    </h3>
                    <a
                      href="mailto:export@welcottowels.com"
                      className="text-muted-foreground hover:text-secondary transition-smooth block mb-4"
                    >
                      export@welcottowels.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Phone className="text-primary" size={20} />
                      Phone
                    </h3>
                    <a href="tel:+919404947907" className="text-muted-foreground hover:text-secondary transition-smooth block">
                      +91 9404947907
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 9 AM - 9 PM IST</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="text-primary" size={20} />
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      Export Office<br />
                      Solapur, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2 h-[400px] overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.404138333357!2d75.93170358961464!3d17.672527081836957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db82a48f9d47%3A0x7835384b796f38d0!2sWelcot%20Towels!5e0!3m2!1sen!2sin!4v1760944990955!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="mb-12">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, quantities, and any specific needs..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA Boxes */}
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="gradient-card shadow-medium text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Request a Company Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Get our comprehensive product catalog with specifications and pricing
                </p>
                <Button variant="default">Download Catalog</Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-medium text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Request a Catalog</h3>
                <p className="text-muted-foreground mb-4">
                  Get our comprehensive product catalog with specifications and pricing
                </p>
                <Button variant="default">Download Catalog</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
