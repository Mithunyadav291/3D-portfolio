import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ----- Projects Data -----
const projects = [
  {
    title: "Aora – AI Video Sharing App",
    description:
      "A React Native app where users can upload, explore, and interact with AI-powered video content. Features authentication, real-time feed, and cloud storage.",
    tech: ["React Native", "Expo", "Clerk", "Appwrite"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/mithun-aora",
    demo: "#",
  },
  {
    title: "BookStore – MERN Web App",
    description:
      "A full-stack web app for browsing, buying, and managing books. Includes authentication, cart system, and MongoDB database.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/mithun-bookstore",
    demo: "#",
  },
  {
    title: "Quizify – Mobile Learning App",
    description:
      "A React Native mobile app for courses and quizzes with progress tracking, leaderboard, and SQLite local storage.",
    tech: ["React Native", "SQLite", "Zustand"],
    image:
      "https://images.unsplash.com/photo-1584697964154-071e8d6a5f87?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/mithun-quizify",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-[90vh] text-white bg-gray-900 rounded-2xl overflow-y-auto px-4 pt-16 pb-6 sm:px-10"
    >
      <div className="mx-auto">
        {/* ----- Heading ----- */}
        <h2 className="text-4xl font-bold text-center  mb-8">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* ----- Project Cards ----- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/30 transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
