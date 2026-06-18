import React from "react";
import { Headphones, CreditCard, ShieldCheck } from "lucide-react";

const ContactFAQ = () => {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* HELP SECTION */}
        <div className="md:w-[58%] relative overflow-hidden rounded-xl shadow-md">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/centerimg.png')",
              opacity: 0.25,
            }}
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/95" />

          {/* Content */}
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-3">
              How Can We <span className="text-[#007BFF]">Help?</span>
            </h2>

            <p className="text-gray-600 mb-10">
              Our team is committed to providing professional security
              solutions, fast response times, and dependable support for
              businesses and properties across Alberta.
            </p>

            <div className="space-y-10">
              {/* Item 1 */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Headphones className="text-[#007BFF]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    24/7 Security Support
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Western Eagle Security provides reliable security coverage
                    around the clock. Our team is available to respond to
                    inquiries, support requests, and security concerns whenever
                    assistance is needed.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="text-[#007BFF]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Transparent Service Agreements
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    We believe in honest pricing and clear communication. Every
                    proposal is customized to your requirements, ensuring you
                    understand exactly what services are included before work
                    begins.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-[#007BFF]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Experienced Security Professionals
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Our licensed security personnel are trained to protect
                    commercial buildings, construction sites, residential
                    communities, and private properties with professionalism and
                    attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="md:w-[42%] bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-3">
            Request a <span className="text-[#007BFF]">Free Quote</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Tell us about your security requirements and our team will contact
            you with a customized solution tailored to your needs.
          </p>

          {/* TRUST BOX */}
          <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              ✓ Licensed Security Professionals
            </p>

            <p className="text-sm text-gray-700 mt-2">
              ✓ Fast Response Across Alberta
            </p>

            <p className="text-sm text-gray-700 mt-2">
              ✓ Customized Security Solutions
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] outline-none"
              required
            />

            <textarea
              placeholder="Describe your security needs"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#007BFF] text-white font-semibold py-3 rounded-lg hover:bg-[#005FCC] transition"
            >
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
