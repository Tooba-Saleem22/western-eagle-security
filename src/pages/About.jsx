const About = () => {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center text-black">
          <p className="uppercase tracking-widest text-[#007BFF] font-semibold mb-4">
            About Western Eagle Security
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Protecting Alberta's Businesses, Properties, and Communities
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-800">
            Western Eagle Security delivers professional, reliable, and
            customized security services designed to safeguard people,
            properties, and assets across Alberta.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/about-company.jpg"
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
            <div className="bg-white p-10 shadow-sm border">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide dependable security services that protect people,
                property, and assets while maintaining the highest standards of
                professionalism, accountability, and service excellence.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm border">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">Why Choose Us</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              Trusted Security Professionals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Licensed & Trained Guards",
              "Fast Response Coverage",
              "Customized Security Plans",
              "Professional Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="border p-8 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0A2540]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">
              Industries We Serve
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              Security Solutions For Every Sector
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Construction Sites",
              "Commercial Buildings",
              "Residential Communities",
              "Warehouses",
              "Retail Stores",
              "Corporate Offices",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border p-6 text-center font-semibold text-[#0A2540]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#007BFF] font-semibold mb-3">Our Core Values</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              The Principles Behind Our Service
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We act with honesty, professionalism, and transparency.",
              },
              {
                title: "Reliability",
                desc: "Clients can count on us whenever security matters.",
              },
              {
                title: "Safety",
                desc: "Protecting people and property is our highest priority.",
              },
              {
                title: "Excellence",
                desc: "We strive to exceed expectations in every assignment.",
              },
            ].map((value, index) => (
              <div key={index} className="border p-8">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0A2540] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            "24/7 Availability",
            "Licensed Professionals",
            "Alberta Wide Coverage",
            "Rapid Response Support",
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-[#0A2540] rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Professional Security Services?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Contact our team today and receive a customized security solution
            tailored to your property's needs.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#007BFF] text-white font-semibold hover:bg-[#005FCC] transition"
          >
            Request a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
