import { Button } from "@/components/ui/button";
import heroPerson from "@/assets/hero-person.webp";

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>
      
      {/* Split Screen Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
          
          {/* Left Side - Text Content */}
          <div className="space-y-12 lg:space-y-16 animate-slide-up max-w-2xl">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="relative z-30 overflow-visible text-5xl md:text-6xl xl:text-8xl font-black text-charcoal leading-[0.95] tracking-tight">
                <span className="block mb-4 lg:mb-6">Conquer Your</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Digital Landscape
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-charcoal/90 font-bold leading-tight max-w-xl">
                Strategic Digital Marketing That Delivers Measurable Growth
              </h2>
              
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-xl font-light">
                We combine data-driven strategies with creative innovation to deliver measurable results. 
                Our proven methodologies have generated over $50M in client revenue.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button variant="default" size="xl" className="shadow-primary text-xl px-12 py-6 font-bold min-h-[60px]">
                Start Your Growth
              </Button>
              <Button variant="outline" size="xl" className="text-xl px-12 py-6 font-bold border-charcoal/20 hover:bg-charcoal/5 min-h-[60px]">
                Get Free Strategy Audit
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 pt-12 mt-12 border-t border-charcoal/10">
              <div className="text-left space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-primary">200+</div>
                <div className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider">Businesses</div>
              </div>
              <div className="text-left space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-primary">$50M+</div>
                <div className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider">Revenue</div>
              </div>
              <div className="text-left space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-primary">340%</div>
                <div className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider">ROI</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Person Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Person Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg">
                <img 
                  src={heroPerson} 
                  alt="Alexa Blake, Odin Digital General Manager" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating Glassy Banner */}
              <div className="absolute bottom-8 -left-4 right-8 bg-white/80 backdrop-blur-lg border border-white/40 rounded-xl shadow-lg p-4 z-10">
                <div className="text-charcoal">
                  <h3 className="font-bold text-lg">Alexa Blake</h3>
                  <p className="text-sm text-charcoal/70">Odin Digital General Manager</p>
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 -left-8 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};