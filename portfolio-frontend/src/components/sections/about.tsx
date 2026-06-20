"use client";

import React, { useState, useEffect } from 'react';
import { Award, Code, Rocket, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '@/lib/api';

export default function About() {
  const [stats, setStats] = useState({ dsaSolved: 70, hackathonsWon: 3, totalPageViews: 0 });

  useEffect(() => {
    // Fetch stats
    apiFetch('/api/stats')
      .then(data => {
        if (data.success && data.data) {
          setStats(prev => ({
            ...prev,
            dsaSolved: data.data.dsaSolved || prev.dsaSolved,
            hackathonsWon: data.data.hackathonsWon || prev.hackathonsWon,
            totalPageViews: data.data.totalPageViews || prev.totalPageViews
          }));
        }
      })
      .catch(err => console.error('Error fetching stats:', err));

    // Register visitor page view
    apiFetch('/api/stats/view', { method: 'POST' })
      .then(data => {
        if (data.success && data.data) {
          setStats(prev => ({
            ...prev,
            totalPageViews: data.data.totalPageViews
          }));
        }
      })
      .catch(err => console.error('Error logging view:', err));
  }, []);

  const statsList = [
    {
      icon: <Award className="w-6 h-6 text-[#2563EB]" />,
      title: `${stats.hackathonsWon}x Hackathon Winner`,
      description: "Proven track record of building working product prototypes under tight deadlines."
    },
    {
      icon: <Code className="w-6 h-6 text-[#7C3AED]" />,
      title: `${stats.dsaSolved}+ DSA Solved`,
      description: "Data Structures & Algorithms problem solving in C++ and Python."
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#2563EB]" />,
      title: "Startup Enthusiast",
      description: "Passionate about building software products that solve real-world problems."
    },
    {
      icon: <Eye className="w-6 h-6 text-[#7C3AED]" />,
      title: `${stats.totalPageViews} Portfolio Views`,
      description: "Real-time dynamic page visit counter connected to MongoDB."
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
    <section id="about" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Student, Developer, & Builder</h3>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel: Biography */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-[#94A3B8] text-base leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I am currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> at <strong>Priyadarshini Bhagwati College of Engineering, Nagpur</strong> (2023 - 2027). My technical focus is centered on software development, full-stack frameworks, and algorithm optimization.
            </p>
            <p>
              Having worked on platforms like <em>CampusX</em> and booking solutions like an <em>Airbnb Clone</em>, I have developed strong skills in designing backend APIs, modeling relational/document schemas, and coding responsive frontend layouts.
            </p>
            <p>
              I thrive in high-pressure environments, which has led me to win three hackathons and pitch prototypes in local startup arenas. I look forward to working with dynamic engineering teams where I can contribute to shipping production code.
            </p>
          </motion.div>

          {/* Right Panel: Highlighted Stats */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {statsList.map((stat, i) => (
              <motion.div 
                key={i} 
                className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-start hover:border-[#2563EB]/40 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="p-3 bg-[#0F172A] rounded-lg border border-white/5 flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-semibold text-base">{stat.title}</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
