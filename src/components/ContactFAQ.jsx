import React from "react";
import { Headphones, CreditCard, ShieldCheck } from "lucide-react";

const ContactFAQ = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* HELP SECTION */}
        <div className="md:w-[58%] relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white shadow-[0_20px_60px_rgba(0,0,0,.12)]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.05] scale-110"
            style={{
              backgroundImage: "url('/centerimg.png')",
            }}
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/95" />

          {/* Gold Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#D4AF37]/10 blur-[120px]" />

          <div className="relative z-10 p-10 lg:p-12">
            {/* Heading */}
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#111111] font-serif leading-tight">
              How Can We
              <span className="text-[#D4AF37]"> Help You?</span>
            </h2>

            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-6 mb-8"></div>

            <p className="text-gray-600 leading-8 text-lg mb-12">
              Western Eagle Security delivers trusted protection, rapid
              response, and customized security solutions for businesses,
              residential communities, construction sites, and commercial
              properties throughout Alberta.
            </p>

            <div className="space-y-10">
              {/* Item 1 */}
              <div className="flex gap-5 group">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">
                  <Headphones
                    size={30}
                    className="text-[#D4AF37] group-hover:text-black transition"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#111111]">
                    24/7 Security Support
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Our experienced security team is available around the clock
                    to provide immediate assistance, emergency response, and
                    dependable protection whenever you need us.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-5 group">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">
                  <CreditCard
                    size={30}
                    className="text-[#D4AF37] group-hover:text-black transition"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#111111]">
                    Transparent Pricing
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    No hidden costs. Every proposal is customized to your
                    security requirements with complete transparency and clear
                    service agreements.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-5 group">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">
                  <ShieldCheck
                    size={30}
                    className="text-[#D4AF37] group-hover:text-black transition"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#111111]">
                    Licensed Professionals
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Every officer is licensed, highly trained, professional, and
                    committed to maintaining the highest standards of safety and
                    customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="md:w-[42%]">
          <div className="sticky top-32 bg-white border border-[#D4AF37]/20 rounded-2xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,.12)]">
            {/* Heading */}
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
              Get Started
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#111111] font-serif leading-tight">
              Request a<span className="text-[#D4AF37]"> Free Quote</span>
            </h2>

            <div className="w-20 h-1 rounded-full bg-[#D4AF37] mt-5 mb-6"></div>

            <p className="text-gray-600 leading-7 mb-8">
              Tell us about your security requirements and one of our
              specialists will contact you with a customized security solution.
            </p>

            {/* Trust Box */}
            <div className="rounded-xl border border-[#D4AF37]/20 bg-[#FCFCFC] p-6 mb-8">
              <h3 className="text-[#111111] font-semibold mb-4">
                Why Clients Choose Us
              </h3>

              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck size={18} className="text-[#D4AF37]" />
                  Licensed Security Professionals
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck size={18} className="text-[#D4AF37]" />
                  24/7 Emergency Response
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck size={18} className="text-[#D4AF37]" />
                  Customized Security Solutions
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg bg-white border border-gray-300 px-5 py-4 text-[#111111] placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-white border border-gray-300 px-5 py-4 text-[#111111] placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg bg-white border border-gray-300 px-5 py-4 text-[#111111] placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37]"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your security requirements..."
                className="w-full rounded-lg bg-white border border-gray-300 px-5 py-4 text-[#111111] placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#D4AF37] py-4 text-black font-bold text-lg transition-all duration-300 hover:bg-[#E8C766] hover:scale-[1.02] shadow-[0_10px_30px_rgba(212,175,55,.20)]"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
