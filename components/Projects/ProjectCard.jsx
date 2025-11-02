"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(0, 203, 169, 0.3)",
      }}
      className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-[#00cba9]/40 transition-all duration-300"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00cba9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card Content */}
      <div className="relative p-6 z-10">
        <h2 className="text-2xl font-semibold text-[#00cba9] mb-3">
          {project.projectName}
        </h2>

        <p className="text-gray-300 text-sm mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techUsed.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border border-[#00cba9]/30 text-[#00cba9] bg-[#00cba9]/5 hover:bg-[#00cba9]/10 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link href={`/projects/${project.slug}`}>
          <motion.button
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#00cba9] to-[#007f73] text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-[#00cba9]/40 transition-all"
          >
            View Details <ArrowRight size={18} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
