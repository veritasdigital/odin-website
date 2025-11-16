import { Search, Wrench, Rocket, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
export const Process = () => {
  const phases = [{
    icon: Search,
    title: "Discovery & Strategic Planning",
    timeframe: "Weeks 1-2",
    tasks: ["Comprehensive business and market analysis", "Competitive landscape assessment", "Target audience research and persona development", "Strategic roadmap and campaign planning"]
  }, {
    icon: Wrench,
    title: "Campaign Development & Setup",
    timeframe: "Weeks 3-4",
    tasks: ["Creative asset development and optimization", "Landing page creation and conversion optimization", "Analytics and tracking system implementation", "Campaign launch preparation and testing"]
  }, {
    icon: Rocket,
    title: "Launch & Initial Optimization",
    timeframe: "Weeks 5-8",
    tasks: ["Campaign launch and performance monitoring", "Initial performance analysis and optimization", "Regular reporting and strategic communication", "Continuous improvement implementation"]
  }, {
    icon: TrendingUp,
    title: "Scale & Long-term Optimization",
    timeframe: "Ongoing",
    tasks: ["Successful campaign scaling and expansion", "New channel exploration and testing", "Advanced strategy implementation", "Long-term growth planning and execution"]
  }];
  
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Our Process
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            A proven methodology that delivers consistent results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{phase.title}</h3>
                <p className="text-primary font-medium mb-4">{phase.timeframe}</p>
                <ul className="text-sm text-charcoal/70 space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>• {task}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};