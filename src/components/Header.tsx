import { Button } from "@/components/ui/button";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Professional Tagline */}
          <a href="/" className="flex items-center space-x-3 group">
            <img src={odinLogo} alt="Odin Digital" className="h-14 w-auto transition-transform group-hover:scale-105" />
            <div className="hidden lg:block">
              <div className="text-xs text-charcoal/60 font-medium tracking-wide">
                Performance-Driven Digital Marketing Excellence
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-charcoal/70 hover:text-primary font-medium transition-colors cursor-pointer">
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
            <a href="#about" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              About
            </a>
            <a href="#results" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Results
            </a>
            <a href="#blog" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
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
            className="md:hidden text-charcoal p-2"
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