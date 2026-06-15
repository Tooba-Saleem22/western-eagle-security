const Home = () => {
  return (
    <div className="m-0 p-0 relative overflow-hidden">
      {/* DESKTOP BACKGROUND */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* MOBILE BACKGROUND (FIXED POSITION) */}
      <div
        className="md:hidden absolute inset-0 bg-contain bg-no-repeat bg-top bg-fixed"
        style={{ backgroundImage: "url('/mobile.heroo.jpg')" }}
      />

      {/* OVERLAY + CONTENT */}
      <section className="relative w-full h-screen flex items-start md:items-center bg-black/10">
        <div className="max-w-3xl px-6 md:px-10 text-left pt-10 md:pt-0">
          <h1 className="text-3xl sm:text-base mt-10 md:mt-0 md:text-6xl font-bold text-[#0A2540] leading-tight">
            Premium Security Solutions You Can{" "}
            <br className="hidden md:block" />
            Trust Across Alberta.
          </h1>

          <p className="mt-5 text-base md:text-xl text-[#0A2540]/80">
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
      </section>
    </div>
  );
};

export default Home;
