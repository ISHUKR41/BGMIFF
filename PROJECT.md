# GameArena - BGMI Tournament Platform

## 📋 Project Overview

GameArena is a professional BGMI (Battlegrounds Mobile India) tournament registration and management platform. It provides players with an easy way to register for competitive tournaments, view rules, check leaderboards, and win exciting prizes.

### 🎯 Main Purpose
To create a seamless, professional platform for organizing and managing BGMI tournaments across different game modes (Solo, Duo, Squad) with integrated payment verification and Google Forms registration.

## ✨ Current Features

### 🏠 Home Page
- **Hero Section**: Eye-catching banner with animated background and clear call-to-action buttons
- **Video Introduction**: Platform overview and tournament highlights
- **Live Stats Counter**: Animated counters showing total players, tournaments, and prizes distributed
- **Tournament Cards**: Quick overview of all three tournament modes (Solo, Duo, Squad)
- **How It Works**: Step-by-step registration guide with visual indicators
- **Feature Showcase**: Detailed cards highlighting platform benefits
- **Live Tournament Tracker**: Real-time countdown and slot availability
- **News & Updates**: Latest tournament results and announcements
- **FAQ Section**: Common questions with accordion interface
- **Testimonials**: Player reviews and ratings with star ratings
- **Image Gallery**: Tournament action shots with lightbox viewer
- **CTA Bands**: Multiple call-to-action sections encouraging registration

### 🎮 Tournament Pages

#### Solo Tournament
- Entry Fee: ₹20 per player
- 100 player slots
- Winner Prize: ₹350
- Runner-up Prize: ₹250
- Per Kill Reward: ₹9
- Features: Individual performance stats, kill leaderboard, past winners showcase
- Embedded Google Form for seamless registration

#### Duo Tournament
- Entry Fee: ₹40 per team (2 players)
- 50 team slots
- Winner Prize: ₹350
- Runner-up Prize: ₹250
- Per Kill Reward: ₹9
- Features: Team coordination tips, duo strategies, both players' details display
- Duo-specific FAQs covering teamwork and communication

#### Squad Tournament
- Entry Fee: ₹80 per squad (4 players)
- 25 squad slots
- Winner Prize: ₹350
- Runner-up Prize: ₹250
- Per Kill Reward: ₹9
- Features: Squad roles guide (IGL, Fragger, Support, Sniper), team formation tips
- Video section with tournament highlights and strategy guides
- Enhanced FAQs covering squad coordination and captain responsibilities

### 📞 Contact Page
- **Multiple Contact Methods**: WhatsApp (24/7), Phone, Email
- **Google Maps Integration**: Embedded interactive map showing location
- **Contact Form**: Comprehensive form with categories (technical, payment, tournament, general, account)
- **Form Validation**: Real-time validation using Zod schema
- **FAQ Section**: Accordion with common questions
- **Social Media Links**: Instagram, Facebook, Twitter/X, LinkedIn
- **Support Hours Display**: Clear indication of availability for each contact method
- **Toast Notifications**: Success/error messages for form submission

### 🎨 Design & User Experience
- **Dark Theme**: Professional dark mode with excellent contrast
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Professional Aesthetic**: Clean, corporate-grade design inspired by Linear and Vercel
- **Accessibility**: Built with Radix UI primitives for keyboard navigation and screen readers
- **Loading States**: Skeleton screens and spinners for better UX
- **Interactive Elements**: Hover effects, click animations, smooth scrolling

### 💳 Payment & Registration System
- **Google Forms Integration**: Embedded forms for each tournament mode
- **Payment Verification**: Screenshot upload and transaction ID validation
- **UPI Payment Support**: Official QR code for secure payments
- **WhatsApp Notifications**: Slot confirmation within 2-6 hours
- **No Refund Policy**: Clear terms displayed during registration

### 📊 Data Display Components
- **Stat Cards**: Animated counter cards with icons
- **Leaderboards**: Sortable tables showing player/team rankings
- **Past Winners**: Historical tournament results with prizes
- **Rules Accordion**: Expandable sections for tournament rules
- **Payment Instructions**: Step-by-step payment guide with visual indicators
- **Media Lightbox**: Image gallery with full-screen viewer

## 🔮 Future Features & Enhancements

### 🎮 Additional Games Support
1. **Free Fire Tournament Platform**
   - Solo, Duo, Squad modes
   - Similar prize structure
   - Separate registration forms
   - Game-specific rules and FAQs

2. **Call of Duty Mobile (CODM)**
   - Battle Royale and Multiplayer modes
   - Team-based tournaments
   - Ranked competition support

3. **PUBG Mobile (International)**
   - Global tournament platform
   - Multi-region support
   - International payment gateways

4. **Valorant Mobile** (when released)
   - 5v5 competitive format
   - Agent-based strategy guides
   - Rank-specific tournaments

### 🚀 Platform Enhancements

#### User Accounts & Profiles
- Player registration and login system
- Profile dashboard with tournament history
- Stats tracking and performance analytics
- Achievement badges and ranking system
- Referral program for bringing new players

#### Live Streaming Integration
- YouTube live stream embedding
- Twitch integration
- Match highlights and VOD library
- Live commentary and casting

#### Advanced Tournament Management
- Multi-round tournaments with brackets
- Point-based league system
- Seasonal championships
- Qualifier and final rounds
- Automated bracket generation

#### Payment Improvements
- Multiple payment gateways (PhonePe, Paytm, Google Pay)
- Automated payment verification using APIs
- Instant slot confirmation
- Refund processing system for cancelled tournaments
- Prize money auto-transfer to winners

#### Community Features
- Player forums and discussion boards
- Team/squad finder system
- Chat system for team coordination
- Tournament preview and analysis
- Player-to-player messaging

#### Enhanced Analytics
- Real-time tournament analytics
- Player performance graphs
- Kill heatmaps
- Win rate statistics
- Weapon usage analysis
- Landing zone preferences

#### Mobile App
- Native Android app for better mobile experience
- Push notifications for tournament updates
- Faster registration on mobile
- In-app payment integration
- Offline tournament details viewing

#### Admin Dashboard
- Tournament creation and management
- Payment verification interface
- Player management system
- Automated email/SMS notifications
- Results publishing system
- Ban/disqualification management

### 🎯 Content Additions
- **Strategy Guides**: Detailed guides for each game mode
- **Pro Player Interviews**: Featured content from top performers
- **Tournament Recaps**: Video highlights and written summaries
- **Training Resources**: Tips and tricks for improving gameplay
- **Meta Analysis**: Current game meta and strategy trends

### 🌐 Internationalization
- Multi-language support (Hindi, English, regional languages)
- Regional tournament hosting
- Currency conversion for international players
- Timezone-based tournament scheduling

### 🔒 Security Enhancements
- Two-factor authentication for accounts
- Anti-cheat integration and monitoring
- Secure payment gateway compliance
- GDPR and data privacy compliance
- Encrypted user data storage

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and optimized production builds)
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui (built on Radix UI primitives)
- **Animations**: Framer Motion for smooth transitions
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query v5) for server state
- **Icons**: Lucide React for icons, React Icons for brand logos
- **Typography**: Inter (primary font), JetBrains Mono (for numbers/IDs)

### Backend
- **Server**: Express.js with TypeScript
- **Runtime**: Node.js
- **Storage**: In-memory storage (MemStorage) with interface for database migration
- **Development**: Vite middleware for HMR integration
- **Database Ready**: Drizzle ORM and PostgreSQL schema prepared

### Deployment
- **Hosting**: Vercel (recommended), Replit
- **Production Build**: Static site generation with Express server
- **Environment**: Supports both development and production modes
- **Assets**: Optimized image loading with @assets alias

## 📁 Project Structure

```
project-root/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── pages/              # Page components (Home, Solo, Duo, Squad, Contact)
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Shadcn base components
│   │   │   ├── Navigation.tsx # Top navigation bar
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── ModernHero.tsx # Hero section component
│   │   │   └── ...            # Other shared components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions and config
│   │   └── App.tsx            # Main app with routing
│   ├── index.html             # HTML entry point
│   └── index.css              # Global styles and CSS variables
├── server/                     # Backend Express server
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API route definitions
│   ├── storage.ts             # Storage interface
│   └── vite.ts                # Vite middleware setup
├── shared/                     # Shared between frontend and backend
│   ├── config.ts              # Tournament and contact configuration
│   └── schema.ts              # Data models and validation schemas
├── attached_assets/            # Images and media files
│   └── generated_images/      # Tournament action images
├── design_guidelines.md        # Design system documentation
├── replit.md                  # Project overview and architecture
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Background**: Deep dark (#09090b)
- **Card**: Subtle elevation (#18181b)
- **Primary**: Neutral blue for actions
- **Muted**: Lower contrast text
- **Accent**: Secondary actions and highlights
- **Destructive**: Error and warning states

### Typography
- **Headings**: 600-700 weight, Inter font
- **Body Text**: 400-500 weight
- **Monospace**: JetBrains Mono for IDs and numbers

### Spacing System
- **Small**: 0.5rem - 1rem (tight spacing)
- **Medium**: 1.5rem - 2rem (component spacing)
- **Large**: 3rem - 4rem (section spacing)

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Server runs on http://localhost:5000

### Production Build
```bash
npm run build
npm run start
```

## 📝 Configuration

All tournament details and contact information can be modified in:
- `shared/config.ts` - Tournament fees, prizes, slots, Google Form URLs
- Update Google Form embed URLs for each tournament mode
- Modify contact details (WhatsApp, phone, email, address)
- Update social media links

## 🤝 Contributing

This project is designed for easy expansion:
1. Add new tournament modes by updating `shared/config.ts`
2. Create new page components in `client/src/pages/`
3. Add routes in `client/src/App.tsx`
4. Reuse existing components from `client/src/components/`

## 📧 Support

- **WhatsApp**: +917541024846 (24/7 Support)
- **Email**: admin@gamearena.com
- **Location**: IIT Patna Campus, Patna, Bihar, 801106

## 📄 License

All rights reserved. GameArena Tournament Platform.

---

**Built with ❤️ for the BGMI esports community**
