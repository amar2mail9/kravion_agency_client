"use client";
import { motion } from "framer-motion";

const Approach = () => {
  const steps = [
    { title: "Discover", desc: "Understanding client needs and goals." },
    { title: "Design", desc: "Crafting user-friendly and modern interfaces." },
    { title: "Develop", desc: "Building performant and scalable solutions." },
    { title: "Deliver", desc: "Ensuring successful deployment and support." },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <motion.h2
        className="text-4xl text-center font-extrabold text-[#00cba9] mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Approach
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-[#00cba9]/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#00cba9]">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
