# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
This project currently uses standard Next.js development workflow without additional test frameworks.

## Architecture Overview

This is a **dental practice website** built with Next.js 14.2.11 App Router, featuring smooth animations and professional medical aesthetics.

### Core Tech Stack
- **Next.js 14.2.11** with App Router
- **TypeScript 5** with strict mode
- **Tailwind CSS 3.4.1** with custom dental color palette
- **Framer Motion 11.11.11** for animations
- **Lenis 1.1.16** for smooth scrolling
- **shadcn/ui** components (New York style)

### Key Architecture Patterns

#### Service Pages Structure
All treatment pages follow this pattern:
1. `"use client"` directive
2. `PageLoadTransitionWrapper` for entrance animations
3. `TitleSection` or `HeroSection` for hero content
4. `AnimatedImageTextSection` for alternating content sections
5. Consistent dental color scheme

#### Animation System
- **AnimatedElement**: Fade-in animations triggered by viewport intersection
- **ScrollMotionWrapper**: Scroll-based parallax effects (opacity, scale, position)
- **useIntersectionObservers**: Custom hook for managing intersection and parallax animations

#### Component Patterns
- Use **class-variance-authority (cva)** for component variants
- **React.forwardRef** for ref forwarding
- **cn()** utility from `@/lib/utils` for conditional classes

### Directory Structure
```
app/
├── services/           # Treatment pages by category
│   ├── cosmetic/      # Cosmetic treatments
│   ├── general/       # General dentistry
│   ├── problems/      # Dental problems
│   └── surgeries/     # Surgical procedures
├── svg-components/    # Custom dental icons
└── globals/          # Global constants

components/
├── ui/               # Reusable UI components
└── layout/           # Layout components
```

### Design System
Custom dental color palette defined in `constants.ts`:
- Primary: `dental.primary` (Deep blue)
- Secondary: `dental.secondary` (Bright blue)
- Gold: `dental.gold` and `dental.lightGold`
- Typography: Newsreader (primary), Castoro Titling (secondary), Spectral (body)

### Animation Decision Tree
- Simple fade-in when scrolled into view → Use `AnimatedElement`
- Scroll-based parallax effects → Use `ScrollMotionWrapper`
- Complex custom animations → Use `useIntersectionObservers` hook directly
- Page-level transitions → `PageLoadTransitionWrapper` (already in service pages)

### Service Categories
1. **Cosmetic**: bonding, invisalign, smile-makeover, teeth-whitening, veneers
2. **General**: bridges, cleanings-and-exams, crowns, dental-fillings, dentures, gum-therapy, root-canal
3. **Problems**: bad-breath, bleeding-gums, chipped-cracked-teeth, crooked-teeth, dental-anxiety, missing-teeth, sensitive-teeth, teeth-grinding, toothache, wisdom-tooth-pain
4. **Surgeries**: bone-grafts, crown-lengthening, extractions, implants, iv-sedation

## Development Guidelines

### Adding New Service Pages
1. Create directory in appropriate category under `app/services/`
2. Follow existing `page.tsx` patterns
3. Use `TitleSection` for standard hero sections
4. Use `AnimatedImageTextSection` for content sections
5. Wrap content with `AnimatedElement` for fade-in effects
6. Add relevant images to `public/`
7. Follow dental color scheme

### Component Development
- Use shadcn/ui patterns for new components
- Implement proper TypeScript typing
- Follow CVA pattern for variants
- Use `cn()` utility for class management
- Maintain accessibility with proper ARIA attributes

### Important Considerations
- This is a medical/dental website - maintain professional appearance
- All animations should be smooth and performant
- Follow responsive design principles
- Ensure accessibility compliance
- Use dental color palette consistently
- Test on all device sizes