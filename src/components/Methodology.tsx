import { Search, Settings, TrendingUp, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { OptimizedImage } from '@/components/OptimizedImage';
import brandIconVibrant from "@/assets/brand-icon-vibrant.png";
import { OptimizedImage } from '@/components/OptimizedImage';

export const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: "Comprehensive Analysis & Strategy Development",
      description: "We begin each engagement with thorough market research, competitive analysis, and customer insight development. This foundation enables us to create targeted strategies aligned with your specific business objectives and market opportunities."
    },
    {
      icon: Settings,
      title: "Systematic Implementation & Execution",
      description: "Our experienced team implements campaigns with precision and attention to detail, utilizing best practices and proven methodologies. We maintain consistent communication and provide regular updates throughout the execution process."
    },
    {
      icon: TrendingUp,
      title: "Continuous Monitoring & Optimization",
      description: "Digital marketing success requires ongoing attention and refinement. We continuously monitor campaign performance, analyze results, and implement strategic improvements to maintain and enhance your competitive advantage."
    },
    {
      icon: FileText,
      title: "Transparent Reporting & Communication",
      description: "We provide detailed performance reports and maintain open communication channels to ensure you have complete visibility into campaign results and strategic recommendations for continued growth."
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Our Strategic Approach to Digital Marketing Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group relative p-8 bg-white border border-charcoal/10 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              {/* Brand icon accent on hover */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <OptimizedImage src={brandIconVibrant} alt="" className="w-full h-full" loading="lazy"  sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              
              <div className="relative z-10 flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-charcoal mb-4">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};