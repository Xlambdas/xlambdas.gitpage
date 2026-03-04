# XLS.studio

Interactive cognitive science and digital systems exploration platform.

Built with **React + Vite + Tailwind + Spline**.

The goal of this project is to create a structured digital environment that explores:

* cognitive science
* interactive systems
* experimental UI
* sandbox experimentation tools

---

# Tech Stack

* React
* TypeScript
* Vite
* TailwindCSS
* Spline 3D
* React Router

---

# Project Architecture

The project is organized to separate **logic, UI, and layout**.

src/
│
├─ components/
│   ├─ layout/
│   │   └─ Header.tsx
│   │
│   └─ sections/
│       ├─ SectionWelcome.tsx
│       ├─ SectionKnowledge.tsx
│       └─ SectionSandbox.tsx
│
├─ hooks/
│   ├─ useSplineScene.ts
│   └─ useSectionScroll.ts
│
├─ pages/
│   └─ Home.tsx
│
├─ styles/
│   └─ globals.css

---

# Core Concepts

## Spline Scene Management

The 3D scene is handled through a custom hook:

useSplineScene()

Responsibilities:

* Load the Spline scene
* Manage canvas resolution
* Dynamic DPR scaling
* Performance monitoring

This ensures stable rendering across devices.

---

## Section Navigation System

Scrolling between sections is handled by:

useSectionScroll()

Responsibilities:

* Detect wheel events
* Control page section transitions
* Synchronize Spline variables with UI state

This allows the 3D scene to react to page navigation.

---

## Animation Toggle

The interface provides a toggle that disables:

* Spline rendering
* Scroll transitions
* heavy animations

This improves performance on low-power devices.

---

# Running the Project

Install dependencies:

npm install

Start development server:

npm run dev

Build for production:

npm run build

Preview production build:

npm run preview

---

# Deployment

The site is deployed via **GitHub Pages**.

Production build output:

dist/

The Vite config uses:

base: "/XLS.studio/"

---

# Future Plans

Planned features:

* Sandbox experimentation area
* Interactive cognitive quizzes
* Portfolio project explorer
* Performance adaptive rendering
* accessibility modes

---

# Author

Created by **XLS.studio**

Exploring cognition, systems, and interaction design.
