"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  const squircleMotion = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } as any
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center self-center lg:self-start px-3 py-1 rounded-full bg-[#1E293B] border border-white/5 text-xs text-[#2563EB] font-semibold tracking-wide uppercase">
            Available for Internships & Placement
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-none">
            Vaibhav Vikas Sawarbandhe. <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Full Stack Developer & Startup Builder.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-[#94A3B8] max-w-xl mx-auto lg:mx-0">
            Full Stack Developer specializing in high-performance web applications, robust backends, and rapid product development. CSE Student at PBCOE.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-center transition-all shadow-lg hover:shadow-indigo-500/10"
            >
              Explore Projects
            </a>
            <a
              href="/resume/VAIBHAV_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#1E293B] hover:bg-[#334155] border border-white/5 text-[#F8FAFC] font-semibold text-center transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
          <motion.div
            className="profile-glow relative w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] bg-[#1E293B] rounded-[24%] overflow-hidden border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
            initial="initial"
            animate="animate"
            variants={squircleMotion}
            whileHover={{ rotate: 1 }}
          >
            <Image
              src="/images/profile.png"
              alt="Vaibhav Vikas Sawarbandhe"
              width={350}
              height={350}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 justify-center mt-6"
          >
            <a
              href="https://github.com/svv5498vaibhav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhavsvv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:svv5498@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/_vaibhavv_vv_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
