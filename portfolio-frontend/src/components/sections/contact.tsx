"use client";

import React, { useState } from 'react';
import { Send, Mail, MapPin, Copy, Check } from 'lucide-react';
import { apiFetch } from '@/lib/api';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('svv5498@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: '' });

    try {
      // Direct call to Centralized API Helper
      const data = await apiFetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      setStatus({ type: 'success', msg: data.message || 'Message sent successfully! Vaibhav will get back to you shortly.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus({ type: 'error', msg: err.message || 'Failed to submit form. Please email directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">Get In Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Contact Message Terminal</h3>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-xl font-bold text-[#F8FAFC]">Let's collaborate</h4>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              I am open to B.Tech internships, full-time associate developer placements, startup prototyping sprints, and custom freelance assignments.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1E293B] border border-white/5 rounded-lg text-[#2563EB]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-[#94A3B8] block">Email Address</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] truncate block">svv5498@gmail.com</span>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 bg-[#1E293B] hover:bg-[#2563EB]/10 border border-white/5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1E293B] border border-white/5 rounded-lg text-[#7C3AED]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] block">Current Location</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] block">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex gap-4 pt-4 border-t border-white/5">
              <a href="https://github.com/vaibhav-sawarbandhe" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1E293B] border border-white/5 hover:border-[#2563EB] rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/vaibhav-sawarbandhe" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1E293B] border border-white/5 hover:border-[#2563EB] rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 glass-panel p-8 rounded-xl border border-white/5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-[#F8FAFC]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Jane Doe"
                  className="px-4 py-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-[#2563EB] focus:outline-none text-sm text-[#F8FAFC] transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-[#F8FAFC]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. jane@company.com"
                  className="px-4 py-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-[#2563EB] focus:outline-none text-sm text-[#F8FAFC] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-semibold text-[#F8FAFC]">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="e.g. Collaboration Proposal / Job Opening"
                className="px-4 py-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-[#2563EB] focus:outline-none text-sm text-[#F8FAFC] transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-semibold text-[#F8FAFC]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your requirements or interview details..."
                className="px-4 py-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-[#2563EB] focus:outline-none text-sm text-[#F8FAFC] transition-all resize-none"
              />
            </div>

            {status.type && (
              <div className={`p-4 rounded-lg text-xs font-semibold border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-500' : 'bg-red-500/10 border-red-500/30 text-red-500'}`}>
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#1E293B] disabled:text-[#94A3B8] disabled:border-white/5 border border-transparent text-white font-semibold text-sm transition-all"
            >
              {loading ? 'Transmitting Message...' : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
