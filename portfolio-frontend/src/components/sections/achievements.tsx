"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Star, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '@/lib/api';

interface AchievementItem {
  _id: string;
  title: string;
  organization: string;
  dateString: string;
  description: string;
  category: 'hackathon' | 'startup' | 'quiz' | 'academic' | 'other';
  rank: number;
}

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/achievements')
      .then(data => {
        if (data.success && data.data) {
          setAchievements(data.data);
        }
      })
      .catch(err => console.error('Error fetching achievements:', err))
      .finally(() => setLoading(false));
  }, []);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  if (loading) {
    return (
      <section id="achievements" className="py-20 bg-[#0F172A] flex items-center justify-center min-h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
          <span className="text-[#94A3B8] text-sm">Compiling Achievements Timeline...</span>
        </div>
      </section>
    );
  }

  return (
    <section id="achievements" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">My Milestones</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Achievements & Honors</h3>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <motion.div 
          className="relative border-l border-white/5 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item) => (
            <motion.div 
              key={item._id} 
              className="relative group"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 bg-[#0F172A] border border-white/10 group-hover:border-[#2563EB] rounded-full transition-colors duration-300 z-10">
                <Star className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>

              {/* Timeline content */}
              <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-3 hover:border-[#2563EB]/25 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#2563EB] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#94A3B8]">{item.organization}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0F172A] border border-white/5 text-xs text-[#94A3B8]">
                    <Calendar className="w-3 h-3" /> {item.dateString}
                  </span>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
