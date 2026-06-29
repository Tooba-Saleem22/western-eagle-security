import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-[#D4AF37]/40">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <img
              src="/navbarlogo.png"
              alt="Western Eagle Security"
              className="h-16 mb-6"
            />

            <p className="text-gray-600 leading-7 text-sm">
              Western Eagle Security provides professional, licensed, and
              dependable security solutions. We are committed to protecting
              people, businesses, and communities with excellence.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#D4AF37]" />
              </div>

              <div>
                <p className="text-[#D4AF37] font-semibold">
                  Licensed & Trusted
                </p>
                <p className="text-gray-500 text-sm">
                  Professional Security Services
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-600">
              {[
                ["Static Security Guard", "/services/static-security"],
                ["Construction Security", "/services/construction-security"],
                ["Concierge Security", "/services/concierge-security"],
                ["Mobile Patrol Services", "/services/mobile-patrol"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-[#D4AF37] transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link to="/" className="hover:text-[#D4AF37]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] mt-1" size={20} />
                <p className="text-gray-600 text-sm leading-6">
                  71 Pilgrim Avenue
                  <br />
                  Chevy Chase
                  <br />
                  MD 20815
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#D4AF37]" size={20} />
                <p className="text-gray-600 text-sm">yourmail@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#D4AF37]" size={20} />
                <p className="text-gray-600 text-sm">+880 256794</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Western Eagle Security. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              className="text-gray-500 hover:text-[#D4AF37]"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link className="text-gray-500 hover:text-[#D4AF37]" to="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
