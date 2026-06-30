import React from "react";
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  Zap,
  BadgeCheck,
  Settings2,
  Building2,
  Home,
  HardHat,
  Car,
} from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero + Quick Call */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-5 h-5" />
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Get in Touch With
              <span className="block text-[#D4AF37]">
                Western Eagle Security
              </span>
            </h1>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Whether you need static security guards, mobile patrols, concierge
              services, or construction site protection, our team is ready to
              provide a customized security solution across Alberta.
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              We are available 24/7 to discuss your security requirements and
              provide fast, reliable assistance.
            </p>

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl h-64 md:h-72">
              <img
                src="https://placehold.co/1200x500/D4AF37/FFFFFF?text=Add+Team+Photo+Here"
                alt="Western Eagle Security guards on duty"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-transparent to-transparent" />

              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />

              <p className="absolute bottom-5 left-6 text-white font-semibold text-lg">
                Trusted security professionals, on duty across Alberta
              </p>
            </div>
          </div>
          {/* Right Card */}
          <div className="bg-[#D4AF37] rounded-xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-center min-h-[340px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#D4AF37]/15 rounded-full p-2">
                <PhoneCall className="w-5 h-5 text-black" />
              </span>

              <h3 className="text-2xl font-bold text-[#1A1A1A]">
                Need Immediate Help?
              </h3>
            </div>

            <p className="text-gray-700 mb-8 leading-7">
              Call us now for urgent security support or a quick consultation.
            </p>

            <div className="mb-8 text-center">
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                Call Anytime
              </p>

              <h2 className="text-3xl font-bold mt-2 text-[#1A1A1A]">
                587-664-7683
              </h2>
            </div>

            <a
              href="tel:5876647683"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1A1A1A] border border-black py-3 px-6 rounded-full font-semibold hover:bg-[#C89D2C] transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6 md:px-12 bg-[#005FCC]/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-white border border-[#D4AF37]/20 rounded-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <p className="uppercase tracking-[3px] text-sm font-semibold text-[#D4AF37] mb-2">
              Get Started
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
              Request a Free Quote
            </h2>

            <form className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#FAFAFA] border border-[#D4AF37]/20 p-3 pl-12 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#FAFAFA] border border-[#D4AF37]/20 p-3 pl-12 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-[#FAFAFA] border border-[#D4AF37]/20 p-3 pl-12 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
                />
              </div>

              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <select className="w-full bg-[#FAFAFA] border border-[#D4AF37]/20 p-3 pl-12 pr-10 rounded-xl appearance-none focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition">
                  <option>Service Required</option>
                  <option>Static Security</option>
                  <option>Construction Security</option>
                  <option>Concierge Security</option>
                  <option>Mobile Patrol</option>
                  <option>Night Patrol</option>
                </select>

                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37] pointer-events-none" />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#D4AF37]" />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-[#FAFAFA] border border-[#D4AF37]/20 p-3 pl-12 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#1A1A1A] border border-black py-3.5 rounded-xl font-semibold hover:bg-[#C89D2C] transition-all duration-300 shadow-lg"
              >
                Request Quote
              </button>
            </form>
          </div>
          {/* INFO */}
          <div className="space-y-8">
            <div className="bg-[#D4AF37] text-black p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-black/15 rounded-full p-3 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-black/80">Phone</p>
                    <p className="text-xl font-semibold">587-664-7683</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-black/15 rounded-full p-3 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-black/80">Location</p>
                    <p className="text-xl font-semibold">Alberta, Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-black/15 rounded-full p-3 shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-black/80">Availability</p>
                    <p className="text-xl font-semibold">
                      24/7 Security Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-black/15 rounded-full p-3 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-black/80">Email</p>
                    <p className="text-xl font-semibold break-all">
                      info@westerneaglesecurity.ca
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live map of service area */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                title="Western Eagle Security service area - Alberta, Canada"
                src="https://maps.google.com/maps?q=Alberta,Canada&z=6&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="text-[#005FCC] uppercase font-semibold tracking-wider mb-3">
            Why Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
            Fast & Reliable Security Support
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-[#005FCC]/5 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#005FCC]/10 flex items-center justify-center">
              <Zap className="w-7 h-7 text-[#005FCC]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Response</h3>
            <p>Quick replies to all inquiries and emergency requests.</p>
          </div>

          <div className="bg-[#005FCC]/5 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#005FCC]/10 flex items-center justify-center">
              <BadgeCheck className="w-7 h-7 text-[#005FCC]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Licensed Guards</h3>
            <p>Fully trained and certified security professionals.</p>
          </div>

          <div className="bg-[#005FCC]/5 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#005FCC]/10 flex items-center justify-center">
              <Settings2 className="w-7 h-7 text-[#005FCC]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
            <p>Security plans tailored to your exact requirements.</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-6 md:px-12 bg-[#005FCC]/5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Service Areas
          </h2>

          <p className="text-gray-600">Proudly serving all across Alberta</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-3 hover:-translate-y-1 transition">
            <Building2 className="w-7 h-7 text-[#005FCC]" />
            Commercial
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-3 hover:-translate-y-1 transition">
            <Home className="w-7 h-7 text-[#005FCC]" />
            Residential
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-3 hover:-translate-y-1 transition">
            <HardHat className="w-7 h-7 text-[#005FCC]" />
            Construction
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-3 hover:-translate-y-1 transition">
            <Car className="w-7 h-7 text-[#005FCC]" />
            Mobile Patrol
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#005FCC] to-[#4EA5FF] text-white text-center p-16 rounded-3xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Property?
            </h2>

            <p className="text-lg mb-10">
              Contact Western Eagle Security today for a free consultation and
              customized security plan.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:5876647683"
                className="flex items-center justify-center gap-2 bg-white text-[#005FCC] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5" />
                Call 587-664-7683
              </a>

              <a
                href="/contact"
                className="flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <MessageSquare className="w-5 h-5" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
