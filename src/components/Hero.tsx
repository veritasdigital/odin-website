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
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="relative z-30 overflow-visible text-4xl md:text-6xl xl:text-7xl font-black text-charcoal leading-[1.1] tracking-tight font-inter">
              <span className="block mb-2">Conquer Your</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-1">
                Digital Landscape
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-charcoal/80 font-bold max-w-lg font-playfair">
              Performance-Driven Digital Marketing Excellence
            </h2>
            
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-lg font-inter">
              We deploy data-driven marketing strategies engineered for exponential growth. 
              Our battle-tested methodologies have generated over $50M in verified client revenue 
              with an average ROI of 340%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="xl" className="shadow-primary text-lg px-10 py-4 font-bold font-inter">
                Deploy Your Growth Strategy
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-10 py-4 font-bold border-charcoal/20 hover:bg-charcoal/5 font-inter">
                Request Strategic Audit
              </Button>
            </div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-charcoal/10">
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-1 text-primary font-playfair">200+</div>
                <div className="text-xs font-medium text-charcoal/70 uppercase tracking-wide font-inter">Enterprise Clients</div>
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-1 text-primary font-playfair">$50M+</div>
                <div className="text-xs font-medium text-charcoal/70 uppercase tracking-wide font-inter">Revenue Generated</div>
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-1 text-primary font-playfair">340%</div>
                <div className="text-xs font-medium text-charcoal/70 uppercase tracking-wide font-inter">Average ROI</div>
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
              
              {/* Executive Leadership Banner */}
              <div className="absolute bottom-8 -left-4 right-8 bg-white/85 backdrop-blur-lg border border-white/50 rounded-xl shadow-lg p-4 z-10">
                <div className="text-charcoal">
                  <h3 className="font-bold text-lg font-playfair">Alexa Blake</h3>
                  <p className="text-sm text-charcoal/70 font-inter">General Manager, Strategic Operations</p>
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