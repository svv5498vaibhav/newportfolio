import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vaibhav.dev'),
  title: "Vaibhav Vikas Sawarbandhe | Full Stack Developer",
  description: "Portfolio of Vaibhav Vikas Sawarbandhe. B.Tech Computer Science Engineering student, Full Stack Developer, and 3x Hackathon Winner specializing in Next.js, Node.js, and MongoDB.",
  keywords: ["Vaibhav Vikas Sawarbandhe", "Vaibhav Sawarbandhe", "Full Stack Developer", "Nagpur", "B.Tech CSE", "CampusX", "Software Engineer"],
  authors: [{ name: "Vaibhav Vikas Sawarbandhe" }],
  openGraph: {
    title: "Vaibhav Vikas Sawarbandhe | Full Stack Developer",
    description: "Explore portfolio website projects like CampusX, Airbnb clone, and credentials of B.Tech CSE student Vaibhav Vikas Sawarbandhe.",
    url: "https://vaibhav.dev",
    siteName: "VAIBHAV.DEV",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Vikas Sawarbandhe | Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Vikas Sawarbandhe | Full Stack Developer",
    description: "Explore portfolio website projects like CampusX, Airbnb clone, and credentials of B.Tech CSE student Vaibhav Vikas Sawarbandhe.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structural Person schema data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vaibhav Vikas Sawarbandhe",
    "jobTitle": "Full Stack Developer",
    "url": "https://vaibhav.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "India",
    },
    "alumniOf": "Priyadarshini Bhagwati College of Engineering",
    "sameAs": [
      "https://github.com/vaibhav-sawarbandhe",
      "https://linkedin.com/in/vaibhav-sawarbandhe"
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0F172A] text-[#F8FAFC] antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
