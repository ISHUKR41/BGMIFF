# GameArena BGMI Tournament Platform - Design Guidelines

## Design Approach
**System-Based Approach**: Using Fluent Design System principles adapted for a professional, dark-themed tournament platform. The aesthetic draws inspiration from Linear's minimalist professionalism, Vercel's modern restraint, and Stripe's clarity - creating a corporate-grade tournament experience.

## Core Design Principles
1. **Professional Corporate Identity**: Clean, business-focused aesthetics - NO gaming visuals, NO vibrant gradients, NO game-inspired elements
2. **Information Hierarchy**: Tournament data presented with corporate precision
3. **Dark Theme Foundation**: Sophisticated dark interface with excellent contrast
4. **Minimal Motion**: Subtle, professional animations only

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight
- Captions/Meta: 400 weight

**Secondary Font**: JetBrains Mono (for numbers, IDs, transaction data)
- Tournament stats: 500 weight
- Pricing/IDs: 400 weight

**Type Scale**:
- Hero Heading: text-6xl (60px) → text-4xl mobile
- Section Heading: text-4xl (36px) → text-3xl mobile
- Card Heading: text-2xl (24px) → text-xl mobile
- Body Text: text-base (16px)
- Caption: text-sm (14px)
- Meta Info: text-xs (12px)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Card gaps: gap-6, gap-8
- Micro spacing: space-y-4, gap-4

**Container Widths**:
- max-w-7xl for main content sections
- max-w-4xl for tournament detail pages
- max-w-2xl for embedded forms

**Grid Systems**:
- Tournament Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Stats Display: grid-cols-2 md:grid-cols-4
- Form Sections: Single column, max-w-2xl centered

## Component Library

### Navigation
- Fixed top navigation bar with glassmorphic effect
- Logo left, navigation links center, CTA button right
- Mobile: Hamburger menu with slide-in panel
- Height: h-16
- Backdrop blur: backdrop-blur-lg

### Hero Section (Landing Page)
- Height: min-h-[60vh] (not full viewport)
- Large centered heading with tournament tagline
- Brief description (max 2 lines)
- Primary CTA: "View Tournaments"
- NO hero image - clean dark gradient background
- Centered layout with generous padding

### Tournament Cards (Landing)
- Card background: subtle border with hover elevation
- Height: min-h-[320px]
- Structure: Tournament name, Prize breakdown, Entry fee, Slots available, Quick stats grid, CTA button
- Hover: Subtle border glow effect

### Tournament Detail Pages
**Header Section**:
- Tournament name (text-4xl)
- Entry fee badge and slots remaining
- Prize pool breakdown in grid (Winner, Runner-up, Per Kill)
- Registration CTA (prominent, sticky on scroll)

**Rules Section**:
- Accordion-style expandable rules
- Each rule in bordered container
- Icons for visual hierarchy

**Payment Instructions**:
- Step-by-step layout
- QR code placeholder (if applicable)
- Transaction ID format specification
- Clear visual separation

**Embedded Form Section**:
- Google Form embedded in iframe
- Fallback: "Open in New Tab" button if embed fails
- Container: max-w-2xl, centered, padding p-8
- Background: slightly elevated from page background

### Stat Displays
- Grid of 2x2 or 4 columns
- Large numbers with JetBrains Mono
- Labels below numbers
- Subtle dividers between stats

### Info Panels
- Border radius: rounded-lg
- Padding: p-6
- Border: 1px subtle border
- Background: elevated dark surface

### Buttons
**Primary CTA**:
- Padding: px-8 py-4
- Font: text-base font-semibold
- Border radius: rounded-lg
- Hover: Slight brightness increase
- Active: Scale down slightly (scale-95)

**Secondary Button**:
- Outline style with border
- Same padding as primary
- Hover: Background fill

**Form Buttons** (within embedded forms):
- Follow Google Forms native styling
- Do not override

### Forms Integration
- Iframe container: aspect-[4/3] md:aspect-[16/10]
- Border: subtle rounded border
- Shadow: minimal elevation
- Fallback button: Centered below iframe, secondary style

## Animations & Interactions

**Page Transitions**: Fade in with slight upward motion (y: 20 → 0)
**Card Hover**: Transform scale-[1.02], border glow
**Button Hover**: Brightness filter
**Scroll Reveals**: Fade in elements as they enter viewport

**No excessive animations** - keep it corporate and professional

## Accessibility

- Focus states: 2px outline offset
- Keyboard navigation fully supported
- ARIA labels on all interactive elements
- Minimum touch target: 44x44px
- Color contrast: WCAG AA minimum

## Responsive Breakpoints

- Mobile: 320px - 767px (single column)
- Tablet: 768px - 1023px (2 column max)
- Desktop: 1024px - 1439px (3 column layouts)
- Large Desktop: 1440px+ (max-w-7xl container)

## Page Structure

### Landing Page (/)
1. Navigation (fixed)
2. Hero Section (60vh, centered content)
3. Tournament Cards Grid (3 cards: Solo, Duo, Squad)
4. Features Section (Why GameArena - 4 feature cards)
5. How It Works (4-step process)
6. Footer (Links, Social, Contact info)

### Tournament Pages (/solo, /duo, /squad)
1. Navigation (fixed)
2. Tournament Header (Name, Prizes, Entry fee)
3. Tournament Stats Grid
4. Rules & Guidelines (Accordion)
5. Payment Instructions
6. Embedded Google Form Section
7. Footer

## Images

**Landing Hero**: NO image - use dark gradient background
**Tournament Cards**: NO images - icon-based design
**Feature Icons**: Use Heroicons library (outline style)
**Payment QR**: Placeholder box with centered text "QR Code"
**Overall**: This is a text and data-focused professional platform - minimal imagery

## Special Features

**Typing Sounds**: JavaScript implementation on form inputs (not design, but noted)
**Form Embedding**: Prioritize iframe embed, fallback to new tab button
**Dark Theme**: All designs assume dark background foundation

## Visual Hierarchy Priorities

1. Tournament prizes (most prominent)
2. Registration CTA
3. Entry fees and slots
4. Rules and payment instructions
5. Supporting content

This creates a professional, corporate-grade tournament platform optimized for clarity, trust, and conversion - completely distinct from typical gaming aesthetics.