# IQONIX LABS — Corporate & Institutional Website

> **Build the Innovators of Tomorrow**
> Hands-on Robotics, Aeronautics, Programming, and STEM Education for CBSE & ICSE Schools (Grades 5–10).

This project implements the official public-facing website for **IQONIX LABS**, strictly following:
1. **Software Requirements Specification (SRS v1.0)** — Authority on business information, approved scope, curriculum categories, and consent rules.
2. **Google Stitch Design Reference** (`screen.png`, `code.html`, `DESIGN.md`) — Authority on visual hierarchy, aerospace precision blue-and-white color palette, micro-geometry, and responsive layouts.

---

## 🚀 Key Features & Implementation Scope

- **Home Page (`/`)**: High-precision hero section with telemetry badges, core introductory pillars, curriculum previews, institutional turnkey lab roadmap (01 to 05), practical learning showcase, interactive gallery preview with modal inspection, blog highlights, and consultation enquiry desk.
- **About Us (`/about`)**: Educational philosophy, classroom syllabus synergy (CBSE & ICSE), and clearly demarcated placeholders for owner-confirmed mission/vision statements.
- **Programs (`/programs`)**:
  - `01. Robotics` (multi-axis kinematics, microcontroller assembly, sensor calibration)
  - `02. Aeronautics` (airfoil aerodynamics, drone telemetry, flight attitude control)
  - `03. Programming / Coding` (computational thinking, embedded logic, serial debugging)
  - `04. Related STEM Learning` (interdisciplinary physics, data logging, structural engineering)
- **STEM Lab Setup for Schools (`/stem-lab-setup`)**: Turnkey school lab infrastructure specifications, 4 spatial zoning blue-prints (Assembly, Flight Bay, Coding Hub, Inventory), and 5-stage implementation roadmap.
- **Gallery (`/gallery`)**: Responsive category filtering (`All`, `Lab Setups`, `Student Projects`, `STEM Activities`, `Events`), full lightbox image preview, empty state handling, and strict guardian consent compliance notices.
- **Blog / News (`/blog` & `/blog/:slug`)**: Insights listing and reusable article detail view with reading time, author roles, breadcrumbs, and sample content tags.
- **Contact / Request a Demo (`/contact`)**:
  - Complete institutional consultation enquiry form supporting all SRS required fields: Name, School Name, Role, Email, Phone, City, Interest Area, Contact Method, Message, and Consent Checkbox.
  - Client-side validation: email regex, flexible international phone validation, inline error reporting, submission debouncing, loading and confirmation states.
- **Privacy Policy (`/privacy-policy`)**: Educational safeguarding standards, data handling, and student consent transparency.
- **Custom 404 Page (`*`)**: Aerospace-themed route fallback with quick return navigation.

---

## 🛠 Tech Stack

- **React 18** with **TypeScript**
- **Vite 6** (fast build & HMR)
- **Tailwind CSS 3** (configured with exact Stitch tokens from `DESIGN.md` and refined typography scale)
- **React Router DOM 6** (client-side routing)
- **Lucide React** (modern iconography matching aerospace aesthetic)
- **Framer Motion** (clean animations)

---

## 🔤 Centralized Typography System

The website features an aerospace-grade, balanced typographic hierarchy adhering to disciplined reading measures:

| Element | Class / Utility | Desktop | Mobile | Line Height |
|:---|:---|---:|---:|:---|
| **Hero Heading** | `.text-hero-title` | 42–48px | 30–34px | `1.16` |
| **Page Headings** | `.text-page-title` | 36–40px | 28–32px | `1.18` |
| **Section Headings** | `.text-section-title` | 32–36px | 26–30px | `1.22` |
| **Card Headings** | `.text-card-title` | 20–22px | 18–20px | `1.28–1.3` |
| **Subheadings** | `.text-subheading` | 18–20px | 17–18px | `1.4–1.45` |
| **Body Paragraphs** | `.text-body` | 16px | 15px | `1.625–1.65` |
| **Compact Body / Cards** | `.text-body-sm` | 14px | 13.5px | `1.55` |
| **Navigation Links** | `.text-nav-link` | 14.5px | 15–16px | `1.25` |
| **Buttons & CTAs** | `.text-btn` | 14.5px | 14.5px | `1.25` |
| **Captions & Tags** | `.text-caption` / `.text-caption-caps` | 12–13px | 11–12px | `1.35–1.4` |
| **Footer Text** | `.text-footer` | 14px | 13–14px | `1.55` |

Fluid responsiveness is implemented with CSS `clamp()` to scale proportionally across mobile (<768px), tablet (768px–1024px), and desktop (1280px+).

---

## 📂 Project Structure

```
iqonix-labs/
├── public/
│   ├── images/
│   ├── logo/
│   │   └── iqonix-logo.jpg     # Official logo
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/             # Button, Container, SectionHeading, Loading
│   │   ├── layout/             # Navbar, Footer, MainLayout, MobileMenu
│   │   └── sections/           # Hero, About, Programs, StemLab, Learning, Gallery, Blog, Contact
│   ├── data/                   # Navigation, Programs, Gallery, Blog datasets
│   ├── hooks/                  # useScroll
│   ├── pages/                  # Home, About, Programs, StemLabSetup, Gallery, Blog, BlogDetails, Contact, PrivacyPolicy, NotFound
│   ├── styles/                 # globals.css, animations.css
│   ├── types/                  # TypeScript interfaces for Programs, Gallery, Blog
│   ├── utils/                  # constants.ts (Company info, placeholders)
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port indicated in the terminal) in your browser.

### 3. Production Build & Verification

```bash
npm run build
```

This compiles TypeScript and builds optimized static assets into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🛡 Standards & Compliance

- **No Fabricated Claims**: In accordance with SRS guidance, student counts, certifications, and specific partner testimonials are excluded until verified.
- **Safeguarding**: Identifiable student photos and recordings are published strictly with appropriate school and guardian consent.
- **Responsive**: Tested across Desktop (1280px+), Tablet (768px - 1024px), and Mobile (< 768px).
- **SEO & Accessibility**: Semantic HTML5 elements (`header`, `main`, `section`, `article`, `footer`), keyboard navigable menus, meaningful image alt text, Open Graph metadata, and canonical sitemap.
