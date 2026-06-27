import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Western Eagle Security
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#005FCC] leading-tight mb-8">
              Premium Security Solutions Across Alberta
            </h1>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Western Eagle Security provides licensed and professional security
              services tailored to businesses, construction sites, residential
              communities, and commercial properties throughout Alberta.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              Whether you require on-site guards, mobile patrols, concierge
              security, or overnight protection, our experienced team delivers
              reliable security solutions designed around your property's unique
              requirements.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-[#005FCC] rounded-xl p-8 md:p-10 shadow-xl text-white flex flex-col justify-center min-h-[340px]">
            <h3 className="text-2xl font-bold mb-5">Get a Free Quote</h3>

            <p className="leading-7 text-white/90 mb-6">
              Contact Western Eagle Security today for a customized security
              solution designed specifically for your business or property.
            </p>

            <div className="mb-8">
              <p className="text-white/80 text-sm uppercase tracking-wider">
                Call Us
              </p>

              <h2 className="text-3xl font-bold mt-2">587-664-7683</h2>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-white text-[#005FCC] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}

      <section className="py-24 px-6 md:px-12 bg-[#005FCC]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Our Services & Rates
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              Professional Security Services
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              Professional onsite security solutions tailored for commercial
              buildings, construction sites, residential communities, and
              private properties across Alberta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Static Security Guard
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Reliable on-site security guards providing property protection,
                visitor management, and incident prevention.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Property Protection</li>

                <li>✔ Visitor Control</li>

                <li>✔ Incident Prevention</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Construction Site Security
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Protect tools, materials, heavy equipment, and construction
                sites from theft and vandalism.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Site Monitoring</li>

                <li>✔ Access Control</li>

                <li>✔ Equipment Protection</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Concierge Security
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Professional front desk security providing visitor management,
                access control, and exceptional customer service.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Visitor Management</li>

                <li>✔ Front Desk Security</li>

                <li>✔ Building Safety</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Mobile Patrol Services
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Scheduled and random patrols with detailed reporting and rapid
                security response.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Perimeter Checks</li>

                <li>✔ Alarm Response</li>

                <li>✔ Patrol Reports</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>{" "}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Mobile Patrol (1–2 Visits)
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Short patrol visits designed for low-risk commercial and
                residential properties.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ 1–2 Patrol Visits</li>

                <li>✔ Exterior Inspection</li>

                <li>✔ Incident Reporting</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold text-[#005FCC] mb-5">
                Night Patrol
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Overnight patrol services with perimeter inspections and
                property security checks.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Overnight Patrol</li>

                <li>✔ Lock Checks</li>

                <li>✔ Full Property Inspection</li>
              </ul>

              <div className="pt-5 border-t">
                <Link
                  to="/contact"
                  className="font-semibold text-[#005FCC] hover:text-[#0047A3] transition"
                >
                  Contact for Pricing →
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* PRICING INFORMATION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#005FCC] rounded-2xl p-10 md:p-14 text-white text-center shadow-xl">
            <p className="uppercase tracking-wider font-semibold mb-3">
              Pricing Information
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customized Pricing for Every Property
            </h2>

            <p className="text-lg leading-8 text-white/90 max-w-3xl mx-auto mb-8">
              Every property has unique security requirements. Final pricing
              depends on the size of your property, level of risk, hours of
              coverage, and the specific security services you require.
            </p>

            <p className="text-white/80 mb-10">
              Contact us today for a personalized quote tailored to your
              security needs.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-[#005FCC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12 bg-[#005FCC]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#005FCC] uppercase tracking-wider font-semibold mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              Why Businesses Trust Western Eagle Security
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center text-3xl mb-6">
                🛡️
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Licensed Professionals
              </h3>

              <p className="text-gray-600 leading-7">
                Our experienced security guards are fully licensed, trained, and
                committed to providing dependable protection.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center text-3xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Fast Response
              </h3>

              <p className="text-gray-600 leading-7">
                We respond quickly to incidents while maintaining proactive
                patrols and continuous property monitoring.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center text-3xl mb-6">
                🤝
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Tailored Security Plans
              </h3>

              <p className="text-gray-600 leading-7">
                Every security plan is customized to match your property's size,
                risks, and operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#005FCC] to-[#4EA5FF] rounded-3xl px-10 md:px-20 py-16 text-center shadow-2xl">
            <p className="uppercase tracking-widest text-white/80 font-semibold mb-4">
              Get Started Today
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Security Solution?
            </h2>

            <p className="text-white/90 text-lg leading-8 max-w-3xl mx-auto mb-10">
              Whether you require on-site security guards, mobile patrols,
              construction site protection, or concierge security, our team is
              ready to build a solution that fits your needs and budget.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-5">
              <a
                href="/contact"
                className="bg-white text-[#005FCC] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Request a Free Quote
              </a>

              <a
                href="tel:5876647683"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#005FCC] transition"
              >
                Call 587-664-7683
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
