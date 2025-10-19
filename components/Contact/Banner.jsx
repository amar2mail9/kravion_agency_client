"use client";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-[#002b26] to-black flex items-center justify-center overflow-hidden px-6">
      {/* Animated background circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00cba9]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#00cba9]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#00cba9]/15 rounded-full blur-2xl animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#00cba9] mb-6">
          Let’s Build Something Amazing Together
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Have a project in mind or just want to say hello? Reach out to us —
          we’d love to collaborate and make ideas come alive.
        </p>

        {/* Call-to-Action Button
        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #00cba9" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-gradient-to-r from-[#00cba9] to-[#007f73] text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-[#00cba9]/50 transition-all"
        >
          Contact Us
        </motion.a> */}
      </motion.div>
    </section>
  );
};

export default ContactBanner;
