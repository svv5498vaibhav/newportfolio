"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/animations/SectionReveal';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "JavaScript"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Workflows",
      skills: ["Git", "GitHub", "VS Code", "NPM / Yarn"]
    }
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">My Stack</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Technical Proficiencies</h3>
            <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </div>
        </SectionReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col space-y-4 hover:border-[#2563EB]/40 transition-colors duration-300"
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h4 className="text-lg font-bold text-[#F8FAFC] border-b border-white/5 pb-2">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 hover:border-[#2563EB]/30 text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
