"use client";

import { useState, useEffect, memo } from "react";

const roles = [
  "Full Stack Developer",
  "Startup Builder",
  "Hackathon Winner",
  "Problem Solver",
  "AI Enthusiast",
  "MERN Developer",
];

const TYPE_SPEED = 50;
const DELETE_SPEED = 30;
const PAUSE_END = 2000;
const PAUSE_BETWEEN = 500;

/**
 * Typewriter effect that cycles through role titles.
 * - Types character by character, pauses, deletes, then moves to next.
 * - Uses setTimeout chain (no setInterval) for precise control.
 * - Fixed min-height prevents layout shift.
 * - Memoized — only internal state drives renders.
 */
function TypewriterRolesInner() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        // Finished typing — pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_END);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        // Finished deleting — pause then move to next role
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, PAUSE_BETWEEN);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="min-h-[2.5em] sm:min-h-[3em] flex items-center">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2563EB] via-[#6D5BF7] to-[#7C3AED] bg-clip-text text-transparent leading-snug">
        {text}
      </span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </div>
  );
}

const TypewriterRoles = memo(TypewriterRolesInner);
export default TypewriterRoles;
