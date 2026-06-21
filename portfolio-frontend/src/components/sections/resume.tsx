import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">Qualifications</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Curriculum Vitae</h3>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto glass-panel p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#7C3AED]/40 transition-colors duration-300">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-4 bg-[#0F172A] rounded-xl border border-white/5 text-[#2563EB] hidden sm:block">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#F8FAFC]">Looking for a copy of my resume?</h4>
              <p className="text-sm text-[#94A3B8] mt-1 max-w-md">
                Get a comprehensive breakdown of my academic path, complete course modules, technical certifications, and build logs.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="/resume/VAIBHAV_RESUME.pdf"
              download="Vaibhav_Sawarbandhe_Resume.pdf"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            <a
              href="/resume/VAIBHAV_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1E293B] border border-white/5 hover:bg-[#334155] text-[#F8FAFC] text-sm font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> View Fullscreen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
