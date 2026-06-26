import { CheckCircle2 } from "lucide-react";

const ConciergeSecurity = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#005FCC] leading-tight mb-8">
              Trustworthy Concierge Security Services in Alberta
            </h1>

            <p className="text-gray-800 text-lg leading-8 mb-6">
              At Western Eagle Security, our concierge security services are
              designed to provide the perfect balance of safety,
              professionalism, and exceptional customer service for residential
              communities, condominiums, commercial buildings, and mixed-use
              properties across Alberta.
            </p>

            <p className="text-gray-800 text-lg leading-8">
              Concierge security goes beyond monitoring entrances. Our trained
              security professionals serve as the first point of contact for
              residents, visitors, and staff while maintaining a strong visible
              security presence. We focus on access control, visitor management,
              incident response, and creating a welcoming environment where
              people can live and work with confidence.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-[#005FCC] rounded-xl p-8 md:p-10 text-white shadow-xl lg:mt-5 min-h-[340px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-5">How Can We Help You?</h3>

            <p className="leading-7 text-white/90 mb-8">
              Contact Western Eagle Security today to discuss your concierge
              security requirements or request a customized security solution
              for your property.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-[#005FCC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Obtain a Free Quote
            </a>
          </div>
        </div>
      </section>
      {/* PROFESSIONAL CONCIERGE SECURITY */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Image */}
            <div>
              <img
                src="/About.png"
                alt="Concierge Security"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
                Concierge Security
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight mb-6">
                Concierge Security Guards Are Professionally Trained & Vetted
              </h2>

              <p className="text-gray-700 text-lg leading-8 mb-3">
                At Western Eagle Security, our concierge officers are carefully
                selected, professionally trained, and fully licensed to deliver
                dependable protection with exceptional customer service.
              </p>

              <p className="text-gray-700 text-lg leading-8 mb-5">
                From visitor management and access control to emergency
                response, our team creates a secure and welcoming environment
                for residents, employees, and guests while maintaining the
                highest standards of professionalism.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Licensed & professionally trained guards
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Background checked & thoroughly vetted
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Access control & visitor management
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Continuous supervision & quality assurance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className=" border-t border-gray-200 pt-16">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Tailored Security Solutions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Customized Concierge Security <br />
              Solutions Across Alberta
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-4">
              Western Eagle Security delivers customized concierge security
              solutions for condominiums, residential communities, commercial
              buildings, office complexes, and mixed-use properties across
              Alberta. We work closely with property managers and building
              owners to provide security services tailored to each property's
              unique requirements.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Our flexible service plans combine professional protection,
              exceptional customer service, and reliable security coverage,
              ensuring every client receives a solution that fits both their
              operational needs and budget.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Condominiums & Residential Communities
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  High-Rise & Mixed-Use Buildings
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Corporate Offices & Commercial Properties
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Luxury Residential Buildings
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConciergeSecurity;
