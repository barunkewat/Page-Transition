"use client";
import ReactLenis from "@studio-freight/react-lenis";

export default function Projects() {
  return (
    <ReactLenis root>
      <div className="">
        <div className="w-full h-full flex flex-col items-center gap-4 p-48 object-cover">
          <img src="/img1.jpg" alt="" className="w-1/3 h-1/3 rounded-md" />
          <img src="/img2.jpg" alt="" className="w-1/3 h-1/3 rounded-md" />
          <img src="/img3.jpg" alt="" className="w-1/3 h-1/3 rounded-md" />
          <img src="/img4.jpg" alt="" className="w-1/3 h-1/3 rounded-md" />
        </div>
      </div>
    </ReactLenis>
  );
}
