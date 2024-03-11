import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-3xl mx-auto p-5">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
