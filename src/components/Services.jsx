import { Shield, Building2, UserCheck, Car, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Static Security Guard",
      desc: "Professional on-site security officers protecting your property, employees, and visitors around the clock.",
      link: "/services/static-security",
    },
    {
      icon: Building2,
      title: "Construction Security",
      desc: "Prevent theft, vandalism, and unauthorized access with dedicated construction site security.",
      link: "/services/construction-security",
    },
    {
      icon: UserCheck,
      title: "Concierge Security",
      desc: "Professional front desk security, visitor management, and access control for commercial properties.",
      link: "/services/concierge-security",
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      desc: "Scheduled and random patrols providing rapid response and complete property inspections.",
      link: "/services/mobile-patrol",
    },
  ];

  return (
    <section className="bg-[#050505] py-2 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white font-serif">
            Our Security
            <span className="text-[#D4AF37]"> Services</span>
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            We provide reliable and professional security solutions designed to
            safeguard people, businesses, and valuable assets throughout
            Alberta.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-[#111111] border border-[#D4AF37]/15 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_15px_45px_rgba(212,175,55,.18)]"
              >
                {/* Icon */}

                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-7 group-hover:bg-[#D4AF37] transition">
                  <Icon
                    size={32}
                    className="text-[#D4AF37] group-hover:text-black transition"
                  />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-7 mb-8">{service.desc}</p>

                {/* Link */}

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 font-semibold text-[#D4AF37] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
