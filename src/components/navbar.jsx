import React from "react";
import {
  Home,
  User,
  Briefcase,
  Image,
  Mail,
  Facebook,
  Github,
  Linkedin,
  FolderKanban,
  Instagram,
} from "lucide-react";

const Navbar = ({ activeIndex, goToSlide }) => {
  const menu = [
    { label: "Home", icon: <Home size={20} />, slide: 0 },
    { label: "About", icon: <User size={20} />, slide: 1 },
    // { label: "Services", icon: <Briefcase size={20} />, slide: 2 },
    { label: "Projects", icon: <FolderKanban size={20} />, slide: 2 },
    { label: "Gallery", icon: <Image size={20} />, slide: 3 },
    { label: "Contact", icon: <Mail size={20} />, slide: 4 },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex sm:w-52 md:w-60 flex-shrink-0 min-h-screen bg-gray-900 text-white flex-col justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center">LOGO</h1>
          <nav className="flex flex-col gap-3 mt-12 ">
            {menu.map((item) => (
              <button
                key={item.slide}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition ${
                  activeIndex === item.slide
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => goToSlide(item.slide)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* <div className="flex gap-4 mt-6 justify-evenly bg-gray-800 p-4 rounded-2xl hover:scale-105 transition delay-300">
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={18} />
            </a>
          </div> */}
        </div>

        {/* Footer with social icons */}
        <footer className="flex flex-col items-center gap-3 text-gray-400">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="text-xs">© 2025 Portfolio</p>
        </footer>
      </aside>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        {/* Bottom Navbar with icons + social media */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-3 shadow-lg z-50">
          {menu.map((item) => (
            <button
              key={item.slide}
              className={`flex flex-col items-center text-xs transition ${
                activeIndex === item.slide
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => goToSlide(item.slide)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

          {/* Social Icons (extra on right)
          <div className="flex gap-3 ml-2">
            <a href="#" className="hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
