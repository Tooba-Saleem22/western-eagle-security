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
      <section className="w-full bg-white pb-10">
        <img
          src="/WES.png"
          alt="WES"
          className="w-full h-auto md:h-[290px] md:object-cover object-contain block"
        />
      </section>
    </div>
  );
};

export default Home;
