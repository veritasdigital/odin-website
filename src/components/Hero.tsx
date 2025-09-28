import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-white/20 rounded-lg animate-float" />
      <div className="absolute top-40 right-20 w-12 h-12 border border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-white/10 rounded-lg animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 leading-tight tracking-tight">
            <span className="block">Conquer Your</span>
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Digital Landscape
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-8 max-w-5xl mx-auto tracking-wide">
            Strategic Digital Marketing That Delivers Measurable Growth
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We combine data-driven strategies with creative innovation to deliver measurable results. Our proven methodologies have generated over $50M in client revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button variant="cta" size="xl" className="animate-pulse-glow text-lg px-12 py-6 font-bold tracking-wide">
              START YOUR DOMINANCE
            </Button>
            <Button variant="hero" size="xl" className="text-lg px-12 py-6 font-bold tracking-wide">
              GET FREE STRATEGY AUDIT
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white border-t border-primary/30 pt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black mb-3 text-primary">200+</div>
            <div className="text-lg font-semibold tracking-wide">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black mb-3 text-primary">$50M+</div>
            <div className="text-lg font-semibold tracking-wide">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black mb-3 text-primary">340%</div>
            <div className="text-lg font-semibold tracking-wide">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};