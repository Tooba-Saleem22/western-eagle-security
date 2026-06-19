import ContactFAQ from "../components/ContactFAQ";
import Services from "../components/services";

const Home = () => {
  return (
    <div className="m-0 p-0">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero.png')" }}
          />
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/mobile.heroo.jpg')" }}
          />
        </div>
        <div className="w-full bg-black/10 min-h-screen flex items-center">
          <div className="max-w-3xl px-6 md:px-10 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white md:text-[#0A2540] leading-tight">
              Premium Security Solutions You Can Trust Across Alberta.
            </h1>
            <p className="mt-5 text-base md:text-xl text-white/90 md:text-[#0A2540]/80">
              Licensed, professional, and reliable security services tailored to
              protect your assets and peace of mind.
            </p>
            <div className="mt-7">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-[#007BFF] text-white hover:bg-[#005FCC] transition font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT OUR COMPANY SECTION */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              About <span className="text-[#007BFF]">Our Company</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Western Eagle Security, we provide comprehensive, professional
              security solutions meticulously tailored to your specific
              operational needs. Our commitment to safety and service excellence
              ensures that your assets, premises, and personnel remain fully
              protected under the watch of highly trained industry experts.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We understand that every business faces unique challenges. By
              integrating advanced surveillance technology, data-driven risk
              assessment, and proactive on-site support, we deliver a robust
              security framework. Our goal is to provide you with absolute peace
              of mind, allowing you to focus on your core business activities
              with the confidence that your environment is secure, 24/7.
            </p>
            <div className="flex gap-12">
              <div>
                <h3 className="text-4xl font-bold text-black">250+</h3>
                <p className="text-sm mt-2 font-semibold text-[#005FCC] uppercase">
                  Project Done
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">280+</h3>
                <p className="text-sm mt-2 font-semibold text-[#005FCC] uppercase">
                  Happy Client
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">240+</h3>
                <p className="text-sm mt-2 font-semibold text-[#005FCC] uppercase">
                  Our Employees
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#FBBF24] -z-10"></div>
            <img
              src="/About.png"
              alt="Security"
              className="w-full h-auto rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Services />

      {/* OUR PROCESS SECTION */}
      <section className="w-full bg-white py-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <p className="text-[#6366f1] font-semibold mb-4">Our process</p>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              One smart approach. Four steps.
            </h2>
            <p className="text-gray-600">
              Tailored solutions for your business security needs.
            </p>
          </div>
          <div className="flex-1 border-l-2 border-gray-200 pl-8 space-y-12">
            {[
              "Contact us",
              "Assessment with a Specialist",
              "Personalized Quote",
              "Implementation & Operation",
            ].map((title, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-gray-200"></div>
                <div className="text-[#6366f1] font-bold text-xl">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#0A2540]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            We Make Your World a Safer Place.
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Benefit from Western Eagle Security, a trusted Canadian partner.
          </p>
          <img
            src="/centerimg.png"
            alt="Operations"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <ContactFAQ />
    </div>
  );
};

export default Home;
