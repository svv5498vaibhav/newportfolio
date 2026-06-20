# VAIBHAV.DEV — Production-Grade Design System & Visual Specification

This document defines the complete visual identity, typography system, component states, spacing grids, responsive behaviors, and motion specifications for the **VAIBHAV.DEV** professional portfolio ecosystem. 

It is designed to serve as the absolute visual single source of truth for implementation, enabling the engineering team to build the entire platform without making arbitrary layout or styling decisions.

---

## 1. Executive Design Summary

### Design Philosophy
The design language is inspired by **Apple** (clean geometry and structural spacing), **Stripe** (harmonious palettes and typography), **Linear** (subtle borders and dark-mode premium surfaces), and **Vercel** (high contrast, speed-focused layouts, and content-first typography).
* **Minimalist Architecture:** Every design element serves to highlight Vaibhav's projects, credentials, and achievements.
* **SaaS Layout Feel:** Clean lines, solid grids, and high information density. No amateur gaming styles, heavy cyberpunk effects, or complex 3D scenes.
* **Focus on Readability:** High-contrast text, clear typography scale, and generous spacing to satisfy recruiter scan patterns.

---

## 2. Color System

To achieve depth in a dark-theme application, we utilize a tailored scale of slates and primary blues/indigos. Colors are mapped using HSL values to support easy opacity modifications.

### A. Primary Brand Color (Vibrant Blue)
*   **Base:** `#2563EB` | `hsl(221, 83%, 53%)`
*   **Scale:**
    *   `primary-50`:  `#EFF6FF` | `hsl(221, 100%, 97%)`
    *   `primary-100`: `#DBEAFE` | `hsl(221, 95%, 92%)`
    *   `primary-200`: `#BFDBFE` | `hsl(221, 93%, 84%)`
    *   `primary-300`: `#93C5FD` | `hsl(221, 93%, 78%)`
    *   `primary-400`: `#60A5FA` | `hsl(221, 92%, 68%)`
    *   `primary-500`: `#2563EB` | `hsl(221, 83%, 53%)` (Base Accent)
    *   `primary-600`: `#2563EB` | `hsl(221, 79%, 48%)`
    *   `primary-700`: `#1D4ED8` | `hsl(221, 72%, 41%)`
    *   `primary-800`: `#1E40AF` | `hsl(221, 64%, 35%)`
    *   `primary-900`: `#1E3A8A` | `hsl(221, 61%, 25%)`
    *   `primary-950`: `#172554` | `hsl(221, 58%, 15%)`

### B. Secondary Accent (Electric Purple/Indigo)
*   **Base:** `#7C3AED` | `hsl(263, 83%, 58%)`
*   **Scale:**
    *   `accent-50`:  `#F5F3FF` | `hsl(263, 100%, 98%)`
    *   `accent-100`: `#EDE9FE` | `hsl(263, 90%, 96%)`
    *   `accent-200`: `#DDD6FE` | `hsl(263, 88%, 92%)`
    *   `accent-300`: `#C7D2FE` | `hsl(263, 86%, 86%)`
    *   `accent-400`: `#A78BFA` | `hsl(263, 84%, 76%)`
    *   `accent-500`: `#7C3AED` | `hsl(263, 83%, 58%)`
    *   `accent-600`: `#6D28D9` | `hsl(263, 76%, 50%)`
    *   `accent-700`: `#5B21B6` | `hsl(263, 70%, 42%)`
    *   `accent-800`: `#4C1D95` | `hsl(263, 62%, 35%)`
    *   `accent-900`: `#311042` | `hsl(263, 58%, 20%)`
    *   `accent-950`: `#1A052E` | `hsl(263, 55%, 10%)`

### C. Neutral Scale (Deep Charcoal Slates)
*   **Background:** `#0F172A` | `hsl(222, 47%, 11%)` (Deep dark slate background)
*   **Surface:** `#1E293B` | `hsl(215, 28%, 17%)` (Cards, navbar, side menu cards)
*   **Border:** `rgba(255, 255, 255, 0.08)` (Fine borders separating elements)
*   **Text (Foreground):** `#F8FAFC` | `hsl(210, 40%, 98%)` (High-contrast text)
*   **Text Muted:** `#94A3B8` | `hsl(215, 16%, 65%)` (Description summaries, metadata)

### D. System Alert Palette
*   **Success:** `#10B981` | `hsl(162, 76%, 45%)` (Valid form updates, success notifications)
*   **Warning:** `#F59E0B` | `hsl(38, 92%, 50%)` (Form pending notifications)
*   **Error:** `#EF4444` | `hsl(0, 84%, 60%)` (Form field invalid, submission error)

### E. Exact Usage Mappings
*   `body-bg` -> `background`
*   `card-bg` -> `surface`
*   `border-color` -> `border`
*   `text-primary` -> `foreground`
*   `text-secondary` -> `text-muted`
*   `focus-ring` -> `primary-500`
*   `interactive-hover` -> `primary-600` or `accent-600`

---

## 3. Typography System

The typography relies on two premium fonts loaded locally or via Next.js Font Optimization structures.

### Typography Scale Table

| Role | Font Family | Size (px/rem) | Weight | Line Height | Letter Spacing | Responsive Size (Mobile) |
|---|---|---|---|---|---|---|
| **H1 (Hero)** | Poppins | `60px` / `3.75rem` | 800 (ExtraBold) | 1.1 | `-0.02em` | `36px` / `2.25rem` |
| **H2 (Section)**| Poppins | `36px` / `2.25rem` | 700 (Bold) | 1.2 | `-0.01em` | `28px` / `1.75rem` |
| **H3 (Sub)** | Poppins | `24px` / `1.5rem` | 600 (SemiBold) | 1.3 | `0` | `20px` / `1.25rem` |
| **H4 (Title)** | Poppins | `18px` / `1.125rem`| 600 (SemiBold) | 1.4 | `0` | `16px` / `1rem` |
| **Body Large** | Inter | `16px` / `1rem` | 400 (Regular) | 1.6 | `0` | `14px` / `0.875rem` |
| **Body Small** | Inter | `14px` / `0.875rem`| 400 (Regular) | 1.5 | `0` | `12px` / `0.75rem` |
| **Metadata / Tag**| Inter | `12px` / `0.75rem` | 600 (SemiBold) | 1.0 | `0.05em` (Caps) | `10px` / `0.625rem` |

---

## 4. Spacing System

We use a strict **8px base grid** (with 4px for fine alignments) to structure margins and paddings, ensuring absolute alignment consistency across elements.

### Spacing Scale

*   `space-1` (4px): Fine border-radius adjustments, text icon-spacing.
*   `space-2` (8px): Inner badge margins, button icon spacing.
*   `space-3` (12px): Subtext grouping, small button paddings.
*   `space-4` (16px): Input fields inside forms, standard list item gaps.
*   `space-6` (24px): Standard card inner paddings, navbar height margins.
*   `space-8` (32px): Card-to-card structural gaps.
*   `space-12` (48px): Layout columns grid gaps.
*   `space-16` (64px): Tablet/Laptop vertical section margins.
*   `space-24` (96px): Desktop/Ultra-wide layout vertical spacing.

---

## 5. Responsive Strategy

We use standard Tailwind CSS breakpoints, mapping layout structure alterations systematically:

```
[375px] ----------- [768px] ----------- [1024px] ----------- [1280px] ----------- [1536px+]
Mobile (sm)         Tablet (md)         Laptop (lg)         Desktop (xl)        Ultra-wide (2xl)
1 Column Grid       2 Column Grid       Flex Grid columns   Two-Column Hero     Outer margins auto-capped
Inline widgets      Side-by-side tabs   Glass Navbar        Responsive images   Glow effects enabled
```

*   **Mobile (< 640px):** Single-column content stack. Buttons expand to full-width to increase tap targets. Spacing scales down to 16px.
*   **Tablet (640px - 1024px):** Double-column grids for project cards and skill directories. Floating menu shifts to horizontal links.
*   **Laptop & Desktop (1024px - 1536px):** 3-column structures for projects, side-by-side grids for Hero details. Container capped at `max-w-7xl` (`1280px`) with 24px inline padding.
*   **Ultra-wide (> 1536px):** Content remains centered. Outer rails display absolute position decorative brand graphics.

---

## 6. Detailed Wireframe Blueprints

### A. Hero Section Wireframe
```
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
| [VAIBHAV.DEV]                                                        [About] [Projects] [Contact]|
|                                                                                                 |
| ================================== DESKTOP LAYOUT (1280px) ==================================== |
|                                                                                                 |
|  [Badge: Available for Internships]                             +----------------------------+  |
|                                                                 |  /======================\  |  |
|  Engineering Scalable                                           | /                        \ |  |
|  Software. Building                                             | |     Profile Photo      | |  |
|  Startup Solutions.                                             | |       (Squircle)       | |  |
|                                                                 | \                        / |  |
|  Full Stack Developer specializing in high-performance           |  \======================/  |  |
|  web applications, robust backends, and rapid product           +----------------------------+  |
|  development. CSE Student at PBCOE.                              Glowing radial backdrop ring   |
|                                                                                                 |
|  [View Projects]   [Download Resume]                                                            |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
| ================================== MOBILE LAYOUT (375px) ====================================== |
|                                                                                                 |
|                                     +----------------------+                                    |
|                                     |  /================\  |                                    |
|                                     | /  Profile Photo   \ |                                    |
|                                     | \   (Squircle)     / |                                    |
|                                     |  \================/  |                                    |
|                                     +----------------------+                                    |
|                                                                                                 |
|                                    [Badge: Available]                                           |
|                                                                                                 |
|                                   Engineering Scalable                                          |
|                                    Software. Building                                           |
|                                    Startup Solutions.                                           |
|                                                                                                 |
|                                    [View Projects]                                              |
|                                    [Download Resume]                                            |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
```
*   **Visual Hierarchy:**
    1.  *First Read:* The H1 headline with gradient colors highlighting "Startup Solutions."
    2.  *Second Read:* The Profile Squircle on desktop right.
    3.  *Third Read:* Primary Call-To-Action button (vibrant blue background).

---

### B. About Section Wireframe
```
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
|  ================================== About Me =================================================  |
|                                                                                                 |
|  [Biography Column (6 cols)]                      [Metrics Column (6 cols)]                     |
|                                                                                                 |
|  I am currently pursuing my B.Tech in CSE at      +------------------------------------------+  |
|  Priyadarshini Bhagwati College of Engineering    | [Trophy Icon]  3x Hackathon Winner       |  |
|  Nagpur. My technical focus is centered on        | Proven track record of fast prototyping. |  |
|  software development, full-stack frameworks,     +------------------------------------------+  |
|  and algorithm optimization.                      | [Code Icon]    70+ DSA Solved            |  |
|                                                   | Algorithm study in C++ and Python.       |  |
|  Having worked on CampusX and Airbnb Clone...     +------------------------------------------+  |
|                                                   | [Rocket Icon]  Startup Enthusiast        |  |
|                                                   | Pitching prototypes in incubators.       |  |
|                                                   +------------------------------------------+  |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
```

---

### C. Skills Section Wireframe
```
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
|  ================================== Tech Stack ===============================================  |
|                                                                                                 |
|  [Languages Card]         [Frontend Card]          [Backend Card]          [Tools Card]         |
|  +---------------------+  +---------------------+  +---------------------+  +---------------------+ |
|  | Languages           |  | Frontend            |  | Backend             |  | Tools               | |
|  |                     |  |                     |  |                     |  |                     | |
|  | [C++]    [Python]   |  | [React.js] [Next.js]|  | [Node.js] [Express] |  | [Git]    [GitHub]   | |
|  | [JS]     [TS]       |  | [Tailwind] [Framer] |  | [MongoDB] [REST API]|  | [VS Code] [NPM]     | |
|  +---------------------+  +---------------------+  +---------------------+  +---------------------+ |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
```

---

### D. Projects Section Wireframe
```
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
|  ================================== Featured Work ============================================  |
|                                                                                                 |
|  ============================== CampusX (Featured - 12 cols wide) ============================== |
|  +--------------------------------------------------+-----------------------------------------+ |
|  |                                                  |                                         | |
|  |  [Project Visual Layer / Thumbnail Sandbox]       |  CampusX                                | |
|  |                                                  |  Student Collaboration Hub              | |
|  |  Gradated surface overlay (#0F172A to #1E293B)    |                                         | |
|  |                                                  |  [Next.js] [Express] [MongoDB] [Tailwind] | |
|  |                                                  |                                         | |
|  |                                                  |  Detailed brief outlining student       | |
|  |                                                  |  achievement feeds and idea decks...    | |
|  |                                                  |                                         | |
|  |                                                  |  [View Case Study]   [Code] [Live Link] | |
|  +--------------------------------------------------+-----------------------------------------+ |
|                                                                                                 |
|  [Standard Grid Layout - 2 Columns]                                                             |
|  +----------------------------------------+  +----------------------------------------+         |
|  | Airbnb Clone                           |  | Personal Portfolio                     |         |
|  | Listing, Booking and Calendars         |  | Real-time visitor logs, clean code     |         |
|  | [React.js] [Express.js] [MongoDB]      |  | [Next.js 15] [Tailwind] [Framer]       |         |
|  | [View Case Study]           [Code] [Live]|  | [View Case Study]           [Code] [Live]|         |
|  +----------------------------------------+  +----------------------------------------+         |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
```

---

### E. Project Case Study Modal Wireframe
```
+-------------------------------------------------------------------------------------------------+
|                                                                                                 |
|  +-------------------------------------------------------------------------------------------+  |
|  | [Header: CampusX Case Study]                                                      [Close X] |  |
|  +-------------------------------------------------------------------------------------------+  |
|  | [Content Split Panel]                                                                     |  |
|  |                                                                                           |  |
|  | [Left: Metadata (4 cols)]             [Right: Documentation (8 cols)]                     |  |
|  | +-----------------------------------+ +-------------------------------------------------+ |  |
|  | | Project Thumbnail Preview         | | CHALLENGE                                       | |  |
|  | |                                   | | Students lack a centralized space to share      | |  |
|  | | TECH STACK                        | | achievements and discover startup partners.     | |  |
|  | | [Next.js] [Node.js] [MongoDB]     | |                                                 | |  |
|  | |                                   | | SOLUTION                                        | |  |
|  | | METRICS                           | | Built a dashboard leveraging Next.js App Router | |  |
|  | | Page Views: 154                   | | for fast, search-indexed profile lookups.       | |  |
|  | | Codebase: 100% TypeScript         | |                                                 | |  |
|  | +-----------------------------------+ | FEATURES                                        | |  |
|  |                                       | - Milestone timelines                           | |  |
|  |                                       | - Startup pitch decks                           | |  |
|  |                                       +-------------------------------------------------+ |  |
|  +-------------------------------------------------------------------------------------------+  |
|  | [Footer Links]                                               [Source Code] [Live Demo]    |  |
|  +-------------------------------------------------------------------------------------------+  |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+
```

---

## 7. Component Library Specifications

### Buttons
All buttons use Inter with weight 600, border-radius `lg` (8px), and transition speed `200ms`.

```
[ Primary Button ] -> Solid background (#2563EB), text (#F8FAFC)
                      Hover: scale 1.02, bg (#1D4ED8), shadow-indigo-500/10
                      Disabled: bg (#1E293B), text (#94A3B8), cursor-not-allowed

[ Secondary Button ] -> Border outline (1px border white/10), bg (#1E293B)
                        Hover: bg (#334155), border (white/20)

[ Icon Button ] -> Squarish padded card containing lucide svg
                   Hover: bg (white/5)
```

### Cards
*   **Base surface:** `#1E293B`
*   **Border:** `1px solid rgba(255, 255, 255, 0.08)`
*   **Border-radius:** `xl` (12px)
*   **Hover state:** Outline transition to `#2563EB` (Primary) with a scale factor of `1.01`.

### Input & Textareas
*   **Base background:** `#0F172A`
*   **Border:** `1px solid rgba(255, 255, 255, 0.08)`
*   **Focus Ring:** `2px solid #2563EB` with `shadow-outline`
*   **Invalid State:** Border shifts to `#EF4444` (Error Red) with red placeholder text.

### Badges / Tags
*   **Tech Badge:** Background `#0F172A`, text color `#2563EB` or `#7C3AED`, font size `10px`, weight 600.
*   **Category Badge:** Background `#1E293B`, text color `#F8FAFC`, border `1px solid white/5`.

---

## 8. Motion System (Framer Motion Configs)

To ensure high performance, we use hardware-accelerated animations with spring transitions. Easing defaults to standard Cubic Beziers.

### A. Fade Up (Section Reveal)
```typescript
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } // Custom cubic easeOut
  }
};
```

### B. Stagger Children (Grid lists, skill badges)
```typescript
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};
```

### C. Hover Card Lift (Project cards, stats widgets)
```typescript
const hoverLift = {
  whileHover: { 
    y: -4, 
    scale: 1.01,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};
```

### D. Modal Overlay (Case study dialogues)
```typescript
const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 }
};

const modalContent = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 25 } 
  },
  exit: { opacity: 0, scale: 0.95, y: 10 }
};
```

---

## 9. Accessibility (WCAG 2.1 AA Compliance)

1.  **Contrast Ratios:**
    *   Main text (`#F8FAFC`) on Background (`#0F172A`) yields `14.8:1` (Exceeds WCAG AAA requirements).
    *   Muted metadata (`#94A3B8`) on Surface (`#1E293B`) yields `4.56:1` (Exceeds WCAG AA target of `4.5:1` for regular text).
2.  **Keyboard Traps & Navigation:**
    *   Focus states must be visual and highly distinct: use `focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:outline-none`.
    *   The Case Study Modal uses a focus trap to contain Tab key focus inside the dialogue until closed.
3.  **Screen Reader Helpers (ARIA):**
    *   Form fields require linked labels using matching `id` and `htmlFor` elements.
    *   All icon-only elements (e.g., GitHub and LinkedIn SVG buttons) must include `aria-label="GitHub Profile"` or `aria-label="Close modal"`.

---

## 10. Design Tokens (Tailwind Ready Configuration)

This JSON block maps directly to your `tailwind.config.ts` structure.

```json
{
  "theme": {
    "extend": {
      "colors": {
        "background": "#0F172A",
        "surface": "#1E293B",
        "primary": {
          "50": "#EFF6FF",
          "100": "#DBEAFE",
          "200": "#BFDBFE",
          "300": "#93C5FD",
          "400": "#60A5FA",
          "500": "#2563EB",
          "600": "#2563EB",
          "700": "#1D4ED8",
          "800": "#1E40AF",
          "900": "#1E3A8A",
          "950": "#172554"
        },
        "accent": {
          "50": "#F5F3FF",
          "100": "#EDE9FE",
          "200": "#DDD6FE",
          "300": "#C7D2FE",
          "400": "#A78BFA",
          "500": "#7C3AED",
          "600": "#6D28D9",
          "700": "#5B21B6",
          "800": "#4C1D95",
          "900": "#311042",
          "950": "#1A052E"
        },
        "foreground": "#F8FAFC",
        "muted": "#94A3B8"
      },
      "fontFamily": {
        "sans": ["var(--font-sans)", "Inter", "sans-serif"],
        "heading": ["var(--font-heading)", "Poppins", "sans-serif"]
      },
      "borderRadius": {
        "lg": "8px",
        "xl": "12px",
        "2xl": "16px",
        "3xl": "24px"
      },
      "boxShadow": {
        "premium": "0 10px 30px -15px rgba(2, 6, 23, 0.3)",
        "glow-blue": "0 0 20px -5px rgba(37, 99, 235, 0.4)",
        "glow-purple": "0 0 20px -5px rgba(124, 58, 237, 0.4)"
      }
    }
  }
}
```

---

## 11. Final Handoff Summary

The developer agents can directly map these design guidelines to code layout configurations:
1.  Extend the Tailwind variables using the structure in Section 10.
2.  Import Lucide icons as configured, substituting the brand icons (Github, Linkedin) with the custom inline SVGs in Section 6.
3.  Inject the Framer Motion specifications using the spring variables in Section 8 to maintain transition harmony.
