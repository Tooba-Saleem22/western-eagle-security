import {
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Star,
  Phone,
  ArrowRight,
  Zap,
  Settings2,
  ClipboardList,
  HardHat,
  Building2,
  Home,
  Warehouse,
  Store,
  Briefcase,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const stats = [
  { icon: Award, value: "10+", label: "Years Protecting Alberta" },
  { icon: Users, value: "50+", label: "Trained Security Guards" },
  { icon: Building2, value: "200+", label: "Properties Protected" },
  { icon: Clock, value: "24/7", label: "Always Available" },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & Trained Guards",
    desc: "Professional security personnel trained to handle a variety of situations.",
    image: "https://placehold.co/600x400/0A2540/FFFFFF?text=Add+Guard+Photo",
  },
  {
    icon: Zap,
    title: "Fast Response Coverage",
    desc: "Quick action and reliable support whenever security concerns arise.",
    image: "https://placehold.co/600x400/0A2540/FFFFFF?text=Add+Response+Photo",
  },
  {
    icon: Settings2,
    title: "Customized Security Plans",
    desc: "Tailored solutions designed around your unique property requirements.",
    image: "https://placehold.co/600x400/0A2540/FFFFFF?text=Add+Planning+Photo",
  },
  {
    icon: ClipboardList,
    title: "Professional Reporting",
    desc: "Detailed incident reporting and clear communication for clients.",
    image:
      "https://placehold.co/600x400/0A2540/FFFFFF?text=Add+Reporting+Photo",
  },
];

const industries = [
  {
    icon: HardHat,
    title: "Construction Sites",
    desc: "Prevent theft, vandalism, and unauthorized access.",
    image:
      "https://placehold.co/700x600/0A2540/FFFFFF?text=Construction+Site+Photo",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Professional security for offices and business facilities.",
    image:
      "https://placehold.co/700x600/0A2540/FFFFFF?text=Commercial+Building+Photo",
  },
  {
    icon: Home,
    title: "Residential Communities",
    desc: "Keeping residents and properties safe around the clock.",
    image: "https://placehold.co/700x600/0A2540/FFFFFF?text=Residential+Photo",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    desc: "Protect valuable inventory and operational assets.",
    image: "https://placehold.co/700x600/0A2540/FFFFFF?text=Warehouse+Photo",
  },
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Reduce losses and enhance customer safety.",
    image: "https://placehold.co/700x600/0A2540/FFFFFF?text=Retail+Store+Photo",
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    desc: "Reliable protection for employees and visitors.",
    image:
      "https://placehold.co/700x600/0A2540/FFFFFF?text=Corporate+Office+Photo",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-[#005FCC] font-semibold mb-4">
              About Western Eagle Security
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#0A2540] mb-6">
              Protecting Alberta's Businesses, Properties, and Communities
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Western Eagle Security delivers professional, reliable, and
              customized security services designed to safeguard people,
              properties, and assets across Alberta.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#005FCC] text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-[#0047A3] transition"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 flex items-center gap-3 border border-gray-100">
              <span className="bg-[#005FCC]/10 rounded-full p-2">
                <ShieldCheck className="w-6 h-6 text-[#005FCC]" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Licensed & Insured</p>
                <p className="font-bold text-[#0A2540]">Across Alberta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS STRIP */}
      <section className="bg-[#0A2540] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 md:border-l first:border-l-0 border-white/10 px-2"
              >
                <Icon className="w-7 h-7 text-[#4EA5FF] mb-1" />
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div>
            <p className="text-[#005FCC] font-semibold mb-3">Who We Are</p>

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
            <p className="text-[#005FCC] font-semibold uppercase tracking-wider mb-3">
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
            <div className="group bg-white rounded-xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Target size={28} className="text-[#005FCC]" />
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
                {[
                  "Reliable Security Solutions",
                  "Professional Guard Services",
                  "Client-Focused Protection",
                  "Rapid Response",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-[#005FCC] flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Eye size={28} className="text-[#005FCC]" />
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
                {[
                  "Industry Leadership",
                  "Continuous Improvement",
                  "Long-Term Partnerships",
                  "Service Excellence",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-[#005FCC] flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Values */}
            <div className="group bg-white rounded-xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#005FCC]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} className="text-[#005FCC]" />
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
                {[
                  "Integrity",
                  "Professionalism",
                  "Accountability",
                  "Reliability",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-[#005FCC] flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#005FCC] font-semibold mb-3">Why Choose Us</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Trusted Security Professionals
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering dependable security services with professionalism,
              experience, and a commitment to protecting what matters most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                      <Icon className="w-5 h-5 text-[#005FCC]" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#005FCC] font-semibold mb-3">
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
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <span className="absolute top-4 left-4 bg-white/90 rounded-full p-2 shadow-md">
                      <Icon className="w-5 h-5 text-[#005FCC]" />
                    </span>

                    <h3 className="absolute bottom-4 left-5 text-white text-2xl font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#005FCC] to-[#4EA5FF] rounded-3xl shadow-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Professional Security Services?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get trained security professionals for your property. Reliable,
              fast, and trusted protection across Alberta.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#005FCC] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <ArrowRight className="w-5 h-5" />
                Request a Free Quote
              </a>

              <a
                href="tel:5876647683"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#005FCC] transition"
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

export default About;
