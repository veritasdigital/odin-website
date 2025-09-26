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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Conquer Your
            <span className="block bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Digital Landscape
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold mb-8 max-w-4xl mx-auto">
            Strategic Digital Marketing That Delivers Measurable Growth
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            At Odin Digital, we combine ancient wisdom with cutting-edge strategy to help ambitious businesses dominate their markets. Our data-driven approach and battle-tested methodologies have generated over $50M in client revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="cta" size="xl" className="animate-pulse-glow">
              CLAIM YOUR DIGITAL THRONE
            </Button>
            <Button variant="hero" size="xl">
              GET FREE AUDIT
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90 border-t border-white/20 pt-12">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">200+ Businesses</div>
            <div className="text-sm opacity-80">Trusted by</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">$50M+ Revenue</div>
            <div className="text-sm opacity-80">Generated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">340% Average ROI</div>
            <div className="text-sm opacity-80">Return on Investment</div>
          </div>
        </div>
      </div>
    </section>
  );
};