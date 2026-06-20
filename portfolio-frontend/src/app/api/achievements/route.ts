import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:5000/api/achievements';
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Backend failed to respond');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Achievements Fetch Error:', error.message);
    
    // Static fallback schema
    return NextResponse.json({
      success: true,
      data: [
        {
          _id: "ach_01",
          title: "3x Hackathon Winner",
          organization: "Regional Hackathons",
          dateString: "2024 - 2025",
          description: "First place honors in coding sprints. Designed system flow diagrams, implemented fast prototype routing structures, and integrated multi-service backend modules.",
          category: "hackathon",
          rank: 1
        },
        {
          _id: "ach_02",
          title: "Startup Arena Winner",
          organization: "PBCOE Incubation Wing",
          dateString: "2025",
          description: "Secured top place during pitch competition for software startup prototype. Handled user-flows, operational logic diagrams, and data structure modeling.",
          category: "startup",
          rank: 2
        },
        {
          _id: "ach_03",
          title: "2x Technical Quiz Winner",
          organization: "Department Tech Fests",
          dateString: "2024",
          description: "First place honors answering technical queries about OOP paradigms, database optimizations (indexing, hashing), and web protocols.",
          category: "quiz",
          rank: 3
        },
        {
          _id: "ach_04",
          title: "70+ DSA Problems Solved",
          organization: "LeetCode & GFG",
          dateString: "Ongoing",
          description: "Continuous study of string manipulations, matrix optimizations, dynamic programming structures, and graph theory in C++ and Python.",
          category: "academic",
          rank: 4
        }
      ]
    });
  }
}
