import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import welcotLogo from "@/assets/welcot-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Sustainable Collection", path: "/sustainable" },
    { name: "About Us", path: "/about" },
    { name: "Workshops", path: "/workshops" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Layout - Centered */}
        <div className="hidden md:flex flex-col items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-4">
            <img 
              src={welcotLogo} 
              alt="WELCOT Towels" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Get Catalog</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={welcotLogo} 
              alt="WELCOT Towels" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="mt-4 w-full" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Catalog
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
