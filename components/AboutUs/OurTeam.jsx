"use client";
import { motion } from "framer-motion";

const OurTeam = () => {
  const members = [
    {
      name: "Amar Kumar",
      role: "Founder & Developer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
    {
      name: "John Smith",
      role: "Backend Developer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-white">
      <motion.h2
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-500 mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Team
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative bg-gray-900/70 border border-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition duration-300"></div>

            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-emerald-500 shadow-lg mb-5 object-cover"
            />
            <h3 className="text-xl font-semibold text-emerald-400 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
