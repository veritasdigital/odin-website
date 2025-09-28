import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
export const Investment = () => {
  const packages = [{
    title: "Growth Acceleration Program",
    subtitle: "Comprehensive digital marketing for established businesses",
    price: "Starting at $5,000",
    period: "per month plus advertising spend",
    features: ["Multi-channel campaign development and management", "Advanced optimization and performance testing", "Monthly strategic planning sessions", "Dedicated account management and support"]
  }, {
    title: "Market Leadership Program",
    subtitle: "Advanced strategies for businesses seeking market dominance",
    price: "Starting at $10,000",
    period: "per month plus advertising spend",
    features: ["Comprehensive digital marketing strategy development", "Full-service campaign management across all channels", "Weekly optimization and detailed performance reporting", "Priority support and strategic consultation"],
    featured: true
  }, {
    title: "Enterprise Partnership",
    subtitle: "Customized solutions for large organizations",
    price: "Custom pricing",
    period: "based on scope and specific requirements",
    features: ["Fully customized marketing strategies and implementation", "Dedicated team and specialized resources", "Advanced reporting and business intelligence", "Executive-level strategic consultation and planning"]
  }];
  
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investment Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right digital marketing investment for your business growth goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative p-8 ${pkg.featured ? 'border-primary shadow-lg' : ''}`}>
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground mb-4">{pkg.subtitle}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={pkg.featured ? "default" : "outline"} 
                className="w-full"
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