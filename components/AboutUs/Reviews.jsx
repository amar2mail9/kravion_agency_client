"use client";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    { name: "Alice", feedback: "Amazing work! Highly recommended." },
    { name: "Bob", feedback: "Professional and timely delivery." },
    { name: "Charlie", feedback: "Creative solutions and excellent support." },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-white">
      <motion.h2
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-500 mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-gray-900/70 border border-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition duration-300"></div>

            <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
              “{review.feedback}”
            </p>
            <h4 className="text-emerald-400 font-semibold text-xl">
              {review.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
