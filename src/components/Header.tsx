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
      const x = Math.min(Math.max(rect.left + rect.width / 2, 0), window.innerWidth - 1);
      const y = Math.min(Math.max(rect.top + rect.height / 2, 0), window.innerHeight - 1);

      const elements = document.elementsFromPoint(x, y);
      const overDark = elements.some((el) => {
        if (el === header) return false;
        return (el as HTMLElement).closest('[data-nav-contrast="dark"]');
      });

      setIsOverDarkSection(!!overDark);
    };

    window.addEventListener('scroll', updateContrast, { passive: true } as AddEventListenerOptions);
    window.addEventListener('resize', updateContrast);
    updateContrast();

    return () => {
      window.removeEventListener('scroll', updateContrast as EventListener);
      window.removeEventListener('resize', updateContrast as EventListener);
    };
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
          <div className="md:hidden mt-6 pb-6 border-t border-charcoal/10 pt-6">
            <nav className="flex flex-col space-y-4">
              <div>
                <div className="text-charcoal font-medium py-2 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <a href="/services/google-ads" className="block text-charcoal/70 hover:text-primary py-1">Google Ads</a>
                  <a href="/services/seo" className="block text-charcoal/70 hover:text-primary py-1">SEO</a>
                  <a href="/services/social-media" className="block text-charcoal/70 hover:text-primary py-1">Social Media Marketing</a>
                  <a href="/social-media-advertising-adelaide" className="block text-charcoal/70 hover:text-primary py-1">Social Media Ads Adelaide</a>
                  <a href="/social-media-advertising-brisbane" className="block text-charcoal/70 hover:text-primary py-1">Social Media Ads Brisbane</a>
                  <a href="/social-media-advertising-sydney" className="block text-charcoal/70 hover:text-primary py-1">Social Media Ads Sydney</a>
                  <a href="/social-media-advertising-melbourne" className="block text-charcoal/70 hover:text-primary py-1">Social Media Ads Melbourne</a>
                  <a href="/linkedin-advertising" className="block text-charcoal/70 hover:text-primary py-1">LinkedIn Advertising</a>
                  <a href="/website-design-and-development" className="block text-charcoal/70 hover:text-primary py-1">Website Design</a>
                  <a href="/web-design-melbourne" className="block text-charcoal/70 hover:text-primary py-1">Web Design Melbourne</a>
                  <a href="/web-design-perth" className="block text-charcoal/70 hover:text-primary py-1">Web Design Perth</a>
                  <a href="/services/website-design" className="block text-charcoal/70 hover:text-primary py-1">Website Design (Old)</a>
                  <a href="/services/funnel-development" className="block text-charcoal/70 hover:text-primary py-1">Funnel Development</a>
                  <a href="/services/marketing-consulting" className="block text-charcoal/70 hover:text-primary py-1">Marketing Consulting</a>
                </div>
              </div>
              <a href="/web-design-perth" className="text-charcoal/70 hover:text-primary font-medium py-2">Web Design</a>
              <a href="/about" className="text-charcoal/70 hover:text-primary font-medium py-2">About</a>
              <a href="/blog" className="text-charcoal/70 hover:text-primary font-medium py-2">Blog</a>
              <a href="/contact" className="text-charcoal/70 hover:text-primary font-medium py-2">Contact</a>
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