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
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Investment & Packages
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Choose the perfect package to accelerate your business growth with our proven marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`p-8 ${pkg.featured ? 'border-primary shadow-xl scale-105' : ''} hover:shadow-lg transition-all`}>
              {pkg.featured && (
                <div className="bg-primary text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-6 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.title}</h3>
              <p className="text-charcoal/70 mb-6">{pkg.subtitle}</p>
              <div className="mb-8">
                <p className="text-3xl font-black text-primary">{pkg.price}</p>
                <p className="text-charcoal/60 text-sm">{pkg.period}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={pkg.featured ? "default" : "outline"}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};