import Services from "../components/services";

const Home = () => {
  return (
    <div className="m-0 p-0">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero.png')" }}
          />

          {/* Mobile */}
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/mobile.heroo.jpg')" }}
          />
        </div>

        {/* CONTENT */}
        <div className="w-full bg-black/10 min-h-screen flex items-center">
          <div className="max-w-3xl px-6 md:px-10 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white md:text-[#0A2540] leading-tight">
              Premium Security Solutions You Can{" "}
              <br className="hidden md:block" />
              Trust Across Alberta.
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

      {/* NEXT SECTION */}
      <section className="w-full bg-white pt-4 pb-10">
        <img
          src="/WES.png"
          alt="WES"
          className="w-full h-auto md:h-[290px] md:object-cover object-contain block"
        />
      </section>
      <Services />

      {/* OUR PROCESS SECTION - Updated Layout */}
      <section className="w-full bg-white py-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Side: Text */}
          <div className="flex-1">
            <p className="text-[#6366f1] font-semibold mb-4">Our process</p>
            <h2 className="text-4xl md:text-4xl font-bold text-[#0A2540] leading-tight mb-6">
              One smart approach. Four steps. A security solution tailored to
              your business
            </h2>
            <p className="text-gray-800 text-base">
              Whether you are upgrading your security or starting fresh, Western
              Eagle Security makes it easy with a customized solution built
              around your specific needs.
            </p>
          </div>

          {/* Right Side: Steps with vertical line */}
          <div className="flex-1 border-l-2 border-gray-200 pl-8 space-y-12">
            {[
              {
                num: "01",
                title: "Contact us",
                desc: "Looking for security service? Simply fill out our contact form and we will get back to you as soon as possible.",
              },
              {
                num: "02",
                title: "Assessment with a Specialist",
                desc: "Our security specialist will schedule a meeting for an on-site walkthrough or online consultation.",
              },
              {
                num: "03",
                title: "Personalized Quote",
                desc: "Based on our meeting and a risk assessment, we will send you a quote that matches your risk profile and needs.",
              },
              {
                num: "04",
                title: "Implementation & Ongoing Operation",
                desc: "After signing the contract, our teams proceed to set up your security solution and ensure a smooth start.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-gray-200"></div>
                <div className="text-[#6366f1] font-bold text-xl mb-2">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ...........................img section ............................ */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            We Make Your
            <br /> World a Safer Place.
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Benefit from Western Eagle Security, a trusted Canadian partner that
            delivers integrated security solutions. We combine advanced
            technology, rich data, and professional expertise to protect your
            business assets, so you can focus on your core mission without
            worry.
          </p>

          {/* Image Section */}
          <div className="w-full">
            <img
              src="/centerimg.png"
              alt="Western Eagle Security Operations"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
