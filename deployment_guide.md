# VAIBHAV.DEV — Implementation, Performance, & Deployment Handbook

This guide contains the final structural verification reports, lighthouse audits, and instructions for deploying the **VAIBHAV.DEV** ecosystem to production.

---

## 1. Full Stack Implementation Report

The ecosystem is fully built out across two independent workspaces, separating frontend UI presentation from backend API logic:

### A. Frontend Repository (`portfolio-frontend`)
*   **Technologies:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide icons.
*   **Active Sections:** Navbar (responsive glass header), Hero (visual squircle photo component with radial glow), About (narrative + dynamic stats), Skills (interactive hover badges), Projects (featured CampusX split grid + sub-items), Achievements (vertical timeline tracking), Resume (download and visual check triggers), Contact (reactive form with status indicator), and Footer.
*   **Animations:** Configured spring-loaded variants for all card reveals, staggered entry lists, hover lifts, and dialog overlays.
*   **Data Proxies:** Setup Next.js server routing endpoints under `/src/app/api/` proxying to the local Express backend, implementing automatic static fallbacks to guarantee high uptime.

### B. Backend Repository (`portfolio-backend`)
*   **Technologies:** Node.js, Express, MongoDB (Mongoose), Nodemailer, Express-Rate-Limit.
*   **Data Models:** Strict validation schemas for Project, Achievement, ContactMessage, and Stats models.
*   **Auto-Seeding:** Integrates Mongoose hook listener inside db client that automatically seeds database with initial project objects (e.g. CampusX, Airbnb Clone) and timeline milestones if collections are empty.
*   **Security:** Integrated rate limiter preventing contact form spam (IP-based, capped at 3 posts per hour).

---

## 2. Performance & Accessibility Audit

To ensure maximum screening efficiency for recruiters, the website is built to satisfy strict Lighthouse parameters:

### Lighthouse Goal Sheets
*   **Performance (Target: 95+):** 
    *   Dynamic, layout-shift protected squircle image sizes.
    *   Lazy loading enabled on standard visuals.
    *   Fonts loaded locally via next/font optimization structures.
*   **Accessibility (Target: 100):**
    *   Strict color contrast ratios (foreground `#F8FAFC` on background `#0F172A` yields `14.8:1`).
    *   Keyboard navigation tabs trapping inside dialogue popups.
    *   Linked labels with clear `aria-label` attributes on icon hooks.
*   **Best Practices & SEO (Target: 100):**
    *   Automatic dynamic sitemap generator in `sitemap.ts`.
    *   Robots rule configurations in `robots.ts`.
    *   Embedded structured JSON-LD Person schema.

---

## 3. Production Deployment Guide

We recommend hosting the ecosystem on modern serverless/edge environments:

```
[Vercel Edge Platform]                       [Render / Railway Node environment]
          |                                                   |
   portfolio-frontend                                  portfolio-backend
          |                                                   |
   - Connect GitHub repository                         - Set environmental PORT
   - Add BACKEND_API_URL env var                       - Set MONGODB_URI (Atlas connection)
   - Enable Next.js Edge Cache                         - Setup SMTP credentials (e.g. Gmail Pass)
```

### Step 1: Database Setup (MongoDB Atlas)
1.  Register for a free tier database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Create a cluster and secure your connection string:
    `mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio`
3.  Whitelist IP access options to allow cloud servers to write updates.

### Step 2: Backend API Service Deployment (Render / Railway)
1.  Push the `portfolio-backend` directory to a new private GitHub repository.
2.  Deploy on Render as a **Web Service** or on Railway.
3.  Configure environmental keys:
    *   `PORT=5000`
    *   `MONGODB_URI=mongodb+srv://...`
    *   `CORS_ORIGIN=https://vaibhav.dev` (Your deployed frontend address)
    *   `EMAIL_USER=svv5498@gmail.com`
    *   `EMAIL_PASS=your_gmail_app_password`
4.  Launch service and capture the live URL (e.g. `https://api.vaibhav.dev`).

### Step 3: Frontend Deployment (Vercel)
1.  Push the `portfolio-frontend` directory to a separate GitHub repository.
2.  Deploy on Vercel as a **Next.js** project.
3.  Configure environmental key:
    *   `BACKEND_API_URL=https://api.vaibhav.dev/api`
4.  Deploy. Vercel automatically runs `npm run build` and distributes optimized assets.
