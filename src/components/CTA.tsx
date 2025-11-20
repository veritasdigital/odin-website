import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import brandIconVibrant from "@/assets/brand-icon-vibrant.png";
import { OptimizedImage } from '@/components/OptimizedImage';
export const CTA = () => {
  const { openForm } = useMarketingForm();

  return <section data-nav-contrast="dark" className="py-24 gradient-primary relative overflow-hidden">
      {/* Background Brand Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OptimizedImage 
          src={brandIconVibrant} 
          alt="" 
          sizes="(max-width: 768px) 100vw, 50vw" 
          className="absolute top-10 left-10 w-40 h-40 opacity-10 animate-[spin_15s_linear_infinite]" />
        <OptimizedImage 
          src={brandIconVibrant} 
          alt="" 
          sizes="(max-width: 768px) 100vw, 50vw" 
          className="absolute bottom-20 right-20 w-32 h-32 opacity-10 animate-[spin_20s_linear_infinite_reverse]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Begin Your Digital Marketing Transformation
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
          The digital marketplace continues to evolve rapidly, creating new opportunities for businesses that implement strategic, data-driven marketing approaches. Companies that invest in comprehensive digital marketing strategies today position themselves for sustainable competitive advantages.
        </p>

        <div className="flex justify-center mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-md">
            <h2 className="text-2xl font-bold mb-4">Schedule Your Strategic Consultation</h2>
            <p className="text-white/80 mb-6">
              Meet with one of our senior digital marketing strategists to discuss your business objectives and explore how our services can contribute to your growth goals.
            </p>
            <Button variant="cta" size="lg" className="w-full" onClick={openForm}>
              SCHEDULE CONSULTATION
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};