# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm i          # Install dependencies
npm run dev    # Start development server on port 3000 (auto-opens browser)
npm run build  # Build for production to /build directory
```

## Project Architecture

This is a React + Vite landing page for Situ8, built from a Figma design. The application uses:

- **React 18** with TypeScript
- **Vite** as build tool and dev server
- **Radix UI** for accessible, unstyled components
- **Tailwind CSS** for styling (configured through class utilities)
- **shadcn/ui** component library (located in `src/components/ui/`)

### Component Structure

The app follows a modular component architecture:

- **Main sections** (`src/components/`): Hero, Problems, LogoSection, HowItWorks, Benefits
- **Layout components**: Header, Footer
- **Interactive elements**: DemoModal (central CTA modal)
- **UI library** (`src/components/ui/`): Comprehensive shadcn/ui components using Radix primitives

### Key Integration Points

1. **Demo Modal Flow**: The DemoModal is the primary conversion point, triggered from Header, Hero, and Footer CTAs
2. **Smooth Scrolling**: Implemented in App.tsx for anchor navigation
3. **Path Aliases**: `@` is configured to resolve to `src/` directory

### Styling Approach

- Uses Tailwind CSS classes directly in components
- Global styles in `src/index.css` and `src/styles/globals.css`
- Component-specific styles use Tailwind utilities with `clsx` and `tailwind-merge`

## Important Patterns

- All Radix UI packages are aliased in `vite.config.ts` for version consistency
- The app uses React hooks for state management (useState, useEffect)
- Toast notifications are handled via `sonner` component