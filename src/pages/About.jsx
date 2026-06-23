import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-[#007BFF] font-semibold mb-4">
              About Western Eagle Security
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#0A2540] mb-6">
              Protecting Alberta's Businesses, Properties, and Communities
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Western Eagle Security delivers professional, reliable, and
              customized security services designed to safeguard people,
              properties, and assets across Alberta.
            </p>
          </div>

          <div>
            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div>
            <p className="text-[#007BFF] font-semibold mb-3">Who We Are</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Security You Can Depend On
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Western Eagle Security is a trusted provider of professional
              security services throughout Alberta. We specialize in delivering
              customized protection solutions for commercial properties,
              construction sites, residential communities, and private clients.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our team is committed to maintaining the highest standards of
              professionalism, reliability, and customer service. We work
              closely with every client to understand their unique security
              requirements and provide solutions that ensure confidence and
              peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">
              Mission & Vision
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 shadow-sm border hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Target size={30} className="text-[#007BFF]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide dependable security services that protect people,
                property, and assets while maintaining the highest standards of
                professionalism, accountability, and service excellence.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm border hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Eye size={30} className="text-[#007BFF]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To become Alberta’s most trusted security partner by delivering
                innovative, reliable, and client-focused security solutions that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">Why Choose Us</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Trusted Security Professionals
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering dependable security services with professionalism,
              experience, and a commitment to protecting what matters most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Licensed & Trained Guards",
                desc: "Professional security personnel trained to handle a variety of situations.",
              },
              {
                title: "Fast Response Coverage",
                desc: "Quick action and reliable support whenever security concerns arise.",
              },
              {
                title: "Customized Security Plans",
                desc: "Tailored solutions designed around your unique property requirements.",
              },
              {
                title: "Professional Reporting",
                desc: "Detailed incident reporting and clear communication for clients.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <img
                  src="/About.png"
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">
              Industries We Protect
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Security Solutions Tailored To Every Environment
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              From construction sites to corporate offices, we provide
              customized security services designed to protect people, assets,
              and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Sites",
                desc: "Prevent theft, vandalism, and unauthorized access.",
              },
              {
                title: "Commercial Buildings",
                desc: "Professional security for offices and business facilities.",
              },
              {
                title: "Residential Communities",
                desc: "Keeping residents and properties safe around the clock.",
              },
              {
                title: "Warehouses",
                desc: "Protect valuable inventory and operational assets.",
              },
              {
                title: "Retail Stores",
                desc: "Reduce losses and enhance customer safety.",
              },
              {
                title: "Corporate Offices",
                desc: "Reliable protection for employees and visitors.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/About.png"
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <h3 className="absolute bottom-4 left-5 text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto relative">
          {/* Soft Transparent Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/70 via-[#00A3FF]/60 to-[#005FCC]/70 rounded-2xl"></div>

          <div className="relative p-14 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Need Professional Security Services?
            </h2>

            <p className="text-blacknn/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get trained security professionals for your property. Reliable,
              fast, and trusted protection across Alberta.
            </p>

            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#007BFF] font-semibold rounded-full shadow-md hover:scale-105 transition duration-300"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
