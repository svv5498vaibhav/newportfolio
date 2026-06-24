// Client-side fetches always use relative paths to hit Next.js API route handlers.
// The route handlers proxy requests to the backend and provide fallback data.
// No NEXT_PUBLIC_API_URL needed — avoids build-time env baking issues on Vercel.
const API_BASE_URL = '';

export async function apiFetch(endpoint: string, init?: RequestInit) {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, init);

    // Step 4: Add defensive JSON handling
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Fetch Error on ${url}: Status ${response.status}. Response text:`, errorText);
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error(`Expected JSON from ${url} but got content-type "${contentType}". Body:`, text);
      throw new Error(`Expected JSON but received non-JSON response.`);
    }

    return await response.json();
  } catch (error: any) {
    console.error(`Network or Parsing Error during fetch to ${url}:`, error.message);
    throw error;
  }
}
