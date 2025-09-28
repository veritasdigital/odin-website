import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative isolate overflow-visible min-h-screen flex items-center justify-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        <div className="animate-slide-up">
          <h1 className="relative z-30 overflow-visible text-5xl md:text-7xl lg:text-8xl font-black text-charcoal mb-16 leading-[1.25] tracking-tight pb-3">
            <span className="block mb-4">Conquer Your</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-1">
              Digital Landscape
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 font-bold mb-8 max-w-4xl mx-auto">
            Strategic Digital Marketing That Delivers Measurable Growth
          </h2>
          
          <p className="text-lg md:text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            We combine data-driven strategies with creative innovation to deliver measurable results. 
            Our proven methodologies have generated over $50M in client revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="default" size="xl" className="shadow-primary text-lg px-10 py-4 font-bold">
              Start Your Growth
            </Button>
            <Button variant="outline" size="xl" className="text-lg px-10 py-4 font-bold border-charcoal/20 hover:bg-charcoal/5">
              Get Free Strategy Audit
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-charcoal border-t border-charcoal/10 pt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">200+</div>
            <div className="text-sm font-medium text-charcoal/70 uppercase tracking-wide">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">$50M+</div>
            <div className="text-sm font-medium text-charcoal/70 uppercase tracking-wide">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">340%</div>
            <div className="text-sm font-medium text-charcoal/70 uppercase tracking-wide">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};