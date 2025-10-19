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
    <section className="bg-gray-50 py-24 px-6">
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#00cba9] mb-12"
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
            className="bg-white rounded-xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-[#00cba9]">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
