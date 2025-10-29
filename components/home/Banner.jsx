"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-br from-gray-900 via-[#001f1d] to-black text-center overflow-hidden px-6">
      {/* ===== Animated Background Lights ===== */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#00cba9]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#007f73]/20 rounded-full blur-3xl"
      />

      {/* ===== Text Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6">
          Transforming Ideas Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#007f73]">
            Digital Reality
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We craft scalable, high-performance web solutions that empower your
          business and inspire your audience — built with precision, passion,
          and purpose.
        </p>
      </motion.div>

      {/* ===== Decorative Wave ===== */}
      <div className="absolute bottom-0 left-0 w-full hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,186.7C672,181,768,139,864,133.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
