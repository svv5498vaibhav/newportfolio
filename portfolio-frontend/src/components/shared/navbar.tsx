"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll detection for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that's most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#F8FAFC] hover:text-[#2563EB] transition-colors"
        >
          VAIBHAV<span className="text-[#2563EB]">.DEV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === link.id
                  ? "text-[#F8FAFC]"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {/* Hover glow background */}
              <span className="nav-link-glow" />

              {/* Label */}
              <span className="relative z-10">{link.label}</span>

              {/* Animated underline indicator */}
              {activeSection === link.id && (
                <motion.div
                  className="nav-underline"
                  layoutId="nav-underline"
                  transition={{
                    type: "spring" as const,
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <motion.a
            href="/resume/VAIBHAV_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#1E293B] hover:bg-[#2563EB] text-[#F8FAFC] transition-colors border border-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </header>
  );
}
