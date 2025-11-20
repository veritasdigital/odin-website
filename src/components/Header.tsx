import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import odinLogoGradient from "@/assets/odin-logo-gradient.png";
import { OptimizedImage } from '@/components/OptimizedImage';

export const Header = () => {
  const { openForm } = useMarketingForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const menuButton = document.querySelector('[aria-label*="menu"]');
        if (menuButton && !menuButton.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background/90 backdrop-blur-sm'
      } border-b border-charcoal/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg z-50"
            aria-label="Odin Digital - Home"
          >
            <OptimizedImage 
              src={odinLogoGradient} 
              alt="Odin Digital" 
              sizes="200px" 
              width={200} 
              height={40} 
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation - Increased spacing */}
          <nav className="hidden md:flex items-baseline space-x-10 lg:space-x-12" aria-label="Main navigation">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 font-medium transition-colors cursor-pointer text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-3 py-2 bg-transparent border-0">
                  <span>Services</span>
                  <ChevronDown size={16} aria-hidden="true" className="flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[60] w-56 bg-background border border-border shadow-xl rounded-lg p-2 mt-2 max-h-[70vh] overflow-y-auto">
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/social-media" className="w-full">Social Media Marketing</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/google-ads" className="w-full">Google Ads</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/website-design" className="w-full">Website Design</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/seo" className="w-full">SEO</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/marketing-consulting" className="w-full">Marketing Consulting</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer transition-colors duration-200 focus:bg-accent focus:text-accent-foreground">
                  <a href="/services/funnel-development" className="w-full">Funnel Development</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a 
              href="/about" 
              className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-3 py-2"
            >
              About
            </a>
            <a 
              href="/our-clients" 
              className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-3 py-2"
            >
              Our Clients
            </a>
            <a 
              href="/blog" 
              className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-3 py-2"
            >
              Blog
            </a>
            <a 
              href="/contact" 
              className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-3 py-2"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="lg" 
              className="font-medium whitespace-nowrap" 
              onClick={openForm}
            >
              Free Marketing Strategy
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed left-0 right-0 top-16 sm:top-20 bg-background border-t border-charcoal/10 shadow-lg transition-all duration-300 ease-in-out overflow-y-auto z-50 ${
            isMenuOpen 
              ? 'max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="px-4 sm:px-6 py-6 space-y-1" aria-label="Mobile navigation">
            {/* Services Section */}
            <div className="mb-4">
              <div className="text-charcoal font-semibold text-sm uppercase tracking-wider mb-3 px-3">
                Services
              </div>
              <div className="space-y-1">
                <a 
                  href="/services/social-media" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  Social Media Marketing
                </a>
                <a 
                  href="/services/google-ads" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  Google Ads
                </a>
                <a 
                  href="/services/website-design" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  Website Design
                </a>
                <a 
                  href="/services/seo" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  SEO
                </a>
                <a 
                  href="/services/marketing-consulting" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  Marketing Consulting
                </a>
                <a 
                  href="/services/funnel-development" 
                  className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  Funnel Development
                </a>
              </div>
            </div>

            {/* Main Navigation Links */}
            <div className="border-t border-charcoal/10 pt-4 space-y-1">
              <a 
                href="/about" 
                className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-semibold"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a 
                href="/our-clients" 
                className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-semibold"
                onClick={handleLinkClick}
              >
                Our Clients
              </a>
              <a 
                href="/blog" 
                className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-semibold"
                onClick={handleLinkClick}
              >
                Blog
              </a>
              <a 
                href="/contact" 
                className="block text-charcoal/80 hover:text-primary hover:bg-accent/50 py-3 px-3 rounded-lg transition-colors font-semibold"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </div>

            {/* Mobile CTA Button */}
            <div className="border-t border-charcoal/10 pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full font-medium" 
                onClick={() => {
                  openForm();
                  setIsMenuOpen(false);
                }}
              >
                Free Marketing Strategy
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};