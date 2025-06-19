# Dr Mo Teeth - Codebase Guidelines & Instructions

## Project Overview
This is a **dental practice website** built with modern web technologies, focusing on showcasing dental services, treatments, and information for patients. The site features smooth animations, responsive design, and a professional medical aesthetic.

## Tech Stack & Core Technologies

### Framework & Runtime
- **Next.js 14.2.11** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Static typing
- **Node.js** - Runtime environment

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **shadcn/ui** - Component library (New York style)
- **Radix UI** - Headless UI primitives
- **class-variance-authority (cva)** - Component variant management
- **clsx + tailwind-merge** - Conditional class management

### Animation & UX
- **Framer Motion 11.11.11** - Animation library
- **Lenis 1.1.16** - Smooth scrolling
- **Embla Carousel React** - Carousel components

### Icons & Assets
- **Lucide React** - Icon library
- **Radix UI Icons** - Additional icons
- **Custom SVG Components** - Dental-specific icons and graphics

## Project Structure

```
dr-mo-teeth/
├── app/                          # Next.js App Router
│   ├── services/                 # Service pages (treatments)
│   │   ├── cosmetic/            # Cosmetic treatments
│   │   ├── general/             # General dentistry
│   │   ├── problems/            # Dental problems
│   │   └── surgeries/           # Surgical procedures
│   ├── referrals/               # Referral pages
│   ├── contexts/                # React contexts
│   ├── svg-components/          # Custom SVG components
│   ├── fonts/                   # Local fonts
│   └── globals/                 # Global utilities
├── components/
│   ├── ui/                      # Reusable UI components
│   └── layout/                  # Layout components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
└── public/                      # Static assets
```

## Design System & Styling

### Color Palette
The project uses a custom dental-themed color palette defined in `constants.ts`:

```typescript
dental: {
  gold: "rgb(229, 185, 77)",
  lightGold: "rgb(245, 215, 123)", 
  primary: "rgb(26,110,164)",      // Deep blue
  secondary: "rgb(64,163,221)",     // Bright blue
  accent1: "rgb(173,233,238)",      // Light cyan
  accent2: "rgb(70,219,251)",       // Bright cyan
  black: "rgb(4,4,4)",             // Pure black
  deepBlue: "rgb(1, 5, 48)",       // Dark blue
  navy: "rgb(4,78,125)",           // Navy blue
  butterflyBlue: "rgb(70,158,251)", // Butterfly blue
  teal: "rgb(56,192,188)",         // Teal
  gray: "rgb(84,84,84)",           // Gray
  dirtyGold: "rgb(56, 50, 2)",     // Dirty gold
}
```

### Typography
- **Primary**: Newsreader (serif) - Use `font-newsreader` class
- **Secondary**: Castoro Titling (serif) - Use `font-castoro` class
- **Tertiary**: Spectral (serif) - Use `font-spectral` class
- **System**: Geist Sans & Geist Mono (local fonts) - Default system fonts

#### Font Classes Usage
```typescript
<h1 className="font-newsreader text-4xl">Primary Heading</h1>
<h2 className="font-castoro text-3xl">Secondary Heading</h2>
<p className="font-spectral">Body text with Spectral</p>
```

### Component Patterns

#### 1. Component Variants (CVA Pattern)
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

#### 2. Utility Function Usage
```typescript
import { cn } from "@/lib/utils";

// Merge classes conditionally
className={cn(baseClasses, conditionalClasses, className)}
```

#### 3. Component Structure
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

## Page Structure Patterns

### Service Pages
All service pages follow this pattern:
1. **Client Component** (`"use client"`)
2. **PageLoadTransitionWrapper** - Animation wrapper
3. **TitleSection** or **HeroSection** - Hero section with title and description
4. **AnimatedImageTextSection** - Alternating image/text sections
5. **Consistent styling** with dental color scheme

#### Hero Section Variations
- **TitleSection**: Standard hero with centered title and description
- **HeroSection**: Alternative hero layout with different styling options

### Layout Structure
```typescript
<PageLoadTransitionWrapper>
  <div className="min-h-screen bg-white overflow-x-hidden">
    <TitleSection titleText="..." bodyText={[...]} />
    <AnimatedImageTextSection imagePosition="left|right" ... />
    {/* Multiple sections */}
  </div>
</PageLoadTransitionWrapper>
```

## Animation Guidelines

### Framer Motion Usage
- Use `AnimatePresence` for route transitions
- Implement smooth page transitions with `mode="wait"`
- Use intersection observers for scroll-triggered animations
- Follow the existing animation patterns in components

#### Animation Components & Patterns
- **AnimatedElement**: Wrapper for fade-in animations triggered by viewport intersection
- **ScrollMotionWrapper**: Container for scroll-based parallax effects (opacity, scale, position)
- **useIntersectionObservers**: Custom hook for managing intersection and parallax animations

#### Animation Implementation Examples
```typescript
// Basic fade-in animation
<AnimatedElement>
  <p>This content fades in when scrolled into view</p>
</AnimatedElement>

// Scroll-based parallax effects
<ScrollMotionWrapper transitionY transitionScale transitionOpacity>
  <div>This moves, scales, and fades during scroll</div>
</ScrollMotionWrapper>

// Custom intersection handling
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

### Lenis Smooth Scrolling
- Wrapped at root level with `<ReactLenis root>`
- All pages benefit from smooth scrolling automatically
- Custom scroll behaviors handled through Lenis API

## Development Practices

### File Naming Conventions
- **Components**: `kebab-case.tsx` (e.g., `animated-image-text-section.tsx`)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Hooks**: `use-{functionality}.ts` (e.g., `use-media-query.ts`, `use-intersection-observers.ts`)
- **Utils**: `utils.ts`, `constants.ts`

### Key Custom Hooks
- **useIntersectionObservers**: Manages viewport intersection and scroll-based parallax animations
- **useMediaQuery**: Handles responsive breakpoint detection
- **Usage**: Import and use for animation triggers and responsive behavior

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

### TypeScript Usage
- Strict mode enabled
- Prefer interfaces over types for props
- Use React.forwardRef for components that need ref forwarding
- Extend HTML element props when appropriate

## Key Components Guide

### Core UI Components
- **Button** - Variant-based button with CVA
- **Card** - Container component
- **Sheet** - Modal/drawer component
- **Navigation** - Main site navigation
- **Footer** - Site footer

### Custom Components
- **TitleSection** - Page hero sections with centered title and description
- **HeroSection** - Alternative hero component with different layout options
- **AnimatedImageTextSection** - Image/text alternating sections with animations
- **AnimatedElement** - Wrapper for intersection-based fade-in animations
- **SmartCarousel** - Carousel component with autoplay and responsive features
- **PageLoadTransitionWrapper** - Page-level entrance animations
- **ScrollMotionWrapper** - Container for scroll-based parallax effects

### SVG Components
- Located in `app/svg-components/`
- Dental-specific icons and graphics
- Logo variations (dark/light)
- Service-specific icons

## Routing Structure

### App Router Implementation
- All routes in `app/` directory
- Nested routing for services: `/services/{category}/{treatment}/`
- Dynamic imports for performance
- Loading states and error boundaries

### Service Categories
1. **Cosmetic**: bonding, invisalign, smile-makeover, teeth-whitening, veneers
2. **General**: bridges, cleanings-and-exams, crowns, dental-fillings, dentures, gum-therapy, root-canal
3. **Problems**: bad-breath, bleeding-gums, chipped-cracked-teeth, crooked-teeth, dental-anxiety, missing-teeth, sensitive-teeth, teeth-grinding, toothache, wisdom-tooth-pain
4. **Surgeries**: bone-grafts, crown-lengthening, extractions, implants, iv-sedation

## Performance Considerations

### Optimization Strategies
- Dynamic imports for large components
- Intersection observers for lazy loading
- Optimized images and assets
- Smooth scrolling with Lenis
- Animation performance with Framer Motion

### Bundle Management
- Tree-shaking enabled
- Component lazy loading
- Static generation where possible

## Development Workflow

### Getting Started
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint checking
```

### Adding New Services
1. Create new directory in appropriate category
2. Add `page.tsx` following existing patterns
3. Use `TitleSection` or `HeroSection` for hero section
4. Use `AnimatedImageTextSection` for content sections
5. Wrap content with `AnimatedElement` for fade-in effects
6. Consider `ScrollMotionWrapper` for parallax effects
7. Add relevant images to `public/`
8. Follow dental color scheme

### Component Development
1. Use shadcn/ui patterns for new components
2. Implement proper TypeScript typing
3. Follow CVA pattern for variants
4. Add proper accessibility attributes
5. Use `cn()` utility for class management

## Best Practices

### Code Quality
- Use TypeScript strictly
- Follow existing component patterns
- Implement proper error boundaries
- Use React.Suspense for loading states
- Optimize images and assets

### Accessibility
- Proper semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

### Performance
- Lazy load components when appropriate
- Optimize images
- Minimize bundle size
- Use intersection observers for animations (via `useIntersectionObservers` hook)
- Implement proper loading states
- Use `AnimatedElement` and `ScrollMotionWrapper` for performant animations

## Component Usage Patterns

### Animation Component Decision Tree
```
Need animation?
├── Simple fade-in when scrolled into view?
│   └── Use AnimatedElement
├── Scroll-based parallax effects?
│   └── Use ScrollMotionWrapper
├── Complex custom animations?
│   └── Use useIntersectionObservers hook directly
└── Page-level transitions?
    └── PageLoadTransitionWrapper (already included in service pages)
```

### Hero Section Selection
- **Use TitleSection when**: Standard service page with centered title and description
- **Use HeroSection when**: Need alternative layout or special styling requirements

### Typical Service Page Structure
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

## Common Pitfalls to Avoid

1. **Don't break animation patterns** - Follow existing Framer Motion implementations
2. **Don't ignore color scheme** - Use dental color palette consistently
3. **Don't skip responsive design** - Test on all device sizes
4. **Don't hardcode styles** - Use Tailwind utilities and design tokens
5. **Don't forget accessibility** - Always consider screen readers and keyboard navigation
6. **Don't nest animation components unnecessarily** - Use the right component for the specific animation need
7. **Don't forget to wrap new content with AnimatedElement** - Maintain consistent fade-in behavior

## Configuration Files Summary

- **package.json** - Dependencies and scripts
- **next.config.mjs** - Next.js configuration (currently minimal)
- **tailwind.config.ts** - Tailwind configuration with custom dental colors
- **tsconfig.json** - TypeScript configuration with path mapping
- **components.json** - shadcn/ui configuration
- **constants.ts** - Project constants (colors, etc.)

## When Making Changes

1. **Understand the medical context** - This is a dental practice website
2. **Maintain professional appearance** - Clean, trustworthy design
3. **Follow existing patterns** - Don't reinvent the wheel
4. **Test animations thoroughly** - Smooth performance is crucial
5. **Consider mobile users** - Responsive design is essential
6. **Maintain accessibility** - Medical sites must be inclusive

---

This codebase emphasizes clean, professional design with smooth animations and excellent user experience, reflecting the high standards expected in medical/dental websites. 