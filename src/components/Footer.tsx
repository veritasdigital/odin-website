import { Button } from "@/components/ui/button";
import odinLogo from "@/assets/odin-digital-logo.png";

export const Footer = () => {
  return (
    <footer data-nav-contrast="dark" id="contact" className="bg-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={odinLogo} alt="Odin Digital" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Strategic Digital Marketing Excellence. Empowering ambitious businesses to achieve exponential growth through data-driven strategies and proven methodologies.
            </p>
            <Button variant="hero" size="lg">
              Connect with Our Digital Marketing Experts
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect with Our Digital Marketing Experts</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-semibold text-white">Phone:</p>
                <p>1-800-ODIN-DIGITAL</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <p>hello@odindigital.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Address:</p>
                <p>[Your Business Address]</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-white/80 hover:text-white transition-smooth">Services</a>
                <a href="#results" className="block text-white/80 hover:text-white transition-smooth">Results</a>
                <a href="#methodology" className="block text-white/80 hover:text-white transition-smooth">Methodology</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Odin Digital. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Results vary based on industry, market conditions, and implementation of recommended strategies. 
              All performance metrics represent verified client data and collaborative achievements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};