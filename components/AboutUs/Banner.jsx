"use client";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  return (
    <section>
      <div className="w-full h-96 relative">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          src="./about1.jpeg"
          alt="About Kraviona"
          className="w-full h-full object-cover blur-[5px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#121212]/40 via-gray-900/70 to-black/90">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#00cba9]">
                About Kraviona
              </h1>
              <p className="text-gray-50 text-lg mb-10">
                At Kraviona, we craft modern web experiences with creativity,
                performance, and style. Our team is passionate about turning
                ideas into reality and delivering outstanding digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
