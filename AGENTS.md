# Korriente · AI Agent Guide

> **Automation • Intelligence • Flow**

AI agents operating in this codebase should understand these conventions and expectations to be immediately productive.

---

## 🎯 Project Overview

**Korriente** is a modern, tech-focused landing page and product experience built with Next.js. The project emphasizes:
- **Performance first**: Server-side rendering, optimized assets, minimal JS
- **Design consistency**: Dark theme with blue/cyan accents (Space Grotesk typography)
- **Smooth interactions**: Fade-in animations, scroll behaviors, micro-interactions
- **Spanish-first**: Content and UX language is primarily Spanish

---

## 🛠️ Quick Start Commands

```bash
# Development
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 📁 Project Structure

```
/app                 # Next.js app directory (SSR, API routes)
/components          # Reusable React components
  /sections          # Page sections (hero, features, etc.)
  /ui                # UI primitives (buttons, cards, nav, etc.)
/public              # Static assets (images, fonts, icons)
/styles              # Global styles, CSS variables, animations
/lib                 # Utilities, helpers, constants
/content             # Content data (copy, metadata)
```

---

## 🎨 Design System & Theming

### Color Palette
- **Primary**: `--blue: #2563eb` (interactive, CTAs, accents)
- **Secondary**: `--cyan: #06b6d4` (eyebrows, labels, highlights)
- **Background**: `--bg: #0a0a0a`, `--bg2: #111111`, `--bg3: #161616` (dark theme)
- **Text**: `--text: #f0f0f0` (primary), `--muted: #888` (secondary)
- **Borders**: `rgba(255,255,255,0.07)` (subtle separation)

### Typography
- **Headline font**: Space Grotesk (weights: 300-700)
- **Monospace/UI**: Space Mono (weights: 400, 700)
- **Fallback stack**: Sans-serif, monospace

### Animation Conventions
- Fade-in on scroll: `fade-in` class with staggered delays (`.fade-in-delay-1` through `.fade-in-delay-7`)
- Transition duration: 0.7s for fade-ins, 0.2s for micro-interactions
- Transform base: `translateY(24px)` for vertical entrance
- Use `visible` class toggle to trigger animations

---

## 💻 Code Style & Conventions

### React Components
- **Functional components only**: Use hooks (`useState`, `useEffect`, etc.)
- **Naming**: PascalCase for components (e.g., `HeroSection`, `CTAButton`)
- **Props**: Type with TypeScript interfaces when possible
- **Composition**: Build from UI primitives in `/components/ui`

### CSS & Styling
- **CSS Variables**: Define all colors, spacing, fonts in `:root`
- **BEM-inspired**: Use descriptive class names (e.g., `.btn-primary`, `.nav-links`)
- **Mobile-first**: Use `@media (max-width: ...)` for responsive design
- **No Tailwind**: Project uses vanilla CSS (CSS-in-JS or CSS modules if needed)
- **Scoped styles**: Keep styles close to components when possible

### File Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `fadeInObserver.ts`)
- Styles: Match component name (e.g., `HeroSection.module.css`)

---

## 🔑 Key Patterns & Features

### Intersection Observer for Animations
Use the `IntersectionObserver` API to trigger fade-in animations when elements scroll into view:
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe .fade-in elements
}, []);
```

### Navigation
- Fixed navbar at top, scrolled state triggers backdrop blur + border
- Mobile toggle for nav links on screens < 768px
- Logo styling: `<span class="k">K</span><span class="rest">orriente</span>`

### Responsive Grid
- Hero section: 2-column grid on desktop, 1-column on mobile (< 900px)
- Sections: Use CSS Grid with fluid spacing (`gap: clamp(...)`)
- Images: Optimize with Next.js `<Image>` component

---

## 🌐 i18n & Localization

- **Default language**: Spanish (es)
- **Future expansion**: Prepare structure for i18n (use next-i18next or similar)
- **Content structure**: Keep copy in `/content` directory for easy translations

---

## ✅ Quality Standards

### Performance
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse score**: Target 90+ on all categories

### Accessibility
- Semantic HTML: Use `<header>`, `<nav>`, `<section>`, `<footer>`
- Color contrast: WCAG AA minimum (4.5:1 for body text)
- Keyboard navigation: All interactive elements tab-accessible
- Screen readers: Test with axe, WAVE, or similar

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari 12+, Chrome Android 90+
- **No IE11 support**

---

## 🔗 Agent Instructions

When working on Korriente, follow these priorities:

1. **Maintain the visual identity**: Never break color palette, typography, or animation conventions
2. **Mobile-first mindset**: Always test responsive behavior
3. **Performance matters**: Minimize JavaScript, leverage Next.js optimizations (SSR, Image, Font)
4. **Accessibility first**: Semantic HTML, contrast, keyboard navigation
5. **Keep it simple**: Vanilla CSS and React, avoid unnecessary abstractions
6. **Link documentation**: If a pattern or library is used, leave a comment with a link to its docs

---

## 📚 Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last updated**: April 2026 | Maintain this guide as conventions evolve
