import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import welcotLogo from "@/assets/welcot-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img 
              src={welcotLogo} 
              alt="WELCOT Towels" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90 mb-4">
              Premium Towel Manufacturer & Exporter from India
            </p>
            <p className="text-xs opacity-75">
              Made in India. Loved Worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sustainable" className="opacity-90 hover:opacity-100 transition-smooth">
                  Sustainable Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Welcot Luxury</li>
              <li className="opacity-90">Welcot Premium</li>
              <li className="opacity-90">Welcot Standard</li>
              <li className="opacity-90">Welcot Hygenie</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:export@welcottowels.com" className="opacity-90 hover:opacity-100 transition-smooth">
                  export@welcottowels.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-90">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-90">
                  Solapur, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} WELCOT Towels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
