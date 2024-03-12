import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className=" min-h-[30vh] flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-semibold">
          Delighted to meet you! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-yellow-500">
            {"I'm Anjan."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I'm a web developer passionate about building a modern, responsive web application that users want."
          }
        </p>
        <Link
          href={"mailto: aannjbsnt3@gmail.com"}
          className="inline-block group"
        >
          <div>
            <h1 className="text-lg font-bold group-hover:text-yellow-500 transition-all">
              Contact Me 📧
            </h1>
            <div className="w-30 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-30 h-2 bg-red-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-x-3 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-20 h-20 rounded-2xl bg-yellow-500"></div>
            <div className="w-20 h-20 rounded-full bg-red-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-20 h-20 rounded-2xl bg-red-500"></div>
            <div className="w-24 h-24 rounded-full bg-yellow-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-16 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="1rem" className="p-3 font-semibold">
            <p> 💻 Available for work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
