import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-xl">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <img
                src="/navbarlogo.png"
                alt="Western Eagle Security"
                className="h-16 lg:h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="font-semibold text-white hover:text-[#D4AF37] transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="font-semibold text-white hover:text-[#D4AF37] transition"
              >
                About Us
              </Link>

              {/* Services */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-semibold text-white hover:text-[#D4AF37] transition">
                  Services
                  <ChevronDown
                    size={18}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>

                <div className="absolute left-0 top-full mt-3 w-72 rounded-xl bg-[#111111] border border-[#D4AF37]/30 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <Link
                    to="/services/static-security"
                    className="block px-5 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Static Security Guard
                  </Link>

                  <Link
                    to="/services/construction-security"
                    className="block px-5 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Construction Site Security
                  </Link>

                  <Link
                    to="/services/concierge-security"
                    className="block px-5 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Concierge Security
                  </Link>

                  <Link
                    to="/services/mobile-patrol"
                    className="block px-5 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Mobile Patrol Services
                  </Link>
                </div>
              </div>

              <Link
                to="/pricing"
                className="font-semibold text-white hover:text-[#D4AF37] transition"
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#D4AF37]"
            >
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-500 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-[#0B0B0B] z-[60] transform transition-transform duration-500 ease-in-out lg:hidden border-l border-[#D4AF37]/30 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 h-24 border-b border-[#D4AF37]/20">
          <img
            src="/navbarlogo.png"
            alt="Western Eagle Security"
            className="h-14"
          />

          <button onClick={closeMenu} className="text-[#D4AF37]">
            <X size={32} />
          </button>
        </div>

        {/* Menu */}
        <div className="px-7 py-8 space-y-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="block text-xl font-semibold text-white hover:text-[#D4AF37] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="block text-xl font-semibold text-white hover:text-[#D4AF37] transition"
          >
            About Us
          </Link>

          {/* Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-xl font-semibold text-white hover:text-[#D4AF37]"
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96 mt-5" : "max-h-0"
              }`}
            >
              <div className="border-l border-[#D4AF37]/30 pl-5 space-y-4">
                <Link
                  to="/services/static-security"
                  onClick={closeMenu}
                  className="block text-gray-300 hover:text-[#D4AF37]"
                >
                  Static Security Guard
                </Link>

                <Link
                  to="/services/construction-security"
                  onClick={closeMenu}
                  className="block text-gray-300 hover:text-[#D4AF37]"
                >
                  Construction Site Security
                </Link>

                <Link
                  to="/services/concierge-security"
                  onClick={closeMenu}
                  className="block text-gray-300 hover:text-[#D4AF37]"
                >
                  Concierge Security
                </Link>

                <Link
                  to="/services/mobile-patrol"
                  onClick={closeMenu}
                  className="block text-gray-300 hover:text-[#D4AF37]"
                >
                  Mobile Patrol Services
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/pricing"
            onClick={closeMenu}
            className="block text-xl font-semibold text-white hover:text-[#D4AF37]"
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-8 flex justify-center rounded-lg border-2 border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
