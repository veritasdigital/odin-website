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
import odinLogoGradient from "@/assets/odin-logo-gradient.png";

export const Header = () => {
  const { openForm } = useMarketingForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            aria-label="Odin Digital - Home"
          >
            <img 
              src={odinLogoGradient} 
              alt="Odin Digital" 
              className="h-10 w-auto"
              width="200"
              height="40"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium transition-colors cursor-pointer text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1 bg-transparent border-0">
                <span>Services</span>
                <ChevronDown size={16} aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 w-56 bg-background border border-border shadow-xl rounded-lg p-2 mt-2 max-h-[70vh] overflow-y-auto">
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
            <a href="/about" className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1">
              About
            </a>
            <a href="/our-clients" className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1">
              Our Clients
            </a>
            <a href="/blog" className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1">
              Blog
            </a>
            <a href="/contact" className="font-medium transition-colors text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1">
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
            className="md:hidden p-2 transition-colors text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-charcoal/10 pt-6">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              <div>
                <div className="text-charcoal font-medium py-2 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <a href="/services/social-media" className="block text-charcoal/70 hover:text-primary py-1">Social Media Marketing</a>
                  <a href="/services/google-ads" className="block text-charcoal/70 hover:text-primary py-1">Google Ads</a>
                  <a href="/services/website-design" className="block text-charcoal/70 hover:text-primary py-1">Website Design</a>
                  <a href="/services/seo" className="block text-charcoal/70 hover:text-primary py-1">SEO</a>
                  <a href="/services/marketing-consulting" className="block text-charcoal/70 hover:text-primary py-1">Marketing Consulting</a>
                  <a href="/services/funnel-development" className="block text-charcoal/70 hover:text-primary py-1">Funnel Development</a>
                </div>
              </div>
              <a href="/our-clients" className="text-charcoal/70 hover:text-primary font-medium py-2">Our Clients</a>
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