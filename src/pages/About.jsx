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

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
    image: "https://placehold.co/600x400/0B0B0C/D4AF37?text=Add+Guard+Photo",
  },
  {
    icon: Zap,
    title: "Fast Response Coverage",
    desc: "Quick action and reliable support whenever security concerns arise.",
    image: "https://placehold.co/600x400/0B0B0C/D4AF37?text=Add+Response+Photo",
  },
  {
    icon: Settings2,
    title: "Customized Security Plans",
    desc: "Tailored solutions designed around your unique property requirements.",
    image: "https://placehold.co/600x400/0B0B0C/D4AF37?text=Add+Planning+Photo",
  },
  {
    icon: ClipboardList,
    title: "Professional Reporting",
    desc: "Detailed incident reporting and clear communication for clients.",
    image:
      "https://placehold.co/600x400/0B0B0C/D4AF37?text=Add+Reporting+Photo",
  },
];

const industries = [
  {
    icon: HardHat,
    title: "Construction Sites",
    desc: "Prevent theft, vandalism, and unauthorized access.",
    image:
      "https://placehold.co/700x600/0B0B0C/D4AF37?text=Construction+Site+Photo",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Professional security for offices and business facilities.",
    image:
      "https://placehold.co/700x600/0B0B0C/D4AF37?text=Commercial+Building+Photo",
  },
  {
    icon: Home,
    title: "Residential Communities",
    desc: "Keeping residents and properties safe around the clock.",
    image: "https://placehold.co/700x600/0B0B0C/D4AF37?text=Residential+Photo",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    desc: "Protect valuable inventory and operational assets.",
    image: "https://placehold.co/700x600/0B0B0C/D4AF37?text=Warehouse+Photo",
  },
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Reduce losses and enhance customer safety.",
    image: "https://placehold.co/700x600/0B0B0C/D4AF37?text=Retail+Store+Photo",
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    desc: "Reliable protection for employees and visitors.",
    image:
      "https://placehold.co/700x600/0B0B0C/D4AF37?text=Corporate+Office+Photo",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/* Faint shield watermark echoing the eagle-shield logo mark. */
const ShieldWatermark = ({ className }) => (
  <svg
    viewBox="0 0 200 240"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 4 L190 38 V120 C190 175 150 215 100 236 C50 215 10 175 10 120 V38 Z"
      stroke="#D4AF37"
      strokeWidth="2"
    />
    <path
      d="M100 30 L165 55 V118 C165 160 136 190 100 206 C64 190 35 160 35 118 V55 Z"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
  </svg>
);

const About = () => {
  return (
    <div className="w-full bg-black">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-[#FAF8F3] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/5 blur-3xl" />

        <ShieldWatermark className="hidden lg:block absolute -right-12 -top-12 w-72 h-auto opacity-[0.05]" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[0.2em] text-[#B8860B] font-semibold mb-4 text-sm">
              About Western Eagle Security
            </p>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-[#111111] mb-6">
              Protecting Alberta's Businesses, Properties, and Communities
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Western Eagle Security delivers professional, reliable, and
              customized security services designed to safeguard people,
              properties, and assets across Alberta.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-7 py-3 rounded-full hover:bg-[#C89D22] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Golden Border */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl"></div>

            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="relative w-full rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-[#D4AF37]/20">
              <span className="bg-[#D4AF37]/10 rounded-full p-3">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </span>

              <div>
                <p className="text-sm text-gray-500">Licensed & Insured</p>
                <p className="font-bold text-[#111111]">Across Alberta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS STRIP */}
      <section className="bg-[#FAF8F3]  border-y border-[#D4AF37]/20 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#111111]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 md:border-l first:border-l-0 border-[#D4AF37]/20 px-2"
              >
                <Icon className="w-7 h-7 text-[#D4AF37] mb-1" />
                <p className="text-2xl md:text-3xl font-bold text-[#111111]">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/About.png"
              alt="Western Eagle Security"
              className="w-full rounded-xl shadow-xl shadow-[#D4AF37]/10 border border-[#D4AF37]/20"
            />
          </div>

          <div>
            <p className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-[0.2em] text-sm">
              Who We Are
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">
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
      <section className="bg-[#FAF8F3] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Mission • Vision • Values
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-5">
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
            <div className="group bg-white rounded-xl border border-[#D4AF37]/20 p-8 shadow-md hover:shadow-xl hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Target size={28} className="text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#111111] mb-3">
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
                      className="text-[#D4AF37] flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-xl border border-[#D4AF37]/20 p-8 shadow-md hover:shadow-xl hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Eye size={28} className="text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#111111] mb-3">
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
                      className="text-[#D4AF37] flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Values */}
            <div className="group bg-white rounded-xl border border-[#D4AF37]/20 p-8 shadow-md hover:shadow-xl hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} className="text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#111111] mb-3">
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
                      className="text-[#D4AF37] flex-shrink-0"
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
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-[0.2em] text-sm">
              Why Choose Us
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-4">
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
                  className="bg-white border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />

                    <span className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md border border-[#D4AF37]/20">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111111] mb-3">
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
      <section className="px-6 md:px-12 py-20 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white border border-[#D4AF37]/20 rounded-[32px] shadow-xl px-8 md:px-14 py-5 md:py-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 md:left-10 w-16 h-16 text-[#D4AF37]/15" />

            <div className="text-center mb-12">
              <p className="text-[#D4AF37] font-semibold uppercase tracking-[0.2em] mb-2 text-sm">
                Testimonials
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">
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
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                      "{item.text}"
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-[#FAF8F3] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-bold text-lg shadow-md">
                        {getInitials(item.name)}
                      </div>

                      <h4 className="text-[#111111] text-2xl font-semibold">
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

      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#FFFDF8] via-[#FAF8F3] to-[#F5F1E8] overflow-hidden">
        {/* Background Blur */}

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              Industries We Protect
            </span>

            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-bold text-[#111] leading-tight">
              Security Solutions Tailored
              <span className="block text-[#D4AF37]">To Every Environment</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
              From construction sites to corporate offices, we provide
              customized security services designed to protect people, assets,
              and operations.
            </p>
          </div>

          {/* Coverflow Slider */}

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={25}
            autoplay={{
              delay: 3500,

              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,

              dynamicBullets: true,
            }}
            coverflowEffect={{
              rotate: 0,

              stretch: 0,

              depth: 180,

              modifier: 1.5,

              scale: 0.9,

              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="industrySwiper pb-16"
          >
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index} className="!w-[380px] md:!w-[420px]">
                  <div className="group overflow-hidden rounded-[34px] bg-white border border-[#D4AF37]/15 shadow-xl hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] transition-all duration-500">
                    {/* Image */}

                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Icon */}

                      <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
                        <Icon className="h-7 w-7 text-[#D4AF37]" />
                      </div>

                      {/* Title */}

                      <div className="absolute bottom-8 left-7 right-7">
                        <h3 className="text-3xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}

                    <div className="p-8">
                      <p className="text-gray-600 leading-8 text-[15px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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

export default About;
