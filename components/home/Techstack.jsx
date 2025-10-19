"use client";
import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io5";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

const Techstack = () => {
  const Technology = [
    { name: "HTML", icon: <IoLogoHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <IoLogoCss3 />, color: "#264DE4" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <IoLogoNodejs />, color: "#3C873A" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Java", icon: <FaJava />, color: "#E51F24" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  ];

  return (
    <div className="w-full flex flex-col bg-gray-100 items-center gap-8 py-16 px-6 overflow-hidden">
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl text-center text-[#00cba9] font-semibold"
      >
        Technologies Used for Development
      </motion.h1>

      {/* Running Tech Stack */}
      <div className="w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-6 w-fit"
          animate={{ x: ["0%", "-20%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Technology, ...Technology].map(({ name, icon, color }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              className="w-20 sm:w-24 h-20 sm:h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-md"
            >
              <span style={{ color }} className="text-2xl sm:text-3xl">
                {icon}
              </span>
              <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500 text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Techstack;
