import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rawBaseUrl = process.env.BACKEND_API_URL || 'https://portfolio-backend-9111.onrender.com/api';
    const apiBase = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
    const normalizedBase = apiBase.includes('/api') ? apiBase : `${apiBase}/api`;
    const backendUrl = `${normalizedBase}/stats`;
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 10 } // Lower cache time for dynamic statistics
    });

    if (!response.ok) {
      throw new Error('Backend failed to respond');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Stats Fetch Error:', error.message);
    
    // Static fallback schema
    return NextResponse.json({
      success: true,
      data: {
        dsaSolved: 70,
        hackathonsWon: 3,
        totalPageViews: 1024
      }
    });
  }
}

// Support updating page views when client page renders
export async function POST() {
  try {
    const rawBaseUrl = process.env.BACKEND_API_URL || 'https://portfolio-backend-9111.onrender.com/api';
    const apiBase = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
    const normalizedBase = apiBase.includes('/api') ? apiBase : `${apiBase}/api`;
    const backendUrl = `${normalizedBase}/stats/view`;
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Backend failed to update views');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Stats Update Error:', error.message);
    return NextResponse.json({
      success: true,
      data: { totalPageViews: 1025 }
    });
  }
}
