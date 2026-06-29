import React from "react";
import {
  CheckCircle2,
  BadgeDollarSign,
  RefreshCcw,
  Headset,
  HardHat,
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
    name: "James R.",
    text: "Western Eagle Security did an excellent job securing our construction site. Their guards were always present, alert, and professional throughout the project.",
  },
  {
    name: "Emily S.",
    text: "We had ongoing issues with theft before hiring them. After their team was assigned, our site stayed completely secure with no incidents.",
  },
  {
    name: "Daniel K.",
    text: "Very reliable construction site security. They controlled access properly and ensured only authorized workers entered the site.",
  },
  {
    name: "Sophia M.",
    text: "Their guards were punctual and very attentive. We felt confident leaving expensive equipment on-site knowing it was protected.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const ConstructionSecurity = () => {
  return (
    <div className="bg-white font-sans antialiased selection:bg-[#D4AF37]/20">
      {/* Custom Stylesheet Injection for Swiper Light Theme Accent */}
      <style>{`
        .testimonialSwiper .swiper-button-next,
        .testimonialSwiper .swiper-button-prev {
          color: #B8860B !important;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .testimonialSwiper .swiper-button-next:hover,
        .testimonialSwiper .swiper-button-prev:hover {
          opacity: 1;
        }
        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        .testimonialSwiper .swiper-pagination-bullet {
          background: #B8860B;
        }
      `}</style>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 px-6 md:px-12 bg-gradient-to-b from-[#FAF8F3] to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#B8860B] font-semibold text-xs uppercase tracking-wider">
              🚧 Construction Protection
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.15]">
              Reliable Construction Site <br />
              <span className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
                Security Services in Alberta
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Western Eagle Security provides professional construction site
              security services designed to protect tools, machinery, materials,
              and workers. We help prevent theft, vandalism, and unauthorized
              access on active construction sites across Alberta.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Our trained security guards ensure 24/7 site protection, monitor
              entry and exit points, and maintain strict access control to keep
              your project safe and on schedule.
            </p>
          </div>

          {/* Right Box - Premium Luxury White & Gold */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(212,175,55,0.08)] border border-gray-100 lg:mt-0 max-w-[420px] w-full ml-auto min-h-[340px] flex flex-col justify-between group">
            {/* Top Golden Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"></div>

            {/* Subtle Glow Backdrop */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#D4AF37]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/10"></div>

            <div className="relative z-10 space-y-5">
              {/* Heading */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF8F3] border border-[#D4AF37]/20 shadow-sm text-[#B8860B]">
                  <HardHat className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Need Site Protection?
                </h3>
              </div>

              {/* Content */}
              <p className="leading-relaxed text-gray-500 text-[14px]">
                Contact us today for reliable construction site security
                solutions tailored to your project requirements.
              </p>
            </div>

            {/* Premium Golden Button */}
            <div className="relative z-10 pt-6">
              <a
                href="/contact"
                className="group flex items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5 transition-all duration-300 w-full"
              >
                <span className="text-sm tracking-wide shadow-sm">
                  Obtain a Free Quote
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL CONSTRUCTION SECURITY */}
      <section className="py-20 lg:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Top Row */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image with Elegant Framing */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 pointer-events-none"></div>
              <img
                src="/About.png"
                alt="Construction Site Security Guards"
                className="w-full rounded-2xl shadow-xl border border-gray-100 object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <p className="text-[#B8860B] font-bold text-xs uppercase tracking-widest mb-2">
                  Construction Security
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight">
                  On-Site Construction Security You Can Trust
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                We provide trained security guards for construction sites to
                protect valuable equipment, materials, and ongoing work
                activities.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our team ensures strict access control, site monitoring, and
                incident prevention throughout all project phases.
              </p>

              {/* Upgraded Modern Checkmarks Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "24/7 Site Monitoring",
                  "Equipment & Material Protection",
                  "Access Control & Visitor Logs",
                  "Theft & Vandalism Prevention",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F3] border border-gray-100"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#D4AF37] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="border-t border-gray-100 pt-20">
            <div className="max-w-3xl mb-12">
              <p className="text-[#B8860B] font-bold text-xs uppercase tracking-widest mb-2">
                Tailored Security Solutions
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] mb-4">
                Customized Construction Security Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that every construction site has different risks
                and requirements. Our security solutions are designed to match
                your project size, timeline, and budget.
              </p>
            </div>

            {/* Interactive Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-[400px] mb-12 group border border-gray-100">
              <img
                src="https://placehold.co/1600x500/111111/FFFFFF?text=Add+Site+Photo+Here"
                alt="Security guard patrolling a construction site"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 md:left-10 text-white space-y-1">
                <span className="px-3 py-1 text-[11px] font-semibold bg-[#D4AF37] text-black uppercase tracking-wider rounded-md">
                  Vigilance Always
                </span>
                <p className="font-bold text-xl md:text-2xl mt-2">
                  Protecting your equipment, materials & timeline
                </p>
              </div>
            </div>

            {/* Grid layout for project types */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Residential Construction Sites",
                "Commercial Projects",
                "Industrial Construction",
                "Renovation Sites",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-1 rounded-full bg-[#D4AF37]/10">
                    <CheckCircle2 size={16} className="text-[#B8860B]" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#FAF8F3]/50 via-[#FAF8F3] to-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#B8860B] font-bold text-xs uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-extrabold text-[#111111] tracking-tight">
              Benefits of Choosing Our Team
            </h2>
          </div>

          {/* Luxury White Grid Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BadgeDollarSign size={26} />,
                title: "Competitive Pricing",
                text: "We provide professional construction security services at competitive rates, delivering exceptional value without compromising on safety, reliability, or service quality.",
              },
              {
                icon: <RefreshCcw size={26} />,
                title: "Flexible Solutions",
                text: "Every site has unique security requirements. We create customized construction security plans that adapt to your project, timeline, and budget.",
              },
              {
                icon: <Headset size={26} />,
                title: "Exceptional Service",
                text: "Our team builds lasting relationships through clear communication, responsive support, and a commitment to providing a professional experience for every client.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#FAF8F3] border border-gray-100 flex items-center justify-center mb-6 text-[#B8860B] group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8860B] group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (Clean & Light Gold Luxury Theme) */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Outer Shell - Soft Ivory/Cream Luxury Shadow Box */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#FAF8F3] to-white shadow-[0_20px_60px_rgba(212,175,55,0.08)] px-6 md:px-16 py-14 border border-[#D4AF37]/20">
            {/* Top Border Indicator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"></div>

            {/* Ambient Soft Golden Radial Glows */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#B8860B]/5 blur-2xl pointer-events-none"></div>

            {/* Quote Minimal Decorative Design */}
            <Quote className="absolute top-10 left-10 w-24 h-24 text-[#D4AF37]/10 pointer-events-none" />

            {/* Heading */}
            <div className="relative z-10 text-center mb-10">
              <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#B8860B] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#D4AF37]/20">
                Testimonials
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                What Our Clients Say
              </h2>
            </div>

            {/* Swiper JS Custom Setup for Light Layout */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              loop
              className="testimonialSwiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-2xl mx-auto text-center pb-12 px-4">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>

                    {/* Feedback Quote */}
                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed italic">
                      "{item.text}"
                    </p>

                    {/* Avatar Initials Badge & Name */}
                    <div className="mt-8 flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white font-bold text-sm shadow-md shadow-[#D4AF37]/20">
                        {getInitials(item.name)}
                      </div>

                      <h4 className="mt-3 text-base font-bold text-[#111111]">
                        {item.name}
                      </h4>

                      <span className="text-xs text-gray-400 mt-0.5 font-medium">
                        Verified Client
                      </span>
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

export default ConstructionSecurity;
