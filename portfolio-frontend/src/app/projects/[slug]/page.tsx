import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/sections/footer';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"     />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectDetail {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
  github: string;
  live: string;
  challenge: string;
  solution: string;
  features: string[];
}

const mockProjects: Record<string, ProjectDetail> = {
  "campus-x": {
    title: "CampusX",
    slug: "campus-x",
    summary: "A student-focused networking and achievement collaboration platform where students share accomplishments and pitch startup ideas.",
    tech: ["Next.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/svv5498/campusx",
    live: "https://campusx.dev",
    challenge: "Students often struggle to find immediate collaboration partners or receive local visibility for their achievements inside universities.",
    solution: "Built a centralized system mapping achievements to student profiles and providing real-time feed updates using Next.js App Router for server-rendered page assets and custom APIs.",
    features: ["Student profiles with dynamic milestone timelines", "Interactive idea pitch submission decks", "Secure student email authentication routing"]
  },
  "airbnb-clone": {
    title: "Airbnb Clone",
    slug: "airbnb-clone",
    summary: "A fully responsive booking platform offering dynamic room listing views, calendar searches, and checkout simulations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
    github: "https://github.com/svv5498/airbnb-clone",
    live: "https://airbnb-clone.dev",
    challenge: "Maintaining consistent page responsiveness and synchronization of booking slots during parallel user selections.",
    solution: "Developed atomic React layout grid items combined with database locking configurations to prevent duplicate reservation errors.",
    features: ["Dynamic location and date filters", "Responsive card layouts matching mobile view standards", "Simulated transaction dashboard logs"]
  },
  "personal-portfolio": {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    summary: "This premium SaaS-inspired website showcasing skills, hackathons, and dynamic visitor and view logs.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
    github: "https://github.com/svv5498/portfolio",
    live: "https://vaibhav.dev",
    challenge: "Building a personal site with 100/100 Lighthouse performance scores without compromising on premium typography or smooth slide animations.",
    solution: "Implemented font optimization structures, server-rendered components, and dynamic asynchronous import setups for overlay modals.",
    features: ["Real-time page views and visitor stats logs", "Rate-limited contact validation endpoints", "Intersection Observer navigation sync"]
  }
};

// Generate static routes at build time for instant loading
export async function generateStaticParams() {
  return [
    { slug: 'campus-x' },
    { slug: 'airbnb-clone' },
    { slug: 'personal-portfolio' },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = mockProjects[slug];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold text-[#F8FAFC]">Case Study Not Found</h1>
          <p className="text-sm text-[#94A3B8] mt-2">The requested project case study could not be resolved.</p>
          <Link href="/" className="mt-6 flex items-center gap-2 text-sm text-[#2563EB] hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Title Block */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC]">{project.title} Case Study</h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed">{project.summary}</p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">The Challenge</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{project.challenge}</p>
          </div>
          <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">The Solution</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Features & Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Key Features</h2>
          <ul className="list-disc pl-5 text-sm text-[#94A3B8] space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-[#1E293B] border border-white/5 text-xs text-[#94A3B8]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 pt-6 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1E293B] border border-white/5 hover:bg-[#334155] text-[#F8FAFC] text-sm font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> Source Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
