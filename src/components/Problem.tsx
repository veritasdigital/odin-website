import { AlertTriangle, TrendingDown, Target, Clock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Problem = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Fragmented Marketing Efforts",
      description: "Disconnected campaigns across multiple platforms that fail to create cohesive customer journeys or maximize return on investment."
    },
    {
      icon: Target,
      title: "Lack of Strategic Direction",
      description: "Tactical execution without comprehensive strategy, leading to wasted resources and missed opportunities for sustainable growth."
    },
    {
      icon: AlertTriangle,
      title: "Insufficient Performance Measurement",
      description: "Limited visibility into campaign effectiveness and customer acquisition costs, making it difficult to optimize marketing spend."
    },
    {
      icon: Clock,
      title: "Resource Constraints",
      description: "Internal teams lacking specialized expertise or bandwidth to manage complex, multi-channel digital marketing initiatives effectively."
    },
    {
      icon: Zap,
      title: "Rapidly Evolving Landscape",
      description: "Difficulty staying current with platform changes, algorithm updates, and emerging marketing technologies that impact campaign performance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            The Digital Marketing Challenge Facing Growing Businesses
          </h2>
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            In today's competitive digital landscape, many businesses struggle to achieve consistent, measurable results from their marketing investments. Common challenges include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.slice(0, 3).map((challenge, index) => (
            <Card key={index} className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
              <challenge.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-charcoal mb-4">{challenge.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{challenge.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {challenges.slice(3).map((challenge, index) => (
            <Card key={index + 3} className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
              <challenge.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-charcoal mb-4">{challenge.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};