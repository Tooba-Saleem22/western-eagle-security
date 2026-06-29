import CareersCTA from "../components/CareersCTA";
import ContactFAQ from "../components/ContactFAQ";
import Services from "../components/services";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  PhoneCall,
  ClipboardList,
  FileText,
  Settings2,
  Briefcase,
  Users,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  { icon: PhoneCall, title: "Contact us" },
  { icon: ClipboardList, title: "Assessment with a Specialist" },
  { icon: FileText, title: "Personalized Quote" },
  { icon: Settings2, title: "Implementation & Operation" },
];

const credentials = [
  { icon: ShieldCheck, label: "Licensed & Bonded" },
  { icon: Clock, label: "24/7 Dispatch" },
  { icon: Users, label: "Background-Checked Guards" },
  { icon: Zap, label: "Rapid Response" },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Guards",
    desc: "Every officer is fully licensed, background-checked, and insured for your protection.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock coverage and rapid dispatch whenever you need us.",
  },
  {
    icon: Settings2,
    title: "Customized Security Plans",
    desc: "Tailored protection plans built around your property's specific risks.",
  },
  {
    icon: ClipboardList,
    title: "Detailed Reporting",
    desc: "Clear incident reports and transparent communication on every shift.",
  },
];

const careerPoints = [
  "Competitive Pay & Flexible Shifts",
  "Static, Mobile & Concierge Positions",
  "Ongoing Training & Support",
  "Opportunities Across Alberta",
];

/* Faint shield watermark echoing the eagle-shield logo mark.
   Used as a quiet recurring signature on dark sections. */
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

const GoldDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
);

const Home = () => {
  return (
    <div className="m-0 p-0 bg-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen  overflow-hidden flex items-center bg-[#050505]">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="hidden md:block w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage: "url('/hero.png')",
            }}
          />

          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/mobile.heroo.jpg')",
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        {/* Gold Glow */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#D4AF37]/10 blur-[120px]" />

        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[140px]" />

        {/* Content */}
        <div className="relative max-w-7xl mt-14 mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Construction Security
              <span className="mx-3 text-[#D4AF37]/60">•</span>
              Mobile Patrol
              <span className="mx-3 text-[#D4AF37]/60">•</span>
              Concierge
            </span>

            {/* Heading */}

            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-white">
              Professional
              <span className="block text-[#D4AF37]">Security Services</span>
              For Every Industry
            </h1>

            {/* Gold Line */}

            <div className="mt-8 w-32 h-1 rounded-full bg-[#D4AF37]" />

            {/* Paragraph */}

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-8 max-w-2xl">
              Western Eagle Security provides licensed security guards, mobile
              patrol services, concierge security, and construction site
              protection across Alberta with a commitment to safety,
              professionalism, and rapid response.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex mb-20 flex-wrap gap-5">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#D4AF37] px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-[#E8C766] shadow-[0_10px_35px_rgba(212,175,55,.35)]"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:5876647683"
                className="inline-flex items-center gap-3 rounded-lg border border-[#D4AF37] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
            Scroll
          </span>

          <div className="w-[2px] h-14 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* CREDENTIALS BAR */}
      <section className="bg-[#0B0B0C] border-y border-white/10 py-7 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {credentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2 text-white/80">
                <Icon className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm md:text-base font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT OUR COMPANY SECTION */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Who We Are
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-[#D4AF37]">Our Company</span>
            </h2>

            <p className="text-black/80 text-lg mb-6 leading-relaxed">
              At Western Eagle Security, we provide comprehensive, professional
              security solutions meticulously tailored to your specific
              operational needs. Our commitment to safety and service excellence
              ensures that your assets, premises, and personnel remain fully
              protected under the watch of highly trained industry experts.
            </p>

            <p className="text-black/80 text-lg mb-8 leading-relaxed">
              We understand that every business faces unique challenges. By
              integrating advanced surveillance technology, data-driven risk
              assessment, and proactive on-site support, we deliver a robust
              security framework. Our goal is to provide you with absolute peace
              of mind, allowing you to focus on your core business activities
              with the confidence that your environment is secure, 24/7.
            </p>

            <div className="flex gap-10 md:gap-12 pt-6 border-t border-white/10">
              <div>
                <Briefcase className="w-6 h-6 text-[#D4AF37] mb-2" />
                <h3 className="text-3xl font-bold text-black">250+</h3>
                <p className="text-sm mt-2 font-semibold text-[#D4AF37] uppercase tracking-wide">
                  Project Done
                </p>
              </div>
              <div>
                <Users className="w-6 h-6 text-[#D4AF37] mb-2" />
                <h3 className="text-3xl font-bold text-black">280+</h3>
                <p className="text-sm mt-2 font-semibold text-[#D4AF37] uppercase tracking-wide">
                  Happy Client
                </p>
              </div>
              <div>
                <ShieldCheck className="w-6 h-6 text-[#D4AF37] mb-2" />
                <h3 className="text-3xl font-bold text-black">240+</h3>
                <p className="text-sm mt-2 font-semibold text-[#D4AF37] uppercase tracking-wide">
                  Our Employees
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#8B6914] -z-10"></div>
            <img
              src="/About.png"
              alt="Security"
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Services />

      {/* WHY CHOOSE US */}
      <section className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">
              Trusted Security Professionals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white border border-black/15 rounded-xl p-7 hover:border-[#D4AF37]/60 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* OUR PROCESS SECTION */}
      <section className="relative w-full bg-white py-24 px-6 md:px-24 overflow-hidden">
        <ShieldWatermark className="hidden lg:block absolute -left-20 -bottom-20 w-80 h-auto opacity-[0.05]" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Left Side */}
          <div className="flex-1">
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#111111] font-serif leading-tight">
              One Smart Process.
              <br />
              Four Simple Steps.
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">
              We follow a simple and transparent process to understand your
              security requirements and deliver the right protection for your
              business or property.
            </p>

            {/* Replace image later */}
            <div className="hidden md:block mt-10 overflow-hidden rounded-2xl border-4 border-[#D4AF37]/20 shadow-xl">
              <img
                src="https://placehold.co/700x500/f8f8f8/D4AF37?text=Your+Security+Image"
                alt="Our Process"
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 relative">
            {/* Timeline */}
            <div className="absolute left-5 top-4 bottom-4 w-[2px] bg-[#D4AF37]/30"></div>

            <div className="space-y-10">
              {processSteps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <div key={i} className="relative flex gap-6 group">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                      <Icon size={22} className="text-black" />
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-[#D4AF37] font-bold text-sm tracking-widest">
                        STEP 0{i + 1}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold text-[#111111]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-gray-600 leading-7">
                        We ensure every step is handled professionally to
                        deliver reliable security services tailored to your
                        needs.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CAREERS SECTION */}
      <section className="w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
              We're Hiring
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#111111] font-serif leading-tight">
              Build Your Career
              <span className="text-[#D4AF37]"> With Us</span>
            </h2>

            <div className="w-24 h-1 rounded-full bg-[#D4AF37] mt-6 mb-8"></div>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Western Eagle Security is looking for professional, dependable,
              and motivated security personnel. If you're passionate about
              protecting people and property, we'd love to hear from you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {careerPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/15 bg-[#FAFAFA] p-4 hover:border-[#D4AF37]/40 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#222] font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-8 py-4 text-black font-bold hover:bg-[#E8C766] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
            >
              <Briefcase className="w-5 h-5" />
              Apply Today
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            {/* Gold Border */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A67C00]"></div>

            <img
              src="https://placehold.co/700x650/F8F8F8/D4AF37?text=Careers+Image"
              alt="Careers"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl border border-[#D4AF37]/20 px-6 py-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Hiring Across
              </p>

              <h4 className="text-xl font-bold text-[#111111]">Alberta</h4>
            </div>
          </div>
        </div>
      </section>
      {/* IMAGE SECTION */}
      <section className="w-full bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.18em] text-xs font-semibold">
            Trusted Protection
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#111111] font-serif leading-tight">
            We Make Your World
            <span className="text-[#D4AF37]"> A Safer Place.</span>
          </h2>

          <div className="mt-5 mb-8 flex justify-center">
            <div className="w-14 h-[2px] rounded-full bg-[#D4AF37]"></div>
          </div>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8 mb-16">
            Benefit from Western Eagle Security, a trusted Canadian partner
            delivering dependable protection, professional service, and complete
            peace of mind.
          </p>

          {/* Image */}
          <div className="relative max-w-5xl mx-auto">
            {/* Gold Frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A67C00]"></div>

            <img
              src="/centerimg.png"
              alt="Western Eagle Security"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-[#D4AF37]/20 rounded-2xl shadow-xl px-8 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Certified Protection
                </p>

                <h4 className="font-bold text-[#111111]">
                  Licensed & Insured Across Alberta
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFAQ />
      <CareersCTA />
    </div>
  );
};

export default Home;
