# Furniture Landing Page

A modern, animation-rich furniture landing page built with React and Vite, featuring smooth scroll experiences and GSAP-powered motion effects.

Live demo: [https://furniture-iota-gules.vercel.app](https://furniture-iota-gules.vercel.app)

## Tech Stack

- React (SPA) with functional components
- Vite for bundling, dev server, and HMR
- TypeScript for type-safe component logic
- GSAP for timeline-based and scroll-driven animations
- CSS for custom layout, typography, and responsive design

## Features

- Smooth scrolling between content sections
- Scroll-triggered animations on hero and content blocks
- Responsive layout for desktop and mobile
- New Arrival section with animation-enhanced presentation
- Production-ready build via Vite, deployable to platforms like Vercel

## Project Structure

```bash
.
├── public/           # Static assets (images, icons, etc.)
├── src/              # React + TypeScript source files
├── index.html        # Vite entry HTML
├── eslint.config.js  # ESLint configuration
├── vite.config.js    # Vite configuration
├── package.json      # Scripts and dependencies
└── README.md         # Project documentation
```

> Note: `src/` contains the main layout and section components along with GSAP animation hooks and configuration.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/rishavvrajj/furniture.git

cd furniture

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start the dev server with HMR
npm run dev
# or
pnpm dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Production Build

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

This produces a static build in the `dist/` directory that can be deployed to any static hosting provider (e.g., Vercel, Netlify).

## Animations

This project leverages GSAP to create smooth, timeline-based animations bound to scroll events and section visibility.

General approach:

- Use React refs to target DOM elements for GSAP animations.
- Initialize timelines inside `useEffect` hooks for each section.
- Configure scroll-triggered effects (e.g., fade-in, parallax, pinned sections) for a more immersive landing experience.

You can extend or customize animations by editing the GSAP configuration in the relevant section components under `src/`.

## ESLint and Code Quality

The project uses ESLint with React and TypeScript-oriented rules, based on the Vite React template configuration.

You can run linting via:

```bash
npm run lint
```

To expand lint rules for production-grade setups, refer to the official TypeScript + ESLint integration guidelines from the Vite React TS template.

## Deployment

This repository is configured to be easily deployed on Vercel. The live version is available at:

- [https://furniture-iota-gules.vercel.app](https://furniture-iota-gules.vercel.app)

Any static hosting that supports a Vite-built `dist/` directory can serve the app.

## Roadmap / Ideas

- Add accessibility improvements (focus states, reduced-motion support).
- Enhance section modularity with reusable layout and animation hooks.
- Integrate basic product cards or a mock “add to cart” flow for a more product-oriented feel.
- Add tests for key layout components and animation hooks.

## License

This project is open source; you can adapt it for your own portfolio or landing pages. Please attribute the original repository when forking or reusing.
