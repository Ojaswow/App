# Premium Mobile Media Player - Design Guidelines

## Design Approach: Reference-Based (Media Category)
Drawing inspiration from premium media apps like Netflix, Spotify, and Apple TV, focusing on immersive visual experiences with glassmorphism aesthetics.

## Core Design Elements

### A. Color Palette
**Glassmorphism Theme (Primary)**
- Primary: 220 15% 8% (Deep charcoal base)
- Secondary: 220 20% 95% (Frosted white overlay)
- Accent: 200 100% 70% (Cyan glow)
- Background: 220 25% 5% (Rich black)
- Glass overlay: 0 0% 100% with 10% opacity

**Alternative Themes**
- Golden Royal: 45 100% 50% gold accents on 0 0% 5% black
- Neon Cyberpunk: 300 100% 60% magenta, 240 100% 60% blue on 260 15% 8% dark

### B. Typography
- Primary: Poppins (600 weight for headings, 400 for body)
- Secondary: Roboto (300 weight for subtle text)
- Sizes: text-3xl (headers), text-lg (body), text-sm (captions)

### C. Layout System
Tailwind spacing: 2, 4, 6, 8, 12, 16
- Mobile-first responsive design
- Safe area padding for mobile devices
- Grid layouts: 2 columns on mobile, 4+ on desktop

### D. Component Library

**Glass Effects**
- Backdrop blur with bg-white/10 and backdrop-blur-lg
- Rounded corners: rounded-2xl consistently
- Subtle borders with border-white/20
- Drop shadows: shadow-2xl with colored glows

**Media Components**
- Video thumbnails with gradient overlays
- Floating play buttons with glassmorphism
- Progress bars with animated gradient fills
- Photo thumbnails with hover scale transforms

**Navigation**
- Bottom tab bar for mobile (Videos | Photos | All Media)
- Floating action buttons with glow effects
- Gesture-friendly touch targets (min 44px)

**Controls**
- Glass-panel control overlays
- Smooth fade in/out animations
- Touch-friendly slider controls
- Minimalist icon-only buttons

### E. Animations
- Subtle scale transforms on hover/tap (scale-105)
- Fade transitions between screens (300ms duration)
- Smooth glass panel slide-ups
- Minimal loading indicators with gradient pulses

## Screen-Specific Design

**Splash Screen**: Animated logo with glassmorphism reveal
**Home Screen**: Tab-based navigation with unified media grid
**Video Player**: Full-screen with floating glass controls
**Photo Viewer**: Immersive view with subtle overlay controls
**Library Grid**: Responsive thumbnails with video/photo indicators

## Mobile Optimizations
- Touch-friendly 44px minimum targets
- Swipe gestures for navigation
- Pull-to-refresh functionality
- Safe area considerations for notched displays
- Optimized for one-handed use

## Images
No hero images required. Focus on user media content (videos/photos) as primary visual elements with glassmorphism overlays and controls.