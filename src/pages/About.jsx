import { Target, Eye, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    text: "Western Eagle Security provided exceptional service for our commercial property. Their guards were professional, punctual, and always alert. Highly recommended.",
  },
  {
    name: "Sarah J.",
    text: "Their team exceeded our expectations during our construction project. Reliable communication and excellent security coverage throughout.",
  },
  {
    name: "David L.",
    text: "We've worked with several security companies before, but Western Eagle Security stands out for professionalism and quick response.",
  },
  {
    name: "Emily W.",
    text: "Outstanding customer service and highly trained guards. We feel much safer knowing they are protecting our facility.",
  },
];

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

      {/* MISSION • VISION • CORE VALUES */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-semibold uppercase tracking-wider mb-3">
              Mission • Vision • Values
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-5">
              What Drives Our Commitment
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              At Western Eagle Security, we are committed to protecting people,
              businesses, and communities through trusted security services
              built on professionalism, integrity, and excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <Target size={28} className="text-[#007BFF]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                To provide dependable security services that protect people,
                properties, and assets while maintaining the highest standards
                of professionalism and accountability.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Reliable Security Solutions
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Professional Guard Services
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Client-Focused Protection
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Rapid Response
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <Eye size={28} className="text-[#007BFF]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                To become Alberta's most trusted security company by delivering
                innovative and client-focused security solutions that
                consistently exceed expectations.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Industry Leadership
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Continuous Improvement
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Long-Term Partnerships
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Service Excellence
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <ShieldCheck size={28} className="text-[#007BFF]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Our Core Values
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                We believe trust is earned through integrity, professionalism,
                and a commitment to delivering dependable security services
                every day.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Integrity
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Professionalism
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Accountability
                </li>

                <li>
                  <span className="text-[#007BFF] font-bold mr-2">✓</span>
                  Reliability
                </li>
              </ul>
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

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#4EA5FF] rounded-[32px] shadow-2xl px-8 md:px-14 py-5 md:py-12 overflow-hidden">
            <div className="text-center mb-12">
              <p className="text-black font-semibold uppercase tracking-wider mb-2">
                Testimonials
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-black">
                What Our Clients Say
              </h2>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              className="testimonialSwiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-3xl mx-auto text-center py-6">
                    <p className="text-black text-xl md:text-2xl leading-relaxed">
                      "{item.text}"
                    </p>

                    <div className="mt-8">
                      <h4 className="text-black text-2xl font-semibold">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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

            <p className="text-black/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
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
