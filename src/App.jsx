import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCube,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Toaster } from "react-hot-toast";

function App() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index); // Navigate to slide
      setActiveIndex(index); // Update navbar highlight
    }
  };

  return (
    <>
      <div className="flex min-h-screen ">
        {/* Sidebar Navigation */}

        <Navbar activeIndex={activeIndex} goToSlide={goToSlide} />

        {/* Swiper Section */}
        <div className="flex-1 h-screen w-[calc(100vw-230px)] p-4 pb-14 sm:p-8 sm:pr-14 bg-gray-800 ">
          <Swiper
            ref={swiperRef}
            effect="cube"
            grabCursor={true}
            speed={1550}
            loop={false}
            modules={[EffectCube, Pagination, Navigation, Keyboard, Mousewheel]}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
            pagination={{ clickable: true }}
            // navigation
            className="w-full h-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              <Home goToSlide={goToSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <About />
            </SwiperSlide>
            <SwiperSlide>
              <Projects />
            </SwiperSlide>
            <SwiperSlide>
              <Gallery />
            </SwiperSlide>
            <SwiperSlide>
              <Contact />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
