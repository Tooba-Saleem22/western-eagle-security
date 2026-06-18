const Footer = () => {
  return (
    <footer className="bg-white text-black pt-14 pb-8 px-6 md:px-12 shadow-[0_-2px_6px_rgba(0,0,0,0.01)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT COLUMN */}
        <div>
          <img
            src="/logo western eagle-01.svg"
            alt="Western Eagle Security"
            className="h-14 mb-5"
          />

          <p className="text-sm text-black/80 leading-relaxed">
            Western Eagle Security delivers professional, licensed, and reliable
            security services across Alberta. We are committed to protecting
            your property, people, and peace of mind with trusted security
            solutions.
          </p>
        </div>

        {/* SERVICES COLUMN (SHIFTED RIGHT) */}
        <div className="md:pl-6">
          <h3 className="text-base font-semibold mb-4">Our Services</h3>

          <ul className="space-y-0 text-black/80 text-sm">
            <li className="hover:text-[#007BFF] cursor-pointer">
              Static Security Guard
            </li>
            <li className="hover:text-[#007BFF] cursor-pointer">
              Construction Security
            </li>
            <li className="hover:text-[#007BFF] cursor-pointer">
              Concierge Security
            </li>
            <li className="hover:text-[#007BFF] cursor-pointer">
              Mobile Patrol
            </li>
          </ul>
        </div>

        {/* PAGES COLUMN */}
        <div>
          <h3 className="text-base font-semibold mb-4">Pages</h3>

          <ul className="space-y-2 text-black/80 text-sm">
            <li className="hover:text-[#007BFF] cursor-pointer">Home</li>
            <li className="hover:text-[#007BFF] cursor-pointer">About Us</li>
            <li className="hover:text-[#007BFF] cursor-pointer">Services</li>
            <li className="hover:text-[#007BFF] cursor-pointer">Pricing</li>
            <li className="hover:text-[#007BFF] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div>
          <h3 className="text-base font-semibold mb-4">Contact Us</h3>

          <div className="space-y-2 text-black/80 text-sm">
            <p>71 Pilgrim Avenue, Chevy Chase, MD 20815</p>
            <p>yourmail@gmail.com</p>
            <p>+880 256794, 24-2564687</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10 mt-8 pt-5 text-center text-black/60 text-sm">
        © {new Date().getFullYear()} Western Eagle Security. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
