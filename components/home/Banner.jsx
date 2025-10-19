"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full min-h-[88vh] flex flex-col md:flex-row items-center bg-white relative overflow-hidden px-[8%] -z-10 md:pb-0 pb-16">
      {/* ===== Left Content ===== */}
      <motion.div
        viewport={{
          once: false,
        }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mt-12 md:mt-0 z-10"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          We Build <span className="text-[#00cba9]">Creative</span>
          <br />
          Web Solutions
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Empowering brands with cutting-edge web applications, designed to
          deliver performance, aesthetics, and scalability.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 w-fit hover:bg-[#1aaf94] text-white px-7 py-3 rounded-full font-semibold shadow-md transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* ===== Right Image Section ===== */}
      <motion.div
        className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          loading="lazy"
          src="/hero.png"
          alt="Web Development"
          className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* ===== SVG Wave Behind ===== */}
      <div className="absolute bottom-0 left-0 w-full md:block hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,64L34.3,90.7C68.6,117,137,171,206,192C274.3,213,343,203,411,186.7C480,171,549,149,617,128C685.7,107,754,85,823,101.3C891.4,117,960,171,1029,176C1097.1,181,1166,139,1234,106.7C1302.9,75,1371,53,1406,42.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
