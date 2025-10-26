"use client";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section>
      <div className="w-full h-[500px] relative">
        {/* Background Image */}
        <img
          src="/contact.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover blur-sm"
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00cba9]/40 via-gray-900/70 to-black/90">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-3xl mx-auto text-center px-4"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#00cba9]">
                Contact Us
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-10">
                Have a project in mind or just want to say hello? Reach out to
                us — we’d love to collaborate and make your ideas come alive.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
