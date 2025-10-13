import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-gray-950">
      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col-reverse  md:flex-row items-center justify-between px-6 md:px-20 py-12 -z-2">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-sky-700 animate-pulse text-4xl sm:text-6xl font-semibold capitalize leading-tight">
            Ready for any web <br /> projects
          </h2>

          <p className="mt-6 text-gray-700 max-w-md mx-auto md:mx-0">
            We’re a design studio that creates beautiful digital products,
            brands and experiences for amazing companies and disruptive
            startups.
          </p>

          <button className="mt-8 animate-bounce bg-sky-600 flex gap-2 items-center justify-center md:justify-start text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-all duration-300">
            Get Started <MdArrowOutward />
          </button>
        </div>

        {/* Right content (image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/hero-img.svg"
            alt="Hero Illustration"
            className="w-[85%] md:w-[100%] animate-pulse h-auto object-contain"
          />
        </div>
      </div>

      {/* SVG wave background with reduced height */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="relative -z-10"
      >
        {" "}
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L34.3,122.7C68.6,149,137,203,206,218.7C274.3,235,343,213,411,181.3C480,149,549,107,617,90.7C685.7,75,754,85,823,112C891.4,139,960,181,1029,186.7C1097.1,192,1166,160,1234,170.7C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L0,0Z"
        ></path>{" "}
      </svg>
    </section>
  );
};
