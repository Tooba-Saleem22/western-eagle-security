import { Briefcase, MessageCircle } from "lucide-react";

const CareersCTA = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white shadow-xl">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            {/* Left Side */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
                <Briefcase size={16} />
                Careers
              </span>

              <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#111111] font-serif leading-tight">
                Looking for a
                <span className="text-[#D4AF37]"> Security Job?</span>
              </h2>

              <div className="w-20 h-[2px] bg-[#D4AF37] rounded-full mt-6 mb-8"></div>

              <p className="text-gray-600 text-lg leading-8">
                Interested in joining Western Eagle Security? Apply directly
                through WhatsApp. Send us a message and we'll guide you through
                the application process for available security positions across
                Alberta.
              </p>
            </div>

            {/* Right Side Card */}
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCFCFC] p-8 lg:p-10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <MessageCircle size={42} className="text-[#D4AF37]" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-[#111111]">
                Apply on WhatsApp
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Click the button below to start your application. Our team will
                receive your message instantly and guide you through the next
                steps.
              </p>

              <a
                href="https://wa.me/15876647683?text=Hello%20Western%20Eagle%20Security,%20I%20would%20like%20to%20apply%20for%20a%20security%20position."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#E8C766] hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle size={22} />
                Message Us
              </a>

              <p className="mt-6 text-sm text-gray-500">
                Available 24/7 for job inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
