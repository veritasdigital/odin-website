import { TrendingUp, Eye, Clock, ArrowUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Assurance = () => {
  const commitments = [
    {
      icon: TrendingUp,
      title: "Performance-Focused Partnership",
      description: "We are committed to delivering measurable improvements in your key performance indicators. Our success is directly tied to your business growth and marketing ROI."
    },
    {
      icon: Eye,
      title: "Transparent Communication",
      description: "You will have complete visibility into campaign performance through detailed monthly reports and real-time dashboard access, ensuring full transparency in all marketing activities."
    },
    {
      icon: Clock,
      title: "Flexible Engagement Terms",
      description: "We believe in earning your continued partnership through consistent results. Our engagement terms are designed to provide flexibility while ensuring adequate time for strategy implementation and optimization."
    },
    {
      icon: ArrowUp,
      title: "Continuous Improvement",
      description: "Our team is committed to staying current with industry best practices and emerging technologies to ensure your marketing strategies remain effective and competitive."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Our Commitment to Your Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <Card key={index} className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <commitment.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-charcoal mb-4">{commitment.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};