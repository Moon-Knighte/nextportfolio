import React from "react";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Projects = () => {
  const projects = [
    {
      title: "Magma Real Estate Agency",
      tech: [SiJavascript, SiHtml5, SiCss3],
      link: "https://magma-demo-ten.vercel.app/",
      cover: "/1.png",
      background: "bg-red-500",
    },
    {
      title: "Apple Vision Pro Clone",
      tech: [SiJavascript, SiHtml5, SiCss3, SiTailwindcss],
      link: "https://apple-clone-ruby-three.vercel.app/",
      cover: "/3.png",
      background: "bg-yellow-500",
    },
    {
      title: "Budget Visualization/ Budget Tracker",
      tech: [SiReact, SiMongodb, SiNodedotjs, SiTailwindcss],
      link: "https://budget-tracker-fawn.vercel.app/",
      cover: "/2.png",
      background: "bg-yellow-500",
    },
    {
      title: "Fairprice",
      tech: [SiTailwindcss, SiNextdotjs, SiVercel, SiGithub, SiMongodb],
      link: "https://fairprice.vercel.app/",
      cover: "/4.png",
      background: "bg-red-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 👇"
        className="flex flex-col mt-20 items-center rotate-6 justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-2 rounded-lg", project.background)}>
                <DirectionAwareHover
                  className="w-fit  space-y-5  cursor-pointer"
                  imageUrl={project.cover}
                >
                  <div className="space-y-5">
                    <h1 className="font-bold text-2xl text-lime-500">
                      {project.title}
                    </h1>

                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (
                          <Icon className="w-5 text-lime-500 h-5" key={index} />
                        );
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
