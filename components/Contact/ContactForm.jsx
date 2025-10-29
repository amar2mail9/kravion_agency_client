"use client";

import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const ContactForm = () => {
  return (
    <>
      {/* 🧠 SEO Configuration */}
      <NextSeo
        title="Contact Us - Kraviona"
        description="Get in touch with Kraviona for web development, app creation, or SEO services. Let's collaborate and bring your ideas to life!"
        canonical="https://kraviona.vercel.app/contact"
        openGraph={{
          url: "https://kraviona.vercel.app/contact",
          title: "Contact Us - Kraviona",
          description:
            "Reach out to Kraviona for collaborations, projects, or freelance web development opportunities.",
          images: [
            {
              url: "https://kraviona.vercel.app/l-logo.png",
              width: 800,
              height: 600,
              alt: "Kraviona Contact Page",
            },
          ],
          siteName: "Kraviona",
        }}
        twitter={{
          handle: "@kraviona",
          site: "@kraviona",
          cardType: "summary_large_image",
        }}
      />

      {/* 💬 Contact Section */}
      <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
          {/* 🔹 Left: Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-br from-[#00cba9] to-[#007f73] text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Reach out for collaborations, projects, or just a friendly chat.
            </p>
            <ul className="space-y-3 text-lg">
              <li>📍 Patna, Bihar, India</li>
              <li>📞 +91 9608553167</li>
              <li>✉️ amar47kumar47@gmail.com</li>
            </ul>
            <div className="flex gap-5 mt-8">
              <a href="#" className="text-white text-2xl hover:opacity-80">
                🌐
              </a>
              <a href="#" className="text-white text-2xl hover:opacity-80">
                💼
              </a>
              <a href="#" className="text-white text-2xl hover:opacity-80">
                🐦
              </a>
            </div>
          </motion.div>

          {/* 🔹 Right: Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#00cba9] mb-6">
              Send a Message
            </h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#00cba9] text-white py-3 rounded-md font-semibold hover:bg-[#009b85] transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
