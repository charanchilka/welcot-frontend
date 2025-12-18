import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import welcotLogo from "@/assets/welcot-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal-light/20 pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-2">
            <img
              src={welcotLogo}
              alt="WELCOT Towels"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-base opacity-90 mb-6 leading-relaxed max-w-md">
              Premium Towel Manufacturer & Exporter from India.
              Delivering excellence in quality, sustainability, and innovation to clients worldwide.
            </p>
            <p className="text-sm font-semibold text-secondary mb-6">
              Made in India. Loved Worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-smooth hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-smooth hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sustainable" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Sustainable Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/csr" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  CSR Activities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-secondary mb-6 text-lg">Our Collections</h4>
            <ul className="space-y-3 text-sm">
              <li className="opacity-80 hover:opacity-100 transition-smooth cursor-pointer">
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Bath Towel
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-smooth cursor-pointer">
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Beach Towel
                </Link>
              </li>

              <li className="opacity-80 hover:opacity-100 transition-smooth cursor-pointer">
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Kitchen Towel
                </Link>
              </li>

              <li className="opacity-80 hover:opacity-100 transition-smooth cursor-pointer">
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Embroidery Towel
                </Link>
              </li>

              <li className="opacity-80 hover:opacity-100 transition-smooth cursor-pointer">
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm">
                  Custom Design Towel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-secondary mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:export@welcottowels.com"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-smooth text-sm"
                >
                  export@welcottowels.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <div className="flex flex-col opacity-80 text-sm space-y-1">
                  <a href="tel:+919404947907" className="hover:text-secondary transition-smooth">+91 9404947907</a>
                  <a href="tel:+919209915556" className="hover:text-secondary transition-smooth">+91 9209915556</a>
                  <a href="tel:+917350485599" className="hover:text-secondary transition-smooth">+91 7350485599</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="opacity-80 text-sm leading-relaxed">
                  Solapur, Maharashtra,<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gold accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} WELCOT Towels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-secondary transition-smooth">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-secondary transition-smooth">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
