import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "React / React Native", icon: <FaReact />, level: 85 },
  { name: "Node.js / Express", icon: <FaNodeJs />, level: 80 },
  { name: "JavaScript / TypeScript", icon: <FaCode />, level: 90 },
  { name: "C / C++", icon: <FaCode />, level: 70 },
  { name: "Python (Basics)", icon: <FaPython />, level: 60 },
  { name: "MongoDB", icon: <FaDatabase />, level: 75 },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
];

const education = [
  {
    degree: "B.E. Computer Engineering",
    school: "Purwanchal Campus, Dharan",
    year: "2022 – Present",
  },
  {
    degree: "+2 Science",
    school: "COBASS Higher Secondary School, Biratnagar",
    year: "2020 – 2022",
  },
  {
    degree: "School Level (1-10)",
    school: "Shree Khajurgachhi Higher Secondary School, Jhapa",
    year: "2010 – 2020",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="h-[90vh] overflow-y-auto flex flex-col items-center px-4 pt-16 pb-6 sm:px-10 bg-gray-900 text-white rounded-2xl"
    >
      {/* ----- About Me ----- */}
      <div className="max-w-4xl w-full text-center space-y-4">
        <h2 className="text-4xl font-bold ">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m a Computer Engineering student at IOE, Purwanchal Campus, Dharan
          with a deep interest in software development and design. I specialize
          as a{" "}
          <span className="text-blue-400 font-semibold">Full-Stack MERN </span>
          developer and{" "}
          <span className="text-blue-400 font-semibold">React Native</span> app
          developer, building responsive web and mobile applications. I enjoy
          turning ideas into real-world solutions and exploring new tech trends.
        </p>
      </div>

      {/* ----- Skills ----- */}
      <div className="max-w-5xl w-full mt-12">
        <h3 className="text-3xl font-semibold mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col group items-center p-6 bg-gray-800 border border-blue-500 rounded-2xl shadow-md hover:shadow-blue-500/40   transition"
            >
              <span className="text-4xl mb-3 text-blue-400 group-hover:scale-110 transition">
                {skill.icon}
              </span>
              <p className="font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----- Education ----- */}
      <div className="max-w-4xl w-full mt-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Education</h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-l-4 border-blue-500 bg-gray-800 rounded-lg shadow-md hover:shadow-blue-500/40 transition"
            >
              <div>
                <h4 className="text-xl font-bold flex items-center gap-2 text-blue-400">
                  <FaGraduationCap /> {item.degree}
                </h4>
                <p className="italic text-gray-300">{item.school}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-blue-300 font-semibold">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
