import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import odinLogo from "@/assets/odin-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={odinLogo} alt="Odin Digital" className="h-8 w-auto" />
            <span className="text-white font-bold text-xl">Odin Digital</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-smooth">Services</a>
            <a href="#results" className="text-white/80 hover:text-white transition-smooth">Results</a>
            <a href="#methodology" className="text-white/80 hover:text-white transition-smooth">Methodology</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-smooth">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10 pt-6">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-white/80 hover:text-white transition-smooth py-2">Services</a>
              <a href="#results" className="text-white/80 hover:text-white transition-smooth py-2">Results</a>
              <a href="#methodology" className="text-white/80 hover:text-white transition-smooth py-2">Methodology</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-smooth py-2">Contact</a>
              <Button variant="hero" size="lg" className="mt-4 w-full">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};