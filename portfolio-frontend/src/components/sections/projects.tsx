"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '@/lib/api';
import Image from "next/image";
import SectionReveal from '@/components/animations/SectionReveal';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
// Slug-to-cover-image mapping for regular project cards
const PROJECT_COVER_IMAGES: Record<string, string> = {
  'airbnb-clone': '/images/airbnb.png',
  'personal-portfolio': '/images/pimage.png',
};

interface ProjectItem {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  views: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    apiFetch('/api/projects')
      .then(data => {
        if (data.success && data.data) {
          // Sort to ensure CampusX is always the first item in the list
          const sorted = [...data.data].sort((a, b) => {
            if (a.slug === 'campus-x') return -1;
            if (b.slug === 'campus-x') return 1;
            return 0;
          });
          setProjects(sorted);
        }
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const featuredProject = projects.find(p => p.slug === 'campus-x');
  const regularProjects = projects.filter(p => p.slug !== 'campus-x');

  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-[#0F172A] flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
          <span className="text-[#94A3B8] text-sm">Compiling Portfolio Works...</span>
        </div>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-[#0F172A] flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[#94A3B8] text-sm">Unable to load projects. Please try again later.</span>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">My Work</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Featured Projects</h3>
            <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </div>
        </SectionReveal>

        {/* 1. Featured Split Project Layout (CampusX) */}
        {featuredProject && (
          <motion.div
            className="glass-panel rounded-2xl overflow-hidden border border-white/5 grid grid-cols-1 lg:grid-cols-12 hover:border-[#2563EB]/40 transition-colors duration-300 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Visual Layer (Left 7 Cols) */}
            <div className="lg:col-span-7 min-h-[300px] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">

              <Image
                src="/images/campusx.png"
                alt="CampusX Platform"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute top-4 left-4 z-10">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Project
                </span>
              </div>

            </div>

            {/* Content Details (Right 5 Cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/25 text-[10px] font-semibold text-[#2563EB] tracking-wide uppercase">
                  Featured Project
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">{featuredProject.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{featuredProject.summary}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#0F172A] border border-white/5 text-xs text-[#2563EB] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="text-xs font-semibold text-[#F8FAFC] hover:text-[#2563EB] flex items-center gap-2 transition-colors"
                >
                  <Eye className="w-4 h-4" /> View Full Case Study
                </button>
                <div className="flex gap-3">
                  {featuredProject.githubUrl && (
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
                      <GithubIcon className="w-4.5 h-4.5" />
                    </a>
                  )}
                  {featuredProject.liveUrl && (
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Standard Grid Layout (Airbnb, Portfolio) */}
        {regularProjects.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {regularProjects.map((project) => (
              <motion.div
                key={project._id}
                className="glass-panel rounded-xl overflow-hidden border border-white/5 flex flex-col group hover:border-[#2563EB]/40 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Visual Cover */}
                <div className="h-48 bg-gradient-to-br from-[#1E293B] to-[#0F172A] relative border-b border-white/5 overflow-hidden">
                  {PROJECT_COVER_IMAGES[project.slug] ? (
                    <Image
                      src={PROJECT_COVER_IMAGES[project.slug]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-[#94A3B8]/50 font-bold text-lg select-none">
                        {project.title}
                      </span>
                    </div>
                  )}
                  {/* Dark overlay for text readability + blue tint on hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h4 className="text-xl font-bold text-[#F8FAFC]">{project.title}</h4>
                  <p className="text-sm text-[#94A3B8] line-clamp-3 leading-relaxed">{project.summary}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#0F172A] border border-white/5 text-[10px] font-semibold text-[#94A3B8]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 mt-auto border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-[#F8FAFC] hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-4 h-4" /> Case Study
                    </button>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
                          <GithubIcon className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              className="glass-panel w-full max-w-3xl rounded-xl border border-white/10 max-h-[85vh] overflow-y-auto shadow-2xl relative flex flex-col"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-[#1E293B] z-10">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">{selectedProject.title} Case Study</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-[#0F172A] hover:bg-[#2563EB]/10 border border-white/5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">The Challenge</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{selectedProject.description.split('\n')[0] || selectedProject.summary}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">The Solution</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {selectedProject.description.split('\n')[1] || 'Designed a robust technical solution leveraging modern web rendering protocols, clean modular code abstractions, and database indexing optimizations to achieve 100/100 performance scores.'}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">Key Highlights</h4>
                  <ul className="list-disc pl-5 text-sm text-[#94A3B8] space-y-2">
                    <li>Dynamic, responsive data mapping matching mobile viewport standards.</li>
                    <li>Highly optimized rendering flows to prevent layout shifts.</li>
                    <li>Connected to dynamic rest modules.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-[#0F172A] border border-white/5 text-xs text-[#94A3B8]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/5 flex justify-end gap-4 bg-[#1E293B]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 hover:bg-[#334155] text-[#F8FAFC] font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" /> Source Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
