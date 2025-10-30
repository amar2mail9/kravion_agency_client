"use client";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* ==== Background Image with Subtle Motion ==== */}
      <motion.img
        src="./about1.jpeg"
        alt="About Kraviona"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="w-full h-full object-cover blur-[4px] brightness-[0.7]"
      />

      {/* ==== Gradient Overlay ==== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/80 to-[#001f1d]/90"></div>

      {/* ==== Floating Lights ==== */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 w-[350px] h-[350px] bg-violet-500/20 rounded-full blur-3xl"
      />

      {/* ==== Centered Content ==== */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-500 drop-shadow-[0_0_20px_rgba(0,255,200,0.2)]">
            About Kraviona
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/5 px-6 py-4 rounded-2xl shadow-lg border border-white/10">
            At <span className="text-emerald-400 font-semibold">Kraviona</span>,
            we craft modern web experiences that merge innovation, design, and
            technology. Our passionate team transforms ideas into engaging,
            high-performance digital realities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
