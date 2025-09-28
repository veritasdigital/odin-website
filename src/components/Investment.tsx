import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Investment = () => {
  const packages = [
    {
      title: "Growth Acceleration Program",
      subtitle: "Comprehensive digital marketing for established businesses",
      price: "Starting at $5,000",
      period: "per month plus advertising spend",
      features: [
        "Multi-channel campaign development and management",
        "Advanced optimization and performance testing",
        "Monthly strategic planning sessions",
        "Dedicated account management and support"
      ]
    },
    {
      title: "Market Leadership Program",
      subtitle: "Advanced strategies for businesses seeking market dominance",
      price: "Starting at $10,000",
      period: "per month plus advertising spend",
      features: [
        "Comprehensive digital marketing strategy development",
        "Full-service campaign management across all channels",
        "Weekly optimization and detailed performance reporting",
        "Priority support and strategic consultation"
      ],
      featured: true
    },
    {
      title: "Enterprise Partnership",
      subtitle: "Customized solutions for large organizations",
      price: "Custom pricing",
      period: "based on scope and specific requirements",
      features: [
        "Fully customized marketing strategies and implementation",
        "Dedicated team and specialized resources",
        "Advanced reporting and business intelligence",
        "Executive-level strategic consultation and planning"
      ]
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Professional Digital Marketing Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-white border hover:border-primary/20 transition-colors relative ${
                pkg.featured ? 'border-primary/20 shadow-lg scale-105' : 'border-charcoal/10'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.title}</h3>
                <p className="text-charcoal/70 mb-6">{pkg.subtitle}</p>
                <div className="mb-6">
                  <span className="text-3xl font-black text-primary">{pkg.price}</span>
                  <p className="text-sm text-charcoal/70 mt-1">{pkg.period}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.featured ? "default" : "outline"} 
                size="lg" 
                className="w-full font-semibold"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};