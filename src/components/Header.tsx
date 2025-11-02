import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import odinLogo from "@/assets/odin-digital-logo.png";

export const Header = () => {
  const { openForm } = useMarketingForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateContrast = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const rect = header.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get elements at multiple points to better detect background
      const points = [
        { x: centerX, y: centerY },
        { x: rect.left + 100, y: centerY },
        { x: rect.right - 100, y: centerY }
      ];

      let isDark = false;
      
      for (const point of points) {
        const x = Math.min(Math.max(point.x, 0), window.innerWidth - 1);
        const y = Math.min(Math.max(point.y, 0), window.innerHeight - 1);

        const elements = document.elementsFromPoint(x, y);
        
        // Check for explicit dark contrast marker
        const hasMarker = elements.some((el) => {
          if (el === header) return false;
          return (el as HTMLElement).closest('[data-nav-contrast="dark"]');
        });

        if (hasMarker) {
          isDark = true;
          break;
        }

        // Check computed background colors
        for (const el of elements) {
          if (el === header || el.tagName === 'HTML' || el.tagName === 'BODY') continue;
          
          const style = window.getComputedStyle(el);
          const bgColor = style.backgroundColor;
          
          if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            // Parse RGB values
            const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1]);
              const g = parseInt(match[2]);
              const b = parseInt(match[3]);
              
              // Calculate luminance
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              
              // If background is dark (luminance < 0.5), use white text
              if (luminance < 0.5) {
                isDark = true;
                break;
              }
            }
          }
        }
        
        if (isDark) break;
      }

      setIsOverDarkSection(isDark);
    };

    window.addEventListener('scroll', updateContrast, { passive: true } as AddEventListenerOptions);
    window.addEventListener('resize', updateContrast);
    
    // Run immediately and after a short delay to catch dynamic content
    updateContrast();
    const timeout = setTimeout(updateContrast, 100);

    return () => {
      window.removeEventListener('scroll', updateContrast as EventListener);
      window.removeEventListener('resize', updateContrast as EventListener);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
      isOverDarkSection 
        ? 'bg-charcoal/95 border-white/10' 
        : 'bg-white/98 border-charcoal/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src={odinLogo} alt="Odin Digital" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 font-medium transition-colors cursor-pointer ${
                isOverDarkSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'
              }`}>
                <span>Services</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 w-56 bg-background border border-border shadow-xl rounded-lg p-2 mt-2 max-h-[70vh] overflow-y-auto">
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/google-ads" className="w-full">Google Ads</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/seo" className="w-full">SEO</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/facebook-ads" className="w-full">Facebook Ads</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/social-media" className="w-full">Social Media Marketing</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/social-media-advertising-adelaide" className="w-full">Social Media Ads Adelaide</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/social-media-advertising-brisbane" className="w-full">Social Media Ads Brisbane</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/social-media-advertising-sydney" className="w-full">Social Media Ads Sydney</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/social-media-advertising-melbourne" className="w-full">Social Media Ads Melbourne</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/linkedin-advertising" className="w-full">LinkedIn Advertising</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/website-design-and-development" className="w-full">Website Design</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/web-design-melbourne" className="w-full">Web Design Melbourne</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/web-design-perth" className="w-full">Web Design Perth</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/website-design" className="w-full">Website Design (Old)</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/funnel-development" className="w-full">Funnel Development</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/marketing-consulting" className="w-full">Marketing Consulting</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/web-design-perth" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'
            }`}>
              Web Design
            </a>
            <a href="/about" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'
            }`}>
              About
            </a>
            <a href="/blog" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'
            }`}>
              Blog
            </a>
            <a href="/contact" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'
            }`}>
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button variant="cta" size="lg" className="font-medium" onClick={openForm}>
              Free Marketing Strategy
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isOverDarkSection ? 'text-white' : 'text-charcoal'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-6 pb-6 border-t pt-6 ${
            isOverDarkSection ? 'border-white/10' : 'border-charcoal/10'
          }`}>
            <nav className="flex flex-col space-y-4">
              <div>
                <div className={`font-medium py-2 mb-2 ${
                  isOverDarkSection ? 'text-white' : 'text-charcoal'
                }`}>Services</div>
                <div className="pl-4 space-y-2">
                  <a href="/services/google-ads" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Google Ads</a>
                  <a href="/services/seo" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>SEO</a>
                  <a href="/services/facebook-ads" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Facebook Ads</a>
                  <a href="/services/social-media" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Social Media Marketing</a>
                  <a href="/social-media-advertising-brisbane" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Social Media Ads Brisbane</a>
                  <a href="/social-media-advertising-sydney" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Social Media Ads Sydney</a>
                  <a href="/social-media-advertising-melbourne" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Social Media Ads Melbourne</a>
                  <a href="/linkedin-advertising" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>LinkedIn Advertising</a>
                  <a href="/website-design-and-development" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Website Design</a>
                  <a href="/web-design-melbourne" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Web Design Melbourne</a>
                  <a href="/web-design-perth" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Web Design Perth</a>
                  <a href="/services/website-design" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Website Design (Old)</a>
                  <a href="/services/funnel-development" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Funnel Development</a>
                  <a href="/services/marketing-consulting" className={`block py-1 transition-colors ${
                    isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
                  }`}>Marketing Consulting</a>
                </div>
              </div>
              <a href="/web-design-perth" className={`font-medium py-2 transition-colors ${
                isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
              }`}>Web Design</a>
              <a href="/about" className={`font-medium py-2 transition-colors ${
                isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
              }`}>About</a>
              <a href="/blog" className={`font-medium py-2 transition-colors ${
                isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
              }`}>Blog</a>
              <a href="/contact" className={`font-medium py-2 transition-colors ${
                isOverDarkSection ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-primary'
              }`}>Contact</a>
              <Button variant="cta" size="lg" className="mt-4 w-full font-medium" onClick={openForm}>
                Free Marketing Strategy
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};