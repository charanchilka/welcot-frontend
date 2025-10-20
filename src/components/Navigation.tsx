import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import welcotLogo from "@/assets/welcot-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Sustainability", path: "/sustainable" },
    { name: "About", path: "/about" },
    { name: "Workshops", path: "/workshops" },
    { name: "Certifications", path: "/certificates" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-slow ${
        isScrolled || !isHomePage
          ? "bg-primary/95 backdrop-blur-lg shadow-premium border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Layout - Centered */}
        <div className="hidden lg:flex flex-col items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-3 transition-smooth hover:scale-105">
            <img 
              src={welcotLogo} 
              alt="WELCOT Towels" 
              className={`h-12 w-auto transition-smooth ${
                isScrolled || !isHomePage ? "brightness-0 invert" : "brightness-0 invert drop-shadow-lg"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth whitespace-nowrap relative group ${
                  isActive(link.path) 
                    ? isScrolled || !isHomePage
                      ? "text-secondary"
                      : "text-white"
                    : isScrolled || !isHomePage
                      ? "text-white/80 hover:text-secondary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isActive(link.path) ? "w-full" : ""
                } ${isScrolled || !isHomePage ? "bg-secondary" : "bg-white"}`} />
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              asChild 
              className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-glow font-semibold"
            >
              <Link to="/contact">Get Catalog</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={welcotLogo} 
              alt="WELCOT Towels" 
              className={`h-10 w-auto transition-smooth ${
                isScrolled || !isHomePage ? "brightness-0 invert" : "brightness-0 invert drop-shadow-lg"
              }`}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`p-2 transition-smooth ${
              isScrolled || !isHomePage ? "text-white" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-primary/95 backdrop-blur-lg">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-smooth ${
                  isActive(link.path) ? "text-secondary" : "text-white/80 hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="mt-4 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" 
              asChild
            >
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
