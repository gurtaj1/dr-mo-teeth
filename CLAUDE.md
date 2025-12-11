# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
This project uses standard Next.js development workflow without additional test frameworks.

## Architecture Overview

This is a **dental practice website** built with Next.js 14.2.11 App Router, featuring smooth animations and professional medical aesthetics. The site showcases dental services across multiple categories with a premium, trustworthy appearance.

### Core Tech Stack
- **Next.js 14.2.11** with App Router
- **React 18** with TypeScript 5 (strict mode)
- **Tailwind CSS 3.4.1** with custom dental color palette and tailwindcss-animate
- **Framer Motion 11.11.11** for animations
- **Lenis 1.1.16** for smooth scrolling (wrapped at root level with `<ReactLenis root>`)
- **shadcn/ui** components (New York style) built on Radix UI primitives
- **Embla Carousel** for testimonials/carousels
- **class-variance-authority (cva)** for component variant management
- **clsx + tailwind-merge** via `cn()` utility for conditional class management

### Directory Structure
```
app/
├── services/           # Treatment pages by category
│   ├── cosmetic/      # Cosmetic treatments
│   ├── general/       # General dentistry
│   ├── problems/      # Dental problems
│   └── surgeries/     # Surgical procedures
├── referrals/         # Referral pages
├── svg-components/    # Custom dental icons (22 icons)
├── globals/          # Global constants (colors, animations)
├── fonts/            # Local fonts (Geist Sans & Mono)
└── layout.tsx        # Root layout with Lenis smooth scroll

components/
├── ui/               # Reusable UI components
└── layout/           # Layout components (Navigation, Footer)

hooks/                # Custom React hooks
lib/                  # Utility functions (cn())
public/               # Static assets (images)
```

### Key Architecture Patterns

#### Service Pages Structure
All treatment pages follow this pattern:
1. `"use client"` directive
2. `PageLoadTransitionWrapper` for entrance animations
3. `TitleSection` or `HeroSection` for hero content
4. `AnimatedImageTextSection` for alternating content sections
5. Consistent dental color scheme

**Typical Service Page Example:**
```typescript
<PageLoadTransitionWrapper>
  <div className="min-h-screen bg-white overflow-x-hidden">
    <TitleSection titleText="..." bodyText={[...]} />

    <ScrollMotionWrapper transitionY transitionScale>
      <AnimatedImageTextSection imagePosition="left" ... />
    </ScrollMotionWrapper>

    <AnimatedElement>
      <section className="py-16">
        {/* Additional content */}
      </section>
    </AnimatedElement>
  </div>
</PageLoadTransitionWrapper>
```

#### Animation System
Three-layer animation architecture:

**1. AnimatedElement** ([animated-element.tsx](components/ui/animated-element.tsx))
- Simple fade-in when element enters viewport
- Uses `useIntersectionObservers` hook internally with configurable threshold
- Optional scale transition (0.98 → 1)

```typescript
<AnimatedElement threshold={0.2}>
  <p>This content fades in when scrolled into view</p>
</AnimatedElement>
```

**2. ScrollMotionWrapper** ([scroll-motion-wrapper.tsx](components/ui/scroll-motion-wrapper.tsx))
- Scroll-based parallax effects (opacity, scale, X/Y translation)
- Uses Framer Motion's `useScroll()` + `useTransform()`
- Customizable scroll offsets (`start end`, `center center`, etc.)

```typescript
<ScrollMotionWrapper transitionY transitionScale transitionOpacity>
  <div>This moves, scales, and fades during scroll</div>
</ScrollMotionWrapper>
```

**3. useIntersectionObservers** ([use-intersection-observers.ts](hooks/use-intersection-observers.ts))
- Custom hook combining IntersectionObserver and scroll position calculations
- Use directly for complex synchronized animations

```typescript
const [isVisible, setIsVisible] = useState(false);
useIntersectionObservers({
  intersectionTargets: [
    { ref: elementRef, onIntersect: () => setIsVisible(true) }
  ],
  parallaxTargets: [
    { ref: parallaxRef, onScroll: (offset) => setParallaxOffset(offset) }
  ]
});
```

#### Animation Decision Tree
```
Need animation?
├── Simple fade-in when scrolled into view?
│   └── Use AnimatedElement
├── Scroll-based parallax effects (opacity/scale/translate)?
│   └── Use ScrollMotionWrapper
├── Complex custom synchronized animations?
│   └── Use useIntersectionObservers hook directly
└── Page-level entrance transitions?
    └── PageLoadTransitionWrapper (already in service pages)
```

#### Component Patterns

**1. CVA Pattern for Variants**
```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", destructive: "..." },
      size: { default: "...", sm: "...", lg: "..." }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
```

**2. Component Structure with forwardRef**
```typescript
interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  variant?: "default" | "secondary";
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn("base-styles", className)} ref={ref} {...props} />
  }
);
Component.displayName = "Component";
```

**3. Class Management**
- Use `cn()` utility from `@/lib/utils` for safe class merging (combines clsx + tailwind-merge)

```typescript
import { cn } from "@/lib/utils";
className={cn(baseClasses, conditionalClasses, className)}
```

#### Custom Hooks
- **useIntersectionObservers**: Manages viewport intersection detection and parallax calculations with configurable thresholds
- **useMediaQuery**: Responsive breakpoint detection at runtime

### Design System

#### Color Palette
Custom dental color palette defined in [app/globals/constants.ts](app/globals/constants.ts):

**Usage in Tailwind:**
- Primary/Secondary: `bg-dental-primary`, `text-dental-secondary`
- Accents: `text-dental-teal`, `border-dental-teal` (for underlines, hover states)
- Gold: `text-dental-gold`, `text-dental-lightGold` (premium accents)
- Backgrounds: `bg-dental-navy` (section backgrounds), `bg-dental-deepBlue`

**Full Palette:**
```typescript
dental: {
  primary: "rgb(26,110,164)",      // Deep blue
  secondary: "rgb(64,163,221)",    // Bright blue
  navy: "rgb(4,78,125)",           // Navy blue (section backgrounds)
  deepBlue: "rgb(1,5,48)",         // Very dark blue
  butterflyBlue: "rgb(70,158,251)", // Butterfly blue
  teal: "rgb(56,192,188)",         // Teal (accents, underlines)
  accent1: "rgb(173,233,238)",     // Light cyan
  accent2: "rgb(70,219,251)",      // Bright cyan
  gold: "rgb(229,185,77)",         // Premium gold
  lightGold: "rgb(245,215,123)",   // Lighter gold
  dirtyGold: "rgb(56,50,2)",       // Dark olive gold
  gray: "rgb(84,84,84)",           // Gray
  black: "rgb(4,4,4)",             // Pure black
}
```

#### Typography
- **Primary**: Newsreader (serif) - `font-newsreader` - Primary headings
- **Secondary**: Castoro Titling (serif) - `font-castoro` - Secondary headings
- **Body**: Spectral (serif) - `font-spectral` - Body text
- **System**: Geist Sans & Geist Mono - Default system fonts

```typescript
<h1 className="font-newsreader text-4xl">Primary Heading</h1>
<h2 className="font-castoro text-3xl">Secondary Heading</h2>
<p className="font-spectral">Body text with Spectral</p>
```

#### Animation Variants
Defined in [app/globals/constants.ts](app/globals/constants.ts):
- `linkFramerVariants`: Scale animations for hover/tap
- `iconFramerVariants`: Color morphing effects
- `homeIconVariants`, `homeCardVariants`: Home page-specific animations
- `pulsingIconVariants`: Continuous opacity pulsing
- `navBarHeight = 72px`

### Service Categories
1. **Cosmetic**: bonding, invisalign, smile-makeover, teeth-whitening, veneers
2. **General**: bridges, cleanings-and-exams, crowns, dental-fillings, dentures, gum-therapy, root-canal
3. **Problems**: bad-breath, bleeding-gums, chipped-cracked-teeth, crooked-teeth, dental-anxiety, missing-teeth, sensitive-teeth, teeth-grinding, toothache, wisdom-tooth-pain
4. **Surgeries**: bone-grafts, crown-lengthening, extractions, implants, iv-sedation

### Key Components

#### Core UI Components
- **Button** - Variant-based button with CVA
- **Card** - Container component
- **Sheet** - Mobile menu drawer (Radix Dialog-based)
- **Navigation** - Sticky navbar with mobile hamburger menu, hierarchical service links
- **Footer** - Site footer

#### Custom Layout Components
- **TitleSection** - Large centered title sections with animated border underline
- **HeroSection** - Alternative hero with split title formatting, bullet points
- **AnimatedImageTextSection** - Core content pattern with image + text, alternating left/right layout

#### Animation Components
- **AnimatedElement** - Fade-in wrapper triggered by viewport intersection
- **ScrollMotionWrapper** - Scroll-based parallax container
- **PageLoadTransitionWrapper** - Page entrance animation (fade + slide up)
- **SmartCarousel** - Embla-based carousel with autoplay

#### SVG Components
- Located in `app/svg-components/` (22 custom icons)
- Dental service icons for navigation and cards
- Logo variations (pulsing, dark/light)

## Development Guidelines

### Adding New Service Pages
1. Create directory in appropriate category under `app/services/[category]/[service-name]/`
2. Create `page.tsx` following existing patterns (see structure above)
3. Use `TitleSection` for standard hero sections
4. Use `AnimatedImageTextSection` for content sections (alternates left/right image placement with `imagePosition` prop)
5. Wrap additional content with `AnimatedElement` for fade-in effects
6. Consider `ScrollMotionWrapper` for parallax effects on specific sections
7. Add relevant images to `public/`
8. Use dental color palette consistently (e.g., `bg-dental-navy`, `text-dental-teal`, `border-dental-teal`)

### Component Development
1. Use shadcn/ui patterns for new components
2. Implement proper TypeScript typing with interfaces (prefer interfaces over types for props)
3. Use `React.forwardRef` for components that need ref forwarding
4. Extend HTML element props when appropriate (`extends React.HTMLAttributes<HTMLElement>`)
5. Follow CVA pattern for variants
6. Use `cn()` utility from `@/lib/utils` for class management
7. Maintain accessibility with proper ARIA attributes and semantic HTML

### File Naming Conventions
- **Components**: `kebab-case.tsx` (e.g., `animated-image-text-section.tsx`)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Hooks**: `use-{functionality}.ts` (e.g., `use-media-query.ts`)
- **Utils**: `utils.ts`, `constants.ts`

### Import Patterns
```typescript
// External libraries first
import { useState } from "react";
import { motion } from "framer-motion";

// Internal components (using @ alias)
import Component from "@/components/ui/component";
import { cn } from "@/lib/utils";

// Relative imports last
import "./styles.css";
```

### Path Alias
The project uses `@/*` as path alias mapping to the root directory (configured in tsconfig.json):
```typescript
import { cn } from "@/lib/utils";
import Component from "@/components/ui/component";
import { DENTAL_COLORS } from "@/app/globals/constants";
```

### Hero Section Selection
- **Use TitleSection when**: Standard service page with centered title and description
- **Use HeroSection when**: Need alternative layout with split title or special styling requirements

## Best Practices & Important Considerations

### Medical Context
- This is a dental practice website - maintain professional appearance and trustworthy design
- Clean, professional aesthetics reflecting high medical standards
- Prioritize clarity and readability

### Performance
- All animations should be smooth and performant using intersection observers
- Lazy load components when appropriate
- Optimize images with Next.js Image component
- Use `AnimatedElement` and `ScrollMotionWrapper` for performant animations
- Minimize bundle size with dynamic imports

### Accessibility
- Ensure keyboard navigation support
- Add proper ARIA attributes where needed
- Screen reader compatibility
- Color contrast compliance (WCAG standards)
- Semantic HTML structure

### Responsive Design
- Test on all device sizes
- Navigation includes mobile hamburger menu with dropdown submenus
- Mobile-first Tailwind approach (`md:`, `lg:` breakpoints)
- Use `useMediaQuery` hook for runtime breakpoint detection

### Consistency
- Use dental color palette consistently across all pages
- Follow existing animation patterns - don't reinvent the wheel
- Maintain consistent spacing and typography
- Use Tailwind utilities and design tokens (avoid hardcoded styles)

## Common Pitfalls to Avoid

1. **Don't break animation patterns** - Follow existing Framer Motion implementations
2. **Don't ignore color scheme** - Use dental color palette consistently via Tailwind classes
3. **Don't skip responsive design** - Test on all device sizes
4. **Don't hardcode styles** - Use Tailwind utilities and design tokens from constants.ts
5. **Don't forget accessibility** - Always consider screen readers and keyboard navigation
6. **Don't nest animation components unnecessarily** - Use the right component for the specific animation need
7. **Don't forget to wrap new content with AnimatedElement** - Maintain consistent fade-in behavior
8. **Don't forget `"use client"` directive** - Required for pages using animations and hooks

## Configuration Files

- **package.json** - Dependencies and scripts
- **next.config.mjs** - Next.js configuration (currently minimal)
- **tailwind.config.ts** - Tailwind configuration with custom dental colors and font families
- **tsconfig.json** - TypeScript configuration with strict mode and `@/*` path mapping
- **components.json** - shadcn/ui configuration (New York style)
- **app/globals/constants.ts** - Dental color palette and Framer Motion animation variants

---

This codebase emphasizes clean, professional design with smooth animations and excellent user experience, reflecting the high standards expected in medical/dental websites.
