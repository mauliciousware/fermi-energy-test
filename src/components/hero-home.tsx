import { useEffect, useState } from "react";

export default function HeroHome() {
  const [stars, setStars] = useState(null);

  return (
    <section className="relative isolate pt-14 min-h-screen">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/video/videofermi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary">
          <span className="text-primary "> Tech Co-founder</span> 
          <br /> {/* New line added here */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white tracking-wide">
            as a Service{" "}
          </span>
        </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our templated code and processes are available for free and{" "}
            <span className="text-primary">
              trusted by {stars ? stars : "hundreds of"} developers
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://cal.com/amirali-tabrizi/30min"
              className="rounded-md bg-primary px-5 py-3 text-md font-semibold text-black shadow-sm hover:bg-primary/80 hover:text-black hover:no-underline"
            >
              Let's Meet!
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffca28] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
