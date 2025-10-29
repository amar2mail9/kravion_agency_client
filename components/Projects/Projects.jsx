import React from "react";
import { projects } from "@/Data/changableData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
