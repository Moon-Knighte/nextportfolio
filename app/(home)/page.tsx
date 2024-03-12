import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black relative bg-white  dark:bg-grid-white/[0.05]">
        <div className="max-w-3xl mx-auto p-5  ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="w-full h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-40 ">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
