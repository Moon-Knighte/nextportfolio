import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

const Navbar = () => {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/anjan-basnet-b79680237/",
      Label: "Linkedin",
      Icon: FaLinkedin,
    },
    {
      Link: "https://github.com/Moon-Knighte",
      Label: "GitHub",
      Icon: FaGithub,
    },
    {
      Link: "https://www.freecodecamp.org/anjanbasnet",
      Label: "freeCodeCamp(🔥)",
      Icon: FaFreeCodeCamp,
    },
  ];

  return (
    <nav className="py-4 px-10 flex justify-between items-center">
      <h1 className="text-2xl font-semibold underline underline-offset-8 decoration-yellow-500 -rotate-2">
        Anjan <i>Basnet</i> 🇳🇵
      </h1>
      <div className="flex gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
