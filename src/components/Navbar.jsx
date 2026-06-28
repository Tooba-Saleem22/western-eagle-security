import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img
              src="/navbarlogo.png"
              alt="Western Eagle Security"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              className="text-[#D4AF37]  hover:text-[#D4AF37]  font-semibold"
              to="/"
            >
              Home
            </Link>

            <Link
              className="text-[#D4AF37]  hover:text-[#D4AF37]  font-semibold"
              to="/about"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#D4AF37]  hover:text-[#D4AF37]  font-semibold">
                Services <ChevronDown size={18} />
              </button>

              <div className="absolute top-full left-0 mt-2 w-72 bg-white border shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  className="block px-5 py-3 hover:bg-[#007BFF]/10 hover:text-[#D4AF37] "
                  to="/services/static-security"
                >
                  Static Security Guard
                </Link>

                <Link
                  className="block px-5 py-3 hover:bg-[#007BFF]/10 hover:text-[#D4AF37] "
                  to="/services/construction-security"
                >
                  Construction Site Security
                </Link>

                <Link
                  className="block px-5 py-3 hover:bg-[#007BFF]/10 hover:text-[#D4AF37] "
                  to="/services/concierge-security"
                >
                  Concierge Security
                </Link>

                <Link
                  className="block px-5 py-3 hover:bg-[#007BFF]/10 hover:text-[#D4AF37] "
                  to="/services/mobile-patrol"
                >
                  Mobile Patrol Services
                </Link>
              </div>
            </div>

            <Link
              className="text-[#D4AF37]  hover:text-[#D4AF37]  font-semibold"
              to="/pricing"
            >
              Pricing
            </Link>

            {/* Contact Button (FIXED HOVER) */}
            <Link
              to="/contact"
              className="px-5 py-2 border border-[#D4AF37]  text-[#D4AF37]  font-semibold hover:bg-[#D4AF37]  hover:text-black  hover:border-[#D4AF37]  transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0A2540]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t px-6 py-4 space-y-3">
          <Link
            onClick={closeMenu}
            className="block font-semibold text-[#D4AF37] "
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={closeMenu}
            className="block font-semibold text-[#D4AF37] "
            to="/about"
          >
            About Us
          </Link>

          {/* MOBILE SERVICES DROPDOWN (NEW) */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full font-semibold text-[#D4AF37]"
          >
            Services
            <ChevronDown size={18} />
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 space-y-2">
              <Link
                onClick={closeMenu}
                className="block text-gray-700 hover:text-[#D4AF37] "
                to="/services/static-security"
              >
                Static Security Guard
              </Link>

              <Link
                onClick={closeMenu}
                className="block text-gray-700 hover:text-[#D4AF37] "
                to="/services/construction-security"
              >
                Construction Site Security
              </Link>

              <Link
                onClick={closeMenu}
                className="block text-gray-700 hover:text-[#D4AF37]"
                to="/services/concierge-security"
              >
                Concierge Security
              </Link>

              <Link
                onClick={closeMenu}
                className="block text-gray-700 hover:text-[#D4AF37]"
                to="/services/mobile-patrol"
              >
                Mobile Patrol Services
              </Link>
            </div>
          )}

          <Link
            onClick={closeMenu}
            className="block font-semibold text-[#D4AF37]"
            to="/pricing"
          >
            Pricing
          </Link>

          {/* Contact Mobile */}
          <Link
            onClick={closeMenu}
            to="/contact"
            className="inline-block mt-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
