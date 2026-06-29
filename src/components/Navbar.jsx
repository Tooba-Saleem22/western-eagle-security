import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-md">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <img
                src="/navbarlogo.png"
                alt="Logo"
                className="h-16 lg:h-20 w-auto transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                className="font-semibold text-black hover:text-[#D4AF37]"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-semibold text-black hover:text-[#D4AF37]"
                to="/about"
              >
                About
              </Link>

              {/* Services */}
              <div className="relative group">
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 font-semibold text-black hover:text-[#D4AF37]"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-3 w-72 rounded-xl bg-white border border-[#D4AF37]/40 shadow-xl overflow-hidden transition-all duration-300 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {[
                      ["Static Security Guard", "/services/static-security"],
                      [
                        "Construction Site Security",
                        "/services/construction-security",
                      ],
                      ["Concierge Security", "/services/concierge-security"],
                      ["Mobile Patrol Services", "/services/mobile-patrol"],
                    ].map(([label, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMenu}
                        className="block px-5 py-3 text-black hover:bg-[#D4AF37] hover:text-white transition"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                className="font-semibold text-black hover:text-[#D4AF37]"
                to="/pricing"
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-white transition"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-black"
            >
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 z-50 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE FULL SCREEN MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-[60] transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 h-24 border-b border-[#D4AF37]/30">
          <img src="/navbarlogo.png" alt="Logo" className="h-14" />
          <button onClick={closeMenu} className="text-black">
            <X size={32} />
          </button>
        </div>

        {/* Links */}
        <div className="px-8 py-10 space-y-6">
          <Link
            onClick={closeMenu}
            className="block text-xl font-semibold text-black hover:text-[#D4AF37]"
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={closeMenu}
            className="block text-xl font-semibold text-black hover:text-[#D4AF37]"
            to="/about"
          >
            About
          </Link>

          {/* Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-xl font-semibold text-black"
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all ${mobileServicesOpen ? "max-h-96 mt-5" : "max-h-0"}`}
            >
              <div className="pl-4 border-l border-[#D4AF37]/40 space-y-4">
                <Link
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-[#D4AF37]"
                  to="/services/static-security"
                >
                  Static Security Guard
                </Link>
                <Link
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-[#D4AF37]"
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
            </div>
          </div>

          <Link
            onClick={closeMenu}
            className="block text-xl font-semibold text-black hover:text-[#D4AF37]"
            to="/pricing"
          >
            Pricing
          </Link>

          <Link
            onClick={closeMenu}
            to="/contact"
            className="mt-10 flex justify-center border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
