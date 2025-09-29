import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const CTA = () => {
  return <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{
      animationDelay: '3s'
    }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{
      animationDelay: '1s'
    }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Begin Your Digital Marketing Transformation
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
          The digital marketplace continues to evolve rapidly, creating new opportunities for businesses that implement strategic, data-driven marketing approaches. Companies that invest in comprehensive digital marketing strategies today position themselves for sustainable competitive advantages.
        </p>

        <div className="flex justify-center mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-md">
            <h3 className="text-2xl font-bold mb-4">Schedule Your Strategic Consultation</h3>
            <p className="text-white/80 mb-6">
              Meet with one of our senior digital marketing strategists to discuss your business objectives and explore how our services can contribute to your growth goals.
            </p>
            <Button variant="cta" size="lg" className="w-full">
              SCHEDULE CONSULTATION
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};