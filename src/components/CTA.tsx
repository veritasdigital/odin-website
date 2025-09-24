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
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Ready to Conquer Your Market?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
          The digital battlefield rewards the bold and punishes the hesitant. While your competitors struggle with outdated tactics, you can dominate with proven strategies that deliver real results.
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          Schedule your strategic consultation or get your free digital audit today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-4">Strategic Consultation</h3>
            <p className="text-white/80 mb-6">
              Speak with one of our senior strategists to discuss your goals and discover how Odin Digital can accelerate your growth.
            </p>
            <Button variant="cta" size="lg" className="w-full">
              SCHEDULE CONSULTATION
            </Button>
          </Card>

          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-4">Free Digital Audit</h3>
            <p className="text-white/80 mb-6">
              Receive a comprehensive analysis of your current digital marketing performance and strategic recommendations.
            </p>
            <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
              GET FREE AUDIT
            </Button>
          </Card>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-white/70 mb-2">
            <strong>P.S.</strong> Every day you delay is another day your competitors gain ground. The businesses that dominate tomorrow are the ones that take strategic action today.
          </p>
          <p className="text-white/60 text-sm">
            <strong>P.P.S.</strong> Our client roster is selective. We only work with businesses that are serious about growth and committed to implementing winning strategies. If that's you, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
};