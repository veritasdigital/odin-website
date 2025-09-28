import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import odinLogo from "@/assets/odin-digital-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Simple detection based on scroll position and known dark sections
      // You can adjust these values based on your actual section heights
      const heroHeight = 600; // Approximate hero section height
      const credibilityStart = heroHeight;
      const servicesStart = credibilityStart + 400;
      const resultsStart = servicesStart + 800;
      const ctaStart = resultsStart + 600;
      
      // Determine if we're over a dark section
      const isDark = 
        (scrollY < heroHeight) || // Hero section has dark background
        (scrollY >= ctaStart); // CTA section has dark background
      
      setIsOverDarkSection(isDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-charcoal/10">
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
                isOverDarkSection ? 'text-white hover:text-white/80' : 'text-charcoal/70 hover:text-primary'
              }`}>
                <span>Services</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-charcoal/10 shadow-lg z-50">
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  Google Ads
                </DropdownMenuItem>
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  SEO
                </DropdownMenuItem>
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  Social Media Marketing
                </DropdownMenuItem>
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  Website Design
                </DropdownMenuItem>
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  Funnel Development
                </DropdownMenuItem>
                <DropdownMenuItem className="text-charcoal hover:text-primary hover:bg-accent/10 cursor-pointer">
                  Marketing Consulting
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#about" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-charcoal/70 hover:text-primary'
            }`}>
              About
            </a>
            <a href="#results" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-charcoal/70 hover:text-primary'
            }`}>
              Results
            </a>
            <a href="#blog" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-charcoal/70 hover:text-primary'
            }`}>
              Blog
            </a>
            <a href="#contact" className={`font-medium transition-colors ${
              isOverDarkSection ? 'text-white hover:text-white/80' : 'text-charcoal/70 hover:text-primary'
            }`}>
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg" className="font-medium">
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
          <div className="md:hidden mt-6 pb-6 border-t border-charcoal/10 pt-6">
            <nav className="flex flex-col space-y-4">
              <div>
                <div className="text-charcoal font-medium py-2 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <a href="#google-ads" className="block text-charcoal/70 hover:text-primary py-1">Google Ads</a>
                  <a href="#seo" className="block text-charcoal/70 hover:text-primary py-1">SEO</a>
                  <a href="#social-media" className="block text-charcoal/70 hover:text-primary py-1">Social Media Marketing</a>
                  <a href="#website-design" className="block text-charcoal/70 hover:text-primary py-1">Website Design</a>
                  <a href="#funnel-development" className="block text-charcoal/70 hover:text-primary py-1">Funnel Development</a>
                  <a href="#marketing-consulting" className="block text-charcoal/70 hover:text-primary py-1">Marketing Consulting</a>
                </div>
              </div>
              <a href="#about" className="text-charcoal/70 hover:text-primary font-medium py-2">About</a>
              <a href="#results" className="text-charcoal/70 hover:text-primary font-medium py-2">Results</a>
              <a href="#blog" className="text-charcoal/70 hover:text-primary font-medium py-2">Blog</a>
              <a href="#contact" className="text-charcoal/70 hover:text-primary font-medium py-2">Contact</a>
              <Button variant="cta" size="lg" className="mt-4 w-full font-medium">
                Free Marketing Strategy
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};