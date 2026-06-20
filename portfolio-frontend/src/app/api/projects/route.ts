import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:5000/api/projects';
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 } // Cache projects list for 60 seconds
    });

    if (!response.ok) {
      throw new Error('Backend failed to respond');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Projects Fetch Error:', error.message);
    
    // Static fallback schema in case MongoDB is unseeded or backend server is offline
    return NextResponse.json({
      success: true,
      data: [
        {
          _id: "campusx",
          title: "CampusX",
          slug: "campus-x",
          summary: "A student-focused networking and achievement collaboration platform where students share accomplishments and pitch startup ideas.",
          description: "Built a centralized system mapping achievements to student profiles and providing real-time feed updates using Next.js App Router for server-rendered page assets and custom APIs.",
          techStack: ["Next.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
          githubUrl: "https://github.com/svv5498/campusx",
          liveUrl: "https://campusx.dev",
          views: 154
        },
        {
          _id: "airbnb",
          title: "Airbnb Clone",
          slug: "airbnb-clone",
          summary: "A fully responsive booking platform offering dynamic room listing views, calendar searches, and checkout simulations.",
          description: "Developed atomic React layout grid items combined with database locking configurations to prevent duplicate reservation errors.",
          techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
          githubUrl: "https://github.com/svv5498/airbnb-clone",
          liveUrl: "https://airbnb-clone.dev",
          views: 82
        },
        {
          _id: "portfolio",
          title: "Personal Portfolio",
          slug: "personal-portfolio",
          summary: "This premium SaaS-inspired website showcasing skills, hackathons, and dynamic visitor and view logs.",
          description: "Implemented font optimization structures, server-rendered components, and dynamic asynchronous import setups for overlay modals.",
          techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
          githubUrl: "https://github.com/svv5498/portfolio",
          liveUrl: "https://vaibhav.dev",
          views: 245
        }
      ]
    });
  }
}
