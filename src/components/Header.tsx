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
      const header = document.querySelector('header');
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const headerCenter = headerRect.top + headerRect.height / 2;

      // Check if header is over dark sections
      const elementsAtPoint = document.elementsFromPoint(window.innerWidth / 2, headerCenter);
      
      for (const element of elementsAtPoint) {
        if (element === header) continue;
        
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        const bgImage = computedStyle.backgroundImage;
        
        // Check for dark backgrounds or specific dark sections
        const isDark = 
          bgColor.includes('rgb(0, 0, 0)') || // black
          bgColor.includes('rgba(0, 0, 0') || // black with alpha
          bgImage.includes('gradient') && bgImage.includes('rgb(0') || // dark gradients
          element.classList.contains('bg-charcoal') ||
          element.classList.contains('bg-black') ||
          element.classList.contains('bg-primary') ||
          element.closest('.bg-charcoal') ||
          element.closest('.bg-black') ||
          element.closest('.bg-primary');
        
        if (isDark) {
          setIsOverDarkSection(true);
          return;
        }
      }
      
      setIsOverDarkSection(false);
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