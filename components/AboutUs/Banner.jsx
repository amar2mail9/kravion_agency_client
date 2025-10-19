"use client";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-[#002b26] to-black text-white py-32 px-6 overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00cba9]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00cba9]/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#00cba9]">
          About Kraviona
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          At Kraviona, we craft modern web experiences with creativity,
          performance, and style. Our team is passionate about turning ideas
          into reality and delivering outstanding digital solutions.
        </p>
      </motion.div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        div.absolute.-top-20 {
          animation: float 8s ease-in-out infinite;
        }
        div.absolute.bottom-0 {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUsBanner;
