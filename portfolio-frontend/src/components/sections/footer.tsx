import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F172A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-xs text-[#94A3B8]">
          &copy; {new Date().getFullYear()} Vaibhav Vikas Sawarbandhe. All rights reserved.
        </p>
        <p className="text-xs text-[#94A3B8]">
          Engineered with <span className="text-[#2563EB]">Next.js 15</span> &amp; <span className="text-[#7C3AED]">Express</span>.
        </p>
      </div>
    </footer>
  );
}
