# GameArena Tournament Platform

## Overview

GameArena is a professional tournament registration platform designed to facilitate esports competition organization for both BGMI (Battlegrounds Mobile India) and Free Fire Max. The platform enables tournament organizers to manage Solo, Duo, and Squad tournaments through integrated Google Forms for registration, with a focus on payment verification and professional presentation.

The application serves as a modern, responsive front-end for displaying tournament information, rules, prize pools, and embedding Google Forms for participant registration. It emphasizes a clean, corporate aesthetic rather than gaming-inspired visuals, following design principles inspired by Linear's minimalist professionalism.

**Supported Games:**
- BGMI: Solo, Duo, and Squad tournaments
- Free Fire Max: Solo, Duo, and Squad tournaments

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight alternative to React Router).

**UI Framework**: Shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling.

**Styling System**: 
- Tailwind CSS with custom configuration for dark theme
- Design tokens using CSS variables for theming
- Fluent Design System principles adapted for professional tournament platform
- Typography: Inter (primary), JetBrains Mono (for numbers/IDs)
- Dark-first design with neutral color palette

**State Management**: TanStack Query (React Query) for server state and data fetching.

**Animations**: Framer Motion for page transitions and UI animations, with emphasis on subtle, professional motion.

**Key Design Decisions**:
- Component-based architecture with reusable UI elements (FeatureCard, TournamentCard, StatsDisplay, RulesAccordion, etc.)
- Mobile-first responsive design with breakpoints for tablets, desktop
- Accessibility-first approach using Radix UI primitives
- Dark theme as default with professional color scheme

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: 
- Vite middleware integration for hot module replacement in development
- Custom logging middleware for API request tracking
- Session-based request handling with raw body capture

**Storage Layer**: 
- Abstract storage interface (IStorage) with in-memory implementation (MemStorage)
- Designed to be database-agnostic with easy swap to PostgreSQL/Drizzle ORM
- User management CRUD operations defined but not actively used

**API Design**: RESTful endpoints prefixed with `/api` (routes currently minimal as platform focuses on form embedding).

**Key Architectural Decisions**:
- Separation of concerns: server, storage, and routing logic isolated
- Middleware-based request processing pipeline
- Type-safe storage interfaces using TypeScript
- Credential-based API requests with CORS handling

### Build and Deployment

**Build Process**:
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- TypeScript type checking via `tsc`

**Development Mode**: Concurrent Vite dev server with Express backend using tsx for TypeScript execution.

**Production Mode**: Serves pre-built static assets with Express.

### External Dependencies

**UI Component Libraries**:
- Radix UI suite (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- Embla Carousel for carousel functionality
- cmdk for command palette interfaces
- Lucide React for icons

**Form Handling**:
- React Hook Form with @hookform/resolvers
- Zod for schema validation
- Drizzle-zod for database schema validation

**Styling**:
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for className utilities

**Date/Time**:
- date-fns for date manipulation

**Database (Planned)**:
- Drizzle ORM configured for PostgreSQL
- @neondatabase/serverless for Neon database connectivity
- connect-pg-simple for session storage (configured but not actively used)

**Development Tools**:
- @replit/vite-plugin-runtime-error-modal for error handling
- @replit/vite-plugin-cartographer and dev-banner (Replit-specific)

**Routing**:
- Wouter for lightweight client-side routing

**Google Forms Integration**:
- External Google Forms embedded via iframe
- Fallback to opening in new tab if embedding fails
- Six forms total: Three for BGMI (Solo, Duo, Squad) and three for Free Fire Max (Solo, Duo, Squad)
- Note: Free Fire Max forms currently use short URLs (forms.gle) which may not embed properly; they fall back to "Open Form" button for direct access

**Key Integration Points**:
- Google Forms serve as the primary registration mechanism
- No backend database currently in active use (storage interface prepared for future expansion)
- Platform is primarily presentation and form embedding layer
- Payment verification handled manually through Google Form submissions (screenshot and transaction ID)