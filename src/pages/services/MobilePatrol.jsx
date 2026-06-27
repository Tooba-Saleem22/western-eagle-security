import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BadgeDollarSign, RefreshCcw, Headset } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Brian H.",
    text: "Their mobile patrol service has been excellent for our property. Regular checks and detailed reports give us complete peace of mind.",
  },
  {
    name: "Jessica L.",
    text: "Very reliable patrol team. They respond quickly to alarms and always keep us updated with clear site reports and photos.",
  },
  {
    name: "Kevin D.",
    text: "We use their 24/7 mobile patrol for multiple locations. The consistency and professionalism of their team is impressive.",
  },
  {
    name: "Laura P.",
    text: "Since hiring Western Eagle Security, our parking lot and premises have remained secure with regular patrol visits and strong visibility.",
  },
];

const MobilePatrol = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#005FCC] leading-tight mb-8">
              Reliable Mobile Patrol Security Services in Alberta
            </h1>

            <p className="text-gray-800 text-lg leading-8 mb-6">
              Western Eagle Security offers professional mobile patrol services
              designed to provide fast, visible, and cost-effective security for
              commercial properties, residential communities, construction
              sites, and parking facilities across Alberta.
            </p>

            <p className="text-gray-800 text-lg leading-8">
              Our mobile patrol units conduct scheduled and random site
              inspections, check perimeters, respond to alarms, and ensure your
              property remains safe even when on-site security is not required
              full-time.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-[#005FCC] rounded-xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-center min-h-[340px]">
            <h3 className="text-2xl font-bold mb-5">
              Need Reliable Patrol Service?
            </h3>

            <p className="leading-7 text-white/90 mb-8">
              Contact us today to schedule mobile patrol services tailored to
              your property’s security needs and risk level.
            </p>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-white text-[#005FCC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Obtain a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* PROFESSIONAL MOBILE PATROL SECURITY */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Image */}
            <div>
              <img
                src="/About.png"
                alt="Mobile Patrol Security"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
                Mobile Patrol Security
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight mb-6">
                Fast & Reliable Mobile Patrol Security Services
              </h2>

              <p className="text-gray-700 text-lg leading-8 mb-3">
                Our mobile patrol security services provide visible,
                fast-response protection for properties that do not require
                full-time on-site guards.
              </p>

              <p className="text-gray-700 text-lg leading-8 mb-5">
                We conduct scheduled and random patrols to deter crime, check
                perimeters, and ensure your property remains safe 24/7.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#005FCC]" />
                  <span className="text-gray-700">
                    Scheduled & Random Patrol Visits
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#005FCC]" />
                  <span className="text-gray-700">Alarm Response Support</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#005FCC]" />
                  <span className="text-gray-700">
                    Perimeter & Parking Lot Checks
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#005FCC]" />
                  <span className="text-gray-700">
                    Incident Reporting with Updates
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-16">
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
              Tailored Security Solutions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Customized Mobile Patrol Services
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-4">
              Western Eagle Security offers flexible mobile patrol solutions
              designed for commercial properties, residential areas,
              construction sites, and parking facilities across Alberta.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Our patrol frequency is customized based on your risk level,
              property size, and security requirements to ensure maximum
              protection at all times.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#005FCC]" />
                <span className="text-gray-700">Residential Communities</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#005FCC]" />
                <span className="text-gray-700">Commercial Properties</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#005FCC]" />
                <span className="text-gray-700">Construction Sites</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#005FCC]" />
                <span className="text-gray-700">Parking Facilities</span>
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
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6">
                <BadgeDollarSign size={30} className="text-[#005FCC]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Competitive Pricing
              </h3>

              <p className="text-gray-600 leading-7">
                We provide professional concierge security services at
                competitive rates, delivering exceptional value without
                compromising on safety, reliability, or service quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm border-b-4 border-transparent hover:border-[#005FCC] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6">
                <RefreshCcw size={30} className="text-[#005FCC]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Flexible Solutions
              </h3>

              <p className="text-gray-600 leading-7">
                Every property has unique security requirements. We create
                customized concierge security plans that adapt to your building,
                operations, and budget.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm border-b-4 border-transparent hover:border-[#005FCC] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-6">
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
    </div>
  );
};

export default MobilePatrol;
