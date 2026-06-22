"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import OrbitRing from "@/components/ui/OrbitRing";
import TypewriterRoles from "@/components/ui/TypewriterRoles";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

// Orchestrator for the entire left column
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

// Generic fade-up for single elements (badge, description, CTA row)
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Per-word variant for the name heading
const wordVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Profile image entrance
const imageVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 18, delay: 0.3 },
  },
};

// Social icon container stagger
const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.8 },
  },
};

const socialIconVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Scroll indicator
const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.6, duration: 0.8 },
  },
};

const bounceTransition = {
  y: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};

// Achievement card stagger
const achievementContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const achievementCardVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const achievements = [
  { emoji: "🏆", text: "3x Hackathon Winner" },
  { emoji: "💻", text: "70+ DSA Problems Solved" },
  { emoji: "🚀", text: "CampusX Founder" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  // Split name into words for staggered word-by-word animation
  const nameWords = ["Vaibhav", "Vikas", "Sawarbandhe."];

  // Social links data
  const socials = [
    {
      href: "https://github.com/svv5498vaibhav",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://www.linkedin.com/in/vaibhavsvv/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "mailto:svv5498@gmail.com",
      label: "Email",
      icon: FaEnvelope,
    },
    {
      href: "https://instagram.com/_vaibhavv_vv_",
      label: "Instagram",
      icon: FaInstagram,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* ---- Animated Gradient Background ---- */}
      <div className="hero-gradient-bg" aria-hidden="true">
        <div className="hero-gradient-orb hero-gradient-orb--blue" />
        <div className="hero-gradient-orb hero-gradient-orb--purple" />
        <div className="hero-gradient-orb hero-gradient-orb--cyan" />
      </div>

      {/* ---- Grid Content ---- */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center self-center lg:self-start px-4 py-1.5 rounded-full bg-[#1E293B]/80 border border-white/5 text-xs text-[#2563EB] font-semibold tracking-wide uppercase backdrop-blur-sm"
          >
            <span className="hero-badge-dot" />
            Available for Internships &amp; Placement
          </motion.div>

          {/* Name — word by word */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle — Typewriter Role Animation */}
          <motion.div variants={fadeUp}>
            <TypewriterRoles />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Specializing in high-performance web applications, robust backends,
            and rapid product development. CSE Student at PBCOE.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            {/* Explore Projects — gradient shine sweep */}
            <motion.a
              href="#projects"
              className="hero-cta-primary group relative px-7 py-3.5 rounded-xl font-semibold text-white text-center overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Explore Projects</span>
              {/* Gradient shine sweep on hover */}
              <span className="hero-cta-shine" />
            </motion.a>

            {/* Download Resume — lift + shadow */}
            <motion.a
              href="/resume/VAIBHAV_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary px-7 py-3.5 rounded-xl font-semibold text-[#F8FAFC] text-center border border-white/10 bg-[#1E293B]/80 backdrop-blur-sm"
              whileHover={{
                y: -3,
                boxShadow: "0 14px 40px -6px rgba(37, 99, 235, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Achievement Glass Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            variants={achievementContainerVariants}
          >
            {achievements.map((item) => (
              <motion.div
                key={item.text}
                className="achievement-glass-card"
                variants={achievementCardVariant}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <span className="achievement-emoji">{item.emoji}</span>
                <span className="achievement-text">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image + Orbit + Socials */}
        <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
          {/* Profile image wrapper with orbit ring */}
          <div className="relative">
            {/* Orbiting Tech Stack */}
            <OrbitRing />

            {/* Floating profile image */}
            <motion.div
              className="profile-glow profile-float relative w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] bg-[#1E293B] rounded-[24%] overflow-hidden border border-white/10"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                rotate: 1,
                scale: 1.03,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Vaibhav Vikas Sawarbandhe"
                width={350}
                height={350}
                priority
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-5 justify-center mt-8"
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="hero-social-icon"
                variants={socialIconVariant}
                whileHover={{
                  scale: 1.25,
                  rotate: 360,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5 relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-xs font-medium text-[#94A3B8]/70 tracking-widest uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={bounceTransition}
        >
          <ChevronDown className="w-5 h-5 text-[#2563EB]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
