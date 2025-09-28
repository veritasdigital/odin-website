import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-playfair">
          Deploy Your Growth Strategy
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed font-inter">
          Transform your business with data-driven marketing strategies that deliver measurable results. 
          Our proven methodologies have generated over $50M in client revenue with an average ROI of 340%.
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto font-inter">
          Schedule your executive strategy session or receive your comprehensive digital performance audit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Executive Strategy Session</h3>
            <p className="text-white/80 mb-6 font-inter">
              Engage with our senior strategic advisors to analyze your growth objectives and develop 
              a customized roadmap for exponential business expansion.
            </p>
            <Button variant="cta" size="lg" className="w-full font-inter font-semibold">
              SCHEDULE EXECUTIVE SESSION
            </Button>
          </Card>

          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Comprehensive Digital Audit</h3>
            <p className="text-white/80 mb-6 font-inter">
              Receive an in-depth analysis of your current digital performance with actionable 
              strategic recommendations and ROI projections.
            </p>
            <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 font-inter font-semibold">
              REQUEST PERFORMANCE AUDIT
            </Button>
          </Card>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-white/70 mb-2 font-inter">
            <strong>Strategic Note:</strong> Market leadership requires decisive action. Organizations that invest in proven 
            growth strategies today secure competitive advantages that compound over time.
          </p>
          <p className="text-white/60 text-sm font-inter">
            <strong>Partnership Criteria:</strong> We maintain a selective client portfolio, partnering exclusively with 
            growth-oriented organizations committed to implementing performance-driven strategies. If this aligns with your objectives, we invite you to connect.
          </p>
        </div>
      </div>
    </section>
  );
};