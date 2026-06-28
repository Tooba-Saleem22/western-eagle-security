import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#D4AF37]/20">
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

            <p className="text-gray-400 leading-7 text-sm">
              Western Eagle Security provides professional, licensed, and
              dependable security solutions across Alberta. We are committed to
              protecting people, businesses, and communities with excellence.
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

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/services/static-security"
                  className="hover:text-[#D4AF37] transition"
                >
                  Static Security Guard
                </Link>
              </li>

              <li>
                <Link
                  to="/services/construction-security"
                  className="hover:text-[#D4AF37] transition"
                >
                  Construction Security
                </Link>
              </li>

              <li>
                <Link
                  to="/services/concierge-security"
                  className="hover:text-[#D4AF37] transition"
                >
                  Concierge Security
                </Link>
              </li>

              <li>
                <Link
                  to="/services/mobile-patrol"
                  className="hover:text-[#D4AF37] transition"
                >
                  Mobile Patrol Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37] transition">
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition">
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

                <p className="text-gray-400 text-sm leading-6">
                  71 Pilgrim Avenue,
                  <br />
                  Chevy Chase,
                  <br />
                  MD 20815
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#D4AF37]" size={20} />

                <p className="text-gray-400 text-sm">yourmail@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#D4AF37]" size={20} />

                <p className="text-gray-400 text-sm">+880 256794</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Western Eagle Security. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-[#D4AF37] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#D4AF37] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
