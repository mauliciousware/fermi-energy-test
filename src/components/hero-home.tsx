export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="font-wood text-7xl md:text-8xl font-extrabold tracking-wide leading-tighter mb-4"
              data-aos="zoom-y-out"
            >
              The World's Most
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary">
                Transparent Dev Agency
              </span>{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="font-mont text-xl text-white mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Our templated code and processes are{" "}
                <span className="font-semibold text-primary">
                  trusted by hundreds of developers,
                </span>{" "}
                ensuring we build solutions that serve you
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center font-body gap-4"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-black bg-primary hover:bg-black hover:text-white w-full mb-4 sm:w-auto sm:mb-0 hover:no-underline"
                    href="#0"
                  >
                    Book a Call
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-[#343434] hover:bg-black hover:text-white w-full mb-4 sm:w-auto sm:mb-0 hover:no-underline"
                    href="/docs"
                  >
                    Read Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
