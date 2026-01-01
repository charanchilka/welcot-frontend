import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import welcotLogo from "@/assets/logo/welcot-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", hasDropdown: true },
    { name: "Products", path: "/products" },
    { name: "Accessories", path: "/accessories" },
    { name: "Sustainability", path: "/sustainable" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutSubLinks = [
    { name: "About Us", path: "/about" },
    { name: "Workshops", path: "/workshops" },
    { name: "Certifications", path: "/certificates" },
    { name: "CSR", path: "/csr" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Dealership", path: "/dealership" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAboutActive = location.pathname === "/about" || aboutSubLinks.some(link => location.pathname === link.path);
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-slow ${isScrolled || !isHomePage
        ? "bg-white/95 backdrop-blur-lg shadow-premium border-b border-border/20"
        : "bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-10 lg:px-8">
        {/* Desktop Layout - Centered */}
        <div className="hidden lg:flex flex-col items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-3 transition-smooth hover:scale-105">
            <img
              src={welcotLogo}
              alt="WELCOT Towels"
              className="h-12 w-auto transition-smooth"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            {mainLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-smooth whitespace-nowrap relative group flex items-center gap-1 ${isAboutActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                      }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isAboutActive ? "w-full" : ""} bg-primary`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-1 min-w-[160px] bg-white rounded-lg shadow-lg border border-border/20 overflow-hidden transition-all duration-200 ${aboutDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    {aboutSubLinks.map((subLink) => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        className={`block px-4 py-2.5 text-sm transition-smooth ${isActive(subLink.path)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                          }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-smooth whitespace-nowrap relative group ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isActive(link.path) ? "w-full" : ""
                    } bg-primary`} />
                </Link>
              )
            ))}
            <Button
              variant="default"
              size="sm"
              asChild
              className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-glow font-semibold"
            >
              <Link to="/contact">Get Catalog</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="ml-2 font-semibold"
            >
              <a href="/company-profile.pdf" download>Company Profile</a>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={welcotLogo}
              alt="WELCOT Towels"
              className="h-16 w-auto transition-smooth"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 transition-smooth text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/20 bg-white/95 backdrop-blur-lg">
            {mainLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`w-full flex items-center justify-between py-3 text-sm font-medium transition-smooth ${isAboutActive ? "text-primary" : "text-foreground/70"}`}
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileAboutOpen ? "max-h-48" : "max-h-0"}`}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 pl-4 text-sm transition-smooth ${isActive(link.path) ? "text-primary" : "text-foreground/60 hover:text-primary"}`}
                    >
                      About Us
                    </Link>
                    {aboutSubLinks.map((subLink) => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 pl-4 text-sm transition-smooth ${isActive(subLink.path) ? "text-primary" : "text-foreground/60 hover:text-primary"}`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-medium transition-smooth ${isActive(link.path) ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                >
                  {link.name}
                </Link>
              )
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
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              asChild
            >
              <a href="/company-profile.pdf" download onClick={() => setMobileMenuOpen(false)}>
                Company Profile
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
