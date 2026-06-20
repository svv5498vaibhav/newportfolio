import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vaibhav.dev';
  
  // Static paths
  const routes = [
    '',
    '/projects/campus-x',
    '/projects/airbnb-clone',
    '/projects/personal-portfolio',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
