import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  HardHat,
  ConciergeBell,
  Car,
  Route,
  Moon,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Building2,
  Clock,
  Zap,
  HeartHandshake,
  Phone,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Static Security Guard",
    description:
      "Reliable on-site security guards providing property protection, visitor management, and incident prevention.",
    points: ["Property Protection", "Visitor Control", "Incident Prevention"],
  },
  {
    icon: HardHat,
    title: "Construction Site Security",
    description:
      "Protect tools, materials, heavy equipment, and construction sites from theft and vandalism.",
    points: ["Site Monitoring", "Access Control", "Equipment Protection"],
  },
  {
    icon: ConciergeBell,
    title: "Concierge Security",
    description:
      "Professional front desk security providing visitor management, access control, and exceptional customer service.",
    points: ["Visitor Management", "Front Desk Security", "Building Safety"],
  },
  {
    icon: Car,
    title: "Mobile Patrol Services",
    description:
      "Scheduled and random patrols with detailed reporting and rapid security response.",
    points: ["Perimeter Checks", "Alarm Response", "Patrol Reports"],
    badge: "Most Requested",
  },
  {
    icon: Route,
    title: "Mobile Patrol (1–2 Visits)",
    description:
      "Short patrol visits designed for low-risk commercial and residential properties.",
    points: ["1–2 Patrol Visits", "Exterior Inspection", "Incident Reporting"],
  },
  {
    icon: Moon,
    title: "Night Patrol",
    description:
      "Overnight patrol services with perimeter inspections and property security checks.",
    points: ["Overnight Patrol", "Lock Checks", "Full Property Inspection"],
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Years Protecting Alberta" },
  { icon: Users, value: "50+", label: "Trained Security Guards" },
  { icon: Building2, value: "200+", label: "Properties Protected" },
  { icon: Clock, value: "24/7", label: "Always Available" },
];

const Pricing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
              Western Eagle Security
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8">
              Premium Security Solutions Across Alberta
            </h1>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Western Eagle Security provides licensed and professional security
              services tailored to businesses, construction sites, residential
              communities, and commercial properties throughout Alberta.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-10">
              Whether you require on-site guards, mobile patrols, concierge
              security, or overnight protection, our experienced team delivers
              reliable security solutions designed around your property's unique
              requirements.
            </p>

            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-72">
              <img
                src="https://placehold.co/1200x500/D4AF37/FFFFFF?text=Add+Team+Photo+Here"
                alt="Western Eagle Security guards on patrol"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-white font-semibold text-lg">
                Protecting Alberta properties, every hour of every day
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#D4AF37] rounded-xl p-8 md:p-10 shadow-xl text-black flex flex-col justify-center min-h-[340px]">
            <h3 className="text-2xl font-bold mb-5 text-black">
              Get a Free Quote
            </h3>

            <p className="leading-7 text-black mb-6">
              Contact Western Eagle Security today for a customized security
              solution designed specifically for your business or property.
            </p>

            <div className="mb-8">
              <p className="text-black border-black text-sm uppercase tracking-wider">
                Call Us
              </p>

              <h2 className="text-3xl font-bold mt-2 text-black">
                587-664-7683
              </h2>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-black/50  bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8962d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ArrowRight className="w-4 h-4" />
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS STRIP */}
      <section className="bg-[#1A1A1A] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 md:border-l first:border-l-0 border-white/10 px-2"
              >
                <Icon className="w-7 h-7 text-[#D4AF37] mb-1" />
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
              Our Services & Rates
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Professional Security Services
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              Professional onsite security solutions tailored for commercial
              buildings, construction sites, residential communities, and
              private properties across Alberta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                >
                  {service.badge && (
                    <span className="absolute -top-3 right-6 bg-[#D4AF37] text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                      {service.badge}
                    </span>
                  )}

                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 text-gray-700 mb-8">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t">
                    <Link
                      to="/contact"
                      className="flex items-center gap-1 font-semibold text-[#D4AF37] hover:text-[#b8962d] transition"
                    >
                      Contact for Pricing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING INFORMATION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#FFFDF8] via-[#FFF8EA] to-[#F8F2E3] p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Top Golden Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />

            <p className="uppercase tracking-[4px] font-semibold mb-4 text-[#D4AF37]">
              Pricing Information
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Customized Pricing for Every Property
            </h2>

            <p className="text-lg leading-8 text-gray-700 max-w-3xl mx-auto mb-6">
              Every property has unique security requirements. Final pricing
              depends on the size of your property, level of risk, hours of
              coverage, and the specific security services you require.
            </p>

            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact us today for a personalized quote tailored specifically to
              your business, property, and security requirements.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1A1A1A] border border-[#1A1A1A] px-8 py-3 rounded-full font-semibold hover:bg-[#c89e2d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" />
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* BANNER IMAGE */}
      <section className="px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96">
            <img
              src="https://placehold.co/1600x600/D4AF37/FFFFFF?text=Add+Patrol+Photo+Here"
              alt="Western Eagle Security mobile patrol"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/30 to-transparent flex items-center">
              <div className="px-8 md:px-14 max-w-lg">
                <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
                  See Us In Action
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Visible patrols, faster response, safer properties
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Why Businesses Trust Western Eagle Security
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Licensed Professionals
              </h3>

              <p className="text-gray-600 leading-7">
                Our experienced security guards are fully licensed, trained, and
                committed to providing dependable protection.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Fast Response
              </h3>

              <p className="text-gray-600 leading-7">
                We respond quickly to incidents while maintaining proactive
                patrols and continuous property monitoring.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
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

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F3]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-[#D4AF37]/20 rounded-3xl shadow-xl p-12 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#111111] mb-6">
              Need Professional Security Services?
            </h2>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get trained security professionals for your property. Reliable,
              fast, and trusted protection across Alberta.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full shadow-md hover:bg-[#C89D22] transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Request a Free Quote
              </a>

              <a
                href="tel:5876647683"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#D4AF37] text-[#111111] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
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
