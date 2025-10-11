# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AMMO.re is a construction and renovation company website for La Réunion, built with Next.js 15. The project consists of a marketing site showcasing construction services, with a focus on modern architecture and renovation projects.

## Development Commands

```bash
# Navigate to the site directory first
cd site

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Structure

### Core Stack
- **Framework**: Next.js 15.5.3 with App Router
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS and tw-animate-css for animations
- **TypeScript**: Strict mode enabled with ES2017 target
- **Utility Functions**: class-variance-authority (cva) and tailwind-merge for className management
- **Animation**: Framer Motion v12 for complex animations
- **Icons**: Lucide React for UI icons

### Project Structure
```
D:\Ammo\
├── site/                       # Main Next.js application
│   ├── app/                    # App Router directory
│   │   ├── layout.tsx          # Root layout with Geist fonts
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles with Tailwind and custom animations
│   ├── components/             # React components
│   │   ├── header.tsx
│   │   ├── interactive-image-accordion.tsx
│   │   ├── about-section*.tsx  # Multiple about section variants
│   │   └── 3d-animation.tsx
│   ├── lib/
│   │   └── utils.ts           # cn() utility for className merging
│   └── public/                 # Static assets
└── contenu_ammo_re.md         # Website content and structure documentation
```

### Styling Architecture
- **Tailwind v4**: Uses inline theme configuration in globals.css
- **Custom Animations**: Defined keyframes for zoom-in, blur, brightness, text-glow, filter-animation
- **3D Effects**: CSS transforms for cube animations and perspective effects
- **Color System**: OKLCH color space for precise color control
- **Custom Properties**: Extensive use of CSS variables for theming
- **Dark Mode Support**: Full dark mode implementation with .dark class

### Path Aliases
- `@/*`: Maps to the site root directory for clean imports

### Component Patterns
- Multiple implementations of about sections (split, bento, carousel, dynamic) for flexibility
- Modular component architecture with clear separation of concerns
- Responsive-first design approach
- Use of cn() utility from lib/utils for consistent className handling

## Important Context

The site serves AMMO, a construction company in La Réunion specializing in:
- Contemporary villas (tropical climate adapted)
- Renovations (modernization with expertise)
- Exterior landscaping (terraces, outdoor kitchens, kiosks)
- Extensions (space optimization)
- Lodge Paradise (luxury properties)

### Business Content
The `contenu_ammo_re.md` file contains the complete website content structure including service descriptions and company messaging.

## Visual Assets
The project includes various screenshots and images in the root directory for reference and development use. The public folder contains the logo and other static assets.