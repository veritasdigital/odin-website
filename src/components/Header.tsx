import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={odinLogo} alt="Odin Digital" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#results" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Results
            </a>
            <a href="#methodology" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Strategy
            </a>
            <a href="#contact" className="text-charcoal/70 hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" className="font-medium">
              Get Free Audit
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
              <a href="#services" className="text-charcoal/70 hover:text-primary font-medium py-2">Services</a>
              <a href="#results" className="text-charcoal/70 hover:text-primary font-medium py-2">Results</a>
              <a href="#methodology" className="text-charcoal/70 hover:text-primary font-medium py-2">Strategy</a>
              <a href="#contact" className="text-charcoal/70 hover:text-primary font-medium py-2">Contact</a>
              <Button variant="default" size="lg" className="mt-4 w-full font-medium">
                Get Free Audit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};