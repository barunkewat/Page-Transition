"use client";

import { useRef } from "react";

import ReactLenis from "@studio-freight/react-lenis";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const container = useRef();

  useGSAP(
    () => {
      const text = new SplitType(".contact p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".contact p .line span", {
        y: 400,
        display: "block",
      });

      gsap.to(".contact p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="contact flex w-full h-screen" ref={container}>
        <div className="col">
          <img
            src="./portrait.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col">
          <p className="text-2xl font-medium tracking-tighter leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            similique iure, assumenda molestias vel possimus voluptatem suscipit
            accusamus ducimus non deserunt enim distinctio ipsa doloremque
            voluptatibus reiciendis eos corporis, dolore quia voluptate
            perferendis ea, ipsum corrupti! Excepturi cum pariatur ratione, nemo
            fuga molestiae, sint iure exercitationem labore maiores eum facilis
            quis voluptatibus qui, officiis sapiente quas omnis quibusdam. Fuga
            eveniet reiciendis est voluptas deleniti ipsam quam optio magni
            possimus voluptatibus.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
}
