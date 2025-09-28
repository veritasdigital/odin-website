import { Users, Lightbulb, Cpu, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Team = () => {
  const teamCategories = [
    {
      icon: Users,
      title: "Strategic Leadership Team",
      description: "Our senior strategists bring extensive experience from leading digital agencies and Fortune 500 companies. They provide strategic direction and ensure campaign alignment with your business objectives."
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Our creative professionals develop compelling campaign assets that effectively communicate your value proposition and drive prospect engagement across all marketing channels."
    },
    {
      icon: Cpu,
      title: "Technical Expertise",
      description: "Our technical specialists ensure flawless campaign implementation, advanced tracking and analytics setup, and seamless integration with your existing business systems."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Account Management",
      description: "Your dedicated account team provides consistent communication, detailed performance reporting, and strategic guidance to ensure your campaigns deliver optimal value and results."
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Experienced Digital Marketing Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamCategories.map((category, index) => (
            <Card key={index} className="p-8 bg-white border border-charcoal/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-4">{category.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};