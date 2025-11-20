/**
 * Critical CSS for above-the-fold content
 * Inlined in index.html to eliminate render-blocking and improve FCP
 */

export const CRITICAL_CSS = `
  /* Critical CSS Variables - Minimal subset for hero */
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 13%;
    --primary: 345 82% 48%;
    --primary-glow: 345 82% 60%;
    --secondary: 0 100% 24%;
    --charcoal: 0 0% 13%;
    --muted: 0 0% 96%;
    --gradient-primary: linear-gradient(135deg, hsl(345 82% 48%), hsl(345 75% 28%));
    --shadow-glow: 0 0 24px hsl(345 82% 60% / 0.15);
  }

  /* Critical base styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: hsl(0 0% 100%);
    color: hsl(0 0% 13%);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Hero section critical styles */
  .hero-gradient {
    background: linear-gradient(135deg, hsl(0 0% 96%) 0%, hsl(331 20% 95%) 100%);
  }

  /* Critical button styles */
  .btn-hero {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 1.5rem 3rem;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, hsl(345 82% 48%), hsl(345 75% 28%));
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  /* Prevent layout shift */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Hide non-critical content during initial load */
  .lazy-load {
    opacity: 0;
  }
`;
