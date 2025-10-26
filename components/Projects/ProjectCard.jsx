"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
    initial={{
        opacity:0, y:0
    }}
    
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900/70 rounded-2xl shadow-md overflow-hidden border border-gray-700 hover:shadow-[#00cba9]/30 transition-all"
    >
      <div className="p-5">
        <h2 className="text-2xl font-bold text-[#00cba9] mb-2">
          {project.projectName}
        </h2>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techUsed.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#00cba9]/10 text-[#00cba9] px-2 py-1 rounded-md border border-[#00cba9]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link href={`/projects/${encodeURIComponent(project.projectName)}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00cba9] to-[#007f73] text-white font-semibold px-5 py-2 rounded-full"
          >
            View Details → 
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
