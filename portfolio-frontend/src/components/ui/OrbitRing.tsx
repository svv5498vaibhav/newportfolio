"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

interface OrbitItem {
  label: string;
  icon: React.ReactNode;
}

const techStack: OrbitItem[] = [
  { label: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
  { label: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
  { label: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#68A063]" /> },
  { label: "Express", icon: <SiExpress className="w-4 h-4 text-white" /> },
  { label: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
  { label: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-[#38BDF8]" /> },
];

/**
 * Orbiting tech stack ring that rotates around the profile image.
 * Pure CSS animation — 20s rotation, hover to pause.
 * Each icon counter-rotates to stay upright.
 */
export default function OrbitRing() {
  const count = techStack.length;

  return (
    <div className="orbit-ring" aria-hidden="true">
      {techStack.map((item, i) => {
        const angle = (360 / count) * i;
        return (
          <div
            key={item.label}
            className="orbit-item"
            style={
              {
                "--orbit-angle": `${angle}deg`,
              } as React.CSSProperties
            }
          >
            <div className="orbit-item-inner">
              {item.icon}
              <span className="orbit-label">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
