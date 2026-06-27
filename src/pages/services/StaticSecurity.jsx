import React from "react";
import {
  CheckCircle2,
  BadgeDollarSign,
  RefreshCcw,
  Headset,
  PhoneCall,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "James T.",
    text: "Western Eagle Security has provided exceptional static security services for our warehouse. Their guards are professional, vigilant, and always dependable.",
  },
  {
    name: "Lisa M.",
    text: "Their static security team significantly reduced unauthorized access to our commercial property. We couldn't be happier with their professionalism.",
  },
  {
    name: "Andrew C.",
    text: "We hired Western Eagle Security for our construction project, and their guards consistently protected our equipment and materials throughout the project.",
  },
  {
    name: "Karen B.",
    text: "Reliable, punctual, and highly trained. Their static security guards give our staff and visitors complete peace of mind every day.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const StaticSecurity = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#005FCC] leading-tight mb-8">
              Reliable Static Security Guard Services in Alberta
            </h1>

            <p className="text-gray-800 text-lg leading-8 mb-6">
              At Western Eagle Security, we provide professional static security
              guard services designed to protect commercial properties,
              construction sites, industrial facilities, residential
              communities, and private premises throughout Alberta. Our licensed
              security guards deliver a visible security presence that helps
              deter crime while ensuring the safety of people and property.
            </p>

            <p className="text-gray-800 text-lg leading-8">
              Our static security guards remain on-site to monitor entrances,
              control access, patrol designated areas, respond to incidents, and
              enforce security procedures. Whether you require temporary
              coverage or long-term protection, we deliver dependable security
              solutions tailored to your property's unique requirements.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-[#005FCC] rounded-xl p-8 md:p-10 text-white shadow-xl lg:mt-5 min-h-[340px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-white/15 rounded-full p-2">
                <PhoneCall className="w-5 h-5" />
              </span>
              <h3 className="text-2xl font-bold">How Can We Help You?</h3>
            </div>

            <p className="leading-7 text-white/90 mb-8">
              Contact Western Eagle Security today to discuss your static
              security guard requirements or request a customized security
              solution for your business, construction site, or property.
            </p>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#005FCC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
              >
                <ArrowRight className="w-4 h-4" />
                Obtain a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL STATIC SECURITY */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Image */}
            <div>
              <img
                src="/About.png"
                alt="Static Security Guards"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
                Static Security Guards
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight mb-6">
                Professional Static Security Guards You Can Trust
              </h2>

              <p className="text-gray-700 text-lg leading-8 mb-3">
                Western Eagle Security provides licensed, highly trained static
                security guards to safeguard commercial buildings, construction
                sites, industrial facilities, residential communities, and
                private properties across Alberta.
              </p>

              <p className="text-gray-700 text-lg leading-8 mb-5">
                Our guards maintain a visible on-site presence, monitor property
                access, prevent unauthorized entry, respond to incidents, and
                help create a safe and secure environment for employees,
                visitors, and valuable assets.
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
                    24/7 on-site property protection
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Access control & perimeter monitoring
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#005FCC] flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Theft, vandalism & incident prevention
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="border-t border-gray-200 pt-16">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Tailored Security Solutions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Customized Static Security <br />
              Services Across Alberta
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-4">
              Western Eagle Security provides customized static security
              services for commercial buildings, warehouses, construction
              projects, industrial facilities, residential communities, retail
              stores, and private properties throughout Alberta.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-10">
              We assess your property's unique risks and operational
              requirements to develop reliable security solutions that protect
              people, assets, and business operations around the clock.
            </p>

            {/* IMAGE PLACEHOLDER: swap src with a real photo of a static guard on duty */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
              <img
                src="https://placehold.co/1600x500/0A2540/FFFFFF?text=Add+Guard+Photo+Here"
                alt="Static security guard on duty at a property entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-white font-semibold text-lg">
                A visible, vigilant presence on every property we protect
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Commercial Buildings & Offices
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">Construction Sites</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Industrial Facilities & Warehouses
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#005FCC] flex-shrink-0"
                />
                <span className="text-gray-700">
                  Residential Communities & Private Properties
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 md:px-12 bg-[#005FCC]/5">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540]">
              Benefits of Choosing Us
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm border-b-4 border-transparent hover:border-[#005FCC] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BadgeDollarSign size={30} className="text-[#005FCC]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Competitive Pricing
              </h3>

              <p className="text-gray-600 leading-7">
                We provide professional static security services at competitive
                rates, delivering exceptional value without compromising on
                safety, reliability, or service quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm border-b-4 border-transparent hover:border-[#005FCC] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <RefreshCcw size={30} className="text-[#005FCC]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Flexible Solutions
              </h3>

              <p className="text-gray-600 leading-7">
                Every property has unique security requirements. We create
                customized static security plans that adapt to your property,
                operations, and budget.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm border-b-4 border-transparent hover:border-[#005FCC] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headset size={30} className="text-[#005FCC]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Exceptional Customer Service
              </h3>

              <p className="text-gray-600 leading-7">
                Our team builds lasting relationships through clear
                communication, responsive support, and a commitment to providing
                a professional experience for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#4EA5FF] rounded-[32px] shadow-2xl px-8 md:px-14 py-5 md:py-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 md:left-10 w-16 h-16 text-white/25" />

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
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-black text-xl md:text-2xl leading-relaxed">
                      "{item.text}"
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-lg shadow-md">
                        {getInitials(item.name)}
                      </div>
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
    </div>
  );
};

export default StaticSecurity;
