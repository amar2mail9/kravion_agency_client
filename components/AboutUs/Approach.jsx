"use client";
import { motion } from "framer-motion";
import { Sparkles, Code, Monitor, Rocket } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      title: "Discover",
      desc: "We start by deeply understanding your business goals, target audience, and challenges to create a clear strategy.",
      icon: <Sparkles className="w-10 h-10 text-emerald-400" />,
    },
    {
      title: "Design",
      desc: "We craft elegant, user-friendly, and responsive interfaces that enhance the user experience and brand identity.",
      icon: <Monitor className="w-10 h-10 text-emerald-400" />,
    },
    {
      title: "Develop",
      desc: "We transform designs into fully functional, scalable, and optimized web solutions using modern technologies.",
      icon: <Code className="w-10 h-10 text-emerald-400" />,
    },
    {
      title: "Deliver",
      desc: "We deploy, test, and provide continuous support to ensure smooth performance and long-term reliability.",
      icon: <Rocket className="w-10 h-10 text-emerald-400" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#000000] via-[#001412] to-[#000000] text-white overflow-hidden">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full -translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full translate-x-40 translate-y-40"></div>

      {/* 🔹 Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
          Our Approach
        </span>
      </motion.h2>

      {/* 🔹 Steps */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-gradient-to-b from-gray-900/80 to-[#001f1d]/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-emerald-400/20 transition-all duration-300"
          >
            <div className="mb-5 flex justify-center">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-emerald-400 group-hover:text-white transition">
              {step.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition leading-relaxed">
              {step.desc}
            </p>

            {/* Soft glow overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-md"></div>
          </motion.div>
        ))}
      </div>

      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
    </section>
  );
};

export default Approach;
