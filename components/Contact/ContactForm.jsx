"use client";

import React from "react";
import { motion } from "framer-motion";
// import { FaGlobeAfrica } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen bg-[#0d1117] flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* 🔹 Left: Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gradient-to-br from-[#1c1e1e] to-[#022c28] text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          <p className="text-gray-100 mb-6 leading-relaxed">
            Feel free to reach out for collaborations, projects, or just a friendly chat.
          </p>
         <ul className="space-y-3 text-lg text-gray-100">
  {/* <li className="flex items-center gap-3">
    <MapPin className="text-[#ff6106]" size={22} />
    Patna, Bihar, India
  </li> */}

  <li className="flex items-center gap-3">
    <Phone className="text-[#74fb07]" size={22} />
    +91 9608553167
  </li>

  <li className="flex items-center gap-3">
    <Mail className="text-[#e0e5e4]" size={22} />
    amar47kumar47@gmail.com
  </li>
</ul>
      {/* import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"; */}

<div className="flex gap-6 mt-8 text-3xl">
  {/* 🔹 Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61581932435948"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1877F2] hover:scale-110 transition-transform"
  >
    <FaFacebook />
  </a>

  {/* 🔹 Instagram */}
  <a
    href="https://www.instagram.com/kraviona/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E4405F] hover:scale-110 transition-transform"
  >
    <FaInstagram />
  </a>

  {/* 🔹 YouTube */}
  <a
    href="https://www.youtube.com/@Kraviona1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#FF0000] hover:scale-110 transition-transform"
  >
    <FaYoutube />
  </a>

  {/* 🔹 LinkedIn */}
  <a
    href="https://in.linkedin.com/in/amarkumar96085"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A66C2] hover:scale-110 transition-transform"
  >
    <FaLinkedin />
  </a>
</div>


        </motion.div>

        {/* 🔹 Right: Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[#161b22] p-10 rounded-2xl shadow-lg border border-[#30363d]"
        >
          <h2 className="text-3xl font-bold text-[#00cba9] mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#0d1117] border border-[#30363d] text-white p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0d1117] border border-[#30363d] text-white p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full bg-[#0d1117] border border-[#30363d] text-white p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#00cba9] text-white py-3 rounded-md font-semibold hover:bg-[#00b99b] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
