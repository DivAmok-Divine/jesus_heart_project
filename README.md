<div align="center">
  <img src="website/public/images/logo/logo-dark.png" alt="Jesus Heart Project Logo" width="180" />
</div>

<h1 align="center">The Jesus Heart Project</h1>

<div align="center">
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 18](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-0055FF?logo=framer)](https://www.framer.com/motion/)

**A modern, high-performance web platform designed to elevate the digital presence of The Jesus Heart Project.**

</div>

---

## 🌟 Overview
This repository contains the source code for the official website of **The Jesus Heart Project**, a non-profit foundation dedicated to uplifting the underprivileged across northern Ghana. The platform serves as a digital front door for the foundation, showcasing its mission, executive team, philanthropic projects, and providing an interactive portal for donors and volunteers to get involved.

Designed with modern web standards, it features dynamic carousels, fully responsive layouts, scalable architecture, and seamless user experiences driven by micro-interactions.

---

## 🏗️ System Architecture

The codebase is engineered for maximum performance, maintainability, and scalability using a modern Frontend stack.

### Core Technologies
- **Framework**: [React 18](https://reactjs.org/) via [Vite](https://vitejs.dev/) for lightning-fast Hot Module Replacement (HMR) and highly optimized production builds.
- **Language**: TypeScript for strict type-safety, robust tooling, and minimizing runtime errors.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) utilized as a utility-first framework for rapid, responsive UI development without bloated stylesheets.
- **Routing**: [React Router v6](https://reactrouter.com/) for declarative, component-based Single Page Application (SPA) navigation.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) powering complex layout animations, scroll-reveals, and interactive transitions.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable, and customizable vector iconography.

### Project Structure

```text
jesus_heart_project/
├── website/
│   ├── public/              # Static assets (images, logos, SVGs)
│   ├── src/
│   │   ├── components/      # Reusable UI architecture (Layouts, UI primitives, Sections)
│   │   ├── data/            # Local CMS data (Gallery, Team, Testimonials, Projects)
│   │   ├── hooks/           # Custom React hooks (e.g., useScrollToTop)
│   │   ├── lib/             # Utility functions and external integrations (e.g., Paystack)
│   │   ├── pages/           # Route-level components (Home, About, Projects, Gallery, etc.)
│   │   ├── types/           # Global TypeScript interfaces and definitions
│   │   ├── App.tsx          # Root application and routing configuration
│   │   └── main.tsx         # React DOM entry point
│   ├── tailwind.config.js   # Custom design system tokens (colors, fonts, animations)
│   └── vite.config.ts       # Bundler configuration
└── push-to-github           # Automated CI/CD bash utility
```

---

## 🚀 Development Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DivAmok-Divine/jesus_heart_project.git
   ```
2. **Navigate to the web application directory:**
   ```bash
   cd jesus_heart_project/website
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:5173`*

---

## 🌐 Automated Deployment Script

This project includes a custom bash utility to streamline Git workflows. 
To stage, commit, and push changes to the repository, simply run:
```bash
./push-to-github
```
The script will interactively prompt for a commit description, validate changes, and execute the push safely using authenticated remote configurations.

---

## 📜 License
This software is licensed under the [MIT License](LICENSE).
