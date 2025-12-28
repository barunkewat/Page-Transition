"use client";

import Image from "next/image";
import icons from "../assets/icons";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

function Skill({ icon, name, isLast }) {
  return (
    <span className="indent-0 inline-block align-middle -mt-1.75">
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
        className="inline-block align-middle mr-1"
      />
      <span className="text-white align-middle">{name}</span>
      {!isLast && <span className="ml-1 mx-2 text-white/40">,</span>}
    </span>
  );
}

const frontendSkills = [
  { name: "HTML", icon: icons.html },
  { name: "CSS", icon: icons.css },
  { name: "JavaScript", icon: icons.js },
  { name: "React", icon: icons.react },
  { name: "Tailwind CSS", icon: icons.tailwind },
  { name: "GSAP", icon: icons.gsap },
  { name: "Framer Motion", icon: icons.motion },
];

const backendSkills = [
  { name: "Express.js", icon: icons.express },
  { name: "MongoDB", icon: icons.mongodb },
];

const version = [{ name: "Git", icon: icons.git }];

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(".about p", {
        types: "lines",
        lineClass: "line",
      });

      gsap.set(".about p .line", {
        y: 120,
        opacity: 0,
      });

      gsap.to(".about p .line", {
        y: 0,
        opacity: 1,
        duration: 1.6,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.2,
      });

      return () => text.revert();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="about flex h-dvh px-24 pt-24">
      <div className="col w-1/3 text-2xl leading-7 text-white/40">
          <p className="mb-8">
            Hi, I’m <span className="text-white">Barun Kewat</span>, a
            passionate web developer with a strong foundation in building modern
            and dynamic web applications.
            <br />I specialize in frontend development using{" "}
            {frontendSkills.map((skill, i) => (
              <Skill
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                isLast={i === frontendSkills.length - 1}
              />
            ))}{" "}
            to craft responsive and visually engaging interfaces.
          </p>

          <p>
            On the backend, I work with{" "}
            {backendSkills.map((skill, i) => (
              <Skill
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                isLast={i === backendSkills.length - 1}
              />
            ))}{" "}
            to develop efficient, scalable server-side solutions. With a solid
            grasp of full-stack development and{" "}
            {version.map((skill, i) => (
              <Skill
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                isLast={i === version.length - 1}
              />
            ))}
            . I focus on creating intuitive user experiences while continuously
            learning and evolving with the latest technologies.
          </p>
      </div>

      <div className="flex-1 flex justify-end">
        {/* <img
          src="/sam.png"
          alt="Portrait"
          className="object-cover opacity-80"
        /> */}
      </div>
    </div>
  );
}
