import { Search, Wrench, Rocket, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Process = () => {
  const phases = [
    {
      icon: Search,
      title: "Discovery & Strategic Planning",
      timeframe: "Weeks 1-2",
      tasks: [
        "Comprehensive business and market analysis",
        "Competitive landscape assessment",
        "Target audience research and persona development",
        "Strategic roadmap and campaign planning"
      ]
    },
    {
      icon: Wrench,
      title: "Campaign Development & Setup",
      timeframe: "Weeks 3-4",
      tasks: [
        "Creative asset development and optimization",
        "Landing page creation and conversion optimization",
        "Analytics and tracking system implementation",
        "Campaign launch preparation and testing"
      ]
    },
    {
      icon: Rocket,
      title: "Launch & Initial Optimization",
      timeframe: "Weeks 5-8",
      tasks: [
        "Campaign launch and performance monitoring",
        "Initial performance analysis and optimization",
        "Regular reporting and strategic communication",
        "Continuous improvement implementation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Scale & Long-term Optimization",
      timeframe: "Ongoing",
      tasks: [
        "Successful campaign scaling and expansion",
        "New channel exploration and testing",
        "Advanced strategy implementation",
        "Long-term growth planning and execution"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Our Systematic Approach to Digital Marketing Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <phase.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-charcoal">{phase.title}</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {phase.timeframe}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-charcoal/70 flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};