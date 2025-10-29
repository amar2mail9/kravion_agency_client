"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* 🟩 Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4">Kraviona</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We build modern, SEO-friendly, and high-performance websites using
            Next.js, React, and Node.js to grow your online presence.
          </p>
        </motion.div>

        {/* 🟩 Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-green-400 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-green-400 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-green-400 transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-green-400 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* 🟩 Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h2>
          <ul className="space-y-2">
            <li>Website Development</li>
            <li>SEO Optimization</li>
            <li>UI/UX Design</li>
            <li>App Development</li>
          </ul>
        </motion.div>

        {/* 🟩 Column 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-white text-lg font-semibold mb-4">
            Connect With Us
          </h2>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-400 transition duration-200"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-800"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-sm mt-6 text-gray-500">
        © {year} <span className="text-green-400">Kraviona</span>. All rights
        reserved. | Designed by <span className="text-white">Amar Kumar</span>
      </div>
    </footer>
  );
}
