# Homepage Replication Prompt

Copy and paste this entire prompt into a new Lovable project to replicate the Odin Digital homepage:

---

Create a professional digital marketing agency homepage with the following specifications:

## Design System

**Colors (HSL format in index.css):**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221 83% 53%;
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
  --charcoal: 0 0% 20%;
  --gradient-primary: linear-gradient(135deg, hsl(221, 83%, 53%), hsl(262, 83%, 58%));
  --gradient-hero: linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(262, 83%, 58%) 100%);
  --gradient-subtle: linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(210, 40%, 98%) 100%);
  --shadow-primary: 0 10px 40px -10px hsl(221, 83%, 53%, 0.3);
  --shadow-glow: 0 0 60px hsl(262, 83%, 58%, 0.4);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 48%;
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: 0 0% 98%;
  --sidebar-primary-foreground: 240 5.9% 10%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

**Typography:**
- Font Family: Inter (sans-serif)
- Weights: 300, 400, 500, 600, 700, 800, 900
- Include Google Fonts link in index.html: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap`

**Gradients:**
- Primary gradient: Blue to purple (135deg)
- Hero gradient: Blue to purple (135deg)
- Subtle gradient: White to light blue (180deg)

## Page Structure

Create a single-page website with the following sections in order:

1. **Header** (Sticky)
   - Logo on the left
   - Desktop navigation: Services (dropdown), About, Our Clients, Blog, Contact
   - CTA button: "Get Free Quote"
   - Mobile hamburger menu
   - Scroll-based styling changes (transparent → white background with shadow)

2. **Hero Section**
   - Full-screen height
   - Split layout: Text content (left 50%), Image (right 50%)
   - Animated gradient background
   - Floating decorative elements
   - H1: "Digital Marketing Agency Australia | SEO, Google Ads, Facebook Ads | Odin Digital"
   - Subtitle highlighting key value props
   - Primary CTA button
   - "As Featured In" logos row (use placeholder logos)
   - Professional person image on right with floating card overlay

3. **Client Logos Section**
   - Scrolling carousel of client logos
   - Auto-scrolling animation
   - Use placeholder brand logos

4. **Results Section**
   - 4-column grid of key metrics
   - Large numbers with descriptions
   - Examples: "540% Average ROI", "$285M+ Client Revenue", "97% Client Retention", "15+ Years Combined Experience"
   - Animated counters on scroll

5. **Credibility Section**
   - Trust badges and certifications
   - Grid layout
   - Icons/logos for: Google Partner, Meta Partner, etc.

6. **Problem Section**
   - Dark background with gradient
   - Pain points addressing common marketing challenges
   - 3-column grid of problems
   - Empathetic copy

7. **Services Section**
   - Grid of service cards (6 services)
   - Services: SEO, Google Ads, Facebook Ads, Web Design, Content Marketing, Email Marketing
   - Each card: Icon, title, description, "Learn More" link
   - Hover effects with scale and shadow

8. **Partnerships Section**
   - Official partner logos
   - Google, Meta, Microsoft badges
   - Grid layout

9. **About Us Section**
   - Split layout: Text + Image
   - Company story and mission
   - Team photo or office image

10. **Methodology Section**
    - Our approach/process overview
    - 4-step visual process
    - Icons and descriptions

11. **Industries Section**
    - Industries we serve
    - Grid of industry cards
    - Examples: E-commerce, Healthcare, Real Estate, Professional Services, etc.

12. **Team Section**
    - Team member cards
    - Photo, name, role, bio
    - 2-3 key team members
    - Grid layout

13. **Process Section**
    - Detailed step-by-step process
    - Numbered steps (1-6)
    - Timeline/flowchart visual

14. **Assurance Section**
    - Guarantees and promises
    - Trust builders
    - No lock-in contracts, Money-back guarantee, etc.

15. **CTA Section**
    - Final call-to-action
    - Large, prominent section
    - "Schedule Your Strategic Consultation" button
    - Gradient background with animated elements

16. **Footer**
    - Company info and logo
    - Service links (organized by category)
    - Location information (collapsible states)
    - Social media links
    - Legal links (Privacy, Terms)
    - Copyright

17. **Closing Section**
    - Minimal bottom section if needed

18. **Side Tab** (Sticky)
    - Floating tab on the right side of screen
    - "Get Quote" text
    - Clicks open modal form

19. **Marketing Form Modal**
    - Multi-step form
    - Fields: Name, Email, Phone, Company, Industry, Budget, Goals, Challenges
    - Progress indicator
    - Form submission to Supabase

## Key Features

- **Responsive Design**: Mobile-first, fully responsive
- **Animations**: Fade-ins, scale-ins, floating elements, blob animations
- **Modal Form**: Marketing consultation form with context provider
- **Smooth Scrolling**: Anchor links scroll smoothly
- **SEO Optimized**: 
  - Semantic HTML
  - Meta tags with React Helmet
  - JSON-LD schema markup (Organization, Website, LocalBusiness)
  - Structured data
- **Performance**: 
  - Image optimization (WebP, lazy loading)
  - Critical CSS inlined
  - Optimized images component

## Technical Requirements

**Components to Create:**
- Header (with dropdown menu)
- Hero
- ClientLogos (carousel)
- Results (animated counters)
- Credibility
- Problem
- Services (grid of cards)
- Partnerships
- AboutUs
- Methodology
- Industries
- Team
- Process
- Assurance
- CTA
- Footer
- Closing
- SideTab (sticky floating tab)
- MarketingFormModal (multi-step form)
- OptimizedImage (custom image component)

**Context/Providers:**
- MarketingFormProvider (for modal state management)

**Utils:**
- Schema markup generators (Organization, Website, LocalBusiness)

**Tailwind Config:**
- Add all custom colors to extend theme
- Add custom animations (blob, float, fade-in, scale-in)
- Add custom shadows
- Add custom gradients to backgroundImage

**Database (Supabase):**
- Table: `form_submissions`
- Columns: id, first_name, last_name, email, phone, company, industry, monthly_budget, primary_goal, target_audience, current_marketing (array), current_challenges, status, created_at

## Design Details

**Button Variants:**
- Default: Gradient background, white text, shadow, hover scale
- Outline: Transparent background, border, hover fill
- Hero: Special hero variant with glow effect

**Card Style:**
- White background (light mode), dark background (dark mode)
- Rounded corners (lg)
- Shadow on hover
- Smooth transitions

**Animations:**
- Blob floating animation for background elements
- Fade-in on scroll
- Counter animations for stats
- Smooth hover effects (scale, shadow increase)

**Typography Hierarchy:**
- H1: 3xl-6xl, font-bold, gradient text
- H2: 2xl-5xl, font-bold
- H3: xl-3xl, font-semibold
- Body: base-lg, font-normal
- All using Inter font

## Color Usage

- Primary blue (#4F7BFF / hsl(221, 83%, 53%)): CTAs, links, accents
- Secondary purple (#A855F7 / hsl(262, 83%, 58%)): Gradient endpoints
- Background: White/light gray in light mode, dark charcoal in dark mode
- Text: Charcoal in light mode, light gray in dark mode
- Always use semantic tokens (--primary, --background, --foreground, etc.)

## Image Placeholders

Use placeholder images for:
- Hero person image (professional marketing person)
- Client logos (use generic brand logos or create simple SVG placeholders)
- Team member photos (use placeholder profile images)
- Office/company photos
- Service icons (use lucide-react icons)

---

**Additional Instructions:**
- Install required dependencies: react-helmet, lucide-react
- Set up Supabase connection for form submissions
- Ensure all components are properly typed with TypeScript
- Use shadcn/ui components where appropriate (Button, Card, Dialog, etc.)
- Implement proper loading states and error handling
- Add smooth scroll behavior
- Include proper meta tags and SEO optimization
- Make sure all colors use HSL format and semantic tokens
- Use the OptimizedImage component for all images with proper alt text
- Ensure mobile responsiveness with proper touch targets (min 44px)
- Add JSON-LD schema markup for SEO
