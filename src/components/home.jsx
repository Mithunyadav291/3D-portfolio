import { Facebook, Github, Linkedin } from "lucide-react";
import mithunImg from "../assets/mithunImg2.png";

const Home = ({ goToSlide }) => (
  <section className="h-[90vh] overflow-y-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-16  w-full bg-gray-900 rounded-2xl ">
    {/* Text Content */}
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Hello, I’m <span className="text-blue-600">Mithun Yadav</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500">
        A passionate full-stack developer and UI/UX enthusiast. I blend code &
        creativity to build user-friendly, visually stunning web & mobile apps.
      </p>
      <div className="flex sm:hidden gap-6 text-gray-500">
        <a href="#" className="hover:text-white">
          <Facebook size={22} />
        </a>
        <a href="#" className="hover:text-white">
          <Github size={22} />
        </a>
        <a href="#" className="hover:text-white">
          <Linkedin size={22} />
        </a>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => goToSlide(2)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          View Services
        </button>
        <button
          onClick={() => goToSlide(4)}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Contact
        </button>
      </div>
    </div>

    {/* Image */}
    <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center">
      <div className="relative ">
        <span className="absolute top-0 right-0 w-1/2 h-1 border-t-6 border-blue-600"></span>
        <span className="absolute top-0 right-0 w-1 h-1/2 border-r-6 border-blue-600"></span>
        <span className="absolute bottom-0 left-0 w-1/2 h-1 border-b-6 border-blue-600"></span>
        <span className="absolute bottom-0 left-0 w-1 h-1/2 border-l-6 border-blue-600"></span>
        <img
          src={mithunImg}
          // src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
          alt="Profile"
          className="p-4 w-full h-full md:w-80 md:h-auto object-cover  shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Home;
