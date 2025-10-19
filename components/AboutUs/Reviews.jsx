"use client";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    { name: "Alice", feedback: "Amazing work! Highly recommended." },
    { name: "Bob", feedback: "Professional and timely delivery." },
    { name: "Charlie", feedback: "Creative solutions and excellent support." },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#00cba9] mb-12"
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
            className="bg-gray-50 rounded-xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 italic mb-4">"{review.feedback}"</p>
            <h4 className="text-[#00cba9] font-semibold">{review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
