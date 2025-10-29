"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaCloud,
  FaPalette,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Building fast, responsive, and modern websites using React, Next.js, and MERN Stack.",
      icon: <FaCode />,
      color: "#00cba9",
    },
    {
      title: "Backend Development",
      desc: "Secure and scalable REST APIs built with Node.js, Express, and MongoDB for powerful server-side apps.",
      icon: <FaServer />,
      color: "#4DB33D",
    },
    {
      title: "App Development",
      desc: "Modern cross-platform mobile applications using React Native and Flutter.",
      icon: <FaMobileAlt />,
      color: "#00d5ff",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your site’s visibility with advanced SEO strategies, analytics, and Google optimization.",
      icon: <FaSearch />,
      color: "#FFD700",
    },
    {
      title: "Cloud Deployment",
      desc: "Fast and reliable hosting with AWS, Vercel, and Render — optimized for performance.",
      icon: <FaCloud />,
      color: "#00bfff",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, engaging, and interactive user interfaces that provide a stunning digital experience.",
      icon: <FaPalette />,
      color: "#ff4db8",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#050a14] text-white">
      {/* 🟢 Banner Section */}
      <section className="relative w-full py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00111f] via-[#001c2b] to-[#000000] opacity-95"></div>
        <div className="absolute w-[700px] h-[700px] bg-[#00cba9]/25 blur-[180px] rounded-full -top-60 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#00d5ff]/25 blur-[180px] rounded-full bottom-0 right-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00eaff]"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-gray-300 mt-6 text-lg max-w-2xl mx-auto"
        >
          We offer cutting-edge development and design services that bring your
          digital ideas to life — fast, elegant, and reliable.
        </motion.p>
      </section>

      {/* 🔷 Services Grid */}
      <section className="relative mt-[50px]  z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 pb-24 max-w-7xl mx-auto">
        {services.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 35px ${srv.color}60`,
            }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40 transform rotateY-[10deg] rotateX-[5deg] transition-all duration-500 hover:border-[#00cba9]/40"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: `0 0 20px 2px ${srv.color}20, inset 0 0 15px 0 ${srv.color}10`,
            }}
          >
            <span
              className="text-5xl mb-4 drop-shadow-lg"
              style={{ color: srv.color }}
            >
              {srv.icon}
            </span>
            <h2 className="text-xl font-semibold mb-3 text-white">
              {srv.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Services;
