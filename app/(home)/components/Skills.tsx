"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaReact } from "react-icons/fa";
import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: FaReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "GitHub",
      Icon: SiGithub,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "HTML5",
      Icon: SiHtml5,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center -rotate-6 justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
