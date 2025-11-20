# Odin Digital Design System

Complete brand and design specifications for replication.

---

## 🎨 Color Palette

### Primary Colors (HSL Format)

**Light Mode:**
```css
--background: 0 0% 100%;           /* #FFFFFF - Pure White */
--foreground: 0 0% 13%;            /* #212121 - Charcoal Black */

--primary: 345 82% 48%;            /* #D91C5C - Deep Red/Magenta */
--primary-foreground: 0 0% 100%;   /* #FFFFFF - White */
--primary-glow: 345 82% 60%;       /* #E84575 - Lighter Red for glows */

--secondary: 0 100% 24%;           /* #7A0000 - Dark Burgundy */
--secondary-foreground: 0 0% 100%; /* #FFFFFF - White */

--accent: 331 65% 15%;             /* #3A0E2B - Deep Purple */
--accent-foreground: 0 0% 100%;    /* #FFFFFF - White */

--charcoal: 0 0% 13%;              /* #212121 - Charcoal Black */
--charcoal-foreground: 0 0% 100%;  /* #FFFFFF - White */

--muted: 0 0% 96%;                 /* #F5F5F5 - Light Gray */
--muted-foreground: 0 0% 38%;      /* #616161 - Medium Gray */

--destructive: 0 84% 45%;          /* #D42020 - Error Red */
--destructive-foreground: 0 0% 100%; /* #FFFFFF - White */

--border: 0 0% 88%;                /* #E0E0E0 - Border Gray */
--input: 0 0% 88%;                 /* #E0E0E0 - Input Border */
--ring: 345 82% 48%;               /* #D91C5C - Focus Ring (Primary) */

--card: 0 0% 100%;                 /* #FFFFFF - Card Background */
--card-foreground: 0 0% 13%;       /* #212121 - Card Text */

--popover: 0 0% 100%;              /* #FFFFFF - Popover Background */
--popover-foreground: 0 0% 13%;    /* #212121 - Popover Text */
```

**Dark Mode:**
```css
--background: 0 0% 7%;             /* #121212 - Almost Black */
--foreground: 0 0% 95%;            /* #F2F2F2 - Off White */

--primary: 345 82% 60%;            /* #E84575 - Lighter Red (for contrast) */
--primary-foreground: 0 0% 7%;     /* #121212 - Dark Background */

--secondary: 0 100% 35%;           /* #B30000 - Brighter Red */
--secondary-foreground: 0 0% 95%;  /* #F2F2F2 - Light Text */

--accent: 331 65% 25%;             /* #5A1740 - Lighter Purple */
--accent-foreground: 0 0% 95%;     /* #F2F2F2 - Light Text */

--muted: 0 0% 15%;                 /* #262626 - Dark Muted */
--muted-foreground: 0 0% 70%;      /* #B3B3B3 - Light Muted Text */

--border: 0 0% 20%;                /* #333333 - Dark Border */
--input: 0 0% 20%;                 /* #333333 - Dark Input Border */
--ring: 345 82% 60%;               /* #E84575 - Focus Ring */

--card: 0 0% 10%;                  /* #1A1A1A - Card Background */
--card-foreground: 0 0% 95%;       /* #F2F2F2 - Card Text */
```

### Sidebar Colors

**Light Mode:**
```css
--sidebar-background: 0 0% 98%;    /* #FAFAFA */
--sidebar-foreground: 0 0% 13%;    /* #212121 */
--sidebar-primary: 345 82% 48%;    /* #D91C5C */
--sidebar-primary-foreground: 0 0% 100%; /* #FFFFFF */
--sidebar-accent: 0 0% 94%;        /* #F0F0F0 */
--sidebar-accent-foreground: 0 0% 13%; /* #212121 */
--sidebar-border: 0 0% 88%;        /* #E0E0E0 */
--sidebar-ring: 345 82% 48%;       /* #D91C5C */
```

**Dark Mode:**
```css
--sidebar-background: 0 0% 10%;    /* #1A1A1A */
--sidebar-foreground: 0 0% 95%;    /* #F2F2F2 */
--sidebar-primary: 345 82% 60%;    /* #E84575 */
--sidebar-primary-foreground: 0 0% 7%; /* #121212 */
--sidebar-accent: 0 0% 15%;        /* #262626 */
--sidebar-accent-foreground: 0 0% 95%; /* #F2F2F2 */
--sidebar-border: 0 0% 20%;        /* #333333 */
--sidebar-ring: 345 82% 60%;       /* #E84575 */
```

### HEX Color Reference

For non-HSL implementations:
- **Primary Red:** `#D91C5C` (HSL: 345° 82% 48%)
- **Primary Glow:** `#E84575` (HSL: 345° 82% 60%)
- **Secondary Burgundy:** `#7A0000` (HSL: 0° 100% 24%)
- **Accent Purple:** `#3A0E2B` (HSL: 331° 65% 15%)
- **Charcoal:** `#212121` (HSL: 0° 0% 13%)
- **Light Gray:** `#F5F5F5` (HSL: 0° 0% 96%)
- **Border Gray:** `#E0E0E0` (HSL: 0° 0% 88%)
- **Meta Theme Color:** `#E01B5D`

---

## 🎨 Gradients

### Primary Gradient
```css
--gradient-primary: linear-gradient(135deg, hsl(345 82% 48%), hsl(345 75% 28%));
```
**Usage:** Primary CTA buttons, hero accents  
**Colors:** `#D91C5C` → `#7D1633`

### Hero Gradient
```css
--gradient-hero: linear-gradient(135deg, hsl(0 0% 96%) 0%, hsl(331 20% 95%) 100%);
```
**Usage:** Hero section backgrounds  
**Colors:** `#F5F5F5` → `#F3ECF0`

### Subtle Gradient
```css
--gradient-subtle: linear-gradient(180deg, hsl(0 0% 100%), hsl(0 0% 96%));
```
**Usage:** Section backgrounds, card backgrounds  
**Colors:** `#FFFFFF` → `#F5F5F5`

### Tailwind Config Gradients
```javascript
backgroundImage: {
  "gradient-primary": "var(--gradient-primary)",
  "gradient-hero": "var(--gradient-hero)",
  "gradient-subtle": "var(--gradient-subtle)",
}
```

---

## ✍️ Typography

### Font Families

**Primary Font:** Inter (Sans-serif)
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
```

**Font Weights Used:**
- 300 - Light
- 400 - Regular
- 500 - Medium
- 600 - Semi-Bold
- 700 - Bold
- 800 - Extra-Bold
- 900 - Black

**Tailwind Config:**
```javascript
fontFamily: {
  sans: ["Inter", "sans-serif"],
  montserrat: ["Montserrat", "sans-serif"],
}
```

**Font Stack:**
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

### Heading Styles
All headings (`h1` - `h6`):
- Font Family: `Inter`
- Font Weight: `700` (Bold)
- Line Height: `1.2`

### Body Text
- Font Size: `16px` (mobile to prevent iOS zoom)
- Line Height: `1.5`
- Font Smoothing: `-webkit-font-smoothing: antialiased`

---

## 🎭 Shadows & Effects

### Shadow Tokens
```css
--shadow-primary: 0 4px 16px -4px hsl(345 82% 48% / 0.2);
--shadow-glow: 0 0 24px hsl(345 82% 60% / 0.15);
--shadow-card: 0 2px 12px -2px hsl(0 0% 13% / 0.08);
```

**Tailwind Config:**
```javascript
boxShadow: {
  "primary": "var(--shadow-primary)",
  "glow": "var(--shadow-glow)",
  "card": "var(--shadow-card)",
}
```

**Usage:**
- `shadow-primary` - Primary buttons, hover states
- `shadow-glow` - Glowing effects, emphasis
- `shadow-card` - Card components, elevated surfaces

---

## 🎬 Animations & Transitions

### Transition Timing
```css
--transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Keyframe Animations

**Fade In:**
```css
@keyframes fade-in {
  from { 
    opacity: 0; 
    transform: translateY(8px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}
```

**Accordion:**
```javascript
keyframes: {
  "accordion-down": {
    from: { height: "0", opacity: "0" },
    to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
    to: { height: "0", opacity: "0" },
  },
}
```

**Scale In:**
```javascript
keyframes: {
  "scale-in": {
    from: { opacity: "0", transform: "scale(0.98)" },
    to: { opacity: "1", transform: "scale(1)" },
  },
}
```

**Blob Animation:**
```javascript
keyframes: {
  "blob": {
    "0%": { transform: "translate(0px, 0px) scale(1)" },
    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
    "100%": { transform: "translate(0px, 0px) scale(1)" },
  },
}
animation: {
  "blob": "blob 7s infinite",
}
```

**Float Animation:**
```javascript
keyframes: {
  "float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
}
animation: {
  "float": "float 6s ease-in-out infinite",
}
```

**Scroll Animations (for carousels):**
```css
@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0%); }
}
@keyframes scroll-left {
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

---

## 📐 Border Radius

```css
--radius: 0.75rem; /* 12px */
```

**Tailwind Config:**
```javascript
borderRadius: {
  lg: "var(--radius)",        /* 0.75rem (12px) */
  md: "calc(var(--radius) - 2px)", /* 0.625rem (10px) */
  sm: "calc(var(--radius) - 4px)", /* 0.5rem (8px) */
}
```

---

## 🖼️ Logo Specifications

### Primary Logo
**File:** `odin-digital-logo-new.png`  
**Path:** `src/assets/odin-digital-logo-new.png`  
**Formats:** PNG, WebP (optimized versions with responsive sizes: 320w)  
**Usage:** Main site header, navigation

### Logo Variants

| Variant | File | Usage |
|---------|------|-------|
| **Primary (Gradient)** | `odin-logo-gradient.png` | Headers, light backgrounds |
| **White** | `odin-logo-white.png` | Dark backgrounds, footer |
| **Footer** | `odin-logo-footer.png` | Site footer |
| **Lead Magnet** | `odin-logo-lead-magnet.png` | Marketing materials |
| **Simple** | `odin-logo.png` | General purpose |
| **Brand Icon (Vibrant)** | `brand-icon-vibrant.png` | Favicons, small spaces |
| **Brand Icon (Subtle)** | `brand-icon-subtle.png` | Watermarks, backgrounds |

**Favicon:**  
`https://storage.googleapis.com/gpt-engineer-file-uploads/HO5itGKhgZVNorUDadOqsOweCu72/uploads/1762149044221-Screenshot 2025-11-03 at 4.47.44 PM.png`

---

## 📸 Hero Images & Assets

### Primary Hero Image
**File:** `hero-person-optimized.webp`  
**Alt Versions:**
- `hero-person-compressed.webp` (LCP optimized)
- `hero-person-new.png` / `.webp`
- Responsive: `hero-person-new-320w.webp`, `640w`, `768w`

**Preload (Critical):**
```html
<link rel="preload" as="image" href="/assets/img/hero-person-compressed.webp" type="image/webp" fetchpriority="high" />
```

### Background Images
**Files:**
- `hero-bg.jpg` / `.webp`
- Responsive: `hero-bg-320w.webp`, `640w`, `768w`, `1024w`, `1280w`

### Brand Background Assets
- `brand-icon-subtle.png` / `.webp` (320w available)
- `brand-icon-vibrant.png` / `.webp`

---

## 👥 Team Member Photos

### Leadership Team

| Name | File | Responsive Sizes |
|------|------|------------------|
| **Alexa Blake** (CEO) | `hero-person-optimized.webp` | 320w, 640w, 768w |
| **Sarah Mitchell** | `sarah-mitchell.png`, `.webp` | 320w, 640w, 768w |
| **Emily Platt** | `emily-platt.png`, `.webp` | 320w, 640w, 768w |
| **Alfonso Rodriguez** | `alfonso-rodriguez.png`, `.webp` | 320w, 640w, 768w |
| **Matteo Banzon** | `matteo-banzon.png`, `.webp` | 320w, 640w, 768w |

### Additional Team Photos
- `lucas-durante-ceo.jpg`, `.webp` (320w, 640w, 768w)
- `lucas-durante-real.jpg`, `.webp` (320w, 640w, 768w, 1024w)
- `lucas-durante-new.png`, `.webp` (320w, 640w, 768w)
- `odin-team-professional.jpg`, `.webp` (320w, 640w, 768w, 1024w)
- `odin-team-real.jpg`, `.webp` (320w, 640w, 768w, 1024w)
- `odin-team-stock.jpg`, `.webp` (320w, 640w, 768w, 1024w)
- `marketing-team-expertise.jpg`, `.webp` (320w, 640w, 768w)

---

## 🏢 Client Logos & Testimonials

### Client Photos
- `evan-tsaboukos.webp` (Imperial Wealth)
- `ycl-jewelry.jpg`, `.webp` (320w, 640w) - Fabienne Costa, YCL Jewels
- `krush-organics.png`, `.webp` (320w, 640w) - Liam C, Krush Organics
- `will-wright-mining-store.webp`

### Client Work Examples
- `adriatic-furniture.jpg`, `.webp` (320w, 640w, 768w, 1024w, 1280w)
- `bulk-buys-australia.jpg`, `.webp` (320w, 640w, 768w, 1024w, 1280w)

### Content Marketing Assets
- `content-marketing-matrix.jpg`, `.webp` (320w, 640w, 768w, 1024w)

---

## 📁 Directory Structure

```
src/assets/
├── blog/                    # Blog post images
├── locations/               # Location-specific images
├── logos/                   # Partner & client logos
├── media/                   # General media assets
├── partners/                # Partnership logos
├── [team-photos].webp       # Team member photos
├── [client-logos].webp      # Client testimonial photos
├── [hero-images].webp       # Hero section images
└── odin-digital-logo-*.png  # Logo variants
```

---

## 🎯 Component-Level Patterns

### Standard Background Pattern (Homepage Style)
```jsx
<div className="relative overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
  {/* Animated background blobs */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-blob" />
  <div className="absolute top-0 right-0 w-96 h-96 bg-muted/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
  <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
  
  {/* Floating particles */}
  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float" />
  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-float animation-delay-2000" />
  
  {/* Content here */}
</div>
```

### Text Contrast Standards
- **Light backgrounds:** Use `text-charcoal`, `text-charcoal/90`, `text-charcoal/70`
- **Dark backgrounds:** Use `text-white`, `text-primary-foreground`
- **Hero headlines:** `text-charcoal` on light `bg-gradient-to-br from-white via-muted/30 to-muted/20`

### Button Styles
Primary CTA buttons use gradient from deeper red to darker burgundy:
```jsx
<Button className="bg-gradient-primary hover:shadow-primary transition-smooth">
  CTA Text
</Button>
```

---

## 📱 Mobile Optimization Standards

### Touch Targets
Minimum size: `44px × 44px`
```css
a, button {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}
```

### Font Sizes
```css
@media (max-width: 768px) {
  body, input, textarea, select {
    font-size: 16px; /* Prevent iOS zoom */
  }
}
```

### Responsive Text Wrapping
```jsx
<Button className="whitespace-normal break-words py-3 px-6">
  Button Text
</Button>
```

---

## 🔍 SEO & Meta Information

### Default Meta Tags
```html
<title>Odin Digital | Strategic Digital Marketing Agency Australia</title>
<meta name="description" content="Award-winning digital marketing agency. $574M+ client revenue, 540% ROI. SEO, Google Ads & conversion optimisation services across Australia.">
<meta name="theme-color" content="#E01B5D" />
```

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Odin Digital",
  "url": "https://odindigital.com.au",
  "logo": "https://odindigital.com.au/odin-logo.png",
  "description": "Strategic digital marketing agency delivering measurable growth with 182+ years of combined expertise and 540% average ROI."
}
```

---

## 📊 Trust Metrics (Brand Copy)

Display prominently across service pages:
- **$574M+** in verified client revenue
- **540%** average ROI on ad spend
- **95%** client retention rate
- **283+** successful campaigns delivered
- **182+** years combined team expertise

---

## 🎨 Utility Classes

### Gradient Classes
```css
.gradient-primary { background: var(--gradient-primary); }
.gradient-hero { background: var(--gradient-hero); }
```

### Shadow Classes
```css
.shadow-primary { box-shadow: var(--shadow-primary); }
.shadow-glow { box-shadow: var(--shadow-glow); }
.shadow-card { box-shadow: var(--shadow-card); }
```

### Transition Classes
```css
.transition-smooth { transition: var(--transition-smooth); }
.transition-bounce { transition: var(--transition-bounce); }
```

---

## ⚡ Performance Standards

### Critical CSS
Inline critical CSS in `<head>` for FCP optimization (see `src/utils/criticalCSS.ts`)

### Image Optimization
- All images have WebP versions
- Responsive srcsets (320w, 640w, 768w, 1024w, 1280w)
- Lazy loading for non-critical images
- `fetchpriority="high"` for LCP images

### Target Metrics
- **Google PageSpeed Score:** 90+
- **Mobile Load Time:** <3 seconds
- **LCP (Largest Contentful Paint):** <2.5s
- **CLS (Cumulative Layout Shift):** <0.1

---

## 📦 Implementation Checklist

When replicating this design system:

✅ Install Inter font (weights: 300-900)  
✅ Copy all CSS variables from `src/index.css`  
✅ Configure Tailwind with extended colors, gradients, shadows  
✅ Download logo assets from `src/assets/`  
✅ Implement light backgrounds with dark text for contrast  
✅ Add floating circles, animated blobs, geometric shapes to hero sections  
✅ Use semantic color tokens (never hardcoded hex values)  
✅ Ensure 44px minimum touch targets for mobile  
✅ Add responsive text wrapping to buttons (`whitespace-normal break-words`)  
✅ Inline critical CSS for above-the-fold content  
✅ Preload hero images with `fetchpriority="high"`  
✅ Test on mobile devices for text overflow and contrast  

---

**Design System Version:** 1.0  
**Last Updated:** 2025  
**Organization:** Odin Digital  
**Primary Brand Color:** #D91C5C (Deep Red/Magenta)
